import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 2 — David's Charge and Solomon's Kingdom Established
 *
 * David, in his final days, charges his son Solomon to "be thou strong" and
 * keep the law of the Lord. Then comes the hard part: Solomon must settle the
 * old debts of his father's reign. Adonijah makes one final power play for the
 * throne through Bathsheba. Solomon refuses, and with swift justice, begins his
 * reign by executing those who opposed him — including Adonijah, Joab, and
 * Shimei. These are not acts of spite, but acts of covenant-keeping and the
 * establishment of righteous order. By chapter's end, "the kingdom was
 * established in the hand of Solomon."
 */
export const KINGS_1_2: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 2,

  estimatedMinutes: { 5: 13, 10: 23, 15: 31 },
  intros: [
    'David&apos;s reign is ending. After forty years — seven in Hebron as a fugitive king, thirty-three in Jerusalem as the Lord&apos;s anointed — the man who conquered enemies and danced before the ark now lies on his deathbed. He has one last task: to commission his successor and settle the accounts of his kingdom. In this final charge, David reminds Solomon of what kingship requires: strength, obedience to God&apos;s law, and the keeping of sacred promises — even when those promises demand hard acts.',
    'When David dies, Solomon faces his first real test. His older brother Adonijah, who thought the throne was his, makes a political chess move: he asks the new queen-mother Bathsheba to request that Solomon give him the widow Abishag — a concubine of David&apos;s. It seems an innocent request. It is not. Marrying the former king&apos;s concubine was an ancient claim on the throne itself. Solomon sees through it instantly, and condemns Adonijah to death. Then comes the harder work: removing the old power brokers who supported the failed rebellion — Joab and Shimei. By the time the executions are finished, the kingdom has been purged of rivals and the way is clear for a new reign. But the cost is high. This is the price of establishing a stable throne.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 2',
    quote:
      'David&apos;s final charge calls Solomon to strength and obedience — and Solomon must learn that a kingdom is not established by inheritance alone, but by the hard work of justice and covenant-keeping.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 2 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 2:1–4 — David's Deathbed Charge ──────────────────────── */
    {
      ref: '1 Kings 2:1–4',
      title: "David&apos;s Charge to Solomon",
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the days of David drew nigh that he should die; and he charged Solomon his son, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('I go the way of all the earth: '),
                hg('be thou strong', 'charge-strong'),
                t(' therefore, and shew thyself a man;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And keep the charge of the Lord thy God, to walk in his ways, to keep his '),
                hy('statutes, and his commandments, and his judgments, and his testimonies', 'charge-law'),
                t(', as it is written in the law of Moses; that thou mayest prosper in all that thou doest, and whithersoever thou turnest thyself:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('That the Lord may '),
                hp('continue his word which he spake concerning me', 'charge-davidic'),
                t(', saying, If thy children take heed to their way, to walk before me in truth with all their heart and with all their soul, there shall not fail thee (said he) a man on the throne of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'charge-strong',
          html:
            'David&apos;s first words to Solomon are a call to courage: "be thou strong." Not strength in the sense of military might or physical power, but <em>strength</em> — the resolve to do what is right, to stand firm in truth, to lead with conviction. A king who is weak in will cannot lead a kingdom. David is not handing Solomon a throne; he is handing him a responsibility.',
        },
        {
          kind: 'commentary',
          id: 'charge-law',
          html:
            'David lays out the condition of the Davidic covenant: obedience to the law of the Lord. The statutes, commandments, judgments, and testimonies — the whole law of Moses — are the foundation of a righteous kingdom. This is not piety as an afterthought; it is the structural requirement of the throne itself. Without obedience to God&apos;s law, the kingdom cannot stand.',
        },
        {
          kind: 'hebrew',
          id: 'charge-mizwah',
          title: 'Mizwah — "Commandment" or "Charge"',
          script: 'מִצְוָה',
          translit: '<strong>Mizwah</strong> · commandment; precept; charge given by an authority',
          description:
            'The word "mizwah" carries both meanings: the commands of God and the charge David is giving to Solomon. David is passing on not just a throne, but a sacred commission — to keep the commandments, to be a steward of God&apos;s law, not a despot who does as he pleases.',
        },
        {
          kind: 'commentary',
          id: 'charge-davidic',
          html:
            'Here is the heart of the covenant between David and God: "That the Lord may continue his word which he spake concerning me." The promise was not that David would never fail, but that his descendants would sit on the throne of Israel — <em>if</em> they kept the covenant. This is the great "if" of the Davidic promise: the throne is not guaranteed by descent alone. Each generation must choose obedience. The promise carries a condition.',
        },
        {
          kind: 'christ',
          id: 'charge-eternal-kingdom',
          title: 'Christ Connection — The Eternal Davidic Throne',
          html:
            'Christians have always read this promise as pointing to Christ. The angel Gabriel tells Mary that Jesus will sit on "the throne of his father David" and that "of his kingdom there will be no end" (Luke 1:32–33). Yet Jesus&apos; kingdom is established not through the sword but through the cross. The Davidic promise finds its fulfillment in a king who does not demand obedience through force, but through love and sacrifice. And that kingdom is not of this world — it is eternal.',
        },
        {
          kind: 'carry',
          html:
            'When authority is given to you — whether as a parent, a leader, a teacher, or a friend — what are you charged with? David reminds Solomon that power is not a possession to be used for advantage, but a charge to be exercised in obedience to something higher than yourself. What does obedience look like in the realm you have been given?',
        },
        {
          kind: 'reflection',
          id: 'davidic-charge',
          prompt: 'David calls Solomon to be "strong" — not in a military sense, but in moral resolve. What does spiritual strength look like to you? When have you had to be strong in standing firm in what you believed was right?',
        },
      ],
    },

    /* ─── 1 Kings 2:5–9 — David's Instructions for Settling Old Debts ──── */
    {
      ref: '1 Kings 2:5–9',
      title: 'Settling the Old Accounts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('Moreover thou knowest also what Joab the son of Zeruiah did to me, and what he did to the two captains of the host of Israel, unto Abner the son of Ner, and unto Amasa the son of Jether, whom he slew, and shed the blood of war in peace, and put the blood of war upon his girdle that was about his loins, and in his shoes that were on his feet.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Do therefore according to thy wisdom, and let not his hoar head go down to the grave in peace.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But shew kindness unto the sons of '),
                hg('Barzillai the Gileadite', 'barzillai-kindness'),
                t(', and let them be of those that eat at thy table: for so they came to me when I fled because of Absalom thy brother.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And, behold, thou hast with thee Shimei the son of Gera, a Benjamite of Bahurim, which '),
                hg('cursed me with a grievous curse', 'shimei-curse'),
                t(' in the day when I went to Mahanaim: but he came down to meet me at Jordan, and I sware to him by the Lord, saying, I will not put thee to death with the sword.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Now therefore hold him not guiltless: for thou art a wise man, and knowest what thou oughtest to do unto him; but his '),
                hg('hoar head bring thou down to the grave with blood', 'shimei-judgment'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joab-blood-debt',
          html:
            'David speaks of Joab with the weight of old wounds. Joab was his general, his right hand — and yet he murdered two rival commanders, Abner and Amasa, while posing as a friend. He killed them in peace, not in open battle, which made his crime a violation of the sacred law of warfare. "The blood of war in peace" — an act of treachery cloaked in brotherhood. This debt must be settled.',
        },
        {
          kind: 'commentary',
          id: 'barzillai-kindness',
          html:
            'In contrast to the betrayers, David remembers Barzillai the Gileadite, who gave him shelter and provisions when he was a fugitive fleeing his own son Absalom. Kindness given in the darkest hour deserves to be honored. Solomon must repay this debt not with blood but with royal favor — these kindnesses must eat at the king&apos;s table. This is how a righteous kingdom remembers.',
        },
        {
          kind: 'commentary',
          id: 'shimei-curse',
          html:
            'Shimei comes from Saul&apos;s own house — a Benjamite who cursed David as he fled Jerusalem after Absalom&apos;s rebellion. The curse itself was a kind of violence, a spiritual assault. David was under tremendous pressure — his own son was taking his throne, his people were scattering. And Shimei added shame to that catastrophe, calling down curses on the fleeing king.',
        },
        {
          kind: 'commentary',
          id: 'shimei-judgment',
          html:
            'Here David makes a careful distinction: he swore to Shimei that he would not kill him with the sword. But he does not say Shimei will live. David leaves a judgment for Solomon — a puzzle wrapped in mercy. Solomon will need wisdom to understand what his father is asking.',
        },
        {
          kind: 'hebrew',
          id: 'shimei-se-sebar',
          title: 'Se-sevar — "A Terrible Curse"',
          script: 'שְׁ־עָבַר',
          translit: 'related to <strong>avur</strong> · to curse; to revile',
          description:
            'Shimei&apos;s curse was not a mere expression of anger, but a formal invocation against David — an attempt to call down divine judgment. In the ancient world, such curses carried spiritual weight. To curse the Lord&apos;s anointed was to invoke heaven&apos;s wrath upon the king and his kingdom.',
        },
        {
          kind: 'carry',
          html:
            'David does not seek revenge for its own sake. He carefully distinguishes: Joab, who murdered with treachery, must face judgment. Barzillai, who gave kindness in a dark hour, must be honored. Shimei, who cursed, must face the consequences — but David himself has sworn an oath, so the decision rests with Solomon. This is the mark of a mature soul: to settle old debts with justice and proportion, not rage.',
        },
        {
          kind: 'reflection',
          id: 'old-debts',
          prompt: 'David tells Solomon to remember both the treachery of Joab and the kindness of Barzillai. In your own life, who are the people you ought to remember with gratitude, and who are the relationships that need to be addressed with honesty?',
        },
      ],
    },

    /* ─── 1 Kings 2:10–12 — David Dies and Solomon Reigns ──────────────── */
    {
      ref: '1 Kings 2:10–12',
      title: "David&apos;s Death and the Throne Secured",
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('So David slept with his fathers, and was buried in the city of David.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the days that David reigned over Israel were '),
                hg('forty years', 'david-reign'),
                t(': seven years reigned he in Hebron, and thirty and three years reigned he in Jerusalem.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then sat Solomon upon the throne of David his father; and his '),
                hp('kingdom was established', 'solomon-established'),
                t(' greatly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'david-reign',
          html:
            'Forty years. That is David&apos;s legacy — the full cycle of a generation. Seven years in Hebron, marked by civil strife and the slow consolidation of power. Thirty-three years in Jerusalem, marked by conquest, the bringing of the ark, the building of his house, and the Davidic covenant itself. A long life, a long reign, and now it is done.',
        },
        {
          kind: 'commentary',
          id: 'solomon-established',
          html:
            'The text says Solomon&apos;s "kingdom was established greatly." But this establishment does not come without cost. The old rivalries are still alive. The men who opposed Solomon&apos;s coronation are still breathing. The throne will be stable only if Solomon is willing to do what his father has asked — to execute justice swiftly and without hesitation.',
        },
        {
          kind: 'carry',
          html:
            'A mentor, a parent, a teacher — they eventually must pass their charge to others. David has given his instructions and now rests. The work of establishing the kingdom falls to Solomon. There is a poignancy in this transition: the old order passes, and the new must prove itself. What are you being asked to take responsibility for as someone else steps back?',
        },
        {
          kind: 'reflection',
          id: 'david-death',
          prompt: 'David had time to prepare Solomon for what was coming — both the blessing of the throne and the hard decisions it would require. What has been handed to you that comes with both blessing and burden?',
        },
      ],
    },

    /* ─── 1 Kings 2:13–25 — Adonijah's Fatal Mistake ───────────────────── */
    {
      ref: '1 Kings 2:13–25',
      title: "Adonijah&apos;s Last Gambit",
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('And Adonijah the son of Haggith came to Bathsheba the mother of Solomon. And she said, Comest thou peaceably? And he said, Peaceably.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('He said moreover, I have somewhat to say unto thee. And she said, Say on.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he said, Thou knowest that the kingdom was mine, and that all Israel set their faces on me, that I should reign: howbeit the kingdom is turned about, and is become my brother&apos;s: for it was his from the Lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And now I ask one petition of thee, deny me not. And she said unto him, Say on.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he said, Speak, I pray thee, unto Solomon the king, (for he will not say thee nay,) that he give me '),
                hg('Abishag the Shunammite to wife', 'abishag-request'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'adonijah-bitter',
          html:
            'Adonijah approaches Bathsheba, Solomon&apos;s mother and now the queen-mother, with a show of deference. "I have somewhat to say unto thee." He is polite. He is sad. He acknowledges that the kingdom has become Solomon&apos;s "for it was his from the Lord." But there is a calculation in this politeness. Adonijah has lost the throne, and he is looking for a way to reclaim it — or at least to stake a claim for the future.',
        },
        {
          kind: 'commentary',
          id: 'adonijah-power-claim',
          html:
            'When a man seeks to marry the widow or concubine of a fallen king, he is not making an innocent request. In the ancient Near East, taking the former king&apos;s wife or concubine was a claim on the throne itself. Absalom did this with David&apos;s concubines to signal that he was the new king. Adonijah is making the same move — a political chess piece disguised as a request for marriage.',
        },
        {
          kind: 'hebrew',
          id: 'adonijah-derech',
          title: 'Derech — "Way" or "Custom"',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derech</strong> · way; path; custom; manner of life',
          description:
            'The "way" of power politics — the accepted custom of ancient courts — was to move swiftly to secure the symbols of authority. Adonijah is following an ancient "derech," a standard maneuver. But Solomon will not be fooled by custom.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('And Bathsheba said, Well; I will speak for thee unto the king.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Bathsheba therefore went unto king Solomon, to speak unto him for Adonijah. And the king rose up to meet her, and bowed himself unto her, and sat down on his throne, and caused a seat to be set for the king&apos;s mother; and she sat on his right hand.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Then she said, I desire one small petition of thee; I pray thee, say me not nay. And the king said unto her, Ask on, my mother: for I will not say thee nay unto thee.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And she said, Let '),
                hg('Abishag the Shunammite be given to Adonijah thy brother to wife', 'bathsheba-request'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And king Solomon answered and said unto his mother, And why dost thou ask Abishag the Shunammite for Adonijah? ask for him the kingdom also; for he is mine elder brother: therefore ask for him the kingdom also.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then king Solomon sware by the Lord, saying, '),
                hp('God do so to me, and more also, if Adonijah have not spoken this word against his own life', 'solomon-oath'),
                t('.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Now therefore, as the Lord liveth, which hath established me, and set me on the throne of David my father, and who hath made me an house, as he promised, Adonijah shall be put to death this day.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And king Solomon sent by the hand of Benaiah the son of Jehoiada; and he fell upon him that he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bathsheba-pawn',
          html:
            'Bathsheba, who has become queen-mother, is used as a pawn in Adonijah&apos;s game. She goes to Solomon with what seems like a small, personal request — to give Abishag to Adonijah. Adonijah was counting on Solomon&apos;s filial respect, his disinclination to deny his mother. But Solomon is not naive.',
        },
        {
          kind: 'commentary',
          id: 'solomon-sees-through',
          html:
            'Solomon&apos;s response is immediate and cutting: "Why dost thou ask Abishag the Shunammite for Adonijah? Ask for him the kingdom also." He sees through the pretense. He understands exactly what Adonijah is doing. And his words carry a warning: if you want to undermine the kingdom, you are asking for death.',
        },
        {
          kind: 'commentary',
          id: 'solomon-oath',
          html:
            'Solomon swears an oath by the name of God Himself: "God do so to me, and more also, if Adonijah have not spoken this word against his own life." The request for Abishag is not a small matter. It is treason. And Adonijah has condemned himself by making it. There is no appeal now. The oath is sworn.',
        },
        {
          kind: 'commentary',
          id: 'benaiah-executes',
          html:
            'Benaiah, the captain of the guard, carries out the king&apos;s word. Adonijah is executed. The threat to the throne is removed. This is not personal cruelty — it is the establishment of order. A kingdom divided against itself cannot stand. Solomon has made his first hard decision as king.',
        },
        {
          kind: 'christ',
          id: 'solomon-sees-heart',
          title: 'Christ Connection — The King Who Sees the Heart',
          html:
            'Solomon, in this moment, shows a wisdom that goes beyond mere political acumen. He sees what is hidden — the true intention behind the seemingly innocent request. Jesus spoke of this same penetrating vision: "Out of the abundance of the heart the mouth speaketh" (Matthew 12:34). He could see into the hearts of the Pharisees and scribes, perceiving the hypocrisy beneath their righteous words. Both Solomon and Jesus understand that words often conceal true intentions, and a wise leader must discern what lies beneath the surface.',
        },
        {
          kind: 'carry',
          html:
            'What requests are you making, and what is their true purpose? Adonijah seemed to ask for a wife, but he was really asking for a throne. Sometimes we disguise our true motives even from ourselves. Solomon had to see through the surface to the deeper reality. Do you have the courage to ask for what you truly want?',
        },
        {
          kind: 'reflection',
          id: 'adonijah-gambit',
          prompt: 'Adonijah made what seemed like a small, deferential request, but it was really a claim on the throne. What "small requests" have you made (or seen others make) that were really about power or control?',
        },
      ],
    },

    /* ─── 1 Kings 2:26–27 — Abiathar Deposed, Eli's House Fulfilled ────── */
    {
      ref: '1 Kings 2:26–27',
      title: "The Prophet&apos;s Word Fulfilled",
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 26,
              spans: [
                t('And unto Abiathar the priest said the king, Get thee to Anathoth, unto thine own fields; for thou art worthy of death: but I will not at this time put thee to death, because thou barest the ark of the Lord God before David my father, and because thou hast been afflicted in all wherein my father was afflicted.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('So Solomon thrust out Abiathar from being priest unto the Lord: '),
                hp('that he might fulfil the word of the Lord', 'eli-fulfilled'),
                t(', which he spake by Samuel against the house of Eli.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'abiathar-mercy',
          html:
            'Abiathar, the high priest, had supported Adonijah&apos;s claim to the throne. He backed the wrong heir, and for that, he could be executed. But Solomon shows him a kind of mercy: because Abiathar carried the ark, because he suffered alongside David, Solomon spares his life. He removes him from office, but does not kill him. It is a calculated mercy — one that honors Abiathar&apos;s service while establishing that disloyalty to the throne has consequences.',
        },
        {
          kind: 'commentary',
          id: 'eli-house-prophecy',
          html:
            'The text then reveals the deeper significance of this act: it fulfills an ancient prophecy. Centuries earlier, the prophet Samuel told Eli the priest that his house would be cut off from the priesthood. Eli&apos;s sons were corrupt. The priesthood would pass away from his line. And now, generations later, Abiathar (who was a descendant of Eli&apos;s line) is deposed. Zadok, of a different priestly line, replaces him. God&apos;s word, spoken so long ago, finally comes to pass.',
        },
        {
          kind: 'hebrew',
          id: 'eli-qum-dabar',
          title: 'Dabar — "Word" or "Thing"',
          script: 'דָּבָר',
          translit: '<strong>Dabar</strong> · word; matter; the thing spoken',
          description:
            'God&apos;s word — the dabar — does not return empty. It does not expire with time. When God speaks judgment or promise, it echoes forward through history until it reaches the moment of fulfillment. Solomon is not merely making a political decision; he is an instrument through which an ancient word is finally accomplished.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time that feels disconnected from the ancient past. But God&apos;s word is eternal. A promise made to Abraham centuries before takes its form in the life of a king centuries later. A judgment spoken to Eli ripples forward until it lands on his distant descendant. This teaches us that nothing we do is isolated. Our actions are part of a larger story, written long before we came onto the stage.',
        },
        {
          kind: 'reflection',
          id: 'eli-fulfillment',
          prompt: 'God&apos;s word spoken to Eli was fulfilled in Solomon&apos;s reign, hundreds of years later. What words or commitments from your past do you see working themselves out in unexpected ways?',
        },
      ],
    },

    /* ─── 1 Kings 2:28–35 — Joab Falls at the Altar ───────────────────── */
    {
      ref: '1 Kings 2:28–35',
      title: 'The Blood Debt Paid',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 28,
              spans: [
                t('Then tidings came to Joab: for Joab had turned after Adonijah, though he turned not after Absalom. And Joab fled unto the tabernacle of the Lord, and caught hold on the horns of the altar.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And it was told king Solomon that Joab was fled unto the tabernacle of the Lord; and, behold, he is by the altar. Then Solomon sent Benaiah the son of Jehoiada, saying, Go, fall upon him.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Benaiah came to the tabernacle of the Lord, and said unto him, Thus saith the king, Come forth. And he said, Nay; but I will die here. And Benaiah brought the king word again, saying, Thus said Joab, and thus he answered me.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And the king said unto him, Do as he hath said, and fall upon him, and bury him; that thou mayest take away the innocent blood, which Joab shed, from me, and from the house of my father.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And the Lord shall return his blood upon his own head, who fell upon two men more righteous and better than he, and slew them with the sword, my father David not knowing thereof: to wit, Abner the captain of the host of Israel, and Amasa the captain of the host of Judah.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Their blood shall therefore return upon the head of Joab, and upon the head of his seed for ever: but upon David, and upon his seed, and upon his house, and upon his throne, shall there be peace from the Lord for ever.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('So Benaiah the son of Jehoiada went up, and fell upon him, and slew him: and he was buried in his own house in the wilderness.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the king put Benaiah the son of Jehoiada in his room over the host: and Zadok the priest did the king put in the room of Abiathar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joab-flees',
          html:
            'Joab hears the news of what Solomon is doing — Adonijah has been executed, Abiathar deposed. Joab supported Adonijah. He knows what is coming. And in his desperation, he does what many desperate men do: he flees to the altar, seeking sanctuary. By grasping the horns of the altar, he invokes the ancient law that even a murderer might find safety at God&apos;s sanctuary. But Solomon sees through this last act of calculation.',
        },
        {
          kind: 'commentary',
          id: 'joab-altar-profaned',
          html:
            'The horns of the altar were meant for the penitent, for those truly seeking forgiveness before God. But Joab does not come with a penitent heart. He comes calculating, looking for a way to escape consequences. His very act of fleeing to the altar is an abuse of it — using God&apos;s sanctuary as a hiding place from justice rather than as a place of genuine repentance.',
        },
        {
          kind: 'commentary',
          id: 'joab-slain',
          html:
            'Solomon overrides the sanctuary. Joab must be slain, and at the altar where he sought refuge. His blood will be shed in the same place where innocent blood was shed by those he murdered. The symmetry is exact: a man who shed blood deceptively dies at the altar; the innocent blood he spilled returns upon his own head.',
        },
        {
          kind: 'commentary',
          id: 'blood-returns',
          html:
            'Solomon pronounces the judgment: "Their blood shall therefore return upon the head of Joab, and upon the head of his seed for ever." This is not Solomon&apos;s invention. This is the law of bloodguilt — the law that forbids innocent blood to cry out from the ground without answer. By settling Joab&apos;s account, Solomon cleanses the kingdom.',
        },
        {
          kind: 'hebrew',
          id: 'joab-dam-innocim',
          title: 'Dam — "Blood"',
          script: 'דָּם',
          translit: '<strong>Dam</strong> · blood; the life; the cry of blood shed',
          description:
            'In Hebrew thought, blood is not merely physical. It is life, presence, and testimony. The blood of the innocent "cries out" to God from the ground (Genesis 4:10). A king who allows innocent blood to go unavenged is complicit in the crime. Solomon must shed Joab&apos;s blood to cleanse the kingdom of the stain of the innocent blood Joab shed.',
        },
        {
          kind: 'christ',
          id: 'joab-blood-justice',
          title: 'Christ Connection — Blood and Justice',
          html:
            'The New Testament speaks of blood in a different register: "The blood of Jesus Christ his Son cleanseth us from all sin" (1 John 1:7). Where Joab&apos;s blood demanded payment, Christ&apos;s blood offers forgiveness. Where the old covenant required that innocent blood be answered with guilty blood, the new covenant offers a single, final sacrifice. Yet both systems recognize the same truth: that blood matters, that justice requires a cost, and that without the shedding of blood there is no remission of sins (Hebrews 9:22).',
        },
        {
          kind: 'carry',
          html:
            'There is a cost to peace. A kingdom cannot move forward while old injustices hang unaddressed. Solomon does not rejoice in executing Joab, but the execution is necessary. The innocent blood Joab shed will not remain unpaid. Sometimes establishing peace requires settling old debts — not in a spirit of vengeance, but in a clear-eyed recognition that justice must be served.',
        },
        {
          kind: 'reflection',
          id: 'joab-blood-debt',
          prompt: 'Joab sought refuge at the altar, but he did not seek true forgiveness. Is there a place in your life where you are running from accountability rather than facing it? What would it look like to truly repent rather than merely hide?',
        },
      ],
    },

    /* ─── 1 Kings 2:36–46 — Shimei's Broken Oath ─────────────────────── */
    {
      ref: '1 Kings 2:36–46',
      title: "Shimei&apos;s Oath and Its Breaking",
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 36,
              spans: [
                t('And the king sent and called for Shimei, and said unto him, Build thee an house in Jerusalem, and dwell there; and go not forth thence any whither.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('For it shall be, that on the day thou goest out, and passest over the brook Kidron, thou shalt know for certain that thou shalt surely die: '),
                hy('thy blood shall be upon thine own head', 'shimei-oath'),
                t('.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And Shimei said unto the king, The saying is good: as my lord the king hath said, so will thy servant do. And Shimei dwelt in Jerusalem many days.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And it came to pass at the end of three years, that two of the servants of Shimei ran away unto Achish son of Maachah king of Gath. And they told Shimei, saying, Behold, thy servants be in Gath.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And Shimei arose, and saddled his ass, and went to Gath to Achish to seek his servants: and Shimei went, and brought his servants from Gath.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And it was told Solomon that Shimei had gone from Jerusalem to Gath, and was come again.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And the king sent and called for Shimei, and said unto him, Did I not make thee to swear by the Lord, and protested unto thee, saying, Know for a certain, on the day thou goest out, and walkest abroad any whither, thou shalt surely die? and thou saidst unto me, The word that I have heard is good.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Why then hast thou not kept the oath of the Lord, and the commandment that I have charged thee with?'),
              ],
            },
            {
              number: 44,
              spans: [
                t('The king said moreover to Shimei, Thou knowest all the wickedness which thine heart is privy to, that thou didst to David my father: therefore the Lord shall return thy wickedness upon thine own head;'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And king Solomon shall be blessed, and the throne of David shall be established before the Lord for ever.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('So the king commanded Benaiah the son of Jehoiada; and he went out, and fell upon Shimei, that he died. '),
                hp('And the kingdom was established in the hand of Solomon', 'kingdom-established'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shimei-mercy',
          html:
            'Solomon does not order Shimei executed immediately. Instead, he gives Shimei a chance — a chance to live, but under conditions. Shimei must remain in Jerusalem. If he crosses the brook Kidron, he will die. It is a conditional mercy, and the condition is clear: stay within bounds, and your life is spared. Cross the boundary, and you accept the consequences. David had left this judgment to Solomon. Solomon chooses to give Shimei a path to live.',
        },
        {
          kind: 'commentary',
          id: 'shimei-oath',
          html:
            'Shimei accepts the oath: "The saying is good." He understands the terms. He agrees to them. And for three years, he honors the oath. He dwells in Jerusalem. He does not depart. But then, his servants run away to Gath — to a foreign kingdom. What would a servant do in such a circumstance? Shimei goes after them. He crosses the boundary. He breaks the oath.',
        },
        {
          kind: 'commentary',
          id: 'shimei-broken-oath',
          html:
            'Solomon&apos;s response is sharp: "Why then hast thou not kept the oath of the Lord, and the commandment that I have charged thee with?" Shimei had swallowed by the Lord. He had sworn an oath before heaven. And then, for the sake of his servants, he broke it. Solomon is not surprised. He says: "Thou knowest all the wickedness which thine heart is privy to, that thou didst to David my father." Solomon sees Shimei&apos;s true nature — a man capable of breaking sacred oaths.',
        },
        {
          kind: 'hebrew',
          id: 'shimei-nish-mar',
          title: 'Shamar — "To Keep" or "To Guard"',
          script: 'שָׁמַר',
          translit: '<strong>Shamar</strong> · to keep; to guard; to observe; to preserve',
          description:
            'The same word used throughout Scripture for keeping God&apos;s commandments. To "shamar" is to guard something as precious, to not let it slip away. Shimei was given one command to "shamar" — to keep the boundary — and he failed. By breaking this small oath, he proved himself unworthy of the mercy Solomon had extended.',
        },
        {
          kind: 'commentary',
          id: 'kingdom-established',
          html:
            'With Shimei&apos;s execution, the text concludes: "And the kingdom was established in the hand of Solomon." The chapter ends not with triumph or celebration, but with the simple statement that the kingdom is now secure. The old threats have been removed. The rivals are dead. The oath-breaker is gone. Now Solomon can rule without the constant threat of rebellion or betrayal.',
        },
        {
          kind: 'christ',
          id: 'shimei-covenant-breaking',
          title: 'Christ Connection — Keeping the Covenant',
          html:
            'Shimei was given a single condition: do not cross the boundary. He broke it. Jesus speaks to this pattern in the parable of the talents, where a servant is given a charge and must account for what he has done with it (Matthew 25:14–30). Or in the wedding feast, where a guest is invited on one condition — that he wear the proper garment (Matthew 22:11–13). The kingdom is entered by covenant, and covenants are kept by obedience to the terms. Those who break faith with their covenant must bear the consequences.',
        },
        {
          kind: 'carry',
          html:
            'We make oaths and promises lightly, forgetting that they are witnessed by heaven. Shimei was given mercy — a chance to live, with only one condition. But when his servants were in trouble, he prioritized their rescue over his sacred oath. What promises have you made that you are keeping? What boundaries have you respected? And where have you rationalized breaking an oath because circumstances seemed to demand it?',
        },
        {
          kind: 'reflection',
          id: 'shimei-oath',
          prompt: 'Shimei agreed to the terms of his life, but then broke his oath when circumstances changed. Are there promises you have made that you have kept despite difficulty, or ones you have broken when circumstances seemed to justify it?',
        },
      ],
    },

    /* ─── 1 Kings 2:46 — The Kingdom Established ──────────────────────── */
    {
      ref: '1 Kings 2:46',
      title: 'The Kingdom Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 46,
              spans: [
                t('So the king commanded Benaiah the son of Jehoiada; and he went out, and fell upon Shimei, that he died. And '),
                hp('the kingdom was established in the hand of Solomon', 'final-kingdom'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'final-kingdom',
          html:
            'This is the closing statement of the chapter: "The kingdom was established in the hand of Solomon." Not by inheritance alone. Not by anointing alone. But by the hard work of justice, by the settling of old debts, by the removal of those who would undermine the throne. The kingdom is established through covenant-keeping, through faithfulness to what David charged, through swift and necessary judgment.',
        },
        {
          kind: 'carry',
          html:
            'Every good thing we receive comes at a cost — usually a cost that others have borne before us. David bore the cost of establishing the kingdom through war and exile. Solomon bears the cost of consolidating it through hard judgment and the execution of those who threaten it. And we, who receive the fruit of these labors, often do not see the price that was paid. This teaches us humility about what we have inherited and calls us to faithfulness in keeping what we have been given.',
        },
        {
          kind: 'reflection',
          id: 'establishment-cost',
          prompt: 'The kingdom was established — but only through painful housekeeping, the execution of rivals, the removal of threats. What good things in your life have come at a cost you did not have to pay? Who bore that cost for you?',
        },
      ],
    },
  ],
};
