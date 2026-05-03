import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Kings 22 — Micaiah and the Lying Spirit
 *
 * King Ahab wants to retake Ramoth-gilead from Syria. He gathers 400 prophets
 * who all promise victory. But Jehoshaphat asks for a true prophet. Ahab,
 * reluctant, summons Micaiah — a man he hates because Micaiah always prophesies
 * evil against him. Micaiah first speaks sarcasm (echoing the false prophets),
 * then delivers a vision: God sits on His throne, asking who will persuade Ahab
 * to fall at Ramoth-gilead. A lying spirit offers to go forth into the mouths
 * of all his prophets — and God permits it. Ahab disguises himself to escape
 * the prophecy, but an arrow drawn at random finds the joints of his armor.
 * He dies at even, and dogs lick his blood at the pool of Samaria, fulfilling
 * the word of the Lord. One true prophet outweighs four hundred false ones.
 */
export const KINGS_1_22: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 22,

  estimatedMinutes: { beginner: 10, intermediate: 18, deep: 23 },
  intros: [
    'For three years, there has been peace between Syria and Israel. But in the third year, King Ahab of Israel and King Jehoshaphat of Judah sit together, and Ahab speaks of something that troubles him: Ramoth-gilead is rightfully Israel&apos;s, yet they have done nothing to take it back from the king of Syria. He asks Jehoshaphat: "Wilt thou go with me to battle?"',
    'Jehoshaphat, showing his alliance with the northern kingdom, agrees — but with a condition. "Inquire, I pray thee, at the word of the Lord today." And so Ahab summons his prophets — about 400 of them — and they speak with one voice: "Go up; for the Lord shall deliver it into the hand of the king." But Jehoshaphat is not satisfied. He presses the king: "Is there not here a prophet of the Lord besides, that we might enquire of him?"',
    'Ahab replies with a confession that reveals everything: "There is yet one man, Micaiah the son of Imlah, by whom we may enquire of the Lord: but I hate him; for he doth not prophesy good concerning me, but evil." This is a king surrounded by yes-men, disturbed by the one voice that tells him the truth. And this chapter is about what happens when a king prefers the comfort of lies to the clarity of truth — and what God does about it.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 22',
    quote:
      'One true prophet stands against 400 false ones, speaking what God has given him to speak. The word of the Lord will come to pass, even when a king tries to hide from it. And God permits the lying spirit to go forth, using even deception as an instrument of judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 22 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 22:1–13 — The Four Hundred Prophets ────────────────────── */
    {
      ref: '1 Kings 22:1–13',
      title: 'The Four Hundred Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'And they continued three years without war between Syria and Israel.'),
            {
              number: 2,
              spans: [
                t('And it came to pass in the third year, that '),
                hg('Jehoshaphat', 'king-jehoshaphat'),
                t(' the king of Judah came down to the king of Israel.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the king of Israel said unto his servants, Know ye that Ramoth in Gilead is ours, and we be still, and take it not out of the hand of the king of Syria?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he said unto Jehoshaphat, Wilt thou go with me to battle to Ramothgilead? And Jehoshaphat said to the king of Israel, I am as thou art, my people as thy people, my horses as thy horses.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Jehoshaphat said unto the king of Israel, '),
                t('Inquire, I pray thee, at the word of the Lord today'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'king-jehoshaphat',
          html:
            'Jehoshaphat, king of Judah, visits Ahab of Israel. The two kingdoms have been at peace. Yet Ahab is restless — he remembers that Ramoth-gilead belongs to Israel, not to Syria. He invites Jehoshaphat into an alliance: "Go with me to battle." Jehoshaphat agrees readily, but then speaks words that change everything: "Inquire, I pray thee, at the word of the Lord."',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 6,
              spans: [
                t('Then the king of Israel gathered the prophets together, about '),
                hg('four hundred men', 'four-hundred'),
                t(', and said unto them, Shall I go against Ramothgilead to battle, or shall I forbear? And they said, Go up; for the Lord shall deliver it into the hand of the king.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Jehoshaphat said, Is there not here a '),
                hg('prophet of the Lord besides', 'prophet-besides'),
                t(', that we might enquire of him?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the king of Israel said unto Jehoshaphat, There is yet one man, '),
                t('Micaiah the son of Imlah'),
                t(', by whom we may enquire of the Lord: but I hate him; for he doth not prophesy good concerning me, but evil. And Jehoshaphat said, Let not the king say so.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then the king of Israel called an officer, and said, Hasten hither Micaiah the son of Imlah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-kings-22-mid-9',
          html:
            '<p>The reign&apos;s glory peaks, revealing both the height of human achievement and its limits.</p>',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('And the king of Israel and Jehoshaphat the king of Judah sat each on his throne, having put on their robes, in a void place in the entrance of the gate of Samaria; and all the prophets prophesied before them.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Zedekiah the son of Chenaanah made him '),
                t('horns of iron'),
                t(': and he said, Thus saith the Lord, With these shalt thou push the Syrians, until thou have consumed them.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And all the prophets prophesied so, saying, Go up to Ramothgilead, and prosper: for the Lord shall deliver it into the king&apos;s hand.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the messenger that was gone to call Micaiah spake unto him, saying, Behold now, the words of the prophets declare good unto the king with one mouth: let thy word, I pray thee, be like the word of one of them, and speak that which is good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'four-hundred',
          html:
            'Ahab gathers four hundred prophets. This is not a small council but a full assembly of religious voices, all speaking with one mouth: "Go up; for the Lord shall deliver it into the hand of the king." The unanimity is overwhelming. The pressure on Jehoshaphat — and the reader — is to trust the majority. Four hundred cannot be wrong. But Jehoshaphat is not satisfied by numbers. He asks the one question that matters: "Is there not here a prophet of the Lord besides?" One true prophet is worth more than four hundred false ones.',
        },
        {
          kind: 'hebrew',
          id: 'micayehu-like-yah',
          title: 'Micayehu — "Who Is Like the Lord?"',
          script: 'מִיכָ֫יְהוּ',
          translit: '<strong>Micayehu</strong> · "who is like Yah?" (the Lord); a name that proclaims God&apos;s incomparability',
          description:
            'The prophet&apos;s name itself is a declaration: "Who is like the Lord?" It is a name of faith, a reminder that no king, no empire, no human authority can rival the Lord&apos;s supremacy. And it is this man — the one whose very name testifies to God&apos;s uniqueness — whom Ahab hates, because Micaiah alone refuses to bow to the king&apos;s desires.',
        },
        {
          kind: 'commentary',
          id: 'prophet-besides',
          html:
            'Jehoshaphat&apos;s instinct is crucial. He knows the difference between popularity and truth. A prophet whose words please the king is not necessarily a prophet of God. Ahab&apos;s own confession proves it: "I hate him; for he doth not prophesy good concerning me, but evil." Ahab knows who the true prophet is. But he hates him. And so the king surrounds himself with 400 voices that tell him what he wants to hear.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of abundance — information surrounds us, voices multiply, algorithms feed us what we already believe. But truth is not determined by the loudness of the crowd. Jehoshaphat teaches us to ask: "Is there not here a prophet of the Lord besides?" That is: who speaks what I do not want to hear but need to know? And do I have the courage to listen?',
        },
        {
          kind: 'reflection',
          id: 'false-prophets',
          prompt: 'When have you been surrounded by voices all saying the same comfortable thing? Who was the person who spoke differently, even at the cost of your displeasure? Did you listen?',
        },
      ],
    },

    /* ─── 1 Kings 22:14–18 — Micaiah's Sarcasm ──────────────────────────── */
    {
      ref: '1 Kings 22:14–18',
      title: 'Micaiah Speaks Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 14,
              spans: [
                t('And Micaiah said, '),
                hg('As the Lord liveth, what the Lord saith unto me, that will I speak', 'micaiah-oath'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('So he came to the king. And the king said unto him, Micaiah, shall we go against Ramothgilead to battle, or shall we forbear? And he answered him, '),
                hg('Go, and prosper: for the Lord shall deliver it into the hand of the king', 'micaiah-sarcasm'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the king said unto him, How many times shall I adjure thee that thou tell me nothing but that which is true in the name of the Lord?'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then he said, '),
                hg('I saw all Israel scattered upon the hills, as sheep that have not a shepherd', 'scattered-sheep'),
                t(': and the Lord said, These have no master: let them return every man to his house in peace.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the king of Israel said to Jehoshaphat, Did I not tell thee that he would prophesy no good concerning me, but evil?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'micaiah-oath',
          html:
            'The messenger meets Micaiah and tries to persuade him: "The words of the prophets declare good unto the king with one mouth: let thy word, I pray thee, be like the word of one of them." This is a test. Will Micaiah, facing peer pressure and the weight of four hundred voices, compromise? His answer is a vow: "As the Lord liveth, what the Lord saith unto me, that will I speak." He will not be moved by the crowd.',
        },
        {
          kind: 'commentary',
          id: 'micaiah-sarcasm',
          html:
            'When Micaiah stands before Ahab, he first speaks the very words the king wants to hear — the same words the four hundred prophets have spoken: "Go, and prosper: for the Lord shall deliver it into the hand of the king." But this is sarcasm. Micaiah is echoing the false prophets, and Ahab understands. He demands truth: "How many times shall I adjure thee that thou tell me nothing but that which is true in the name of the Lord?" Ahab swears an oath, binding Micaiah to speak nothing but truth. And so Micaiah speaks.',
        },
        {
          kind: 'hebrew',
          id: 'tson-lo-roeh',
          title: 'Tson lo Roeh — "Sheep without a Shepherd"',
          script: 'צֹאן לֹא־רֹעֶה',
          translit: '<strong>Tson lo roeh</strong> · sheep scattered without a shepherd; a flock abandoned and defenseless',
          description:
            'Micaiah&apos;s vision is devastating. He sees Israel not as a victorious army returning from Ramoth-gilead, but as scattered sheep without a shepherd. The image conjures helplessness, loss, dispersion — not the glorious conquest Ahab imagined. This language will echo centuries later when Jesus sees the crowds and feels compassion for them, "because they fainted, and were scattered abroad, as sheep having no shepherd" (Matthew 9:36).',
        },
        {
          kind: 'commentary',
          id: 'scattered-sheep',
          html:
            'The vision Micaiah speaks is not what Ahab wants. He does not see Israel victorious at Ramoth-gilead. He sees Israel scattered, like sheep without a shepherd — scattered on the hills, each man returning to his own house. This is the vision of defeat. This is the vision of a king fallen. And Ahab, when he hears it, understands that he has finally heard the truth.',
        },
        {
          kind: 'carry',
          html:
            'Truth often comes as sarcasm first — a mirror held up to our own desires. Micaiah echoes the false prophets so that we might see the absurdity of what we have chosen to believe. But when Ahab demands truth, Micaiah speaks it: the sheep will be scattered. The lesson is this: you can demand truth with an oath, but can you accept it when it comes?',
        },
        {
          kind: 'reflection',
          id: 'micaiah-truth',
          prompt: 'When you have demanded the truth from someone, were you truly ready to hear it? Or did you hope they would tell you something else?',
        },
      ],
    },

    /* ─── 1 Kings 22:19–23 — The Lying Spirit ────────────────────────────── */
    {
      ref: '1 Kings 22:19–23',
      title: 'The Lying Spirit and God&apos;s Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 19,
              spans: [
                t('And Micaiah said, Hear thou therefore the word of the Lord: I saw the Lord sitting on his throne, and all the '),
                hg('host of heaven standing by him on his right hand and on his left', 'heavenly-host'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the Lord said, Who shall persuade Ahab, that he may go up and fall at Ramothgilead? And one said after this manner, and another said after that manner.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And there came forth a spirit, and stood before the Lord, and said, I will persuade him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the Lord said unto him, Wherewith? And he said, I will go forth, and I will be a '),
                hy('lying spirit in the mouth of all his prophets', 'lying-spirit'),
                t('. And the Lord said, Thou shalt persuade him, and prevail also: go forth, and do so.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Now therefore, behold, the Lord hath put a lying spirit in the mouth of all these thy prophets; and the Lord hath spoken evil concerning thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'heavenly-host',
          html:
            'Micaiah&apos;s vision opens with a scene of absolute divine authority. The Lord sits upon His throne. All the host of heaven stands by Him — the entire court of heaven arrayed in ranks. This is not a small or uncertain matter. This is the deliberation of heaven itself. God is not absent from Ahab&apos;s schemes. God is not ignorant. God is sitting on His throne, and the whole of heaven is witness to what comes next.',
        },
        {
          kind: 'commentary',
          id: 'lying-spirit',
          html:
            'This is one of Scripture&apos;s most sobering passages. God asks: "Who shall persuade Ahab, that he may go up and fall at Ramothgilead?" A spirit comes forward and offers itself: "I will be a lying spirit in the mouth of all his prophets." And God permits it. "Go forth, and do so." This is not God acting with deception, but God using deception as an instrument of judgment. Ahab has already chosen to believe lies. God permits the lying spirit to go forth into all the false prophets, so that Ahab falls into the very trap he has set for himself. It is a terrible thing to be given over to the desires of your own heart.',
        },
        {
          kind: 'hebrew',
          id: 'ruach-sheqer',
          title: 'Ruach Sheqer — "Lying Spirit"',
          script: 'רוּחַ שֶׁ֫קֶר',
          translit: '<strong>Ruach sheqer</strong> · a spirit of deception; the spirit that speaks falsehood',
          description:
            'The term "lying spirit" (ruach sheqer in Hebrew) names the spiritual reality behind the false prophecy. This is not mere human error or sincere mistake. This is a spirit — a real spiritual agent — that goes forth into the mouths of the false prophets, speaking what Ahab wants to hear. God permits it as judgment on a king who has already made his choice: to trust the comfortable lie rather than the costly truth.',
        },
        {
          kind: 'carry',
          html:
            'This passage teaches a hard doctrine: there is a judgment that comes not as punishment from outside, but as a giving-over to what we have already chosen. When we surround ourselves with those who tell us what we want to hear, God may let us have exactly that. The lying spirit enters the mouths of the false prophets because Ahab has already created the spiritual condition for it. He hated Micaiah and would not hear him. Now he will believe the lie.',
        },
        {
          kind: 'reflection',
          id: 'lying-spirit-2',
          prompt: 'Are there voices you surround yourself with because they confirm what you want to believe? What truth might you be refusing to hear?',
        },
      ],
    },

    /* ─── 1 Kings 22:24–28 — Zedekiah Strikes Micaiah ─────────────────── */
    {
      ref: '1 Kings 22:24–28',
      title: 'The Prophet&apos;s Vindication',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 24,
              spans: [
                t('But '),
                hg('Zedekiah the son of Chenaanah', 'zedekiah-strike'),
                t(' went near, and smote Micaiah on the cheek, and said, Which way went the Spirit of the Lord from me to speak unto thee?'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Micaiah said, Behold, thou shalt see in that day, when thou shalt go into an '),
                hg('inner chamber to hide thyself', 'hide-chamber'),
                t('.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the king of Israel said, Take Micaiah, carry him back unto Amon the governor of the city, and to Joash the king&apos;s son;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And say, Thus saith the king, Put this fellow in the prison, and feed him with bread of affliction and with water of affliction, until I come in peace.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Micaiah said, '),
                hp('If thou return at all in peace, the Lord hath not spoken by me', 'micaiah-return-peace'),
                t(': and he said, Hearken, O people, every one of you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zedekiah-strike',
          html:
            'One of the false prophets, Zedekiah the son of Chenaanah (the same one who made horns of iron to symbolize Ahab&apos;s coming victory), steps forward and strikes Micaiah on the cheek. The blow is not random. It is an act of contempt — a false prophet defending his lie against the true prophet. "Which way went the Spirit of the Lord from me to speak unto thee?" Zedekiah is claiming that the Spirit has abandoned him. And in a sense, he is right. The lying spirit speaks through Zedekiah; the true Spirit speaks through Micaiah.',
        },
        {
          kind: 'commentary',
          id: 'hide-chamber',
          html:
            'Micaiah responds with a prophecy of Zedekiah&apos;s coming shame: "Behold, thou shalt see in that day, when thou shalt go into an inner chamber to hide thyself." The false prophet will hide. He will flee. His false confidence will crumble when Ahab falls. There is a reversal coming, and Zedekiah will understand it only when it is too late.',
        },
        {
          kind: 'commentary',
          id: 'micaiah-return-peace',
          html:
            'Ahab, enraged, orders Micaiah imprisoned and fed with bread and water of affliction until the king returns in peace from battle. But Micaiah speaks one final prophecy, as if calling the people as witnesses: "If thou return at all in peace, the Lord hath not spoken by me." This is Micaiah&apos;s seal on his prophecy. He stakes his life and authority on it. If Ahab returns victorious, then Micaiah is a false prophet. The judgment will prove the word of the Lord.',
        },
        {
          kind: 'carry',
          html:
            'There is a cost to speaking truth. Micaiah is struck, imprisoned, fed with bread and water of affliction. Yet he does not recant. He does not soften his message. He stands. And in standing, he calls the people as witnesses: the word of the Lord will be vindicated. Sometimes faithfulness means accepting the immediate cost, trusting that truth will be vindicated in the end.',
        },
        {
          kind: 'reflection',
          id: 'cost-truth',
          prompt: 'What has it cost you to speak a truth that someone did not want to hear? Did you maintain that truth, or did you compromise to avoid the cost?',
        },
      ],
    },

    /* ─── 1 Kings 22:29–37 — The Arrow at a Venture ──────────────────────── */
    {
      ref: '1 Kings 22:29–37',
      title: 'The Arrow Drawn at Random',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 29,
              spans: [
                t('So the king of Israel and Jehoshaphat the king of Judah went up to Ramothgilead.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And the king of Israel said unto Jehoshaphat, I will disguise myself, and enter into the battle; but put thou on thy robes. So the king of Israel disguised himself, and went into the battle.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('But the king of Syria commanded the captains of his chariots, saying, Fight neither with small nor great, save only with the king of Israel.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And it came to pass, when the captains of the chariots saw Jehoshaphat, that they said, Surely it is the king of Israel. And they turned aside to fight against him: and Jehoshaphat cried out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k22-micaiah-truth',
          html:
            'False prophets speak; Micaiah speaks truth—the word of God stands though all earthly counsel opposes it.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 33,
              spans: [
                t('And it came to pass, when the captains of the chariots perceived that it was not the king of Israel, that they turned back from pursuing him.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And a certain man drew a '),
                hy('bow at a venture', 'arrow-venture'),
                t(', and smote the king of Israel between the joints of the harness: wherefore he said unto the driver of his chariot, Turn thine hand, and carry me out of the host; for I am wounded.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the battle increased that day: and the king was held up in his chariot against the Syrians, and died at even: and the blood ran out of the wound into the midst of the chariot.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And there went a proclamation throughout the host about the going down of the sun, saying, Every man to his city, and every man to his own country.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('So the king died, and was brought to Samaria; and they buried him in Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'arrow-venture',
          html:
            'Ahab tries to cheat his fate. He disguises himself, hoping to escape Micaiah&apos;s prophecy. If he is not recognizable as king, perhaps the sword will not find him. But the prophecy does not depend on Ahab&apos;s costume. An archer draws his bow "at a venture" — without aim, without intention, simply shooting into the chaos of battle. Yet that random arrow finds the joints of Ahab&apos;s armor. It strikes not by human design but by divine precision. There is no hiding from God&apos;s word. The arrow does not miss.',
        },
        {
          kind: 'hebrew',
          id: 'chetz-venture',
          title: 'Chetz — "Arrow"; The Arrow Drawn at Venture',
          script: 'חֵץ',
          translit: '<strong>Chetz</strong> · arrow; a projectile shot with intent or, as here, drawn at random',
          description:
            'The image of the arrow drawn "at a venture" (not aimed, not deliberate, but random) carries a profound truth: the fulfillment of prophecy does not depend on human intention or planning. The archer does not know his arrow will strike the king. But God knows. The arrow is released into the chaos of battle, and yet it finds the joints of Ahab&apos;s armor. This is Providence — not the absence of human action, but God working through human action without human awareness.',
        },
        {
          kind: 'commentary',
          id: 'disguise-fail',
          html:
            'Ahab&apos;s attempt to disguise himself as a common soldier is an attempt to outrun prophecy. He puts his faith in costume, in strategy, in human cleverness. But the word of the Lord is not undone by disguises. The Syrians, unable to find the king, turn their assault on Jehoshaphat in his royal robes. But Jehoshaphat cries out, and the Syrians recognize him as not the king of Israel. They turn back. Jehoshaphat is spared. Meanwhile, an archer who never aimed at the king strikes him perfectly, between the joints of the harness — the one place where a human stroke can find vital flesh.',
        },
        {
          kind: 'christ',
          id: 'christ-true-king',
          title: 'Christ Connection — The King Whose Word Cannot Fail',
          html:
            'Ahab tries to hide from the word of the Lord, but the prophecy comes to pass through an arrow drawn at random. No disguise protects him. No strategy hides him. The word of the Lord does what it says it will do. In the New Testament, Jesus tells us, "Therefore I said unto you, that ye shall die in your sins: for if ye believe not that I am he, ye shall die in your sins" (John 8:24). The word of Jesus is no less certain than the word of Micaiah. And unlike Ahab, whose disguise could not save him, Jesus stands unveiled before His enemies — "Now we see through a glass, darkly; but then face to face" (1 Corinthians 13:12). The True Prophet, the True King, does not hide. His word does not miss. It finds its mark with the precision of an arrow, and His voice raises the dead.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide from truth forever. You cannot disguise yourself out of consequence. The arrow draws itself. Micaiah spoke, and Ahab tried to escape by costume and strategy and deception. But the prophecy came to pass. The arrow found him. This is both a warning and a comfort: a warning that we cannot outrun the consequences of our choices, and a comfort that God&apos;s word is sure.',
        },
        {
          kind: 'reflection',
          id: 'hide-arrow',
          prompt: 'When have you tried to hide from a truth or a consequence? Did the hiding help, or did the truth find you anyway?',
        },
      ],
    },

    /* ─── 1 Kings 22:37–40 — Dogs Lick His Blood ────────────────────────── */
    {
      ref: '1 Kings 22:37–40',
      title: 'Prophecy Fulfilled — The Dogs at the Pool',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 37,
              spans: [
                t('So the king died, and was brought to Samaria; and they buried him in Samaria.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And one washed the chariot in the pool of Samaria; and the '),
                hg('dogs licked up his blood', 'dogs-blood'),
                t('; (now the harlots washed themselves in the same pool;) '),
                hg('according unto the word of the Lord which he spake', 'word-fulfilled'),
                t('.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Now the rest of the acts of Ahab, and all that he did, and the ivory house which he made, and all the cities that he built, are they not written in the book of the chronicles of the kings of Israel?'),
              ],
            },
            {
              number: 40,
              spans: [
                t('So Ahab slept with his fathers; and Ahaziah his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dogs-blood',
          html:
            'The chariot of King Ahab is washed at the pool of Samaria. And as it is washed, the dogs come and lick up his blood. This detail is both literal and laden with meaning: the blood of a king, once spilled, is reduced to food for dogs. His splendor, his throne, his ivory house — all come to nothing. The man who surrounded himself with four hundred flattering prophets, who imprisoned the one true prophet, who tried to escape his fate by disguise — dies as every man dies. His blood does not remain sacred. The dogs are permitted to lick it.',
        },
        {
          kind: 'commentary',
          id: 'word-fulfilled',
          html:
            'And the text adds a phrase that carries the weight of all that has come before: "according unto the word of the Lord which he spake." This is the vindication of Micaiah. Years earlier (in 1 Kings 21:19), the prophet Elijah had spoken to Ahab after he seized the vineyard of Naboth: "And the Lord spake unto him, saying...I have found thee: because thou hast sold thyself to work evil in the sight of the Lord. Behold, I will bring evil upon thee...The dogs shall eat Jezebel by the walls of Jezreel. Him that dieth of Ahab in the city the dogs shall eat." Now the dogs lick his blood at the pool of Samaria. The word of the Lord comes to pass.',
        },
        {
          kind: 'carry',
          html:
            'The word of the Lord endures. All the splendor Ahab built — the ivory house, the cities — passes away. His blood is food for dogs. The only thing that remains standing is the word spoken by Micaiah and Elijah. The only thing that does not fail is the truth. The lesson is simple and terrifying: better to hear an unwelcome truth from God than to enjoy the comfortable lies of men.',
        },
        {
          kind: 'reflection',
          id: 'word-stands',
          prompt: 'What truth about yourself or your life have you been reluctant to face? What comfort are you getting from avoiding it?',
        },
      ],
    },
  ],
};
