import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 15 — A Lamp Preserved, A Heart Made Perfect, A Prophecy Fulfilled
 *
 * This chapter contains the reigns of four kings spanning both the northern
 * and southern kingdoms. Abijam walks in the sins of his father yet receives
 * mercy for David&apos;s sake — a "lamp" given to his line despite his failure.
 * Asa, his son, does what is right in the eyes of the Lord, removing idolatry
 * so thoroughly that he even deposes his own grandmother as queen. Yet his
 * political compromise—paying Ben-hadad to break his league with Baasha—does
 * not disqualify the verdict: "his heart was perfect with the Lord all his days."
 * In Israel, Nadab reigns only two years before Baasha strikes him down,
 * fulfilling the word spoken against Jeroboam&apos;s house. This chapter traces
 * the difference between a heart aligned with God and a heart bent toward evil,
 * even when external outcomes look similar.
 */
export const KINGS_1_15: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 15,

  estimatedMinutes: { 5: 7, 10: 13, 15: 19 },
  intros: [
    'The kingdom of Israel stands divided. In Jerusalem, Rehoboam&apos;s line struggles to hold the throne. In the north, Jeroboam continues his dynasty, yet the Lord has promised the house of Jeroboam will be cut off. This chapter opens with the reign of Abijam, son of Rehoboam—a king who walks in his father&apos;s sins. Yet even as he fails, God remembers David. The lamp is not extinguished.',
    'In Judah, Asa brings reform. He tears down idols, removes his own grandmother from the office of queen, and sets his heart toward the Lord. When Baasha of Israel threatens his borders, Asa pays tribute to Ben-hadad of Syria to break the league against him. It is a political compromise, not a spiritual one—and Scripture affirms that "his heart was perfect with the Lord all his days."',
    'In Israel, the judgments of God unfold with precise timing. Nadab reigns only two years before Baasha strikes him down, destroying Jeroboam&apos;s entire house. The word spoken by the prophet Ahijah is fulfilled. This chapter shows us a God who remembers His promises, who moves in the hearts of kings, and who looks not only at what we do but at the orientation of our hearts toward Him.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 15',
    quote:
      'For David&apos;s sake, the Lord gave Abijam a lamp in Jerusalem. Asa&apos;s heart was perfect with the Lord all his days, even when his actions were imperfect. God measures the heart of a king, not merely the external outcome.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 15 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 15:1–8 — Abijam: The Lamp Preserved Despite Failure ───── */
    {
      ref: '1 Kings 15:1–8',
      title: 'Abijam: The Lamp Preserved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Now in the eighteenth year of king Jeroboam the son of Nebat reigned Abijam over Judah.'),
            plain(2, 'Three years reigned he in Jerusalem. And his mother&apos;s name was Maachah, the daughter of Abishalom.'),
            {
              number: 3,
              spans: [
                t('And he walked in all the '),
                hg('sins of his father', '1k15-abijam-sins'),
                t(', which he had done before him: and his heart was not perfect with the Lord his God, as the heart of David his father.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Nevertheless for '),
                hp('David&apos;s sake', '1k15-lamp-preserved'),
                t(' did the Lord his God give him a '),
                hy('lamp', '1k15-lamp-ner'),
                t(' in Jerusalem, to set up his son after him, and to establish Jerusalem:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Because David did that which was right in the eyes of the Lord, and turned not aside from any thing that he commanded him all the days of his life, save only in the matter of Uriah the Hittite.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And there was war between Rehoboam and Jeroboam all the days of his life.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Now the rest of the acts of Abijam, and all that he did, are they not written in the book of the chronicles of the kings of Judah? And there was war between Abijam and Jeroboam.'),
              ],
            },
            plain(8, 'And Abijam slept with his fathers; and they buried him in the city of David: and Asa his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-abijam-sins',
          html:
            'Abijam walks in all the sins of his father Rehoboam. He does not break the cycle—he continues it. His heart is "not perfect with the Lord his God." This is a statement of spiritual misalignment. He is not a king who seeks the Lord; he is a king bent toward idolatry and away from the covenant. By any measure of his own deeds, he is a failure.',
        },
        {
          kind: 'commentary',
          id: '1k15-lamp-preserved',
          html:
            'And yet the Lord gives him a lamp. A lamp in Jerusalem. The promise to David—that his line would not be extinguished, that his throne would be established before the Lord forever—does not depend on Abijam&apos;s righteousness. It depends on God&apos;s word to David. This is covenant mercy. Abijam does not earn it. He receives it because someone else—his ancestor David—did what was right.',
        },
        {
          kind: 'hebrew',
          id: '1k15-lamp-ner',
          title: 'Ner — "Lamp" or "Light"',
          script: 'נֵר',
          translit: '<strong>Ner</strong> · lamp; light; a small oil lamp',
          description:
            'The word "ner" is simple: a lamp, a light. But in the language of covenant, it carries theological weight. A lamp is meant to burn, to be seen. God promises that David&apos;s lamp will not be extinguished. Even when the one holding the lamp walks in darkness, the lamp itself—the promise, the covenant—remains lit. It will pass to the next generation.',
        },
        {
          kind: 'carry',
          html:
            'Abijam receives what he does not deserve because of what came before him. He is a heir to promises he has not kept faith with. This is the nature of covenant mercy: what God has sworn to one generation flows to the next, not because the next generation earns it, but because God is faithful. Do you carry the heritage of faith that others labored to establish? What lamp has been given to you not because of your righteousness, but because of what the faithful did before you?',
        },
        {
          kind: 'reflection',
          id: '1k15-abijam-reflection',
          prompt: 'Abijam receives mercy not for his own righteousness but for David&apos;s sake. When have you received grace or blessing that you did not earn, but that was given because of the faithfulness or sacrifice of others?',
        },
      ],
    },

    /* ─── 1 Kings 15:9–22 — Asa: The Heart Made Perfect ───────────────── */
    {
      ref: '1 Kings 15:9–22',
      title: 'Asa: A Heart Made Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(9, 'And in the twentieth year of Jeroboam king of Israel reigned Asa over Judah.'),
            plain(10, 'And forty and one years reigned he in Jerusalem. And his mother&apos;s name was Maachah, the daughter of Abishalom.'),
            {
              number: 11,
              spans: [
                t('And Asa '),
                hg('did that which was right', '1k15-asa-right'),
                t(' in the eyes of the Lord: as did David his father.'),
              ],
            },
            plain(12, 'And he took away the sodomites out of the land, and removed all the idols that his fathers had made.'),
            {
              number: 13,
              spans: [
                t('And also Maachah his mother, even her he removed from being '),
                hg('queen', '1k15-asa-grandmother'),
                t(', because she had made an idol in a grove; and Asa destroyed her idol, and burnt it by the brook Kidron.'),
              ],
            },
            plain(14, 'But the high places were not removed: nevertheless Asa&apos;s heart was perfect with the Lord all his days.'),
            plain(15, 'And he brought in the things which his father had dedicated, and the things which himself had dedicated, into the house of the Lord, silver, and gold, and vessels.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-asa-right',
          html:
            'Asa does that which is right in the eyes of the Lord, as David did. This is not a partial righteousness. This is a king who seeks the Lord, who tears away false worship, who dedicates the sacred vessels to the house of the Lord. Asa is a reformer. He acts with courage and conviction.',
        },
        {
          kind: 'commentary',
          id: '1k15-asa-grandmother',
          html:
            'The most striking act of Asa&apos;s reformation is the removal of his own mother—or grandmother (the text is ambiguous, but the deed is unambiguous). Maachah, the queen mother, had made an idol in a grove. Asa destroys her idol and strips her of her office. This is reform at the cost of family loyalty. No exception is granted for kinship. The covenant with the Lord takes precedence over the bonds of blood.',
        },
        {
          kind: 'hebrew',
          id: '1k15-shalem',
          title: 'Shalem — "Perfect" or "Whole"',
          script: 'שָׁלֵם',
          translit: '<strong>Shalem</strong> · perfect; whole; complete; sound',
          description:
            'The word "shalem" appears at the climax of Asa&apos;s story: "his heart was perfect with the Lord all his days." It means complete, sound, undivided. Asa&apos;s heart is wholly oriented toward the Lord. Not perfectly executed in every action—the high places remain—but perfectly aligned in its ultimate loyalty. He does not try to maintain one foot in idolatry and one in the covenant. His whole heart belongs to the Lord.',
        },
        {
          kind: 'commentary',
          id: '1k15-asa-high-places',
          html:
            'The text notes that "the high places were not removed." High places were locations of worship outside the central temple—some legitimate, some idolatrous. Asa did not remove them all. Yet immediately after this notation, Scripture says his heart was perfect with the Lord all his days. This is crucial: perfection of heart does not mean perfection of policy. A king can be wholeheartedly devoted to the Lord while leaving certain reforms incomplete. God measures the heart, not merely the outcome.',
        },
        {
          kind: 'carry',
          html:
            'Asa shows us that reformation is not one-time. It is a life-long reorienting of the heart toward God. You may not accomplish every change you wish to make. There may be obstacles you cannot remove, partial victories that must suffice. But if your heart is perfect with the Lord—if you are wholly devoted to Him, willing to remove even what comes from your own family if it stands between you and Him—then the Lord counts it as righteousness. What idolatry do you need to destroy, even at cost to yourself?',
        },
        {
          kind: 'reflection',
          id: '1k15-asa-heart-reflection',
          prompt: 'Asa&apos;s heart was perfect, but his reforms were incomplete. What does it mean to have a heart wholly devoted to God while still being imperfect in your actions? Where do you see this in your own life?',
        },
      ],
    },

    /* ─── 1 Kings 15:16–22 — Asa&apos;s Compromise: War and Alliance ──────── */
    {
      ref: '1 Kings 15:16–22',
      title: 'Asa&apos;s Political Compromise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(16, 'And there was war between Asa and Baasha king of Israel all their days.'),
            {
              number: 17,
              spans: [
                t('And Baasha king of Israel went up against Judah, and '),
                hg('built Ramah', '1k15-baasha-ramah'),
                t(', that he might not suffer any to go out or come in to Asa king of Judah.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then Asa took all the silver and the gold that were left in the treasures of the house of the Lord, and the treasures of the king&apos;s house, and delivered them into the hand of his servants: and king Asa sent them to Ben-hadad, the son of Tabrimon, the son of Hezion, king of Syria, that dwelt at Damascus, saying,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('There is a league between me and thee, and between my father and thy father: behold, I have sent unto thee a present of silver and gold; come and break thy league with Baasha king of Israel, that he may depart from me.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('So Ben-hadad hearkened unto king Asa, and sent the captains of the hosts which he had against the cities of Israel, and smote Ijon, and Dan, and Abel-beth-maachah, and all Cinneroth, with all the land of Naphtali.'),
              ],
            },
            plain(21, 'And it came to pass, when Baasha heard thereof, that he left off building of Ramah, and dwelt in Tirzah.'),
            {
              number: 22,
              spans: [
                t('Then king Asa made a '),
                hg('proclamation', '1k15-asa-proclamation'),
                t(' throughout all Judah; none was exempted: and they took away the stones of Ramah, and the timber thereof, wherewith Baasha had builded; and king Asa built with them Geba of Benjamin, and Mizpah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-baasha-ramah',
          html:
            'Baasha, the king of Israel, responds to Asa&apos;s reformation by going up against Judah. He builds the city of Ramah as a fortress to blockade Judah—preventing anyone from leaving Asa&apos;s kingdom or entering it. This is a siege, a stranglehold. Asa faces a genuine military threat. He cannot simply trust and wait.',
        },
        {
          kind: 'commentary',
          id: '1k15-asa-proclamation',
          html:
            'Asa&apos;s response is to drain the treasures of the temple and the palace to buy the allegiance of Ben-hadad of Syria. He does not pray. He does not seek the Lord for deliverance. He makes a political calculation. He pays Syria to attack Israel&apos;s northern cities, forcing Baasha to abandon his project at Ramah. The strategy works. The threat is removed.',
        },
        {
          kind: 'commentary',
          id: '1k15-temple-gold',
          html:
            'That Asa uses the temple gold to pay for military alliance is notable. He is not stealing from the sacred; he is deploying sacred resources toward what he sees as survival. Yet it is a compromise. He could have sought the Lord in prayer. Instead, he sought a king in Syria. This is a moment of broken trust, even if it was strategically sound. And yet—Scripture does not revoke the verdict that his heart was perfect with the Lord all his days.',
        },
        {
          kind: 'carry',
          html:
            'Asa teaches us something subtle: a perfect heart and an imperfect decision can exist in the same person at the same time. When Asa faced the siege, he did not cry out to God. He cried out to Ben-hadad. It was a failure of faith. Yet his fundamental allegiance, his core orientation, remained toward the Lord. His entire reign was devoted to removing idolatry and establishing righteousness. One moment of political expediency did not erase forty-one years of covenant faithfulness. Do you demand perfect choices in every moment, or do you, like God, look at the overall orientation of the heart?',
        },
        {
          kind: 'reflection',
          id: '1k15-asa-compromise-reflection',
          prompt: 'Asa made a strategic choice rather than a faith choice when facing Baasha&apos;s blockade. Yet his heart remained devoted to the Lord. When have you compromised in a moment and wondered if it disqualified your entire faith? What does Asa&apos;s example teach you?',
        },
      ],
    },

    /* ─── 1 Kings 15:23–24 — Asa&apos;s Old Age and Death ──────────────── */
    {
      ref: '1 Kings 15:23–24',
      title: 'Asa&apos;s Legacy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(23, 'The rest of all the acts of Asa, and all his might, and all that he did, and the cities which he built, are they not written in the book of the chronicles of the kings of Judah? Nevertheless in the time of his old age he was diseased in his feet.'),
            plain(24, 'And Asa slept with his fathers, and was buried with his fathers in the city of David his father: and Jehoshaphat his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-asa-old-age',
          html:
            'In Asa&apos;s old age, he is diseased in his feet. Later history (in 2 Chronicles) will reveal that in his sickness, he sought physicians instead of the Lord. This is a supplementary detail: toward the end of his life, the same man whose heart was perfect with the Lord in his youth begins to look elsewhere for healing. It is a sorrow. But it does not negate the overall verdict. Asa is buried in the city of David, among the kings of Judah, with honor.',
        },
        {
          kind: 'commentary',
          id: '1k15-asa-legacy',
          html:
            'Asa&apos;s reign lasted forty-one years—a long life, a long rule. He built cities. He removed idolatry. He set the kingdom&apos;s heart toward the Lord. His son Jehoshaphat will follow in his ways. The reformation did not end with Asa&apos;s death; it became the foundation of the next reign. This is the fruit of a life devoted to righteousness: not merely personal sanctification, but a legacy that shapes generations.',
        },
        {
          kind: 'carry',
          html:
            'To live a long life and leave a kingdom better than you found it—this is the grace of a perfect heart. Asa changed the course of Judah. He cut away the idolatries his fathers had planted. He was not perfect in his decisions, and he did not achieve every reform he might have wished. But he shaped his age. And Judah remembers him as righteous. What will your legacy be?',
        },
        {
          kind: 'reflection',
          id: '1k15-asa-legacy-reflection',
          prompt: 'Asa is remembered as a king whose heart was perfect with the Lord, despite his imperfections and his eventual reliance on physicians instead of the Lord in his old age. What kind of legacy do you want to leave—not merely what you accomplish, but the orientation of your heart?',
        },
      ],
    },

    /* ─── 1 Kings 15:25–32 — Nadab and Baasha: Prophecy Fulfilled ──────── */
    {
      ref: '1 Kings 15:25–32',
      title: 'Nadab and Baasha: The Prophecy Fulfilled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(25, 'And Nadab the son of Jeroboam began to reign over Israel in the second year of Asa king of Judah, and reigned over Israel two years.'),
            {
              number: 26,
              spans: [
                t('And he did evil in the sight of the Lord, and walked in the way of his father, and in his '),
                hg('sin wherewith he made Israel to sin', '1k15-nadab-evil'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Baasha the son of Ahijah, of the house of Issachar, conspired against him; and Baasha smote him at Gibbethon, which belonged to the Philistines; for Nadab and all Israel laid siege to Gibbethon.'),
              ],
            },
            plain(28, 'Even in the third year of Asa king of Judah did Baasha slay him, and reigned in his stead.'),
            {
              number: 29,
              spans: [
                t('And it came to pass, when he reigned, that he smote all the house of Jeroboam; he left not any to Jeroboam that breathed, until he had destroyed him, according unto the '),
                hp('saying of the Lord', '1k15-prophecy-fulfilled'),
                t(', which he spake by his servant Ahijah the Shilonite:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Because of the sins of Jeroboam which he sinned, and which he made Israel to sin, by his provocation wherewith he provoked the Lord God of Israel to anger.'),
              ],
            },
            plain(31, 'Now the rest of the acts of Nadab, and all that he did, are they not written in the book of the chronicles of the kings of Israel?'),
            plain(32, 'And there was war between Asa and Baasha king of Israel all their days.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-nadab-evil',
          html:
            'Nadab is the son of Jeroboam. He continues his father&apos;s sins—the idolatry, the false worship, the rebellion against the Lord&apos;s covenant. "He walked in the way of his father, and in his sin wherewith he made Israel to sin." Nadab does not break the cycle. He inherits it and passes it on. He reigns only two years.',
        },
        {
          kind: 'commentary',
          id: '1k15-prophecy-fulfilled',
          html:
            'Baasha strikes Nadab down at Gibbethon and then systematically destroys the entire house of Jeroboam. He leaves no one alive who breathes. This total destruction is according to the saying of the Lord, spoken by the prophet Ahijah the Shilonite years before. In 1 Kings 14:10–11, Ahijah prophesied: "I will bring evil upon the house of Jeroboam." Baasha becomes the instrument of that judgment. He does not know he is fulfilling a word of the Lord; he is motivated by personal ambition and the hunger for power. Yet the Lord uses his ambition to accomplish His word.',
        },
        {
          kind: 'hebrew',
          id: '1k15-chata',
          title: 'Chata — "Sin" or "To Miss the Mark"',
          script: 'חָטָא',
          translit: '<strong>Chata</strong> · sin; to miss the mark; to transgress',
          description:
            'The word "chata" appears repeatedly in this section: "he did evil and walked in the way of his father, and in his sin wherewith he made Israel to sin." Sin is not merely an act; it is a direction, a way of walking, a habit of missing the mark. Jeroboam&apos;s sin becomes hereditary, passed from father to son, embedded in the culture of the northern kingdom. Only a radical judgment can break such a cycle.',
        },
        {
          kind: 'christ',
          id: '1k15-christ-lamp',
          title: 'Christ Connection — The Eternal Lamp',
          html:
            'The lamp given to David continues through all the kings of Judah. Abijam receives it in his failure. Asa receives it in his reformation. Jehoshaphat will receive it after him. The promise does not fail, even when the kings fail. This pattern of a covenant that persists beyond human failure points to Christ, the "Anointed One" whose kingdom does not depend on the virtue of any earthly king. Christ is the lamp that will never be extinguished, the King whose heart is eternally perfect with the Lord, the one through whom the covenant with David finds its ultimate fulfillment (Luke 1:32–33). In His light, all other lights are revealed for what they are: flickering, mortal, necessary only because His perfect light has not yet filled all things.',
        },
        {
          kind: 'carry',
          html:
            'We live in a moment when we can see both the patterns in Scripture and the world around us. Some cycles seem unbreakable. Nadab inherits Jeroboam&apos;s sins as naturally as he inherits his throne. We inherit patterns of fear, ambition, unfaithfulness—sometimes from our families, sometimes from the cultures we grow up in. Yet the gospel teaches that these cycles are not ultimately stronger than grace. Baasha&apos;s judgment on Jeroboam&apos;s house is violent and total, but it points to a gentler breaking of cycles: Christ breaking the cycle of sin not through annihilation but through redemption, offering us a way to inherit a different kind of legacy—not of sin, but of righteousness.',
        },
        {
          kind: 'reflection',
          id: '1k15-cycles-reflection',
          prompt: 'Nadab walked in his father Jeroboam&apos;s sins. What cycles—of fear, shame, ambition, unfaithfulness—have you inherited? How might the gospel break those cycles not through judgment, but through grace?',
        },
      ],
    },

    /* ─── 1 Kings 15:33–34 — Baasha: Another Chain of Evil ───────────── */
    {
      ref: '1 Kings 15:33–34',
      title: 'Baasha: The Judgment Becomes the Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(33, 'In the third year of Asa king of Judah began Baasha the son of Ahijah to reign over all Israel in Tirzah, twenty and four years.'),
            {
              number: 34,
              spans: [
                t('And he did evil in the sight of the Lord, and walked in the way of Jeroboam, and in his '),
                hg('sin wherewith he made Israel to sin', '1k15-baasha-evil'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k15-baasha-evil',
          html:
            'Baasha, who was raised up to execute judgment on Jeroboam&apos;s house, himself "did evil in the sight of the Lord, and walked in the way of Jeroboam." He becomes what he destroyed. Having shattered the cycle of Jeroboam&apos;s line, he now continues the same idolatry, the same rebellion. He learns nothing from the judgment he administered. He reigns twenty-four years, longer than Jeroboam, but in the same direction—away from the Lord. This sets the stage for his own destruction, which will come through yet another conspirator. The cycles continue until the Lord Himself breaks them.',
        },
        {
          kind: 'commentary',
          id: '1k15-pattern-unending',
          html:
            'The pattern is relentless in the north: Jeroboam sins and is judged. Nadab inherits the sin and is destroyed. Baasha destroys Nadab and then repeats the sin himself. Without repentance, without turning to the Lord, the cycles are unending. The northern kingdom will continue in this pattern until exile. In Judah, by contrast, there is reformation. There is at least the possibility of turning back.',
        },
        {
          kind: 'carry',
          html:
            'What we hate in others, we often become. Baasha hated Jeroboam&apos;s idolatry enough to strike him down, yet loved it enough to practice it himself. We can be fierce against evil in the world while harboring the same evil in secret. The cure is not judgment of others. The cure is a turning of the heart toward the Lord. Only then does the cycle break. Not because we are strong enough to avoid it, but because we are weak enough to acknowledge our need, to repent, to receive grace.',
        },
        {
          kind: 'reflection',
          id: '1k15-baasha-reflection',
          prompt: 'Baasha destroyed Jeroboam for his sins, yet committed the same sins himself. Is there a way you have been harsh with others for a failing you yourself harbor? What would it mean to turn that judgment inward and ask the Lord for transformation?',
        },
      ],
    },
  ],
};
