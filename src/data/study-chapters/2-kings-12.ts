import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 12 — Joash Repairs the Temple
 *
 * King Joash reigns for forty years in Jerusalem, counseled early in his reign
 * by Jehoiada the high priest. He does what is right in the sight of the Lord,
 * yet the high places are not taken away — a pattern of incomplete reform.
 * When he commands the priests to repair the breaches in the house of the Lord,
 * their first attempt fails. But Jehoiada devises a chest with a bored hole,
 * placed beside the altar to receive offerings. The money is counted and given
 * to the workmen with no suspicion — "they dealt faithfully." Yet in his later
 * years, Joash compromises with Hazael king of Syria, sending the temple gold as
 * tribute. And finally, his own servants conspire against him and he dies in the
 * house of Millo. A king who once repaired the temple is himself broken.
 */
export const KINGS_2_12: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 12,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 15 },
  intros: [
    "The book of 2 Kings opens a new chapter in Judah&apos;s history. Jehu is on the throne of Israel, and in Jerusalem, a young boy named Joash has just been crowned king. He is only seven years old, but he is not alone. Beside him stands Jehoiada the priest — a man of wisdom and faithfulness who will shape the early years of Joash&apos;s reign.",
    "For the first time in a long while, a king of Judah &quot;does what is right in the sight of the Lord.&quot; But rightness in this kingdom is incomplete. The high places remain. The people still sacrifice and burn incense on unauthorized altars. And when Joash commands the priests to repair the breaches in the temple, they hesitate — the work does not progress. It takes a creative act of faith, a chest with a bored hole, to unlock the people&apos;s giving. Yet even this success masks a deeper problem. A king is only as faithful as his counselors make him. When Jehoiada dies, when the pressure of neighboring kingdoms grows, when gold becomes a tool of survival instead of a sign of God&apos;s provision — Joash will fall.",
  ],

  bottomShare: {
    label: 'Share 2 Kings 12',
    quote:
      'A king faithful in his youth repaired the house of the Lord through the counsel of a righteous priest. But when that counsel ended and pressure came, he compromised. The repair he built was not enough to save him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-elisha-ministry',
      kind: 'study',
      source: 'Sefaria',
      label: 'Elisha the Prophet',
      url: 'https://www.sefaria.org/2_Kings.1',
      description: 'Elisha&apos;s ministry of miraculous healing and prophecy succeeding Elijah.',
    },
    {
      id: 'bible-odyssey-elisha',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Elisha: Miracles and Ministry',
      url: 'https://www.bibleodyssey.org/dictionary/elisha/',
      description: 'Elisha&apos;s role as prophet in Israel&apos;s northern kingdom during the period of decline.',
    },
    {
      id: 'iaa-northern-kingdom',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Archaeology of Northern Kingdom',
      url: 'https://www.antiquities.org.il/',
      description: 'Excavation evidence for cities and settlements in the northern kingdom of Israel.',
    },
  ],

  sections: [
    /* ─── 2 Kings 12:1–3 — The Young King, Counseled by Jehoiada ────────── */
    {
      ref: '2 Kings 12:1–3',
      title: 'The Young King Under Jehoiada&apos;s Counsel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'In the seventh year of Jehu Johoash began to reign; and forty years reigned he in Jerusalem. And his mother&apos;s name was Zibiah of Beersheba.'),
            plain(2, 'And Johoash did that which was right in the sight of the Lord all his days wherein Jehoiada the priest instructed him.'),
            plain(3, 'But the high places were not taken away: the people still sacrificed and burnt incense in the high places.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joash-young-reign',
          html:
            'Joash reigns for forty years — a long reign, the span of a generation. Yet this is not a kingdom without problems. The high places remain. The people continue their unauthorized worship. The implicit message is clear: Joash&apos;s righteousness is real, but it is circumscribed. It is the righteousness of a king counseled by a priest, not the righteousness of a kingdom fully turned toward God.[res:sefaria-elisha-ministry][res:bible-odyssey-elisha][res:iaa-northern-kingdom]',
        },
        {
          kind: 'commentary',
          id: 'jehoiada-instruction',
          html:
            'The text emphasizes again and again that Joash acts rightly "wherein Jehoiada the priest instructed him." This is not the spontaneous piety of a great king. This is the trained obedience of a young man shaped by a mentor. As long as Jehoiada lives, Joash remains faithful. The question that hangs over this narrative is: what will happen when Jehoiada dies?',
        },
        {
          kind: 'hebrew',
          id: 'yashar-meaning',
          title: 'Yashar — "Right" or "Upright"',
          script: 'יָשָׁר',
          translit: '<strong>Yashar</strong> · upright, right, straight',
          description:
            'The Hebrew word yashar means "right" or "upright" — to be in proper alignment. When the text says Joash "did that which was right in the sight of the Lord," it uses this word to describe his alignment with God&apos;s will. But note the limitation: he does right "wherein Jehoiada the priest instructed him." His uprightness is contingent — dependent on his teacher.',
        },
        {
          kind: 'carry',
          html:
            'We need guides. Mentors. People who speak truth into our lives and help us stay aligned with what is right. Joash had Jehoiada, and as long as the priest instructed him, the king remained faithful. But we cannot build a life on the wisdom of one person, however faithful they are. We must internalize what we are taught, so that when our teachers are gone, we remain upright.',
        },
        {
          kind: 'reflection',
          id: 'young-counsel',
          prompt: 'Who has instructed you in righteousness? As you grow older, how are you internalizing those teachings so that you can stand firm even when that mentor is no longer beside you?',
        },
      ],
    },

    /* ─── 2 Kings 12:4–8 — The First Attempt at Temple Repair ────────────── */
    {
      ref: '2 Kings 12:4–8',
      title: 'The Command to Repair — and Its Failure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And Johoash said to the priests, All the money of the dedicated things that is brought into the house of the Lord, even the money of every one that passeth the account, the money that every man is '),
                hg('set at', 'set-at-estimate'),
                t(', all the money that cometh into any man&apos;s heart to bring into the house of the Lord;'),
            ],
            },
            plain(5, 'Let the priests take it to them, every man of his acquaintance: and let them repair the breaches of the house, wheresoever any breach shall be found.'),
            {
              number: 6,
              spans: [
                t('But it was so, that in the three and twentieth year of king Johoash the priests '),
                hg('had not repaired the breaches', 'priests-delayed'),
                t(' of the house.'),
              ],
            },
            plain(7, 'Then king Johoash called for Jehoiada the priest, and the other priests, and said unto them, Why repair ye not the breaches of the house? now therefore receive ye no more money of your acquaintance, but deliver it for the breaches of the house.'),
            plain(8, 'And the priests consented to receive no more money of the people, neither to repair the breaches of the house.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'set-at-estimate',
          html:
            'The king commands the priests to take all the money dedicated to the Lord — the monetary assessments, the voluntary offerings, everything — and use it to repair the breaches in the house. The king&apos;s intention is clear and generous. The fund is abundant. Yet something goes wrong. Twenty-three years pass, and the breaches remain unrepaired.',
        },
        {
          kind: 'commentary',
          id: 'priests-delayed',
          html:
            'Why did the priests not repair the breaches? The text does not say they were lazy or dishonest. It says simply that after twenty-three years, the work had not been done. Perhaps the priests were distracted. Perhaps the money went to other temple needs. Perhaps there was no accountability, no clear chain of responsibility. What is clear is that good intention and abundant resources do not guarantee completion.',
        },
        {
          kind: 'commentary',
          id: 'king-confronts',
          html:
            'The king calls the priests to account. His tone is firm: "Why repair ye not the breaches of the house?" He does not accept their excuses. He does not accept the status quo. He cuts off the funding arrangement and demands a new system. This is administrative leadership — the willingness to confront failure and demand change.',
        },
        {
          kind: 'carry',
          html:
            'Good intentions are not enough. Even abundant resources are not enough. Without accountability, without someone willing to ask hard questions and demand that work be completed, projects languish. In our own lives and communities, what are the breaches that remain unrepaired because no one has asked the hard question: "Why is this still broken?"',
        },
        {
          kind: 'reflection',
          id: 'unrepaired-breaches',
          prompt: 'What in your life or community has remained broken because no one took responsibility to repair it? What would it take to finally address it?',
        },
      ],
    },

    /* ─── 2 Kings 12:9–12 — The Chest Beside the Altar ──────────────────── */
    {
      ref: '2 Kings 12:9–12',
      title: 'The Chest With the Bored Hole',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                t('But Jehoiada the priest took a chest, and bored a hole in the lid of it, and set it beside the altar, on the right side as one cometh into the house of the Lord: and the priests that kept the door put therein all the '),
                hy('money', 'chest-money'),
                t(' that was brought into the house of the Lord.'),
              ],
            },
            plain(10, 'And when they saw that there was much money in the chest, the king&apos;s scribe and the high priest came up, and they put up in bags, and told the money that was found in the house of the Lord.'),
            plain(11, 'And they gave the money, being told, into the hands of them that did the work, that had the oversight of the house of the Lord: and laid it out to the carpenters and builders, that wrought upon the house of the Lord;'),
            plain(12, 'And to masons and hewers of stone, to buy timber and hewed stone to repair the breaches of the house of the Lord, and for all that was laid out for the house to repair it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chest-money',
          html:
            'Jehoiada invents a new system. A chest is placed beside the altar, visible and accessible, with a hole in the lid. The symbolism is profound. The money is not hidden. It is not taken to a back room for the priests to manage. It sits beside the altar, in plain sight, receiving the people&apos;s gifts. The hole is narrow enough that no one can reach in and take what has been offered.',
        },
        {
          kind: 'commentary',
          id: 'aron-chest',
          html:
            'The Hebrew word for chest is aron, the same word used for the Ark of the Covenant. Though this chest is not the Ark, the echo is intentional. A container receives the people&apos;s offering, much as the Ark received the tablets of God&apos;s law. The money becomes a form of covenantal witness — the people giving what they have promised to give.',
        },
        {
          kind: 'hebrew',
          id: 'bedeq-breach',
          title: 'Bedeq — "Breach" or "Rupture"',
          script: 'בֶּ֫דֶק',
          translit: '<strong>Bedeq</strong> · breach, rupture, gap in a wall',
          description:
            'The breaches are called bedeq — literal ruptures in the walls of the temple. The word carries both physical and spiritual weight. A breach is a vulnerability. It exposes the sanctuary to the elements, to enemies. To repair the breaches is to restore the integrity of God&apos;s house.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the solution to a stalled project is not more resources, but a new structure. A visible box beside the altar — simple, transparent, accessible — unlocks the people&apos;s generosity. The money that would not be given under the old system flows freely under the new one. This is not manipulation. It is the wisdom to understand how human hearts work: we give more readily when we can see where our gift goes, when we trust the container that holds it.',
        },
        {
          kind: 'reflection',
          id: 'chest-beside-altar',
          prompt: 'When you give to a cause, what makes you trust that your gift will be used well? What kind of transparency and accountability would increase your willingness to give?',
        },
      ],
    },

    /* ─── 2 Kings 12:13–16 — "They Dealt Faithfully" ────────────────────── */
    {
      ref: '2 Kings 12:13–16',
      title: 'They Dealt Faithfully',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(13, 'Howbeit there were not made for the house of the Lord bowls of silver, snuffers, basons, trumpets, any vessels of gold, or vessels of silver, of the money brought into the house of the Lord:'),
            plain(14, 'But they gave that to the workmen, and repaired therewith the house of the Lord.'),
            {
              number: 15,
              spans: [
                t('Moreover they reckoned not with the men, into whose hand they delivered the money to be bestowed on workmen: for they '),
                hp('dealt faithfully', 'emunah-faithfulness'),
                t('.'),
              ],
            },
            plain(16, 'And the trespass money and sin money was not brought into the house of the Lord: it was the priests&apos;.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'no-vessels',
          html:
            'This verse seems to interrupt the narrative. It tells us what was NOT done with the temple money: no gold vessels, no silver bowls, no trumpets, no ornaments were purchased for the temple treasury. Instead, every denarius went to the work of repair. This is not an accusation of wastefulness. It is a statement of priorities. The money served the purpose it was given for.',
        },
        {
          kind: 'commentary',
          id: 'emunah-faithfulness',
          html:
            'The most remarkable phrase in this chapter: "they dealt faithfully." The workmen who received the temple money, who had the chance to keep it for themselves or misuse it — they did not. No receipts. No detailed accounting. Just trust. And the trust was honored. The workmen were faithful. The money was used for its intended purpose. This speaks to something both profound and rare: a community where trust is not abused.',
        },
        {
          kind: 'hebrew',
          id: 'emunah-faith',
          title: 'Emunah — "Faithfulness" or "Trust"',
          script: 'אֱמוּנָה',
          translit: '<strong>Emunah</strong> · faithfulness, reliability, trustworthiness',
          description:
            'The word emunah in Hebrew carries the sense of something steady and dependable. When we say someone "dealt faithfully," we mean they proved reliable. They did what was expected. They honored the trust that was placed in them. Emunah is not mere sentiment — it is demonstrated fidelity, the kind of trustworthiness that can be relied upon.',
        },
        {
          kind: 'carry',
          html:
            'Trust without accountability can breed corruption. But accountability without trust breeds paralysis. The temple repair project succeeded because the people trusted the workmen, and the workmen proved worthy of that trust. In a world where we are often asked to give without seeing how our gifts are used, this ancient moment speaks to the power of a community built on mutual faithfulness.',
        },
        {
          kind: 'reflection',
          id: 'dealt-faithfully',
          prompt: 'Have you experienced the kind of trust described here — where someone was given responsibility and proved worthy of it? Or the opposite — trust that was betrayed? What did each teach you?',
        },
      ],
    },

    /* ─── 2 Kings 12:17–18 — Hazael and the Temple Gold ─────────────────── */
    {
      ref: '2 Kings 12:17–18',
      title: 'The King Compromises — Temple Gold to Hazael',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(17, 'Then Hazael king of Syria went up, and fought against Gath, and took it: and Hazael set his face to go up to Jerusalem.'),
            {
              number: 18,
              spans: [
                t('And Jehoash king of Judah took all the '),
                hg('hallowed things', 'hallowed-compromise'),
                t(' that Jehoshaphat and Jehoram and Ahaziah, his fathers, kings of Judah, had dedicated, and his own hallowed things, and all the gold that was found in the treasures of the house of the Lord, and sent it to Hazael king of Syria: and he went away from Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hazael-threat',
          html:
            'Hazael king of Syria is moving through the land, conquering cities. He turns his face toward Jerusalem. In this moment, Joash faces a test. Will he trust God to defend the city? Will he look for other ways — negotiation, surrender, building alliances? The text does not preserve any record of prayer or seeking God&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'hallowed-compromise',
          html:
            'Joash takes the hallowed things — the dedicated offerings, the treasures of his forefathers, the gold that had been accumulated in the temple — and sends it all to Hazael. It is a stunning reversal. The temple that he repaired, the fund that was so carefully guarded, the gold that belonged to God — all of it goes to buy off an enemy. The temple is preserved, but at the cost of its treasure. The choice is presented not as wisdom, but as capitulation.',
        },
        {
          kind: 'carry',
          html:
            'We build things. We repair what is broken. We accumulate what is holy. And then pressure comes — external threat, fear, immediate danger. And we trade what we have spent years protecting for the promise of safety. The question is: do we have the faith to trust God&apos;s protection, or will we always, in the end, compromise?',
        },
        {
          kind: 'reflection',
          id: 'hazael-compromise',
          prompt: 'What have you compromised on because you were afraid? What would it have looked like to trust God in that moment instead?',
        },
      ],
    },

    /* ─── 2 Kings 12:19–21 — Joash Assassinated ──────────────────────────── */
    {
      ref: '2 Kings 12:19–21',
      title: 'The King Betrayed and Killed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(19, 'And the rest of the acts of Johoash, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            {
              number: 20,
              spans: [
                t('And his servants rose up and made a conspiracy, and '),
                hg('smote Joash in the house of Millo', 'joash-death'),
                t(', which goeth down to Silla.'),
              ],
            },
            plain(21, 'For Jozachar the son of Shimeath and Jehozabad the son of Shomer, his servants, smote him, and he died; and they buried him with his fathers in the city of David: and Amaziah his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joash-death',
          html:
            'The chapter ends in tragedy. The man who repaired the temple is killed by his own servants. The house of Millo — whether this is a building or a region — becomes the place of his death. There is no record here of how this conspiracy formed, of what grievance drove his servants to betray him. But 2 Chronicles 24 provides the fuller story: after Jehoiada&apos;s death, Joash abandons his faithful path and even kills Zechariah, the son of Jehoiada who had raised him. His own adopted family becomes his judge.',
        },
        {
          kind: 'commentary',
          id: 'tragic-decline',
          html:
            'Joash begins his reign faithful — "all his days wherein Jehoiada the priest instructed him." But he does not internalize that instruction. He does not become the righteous man himself. When his counselor dies, when external pressure comes, he falls. The repair he built is not enough to save him. The house he restored becomes, in a way, a memorial to his failure — a beautiful thing built by a man whose heart did not stay true.',
        },
        {
          kind: 'christ',
          id: 'christ-true-temple',
          title: 'Christ Connection — The True Temple',
          html:
            'Joash repaired the temple with money gathered in a chest beside the altar. But the temple was temporary. Its walls could be broken again. Its gold could be sent away to buy off enemies. Christ speaks of a different kind of temple repair: "Destroy this temple, and in three days I will raise it up" (John 2:19). He speaks of His own body. The temple of His body needs no human repair — it is eternal. And Christ, unlike Joash, is not tempted to buy off His enemies with God&apos;s gold. He conquers them through His resurrection. He does not compromise. He stands firm.',
        },
        {
          kind: 'carry',
          html:
            'Joash&apos;s story is a tragedy of incompleteness. He did good things, but they were contingent on his counselor. He repaired the temple, but then compromised its treasure. He served God in his early years, but did not serve God in his heart. What does it mean to go deeper than external obedience? What would it look like to internalize faithfulness so deeply that it survives the loss of our mentors, the pressure of our enemies, the fear that rises when we are threatened?',
        },
        {
          kind: 'reflection',
          id: 'joash-decline',
          prompt: 'Joash began well, under the guidance of a faithful priest, but fell when that guidance was removed. What would help you build a foundation of faith that does not depend entirely on the presence of one person?',
        },
      ],
    },
  ],
};
