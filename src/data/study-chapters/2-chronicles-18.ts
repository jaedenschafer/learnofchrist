import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 18 — Jehoshaphat's Affinity with Ahab; Micaiah's True Word
 *
 * The Chronicler's account of Jehoshaphat's alliance with Ahab closely mirrors
 * 1 Kings 22, with crucial emphasis on the consequences of joining affinity
 * with unbelievers. Jehoshaphat, a king of great wealth and honour, marries his
 * son to Ahab's daughter, binding Judah and Israel together. When Ahab later
 * persuades Jehoshaphat to join him at Ramoth-gilead, Jehoshaphat asks for
 * Micaiah — the one true prophet. Ahab gathers four hundred prophets who all
 * promise victory. But Micaiah speaks truth: Israel will be scattered like sheep
 * without a shepherd. The lying spirit is permitted to go forth. Micaiah is
 * struck and imprisoned. Ahab, disguised, dies by an arrow at random. Yet
 * Jehoshaphat returns in peace — preserved, perhaps, by his willingness to
 * seek the true prophet, even amid his compromise with Ahab.
 */
export const CHRONICLES_2_18: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 18,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 22 },
  intros: [
    'Jehoshaphat is a king blessed with riches and honour in abundance. Yet his wealth and power lead him into a dangerous alliance. He marries his son to the daughter of Ahab, king of Israel — an affinity that will test his faith. After certain years, he goes down to Ahab in Samaria. Ahab welcomes him with ceremony, slaughtering sheep and oxen, and then makes his proposal: will Jehoshaphat join him in battle to retake Ramoth-gilead from Syria?',
    "Jehoshaphat&apos;s response shows wisdom — he asks first that they inquire of the Lord. But when Ahab gathers his prophets — four hundred men, all speaking with one voice — something becomes clear: the king has surrounded himself with those who tell him what he wants to hear. And when Jehoshaphat, uneasy, asks if there is another prophet to consult, Ahab confesses his own preference for comfortable falsehood: &quot;There is yet one man, by whom we may enquire of the Lord: but I hate him; for he never prophesied good unto me, but always evil: the same is Micaiah son of Imla.&quot;",
    'This chapter is about the cost of affinity — the danger of binding ourselves to those who turn their faces from truth. But it is also about the faithfulness of the true prophet, and the remarkable preservation that comes when we are willing to listen, however imperfectly.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 18',
    quote:
      'Jehoshaphat sought the true prophet amid four hundred voices of comfortable lies. Though he returned in peace, his alliance with Ahab became a pattern of compromise. Be not unequally yoked with unbelievers — for affinity with those who turn from truth can draw even a faithful king into peril.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 18 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 18:1–2 — Jehoshaphat's Affinity with Ahab ──────────── */
    {
      ref: '2 Chronicles 18:1–2',
      title: "Jehoshaphat&apos;s Affinity with Ahab",
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(1, 'Now Jehoshaphat had riches and honour in abundance: and he joined affinity with Ahab.'),
            {
              number: 2,
              spans: [
                t('And after certain years he went down to Ahab to '),
                hg('Samaria', 'samaria-visit'),
                t('. And Ahab killed sheep and oxen for him in abundance, and for the people that he had with him, and persuaded him to go up with him to Ramothgilead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'samaria-visit',
          html:
            'Jehoshaphat, blessed with riches and honour, has made an affinity with Ahab — a bond of marriage that joins the house of Judah to the house of Israel. Now he visits Ahab in Samaria, the capital of the northern kingdom. Ahab receives him with great ceremony, slaughtering sheep and oxen in abundance. The hospitality is warm. The alliance seems secure. Yet this affinity will test Jehoshaphat\'s faith in ways he may not have anticipated.',
        },
        {
          kind: 'hebrew',
          id: 'chatanut',
          title: 'Chatanut — "Affinity"; Binding Through Marriage',
          script: 'חָתָנוּת',
          translit: '<strong>Chatanut</strong> · affinity; the bond created between families through marriage; relationship by marriage',
          description:
            'The word "chatanut" — affinity or relation by marriage — names the particular bond created when Jehoshaphat\'s son marries into Ahab\'s house. It is not merely a political alliance, though it is that too. It is a family bond, a covenant of kinship. The Chronicler uses this word to emphasize what Jehoshaphat has done: he has bound his own house to a house devoted to idolatry and falsehood.',
        },
        {
          kind: 'commentary',
          id: 'riches-honour',
          html:
            'The chapter opens by noting Jehoshaphat\'s "riches and honour in abundance." This is not accidental framing. Wealth and power can seduce us into alliances we would otherwise reject. Jehoshaphat has been abundantly blessed — and his abundance has made him careless of the company he keeps.',
        },
        {
          kind: 'carry',
          html:
            'Affinity is a particular kind of bond. It is not temporary. It is not a mere business arrangement. It is a family tie that endures. When we bind ourselves — through marriage, through partnership, through vows — to those who turn their faces from truth, we become entangled in ways that are difficult to untangle. Jehoshaphat\'s riches and honour did not protect him from this entanglement. What affinity have you chosen that now binds you in ways you did not fully anticipate?',
        },
        {
          kind: 'reflection',
          id: 'affinity-chosen',
          prompt: 'What bonds have you created — through marriage, partnership, or family — that you now realize may have drawn you away from truth? How do you honour those bonds while remaining faithful?',
        },
      ],
    },

    /* ─── 2 Chronicles 18:3–11 — The Four Hundred Prophets ────────────────── */
    {
      ref: '2 Chronicles 18:3–11',
      title: 'The Four Hundred Prophets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(3, 'And Ahab said unto him, Wilt thou go with me to Ramothgilead to battle? And he answered him, I am as thou art, and my people as thy people; and we will be with thee in the battle.'),
            {
              number: 4,
              spans: [
                t('And Jehoshaphat said unto the king of Israel, Inquire, I pray thee, '),
                hg('at the word of the Lord today', 'inquire-lord-2c'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Therefore the king of Israel gathered together of prophets '),
                hg('four hundred men', 'four-hundred-2c'),
                t(', and said unto them, Shall we go to Ramothgilead to battle, or shall I forbear? And they said, Go up; for God will deliver it into the hand of the king.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But Jehoshaphat said, Is there not here a '),
                hg('prophet of the Lord besides', 'prophet-besides-2c'),
                t(', that we might enquire of him?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the king of Israel said unto Jehoshaphat, There is yet one man, '),
                t('Micaiah the son of Imla'),
                t(', by whom we may enquire of the Lord: but he never prophesied good unto me, but always evil. Nevertheless let us hear him. So the king of Israel and Jehoshaphat the king of Judah sat either of them on his throne, clothed in their robes, and they sat in a void place at the entering in of the gate of Samaria; and all the prophets prophesied before them.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And '),
                hg('Zedekiah the son of Chenaanah', 'zedekiah-2c'),
                t(' made him horns of iron: and he said, Thus saith the Lord, With these shalt thou push the Syrians, until thou have consumed them.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And all the prophets prophesied so, saying, Go up to Ramothgilead, and prosper: for the Lord shall deliver it into the king\'s hand.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the messenger that went to call Micaiah spake unto him, saying, Behold, the words of the prophets declare good to the king with one mouth: let thy word, I pray thee, be like the word of one of them, and speak thou good.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Micaiah said, As the Lord liveth, even what my God saith, that will I speak.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'inquire-lord-2c',
          html:
            'Jehoshaphat\'s instinct shows his faith. Though he has made affinity with Ahab, though he has already agreed to go to battle, he speaks words that reveal his true allegiance: "Inquire, I pray thee, at the word of the Lord." He will not move on the king\'s word alone. He wants to know what God says. It is a moment of faithfulness amid the compromise of alliance.',
        },
        {
          kind: 'commentary',
          id: 'four-hundred-2c',
          html:
            'Ahab gathers four hundred prophets — an assembly of religious voices, all speaking with one mouth: "Go up; for God will deliver it into the hand of the king." The unanimity is overwhelming. What king would doubt four hundred voices speaking as one? But Jehoshaphat is not persuaded by numbers. He asks the one question that matters: "Is there not here a prophet of the Lord besides?" One true prophet, he understands, is worth more than four hundred false ones.',
        },
        {
          kind: 'commentary',
          id: 'prophet-besides-2c',
          html:
            'This question — "Is there not here a prophet of the Lord besides?" — is the hinge of the chapter. Jehoshaphat\'s affinity with Ahab, his agreement to go to battle, his silence as the four hundred speak — all of these are compromises. But this question shows that even in his compromise, he has not abandoned his desire for truth. There is, in his heart, a hunger for the authentic word of God.',
        },
        {
          kind: 'hebrew',
          id: 'micayehu-2c',
          title: 'Micayehu — "Who Is Like the Lord?"',
          script: 'מִיכָ֫יְהוּ',
          translit: '<strong>Micayehu</strong> · "who is like Yah?" (the Lord); a name proclaiming God\'s incomparability',
          description:
            'Micaiah\'s name itself is a declaration of faith: "Who is like the Lord?" It is a name that affirms God\'s supremacy over all earthly powers, all kings, all human authority. And it is this man — the one whose very name testifies that no king can rival God — whom Ahab hates, because Micaiah alone refuses to bow to the king\'s desires.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-2c',
          html:
            'Zedekiah, one of the false prophets, makes horns of iron and speaks with theatrical confidence: "With these shalt thou push the Syrians, until thou have consumed them." The gesture is dramatic, meant to move the king toward war. But iron horns are not a prophet\'s true ornament. A prophet\'s truth is his only ornament. And Zedekiah wears the ornament of falsehood.',
        },
        {
          kind: 'carry',
          html:
            'Truth is often unpopular. The voices that surround us are usually the voices of those who benefit from our choices — those who profit from our comfort, our momentum, our power. It takes particular grace to ask, amid a chorus of approval, "Is there not here a prophet of the Lord besides?" To ask that question is to admit that you are not entirely satisfied, that you sense something is missing, that you are willing to hear what troubles you.',
        },
        {
          kind: 'reflection',
          id: 'prophets-voice',
          prompt: 'When you are surrounded by voices all affirming the same course, what prevents you from asking for the voice that speaks differently? What makes you willing to hear what troubles you?',
        },
      ],
    },

    /* ─── 2 Chronicles 18:12–22 — Micaiah's Truth and the Lying Spirit ────── */
    {
      ref: '2 Chronicles 18:12–22',
      title: "Micaiah&apos;s Truth and the Lying Spirit",
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 12,
              spans: [
                t('And when he was come to the king, the king said unto him, Micaiah, shall we go to Ramothgilead to battle, or shall I forbear? And he answered, Go ye up, and prosper, and they shall be delivered into your hand.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the king said to him, How many times shall I adjure thee that thou tell me nothing but that which is true in the name of the Lord?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then he said, I did see all Israel scattered upon the mountains, as sheep that have no shepherd: and the Lord said, These have no master; let them return therefore every man to his house in peace.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the king of Israel said to Jehoshaphat, Did I not tell thee that he would not prophesy good unto me, but evil?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Again he said, Therefore hear the word of the Lord; I saw the Lord sitting upon his throne, and all the '),
                hg('host of heaven standing on his right hand and on his left', 'heavenly-host-2c'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2chr18-micaiah-summoned',
          html:
            'The four hundred prophets agree on victory; the lone dissenter is summoned anyway. Jehoshaphat&apos;s instinct is right — but the alliance with Ahab is already locked in. Hearing the truth and refusing to act on it is its own judgment.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 17,
              spans: [
                t('And the Lord said, Who shall entice Ahab king of Israel, that he may go up and fall at Ramothgilead? And one spake saying after this manner, and another saying after that manner.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then there came out a spirit, and stood before the Lord, and said, I will entice him. And the Lord said unto him, Wherewith?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he said, I will go out, and be '),
                hy('a lying spirit in the mouth of all his prophets', 'lying-spirit-2c'),
                t('. And the Lord said, Thou shalt entice him, and thou shalt also prevail: go out, and do even so.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Now therefore, behold, the Lord hath put a lying spirit in the mouth of all these thy prophets; and the Lord hath spoken evil against thee.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But '),
                hg('Zedekiah the son of Chenaanah went near, and smote Micaiah upon the cheek', 'zedekiah-smite'),
                t(', and said, Which way went the Spirit of the Lord from me to speak unto thee?'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Micaiah said, Behold, thou shalt see on that day when thou shalt go into an inner chamber to hide thyself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'scattered-sheep-2c',
          html:
            'Micaiah first echoes the false prophets — "Go ye up, and prosper, and they shall be delivered into your hand" — a moment of sarcasm that mirrors what we saw in 1 Kings 22. But when Ahab demands truth with an oath, Micaiah speaks: "I did see all Israel scattered upon the mountains, as sheep that have no shepherd." The vision is devastating. It is not victory Micaiah sees, but defeat — Israel scattered, masterless, returning each to his own house in peace. This is the vision of a fallen king, not a victorious one.',
        },
        {
          kind: 'hebrew',
          id: 'tson-lo-roeh-2c',
          title: 'Tson lo Roeh — "Sheep without a Shepherd"',
          script: 'צֹאן לֹא־רֹעֶה',
          translit: '<strong>Tson lo roeh</strong> · sheep scattered without a shepherd; a flock abandoned to its fate',
          description:
            'The image of scattered sheep without a shepherd carries profound biblical weight. It speaks of helplessness, of people abandoned, of leadership broken. Later, Jesus will use this same image when He sees the crowds — "they fainted, and were scattered abroad, as sheep having no shepherd" (Matthew 9:36). The shepherd and the flock are inseparable. Without the shepherd, the flock is lost.',
        },
        {
          kind: 'commentary',
          id: 'heavenly-host-2c',
          html:
            'Micaiah\'s vision opens with a scene of absolute divine authority. The Lord sits upon His throne. The entire host of heaven stands by — the court of heaven arrayed in ranks, witnessing what comes next. This is not a small or uncertain matter. This is the deliberation of heaven itself. God is not absent. God is not ignorant of Ahab\'s schemes. The whole of heaven is witness.',
        },
        {
          kind: 'commentary',
          id: 'lying-spirit-2c',
          html:
            'A spirit comes forward and offers itself: "I will be a lying spirit in the mouth of all his prophets." And God permits it. "Go out, and do even so." This is Scripture\'s most sobering teaching about judgment. God does not act with deception, but God permits deception to go forth as an instrument of judgment. Ahab has already chosen to believe lies. The lying spirit enters the mouths of the false prophets because Ahab has already created the spiritual condition for it. He hated Micaiah and would not hear him. Now he will believe the lie.',
        },
        {
          kind: 'hebrew',
          id: 'ruach-sheqer-2c',
          title: 'Ruach Sheqer — "Lying Spirit"',
          script: 'רוּחַ שֶׁ֫קֶר',
          translit: '<strong>Ruach sheqer</strong> · a spirit of deception; the spirit that speaks falsehood',
          description:
            'The term "lying spirit" names the spiritual reality behind the false prophecy. This is not mere human error or sincere mistake. This is a spirit — a real spiritual agent — that goes forth into the mouths of the false prophets, speaking what Ahab wants to hear. God permits it as judgment on a king who has already made his choice: to trust the comfortable lie rather than the costly truth.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-smite',
          html:
            'Zedekiah, one of the false prophets, steps forward and strikes Micaiah on the cheek. The blow is not random. It is an act of contempt — a false prophet defending his lie against the true prophet. Yet this blow becomes a prophecy itself: "Behold, thou shalt see on that day when thou shalt go into an inner chamber to hide thyself." The false prophet will flee. His false confidence will crumble when Ahab falls.',
        },
        {
          kind: 'carry',
          html:
            'There is a terrible comfort in surrounding ourselves with those who tell us what we want to hear. And there is a terrible judgment in being given over to that comfort — in being permitted to have exactly what we have chosen to believe. But truth, spoken faithfully, disrupts this judgment. Micaiah stands and speaks, knowing the cost. He is struck, but he does not recant. He stands.',
        },
        {
          kind: 'reflection',
          id: 'lying-spirit-reflect',
          prompt: 'What voices do you surround yourself with because they confirm what you want to believe? What truth might you be refusing to hear, even when it costs you to do so?',
        },
      ],
    },

    /* ─── 2 Chronicles 18:23–31 — Micaiah Imprisoned; Ahab Disguised ──────── */
    {
      ref: '2 Chronicles 18:23–31',
      title: 'Micaiah Imprisoned; Ahab Disguised and Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 23,
              spans: [
                t('And the king of Israel said, Take ye Micaiah, and carry him back to Amon the governor of the city, and to Joash the king\'s son;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And say, Thus saith the king, Put this fellow in the prison, and feed him with bread of affliction and with water of affliction, until I return in peace.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Micaiah said, If thou certainly return in peace, then hath not the Lord spoken by me. And he said, Hearken, all ye people.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('So the king of Israel and Jehoshaphat the king of Judah went up to Ramothgilead.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the king of Israel said unto Jehoshaphat, I will disguise myself, and will go to the battle; but put thou on thy robes. So the king of Israel disguised himself; and they went to the battle.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Now the king of Syria had commanded the captains of his chariots, saying, Fight ye not with small or great, save only with the king of Israel.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And it came to pass, when the captains of the chariots saw Jehoshaphat, that they said, It is the king of Israel. Therefore they compassed about him to fight: but Jehoshaphat cried out, and the Lord helped him; and God moved them to depart from him.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('For it came to pass, that, when the captains of the chariots perceived that it was not the king of Israel, they turned back again from pursuing him.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And '),
                hy('a certain man drew a bow at a venture', 'arrow-venture-2c'),
                t(', and smote the king of Israel between the joints of the harness: therefore he said to the driver of the chariot, Turn thine hand, that thou mayest carry me out of the host; for I am wounded.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'micaiah-sealed',
          html:
            'Micaiah is imprisoned and fed with bread and water of affliction. But before he goes, he speaks one final word, as if calling all the people as witnesses: "If thou certainly return in peace, then hath not the Lord spoken by me." He stakes his life and his authority on this prophecy. If Ahab returns victorious, then Micaiah is a false prophet. The word of the Lord will be vindicated by the event.',
        },
        {
          kind: 'commentary',
          id: 'disguise-fail-2c',
          html:
            'Ahab tries to escape his fate by disguise. He puts on a common soldier\'s garb, hoping that the Syrians will not recognize him. But the word of the Lord does not depend on recognition. Meanwhile, Jehoshaphat wears his royal robes and is mistaken for the king. The captains of the chariots surround him, but Jehoshaphat cries out, and the Lord delivers him. God moves the captains to turn back. Jehoshaphat is spared. Meanwhile, an archer who has not aimed at the king shoots an arrow at random into the chaos of battle.',
        },
        {
          kind: 'hebrew',
          id: 'chetz-2c',
          title: 'Chetz — "Arrow"; The Arrow Drawn at a Venture',
          script: 'חֵץ',
          translit: '<strong>Chetz</strong> · arrow; a projectile sent with intent or, as here, drawn at random',
          description:
            'The arrow drawn "at a venture" — not aimed, not deliberate, but random — carries profound meaning. The fulfillment of prophecy does not depend on human intention or planning. The archer does not know his arrow will strike the king. But God knows. The arrow is released into the chaos of battle, and yet it finds the joints of Ahab\'s armour — the one place where a human stroke can find vital flesh. This is Providence working through human action without human awareness.',
        },
        {
          kind: 'commentary',
          id: 'arrow-venture-2c',
          html:
            'The random arrow finds Ahab between the joints of his harness. There is no hiding from God\'s word. No disguise protects him. No strategy escapes prophecy. The arrow does not miss. It strikes with precision despite being drawn without aim. This is the vindication of Micaiah\'s word: Ahab has fallen at Ramoth-gilead, precisely as the prophet spoke.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide from truth forever. You cannot disguise yourself out of consequence. Ahab tried — by surrounding himself with false prophets, by imprisoning the true one, by changing clothes and seeking to escape recognition. But the prophecy came to pass. The arrow found him. There is both warning and comfort in this: warning that we cannot outrun the consequences of our choices, and comfort that God\'s word is sure.',
        },
        {
          kind: 'reflection',
          id: 'hide-arrow-2c',
          prompt: 'When have you tried to hide from a truth or a consequence? Did the hiding help, or did the truth find you anyway?',
        },
      ],
    },

    /* ─── 2 Chronicles 18:32–34 — Jehoshaphat Returns in Peace ────────────── */
    {
      ref: '2 Chronicles 18:32–34',
      title: 'Jehoshaphat Returns in Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(32, 'And the king of Israel held on in the chariot against the Syrians until the even: and about the time of the going down of the sun he died.'),
            {
              number: 33,
              spans: [
                t('Then Jehoshaphat the king of Judah returned to his house in peace to Jerusalem.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And Jehu the son of Hanani the '),
                hg('seer went out to meet him', 'jehu-seer'),
                t(', and said to king Jehoshaphat, Shouldest thou help the ungodly, and love them that hate the Lord? therefore is wrath upon thee from before the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jehu-seer',
          html:
            'Ahab dies at evening, his blood running into the midst of his chariot. But Jehoshaphat — Jehoshaphat returns. He goes back to his house in Jerusalem in peace. Yet he is not without judgment. The seer Jehu meets him with hard words: "Shouldest thou help the ungodly, and love them that hate the Lord? therefore is wrath upon thee from before the Lord." Even in mercy, even in return to peace, Jehoshaphat is rebuked. His affinity with Ahab, his willingness to be drawn into battle by an unbeliever, has brought him under the shadow of God\'s displeasure.',
        },
        {
          kind: 'commentary',
          id: 'preserve-seek',
          html:
            'Yet Jehoshaphat is preserved. This is crucial. Though he has made affinity with Ahab, though he has agreed to go to battle, though he has been mistaken for the king and surrounded by the enemies of Israel — he is spared. Perhaps because he sought Micaiah. Perhaps because his heart, though compromised in affinity, still hungered for the true word of God. The text shows us a king caught between two worlds: compromise and faithfulness, affinity and the truth. And it shows us that even in the midst of his compromise, his seeking after truth has not gone unheard.',
        },
        {
          kind: 'christ',
          id: 'christ-true-prophet-2c',
          title: 'Christ Connection — The True Prophet Whose Word Does Not Fail',
          html:
            'Micaiah stands against four hundred false voices, speaking what God has given him to speak. His word comes to pass. In the New Testament, Jesus speaks with the same clarity: "Therefore I said unto you, that ye shall die in your sins: for if ye believe not that I am he, ye shall die in your sins" (John 8:24). The word of Jesus is no less certain than the word of Micaiah. And unlike Ahab, who tried to hide from his prophecy through disguise, Jesus stands unveiled before His enemies. His word does not miss. It finds its mark with the precision of an arrow. And His voice raises the dead.',
        },
        {
          kind: 'carry',
          html:
            'Jehoshaphat\'s story is a story of compromise that is not entirely redeemed, yet not entirely lost. He has made an affinity with Ahab that binds him to unbelief. He has nearly been drawn into death by this affinity. Yet because he sought the true prophet, because he was willing to ask "Is there not here a prophet of the Lord besides?" — he is spared. His affinity with Ahab will bring judgment upon him. But his seeking after truth has preserved his life. The lesson is this: you cannot walk forever with those who turn their faces from God. Affinity with the ungodly brings wrath. Yet if your heart still hungers for the true word, if you are still willing to ask for the authentic voice even amid your compromise, you may yet be preserved.',
        },
        {
          kind: 'reflection',
          id: 'jehoshaphat-compromise',
          prompt: 'You may be bound to those who turn from truth — through family, through marriage, through business, through circumstances you cannot easily change. Yet you can still seek the true word. What would it mean for you to ask, even now, "Is there not here a prophet of the Lord besides?" — to seek truth even within the constraints of your affinity?',
        },
      ],
    },
  ],
};
