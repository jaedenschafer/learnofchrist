import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 38 — Judah and Tamar.
 *
 * This chapter sits in the middle of the Joseph narrative and tells a harder
 * story: Judah leaves his brothers, marries a Canaanite, loses two sons,
 * withholds his youngest from a widow. Tamar, wronged and dishonored, disguises
 * herself as a temple prostitute to claim what the levirate law promised her.
 * Three months later, Judah orders her burned. She produces his own signet ring
 * and staff: "Discern, I pray thee, whose are these?"
 *
 * Judah&apos;s answer ("She hath been more righteous than I") is one of the
 * clearest self-condemnations in Genesis. And from this chapter—this messy,
 * dangerous, righteous woman—comes Pharez, whose line leads to David and to
 * Christ. The gospel runs through it not in spite of Tamar but because of her.
 */
export const GENESIS_38: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 38,

  estimatedMinutes: { 5: 8, 10: 14, 15: 17 },
  intros: [
    'Genesis 38 interrupts the story of Joseph with a different kind of story entirely—one about his older brother Judah, set apart from his family, and a woman named Tamar who was wronged twice over and responded with courage that made Judah see his own failure. This chapter is uncomfortable and graphic in ways the Bible usually avoids. It sits in Scripture not by accident but because the gospel runs through exactly the kind of people and circumstances that religious systems try to hide.',
    'The story turns on one ancient practice: <em>yibbum</em>, the levirate marriage. When a man died childless, his brother was bound by law to marry his widow and raise up an heir for the dead man. It was not optional. It was sacred debt. When Judah withholds his youngest son from Tamar—leaving her in limbo, neither widow nor wife—he breaks a covenant. Tamar&apos;s response will teach him what righteousness actually looks like, and in the process, she secures her place in the genealogy of Jesus.',
  ],

  bottomShare: {
    label: 'Share Genesis 38',
    quote:
      'Tamar, wronged twice, disguises herself as a prostitute and bears Pharez—whose line leads to David and to Christ. "She hath been more righteous than I," Judah confesses. The gospel runs through her faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 38 · Study Guide',
  },

  sections: [
    /* ─── Genesis 38:1–5 — Judah Departs ──────────────────────────────── */
    {
      ref: 'Genesis 38:1–5',
      title: 'Judah Leaves His Brothers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hg('it came to pass at that time', 'c-at-that-time'),
                t(' that Judah went down from his brethren, and turned in to a certain '),
                hg('Adullamite', 'c-adullamite'),
                t(', whose name was Hirah.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Judah saw there a daughter of a certain '),
                hg('Canaanite', 'c-canaanite'),
                t(', whose name was Shuah; and he took her, and went in unto her.'),
              ],
            },
            {
              number: 3,
              spans: [t('And she conceived, and bare a son; and he called his name Er.')],
            },
            {
              number: 4,
              spans: [t('And she conceived again, and bare a son; and she called his name Onan.')],
            },
            {
              number: 5,
              spans: [t('And she yet again conceived, and bare a son; and called his name Shelah: and he was at Chezib, when she bare him.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-at-that-time',
          html:
            'The phrase "at that time" anchors this chapter in the Joseph narrative. While his younger brother is being sold into Egypt, Judah is separating himself from the family, choosing a life with a Canaanite wife outside the covenant. This is the beginning of a spiritual descent. Judah is untethered, alone, making vows to people he has no common story with.',
        },
        {
          kind: 'commentary',
          id: 'c-adullamite',
          html:
            'Adullam is where David will later hide in a cave. It becomes a place of refuge for the rejected. For Judah it is the place he goes to hide from his brothers and his God. The geography itself tells the story of a man turning away.',
        },
        {
          kind: 'commentary',
          id: 'c-canaanite',
          html:
            'Judah does not marry a woman of his faith. He chooses the family of a Canaanite, a people whose gods were being driven out of the land. This is not yet catastrophic—Abraham and Isaac also marry in the land—but the movement is notable. Judah is building a life that has no reference to the covenant at all.',
        },
        {
          kind: 'carry',
          html:
            'Notice where Judah goes when he turns away: not to a dramatic sin, but to a normal life. A good marriage, it seems. A business partnership. A home. And yet in the very process of settling in, he loses the thing that holds his soul in place. Proximity matters. When you separate yourself from the people who know God&apos;s story, it becomes easier to forget your own.',
        },
        {
          kind: 'reflection',
          id: 'gen38-apart',
          prompt:
            'Where have you drifted "from your brethren" by habit or circumstance? What would bring you back into covenant community?',
        },
      ],
    },

    /* ─── Genesis 38:6–11 — The Duty of the Living Brother ────────────── */
    {
      ref: 'Genesis 38:6–11',
      title: 'Er, Onan, and the Broken Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 6,
              spans: [
                t('And Judah took a wife for Er his firstborn, whose name was '),
                hg('Tamar', 'c-tamar-intro'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Er, Judah&apos;s firstborn, was '),
                hg('wicked in the sight of the LORD', 'c-er-wicked'),
                t('; and the LORD slew him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Judah said unto Onan, Go in unto thy brother&apos;s wife, and '),
                hg('marry her', 'hebrew-yibbum'),
                t(', and raise up seed to thy brother.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Onan knew that the seed should not be his; and it came to pass, when he went in unto his brother&apos;s wife, that '),
                hg('he spilled it on the ground', 'c-onan-refusal'),
                t(', lest that he should give seed to his brother.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the thing which he did '),
                hg('displeased the LORD', 'c-onan-sin'),
                t(': wherefore he slew him also.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then said Judah to Tamar his daughter in law, Remain a widow at thy father&apos;s house, till Shelah my son be grown: for he said, Lest peradventure he die also, as his brethren did. And Tamar went and dwelt in her father&apos;s house.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yibbum',
          title: 'Yibbum — "levirate marriage"',
          script: 'יִבּוּם',
          translit: '<strong>yibbum</strong> · from <em>yabam</em>, "brother-in-law"',
          description:
            'The levirate duty is not romantic love; it is sacred debt. A living brother bears the responsibility to restore the name of the dead—to give his widow a son who would inherit the dead brother&apos;s portion and carry his memory forward. It is one of the law&apos;s ways of honoring both the dead and the vulnerable woman left behind.',
        },
        {
          kind: 'commentary',
          id: 'c-tamar-intro',
          html:
            'Tamar enters the narrative named—the first woman in this section to receive her own name from the narrator. She is already present as a person, not as a function. Remember this: when Judah later fails to see her, she is still the woman he is failing to see.',
        },
        {
          kind: 'commentary',
          id: 'c-er-wicked',
          html:
            'We are told nothing about Er&apos;s wickedness, only that it is visible to God. He dies. The text does not blame Tamar; it does not blame the marriage. Er was wicked; he is removed. Now the covenant protection should pass to his brother.',
        },
        {
          kind: 'commentary',
          id: 'c-onan-refusal',
          html:
            'Onan performs the act but not the covenant. He refuses to give seed—to create a child who would belong to his dead brother&apos;s line, not his own. The sin is not the act itself but the refusal of duty. Onan wants the sexual relationship without the responsibility to the dead, to the widow, or to God. He gets to be inside the covenant while rejecting what the covenant costs.',
        },
        {
          kind: 'commentary',
          id: 'c-onan-sin',
          html:
            'The LORD sees it. Onan dies not because of the mechanics of what he did, but because he broke a bond—he refused to be his brother&apos;s keeper. Tamar is now widowed twice, and the pattern is clear: the household of Judah is failing her. She is left in legal limbo, neither widow nor wife.',
        },
        {
          kind: 'carry',
          html:
            'When we know what covenant costs, we sometimes try to keep the benefits while dodging the responsibility. That&apos;s the shape of Onan&apos;s sin. But covenant never works that way. You cannot be in communion with God or with the people you love while refusing to bear their weight. And when you do, someone pays the cost. In this case, it is Tamar.',
        },
        {
          kind: 'reflection',
          id: 'gen38-onan',
          prompt:
            'Where are you tempted to enjoy the relationship without carrying the responsibility? What would it cost you to step in fully?',
        },
      ],
    },

    /* ─── Genesis 38:12–19 — Tamar Takes Her Stand ─────────────────────── */
    {
      ref: 'Genesis 38:12–19',
      title: 'The Disguise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 12,
              spans: [
                t('And in process of time the daughter of Shuah Judah&apos;s wife died; and Judah was comforted, and went up unto his sheepshearers, he and his friend Hirah the Adullamite.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it was told Tamar, saying, Behold thy father in law goeth up to Timnath to shear his sheep.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And she put off her widow&apos;s garments off from her, and '),
                hy('covered her with a vail', 'c-vail'),
                t(', and sat in an open place, which is by the way to Timnath; for she saw that '),
                hg('Shelah was grown', 'c-shelah-grown'),
                t(', and she was not given unto him to wife.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('When Judah saw her, he '),
                hg('thought her to be an harlot', 'c-mistaken'),
                t('; because she had covered her face.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he turned unto her by the way, and said, Go to, I pray thee, let me come in unto thee; (for he knew not that she was his daughter in law.) And she said, What wilt thou give me, that thou mayest come in unto me?'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he said, I will send thee '),
                hg('a kid from the flock', 'c-kid-pledge'),
                t('. And she said, Wilt thou give me a pledge, till thou send it?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he said, What pledge shall I give thee? And she said, '),
                hp('Thy signet, and thy bracelets, and thy staff', 'c-pledge-items'),
                t(' that is in thine hand. And he gave it her, and came in unto her, and she conceived by him.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And she arose, and went away, and laid by her vail from her, and put on the garments of her widowhood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shelah-grown',
          html:
            'Years pass. Shelah is now grown. Tamar has been waiting in her father&apos;s house, forbidden from the levirate protection that was promised to her. She was promised to Shelah; that promise was broken. By law and by conscience, she is owed. And so she acts.',
        },
        {
          kind: 'commentary',
          id: 'c-vail',
          html:
            'The veil makes her unrecognizable. But her act is not deception for its own sake; it is the desperate measure of a woman who has exhausted the lawful channels that should have protected her. She is not deceiving for profit or pleasure. She is claiming what was her due by law.',
        },
        {
          kind: 'commentary',
          id: 'c-mistaken',
          html:
            'Judah, who should have known the levirate law well enough to keep it, does not recognize his own daughter-in-law. The man who withheld Shelah is suddenly willing to lie with a stranger. The text is not hiding Judah&apos;s failure; it is showing it. And what Tamar does next will force him to see it too.',
        },
        {
          kind: 'commentary',
          id: 'c-kid-pledge',
          html:
            'A kid—a young goat—is what Judah offers. But Tamar will not take it until she holds something he cannot replace. She asks for a pledge.',
        },
        {
          kind: 'commentary',
          id: 'c-pledge-items',
          html:
            'The signet ring is the seal of Judah&apos;s identity—it marks his documents and his property. The bracelets and staff mark him as a man of standing. Tamar does not ask for money. She asks for his identity itself, the things that name him in the world. Judah gives them. And in doing so, he gives away his ability to claim this encounter ever happened.',
        },
        {
          kind: 'carry',
          html:
            'Tamar&apos;s boldness is not shamelessness; it is faithfulness. She is fighting for her place in a covenant family that has wronged her. She risks everything—her reputation, her life—to claim what the law said was hers. And she does it without anger, without blame, without asking for pity. She acts. The rest of Scripture will honor her for it.',
        },
        {
          kind: 'reflection',
          id: 'gen38-tamar-risk',
          prompt:
            'What covenant promise in your life have you been promised but not delivered? What would it cost you to claim it with Tamar&apos;s kind of faithfulness?',
        },
      ],
    },

    /* ─── Genesis 38:20–26 — The Reckoning ────────────────────────────── */
    {
      ref: 'Genesis 38:20–26',
      title: 'Discern, I Pray Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 20,
              spans: [
                t('And Judah sent the kid by the hand of his friend the Adullamite, to receive his pledge from the woman&apos;s hand: but he found her not.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Then he asked the men of that place, saying, Where is the '),
                hg('harlot', 'c-harlot-word'),
                t(', that was openly by the way side? And they said, There was no harlot in this place.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Judah returned to Hirah his companion, and said, I cannot find her; and also the men of the place said, that there was no harlot in this place.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Judah said, Let her take it to her, lest we be shamed: behold, I sent this kid, and thou hast not found her.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And it came to pass about three months after, that it was told Judah, saying, '),
                hg('Tamar thy daughter in law hath played the harlot', 'c-report'),
                t('; and also, behold, she is with child by whoredom. And Judah said, Bring her forth, and let her be burnt.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('When she was brought forth, she sent to her father in law, saying, By the man, whose these are, am I with child: and she said, '),
                hp('Discern, I pray thee, whose are these, the signet, and bracelets, and staff?', 'c-discern'),
                t(''),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Judah acknowledged them, and said, '),
                hp('She hath been more righteous than I', 'c-righteous-than-i'),
                t('; because that I gave her not to Shelah my son. And he knew her again no more.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-harlot-word',
          html:
            'Notice the shift in vocabulary. Tamar is called <em>zonah</em>—a harlot, a woman without protection, outside the covenant. Hirah&apos;s men cannot find her because she has never been a harlot. She was only ever a widow, and a widow with a claim.',
        },
        {
          kind: 'commentary',
          id: 'c-report',
          html:
            'The report is a weapon. Tamar is accused in public, in the language of shame. And Judah&apos;s response is instant: burn her. Not trial, not questions, not inquiry. The man who should have protected her moves to execute her. The text does not blink at how close Judah comes to murdering an innocent woman.',
        },
        {
          kind: 'commentary',
          id: 'c-discern',
          html:
            'Three items. Three words: "Discern, I pray thee." Tamar does not shame him. She does not accuse. She simply holds up his own marks of identity and asks him to read them. And he does. He knows those things. He cannot deny what his own hands gave away.',
        },
        {
          kind: 'commentary',
          id: 'c-righteous-than-i',
          html:
            'One of the clearest self-condemnations in Scripture. Judah does not defend himself or negotiate. He sees what he has done: he withheld Shelah, he broke the covenant, he was willing to burn a woman for claiming what was legally hers. And Tamar, the widow, the woman he thought was a harlot, is righteous. He is not. The reversal is complete.',
        },
        {
          kind: 'christ',
          id: 'christ-discern',
          title: 'Christ Connection — The Seal That Cannot Be Denied',
          html:
            'Tamar holds up Judah&apos;s signet and asks him to discern. Matthew 16:18 uses the same Greek root—<em>ekklesia</em> built on the rock, and Peter holding the keys. In the Old Testament, the signet ring was the sign of authority entrusted: Pharaoh gave Joseph his signet (Gen. 41:42). Judah gave his signet to Tamar—a widow fighting for her life, claiming her covenant due. When the king of glory stands at the judgment—not to condemn, but to reveal truth—He will not need to accuse. We will all see what we have done, and what grace has done anyway.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment coming for all of us where we will see ourselves clearly, know what we owe, know where we have failed—and in the same moment, learn that mercy has already acted. It is not a moment of shame but of recognition. Judah&apos;s confession is not defeat. It is the only victory that matters: "She hath been more righteous than I."',
        },
        {
          kind: 'reflection',
          id: 'gen38-discern',
          prompt:
            'What would you see if you looked at your own life the way Judah looked at his signet ring? What is God inviting you to discern about yourself?',
        },
      ],
    },

    /* ─── Genesis 38:27–30 — The Twins Born ──────────────────────────── */
    {
      ref: 'Genesis 38:27–30',
      title: 'Pharez and Zarah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            {
              number: 27,
              spans: [
                t('And it came to pass in the time of her travail, that, behold, '),
                hg('twins were in her womb', 'c-twins'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And when she travailed, one put out his hand: and the midwife took and bound upon his hand a scarlet thread, saying, This came out first.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And it came to pass, as he drew back his hand, that, behold, his brother came out: and she said, '),
                hg('How hast thou broken forth?', 'c-how-broken-forth'),
                t(' this breach be upon thee: therefore his name was called '),
                hg('Pharez', 'c-pharez'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And afterward came out his brother, that had the scarlet thread upon his hand: and his name was called '),
                hg('Zarah', 'c-zarah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-twins',
          html:
            'Twins. The narrative has given us a pattern: Cain and Abel, Esau and Jacob, Joseph and Benjamin. Twins in Scripture often mean a struggle over blessing, over the right to the covenant. Here the twin birth itself is a reversal—the one marked to come first does not, and in the struggle between them, one breaks out of order.',
        },
        {
          kind: 'commentary',
          id: 'c-how-broken-forth',
          html:
            'The midwife&apos;s question is not a rebuke but an acknowledgment of something extraordinary. The child marked to come first was forced to cede to his brother. The order was broken by necessity, not by failure.',
        },
        {
          kind: 'commentary',
          id: 'c-pharez',
          html:
            '<em>Pharez</em> means "breach" or "breaking out." He is the one who breaks the order, who comes against expectation, who interrupts what looked settled. His name will appear in the genealogy of Jesus. Matthew 1:3: "Judas begat Phares." The line of the Messiah runs not through the first-born, not through the expected heir, but through the child of Tamar and Judah—and through the one who broke the order to get here.',
        },
        {
          kind: 'commentary',
          id: 'c-zarah',
          html:
            'Zarah—"rising" or "brightness"—is the one marked first. He gets the scarlet thread. He has the sign of priority. But Pharez comes first, and the thread on Zarah&apos;s hand becomes a marker of what was displaced, what yielded its place. Zarah will have descendants, but not the royal line.',
        },
        {
          kind: 'christ',
          id: 'christ-pharez-line',
          title: 'Christ Connection — The Line Through the Breach',
          html:
            'Matthew opens with a genealogy: "Abraham begat Isaac… and Judas begat Phares… And Phares begat Esrom… and Esrom begat Aram… and of David the king" (Matt. 1:2–6). Pharez is in the direct line to David, and David to Jesus. The Messiah does not come through the first-born, the legitimate heir, the one everyone expected. He comes through the breach, through a woman who had to fight for her covenant right, through a child born out of order. The gospel keeps coming to us this way—not through the marked route but through the break, through a widow&apos;s faithfulness, through what the world would have burned but God preserved.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt like you came out of order—like your path was never the expected one, like you were fighting for a place you were told belonged to someone else, like the marked heir got the thread and you had to break through anyway—look up. The line that leads to Christ came that way. Your life is not a deviation from His story. It may be exactly where His story goes.',
        },
        {
          kind: 'reflection',
          id: 'gen38-pharez',
          prompt:
            'Where in your life have you had to "break forth" from what was ordered for you? How might that breaking be part of God&apos;s purpose, not a deviation from it?',
        },
        {
          kind: 'artwork',
          matchTitle: /tamar|judah|pharez/i,
          caption: 'Genesis 38:27–30 · The Birth of Pharez',
        },
      ],
    },
  ],
};
