import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 3 — The Three Kings and the Ditches Filled with Water
 *
 * When Moab rebels against the tribute owed to Israel, Jehoram the king gathers
 * two allies and marches into the wilderness. But the armies find themselves in
 * dire need — no water for three days, and the men growing faint. In desperation,
 * Jehoram turns to Elisha the prophet, not because Elisha loves him, but because
 * Jehoshaphat king of Judah is with him. And there, in the silence while a minstrel
 * plays, the Spirit comes upon the prophet, and he speaks a word that will fill the
 * valley with water and deliver the enemy into Israel's hand. But the chapter ends
 * in horror: the king of Moab, seeing his battle lost, takes his own firstborn son
 * and offers him as a burnt offering upon the wall. The great indignation falls.
 */
export const KINGS_2_3: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 3,

  estimatedMinutes: { beginner: 4, intermediate: 12, deep: 16 },
  intros: [
    'Jehoram, son of Ahab, has assumed the throne of Israel. Though he removed the image of Baal that his father had made, he still cleaves to the sins of Jeroboam — idolatry that will not let go. And Mesha, king of Moab, who has long paid a heavy tribute to the house of Israel — 100,000 lambs, 100,000 rams — now rebels. The word of the king goes out: prepare for war.',
    'Jehoram calls upon Jehoshaphat king of Judah, a man who has walked in the ways of the Lord. "The king of Moab hath rebelled against me: wilt thou go with me to fight against Moab?" Jehoshaphat answers yes. The king of Edom is brought into the alliance. Three kings march together. And then, in the wilderness, the armies face a crisis that no strategy can solve: there is no water. The men cry out. And the king of Israel, seeing desperation, calls for the prophet of God — not because he believes, but because Jehoshaphat does. Here begins a story of faith in the presence of unbelief, and of a miracle that will test what men will do when God delivers the enemy into their hand.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 3',
    quote:
      'When the minstrel played, the hand of the Lord came upon the prophet. In the silence before God speaks, He fills the valley and delivers the enemy. The miracle comes not to the faithless alone, but through the faithful who stand among them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 3 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 3:1–8 — The Three Kings March to War ──────────────────────── */
    {
      ref: '2 Kings 3:1–8',
      title: 'The Three Kings March to War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Now Jehoram the son of Ahab began to reign over Israel in Samaria the eighteenth year of Jehoshaphat king of Judah, and reigned twelve years.'),
            plain(2, 'And he wrought evil in the sight of the Lord; but not like his father, and like his mother: for he put away the image of Baal that his father had made.'),
            plain(3, 'Nevertheless he cleaved unto the sins of Jeroboam the son of Nebat, which made Israel to sin; he departed not therefrom.'),
            plain(4, 'And Mesha king of Moab was a sheepmaster, and rendered unto the king of Israel an hundred thousand lambs, and an hundred thousand rams, with the wool thereof.'),
            plain(5, 'But it came to pass, when Ahab was dead, that the king of Moab rebelled against the king of Israel.'),
            plain(6, 'And king Jehoram went out of Samaria the same time, and numbered all Israel.'),
            plain(7, 'And he went and sent to Jehoshaphat the king of Judah, saying, The king of Moab hath rebelled against me: wilt thou go with me against Moab to battle? And he said, I will go up: I am as thou art, my people as thy people, my horses as thy horses.'),
            plain(8, 'And he said, Which way shall we go up? And he answered, The way through the wilderness of Edom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoram-partial-reform',
          html:
            'Jehoram is neither as wicked as his father Ahab nor as reform-minded as his contemporary Jehoshaphat. He removes the image of Baal — a gesture toward the God of Israel — yet clings to Jeroboam&apos;s sins, the golden calves and high places that split the kingdom from within. He is a king caught between worlds: not committed to evil, but not committed to righteousness either. He will call upon the prophet when he needs God&apos;s help, but does not live in obedience to God&apos;s will. This is the character of a man who knows the Lord exists but does not fear Him.',
        },
        {
          kind: 'commentary',
          id: 'mesha-rebellion',
          html:
            'Mesha, king of Moab, has paid a crippling tribute — 100,000 lambs and 100,000 rams. This was the cost of subjugation under the house of Israel. When Ahab dies, Mesha sees his opportunity and rebels. The rebel has reason: the weight of tribute has been unbearable. But in rebelling against Israel, he is moving toward a fate he cannot foresee.',
        },
        {
          kind: 'commentary',
          id: 'jehoshaphat-alliance',
          html:
            'Jehoshaphat, the righteous king of Judah, agrees to join Jehoram. "I am as thou art, my people as thy people, my horses as thy horses." This is covenantal language — the language of brothers in arms. Yet the reader knows what Jehoshaphat perhaps does not yet: that his presence with the faithless king will be the only reason God looks upon them with mercy.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we find ourselves walking alongside people who do not share our faith, even in circumstances we did not choose. Jehoshaphat committed himself to the alliance without knowing the wilderness that lay ahead. The path forward was not the path any of them expected. What happens when you commit to walking with others into uncertainty?',
        },
        {
          kind: 'reflection',
          id: 'three-kings-march',
          prompt: 'Jehoshaphat agreed to fight without knowing what lay ahead. When have you committed to something — a relationship, a cause, a path — without being able to see the outcome? What gave you the courage to say yes?',
        },
      ],
    },

    /* ─── 2 Kings 3:9–12 — No Water in the Wilderness ───────────────────────── */
    {
      ref: '2 Kings 3:9–12',
      title: 'No Water in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(9, 'So the king of Israel went, and the king of Judah, and the king of Edom: and they fetched a compass of seven days&apos; journey: and there was no water for the host, and for the cattle that followed them.'),
            {
              number: 10,
              spans: [
                t('And the king of Israel said, '),
                hg('Alas! that the Lord hath called these three kings together, to deliver them into the hand of Moab!', 'no-water-despair'),
                t(''),
              ],
            },
            plain(11, 'But Jehoshaphat said, Is there not here a prophet of the Lord, that we may enquire of the Lord by him? And one of the king of Israel&apos;s servants answered and said, Here is Elisha the son of Shaphat, which poured water on the hands of Elijah.'),
            plain(12, 'And Jehoshaphat said, The word of the Lord is with him. So the king of Israel and Jehoshaphat and the king of Edom went down to him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'no-water-despair',
          html:
            'After seven days of marching through the wilderness toward Moab, the armies face a crisis that no army can overcome: there is no water. The animals are dying. The men are faint. And in this moment of desperation, King Jehoram reveals the poverty of his faith. He does not cry out to the Lord for help. Instead, he accuses the Lord of treachery: "The Lord hath called these three kings together, to deliver them into the hand of Moab!" He interprets the crisis as evidence that God is against him. This is the cry of a man who does not know God, who sees only the surface of events and assumes the worst.',
        },
        {
          kind: 'commentary',
          id: 'jehoshaphat-prophet',
          html:
            'But Jehoshaphat, the righteous king, thinks of the prophet. "Is there not here a prophet of the Lord, that we may enquire of the Lord by him?" Even in the wilderness, even with the armies dying of thirst, his first instinct is to seek the word of the Lord. This is the difference between the faithful and the faithless: one seeks God when the crisis comes; the other accuses God of abandonment.',
        },
        {
          kind: 'commentary',
          id: 'elisha-shaphat',
          html:
            'Elisha is identified as the one who "poured water on the hands of Elijah" — he was Elijah&apos;s servant, the one who performed the humble tasks of discipleship. He stood in the presence of the prophet who called fire from heaven, who raised the dead, who heard the word of the Lord in the midst of trials. And now Elisha himself has become a prophet. The mantle has passed, and with it, the authority to speak God&apos;s word.',
        },
        {
          kind: 'carry',
          html:
            'In moments of desperation, what is your first instinct? Do you turn toward God through His word and His servants, or do you assume that God has abandoned you? Jehoshaphat&apos;s response — to seek the prophet, to enquire of the Lord — is a model of faith in the wilderness. Even when everything seems lost, God has not left you without a voice to hear.',
        },
        {
          kind: 'reflection',
          id: 'water-wilderness',
          prompt: 'When you are in a dry place — spiritually, emotionally, or circumstantially — where do you turn? How does Jehoshaphat&apos;s instinct to seek the prophet speak to the way you look for God?',
        },
      ],
    },

    /* ─── 2 Kings 3:13–18 — Elisha's Word and the Minstrel ────────────────────── */
    {
      ref: '2 Kings 3:13–18',
      title: 'Elisha&apos;s Word and the Minstrel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('And Elisha said unto the king of Israel, What have I to do with thee? get thee to the prophets of thy father, and to the prophets of thy mother. And the king of Israel said unto him, Nay: for the '),
                hg('Lord hath called these three kings together', 'elisha-rebuke'),
                t(', to deliver them into the hand of Moab.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Elisha said, As the Lord of hosts liveth, before whom I stand, surely, were it not that I regard the presence of Jehoshaphat the king of Judah, I would not look toward thee, nor see thee.'),
              ],
            },
            plain(15, 'But now bring me a minstrel. And it came to pass, when the minstrel played, that the hand of the Lord came upon him.'),
            plain(16, 'And he said, Thus saith the Lord, Make this valley full of ditches.'),
            plain(17, 'For thus saith the Lord, Ye shall not see wind, neither shall ye see rain; yet that valley shall be filled with water, that ye may drink, both ye, and your cattle, and your beasts.'),
            plain(18, 'This is but a light thing in the sight of the Lord: he will deliver also the Moabites into your hand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'elisha-rebuke',
          html:
            'Elisha&apos;s opening is harsh. He turns away from the king of Israel: "What have I to do with thee? Get thee to the prophets of thy father, and to the prophets of thy mother." This is a rebuke rooted in Jehoram&apos;s halfhearted faith. Jehoram clings to the sins of Jeroboam, to the calf-worship of his forefathers. Why should Elisha listen to a king who has not turned from the ways of Ahab? The prophet&apos;s refusal is not coldness; it is holiness. He will not pretend to speak for God to a king who does not seek God.',
        },
        {
          kind: 'commentary',
          id: 'elisha-jehoshaphat',
          html:
            'But then Elisha speaks words of extraordinary grace: "Were it not that I regard the presence of Jehoshaphat the king of Judah, I would not look toward thee, nor see thee." The prophet will not look at Jehoram for Jehoram&apos;s sake. He looks at him only for the sake of the righteous king standing beside him. This is a principle of intercession: the faithful stand in the gap for the faithless. One person&apos;s righteousness can hold back judgment and even bring blessing to those unworthy of it. Jehoshaphat&apos;s presence saves them all.',
        },
        {
          kind: 'commentary',
          id: 'minstrel-worship',
          html:
            'And then: "Bring me a minstrel." In the silence of the minstrel&apos;s playing, the Spirit comes upon the prophet. Music prepares the heart. Worship opens the channel between earth and heaven. The minstrel does not speak; he plays. And in that silence, in that moment of worship, the hand of the Lord comes upon Elisha, and he is ready to speak the word of deliverance.',
        },
        {
          kind: 'hebrew',
          id: 'geb-ditches',
          title: 'Geb — "Ditch" or "Cistern"',
          script: 'גֵּב',
          translit: '<strong>Geb</strong> · ditch; pit; a hollow place dug in the ground',
          description:
            'The word for the ditches the prophet commands them to dig is "geb" — a hollow, a pit, a depression in the ground. Ordinarily, a ditch in the wilderness holds nothing but air and dust. But the prophet commands them to fill the valley with ditches, and the Lord will fill those ditches with water. The image is stark: dig the emptiness, and God will fill it. Faith is the act of preparing a vessel for what God will pour.',
        },
        {
          kind: 'hebrew',
          id: 'choir-worship',
          title: 'Nagan — "To Play" or "To Make Music"',
          script: 'נָגַן',
          translit: '<strong>Nagan</strong> · to play an instrument; to make music; to sing',
          description:
            'The minstrel "nagan" — played, made music. The word carries the sense of active engagement with the sacred. Music is not mere entertainment but preparation of the soul. In the presence of the prophetic word, worship comes first. The minstrel plays, and the Spirit comes. The sequence matters: we do not play music after we have already heard the word; we prepare our hearts through worship, and then the word of the Lord comes.',
        },
        {
          kind: 'carry',
          html:
            'The prophet says: dig the ditches. Do the work. Prepare the vessel. And God will fill it. Faith is not passive waiting. It is active preparation — the readiness to receive. What ditches are you digging in your spiritual life? What work are you doing to prepare for what God will pour?',
        },
        {
          kind: 'reflection',
          id: 'minstrel-worship',
          prompt: 'When the minstrel played, the Spirit came upon the prophet. What role does worship or silence play in your own readiness to hear God&apos;s word? How does music or sacred space prepare your heart?',
        },
      ],
    },

    /* ─── 2 Kings 3:19–25 — The Ditches Filled and the Valley Flooded ────────── */
    {
      ref: '2 Kings 3:19–25',
      title: 'The Ditches Filled with Water',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'And ye shall smite every fenced city, and every choice city, and shall fell every good tree: only in Kir-haraseth shall ye leave the stones thereof; howbeit the slingers shall go about it, and smite it.'),
            plain(20, 'And it came to pass in the morning, when the meat offering was offered, behold, there came water by the way of Edom, and the country was filled with water.'),
            plain(21, 'And when all the Moabites heard that the kings were come up to fight against them, they gathered themselves together by all that were able to put on armour, and stood in the border.'),
            plain(22, 'And they rose up early in the morning, and the sun shone upon the water: and the Moabites saw the water on the other side as red as blood:'),
            plain(23, 'And they said, This is blood: the kings are surely slain one against another: now therefore, Moab, to the spoil.'),
            plain(24, 'And when they came to the camp of Israel, the Israelites rose up and smote the Moabites, so that they fled before them: but they invaded the country, and smote the Moabites.'),
            plain(25, 'And they beat down the cities, and on every good piece of land cast every man his stone, and filled it; and they stopped all the wells of water, and felled all the good trees: only in Kir-haraseth left they the stones thereof; howbeit the slingers went about it, and smote it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'water-miracle',
          html:
            'The miracle comes. "It came to pass in the morning, when the meat offering was offered, behold, there came water by the way of Edom, and the country was filled with water." No rain falls. No wind blows. Yet water comes — flowing from the direction of Edom, filling the valley. The word speaks it, and it is so. The prophet of God has called forth water in the wilderness, and the armies drink, and their animals drink, and they live.',
        },
        {
          kind: 'commentary',
          id: 'blood-water',
          html:
            'In the morning, the sun shines upon the water. And the Moabites, seeing from a distance, see the light reflected red in the water. "This is blood," they cry out. "The kings are surely slain one against another: now therefore, Moab, to the spoil." The Moabites interpret what they see through their own fear. They see what they expect to see — evidence that their enemies have destroyed themselves. And in that misreading, they rush toward their own destruction. God uses their false vision against them. The water that saved Israel becomes the instrument of Moab&apos;s deception and downfall.',
        },
        {
          kind: 'commentary',
          id: 'smite-moab',
          html:
            'When the Moabites draw near, the armies of Israel rise up and smite them. The battle is short. The Moabites flee. And Israel pursues, destroying the cities, stopping the wells, felling the good trees — an act of total devastation. Only Kir-haraseth, the capital, is left for a siege. The land is made barren. The enemy is routed.',
        },
        {
          kind: 'carry',
          html:
            'God uses the same provision — the water — in opposite ways: to save those who trust, and to deceive those who do not. The Moabites saw the water as evidence of their enemies&apos; defeat. They were wrong. Their misreading of what God had done became the cause of their ruin. What are we seeing in our lives, and are we seeing it rightly? Are we trusting God&apos;s interpretation of events, or our own fearful assumptions?',
        },
        {
          kind: 'reflection',
          id: 'ditches-filled',
          prompt: 'The Moabites saw the water as blood — evidence of disaster. But it was the provision of God. When has something in your life looked like disaster or defeat, only to reveal itself later as deliverance or mercy?',
        },
      ],
    },

    /* ─── 2 Kings 3:26–27 — Mesha's Desperate Sacrifice ──────────────────────── */
    {
      ref: '2 Kings 3:26–27',
      title: 'Mesha&apos;s Sacrifice and the Great Indignation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(26, 'And when the king of Moab saw that the battle was too sore for him, he took with him seven hundred men that drew swords, to break through even unto the king of Edom: but they could not.'),
            plain(27, 'Then he took his eldest son that should have reigned in his stead, and offered him for a burnt offering upon the wall. And there was great indignation against Israel: and they departed from him, and returned to their own land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mesha-desperation',
          html:
            'The king of Moab, seeing his battle lost, makes a last, desperate attempt to break through to the king of Edom — perhaps to strike a deal, perhaps to bargain for his life. Seven hundred armed men follow him. But they cannot break through. The battle is lost. Kir-haraseth will fall. And in that moment of total defeat, facing the collapse of his kingdom, Mesha does something that will haunt the narrative forever.',
        },
        {
          kind: 'commentary',
          id: 'child-sacrifice',
          html:
            'He takes his eldest son — the one destined to reign after him, the heir, the future — and offers him as a burnt offering upon the wall. This is not a whispered act in a temple. This is done publicly, where the armies can see. The horror is unambiguous. The text does not soften it. A father, in desperation, burns his own child.',
        },
        {
          kind: 'commentary',
          id: 'great-indignation',
          html:
            'And then: "There was great indignation against Israel: and they departed from him, and returned to their own land." The Hebrew is difficult here. The indignation — whose indignation? Against whom? Is it the wrath of God, manifest as a power that strikes Israel and forces them to withdraw? Is it the horror of the armies, who are so appalled by the sacrifice that they flee? Is it the divine judgment on child sacrifice itself, so revulsive that even the victors cannot remain? The text leaves it cryptic. But the effect is clear: Israel withdraws. They have won the battle. But they do not take the city. They do not complete the conquest. Something in that act of sacrifice has broken the momentum of their victory and sent them home.',
        },
        {
          kind: 'carry',
          html:
            'What do we make of a man who loves his kingdom more than his own child, who would kill his son to save his throne? The chapter does not judge Mesha. It simply shows. But in showing, it raises a question for us: What are we willing to sacrifice? What becomes sacred when we are desperate? And when we see others make that choice, what is our responsibility? The silence of the text is itself a kind of judgment: the act is so terrible that no commentary is needed.',
        },
        {
          kind: 'reflection',
          id: 'sacrifice-desperate',
          prompt: 'Mesha offered his firstborn to save his kingdom. What desperation in your own life might tempt you to sacrifice what is most precious? How do you guard against the temptation to compromise the sacred for the merely valuable?',
        },
      ],
    },

    /* ─── Christ Connection ───────────────────────────────────────────────────── */
    {
      ref: '',
      title: 'Christ Connection',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-own-blood',
          title: 'Christ Connection — He Poured Out His Own Blood',
          html:
            'In this chapter, a desperate king offers his firstborn son as a sacrifice to appease the gods and save his kingdom. The act is presented as the ultimate violation — a parent offering a child, using the child&apos;s death to purchase power and survival.<br><br>But there is another King, from another kingdom, who also poured out blood. "Not My will, but Thine, be done" (Luke 22:42). Jesus did not offer another&apos;s blood; He offered His own. He did not bargain for a earthly throne; He purchased redemption for all people. The contrast is absolute: Mesha pours out his son&apos;s blood to save himself. Christ pours out His own blood to save the world.<br><br>And there is more. The Spirit came upon Elisha when the minstrel played — in worship, in silence, the prophet became ready to speak God&apos;s word. Likewise, the Spirit fills us when we prepare our hearts through worship and prayer. We do not earn the Spirit by goodness; we receive the Spirit through faith and submission. As the ditches were dug in faith, empty and waiting, so we make ourselves empty vessels, ready to be filled with the Spirit of God (John 14:15–17; Acts 2:1–4).',
        },
      ],
    },
  ],
};
