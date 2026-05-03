import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Samuel 24 — David Spares Saul in the Cave
 *
 * A hunted man finds his hunter defenseless in a cave. His men see it as
 * the moment of fulfillment — the Lord has delivered the enemy into David&apos;s
 * hand. But David&apos;s heart will not allow it. He cuts only the skirt of Saul&apos;s
 * robe and is pierced with remorse at even that. In a scene of extraordinary
 * mercy, David refuses to seize what God has not yet given. The anointed refuses
 * to overthrow the anointed, trusting God&apos;s timing and refusing to take
 * vengeance into his own hands.
 */
export const SAMUEL_1_24: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 24,

  estimatedMinutes: { 5: 3, 10: 10, 15: 12 },
  intros: [
    'David is a fugitive. Saul, once his king and patron, has become his relentless pursuer. After David spared Saul&apos;s life at Nob and again at Ziph, Saul remains convinced that David seeks his throne. Driven into the wilderness of Engedi, David and his men hide among the rocks while Saul hunts them with three thousand soldiers. And then the moment comes: in a cave, Saul is alone and vulnerable. The hunters have become the hunted.',
    'What happens next defies the logic of survival. David&apos;s men see deliverance; David sees only the boundary he will not cross. He has opportunity, justification, and even a sign from his friends: "Behold the day of which the Lord said unto thee, Behold, I will deliver thine enemy into thine hand." But David refuses. His conscience is alert to a truth deeper than advantage: the anointed does not seize the throne from the anointed. The future king must wait for the future God has planned. In this chapter we meet the man who will become Israel&apos;s greatest king — not through what he takes, but through what he refuses to take.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|delacroix/i,
    matchTitle: /saul|david|cave|mercy|spares/i,
    caption: 'David Spares Saul in the Cave',
  },

  bottomShare: {
    label: 'Share 1 Samuel 24',
    quote:
      'In a cave in the wilderness, David had his enemy Saul defenseless before him. His men urged him to strike. But David, moved by conscience, cut only the skirt of Saul&apos;s robe and was pierced with remorse even for that. He would not lay his hand on the Lord&apos;s anointed, trusting God&apos;s timing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 24 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 24:1–7 — Saul in the Cave ────────────────────────────── */
    {
      ref: '1 Samuel 24:1–7',
      title: 'Saul Enters the Cave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(1, 'And it came to pass, when Saul was returned from following the Philistines, that it was told him, saying, Behold, David is in the wilderness of Engedi.'),
            plain(
              2,
              'Then Saul took three thousand chosen men out of all Israel, and went to seek David and his men upon the rocks of the wild goats.',
            ),
            plain(
              3,
              'And he came to the sheepcotes by the way, where was a cave; and Saul went in to cover his feet: and David and his men remained in the sides of the cave.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-engedi',
          html:
            'Engedi is an oasis in the wilderness of Judea, near the Dead Sea — a place of water and life in an otherwise barren landscape. David, fleeing for his life, has found refuge in this pocket of sustenance. But Saul&apos;s obsession reaches even here. With three thousand soldiers, he comes to trap a man and a handful of followers. The scale is absurd. The king of Israel, pursued by enemies, is using his army to hunt one anointed young man.',
        },
        {
          kind: 'commentary',
          id: 'c-cover-feet',
          html:
            'The phrase "went in to cover his feet" is a euphemism: Saul has come to the cave to relieve himself. He is vulnerable, unguarded, exposed — in the very moment when a man is most defenseless. The irony is complete. The hunter becomes the hunted in his most exposed moment.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              4,
              'And the men of David said unto him, Behold the day of which the Lord said unto thee, Behold, I will deliver thine enemy into thine hand, that thou mayest do to him as it shall seem good unto thee. Then David arose, and ',
            ),
            verse(
              4,
              hg('cut off the skirt of Saul&apos;s robe privily', 'c-skirt'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-skirt',
          html:
            'David&apos;s men speak with the voice of apparent faith. They cite a promise — "the day of which the Lord said unto thee" — and they draw the obvious conclusion: if the Lord has delivered Saul into David&apos;s hand, then this is the time to strike. David, moved by something in their words, rises. But he does not strike. Instead, he cuts away the skirt of Saul&apos;s robe. The Hebrew word <em>kanaph</em> means both skirt and wing — it is an edge, a border, something attached but separate. Even in this small defiance of his men, David takes only the minimum. He cuts the robe but leaves the man alive.',
        },
        {
          kind: 'hebrew',
          id: 'c-kanaph',
          title: 'Kanaph — Wing, Skirt, Border',
          script: 'כָּנָף',
          translit: '<strong>Kanaph</strong> · wing, edge, skirt, corner',
          description:
            'The Hebrew word for the skirt of Saul&apos;s robe can also mean "wing" — as in the wings of a bird, or the protective wings of God ("under the shadow of thy wings"). Saul&apos;s robe has been torn, but his life is spared. The sign is physical: the edge has been touched, but the heart remains untouched.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              5,
              'And it came to pass afterward, that David&apos;s heart smote him, because he had cut off the skirt of Saul&apos;s robe.',
            ),
            plain(
              6,
              'And he said unto his men, The Lord forbid that I should do this thing unto my master, the Lord&apos;s anointed, to stretch forth mine hand against him, seeing he is the anointed of the Lord.',
            ),
            plain(7, 'So David stayed his servants with these words, and suffered them not to rise against Saul. And Saul rose up out of the cave, and went on his way.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-heart-smote',
          html:
            'David&apos;s heart smites him — a blow from within. He has done nothing violent, and yet his conscience recoils. He cut a piece of cloth. No one was harmed. And yet David is pierced. This is the sensitivity of conscience that marks the true servant. Not the courage that strikes, but the sensitivity that knows the boundary even when no one else can see it. David recognizes that to touch the robe is to overstep. To cut even the smallest piece is to presume.',
        },
        {
          kind: 'hebrew',
          id: 'c-mashiach',
          title: 'Mashiach — The Anointed',
          script: 'מָשִׁיחַ',
          translit: '<strong>Mashiach</strong> · anointed; messiah',
          description:
            'David speaks of "the Lord&apos;s anointed" — <em>mishach Adonai</em>. This is the root from which "messiah" comes. To be anointed is to be marked by God for a sacred office. The king of Israel is the Lord&apos;s anointed, set apart by God&apos;s hand. This is not something a rival can claim or take. Anointing is conferred, not seized.',
        },
        {
          kind: 'carry',
          html:
            'You may stand at a threshold where justice and vengeance seem to be the same thing. Someone has wronged you. The path to retaliation is open. Your friends may even encourage it: "You would be justified. Take what is yours." And your heart — alert to something deeper than advantage — may begin to recoil. David felt that recoil at the cutting of a cloth. What is it you are being called not to take? What boundary is your conscience alerting you to?',
        },
      ],
    },

    /* ─── 1 Samuel 24:8–15 — David&apos;s Plea Before Saul ──────────────────── */
    {
      ref: '1 Samuel 24:8–15',
      title: 'David Speaks to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              8,
              'David also arose afterward, went out of the cave, and cried after Saul, saying, My lord the king. And when Saul looked behind him, David stooped with his face to the earth, and bowed himself.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stooped',
          html:
            'David does not ambush Saul as he leaves the cave. He calls out — "My lord the king" — announcing himself. And when Saul turns, David adopts the posture of absolute submission: he stoops to the ground and bows. This is not the posture of a rival or a threat. This is the posture of a servant before his king, even though Saul has become David&apos;s hunter.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              9,
              t('And David said to Saul, '),
              hg('Wherefore hearest thou men&apos;s words', 'c-words'),
              t(', saying, Behold, David seeketh thy hurt?'),
            ),
            plain(
              10,
              'Behold, this day thine eyes have seen how that the Lord had delivered thee today into mine hand in the cave: and some bade me kill thee: but mine eye spared thee; and I said, I will not put forth mine hand against my lord; for he is the Lord&apos;s anointed.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-words',
          html:
            'David addresses the rumor that pursues him — that he seeks Saul&apos;s hurt, his downfall, his throne. The men around Saul have said this again and again. Saul has believed it. But David says: listen to what actually happened. Today you were in my hand. I could have taken your life. And I did not. That is not the action of someone seeking your hurt. That is the action of someone honoring your office, even while you hunt him.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              11,
              'Moreover, my father, see, yea, see the skirt of thy robe in mine hand: for in that I cut off the skirt of thy robe, and killed thee not, know thou and see that there is neither evil nor transgression in mine hand, and I have not sinned against thee; yet thou huntest my soul to take it.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-skirt-evidence',
          html:
            'David holds up the skirt of the robe — a tangible piece of evidence. This small act is proof. "See the skirt of thy robe in mine hand." If David had meant harm, Saul would have more than a piece of cloth to show. David uses the robe as a sign — it is the sign of his mercy, and the measure of his restraint. He could have taken everything. He took only the minimum.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              12,
              'The Lord judge between me and thee, and the Lord avenge me of thee: but mine hand shall not be upon thee.',
            ),
            verse(
              13,
              t('As saith the proverb of the ancients, '),
              hy('Wickedness proceedeth from the wicked', 'c-proverb'),
              t(': but mine hand shall not be upon thee.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judge-avenge',
          html:
            'David does the most difficult thing: he refuses to judge and avenge himself. He places the matter entirely in the Lord&apos;s hands. "The Lord judge between me and thee, and the Lord avenge me of thee." This is not weakness. This is the refusal of self-vindication. This is faith that God will be the judge when the time comes. And David reinforces it: "My hand shall not be upon thee." He commits, in the presence of Saul, that he will not take vengeance himself.',
        },
        {
          kind: 'hebrew',
          id: 'c-proverb',
          title: 'Wickedness From the Wicked — Ancient Wisdom',
          script: 'מֵרְשָׁעִים יִצְאוּ רְשָׁעוּת',
          translit: '<strong>Wickedness proceedeth from the wicked</strong> · What is evil comes from those whose hearts are evil',
          description:
            'David quotes an old proverb: wickedness comes from the wicked. He is saying: if I pursued you in vengeance, it would be because evil dwells in me. But my hand is not upon you. Therefore, judge by what you see — not by rumors, but by the evidence of my restraint.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              14,
              'After whom is the king of Israel come out? after whom dost thou pursue? after a dead dog, after a flea.',
            ),
            plain(
              15,
              'The Lord therefore be judge, and judge between me and thee, and see, and plead my cause, and deliver me out of thine hand.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dead-dog',
          html:
            'David does not claim honor for himself. He calls himself "a dead dog," "a flea" — worthless vermin, beneath the dignity of the king of Israel. The image is starkly humble. And yet the implication cuts deeper: if David is so worthless, why does Saul pursue him with three thousand soldiers? The contrast is stark. The king of Israel has mobilized an army to hunt a dead dog. It is a question, asked with absolute respect, that indicts the absurdity of Saul&apos;s obsession.',
        },
        {
          kind: 'carry',
          html:
            'To refuse vengeance is to place your case in hands other than your own. It means standing before your accuser and saying: I have done you no harm. The Lord judge between us. I do not judge myself. This requires a kind of courage that is harder than any sword — the courage to be misunderstood, to be hunted, and to refuse to strike back.',
        },
      ],
    },

    /* ─── 1 Samuel 24:16–22 — Saul&apos;s Tears and Acknowledgment ──────────── */
    {
      ref: '1 Samuel 24:16–22',
      title: 'The King&apos;s Tears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            verse(
              16,
              t('And it came to pass, when David had made an end of speaking, that Saul said, '),
              hp('Is this thy voice, my son David?', 'c-voice'),
              t(' And Saul lifted up his voice, and wept.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-voice',
          html:
            'Saul recognizes David. His eyes, which have been blinded by suspicion and jealousy, suddenly see. He calls David "my son" — a name of affection he has not used in chapters. And he weeps. The king breaks. Something in David&apos;s words and David&apos;s restraint has reached through Saul&apos;s fear and found the man he once loved beneath the paranoia.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              17,
              'And he said to David, Thou art more righteous than I: for thou hast rewarded me good, whereas I have rewarded thee evil.',
            ),
            plain(
              18,
              'And thou hast shewed this day how that thou hast dealt well with me: forasmuch as when the Lord had delivered me into thine hand, thou killedst me not.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-righteousness',
          html:
            'Saul sees it now. He acknowledges the truth plainly: "Thou art more righteous than I." He has rewarded David with suspicion and pursuit; David has rewarded him with mercy. Saul has had every chance to see this, and yet it took the moment in the cave — the moment when he was defenseless and David spared him — for the scales to fall from his eyes.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              19,
              'For if a man find his enemy, will he let him go well away? wherefore the Lord reward thee good for that thou hast done unto me this day.',
            ),
            plain(
              20,
              'And now, behold, I know well that thou shalt surely be king, and that the kingdom of Israel shall be established in thine hand.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prophecy',
          html:
            'Saul speaks like a prophet. He sees what is to come. "Thou shalt surely be king, and that the kingdom of Israel shall be established in thine hand." It is the very thing Saul has feared. But Saul speaks it now, not as a threat, but as acknowledgment. And his acknowledgment is a sign of grace — he is releasing what he has held so tightly. The Lord has always intended David to be king. Saul&apos;s death would not prevent it. And in this moment, Saul bows to that future.',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              21,
              'Swear now therefore unto me by the Lord, that thou wilt not cut off my seed after me, and that thou wilt not destroy my name out of my father&apos;s house.',
            ),
            plain(22, 'And David sware unto Saul. And Saul went home; and David and his men gat them up unto the hold.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'Even in his recognition, Saul asks for protection — not for himself, but for his family, his seed, his name. David swears an oath by the Lord. And then Saul goes home. The hunt is over. For now, at least, the pursuit ceases. Saul has seen the truth, and the truth has unmade his vengeance. David withdraws into the wilderness, back to the hold — the stronghold where his followers gather. The chapter ends not with David taking the throne, but with David waiting. He could have taken it today. He chose to wait for the day the Lord would give it.',
        },
        {
          kind: 'christ',
          id: 'christ-anointed',
          title: 'Christ Connection — The Anointed Who Refuses to Seize',
          html:
            'In the garden of Gethsemane, another anointed man faces a moment not unlike David&apos;s in the cave. Jesus is arrested. Peter draws a sword and cuts off the ear of the high priest&apos;s servant. And Jesus says: "Put up again thy sword into his place: for all they that take the sword shall perish with the sword. Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels?" (Matt. 26:52–53). Jesus has legions of angels at His command. Infinitely more power than David has. Yet He refuses to use it. Like David, He will not take what is not yet given. Like David, He speaks of the Lord judging and avenging. Like David, He commits His vindication to the Father. And like David, He teaches His followers a radical principle: "Love your enemies, bless them that curse you, do good to them that hate you" (Matt. 5:44). The future king who waits for God&apos;s timing; the Anointed One who refuses to seize His kingdom — these are the same spirit.',
        },
        {
          kind: 'reflection',
          id: 'mercy',
          prompt:
            'What have you been holding back from? What opportunity have you refused to take because something in your conscience told you it was not yet the time? What did it cost you to wait?',
        },
        {
          kind: 'carry',
          html:
            'To refuse what is within your grasp takes a kind of faith that the world calls foolish. David could have been king that day. He could have ended the threat, seized the throne, written a different ending. Instead, he cut a piece of cloth and left a cave. And he waited. There is a time for action and a time for waiting. The hardest part of following God is often not the moment of risk or courage — it is the moment of restraint. When you could strike and you do not. When you could take and you release. When you could judge and you hand the matter to the Lord. That is when you become most like the God you serve.',
        },
      ],
    },
  ],
};
