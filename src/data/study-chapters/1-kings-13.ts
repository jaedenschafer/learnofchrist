import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 13 — The Man of God and the Old Prophet
 *
 * A prophet from Judah comes to Bethel by the word of the Lord and speaks an
 * astonishing prophecy: three centuries in advance, a child named Josiah will
 * be born and will desecrate the altar of idolatry. When Jeroboam's withered
 * hand is restored, he offers the prophet reward and rest—but the prophet refuses,
 * bound by a strict command. On the way home, an old prophet—a deceiver—lures
 * him into breaking his vow by claiming an angel has countermanded God's word.
 * The price is death: a lion slays him on the road, yet the lion stands guard
 * over his body, a sign of God's strange justice. In this chapter, we see the
 * peril of testing the word of God, the danger of false prophecy, and the
 * inscrutability of divine judgment.
 */
export const KINGS_1_13: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 13,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 18 },
  intros: [
    'Jeroboam has set up altars of his own making at Bethel and Dan, turning Israel away from the house of the Lord. He has made priests from the lowest of the people, not from the tribe of Levi, and appointed his own holy days. But God is not silent. Into this moment of idolatry comes a man of God, unnamed and unknown, sent from Judah by the word of the Lord. What he says will echo across three centuries—a prophecy so specific that it will reshape history itself.',
    'Yet this chapter is not merely about prophecy. It is about obedience, deception, and the inexplicable ways of God&apos;s judgment. The man of God is given a command: eat no bread, drink no water, take no reward, and return by a different way. But when an old prophet lies to him, claiming divine authority, the man of God breaks his vow. The consequences are swift and terrible—and strangely merciful. In this story, we face questions that have no easy answers: How do we test the spirits? What do we do when even those who claim to speak for God mislead us? And what does God&apos;s judgment mean when it falls on the faithful?',
  ],

  bottomShare: {
    label: 'Share 1 Kings 13',
    quote:
      'Even an angel preaching another gospel is to be rejected. The word of the Lord, once spoken, cannot be countermanded by another voice, however it claims its authority.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 13 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 13:1–5 — The Prophecy Against the Altar ──────────────── */
    {
      ref: '1 Kings 13:1–5',
      title: 'The Prophecy Against the Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'And, behold, there came a man of God out of Judah by the word of the Lord unto Bethel: and Jeroboam stood by the altar to burn incense.'),
            {
              number: 2,
              spans: [
                t('And he cried against the altar in the word of the Lord, and said, O altar, altar, thus saith the Lord; Behold, a child shall be born unto the house of David, '),
                hy('Josiah by name', 'josiah-prophecy'),
                t('; and upon thee shall he offer the priests of the high places that burn incense upon thee, and men&apos;s bones shall be burnt upon thee.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he gave a sign the same day, saying, This is the sign which the Lord hath spoken; Behold, the altar shall be '),
                hg('rent', 'altar-split'),
                t(', and the ashes that are upon it shall be poured out.'),
              ],
            },
            plain(4, 'And it came to pass, when king Jeroboam heard the saying of the man of God, which had cried against the altar in Bethel, that he put forth his hand from the altar, saying, Lay hold on him: and his hand, which he put forth against him, dried up, so that he could not pull it in again to him.'),
            {
              number: 5,
              spans: [
                t('The altar also was '),
                hg('rent', 'altar-split'),
                t(', and the ashes poured out from the altar, according to the sign which the man of God had given by the word of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'man-of-god-entrance',
          html:
            'The man of God arrives at Bethel without warning, without introduction, without credentials—only with the word of the Lord. He is not a priest. He is not a recognized prophet of Israel. He has no status, no position, no claim to authority except this: "Thus saith the Lord." In a culture where authority flows from lineage and office, this is revolutionary and dangerous.',
        },
        {
          kind: 'commentary',
          id: 'josiah-prophecy',
          html:
            'The prophecy is so specific that it stuns the imagination: Josiah by name, born to the house of David, will come and will burn the bones of the priests of the high places upon this very altar. This prophecy will be fulfilled more than 300 years later, as 2 Kings 23:15–20 records. The man of God speaks what he does not live to see—he speaks the word of the Lord, which will stand when kingdoms rise and fall. This is foreknowledge, not in the sense of abstract omniscience, but in the sense of the word that goes forth from God and does not return void.',
        },
        {
          kind: 'hebrew',
          id: 'yoshiyahu',
          title: 'Yoshiyahu — Josiah',
          script: 'יֹאשִׁיָּ֫הוּ',
          translit: '<strong>Yoshiyahu</strong> · the Lord supports; or, the Lord has healed',
          description:
            'The name Josiah itself carries meaning: "the Lord supports" or "the Lord heals." The man of God names him not as a prediction of a future person (many children were born), but as a divine certainty—as though the Lord has already written the name into the annals of heaven. This is the power of prophetic naming: the word does not merely predict; it announces.',
        },
        {
          kind: 'commentary',
          id: 'altar-split',
          html:
            'The altar splits. The ashes pour out. The sign is immediate and undeniable. Jeroboam&apos;s hand withers. These are not subtle signs—they are the kind of signs that announce the presence of God, the kind that cannot be explained away. The false system fractures under the weight of a true word. And yet—Jeroboam will not turn from his idolatry. He will repent for a moment, ask for prayer, experience restoration. And then he will go back to building priests from the lowest of the people.',
        },
        {
          kind: 'carry',
          html:
            'Do we live as though God&apos;s word is still speaking? Do we expect that when the word of the Lord goes out, things break and shift and are rearranged? Or have we domesticated the word, made it safe, made it something that can be negotiated with? The man of God shows no negotiation—he simply speaks, and the altar tears. What would it mean to walk in that kind of confidence that the word spoken is the word that will stand?',
        },
        {
          kind: 'reflection',
          id: 'prophecy-altar',
          prompt: 'When have you seen God&apos;s word at work in history—in your own time or in recorded history? How does it change your faith to know that God speaks not only for today, but for centuries ahead?',
        },
      ],
    },

    /* ─── 1 Kings 13:6–10 — "Eat No Bread" ──────────────────────────────── */
    {
      ref: '1 Kings 13:6–10',
      title: '"Eat No Bread, nor Drink Water"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('And the king said unto the man of God, Intreat now the face of the Lord thy God, and pray for me, that my hand may be restored me again. And the man of God besought the Lord, and the king&apos;s hand was restored him again, and '),
                hg('became as it was before', 'hand-restored'),
                t('.'),
              ],
            },
            plain(7, 'And the king said unto the man of God, Come home with me, and refresh thyself, and I will give thee a reward.'),
            {
              number: 8,
              spans: [
                t('And the man of God said unto the king, If thou wilt give me half thine house, I will not go in with thee, neither will I '),
                hg('eat bread nor drink water', 'eat-no-bread'),
                t(' in this place:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For so was it charged me by the word of the Lord, saying, Eat no bread, nor drink water, nor turn again by the same way that thou camest.'),
              ],
            },
            plain(10, 'So he departed, and went another way, and returned not by the way that he came to Bethel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hand-restored',
          html:
            'Jeroboam&apos;s hand is healed. But notice: his repentance is shallow. He saw the sign. He experienced restoration. And yet in the next breath, he offers the man of God comfort, honor, and reward. He does not say, "I have sinned; I will tear down these altars." He says, "Come to my house, be refreshed, take a reward." He wants to own the prophet, to make him part of his court, to domesticate the word that has just unmade his authority.',
        },
        {
          kind: 'commentary',
          id: 'eat-no-bread',
          html:
            'The man of God refuses. And his reason is not personal piety or ascetic practice—it is obedience. He has been charged by the word of the Lord with a specific command: eat nothing, drink nothing, and return by a different road. This is not a general principle about fasting. This is a particular word for a particular moment. The prophet understands something crucial: the word of the Lord is not a suggestion. It is not negotiable. It is not something that can be bent to accommodate courtesy or custom or the king&apos;s generosity.',
        },
        {
          kind: 'hebrew',
          id: 'ish-ha-elohim',
          title: 'Ish ha-Elohim — "Man of God"',
          script: 'אִישׁ־הָאֱלֹהִים',
          translit: '<strong>Ish ha-Elohim</strong> · man of God; one through whom God speaks',
          description:
            'The term "man of God" (ish ha-Elohim) appears throughout the Old Testament to designate a prophet or one through whom God&apos;s word flows. It is not a title of office, but a description of function. This man has no institutional authority—he is not a priest, not a member of a lineage of prophets. His only credential is that he speaks the word of the Lord. And that is enough.',
        },
        {
          kind: 'carry',
          html:
            'Jeroboam wants to reward the prophet for what he has said. But true obedience sometimes means saying no to what the world calls blessing. It means walking away from comfort, honor, and favor because the word of the Lord has spoken. Where are you being tempted to compromise a clear word of God because someone is offering you kindness, honor, or rest? The prophet shows us that these things, however good they are in themselves, cannot be weighed against the word.',
        },
        {
          kind: 'reflection',
          id: 'eat-no-bread-2',
          prompt: 'Have you ever been tested in your obedience by a kind offer that violated a commitment you had made? How did you decide what to do?',
        },
      ],
    },

    /* ─── 1 Kings 13:11–22 — The Old Prophet&apos;s Lie ────────────────────── */
    {
      ref: '1 Kings 13:11–22',
      title: 'The Old Prophet&apos;s Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(11, 'Now there dwelt an old prophet in Bethel; and his sons came and told him all the works that the man of God had done that day in Bethel: the words which he had spoken unto the king, them they told also to their father.'),
            plain(12, 'And their father said unto them, What way went he? For his sons had seen what way the man of God that came from Judah went.'),
            plain(13, 'And he said unto his sons, Saddle me the ass. So they saddled him the ass: and he went after the man of God, and found him sitting under an oak: and he said unto him, Art thou the man of God that camest from Judah? And he said, I am.'),
            plain(14, 'Then he said unto him, Come home with me, and eat bread.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-13-mid-14',
          html:
            '<p>The reign&apos;s glory peaks, revealing both the height of human achievement and its limits.</p>',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('And he said, I may not return with thee, nor go in with thee: neither will I '),
                t('eat bread nor drink water'),
                t(' with thee in this place:'),
              ],
            },
            plain(16, 'For it was said to me by the word of the Lord, Thou shalt eat no bread nor drink water there, nor turn again to go by the way that thou camest.'),
            {
              number: 17,
              spans: [
                t('He said unto him, I am a prophet also as thou art; and '),
                hy('an angel spake unto me by the word of the Lord', 'false-angel'),
                t(', saying, Bring him back with thee into thine house, that he may eat bread and drink water. But he lied unto him.'),
              ],
            },
            plain(18, 'So he went back with him, and did eat bread in his house, and drank water.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'old-prophet',
          html:
            'An old prophet dwells in Bethel. We are not told whether he is a true prophet or a false one—only that he is old and he lives among the people. When his sons bring him news of the man of God and the sign, he saddles his ass and goes in pursuit. Why? We are not told. But his next words will reveal his intent: he does not bring a word from the Lord. He brings a lie.',
        },
        {
          kind: 'commentary',
          id: 'false-angel',
          html:
            'The old prophet says, "An angel spake unto me by the word of the Lord." This is a staggering claim. He is not just offering his opinion or his own word—he is claiming that heaven has spoken, that an angel has delivered a countermand to the word the man of God received. And this is where Paul&apos;s warning in Galatians becomes urgent: "Though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed" (Galatians 1:8). The old prophet is preaching another word, backed by the claim of heavenly authority. It is a perfect picture of spiritual deception: it uses the language of Scripture, it appeals to a higher authority, and it flatters the person being deceived by offering them what they want (rest, food, hospitality).',
        },
        {
          kind: 'commentary',
          id: 'he-lied',
          html:
            'The text says explicitly: "But he lied unto him." This is not ambiguous. The old prophet did not mishear an angel. He did not sincerely believe an angel had spoken. He lied. And in that lie, he becomes an instrument of the man of God&apos;s ruin.',
        },
        {
          kind: 'hebrew',
          id: 'navi-sheker',
          title: 'Navi Sheker — "Prophet of Falsehood"',
          script: 'נָבִי שֶׁקֶר',
          translit: '<strong>Navi sheker</strong> · false prophet; one who speaks lies in the name of the Lord',
          description:
            'Throughout the Old Testament, the false prophet is one of the most dangerous figures in Israel—more dangerous sometimes than the external enemy. A false prophet does not come with a sword; he comes with words. He speaks in the language of the true prophet, he claims the same authority, and yet his message leads people away from the God of Israel. The old prophet in Bethel is such a figure: he is not a pagan priest, but someone who claims to speak for the God of Israel and lies.',
        },
        {
          kind: 'carry',
          html:
            'The man of God had resisted the king. He had kept his vow. But when the old prophet—someone who seems to speak the same language, who claims the same authority—offers him a different word, he breaks. The lesson is not that we should be suspicious of all people or all kindness. The lesson is that we must be anchored to what God has already spoken. We must be able to say no to voices that claim authority, however credible they seem. The test is not whether the voice is old and wise and speaks of angels. The test is whether the voice contradicts the clear word of God already given.',
        },
        {
          kind: 'reflection',
          id: 'false-prophet',
          prompt: 'Have you ever been tempted to abandon a clear commitment because someone else, with seeming authority, offered you a different word? What made you vulnerable to that temptation?',
        },
      ],
    },

    /* ─── 1 Kings 13:23–32 — The Lion in the Road ─────────────────────── */
    {
      ref: '1 Kings 13:23–32',
      title: 'The Lion and God&apos;s Strange Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(23, 'And it came to pass, after he had eaten bread, and after he had drunk, that he saddled for him the ass, to wit, for the prophet whom he had brought back.'),
            plain(24, 'And when he was gone, a lion met him by the way, and slew him: and his carcase was cast in the way, and the ass stood by it, the lion also stood by the carcase.'),
            {
              number: 25,
              spans: [
                t('And, behold, men passed by, and saw the carcase cast in the way, and the lion standing by the carcase: and they went and told it in the city where the old prophet dwelt.'),
              ],
            },
            plain(26, 'And when the prophet that had brought him back heard thereof, he said, It is the man of God, who was disobedient unto the word of the Lord: therefore the Lord hath delivered him unto the lion, which hath torn him, and slain him, according to the word of the Lord which he spake unto him.'),
            plain(27, 'And he spake to his sons, saying, Saddle me the ass. And they saddled him.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k13-prophet-obedience',
          html:
            'The true prophet speaks; the false prophet acts—obedience to the Word is tested and broken.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(28, 'And he went and found his carcase cast in the way, and the ass and the lion standing by the carcase: the lion had not eaten the carcase, nor torn the ass.'),
            {
              number: 29,
              spans: [
                t('Then the prophet took up the carcase of the man of God, and laid it upon the ass, and brought it back: and the old prophet came to the city, to mourn and to bury him.'),
              ],
            },
            plain(30, 'And he laid his carcase in his own sepulchre; and they mourned over him, saying, Alas, my brother!'),
            {
              number: 31,
              spans: [
                t('And it came to pass, after he had buried him, that he spake to his sons, saying, When I am dead, then bury me in the sepulchre wherein the man of God is buried; lay my bones beside his bones:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('For the saying which he cried by the word of the Lord against the altar in Bethel, and against all the houses of the high places which are in the cities of Samaria, shall surely come to pass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lion-met-him',
          html:
            'The judgment is swift and absolute. A lion—not a human enemy, not the king&apos;s guard, but a lion—meets the man of God on the road and slays him. This is not ambiguous. This is not a tragic accident. This is the judgment of God, immediate and terrible, for breaking the word that had been entrusted to him.',
        },
        {
          kind: 'commentary',
          id: 'lion-restraint',
          html:
            'Yet here is something strange: the lion does not eat the body. The lion does not attack the ass. The lion stands guard over the corpse. This is not the behavior of a wild animal. This is a sign—a sign that the judgment, though absolute, is not the judgment of chaos. The word of the Lord has been upheld. The prophet has been executed. And yet even in execution, there is order, there is witness, there is something that points back to God.',
        },
        {
          kind: 'commentary',
          id: 'old-prophet-repent',
          html:
            'The old prophet hears what has happened, and he understands instantly. "It is the man of God, who was disobedient unto the word of the Lord: therefore the Lord hath delivered him unto the lion." The old prophet recognizes that he, the deceiver, was the instrument of the man of God&apos;s downfall. And in this moment, something shifts in him. He does not defend his lie. He does not justify his deception. He goes, finds the body, brings it back, and lays it in his own sepulcher. And he says to his sons: When I am dead, bury me beside him. Do not let my bones rest where his do not rest.',
        },
        {
          kind: 'hebrew',
          id: 'aryeh',
          title: 'Aryeh — "Lion"',
          script: 'אַרְיֵה',
          translit: '<strong>Aryeh</strong> · lion; king of beasts; strength',
          description:
            'The lion in the Old Testament carries multiple meanings: it is the image of strength and kingship, but also, in this context, of divine judgment. The lion does not come as an enemy agent or a human foe. It comes as the instrument of the Lord&apos;s word. Later, in Revelation, Christ himself is called "the Lion of the tribe of Judah"—the one whose authority transcends human power, whose judgment is sure, and whose mercy is inscrutably woven through even His wrath.',
        },
        {
          kind: 'carry',
          html:
            'The man of God is given a clear word, breaks it because another voice claims equal authority, and dies for it. But the old prophet, the deceiver, is not simply judged and removed. He is awakened. He sees what he has done. He repents—not outwardly, but in the silence of his own heart. He buries the man he deceived beside his own tomb, asking to lie beside him forever. This is mercy woven through judgment: the deceiver lives with the knowledge of his deception, carries it to his grave, and asks to be buried next to the one he destroyed. God&apos;s ways are inscrutable, but they are just.',
        },
        {
          kind: 'reflection',
          id: 'lion-road',
          prompt: 'What does God&apos;s judgment look like when it falls on the faithful who break His word? How do you reconcile God&apos;s love with His justice?',
        },
      ],
    },

    /* ─── 1 Kings 13:33–34 — Jeroboam&apos;s Hardened Heart ──────────────── */
    {
      ref: '1 Kings 13:33–34',
      title: 'Jeroboam Returns to His Evil Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(33, 'After this thing Jeroboam returned not from his evil way, but made again of the lowest of the people priests of the high places: whosoever would, he consecrated him, and he became one of the priests of the high places.'),
            plain(34, 'And this thing became sin unto the house of Jeroboam, even to cut it off, and to destroy it from off the face of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeroboam-hardened',
          html:
            'Jeroboam has seen the sign. His hand has withered and been restored. He has heard the prophecy that his altar will be desecrated by a king named Josiah, centuries hence. He has watched the man of God refuse his reward, refuse his hospitality, refuse his favor. And yet—"Jeroboam returned not from his evil way." He does not turn. He does not repent. Instead, he continues his course. He makes more priests from the lowest of the people. He deepens his commitment to idolatry.',
        },
        {
          kind: 'commentary',
          id: 'cutting-off',
          html:
            'The text ends with a stark statement: "This thing became sin unto the house of Jeroboam, even to cut it off, and to destroy it from off the face of the earth." The sign given in this chapter is not a sign that saves Jeroboam. It is a sign that condemns him. He has been given everything necessary to repent—a clear word, an undeniable sign, a restored hand. And he has chosen not to turn. His dynasty will be cut off. His line will not continue. The word of the Lord, spoken through the man of God, will be fulfilled.',
        },
        {
          kind: 'christ',
          id: 'word-cannot-be-countermanded',
          title: 'Christ Connection — The Word That Cannot Be Revoked',
          html:
            'Christ is "the Word" (John 1:1)—the one through whom all things are created, the one who cannot lie, the one through whose mouth the word of the Lord goes forth. This chapter teaches us something crucial about the nature of God&apos;s word: it cannot be countermanded. Not by an earthly king, not by an old prophet who claims to speak for God, not even by an angel (Paul warns in Galatians 1:8). The word that God sends out returns not void (Isaiah 55:11). It accomplishes what it is sent to accomplish. And when we break faith with the word—when we listen to another voice, however credible—we stand outside the protection of God&apos;s covenant. Christ, the Word made flesh, speaks with the authority of heaven itself. To follow another word, to accept a revised version of God&apos;s truth, is to step away from the only source of true life. The man of God died because he broke faith with the word he had been given. But Christ is the Word; to break faith with Him is to break faith with life itself. And yet—unlike the man of God, who could not save himself—Christ rose again, proving that His word is eternally true.',
        },
        {
          kind: 'carry',
          html:
            'Jeroboam has everything he needs to turn—and he turns away. We, too, are given signs, given the word of the Lord, given opportunities to repent. The question is not whether we will see the signs. The question is whether we will respond. Will we say, like the prophet of Bethel, "I will not go in with thee," even when kindness and honor are being offered? Will we keep faith with the word we have been given, even when other voices claim authority? Will we choose the Lord&apos;s word over the world&apos;s reward?',
        },
        {
          kind: 'reflection',
          id: 'jeroboam-hardened-2',
          prompt: 'Jeroboam sees the sign and hardens his heart. What keeps you turning toward the Lord, even when you see His work around you? What would need to change for your heart to grow harder instead of softer?',
        },
      ],
    },
  ],
};
