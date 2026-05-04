import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 25 — Amaziah's Reign: The King with a Divided Heart
 *
 * Amaziah becomes king at 25 years old and reigns 29 years in Jerusalem.
 * He does right in the sight of the Lord — but not with a perfect heart.
 * He executes the assassins of his father with judicial mercy (citing
 * Deuteronomy 24:16), yet refuses the counsel of a man of God, clinging
 * to hired soldiers. He defeats the Edomites and then — in a moment of
 * tragic absurdity — brings home their gods and worships them. A prophet
 * rebukes him; he silences the prophet. Pride follows victory. War follows
 * idolatry. He dies in exile, murdered by conspiracy. Amaziah's story is
 * the story of a man who did right, then forgot why.
 */
export const CHRONICLES_2_25: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 25,

  estimatedMinutes: { beginner: 4, intermediate: 14, deep: 18 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 25',
  },
  intros: [
    'Amaziah was 25 years old when he became king. His mother was Jehoaddan of Jerusalem, and he reigned 29 years. The text tells us immediately: "He did that which was right in the sight of the Lord, but not with a perfect heart." This opening line frames the entire chapter. Amaziah is not a villain. He is not a apostate. He is a man who does many right things — but whose heart is divided, whose motives are mixed, whose obedience is incomplete.',
    'When his kingdom was established, Amaziah executed the servants who had assassinated his father — but, following the law of Moses (Deuteronomy 24:16), he did not execute their children. He then gathered Judah, made captains, assembled 300,000 mighty men of war. He hired 100,000 soldiers from Israel for 100 talents of silver. But a man of God came to him with a rebuke. The Lord could not go with Israel, he said. If Amaziah would be strong, he must trust God alone, not foreign armies. Amaziah obeyed — he sent the hired men home. Then came his greatest victory: he defeated the Edomites in the Valley of Salt, killing 10,000 and casting another 10,000 from a cliff. But then he did the unthinkable. He brought home the gods of Seir and set them up to worship. The anger of the Lord was kindled. A prophet came and asked: "Why hast thou sought after the gods of the people, which could not deliver their own people out of thine hand?" Amaziah silenced him with a threat. The prophet left, saying only: "I know that God hath determined to destroy thee." What follows is military humiliation, loss of treasure, and finally conspiracy and death. Amaziah&apos;s kingdom did not end in conquest. It ended because a king&apos;s divided heart invited judgment.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 25',
    quote:
      'Amaziah did right in the sight of the Lord, but not with a perfect heart. A king who obeys with reservation invites the judgment that his victories cannot prevent.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 25 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-judah-monarchy',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Judah in the Monarchy Period',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA database of Iron Age Judahite sites, inscriptions, and settlement patterns.',
    },
    {
      id: 'sefaria-2-chronicles-25',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 25 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.25',
      description: 'The Hebrew text of 2 Chronicles 25 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-2-chronicles-overview-25',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '2 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/2-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 2 Chronicles.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 25:1–4 — Right but Not with a Perfect Heart ────── */
    {
      ref: '2 Chronicles 25:1–4',
      title: 'Right, But Not with a Perfect Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'Amaziah was twenty and five years old when he began to reign, and he reigned twenty and nine years in Jerusalem. And his mother&apos;s name was Jehoaddan of Jerusalem.'),
            plain(2, 'And he did that which was right in the sight of the Lord, but not with a perfect heart.'),
            plain(3, 'Now it came to pass, when the kingdom was established to him, that he slew his servants that had killed the king his father:'),
            plain(4, 'But he slew not their children, but did as it is written in the law in the book of Moses, where the Lord commanded, saying, The fathers shall not die for the children, neither shall the children die for the fathers, but every man shall die for his own sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'not-perfect-heart',
          html:
            'The phrase "right in the sight of the Lord, but not with a perfect heart" is extraordinary. It does not mean Amaziah is wicked. It means his obedience is qualified, conditional, incomplete. A perfect heart means undivided loyalty, trust that does not hedge, commitment that does not bargain. Amaziah&apos;s obedience is real — but it coexists with fear, ambition, and the desire to control outcomes. He is not hypocritical. He is divided. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'commentary',
          id: 'deut-24-16',
          html:
            'Amaziah cites Deuteronomy 24:16 — the law that children shall not die for the father&apos;s sin. This is a moment of judicial mercy. He executes the assassins but spares their sons. The law is ancient. Its principle is clear: each person is responsible for their own sin, not their parent&apos;s. Amaziah knows this law. He obeys it. Yet this very act of obedience sits alongside a heart that is not wholly given to God. Righteousness without wholehearted devotion is incomplete[res:sefaria-2-chronicles-25][res:bibleodyssey-2-chronicles-overview-25].',
        },
        {
          kind: 'hebrew',
          id: 'shalem-heart',
          title: 'Shalem — "Perfect" or "Whole"',
          script: 'שָׁלֵם',
          translit: '<strong>Shalem</strong> · complete, whole, perfect, sound',
          description:
            'The Hebrew word for "perfect heart" is <em>shalem</em> — from the root meaning "whole" or "complete." A shalem heart is not divided, not hedged with conditions, not held back by fear or self-interest. It is wholly given. Amaziah&apos;s heart is not shalem. He obeys, yes. But part of him is held back. This is not hypocrisy; it is the human condition — the struggle between obedience and self-preservation, between trust in God and trust in earthly power.',
        },
        {
          kind: 'carry',
          html:
            'Do you find yourself obeying God while holding back part of your heart? Following the right path while nursing doubt, anger, or ambition? This is the space where Amaziah lives — and it is a dangerous space. Not the space of open rebellion, but the space where obedience and compromise coexist. The invitation here is wholehearted devotion, not half-measures.',
        },
        {
          kind: 'reflection',
          id: 'perfect-heart',
          prompt: 'When have you done the right thing with a heart that was not fully committed to it? What held part of you back?',
        },
      ],
    },

    /* ─── 2 Chronicles 25:5–10 — The 100 Talents and the Man of God ────── */
    {
      ref: '2 Chronicles 25:5–10',
      title: 'The Cost of Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(5, 'Moreover Amaziah gathered Judah together, and made them captains over thousands, and captains over hundreds, according to the houses of their fathers, throughout all Judah and Benjamin: and he numbered them from twenty years old and above, and found them three hundred thousand choice men, able to go forth to war, that could handle spear and shield.'),
            plain(6, 'He hired also an hundred thousand mighty men of valour out of Israel for an hundred talents of silver.'),
            plain(7, 'But there came a man of God to him, saying, O king, let not the army of Israel go with thee; for the Lord is not with Israel, to wit, with all the children of Ephraim.'),
            plain(8, 'But if thou wilt go, do it, be strong for the battle: otherwise God shall make thee fall before the enemy: for God hath power to help, and to cast down.'),
            plain(9, 'And Amaziah said to the man of God, But what shall we do for the hundred talents which I have given to the army of Israel? And the man of God answered, The Lord is able to give thee much more than this.'),
            plain(10, 'Then Amaziah separated them, to wit, the army that was come to him out of Ephraim, to go home again: wherefore his anger was greatly kindled against him, and they returned home in great anger.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hired-army',
          html:
            'Amaziah has 300,000 men from Judah and Benjamin — an impressive force. But that is not enough. He hires an additional 100,000 mighty men from Israel (the northern kingdom) for 100 talents of silver. This is not weakness. This is calculation. He is hedging his bets, multiplying his odds, insuring himself against defeat. He is thinking like a king of earth, not a subject of heaven.',
        },
        {
          kind: 'commentary',
          id: 'man-of-god',
          html:
            'A man of God appears — we are not told his name — and delivers a rebuke. "The Lord is not with Israel." The northern kingdom has turned from the Lord; their gods are false. If you take Israel into battle, God cannot fight for you, because His presence is not with them. But the rebuke carries a strange mercy: "If thou wilt go, do it, be strong for the battle. Otherwise God shall make thee fall before the enemy." The prophet is not saying "Do not go." He is saying: "You can go, but know that if you do, you go without God. And if you go without God, you will fall."',
        },
        {
          kind: 'commentary',
          id: 'hundred-talents',
          html:
            'Amaziah&apos;s response is human and honest. "What shall we do for the hundred talents which I have given to the army of Israel?" He is thinking like a businessman, not a believer. He has spent money. That is money gone. The man of God answers with one of the most powerful statements in Scripture: "The Lord is able to give thee much more than this." God is not poor. God is not bound by human accounting. A hundred talents is nothing to the God who made heaven and earth. This is the invitation: trust not in silver, but in the one who is able to give infinitely more.',
        },
        {
          kind: 'hebrew',
          id: 'maas-reject',
          title: 'Maas — "To Reject" or "To Spurn"',
          script: 'מָאַס',
          translit: '<strong>Maas</strong> · reject, spurn, despise, disregard',
          description:
            'The man of God is essentially saying: "Do not maas — do not reject, do not spurn — the Lord&apos;s guidance." Amaziah does the opposite. He listens to the man of God and obeys him. He sends the hired men home. But his heart is troubled because of the money. He has maased — rejected — the security that earthly weapons and earthly wealth provide. And the hired men, sent away in shame, leave "in great anger."',
        },
        {
          kind: 'carry',
          html:
            'Sometimes obedience costs us something visible — money, comfort, the approval of allies, the security of a sure thing. Amaziah obeys, sends away the hired army, and loses 100 talents of silver. But the man of God promises something greater: the God who can give much more than 100 talents. The question is not whether obedience costs. It always costs. The question is: do you trust that what God gives in return is infinitely more valuable?',
        },
        {
          kind: 'reflection',
          id: 'cost-of-trust',
          prompt: 'What has obedience to God cost you? What have you had to give up or send away? And what has He given in return — or are you still waiting to see?',
        },
      ],
    },

    /* ─── 2 Chronicles 25:11–13 — The Victory and Its Price ────────────── */
    {
      ref: '2 Chronicles 25:11–13',
      title: 'The Victory of the Whole Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(11, 'And Amaziah strengthened himself, and led forth his people, and went to the valley of salt, and smote of the children of Seir ten thousand.'),
            plain(12, 'And other ten thousand left alive did the children of Judah carry away captive, and brought them unto the top of the rock, and cast them down from the top of the rock, that they all were broken in pieces.'),
            plain(13, 'But the soldiers of the army which Amaziah sent back, that they should not go with him to battle, fell upon the cities of Judah, from Samaria even unto Beth-horon, and smote of them three thousand, and took much spoil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'valley-of-salt',
          html:
            'Amaziah leads his 300,000-strong army to the Valley of Salt — likely the Arabah, south of the Dead Sea — where the Edomites dwell. The battle is decisive. He kills 10,000 Edomites. Then he does something brutal: he takes another 10,000 captives, brings them to the top of a rock, and casts them down, breaking them to pieces. This is not the hesitation of a divided heart. This is the total commitment of a warrior-king. And it wins. The victory is complete.',
        },
        {
          kind: 'commentary',
          id: 'hired-men-revenge',
          html:
            'But there is a shadow across the victory. The 100,000 hired men whom Amaziah sent home "in great anger" have not forgotten. While he is destroying Edom, they fall upon the cities of Judah — from Samaria to Beth-horon — killing 3,000 men and taking spoil. The king&apos;s obedience costs him cities. The hired men exact a price for their dismissal. Victory and loss come together.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes obedience brings visible success, but at a cost we did not expect. Amaziah defeats Edom — a great victory. But while he fights abroad, his own cities burn. The hired men take revenge. The pattern is: obey, win, suffer consequence. Obey, rejoice, grieve. This is the shape of a life lived with a partially whole heart — not comfortable, not simple, not entirely victorious. It is the life of a man learning to trust.',
        },
        {
          kind: 'reflection',
          id: 'victory-price',
          prompt: 'Describe a time when you won a victory that came with a hidden price. What did you gain, and what did you lose?',
        },
      ],
    },

    /* ─── 2 Chronicles 25:14–16 — The Worship of Defeated Gods ────────── */
    {
      ref: '2 Chronicles 25:14–16',
      title: 'The Tragedy of Idolatry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(14, 'Now it came to pass, after that Amaziah was come from the slaughter of the Edomites, that he brought the gods of the children of Seir, and set them up to be his gods, and bowed down himself before them, and burned incense unto them.'),
            plain(15, 'Wherefore the anger of the Lord was kindled against Amaziah; and he sent unto him a prophet, saying, Why hast thou sought after the gods of the people, which could not deliver their own people out of thine hand?'),
            plain(16, 'And it came to pass, as he talked with him, that the king said unto him, Art thou made of the king&apos;s counsel? forbear; why shouldest thou be smitten? Then the prophet forbare, and said, I know that God hath determined to destroy thee, because thou hast done this, and hast not hearkened unto my counsel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'edom-gods',
          html:
            'In this moment, Amaziah commits an act of staggering absurdity. He has just crushed the Edomites. Their army is broken. Their people are enslaved or dead. And Amaziah brings home their gods. He sets them up. He bows before them. He burns incense to the gods who could not save their own people from his sword. This is not policy. This is not diplomacy. This is profound spiritual confusion — the victor worshiping the vanquished gods, the strong man prostrating himself before the weak idols of the weak. What could he possibly hope to gain?',
        },
        {
          kind: 'commentary',
          id: 'prophet-rebuke',
          html:
            'The anger of the Lord is kindled. A prophet is sent — again, unnamed, faithful, willing to risk the king&apos;s wrath. The rebuke is sharp: "Why hast thou sought after the gods of the people, which could not deliver their own people out of thine hand?" The logic is irrefutable. These gods failed to protect the Edomites. These gods are weak. Why would a king who has just defeated them now worship them? The prophet names the contradiction at the heart of idolatry: it is the worship of failure, the bowing before the powerless, the spiritual equivalent of collecting the weapons of your vanquished enemy and somehow expecting them to have gained strength in your hands.',
        },
        {
          kind: 'commentary',
          id: 'king-silences-prophet',
          html:
            'And here, Amaziah&apos;s divided heart becomes explicit. He does not argue with the prophet. He does not defend his gods. He simply silences him. "Art thou made of the king&apos;s counsel? Forbear; why shouldest thou be smitten?" It is a threat, wrapped in a rhetorical question. Do not speak to the king. Do not counsel the king. Stop, or be struck down. The prophet obeys — he forbears. But before he goes, he speaks the sentence that will hang over the rest of Amaziah&apos;s life: "I know that God hath determined to destroy thee, because thou hast done this, and hast not hearkened unto my counsel."',
        },
        {
          kind: 'hebrew',
          id: 'avodah-zarah',
          title: 'Avodah Zarah — "Strange Service" or "Idolatry"',
          script: 'עֲבוֹדָה זָרָה',
          translit: '<strong>Avodah Zarah</strong> · foreign worship, idolatry, service of strange gods',
          description:
            'The Hebrew phrase for idolatry literally means "strange service" — serving gods that are not the Lord. Amaziah&apos;s act is not merely a political gesture or a cultural concession. It is a fundamental reorientation of his worship away from the God who gave him victory and toward the gods of those he defeated. It is the betrayal of covenant for the embrace of "strange service."',
        },
        {
          kind: 'christ',
          id: 'christ-divided-heart',
          title: 'Christ Connection — The King with an Undivided Heart',
          html:
            'Amaziah&apos;s tragedy is the tragedy of the divided heart. He obeys, but holds back. He wins, but worships the gods of defeat. He is strong, but spiritually confused. Christ, by contrast, embodies perfect, undivided devotion. In John 10:30, Jesus says: "I and my Father are one." His heart, His will, His entire being is aligned with the Father&apos;s purpose. He does not hedge. He does not hold back. He does not worship the gods of this world — wealth, power, the approval of crowds. He goes to the cross with a whole heart. In Hebrews 5:8, we read that Jesus "learned obedience by the things which he suffered." His obedience is not qualified or conditional. It is wholehearted unto death. Amaziah shows us what happens when obedience is divided. Christ shows us the power of undivided devotion.',
        },
        {
          kind: 'carry',
          html:
            'What are the "gods of the Edomites" in your own life? What are you worshiping that is powerless, that cannot save you, that you have perhaps adopted from the very forces you have overcome? What would wholehearted devotion to God require you to let go of?',
        },
        {
          kind: 'reflection',
          id: 'idol-worship',
          prompt: 'What defeated enemies or failed powers are you still bowing to? What would it take for you to turn away?',
        },
      ],
    },

    /* ─── 2 Chronicles 25:17–24 — The Parable and the Fall ──────────────── */
    {
      ref: '2 Chronicles 25:17–24',
      title: 'Pride Before the Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(17, 'Then Amaziah king of Judah took advice, and sent to Joash king of Israel, saying, Come, let us see one another in the face.'),
            plain(18, 'And Joash king of Israel sent to Amaziah king of Judah, saying, The thistle that was in Lebanon sent to the cedar of Lebanon, saying, Give thy daughter to my son to wife: and there passed by a wild beast that was in Lebanon, and trode down the thistle.'),
            plain(19, 'Thou sayest, Lo, thou hast smitten the Edomites; and thine heart lifteth thee up to boast: abide now at home; why shouldest thou meddle to thine hurt, and thou shouldest fall, even thou, and Judah with thee?'),
            plain(20, 'But Amaziah would not hear; for it came of God, that he might deliver them into the hand of their enemies, because they sought after the gods of Edom.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-25-mid-20',
          html:
            '<p>The dedication nears: function and worship emerge from structure and stone.</p>',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(21, 'So Joash king of Israel went up; and he and Amaziah king of Judah looked one another in the face at Beth-shemesh, which belongeth to Judah.'),
            plain(22, 'And Judah was put to the worse before Israel; and they fled every man to his tent.'),
            plain(23, 'And Joash king of Israel took Amaziah king of Judah, the son of Joash, the son of Ahaziah, at Beth-shemesh, and brought him to Jerusalem, and brake down the wall of Jerusalem from the gate of Ephraim to the corner gate, four hundred cubits.'),
            plain(24, 'And he took all the gold and the silver, and all the vessels that were found in the house of God with Obed-edom, and the treasures of the king&apos;s house, and the hostages, and returned to Samaria.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'thistle-cedar',
          html:
            'Amaziah sends a message to Joash, king of Israel (the north): "Come, let us see one another in the face" — let us go to war. Joash responds not with acceptance, but with a parable. He calls Amaziah a thistle that presumes to the stature of a cedar. A wild beast tramples the thistle, and that is the end of it. The parable is a warning disguised as mockery. Joash is telling Amaziah: You are outmatched. You are small. Your victory over Edom has inflated your heart. Do not meddle with Israel, lest you fall.',
        },
        {
          kind: 'commentary',
          id: 'joash-wisdom',
          html:
            'What is remarkable is that Joash&apos;s warning makes perfect sense. He is offering Amaziah a way out, a path to peace. "Abide now at home; why shouldest thou meddle to thine hurt, and thou shouldest fall, even thou, and Judah with thee?" This is not strength. This is wisdom. But Amaziah will not hear it.',
        },
        {
          kind: 'commentary',
          id: 'it-came-of-god',
          html:
            'The text pauses to explain: "But Amaziah would not hear; for it came of God, that he might deliver them into the hand of their enemies, because they sought after the gods of Edom." Amaziah&apos;s refusal is not accidental. It comes from God. God is delivering Judah into the hand of their enemies — because of Amaziah&apos;s idolatry. The narrative voice is clear: what follows is not military miscalculation. It is divine judgment.',
        },
        {
          kind: 'commentary',
          id: 'beth-shemesh',
          html:
            'The armies meet at Beth-shemesh, a city of Judah. But Judah is "put to the worse." They are defeated. They flee. Joash takes Amaziah prisoner. The king is defeated and captured by his own brother nation.',
        },
        {
          kind: 'commentary',
          id: 'wall-broken',
          html:
            'Joash brings Amaziah to Jerusalem, breaks down the wall — 400 cubits of it — from the gate of Ephraim to the corner gate. The walls of Jerusalem, the defenses of David&apos;s city, are demolished. Joash takes all the gold and silver, all the vessels of the house of God, all the treasures of the king&apos;s house, and the hostages, and returns to Samaria. Jerusalem is ransacked. Judah is humiliated.',
        },
        {
          kind: 'hebrew',
          id: 'erez-cedar',
          title: 'Erez — "Cedar"',
          script: 'אַ֫רֶז',
          translit: '<strong>Erez</strong> · cedar (of Lebanon)',
          description:
            'The cedar is a symbol of strength, height, permanence, and majesty in Scripture. The psalmist speaks of growing "as the cedar in Lebanon" (Psalm 92:12). Joash is saying: You are not a cedar. You are not a match for me. Amaziah&apos;s heart "lifteth him up to boast" — but he is, in the eyes of a wise counselor, still a thistle pretending to be a tree.',
        },
        {
          kind: 'carry',
          html:
            'Amaziah had wisdom offered to him. Joash essentially said: "I see your heart. It is puffed up with pride. Turn back. Go home. Do not meddle." But pride — the feeling that you are invincible, that your past victory guarantees your future victory — prevented him from hearing. Is there wisdom being offered to you that you are refusing because your heart is lifted up with boasting?',
        },
        {
          kind: 'reflection',
          id: 'pride-before-fall',
          prompt: 'When has pride in a past victory kept you from heeding wise counsel? What did that cost you?',
        },
      ],
    },

    /* ─── 2 Chronicles 25:25–28 — The Conspiracy and the End ────────────── */
    {
      ref: '2 Chronicles 25:25–28',
      title: 'The King Abandoned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(25, 'And Amaziah the king of Judah lived after the death of Joash king of Israel fifteen years.'),
            plain(26, 'Now the rest of the acts of Amaziah, first and last, behold, are they not written in the book of the kings of Judah and Israel?'),
            plain(27, 'Now after the time that Amaziah did turn away from following the Lord they made a conspiracy against him in Jerusalem; and he fled to Lachish: but they sent to Lachish after him, and slew him there.'),
            plain(28, 'And they brought him upon horses, and buried him with his fathers in the city of Judah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amaziah-lives',
          html:
            'Amaziah lives 15 years after his defeat by Joash — long enough to see the full consequence of his choices. He has been humiliated in war, captured, released, ransomed. He returns to Jerusalem a broken king, his city walls dismantled, his treasury emptied, his authority diminished.',
        },
        {
          kind: 'commentary',
          id: 'conspiracy',
          html:
            'The text says: "Now after the time that Amaziah did turn away from following the Lord they made a conspiracy against him in Jerusalem." The people conspire. It is not a foreign invasion, not a military coup. It is his own people, turning against him. He flees to Lachish, a fortified city in the south. But they follow him there. They find him. They kill him. The king who did right but not with a perfect heart dies not in glory, not in bed, but fleeing from his own people.',
        },
        {
          kind: 'commentary',
          id: 'buried-fathers',
          html:
            'And yet — and this is the mercy of the text — "they brought him upon horses, and buried him with his fathers in the city of Judah." Even in death, there is a trace of honor. He is not left to be eaten by beasts. He is given a proper burial. He lies with the kings. The judgment is complete, but not entirely without mercy.',
        },
        {
          kind: 'christ',
          id: 'christ-whole-heart',
          title: 'Christ Connection — The Wholehearted King',
          html:
            'Amaziah&apos;s life is the life of a man whose obedience was incomplete, whose heart was divided, whose trust wavered between God and the security of earthly power. He worshiped the gods of the defeated. He silenced the prophets. He followed pride where it led. And it led to his destruction. Christ is the antithesis. "Therefore my Father loveth me, because I lay down my life, that I might take it again. No man taketh it from me, but I lay it down of myself" (John 10:17–18). Christ&apos;s obedience is not qualified. It is not hedged with self-preservation. It is wholehearted unto death. And because of that wholeness, He conquers death itself. "I have overcome the world," He says (John 16:33). The King with the perfect heart is the King who cannot be defeated.',
        },
        {
          kind: 'carry',
          html:
            'Amaziah begins well. He does right. But "right" and "wholehearted" are not the same. There is a great difference between obeying God while holding back part of your heart, and giving God your entire devotion. One leads to the humiliation of a divided king. The other leads to resurrection and victory. Which king will you be?',
        },
        {
          kind: 'reflection',
          id: 'wholehearted-devotion',
          prompt: 'What part of your heart are you still holding back from God? And what would wholehearted devotion look like for you?',
        },
      ],
    },
  ],
};
