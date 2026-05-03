import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 14 — David's House, Children, and Victories Over the Philistines
 *
 * After being anointed king, David establishes himself in a newly built house
 * and fathers many children in Jerusalem, including Solomon. When the Philistines
 * hear that David has been crowned king over all Israel, they march against him.
 * David inquires of God twice — and receives two different answers. In the first
 * battle at Baal-perazim, he attacks directly. In the second, he takes a different
 * path and listens for the sound of God going before him through the mulberry trees.
 * The chapter teaches that even a king must ask God for guidance in every battle,
 * and that God's tactics are not always the same twice. David's fame spreads to
 * all lands, and the Lord brings fear of him upon all nations.
 */
export const CHRONICLES_1_14: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 14,

  estimatedMinutes: { 5: 5, 10: 10, 15: 15 },
  intros: [
    'David has been anointed king over all Israel. The kingdom is now his to rule. But a king must build — not just in his own house, but in the hearts of his people. When the king of Tyre hears of David&apos;s rise, he sends messengers with cedar timber, skilled workers, and materials to build David a palace. David perceives in this moment that the Lord has confirmed him as king, not for his own sake, but for the sake of his people. His kingdom is "lifted up on high" because of them.',
    'David takes more wives in Jerusalem and fathers many sons and daughters — among them, Solomon, who will build the temple his father cannot build. But peace brings a challenge: the Philistines, hearing of David&apos;s anointing, gather to destroy him. What follows is a masterclass in discernment. David will ask God twice, receive two different commands, and learn that a king must listen freshly to God in every circumstance. The kingdom is exalted; but its foundation remains constant dependence on the one who established it.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 14',
    quote:
      'David perceived that the Lord had confirmed him king over Israel, for his kingdom was lifted up on high, because of his people Israel. Even in strength, the king depends on God&apos;s guidance for every battle.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 14 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 14:1–2 — Hiram and the Cedar House ──────────────── */
    {
      ref: '1 Chronicles 14:1–2',
      title: 'Hiram Brings Cedar; the Kingdom Is Lifted Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Now Hiram king of Tyre sent messengers to David, and timber of cedars, with masons and carpenters, to build him an house.'),
            {
              number: 2,
              spans: [
                t('And David perceived that the '),
                hp('Lord had confirmed him king', 'c14-lord-confirmed'),
                t(' over Israel, for his kingdom was '),
                hg('lifted up on high', 'c14-lifted-up'),
                t(', because of his people Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c14-lord-confirmed',
          html:
            'David does not announce his kingship. He perceives it. The arrival of Hiram&apos;s delegation — bearing cedar from Lebanon, stonemasons, and carpenters — serves as an outward sign of what David has inwardly known: that God has confirmed him. The Lord&apos;s confirmation is not a feeling or a thought; it is attested by the actions of the nations around him. Foreign kings recognize what the Lord has done.',
        },
        {
          kind: 'commentary',
          id: 'c14-lifted-up',
          html:
            'David&apos;s kingdom is "lifted up on high" — but notice the reason given: "because of his people Israel." The kingdom&apos;s exaltation is not David&apos;s personal advancement. It is the lifting up of the whole people of God through the anointed king. This is a theological principle that will echo through David&apos;s entire reign: the king is exalted so that his people may be exalted. His strength serves their flourishing.',
        },
        {
          kind: 'hebrew',
          id: 'c14-yada',
          title: 'Yada — "Perceived" or "Knew"',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · perceived; knew; understood with deep awareness',
          description:
            'David does not receive a vision or hear a voice here. He "yada" — he perceives, he knows with understanding. The word carries the sense of coming to know something through experience, through observation, through the unfolding of events. David watches the nations honor him, watches Hiram send gifts, and in that flow of events, he understands what the Lord has done.',
        },
        {
          kind: 'carry',
          html:
            'How do you perceive God&apos;s confirmation in your own life? It rarely comes as a thunderbolt. More often, it arrives through the unfolding of circumstances — a door opening, a gift received, a season of peace after struggle. David teaches us to watch, to notice when the external world aligns with what we sense God is doing. What sign of God&apos;s confirmation have you been slow to recognize?',
        },
        {
          kind: 'reflection',
          id: 'hiram-cedar',
          prompt: 'David perceives the Lord&apos;s confirmation through the gift of cedar and skilled workers from another king. When have you seen God&apos;s hand through the actions or generosity of others?',
        },
      ],
    },

    /* ─── 1 Chronicles 14:3–7 — David's Children ──────────────────────── */
    {
      ref: '1 Chronicles 14:3–7',
      title: 'David Takes More Wives; Solomon Is Born',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(3, 'And David took more wives at Jerusalem: and David begat more sons and daughters.'),
            {
              number: 4,
              spans: [
                t('Now these are the names of his children which he had in Jerusalem; Shammua, and Shobab, Nathan, and '),
                hp('Solomon', 'c14-solomon'),
                t(','),
              ],
            },
            plain(5, 'And Ibhar, and Elishua, and Elpalet,'),
            plain(6, 'And Nogah, and Nepheg, and Japhia,'),
            plain(7, 'And Elishama, and Beeliada, and Eliphalet.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c14-solomon',
          html:
            'Among David&apos;s many children born in Jerusalem is Solomon — the one who will build the temple that David cannot build. In this moment, Solomon is listed simply as one son among many. Yet the reader who knows the rest of Scripture understands that his birth marks a turning point. Solomon will inherit not just a kingdom, but the commission to build the Lord&apos;s house. The names of David&apos;s children testify to God&apos;s blessing: many sons, many daughters, a household full of life. Yet from this abundance, one child will be chosen for a singular purpose.',
        },
        {
          kind: 'commentary',
          id: 'c14-many-wives',
          html:
            'David takes "more wives" at Jerusalem — a practice that will later become complicated for David&apos;s descendants and a point of theological question for the readers of Scripture. The text records it factually, without commentary. David is establishing himself as a great king in the manner of his time — a household that demonstrates his power and his fertility. Yet the reader is invited to observe the facts without judgment, while understanding that other parts of Scripture will eventually call believers to a different standard.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we give birth to something that will grow far beyond what we can imagine. We nurture a child, teach a student, plant a seed — and we cannot know what harvest will come from it. David fathers Solomon without knowing that his son will accomplish what he himself cannot. The faithfulness is in the giving, not in controlling the outcome. What have you begun that you trust God to complete through others?',
        },
        {
          kind: 'reflection',
          id: 'david-children',
          prompt: 'Solomon appears here simply as one among David&apos;s many children. Yet he will be the one chosen for the greatest task. How does this teach you to honor the gifts of all people, knowing that you cannot always see who God will call to greatness?',
        },
      ],
    },

    /* ─── 1 Chronicles 14:8–12 — First Battle: Baal-perazim ───────────── */
    {
      ref: '1 Chronicles 14:8–12',
      title: 'The First Battle: Baal-perazim, the "Lord of Breakings Forth"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(8, 'And when the Philistines heard that David was anointed king over all Israel, all the Philistines went up to seek David. And David heard of it, and went out against them.'),
            {
              number: 9,
              spans: [
                t('And the Philistines came and spread themselves in the valley of Rephaim.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And '),
                hg('David enquired of God', 'c14-inquire-god'),
                t(', saying, Shall I go up against the Philistines? wilt thou deliver them into mine hand? And the Lord said unto him, Go up; for I will deliver them into thine hand.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('So they came up to Baal-perazim; and David smote them there. Then '),
                hp('David said, God hath broken in upon mine enemies', 'c14-god-broken'),
                t(' by mine hand like the breaking forth of waters: therefore they called the name of that place Baal-perazim.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And when they had left their gods there, David gave a commandment, and they were '),
                hy('burned with fire', 'c14-gods-burned'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c14-inquire-god',
          html:
            'The Philistines respond to David&apos;s anointing as king by marching against him — they understand what an anointed king means. And David&apos;s first action is not to ride out on his own strength. He inquires of God. "Shall I go up? Will you deliver them into my hand?" This is the posture of a king: not self-reliant, but dependent. He waits for God&apos;s answer. And the answer comes: "Go up; for I will deliver them into thine hand." God does not promise David will win. God promises that He will deliver them into David&apos;s hand. The victory belongs to the Lord.',
        },
        {
          kind: 'hebrew',
          id: 'c14-baal-perazim',
          title: 'Baal-perazim — "Lord of Breakings Forth"',
          script: 'בַּ֫עַל־פְּרָצִים',
          translit: '<strong>Baal-perazim</strong> · Lord of breakings forth; Master of breakings',
          description:
            'The place is named Baal-perazim — a name that commemorates God&apos;s power. "Baal" means lord or master, and "perazim" comes from "paratz," meaning to break, to burst through, to overflow. It is the word used of floodwaters breaking through a dam. God has broken through the Philistine ranks like waters breaking through a breach. The name immortalizes what happened there: God as the one who breaks through all obstacles, who pours forth irresistibly.',
        },
        {
          kind: 'commentary',
          id: 'c14-god-broken',
          html:
            'David ascribes the victory to God: "God hath broken in upon mine enemies." The imagery is of a flood, of waters overwhelming a barrier. David himself becomes the conduit through which God&apos;s power flows. He smites the Philistines, but he knows it is God&apos;s hand at work through his own. This is the essence of covenantal kingship: the king acts, but God&apos;s power is sovereign. The victory belongs to the Lord; David is the instrument.',
        },
        {
          kind: 'commentary',
          id: 'c14-gods-burned',
          html:
            'When the battle is won, the Philistines leave their gods behind. David gives the command: burn them with fire. This is not an act of spite or desecration. It is an affirmation: false gods have no power here. This land belongs to the God of Israel. By burning the Philistine idols, David consecrates the victory to the Lord alone. The false gods are removed from the landscape.',
        },
        {
          kind: 'christ',
          id: 'c14-christ-breakthrough',
          title: 'Christ Connection — The King Who Breaks Through',
          html:
            'Jesus, the true King, speaks of himself in terms that echo Baal-perazim. "All power is given unto me in heaven and in earth" (Matthew 28:18). Like David at Baal-perazim, Christ breaks through every barrier — death, sin, the power of darkness — and calls his people to follow. Yet Christ&apos;s breakthrough is not through violence. It is through sacrifice, through the cross, through a love that "breaks in upon" the human heart and transforms it. The true "breaking forth" is not conquest, but redemption. Christ goes before us into every battle we face, just as God went before David at Baal-perazim.',
        },
        {
          kind: 'carry',
          html:
            'When you face an obstacle that seems impossible, do you inquire of God before you act? Do you wait for His direction? David did — and found that God&apos;s power is not static, but active, "breaking in" on his behalf. The question for us is not whether we are strong enough, but whether we will let God&apos;s strength work through us. What "Baal-perazim" moment are you facing — a place where you need God to break through?',
        },
        {
          kind: 'reflection',
          id: 'baal-perazim',
          prompt: 'David inquired of God before going into battle and waited for an answer. When have you tried to solve a problem on your own strength first, then later learned that God wanted to break through in a different way?',
        },
      ],
    },

    /* ─── 1 Chronicles 14:13–17 — Second Battle: The Mulberry Trees ─── */
    {
      ref: '1 Chronicles 14:13–17',
      title: 'The Second Battle: God Goes Before Through the Mulberry Trees',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(13, 'And the Philistines yet again spread themselves abroad in the valley.'),
            {
              number: 14,
              spans: [
                t('Therefore David enquired again of God; and God said unto him, Go not up after them; '),
                hg('turn away from them', 'c14-turn-away'),
                t(', come upon them over against the mulberry trees.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And it shall be, when thou shalt hear a '),
                hp('sound of going in the tops of the mulberry trees', 'c14-sound-mulberry'),
                t(', that then thou shalt go out to battle: for God is gone forth before thee to smite the host of the Philistines.'),
              ],
            },
            plain(16, 'David therefore did as God commanded him: and they smote the host of the Philistines from Gibeon even to Gazer.'),
            {
              number: 17,
              spans: [
                t('And the '),
                hg('fame of David', 'c14-fame-david'),
                t(' went out into all lands; and the Lord brought the fear of him upon all nations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c14-turn-away',
          html:
            'God&apos;s second command is strikingly different from His first. At Baal-perazim, God said: "Go up; for I will deliver them into thine hand." Now, He says: "Go not up after them; turn away from them." The strategy has changed. David must circle around and approach from a different direction — "over against the mulberry trees." This teaches a profound lesson: God does not follow a formula. The tactics that worked once will not work again. A king — any leader — must inquire afresh of God in each new circumstance. Faithfulness is not repetition; it is responsiveness.',
        },
        {
          kind: 'hebrew',
          id: 'c14-bekha-im',
          title: 'Bekha\'im — "Mulberry" or "Balsam Trees"',
          script: 'בְּכָאִים',
          translit: '<strong>Bekha\'im</strong> · mulberry trees; balsam trees; weeping trees',
          description:
            'The trees are "bekha\'im" — often rendered "mulberry" or "balsam" trees. There is a play on words here: "bekha" also suggests "weeping" (bakah). The name itself carries a sense of something precious, something costly. David will win his victory not through a direct assault, but by listening for God&apos;s voice in the sound that comes from these trees — as if the very landscape is teaching him to hear.',
        },
        {
          kind: 'commentary',
          id: 'c14-sound-mulberry',
          html:
            'God gives David an extraordinary sign: "When thou shalt hear a sound of going in the tops of the mulberry trees, that then thou shalt go out to battle." David must listen. He must hear a sound — the sound of God going before him, moving through the tree-tops like a wind, like a rushing, like something alive and present. This is not a strategy David has conceived. This is God revealing His presence through a sound, a sign, a movement in the landscape. David&apos;s obedience is bound up with his ability to hear.',
        },
        {
          kind: 'commentary',
          id: 'c14-god-gone-forth',
          html:
            'The promise is clear: "God is gone forth before thee to smite the host of the Philistines." God does not stand beside David or behind him, giving advice. God goes before him. God initiates. God smites. David follows. This is the deepest truth of covenantal kingship: the king leads his people, but only because God has already gone before, making the way possible.',
        },
        {
          kind: 'commentary',
          id: 'c14-fame-david',
          html:
            'The chapter closes with the fruit of David&apos;s obedience: his fame goes out into all lands. But notice — it is not David&apos;s strength that brings fear upon the nations. It is what the Lord brings. "The Lord brought the fear of him upon all nations." David&apos;s exaltation is the fruit of God&apos;s action. The king is famous not because he won battles, but because everyone has seen that the Lord fights for him.',
        },
        {
          kind: 'christ',
          id: 'c14-christ-before',
          title: 'Christ Connection — The One Who Goes Before',
          html:
            'Jesus tells His disciples: "I am the way, the truth, and the life" (John 14:6). He does not call us to follow a map or a formula; He calls us to follow Him, the living way. Like David waiting to hear the sound of God moving through the mulberry trees, we are called to listen for the voice of the One who has already gone before us. Christ does not wait for us to figure out the strategy; He goes ahead, making the way. In Acts 2:2, the coming of the Holy Spirit is described as "a sound from heaven as of a rushing mighty wind" — that same sound in the treetops, so to speak, announcing that God Himself is present and moving. Christ, who ascended before us, sends the Spirit to guide us into all truth.',
        },
        {
          kind: 'carry',
          html:
            'Are you trying to follow yesterday&apos;s strategy? Are you listening for God&apos;s direction today? David&apos;s second victory came not from repeating his first victory, but from hearing God&apos;s voice in a new circumstance. The mulberry trees are whispering that God is present, moving, going before. The question is not whether God will act; the question is whether you will listen. What sound is God making in the trees of your own life right now?',
        },
        {
          kind: 'reflection',
          id: 'mulberry-trees',
          prompt: 'David had to listen carefully to hear the sound of God going before him. What does it look like in your own life to listen for God&apos;s direction rather than relying on a strategy that worked before?',
        },
      ],
    },
  ],
};
