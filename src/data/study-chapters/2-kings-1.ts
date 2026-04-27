import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 1 — Ahaziah's Fall & Fire from Heaven
 *
 * A young king lies broken on his sickbed, and instead of calling on the God
 * of Israel, he sends messengers to inquire of a foreign deity. But Elijah
 * stands in the way — not to argue theology, but to speak the Lord's word:
 * Ahaziah will not rise from that bed. When captains come with fire and sword
 * to arrest the prophet, fire falls from heaven. Only the third captain, who
 * kneels and pleads for mercy, walks away alive. In this chapter, we see a
 * clash between covenant and idolatry, between the boldness of the prophet and
 * the mercy of God toward those who humble themselves.
 */
export const KINGS_2_1: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 1,

  intros: [
    'The book of 2 Kings opens with a kingdom in disarray. King Ahab is dead, his dynasty crumbling, and his son Ahaziah has taken the throne of Israel. But Ahaziah is not his father\'s equal. When he falls through a lattice in his upper chamber and lies gravely wounded, his first instinct is not to pray to the Lord who delivered his people from Egypt, but to send messengers to Baal-zebub, the god of Ekron — a foreign deity whose very name is a parody, "lord of the flies."',
    'But the Lord speaks to Elijah the prophet, and Elijah goes to meet the king\'s messengers with a question that cuts to the heart of covenant: "Is it not because there is not a God in Israel that ye go to enquire of Baal-zebub?" What follows is a display of divine authority that burns across three captains — and a lesson in the difference between defiance and humility, between those who cling to power and those who bow before it.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 1',
    quote:
      'When a king rejects the God of his covenant and bows instead to foreign gods, the judgment falls swift. But mercy comes to those who humble themselves. This is the pattern of the kingdom: power belongs to the Lord, and His word, spoken through His prophets, will not return empty.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 1 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 1:1–4 — Ahaziah Falls & Seeks False Gods ────────────── */
    {
      ref: '2 Kings 1:1–4',
      title: 'A King Falls & Turns to Idols',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Then Moab rebelled against Israel after the death of Ahab.'),
            plain(2, 'And Ahaziah fell down through a lattice in his upper chamber that was in Samaria, and was sick: therefore he sent messengers, and said unto them, Go, enquire of Baal-zebub the god of Ekron whether I shall recover of this disease.'),
            plain(3, 'But the angel of the Lord said to Elijah the Tishbite, Arise, go up to meet the messengers of the king of Samaria, and say unto them, Is it not because there is not a God in Israel, that ye go to enquire of Baal-zebub the god of Ekron?'),
            plain(4, 'Now therefore thus saith the Lord, Thou shalt not come down from that bed on which thou art gone up, but shalt surely die. And Elijah departed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ahaziah-fall',
          html:
            'Ahaziah\'s injury is not random. He falls through a lattice in his own house — a sign that his power, his position, his very roof cannot protect him. The moment he is vulnerable, his first instinct reveals his heart: he seeks counsel from a foreign god rather than from the Lord. He has inherited a kingdom; he has not inherited his father\'s grip on power, nor his willingness to turn to Israel\'s God.',
        },
        {
          kind: 'hebrew',
          id: 'baalzebub',
          title: 'Baal-zebub — "Lord of the Flies"',
          script: 'בַּ֫עַל זְבוּב',
          translit: '<strong>Baal-zevuv</strong> · lord of flies; a parody name for the Philistine god of Ekron',
          description:
            'The Philistines worshipped a god they called "Baal" (lord) of the city of Ekron. The biblical text renders this name as "Baal-zebub" — "lord of the flies" — a mocking transliteration that transforms the deity\'s name into something contemptible. By sending to Ekron, Ahaziah seeks counsel from a foreign god; by the text\'s naming, he seeks it from the lord of flies. The very name denounces the choice.',
        },
        {
          kind: 'commentary',
          id: 'covenant-betrayal',
          html:
            'The angel\'s question cuts to the core issue: "Is it not because there is not a God in Israel?" This is not a complaint about foreign policy or political alliances. This is a covenant crisis. Israel\'s God is present, accessible, proven through generations. Yet Ahaziah bypasses Him to consult a foreign deity. The messengers are not being sent on a diplomatic mission; they are being sent to break covenant.',
        },
        {
          kind: 'carry',
          html:
            'When crisis comes, where do we turn first? Ahaziah\'s instinct, when wounded and desperate, was to seek help from a source that could not help — a god who did not exist, a lord of flies in a distant city. We do the same thing whenever we run to fear, to shame, to false authorities, to voices that promise what only God can deliver. Elijah doesn\'t argue theology; he speaks the Lord\'s word and walks away. Sometimes the most faithful response to spiritual confusion is simply to declare what is true and let the Lord settle the matter.',
        },
        {
          kind: 'reflection',
          id: 'ahaziah-crisis',
          prompt: 'When you face a crisis or setback, where is your first instinct to turn? What would it look like to turn to the God of Israel — to the true source of life — before anything else?',
        },
      ],
    },

    /* ─── 2 Kings 1:5–8 — The King Hears the Messenger's Account ─────── */
    {
      ref: '2 Kings 1:5–8',
      title: 'A Man of God Intercepts the Message',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'And when the messengers turned back unto him, he said unto them, Why are ye now turned back?'),
            plain(6, 'And they said unto him, There came a man up to meet us, and said unto us, Go, turn again unto the king that sent you, and say unto him, Thus saith the Lord, Is it not because there is not a God in Israel, that thou sendest to enquire of Baalzebub the god of Ekron? therefore thou shalt not come down from that bed on which thou art gone up, but shalt surely die.'),
            plain(7, 'And he said unto them, What manner of man was he which came up to meet you, and told you these words?'),
            plain(8, 'And they answered him, He was an hairy man, girt with a girdle of leather about his loins. And he said, It is Elijah the Tishbite.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'elijah-intercept',
          html:
            'The messengers are stopped before they can reach Ekron. They are turned back by a man who speaks for the Lord — and the message is not a suggestion but a sentence: Ahaziah will not recover. There is no appeal, no negotiation. The Lord has spoken. The word will not return empty.',
        },
        {
          kind: 'commentary',
          id: 'elijah-appearance',
          html:
            'The description of Elijah — hairy, girt with a leather girdle — is not random detail. This is how a wilderness prophet dresses, how a man set apart by God appears. The messengers do not know Elijah\'s name until they return to the king and describe him. Ahaziah recognizes him at once. He knows who this man is, and he knows what his word means.',
        },
        {
          kind: 'carry',
          html:
            'Elijah doesn\'t ask permission to speak. He doesn\'t soften the message to make it palatable. He says what the Lord has spoken, and then he departs. His role is not to negotiate with the king or to plead the case of the righteous. It is to speak the Lord\'s word with clarity and let that word do its work. There is a kind of love in this boldness: to tell the truth when it would be easier to stay silent.',
        },
        {
          kind: 'reflection',
          id: 'man-of-god',
          prompt: 'Ahaziah recognizes Elijah by his appearance and by the word he speaks. What makes it clear to others that you belong to God? What would change if you spoke God\'s truth as boldly as Elijah did?',
        },
      ],
    },

    /* ─── 2 Kings 1:9–12 — Two Captains & Fire from Heaven ────────────── */
    {
      ref: '2 Kings 1:9–12',
      title: 'Two Captains Sent, Two Consumed by Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(9, 'Then the king sent unto him a captain of fifty with his fifty. And he went up to him: and, behold, he sat on the top of an hill. And he spake unto him, Thou man of God, the king hath said, Come down.'),
            plain(10, 'And Elijah answered and said to the captain, If I be a man of God, then let fire come down from heaven, and consume thee and thy fifty. And there came down fire from heaven, and consumed him and his fifty.'),
            plain(11, 'Again also he sent unto him another captain of fifty with his fifty. And he answered and said unto him, O man of God, thus hath the king said, Come down quickly.'),
            plain(12, 'And Elijah answered them, If I be a man of God, let fire come down from heaven, and consume thee and thy fifty. And the fire of God came down from heaven, and consumed him and his fifty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'force-meets-word',
          html:
            'Ahaziah sends soldiers to arrest the prophet — an act of defiance against the word of the Lord. But a man of God cannot be arrested by human force. Elijah doesn\'t run, doesn\'t hide, doesn\'t negotiate. He speaks with authority that comes not from his own strength but from the One who stands with him: "If I be a man of God, then let fire come down from heaven."',
        },
        {
          kind: 'commentary',
          id: 'repeated-judgment',
          html:
            'The first captain comes in force, demanding obedience. He is consumed. The second captain comes with the same demand — "Come down quickly" — and he, too, is consumed. The fire falls not as some arbitrary divine temper, but as a response to those who would use force to resist the Lord\'s word. Ahaziah is escalating his defiance. He sends not reasoning, not negotiation, but soldiers. And twice, judgment falls.',
        },
        {
          kind: 'hebrew',
          id: 'aish-elohim',
          title: 'Aish Elohim — "Man of God"',
          script: 'אִישׁ אֱלֹהִים',
          translit: '<strong>Aish elohim</strong> · man of God; a prophet or servant empowered by God',
          description:
            'The title "man of God" is not a claim Elijah makes for himself. It is how the king, the captains, and the people recognize him. A man of God is one who stands in the presence of God, speaks His word, and exercises authority in His name. What marks him as such is not his appearance or his status, but the power that flows from his connection to the Almighty.',
        },
        {
          kind: 'carry',
          html:
            'There is a moment in many lives when force meets word, when human authority tries to silence the voice of God. Elijah does not flinch. He does not hide. He does not even run. He simply stands and speaks what he knows to be true. The judgment that falls is not his anger; it is the consequence of resisting God\'s word. We are not called to bring judgment on others, but we are called to speak truth without fear, knowing that the Lord\'s word will accomplish what He purposes.',
        },
        {
          kind: 'reflection',
          id: 'captains-fire',
          prompt: 'When have you felt pressure to compromise or hide what you know is true? What would it mean to stand, as Elijah did, without flinching?',
        },
      ],
    },

    /* ─── 2 Kings 1:13–15 — The Third Captain & the Power of Humility ─── */
    {
      ref: '2 Kings 1:13–15',
      title: 'A Captain Who Kneels & Lives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(13, 'And he sent again a captain of the third fifty with his fifty: and the third captain of fifty went up, and came and fell on his knees before Elijah, and besought him, and said unto him, O man of God, I pray thee, let my life, and the life of these fifty thy servants, be precious in thy sight.'),
            plain(14, 'Behold, there came fire down from heaven, and burnt up the two captains of the former fifties with their fifties: therefore now let my life, and the life of these fifty thy servants, be precious in thy sight.'),
            plain(15, 'And the angel of the Lord said to Elijah, Go down with him: be not afraid of him. And Elijah arose, and went down with him unto the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'third-captain-humility',
          html:
            'The third captain sees the pattern. Two captains, both dead. Two fifties, both consumed. He does not march up with the arrogance of power. He falls on his knees. He begs. He acknowledges what he has witnessed — the fire from heaven, the judgment on those who came before him — and he pleads for mercy, not for himself alone but for the men under his command.',
        },
        {
          kind: 'commentary',
          id: 'humility-preserved',
          html:
            'This is not weakness; it is wisdom. The third captain reads the moment. He understands that he is not facing a man who will be intimidated by rank or force, but a prophet of the Lord. His humility, his refusal to repeat the pride of the first two captains, saves his life and the lives of his men. The angel immediately releases Elijah to go with him. The resistance is over. The word will be spoken to the king\'s face.',
        },
        {
          kind: 'commentary',
          id: 'servant-precious',
          html:
            'The third captain says, "Let my life... be precious in thy sight." He is asking for mercy not on the basis of his rank or his right to command, but on the basis of his acknowledged weakness and his plea for grace. He has learned what many never do: that in the presence of God\'s power, the only safe posture is surrender.',
        },
        {
          kind: 'carry',
          html:
            'History records the names of the proud and the powerful. But the Bible often remembers best those who had the wisdom to bend the knee. The third captain will likely never be famous. We don\'t even know his name. But because he humbled himself, because he acknowledged his powerlessness before the Lord\'s prophet, he lived. His men lived. And the message of the Lord was delivered to the king. Sometimes the greatest victory is knowing when to surrender.',
        },
        {
          kind: 'reflection',
          id: 'third-captain-lesson',
          prompt: 'What does it take for you to lower your guard and ask for mercy? What pride or fear keeps you from kneeling before God?',
        },
      ],
    },

    /* ─── 2 Kings 1:16–18 — The Word Delivered & the King Dies ──────── */
    {
      ref: '2 Kings 1:16–18',
      title: 'The Word Fulfilled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(16, 'And he said unto him, Thus saith the Lord, Forasmuch as thou hast sent messengers to enquire of Baalzebub the god of Ekron, is it not because there is no God in Israel to enquire of his word? therefore thou shalt not come down off that bed on which thou art gone up, but shalt surely die.'),
            plain(17, 'So Ahaziah died according to the word of the Lord which Elijah had spoken. And Jehoram reigned in his stead in the second year of Jehoram the son of Jehoshaphat king of Judah; because he had no son.'),
            plain(18, 'Now the rest of the acts of Ahaziah which he did, are they not written in the book of the chronicles of the kings of Israel?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'word-to-king',
          html:
            'Elijah stands before Ahaziah and repeats the Lord\'s word: Because you sought a foreign god when Israel\'s God was available, you will not rise from this bed. You will die. The word spoken to the messengers is now spoken to the king\'s face. There is no distance between the prophet and his king, no intermediaries, no way for Ahaziah to soften or reframe the message.',
        },
        {
          kind: 'commentary',
          id: 'word-fulfilled',
          html:
            'The chapter closes with simple, devastating fact: Ahaziah died according to the word of the Lord which Elijah had spoken. Not because a medicine failed, not because the fever returned, not because fortune turned against him, but because the word of the Lord will not fail. Jehoram took the throne in his stead. The dynasty moves on. But the lesson stands: to break covenant with the God of Israel is to sign your own judgment.',
        },
        {
          kind: 'christ',
          id: 'true-mediator',
          title: 'Christ Connection — The True Mediator',
          html:
            'The contrast here is stark. Ahaziah seeks a false mediator — a foreign god in a distant city — and finds only death. But the New Testament opens with a different mediator: Jesus Christ, the one High Priest, the one who stands between God and man, who speaks with authority, who is truly the man of God incarnate. Paul writes, "For there is one God, and one mediator between God and men, the man Christ Jesus" (1 Timothy 2:5). And when the disciples want to call fire from heaven on the Samaritans, Jesus rebukes them, saying, "Ye know not what manner of spirit ye are of. For the Son of man is not come to destroy men\'s lives, but to save them" (Luke 9:54–56). Elijah called fire from heaven in judgment. Jesus called His followers back from vengeance to mercy. This is the movement of the covenant: from law to grace, from judgment to mercy, from distance to intimacy. The true Mediator does not keep us at a distance; He comes near, speaks plainly, and offers salvation to all who will listen.',
        },
        {
          kind: 'carry',
          html:
            'Ahaziah had access to the God of Israel. The same God who delivered the nation from Egypt, who parted the Red Sea, who gave the law at Sinai — was available to him. Yet he looked elsewhere. His death was not a tragedy of circumstance; it was a tragedy of choice. We have that same choice every day. Will we turn to the true Mediator, or will we seek counsel from gods of flies, from voices that whisper comfort without truth, from sources that cannot save? The Lord stands at our door and speaks the same question Elijah asked the messengers: "Is it not because there is not a God in Israel?" He is here. He is real. He speaks. Will we listen?',
        },
        {
          kind: 'reflection',
          id: 'word-death',
          prompt: 'Ahaziah had every opportunity to turn back, to change his direction. But he did not. What choice, repeated again and again, might be slowly moving you away from the God of Israel? What would it take to turn back today?',
        },
      ],
    },
  ],
};
