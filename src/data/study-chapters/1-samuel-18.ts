import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 18 — Jonathan's Covenant; Saul's Jealousy
 *
 * David enters the king's house as Saul's armor-bearer and leaves as Saul's mortal enemy.
 * The chapter opens with the binding covenant between Jonathan and David — one of Scripture's
 * great friendships, sealed by the prince stripping himself and giving David his own robe,
 * sword, and bow. But when the women sing "Saul hath slain his thousands, and David his ten
 * thousands," something breaks in Saul. The king's secret jealousy turns to overt murder, and
 * David must flee. This chapter traces the arc from covenant-love to covenantal hatred, and
 * shows how the presence of the Lord protects David even as Saul's own fear of David becomes
 * David's shield.
 */
export const SAMUEL_1_18: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 18,

  intros: [
    'David has just defeated the Philistine Goliath with a sling and a stone. He walks out of that valley a hero, and walks into the house of the king a man marked by the presence of God. In a single chapter, David will be bound by covenant to the king\'s son, exalted above all the king\'s servants, and hunted by the king himself. This is the chapter where Saul\'s envy begins to kill him.',
    'Jonathan and David\'s covenant has echoed through Scripture and through history as the portrait of sacrificial friendship — the kind of love that strips itself bare and gives. But that same chapter shows us Saul\'s slow descent into the kind of fear that breeds jealousy, and jealousy that breeds rage. Saul sees that the Lord is with David, and it terrifies him. Instead of seeking the Lord\'s face, Saul tries to kill the evidence of God\'s favor. The contrast is stark: Jonathan gives; Saul takes. Jonathan dies beside his father at the end of the book. David will live to become king.',
  ],

  opener: {
    matchTitle: /jonathan|david|covenant|friendship/i,
    matchArtist: /tissot|delacroix|doré/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 1 Samuel 18:1–4 — Jonathan Loves David ──────────────────────────── */
    {
      ref: '1 Samuel 18:1–4',
      title: 'Jonathan&apos;s Love and Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(1, 'And it came to pass, when he had made an end of speaking unto Saul, the soul of Jonathan was knit with the soul of David, and Jonathan loved him as his own soul.'),
            plain(2, 'Saul took David that day, and would let him go no more home to his father&apos;s house.'),
            plain(3, 'Then Jonathan and David made a covenant, because he loved him as his own soul.'),
            plain(4, 'And Jonathan stripped himself of the robe that was upon him, and gave it to David, and his garments, even to his sword, and to his bow, and to his girdle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-soul-knit',
          html:
            'The text uses a word for soul—<em>nephesh</em>—that means not merely the mind or spirit, but the whole self, the living person. "The soul of Jonathan was knit with the soul of David." This is not attraction. This is bonding at the deepest level. Jonathan sees in David something that calls to his own being. And he loves him as his own soul—not as a brother, not as a servant, but as himself.',
        },
        {
          kind: 'hebrew',
          id: 'c-ahav',
          title: 'אָהַב — Ahav: "He Loved"',
          script: 'אָהַב',
          translit: '<strong>ahav</strong> · to love; to will the good of another',
          description:
            'The Hebrew verb "ahav" carries the sense of choosing, of willing good toward another. Jonathan does not merely feel affection toward David. He chooses to love him. He will it. And he binds himself by covenant to do so.',
        },
        {
          kind: 'commentary',
          id: 'c-stripper',
          html:
            'Jonathan strips himself of his robe—the mark of royalty—and gives it to David. He gives his garments, his sword, his bow, his girdle. These are not accessories. These are the instruments and insignia of a prince. Jonathan is literally removing the tokens of his own rank and placing them on David. He is saying: I give you my identity. What is mine is yours. This is covenant love made visible.',
        },
        {
          kind: 'christ',
          id: 'christ-robe',
          title: 'Christ Connection — The King Who Robes Us',
          html:
            'In Isaiah 61, the prophet writes: "The Spirit of the Lord God is upon me… to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness" (Isa. 61:1, 3). Jesus will later echo these words in the synagogue at Nazareth, claiming them as His own mission (Luke 4:17–21). Like Jonathan stripping himself and clothing David in his own robe, the King takes off His robe of righteousness and wraps it around us. We are clothed in His identity, His standing, His favor. Jonathan prefigures this: the prince who loves so deeply that he will give away his own garments, his own place, so that his beloved stands in his stead.',
        },
        {
          kind: 'carry',
          html:
            'Jonathan\'s love is active. It is not a feeling that stays locked inside. It is an act: he gives. He strips himself bare and clothes another. When you love someone as Jonathan loved David, you don\'t keep back the things that matter. You don\'t hold your position, your comfort, your identity. You give them. You say: what is mine is yours. That is the kind of friendship Scripture holds up as the highest—not passive affection, but active, costly, self-giving love.',
        },
        {
          kind: 'reflection',
          id: 'jonathan-love',
          prompt:
            'Is there someone in your life to whom you could give as Jonathan gave to David—not just your time or attention, but something of your own standing, your own identity? What would it look like to strip yourself and clothe another with what matters most to you?',
        },
      ],
    },

    /* ─── 1 Samuel 18:5–9 — The Women's Song and Saul's Envy ────────────────── */
    {
      ref: '1 Samuel 18:5–9',
      title: 'The Song That Breaks a King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(5, 'And David went out whithersoever Saul sent him, and behaved himself wisely: and Saul set him over the men of war; and he was accepted in the sight of all the people, and also in the sight of Saul&apos;s servants.'),
            plain(6, 'And it came to pass as they came, when David was returned from the slaughter of the Philistine, that the women came out of all cities of Israel, singing and dancing, to meet king Saul, with tabrets, with joy, and with instruments of musick.'),
            verse(7,
              t('And the women answered one another as they played, saying, '),
              hg('"Saul hath slain his thousands, and David his ten thousands."', 'c-song'),
              t('')
            ),
            plain(8, 'And Saul was very wroth, and the saying displeased him; and he said, They have ascribed unto David ten thousands, and to me they have ascribed but thousands: and what can he have more but the kingdom?'),
            plain(9, 'And Saul eyed David from that day forward.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wisely',
          html:
            'David "behaved himself wisely" in all that Saul sent him to do. He succeeds. He wins the favor of the people and even of Saul\'s own servants. He is exalted, lifted up, set over men of war. Everything he touches prospers. This is not hidden favor. This is manifest, visible, undeniable.',
        },
        {
          kind: 'commentary',
          id: 'c-song',
          html:
            'But it is the song that changes everything. "Saul hath slain his thousands, and David his ten thousands." The women are singing what appears to be true: David\'s victory is greater than Saul\'s. The proportion is ten to one. And Saul hears it. He hears it sung by the women of Israel. He hears his own glory cut in half and given to the young man he brought into his own house.',
        },
        {
          kind: 'hebrew',
          id: 'c-nephesh',
          title: 'נֶ֫פֶשׁ — Nephesh: "Soul" or "Self"',
          script: 'נֶ֫פֶשׁ',
          translit: '<strong>nephesh</strong> · the soul; the self; the whole living person',
          description:
            'Earlier, Jonathan\'s nephesh was "knit" with David\'s nephesh. Now Saul\'s nephesh is troubled. The same word for soul that bound Jonathan and David in love now marks the place where Saul\'s fear and envy take root. The soul can be bound in love or twisted in hate.',
        },
        {
          kind: 'commentary',
          id: 'c-eyes',
          html:
            '"Saul eyed David from that day forward." The Hebrew word for "eyed" can mean watched, regarded, or looked at with suspicion. Saul is watching David now—not as a father watches a promising young man, but as a man watches a rival. His eyes have changed. And his heart has begun to change with them.',
        },
        {
          kind: 'carry',
          html:
            'The poison of comparison is that it has no cure but the presence of the Lord. Saul had everything a king could want: a throne, a kingdom, the loyalty of his army. But the moment he heard that David had done something greater, it all turned to ash in his mouth. Comparison does that. It takes what you have and makes it valueless by measuring it against what someone else has. The only antidote is to remember that your worth, your standing, your calling comes from God alone—not from whether you did more or less than the person next to you. Saul forgot that. And it cost him everything.',
        },
        {
          kind: 'reflection',
          id: 'song-jealousy',
          prompt:
            'When have you felt the sting of comparison—of being measured and found wanting against someone else? What would it mean to stop "eying" that person and instead to remember that your calling comes from God, not from how you measure up?',
        },
      ],
    },

    /* ─── 1 Samuel 18:10–16 — The Javelin and the Fear of David ──────────────── */
    {
      ref: '1 Samuel 18:10–16',
      title: 'The King Who Fears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(10, 'And it came to pass on the morrow, that the evil spirit from God came upon Saul, and he prophesied in the midst of the house: and David played with his hand, as at other times: and there was a javelin in Saul\'s hand.'),
            plain(11, 'And Saul cast the javelin; for he said, I will smite David even to the wall. And David avoided out of his presence twice.'),
            plain(12, 'And Saul was afraid of David, because the Lord was with him, and was departed from Saul.'),
            plain(13, 'Therefore Saul removed him from him, and made him captain over a thousand; and he went out and came in before the people.'),
            plain(14, 'And David behaved himself wisely in all his ways; and the Lord was with him.'),
            plain(15, 'Wherefore when Saul saw that he behaved himself very wisely, he was afraid of him.'),
            plain(16, 'But all Israel and Judah loved David; for he went out and came in before them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-evil-spirit',
          html:
            'The text is explicit: the evil spirit came upon Saul. Not from the devil—from God. The Lord had departed from Saul, and in that departure, something twisted took root. Saul "prophesied in the midst of the house"—he speaks, but it is no longer the clear voice of a prophet. It is the voice of a man broken by the loss of God\'s presence.',
        },
        {
          kind: 'commentary',
          id: 'c-javelin',
          html:
            'David is playing music—the same David who once soothed Saul when this evil spirit came. Now Saul tries to kill him with the javelin. Not once, but twice. "I will smite David even to the wall." The image is murderous and precise. Saul is done with subtlety. He wants David dead.',
        },
        {
          kind: 'hebrew',
          id: 'c-chanit',
          title: 'חֲנִית — Chanit: "Javelin" or "Spear"',
          script: 'חֲנִית',
          translit: '<strong>chanit</strong> · a javelin; a spear; an instrument of war',
          description:
            'The javelin is an instrument of death. Saul does not threaten David with words—he throws a weapon at him. His envy has moved from the realm of feelings into the realm of action. He wants not just David\'s glory, but David\'s death.',
        },
        {
          kind: 'commentary',
          id: 'c-afraid',
          html:
            'And then the text gives us the reason: "Saul was afraid of David, because the Lord was with him, and was departed from Saul." Saul\'s fear is theological. He sees the Lord\'s presence in David and feels the Lord\'s absence in himself. He is not afraid of David the man. He is afraid of the God who is with David. And that fear turns to hatred. If you cannot have the Lord, you begin to hate those who do.',
        },
        {
          kind: 'christ',
          id: 'christ-protector',
          title: 'Christ Connection — The Lord as Refuge',
          html:
            'In the Psalms—many of which David himself will write—the refrain appears again and again: "The Lord is my refuge and fortress… He shall cover thee with his feathers, and under his wings shalt thou trust" (Ps. 91:2, 4). David escapes Saul\'s javelin twice—not through his own speed alone, but because "the Lord was with him." The presence of God is David\'s shield. Later, Jesus will be the stone that the builders rejected (Luke 20:17), hunted and hated by those in power. But His presence in us—that same presence that was with David—is our refuge and our strength.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt pursued, if you have ever been hated for something you did not do—for your talent, your success, your faith, the simple fact of God\'s favor on your life—then you know what David knew. The javelin was real. The fear Saul felt was real. And the only thing that stood between David and death was the fact that the Lord was with him. The presence of God is not theoretical. It is practical. It shields you. It guides your feet. It makes the javelins miss.',
        },
        {
          kind: 'reflection',
          id: 'lord-with-me',
          prompt:
            'Are you aware, right now, that the Lord is with you? What does that protection, that presence, mean for you in a situation where you feel pursued or hated or opposed?',
        },
      ],
    },

    /* ─── 1 Samuel 18:17–27 — The Bride-Price Trap ────────────────────────── */
    {
      ref: '1 Samuel 18:17–27',
      title: 'The King\'s Daughter as Bait',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(17, 'And Saul said to David, Behold my elder daughter Merab, her will I give thee to wife: only be thou valiant for me, and fight the Lord\'s battles. For Saul thought, Let not mine hand be upon him, but let the hand of the Philistines be upon him.'),
            plain(18, 'And David said unto Saul, Who am I? and what is my life, or my father\'s family in Israel, that I should be son in law to the king?'),
            plain(19, 'But it came to pass at the time when Merab Saul\'s daughter should have been given to David, that she was given unto Adriel the Meholathite.'),
            plain(20, 'And Michal Saul\'s daughter loved David: and they told Saul, and the thing pleased him.'),
            plain(21, 'For Saul said, I will give him her, that she may be a snare to him, and that the hand of the Philistines may be against him. Wherefore Saul said to David, Thou shalt this day be my son in law in the one of the twain.'),
            plain(22, 'And Saul commanded his servants, Commune with David secretly, saying, Behold, the king hath delight in thee, and all his servants love thee: now therefore be the king\'s son in law.'),
            plain(23, 'And Saul\'s servants spake those words in the ears of David. And David said, Seemeth it to you a light thing to be a king\'s son in law, seeing that I am a poor man, and lightly esteemed?'),
            plain(24, 'And the servants of Saul told him, saying, On this manner spake David.'),
            plain(25, 'And Saul said, Thus shall ye say to David, The king desireth not any dowry, but a hundred foreskins of the Philistines, to be avenged of the king\'s enemies. But Saul thought to make David fall by the hand of the Philistines.'),
            plain(26, 'And when his servants told David these words, it pleased David well to be the king\'s son in law: now David arose and went, he and his men, and slew of the Philistines two hundred men; and David brought their foreskins, and they gave them in full tale to the king, that he might be the king\'s son in law. And Saul gave him Michal his daughter to wife.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-merab',
          html:
            'Saul offers David his elder daughter Merab—a great honor, and a trap. "Let not mine hand be upon him, but let the hand of the Philistines be upon him." Saul is thinking: if I make him valiant, if I push him into battle, maybe he will die there. I will not have to kill him myself. The Philistines will do it for me.',
        },
        {
          kind: 'commentary',
          id: 'c-poor',
          html:
            'David\'s response is humble. "Who am I? What is my life, or my father\'s family in Israel?" He does not see himself as worthy to be the king\'s son-in-law. But then the text reveals why: the promised marriage never happens. Merab is given to Adriel instead. Saul has broken his word.',
        },
        {
          kind: 'commentary',
          id: 'c-michal',
          html:
            'But then Michal, Saul\'s younger daughter, loves David. And Saul sees an opportunity. He will offer Michal to David under the same pretense: "Let the hand of the Philistines be against him." Saul is trying a second time to use his daughter as bait.',
        },
        {
          kind: 'commentary',
          id: 'c-foreskins',
          html:
            'The bride-price Saul asks is impossible—or so he thinks. A hundred foreskins of the Philistines. He expects David to die trying to collect them. But David does not die. He goes and slews two hundred Philistines. He brings double what Saul asked. He proves, once again, that the Lord is with him. And he gets the bride.',
        },
        {
          kind: 'carry',
          html:
            'Saul\'s plan fails, but it fails beautifully. He sets a trap for David, and David walks through it unharmed. David even comes out the other side with a wife, with honor, with his status elevated once more. This is what happens when the Lord is with you: the snares set for you become the means of your exaltation. The enemy\'s plan backfires. You don\'t simply survive the trap—you triumph through it. That is not luck. That is the protection of God.',
        },
        {
          kind: 'reflection',
          id: 'snare-to-strength',
          prompt:
            'Has anyone ever set a "snare" for you—a plan meant to harm you that somehow turned to your good? What did that teach you about the protection and presence of God?',
        },
      ],
    },

    /* ─── 1 Samuel 18:28–30 — Saul's Dawning Terror ──────────────────────── */
    {
      ref: '1 Samuel 18:28–30',
      title: 'A King\'s Eternal Dread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(28, 'And Saul saw and knew that the Lord was with David: and Michal Saul\'s daughter loved him.'),
            plain(29, 'Therefore Saul was yet the more afraid of David; and Saul became David\'s enemy continually.'),
            plain(30, 'Then the princes of the Philistines went forth: and it came to pass, that as often as they went forth, David behaved himself more wisely than all the servants of Saul; so that his name was much set by.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-knew',
          html:
            '"Saul saw and knew that the Lord was with David." This is the turning point. Saul does not simply suspect. He knows. He sees the evidence. The Lord is with David. Not with Saul. With David. And the knowledge terrifies him. But instead of seeking God\'s face, instead of asking what his own sin has been, Saul does the only thing he can do: he becomes David\'s enemy continually. If he cannot have the Lord, he will have vengeance.',
        },
        {
          kind: 'commentary',
          id: 'c-continually',
          html:
            '"Saul became David\'s enemy continually." Not sometimes. Not when provoked. Continually. For the rest of Saul\'s reign, this will be his defining preoccupation—hunting David, trying to kill him, pursuing him into the wilderness. It will consume Saul\'s life. It will cost him his kingdom. And it will fail. David will outlive Saul. David will become king. And Saul\'s hatred will have purchased him nothing but ashes.',
        },
        {
          kind: 'hebrew',
          id: 'c-yetzer',
          title: 'אוֹיֵב — Oyev: "Enemy"',
          script: 'אוֹיֵב',
          translit: '<strong>oyev</strong> · enemy; one who hates; an adversary',
          description:
            'The Hebrew word for enemy carries the sense of active opposition, of hatred that acts. Saul is not merely displeased with David. He is an enemy—active, persistent, and motivated by the fundamental incompatibility between his will and God\'s will.',
        },
        {
          kind: 'christ',
          id: 'christ-exaltation',
          title: 'Christ Connection — The King Whose Enemy Cannot Prevail',
          html:
            'David will become king, not because he sought the throne, but because God anointed him and because he lived in the presence of God. Jesus, too, was anointed—by the Holy Spirit at His baptism. And like David, He was pursued by those in power who saw that God was with Him. But the javelins thrown at Jesus could not kill Him. The snares set for Him could not trap Him. He rose from the dead and ascended to the right hand of God. The enemy that Saul represented—the power that hates God\'s anointed and tries to kill Him—is forever defeated. "The stone which the builders rejected, the same is become the head of the corner" (1 Peter 2:7).',
        },
        {
          kind: 'carry',
          html:
            'If you are living in the presence of God, if you are walking in obedience to His calling, you can expect that someone will become your enemy. It might not be obvious. It might wear a smile and offer you a bride and speak to you in secret. But the presence of God in your life will eventually be undeniable to those who are far from Him. And some will hate you for it. But here is the promise: Saul died in despair. David became king. The Lord was with David, and the Lord will be with you. No enemy set against you in enmity continually can ultimately prevail. Your Father in heaven is stronger than any earthly power.',
        },
        {
          kind: 'reflection',
          id: 'enemy-continual',
          prompt:
            'Is there someone or some force set against you because you follow the Lord? What would it mean to remember that God is with you, and that in the end, His purposes will stand—not the enemy\'s?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 18',
    quote:
      'Jonathan loved David as his own soul and stripped himself of his robe to clothe David with his own identity. But when Saul heard the women sing "David ten thousands," the king\'s envy turned to enmity, and he hunted David throughout his reign—a hatred that could not prevail.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 18 · Study Guide',
  },

  hasHebrew: true,
};
