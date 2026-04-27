import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 38 — The Lord Answers Out of the Whirlwind
 *
 * After Elihu&apos;s speeches, God Himself finally speaks. Not to explain or justify Himself,
 * but to question Job. "Where wast thou when I laid the foundations of the earth?"
 * God asks question upon question: Who determined the earth&apos;s dimensions? Who controls
 * the dawn? Who sends the rain? The implication: you are too small to judge these matters.
 */
export const JOB_38: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 38,

  intros: [
    'At last, God speaks. After all the debate, all the arguments, all the theories about suffering, God enters the whirlwind and addresses Job directly. God does not answer Job&apos;s questions philosophically. Instead, God questions Job. Where were you when the earth was laid? Can you command the dawn? Do you understand the rain? Through these questions, God reveals the vast gap between human understanding and divine wisdom.',
  ],

  bottomShare: {
    quote:
      '"Where wast thou when I laid the foundations of the earth?" God&apos;s answer to Job&apos;s suffering is not explanation, but perspective.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 38 · Study Guide',
  },

  sections: [
    /* ─── Job 38:1–11 — The Birth of the Earth ──────────────────────── */
    {
      ref: 'Job 38:1–11',
      title: 'Where Were You?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(1, 'Then the Lord answered Job out of the whirlwind, and said,'),
            plain(2, 'Who is this that darkeneth counsel by words without knowledge?'),
            plain(3, 'Gird up now thy loins like a man; for I will demand of thee, and answer thou me.'),
            plain(4, 'Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.'),
            plain(5, 'Who hath laid the measures thereof, if thou knowest? or who hath stretched the line upon it?'),
            plain(6, 'Whereupon are the foundations thereof fastened? or who laid the corner stone thereof;'),
            plain(7, 'When the morning stars sang together, and all the sons of God shouted for joy?'),
            plain(8, 'Or who shut up the sea with doors, when it brake forth, as if it had issued out of the womb;'),
            plain(9, 'When I made the cloud the garment thereof, and thick darkness a swaddlingband for it,'),
            plain(10, 'And brake up for it my decreed place, and set bars and doors,'),
            plain(11, 'And said, Hitherto shalt thou come, but no further: and here shall thy proud waves be stayed?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job38-darkened-counsel',
          html:
            'God&apos;s first words critique Job&apos;s approach: "Who is this that darkeneth counsel by words without knowledge?" Job has spoken much, but his words are without knowledge. He has darkened understanding rather than illuminated it. He has claimed to judge God while lacking the basic knowledge of how creation itself works.',
        },
        {
          kind: 'commentary',
          id: 'job38-gird-loins',
          html:
            '"Gird up now thy loins like a man"—this is not insult but invocation. Prepare yourself. Stand ready. What follows will demand all your understanding, all your strength. God is about to ask questions that cut to the heart of what it means to be human, what it means to be a creature before the Creator.',
        },
        {
          kind: 'hebrew',
          id: 'job38-yassad',
          title: 'Yassad — To Found or Establish',
          script: 'יָסַד',
          translit: '<strong>Yassad</strong> · to found; to lay the foundation; to establish firmly',
          description:
            'The act of creation is presented as founding—laying a foundation that will endure. God yassad the earth. God yassad it with understanding of its dimensions, its boundaries, its purposes. This is not random creation. It is purposeful building by one who understands the whole.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s opening question is both simple and overwhelming: Where were you? You did not lay the foundations. You did not measure the earth. You did not create anything. Yet you presume to judge God&apos;s actions. You presume to understand what God allows. But you cannot even understand how God made the world. How can you understand why God allows suffering?',
        },
        {
          kind: 'reflection',
          id: 'job38-foundations',
          prompt:
            'When you consider the scope of creation, how does it change your perspective on your own suffering? Can you trust someone whose wisdom exceeds yours so vastly?',
        },
      ],
    },

    /* ─── Job 38:12–38 — The Ordering of Creation ────────────────────── */
    {
      ref: 'Job 38:12–38',
      title: 'The Ordinances of Heaven and Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(12, 'Hast thou commanded the morning since thy days; and caused the dayspring to know his place;'),
            plain(13, 'That it might take hold of the ends of the earth, that the wicked might be shaken out of it?'),
            plain(14, 'It is turned as clay to the seal; and they stand as a garment.'),
            plain(15, 'And from the wicked their light is withholden, and the high arm shall be broken.'),
            plain(16, 'Hast thou entered into the springs of the sea? or hast thou walked in the search of the depth?'),
            plain(17, 'Have the gates of death been opened unto thee? or hast thou seen the doors of the shadow of death?'),
            plain(18, 'Hast thou perceived the breadth of the earth? declare if thou knowest it all.'),
            plain(19, 'Where is the way where light dwelleth? and as for darkness, where is the place thereof,'),
            plain(20, 'That thou shouldest take it to the bound thereof, and that thou shouldest know the paths to the house thereof?'),
            plain(21, 'Knowest thou it, because thou wast then born? or because the number of thy days is great?'),
            plain(22, 'Hast thou entered into the treasures of the snow? or hast thou seen the treasures of the hail,'),
            plain(23, 'Which I have reserved against the time of trouble, against the day of battle and war?'),
            plain(24, 'By what way is the light parted, which scattereth the east wind upon the earth?'),
            plain(25, 'Who hath divided a watercourse for the overflowing of waters, or a way for the lightning of the thunder;'),
            plain(26, 'To cause it to rain on the earth, where no man is; on the wilderness, wherein there is no man;'),
            plain(27, 'To satisfy the desolate and waste ground; and to cause the bud of the tender herb to spring forth?'),
            plain(28, 'Hath the rain a father? or who hath begotten the drops of the dew?'),
            plain(29, 'Out of whose womb cometh the ice? and the hoary frost of the heaven, who hath gendered it?'),
            plain(30, 'The waters are hid as with a stone, and the face of the deep is frozen.'),
            plain(31, 'Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?'),
            plain(32, 'Canst thou bring forth Mazzaroth in his season? or canst thou guide Arcturus with his sons?'),
            plain(33, 'Knowest thou the ordinances of heaven? canst thou set the dominion thereof in the earth?'),
            plain(34, 'Canst thou lift up thy voice to the clouds, that abundance of waters may cover thee?'),
            plain(35, 'Canst thou send lightnings, that they may go, and say unto thee, Here we are?'),
            plain(36, 'Who hath put wisdom in the inward parts? or who hath given understanding to the heart?'),
            plain(37, 'Who can number the clouds in wisdom? or who can stay the bottles of heaven,'),
            plain(38, 'When the dust groweth into hardness, and the clods cleave fast together?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job38-questions-multiply',
          html:
            'God&apos;s questions multiply. One after another, they establish the same point: Job does not control the natural world. He does not command the morning. He does not know the depths of the sea. He does not understand the treasury of snow or the paths of lightning. He cannot bind the stars or direct the rain. The natural world operates according to ordinances Job does not understand.',
        },
        {
          kind: 'commentary',
          id: 'job38-rains-wilderness',
          html:
            '"To cause it to rain on the earth, where no man is; on the wilderness, wherein there is no man"—God points out that the creation serves purposes beyond human benefit or human understanding. Rain falls on places where no one will see it or benefit from it. God orders things not for human utility alone, but according to God&apos;s own wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'job38-chukim',
          title: 'Chukim — Ordinances or Statutes',
          script: 'חֻקִּים',
          translit: '<strong>Chukim</strong> · ordinances; statutes; the rules by which creation operates',
          description:
            'The creation is not chaos. It is ordered by chukim—ordinances that Job does not know and cannot alter. They are the laws by which the cosmos operates. To Job, they are hidden. To God, they are perfectly known and perfectly administered.',
        },
        {
          kind: 'carry',
          html:
            'If you cannot understand the natural world, how can you presume to understand the moral order? If you do not know why rain falls on the uninhabited wilderness, how can you judge why suffering comes to the innocent? God&apos;s wisdom operates on principles far beyond your comprehension.',
        },
        {
          kind: 'reflection',
          id: 'job38-ordinances',
          prompt:
            'What aspects of the natural world most baffle you? Can you extend that sense of wonder and mystery to the moral order?',
        },
      ],
    },

    /* ─── Job 38:39–40:2 — The Animal World ─────────────────────────── */
    {
      ref: 'Job 38:39',
      title: 'Do You Feed the Lion?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(39, 'Wilt thou hunt the prey for the lion? or fill the appetite of the young lions,'),
            plain(40, 'When they couch in their dens, and abide in the covert to lie in wait?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job38-young-lions',
          html:
            'The questions shift to the animal kingdom. Do you feed the lions? Does your care extend to every creature? God&apos;s care does. God knows the hunger of the young lions. God orders the world so that even the predators are fed. Yet Job presumes to judge God&apos;s care of human beings. If you do not understand God&apos;s provision for the animal world, how can you understand God&apos;s provision for you?',
        },
        {
          kind: 'christ',
          id: 'job38-christ-creation',
          title: 'Christ Connection — By Whom All Things Were Made',
          html:
            'Colossians 1:16 states: "By [Christ] were all things created, that are in heaven, and that are in earth, visible and invisible...all things were created by him, and for him." Christ is the one through whom all creation coheres. He is the principle of order in the universe. When God speaks to Job from the whirlwind, God is speaking as the Creator. And in Christ, this Creator becomes incarnate—becomes human, becomes vulnerable, becomes the one who experiences our suffering from within. The God who orders galaxies becomes the man who asks, "My God, my God, why hast thou forsaken me?" (Matthew 27:46). The vast wisdom that creates and sustains all things enters into the depth of human pain.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s position has been to demand that God explain Himself, justify Himself, answer to human standards of justice. God&apos;s response is to reveal the infinite gap between human understanding and divine wisdom. Yet this is not offered as despair but as relief: you do not need to understand everything. You can trust One whose wisdom is so much greater than yours.',
        },
        {
          kind: 'reflection',
          id: 'job38-trust-wisdom',
          prompt:
            'How does it change your experience of suffering to know that the One who causes it to rain on the uninhabited wilderness is the One who cares for you?',
        },
      ],
    },
  ],
};
