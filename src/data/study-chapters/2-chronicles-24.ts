import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 24 — Joash Repairs the Temple, Then Turns Away
 *
 * Joash was seven years old when he became king, and he reigned forty years.
 * All the days of Jehoiada the priest, he did right in the sight of the Lord.
 * He resolved to repair the house of the Lord, gathered the priests and Levites,
 * and established a collection throughout the land. The temple was repaired and
 * strengthened. But when Jehoiada died at 130 years old, the princes of Judah
 * turned the king&apos;s heart away. Joash abandoned the Lord. When the Spirit of God
 * came upon Zechariah son of Jehoiada, calling the people to repent, the king
 * conspired against him and had him stoned in the court of the Lord&apos;s house.
 * Jesus would later point to this death: "from the blood of Abel unto the blood
 * of Zacharias son of Barachias" (Matthew 23:35). In this chapter, we see the
 * fragility of a kingdom built on one man&apos;s faith, and the tragedy of a king
 * who forgets the kindness of his benefactor.
 */
export const CHRONICLES_2_24: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 24,

  estimatedMinutes: { beginner: 7, intermediate: 16, deep: 21 },
  intros: [
    'The story of Joash is a study in the power of influence and the tragedy of forgetting. A seven-year-old boy becomes king. He has no father to guide him. But he has Jehoiada, the high priest — a man of righteousness who becomes to him a spiritual father. Under Jehoiada&apos;s influence, Joash does what is right. He determines to repair the house of the Lord. He organizes a massive collection. He supervises the work with care and oversight. The temple is restored. And all is well.',
    'Then Jehoiada dies. He is 130 years old — one of the longest lives recorded in Scripture. And with his death, something breaks in Joash. The boy who was shaped by righteousness is now shaped by the princes of Judah. They turn his heart. He abandons the God who had sustained him. And when a prophet — the son of the man who raised him — speaks out against this apostasy, Joash has him killed. The chapter ends with invasion, disease, and assassination. The king who began with such promise becomes a cautionary tale: a kingdom can be restored, but only as long as the king&apos;s heart is turned toward God.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 24',
    quote:
      'Joash repaired the temple of the Lord all the days of Jehoiada the priest. But when Jehoiada died, the king turned away and conspired against the prophet. This chapter reveals the fragility of a kingdom built on borrowed faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 24 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 24:1–3 — Joash Crowned at Seven ──────────────────────── */
    {
      ref: '2 Chronicles 24:1–3',
      title: 'A Child Made King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              1,
              'Joash was seven years old when he began to reign, and he reigned forty years in Jerusalem. His mother&apos;s name also was Zibiah of Beersheba.'
            ),
            {
              number: 2,
              spans: [
                t('And '),
                hy('Joash did that which was right in the sight of the Lord all the days of Jehoiada the priest', '2c24-joash-right'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Jehoiada took for him two wives; and he begat sons and daughters.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-joash-right',
          html:
            'This verse is the hinge of the entire chapter: Joash did right "all the days of Jehoiada the priest." The conditional word "all" carries weight. As long as Jehoiada lives, Joash is faithful. The king&apos;s righteousness is not his own — it is borrowed, learned, shaped by the presence of a righteous mentor. A seven-year-old crowned. He has no father. He needs a guide. And he finds one in Jehoiada, the high priest. This is what mentorship looks like in Scripture: not domination, but the patient shaping of a young life toward righteousness.',
        },
        {
          kind: 'commentary',
          id: '2c24-jehoiada-father',
          html:
            'Jehoiada takes for Joash two wives. He acts as a father to the boy-king, securing his household and his succession. Joash begat sons and daughters — the line continues. This is not mere administrative function. This is love. The priest provides for the king&apos;s future, his stability, his family. And in doing so, he becomes to Joash what a father should be.',
        },
        {
          kind: 'hebrew',
          id: '2c24-melech',
          title: 'Melech — "King"',
          script: 'מֶלֶךְ',
          translit: '<strong>Melech</strong> · king; ruler; one who reigns',
          description:
            'Joash is called "melech" — king. But at seven years old, can a child truly rule? The answer is no. What makes Joash a good king in these early years is not his own wisdom, but his willingness to be shaped by one wiser than himself. The young "melech" becomes great not through power, but through humility before a mentor.',
        },
        {
          kind: 'carry',
          html:
            'We often think of leadership as independence — a king must rule alone, must be strong in himself. But Joash&apos;s story teaches something different. The young king became righteous not because he was naturally virtuous, but because he had a guide. In your own life, who has been a Jehoiada? Who has shaped your heart toward righteousness? And equally important: are you being a Jehoiada to someone younger than yourself?',
        },
        {
          kind: 'reflection',
          id: '2c24-seven-years',
          prompt:
            'Joash was only seven years old when he became king. What older, wiser person has shaped the direction of your life? How has their influence made you who you are?',
        },
      ],
    },

    /* ─── 2 Chronicles 24:4–7 — Joash Determines to Repair the Temple ──────────── */
    {
      ref: '2 Chronicles 24:4–7',
      title: 'The Resolve to Rebuild',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              4,
              'And it came to pass after this, that Joash was minded to repair the house of the Lord.'
            ),
            {
              number: 5,
              spans: [
                t('And he gathered together the priests and the Levites, and said to them, Go out unto the cities of Judah, and gather of all Israel money to repair the house of your God from year to year, and see that ye hasten the matter. Howbeit the Levites hastened it not.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the king called for Jehoiada the chief, and said unto him, Why hast thou not required of the Levites to bring in out of Judah and out of Jerusalem the collection, according to the commandment of Moses the servant of the Lord, and of the congregation of Israel, for the tabernacle of witness?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For the '),
                hp('sons of Athaliah, that wicked woman, had broken up the house of God', '2c24-athaliah'),
                t('; and also all the dedicated things of the house of the Lord did they bestow upon Baalim.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-athaliah',
          html:
            'The reference to Athaliah — the wicked queen who had ruled and had destroyed the temple — hangs over this chapter. Joash had been hidden, protected by Jehoiada during those dark years. Now he comes to the throne and sees what has been broken. The temple, once the glory of Israel, has been desecrated. Its treasures have been given to Baalim. Joash&apos;s determination to repair is not merely aesthetic or architectural. It is a restoration of order, a re-dedication of the nation to the Lord.',
        },
        {
          kind: 'commentary',
          id: '2c24-hasten',
          html:
            'Joash commands the Levites to "hasten the matter." But they do not hasten. There is resistance, or perhaps carelessness, or perhaps the task is simply too large. The young king shows his frustration. He does not accept half-measures. He calls Jehoiada before him and demands accountability. This is the mark of a king who takes his calling seriously — he will not let the work of the Lord languish.',
        },
        {
          kind: 'carry',
          html:
            'Joash does not wait passively for the repair to happen. He takes initiative. He organizes. He creates accountability. He meets resistance and presses forward. When you see something broken — in your family, your community, your faith — do you wait for someone else to fix it, or do you resolve, like Joash, to be part of the restoration? What is broken in your world that needs repair?',
        },
        {
          kind: 'reflection',
          id: '2c24-minded-repair',
          prompt:
            'Joash was minded to repair the house of the Lord. What injustice or brokenness in your own sphere has captured your heart? What would it take to resolve to repair it?',
        },
      ],
    },

    /* ─── 2 Chronicles 24:8–14 — The Chest and the Collection ───────────────────── */
    {
      ref: '2 Chronicles 24:8–14',
      title: 'The Collection Chest and the People&apos;s Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              8,
              'And at the king&apos;s commandment they made a chest, and set it without at the gate of the house of the Lord.'
            ),
            plain(
              9,
              'And they made a proclamation through Judah and Jerusalem, to bring in to the Lord the collection that Moses the servant of God laid upon Israel in the wilderness.'
            ),
            plain(
              10,
              'And all the princes and all the people rejoiced, and brought in, and cast into the chest, until they had made an end.'
            ),
            {
              number: 11,
              spans: [
                t('Now when they brought the chest unto the king&apos;s office by the hand of the Levites, and when they saw that there was much money, the king&apos;s scribe and the high priest&apos;s officer came and emptied the chest, and '),
                hg('took it, and carried it to his place again', '2c24-chest-used'),
                t('. Thus they did day by day, and gathered money in abundance.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the king and Jehoiada gave it to such as did the work of the service of the house of the Lord, and hired masons and carpenters to repair the house of the Lord, also such as wrought iron and brass to mend the house of the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('So the workmen wrought, and the work was perfected by them, and they set the house of God in his state, and strengthened it.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And when they had finished it, they brought the rest of the money before the king and Jehoiada, whereof were made vessels for the house of the Lord, even vessels to minister, to offer withal, spoons, vessels of gold and silver. And they offered burnt offerings in the house of the Lord continually all the days of Jehoiada.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-chest-used',
          html:
            'The chest is placed outside the gate of the temple. The people see it. They bring their offerings. "All the princes and all the people rejoiced" — there is unity, there is enthusiasm, there is a shared purpose. The collection is not forced. It is an outpouring of the people&apos;s desire to restore the Lord&apos;s house. And day by day, the chest fills with money. The logistics are simple: the chest is brought to the king&apos;s office, emptied, and carried back. A continuous cycle of gathering and distribution. The system works because it is transparent, because the people can see their gifts being used, because Jehoiada and Joash manage it with integrity.',
        },
        {
          kind: 'hebrew',
          id: '2c24-aron',
          title: 'Aron — "Chest" or "Ark"',
          script: 'אָרוֹן',
          translit: '<strong>Aron</strong> · chest; ark; container for treasures',
          description:
            'The word "aron" appears here for the collection chest. The same word describes the Ark of the Covenant — the holiest object in Israel. The connection is subtle but real: the people&apos;s gifts are treated as sacred, placed in a container whose name echoes the holiest vessel in Scripture. This elevation of the people&apos;s devotion — treating their gifts as precious, as worthy of sacred language — honors both the giver and the cause.',
        },
        {
          kind: 'commentary',
          id: '2c24-transparency',
          html:
            'Notice the transparency of the system. The chest is public. The money is brought before the king and Jehoiada. The work is visible — masons and carpenters hired, the temple being visibly repaired. The people can see their gifts at work. This openness builds trust and continues to encourage giving. When the work is finished, the remaining money is used to make vessels for the temple, and the offerings continue daily. The restoration is complete. The temple is not only repaired; it is re-consecrated to the Lord.',
        },
        {
          kind: 'carry',
          html:
            'The people gave freely because they believed in the cause and because they could see their gifts being used. They brought their money not under compulsion, but with joy. This is what happens when leadership is transparent, when the people trust that their gifts will be honored and used wisely. In your own life, what causes have captured your generosity? And when you ask others to give — whether of money, time, or effort — are you stewarding their gifts with the care that Joash and Jehoiada showed?',
        },
        {
          kind: 'reflection',
          id: '2c24-chest-collection',
          prompt:
            'All the people rejoiced and brought their offerings. What would it take for your community to respond with such unified joy to a shared purpose? What prevents that kind of unity?',
        },
      ],
    },

    /* ─── 2 Chronicles 24:15–16 — Jehoiada Dies at 130 ────────────────────────── */
    {
      ref: '2 Chronicles 24:15–16',
      title: 'The Death of the Righteous',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              15,
              'But Jehoiada waxed old, and was full of days when he died; an hundred and thirty years old was he when he died.'
            ),
            plain(
              16,
              'And they buried him in the city of David among the kings, because he had done good in Israel, both toward God, and toward his house.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-jehoiada-130',
          html:
            'Jehoiada dies at 130 years old — one of the longest lives in Scripture. He has lived long enough to see the temple restored. He has lived long enough to establish Joash in righteousness. And now he dies, having finished his work. The text says he was "full of days" — a phrase that suggests completeness, fulfillment, a life lived to its purpose. He is buried not in a priest&apos;s plot, but "among the kings." This is extraordinary honor. Jehoiada, who never sought the throne, who served faithfully as priest and mentor, is honored as a king because "he had done good in Israel, both toward God, and toward his house."',
        },
        {
          kind: 'hebrew',
          id: '2c24-zaken',
          title: 'Zaken — "Old" or "Elder"',
          script: 'זָקֵן',
          translit: '<strong>Zaken</strong> · old; elder; one full of days and wisdom',
          description:
            'The word "zaken" carries connotations of wisdom, of authority earned through time. Jehoiada was not merely old; he was an elder — a man whose length of days had earned him respect and authority. In Hebrew culture, to grow old was a blessing from God, a sign of faithfulness. Jehoiada&apos;s 130 years are a testimony to his righteous life.',
        },
        {
          kind: 'carry',
          html:
            'Jehoiada lived long. He saw his work bear fruit. He saw the temple restored. He saw the young king grow in righteousness. And then he died. The text does not make a show of his death. It simply records that he was full of days, and that he was honored among the kings. This is the kind of honor that comes not from seeking it, but from faithfully serving God and others. What kind of legacy do you hope to leave? What would it mean to be "full of days" — to have lived a life of purpose?',
        },
        {
          kind: 'reflection',
          id: '2c24-jehoiada-dies',
          prompt:
            'Jehoiada was buried among the kings because he had done good in Israel. What legacy of goodness do you hope to leave when your days are full?',
        },
      ],
    },

    /* ─── 2 Chronicles 24:17–22 — Joash Turns Away and Zechariah Dies ─────────── */
    {
      ref: '2 Chronicles 24:17–22',
      title: 'The King Turns, the Prophet Dies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              17,
              'Now after the death of Jehoiada came the princes of Judah, and made obeisance to the king. Then the king hearkened unto them.'
            ),
            plain(
              18,
              'And they left the house of the Lord God of their fathers, and served groves and idols: and wrath came upon Judah and Jerusalem for this their trespass.'
            ),
            plain(
              19,
              'Yet he sent prophets to them, to bring them again unto the Lord; and they testified against them: but they would not give ear.'
            ),
            {
              number: 20,
              spans: [
                t('And the Spirit of God came upon '),
                hg('Zechariah the son of Jehoiada the priest', '2c24-zechariah'),
                t(', which stood above the people, and said unto them, Thus saith God, Why transgress ye the commandments of the Lord, that ye cannot prosper? because ye have forsaken the Lord, he hath also forsaken you.'),
              ],
            },
            plain(
              21,
              'And they conspired against him, and stoned him with stones at the commandment of the king in the court of the house of the Lord.'
            ),
            {
              number: 22,
              spans: [
                t('Thus Joash the king remembered not the kindness which Jehoiada his father had done to him, but slew his son: and when he died, he said, The Lord look upon it, and '),
                hy('require it', '2c24-require'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-zechariah',
          html:
            'After Jehoiada&apos;s death, the princes come to Joash and make obeisance to him. And the young king, now without his mentor, hearkens unto them. The shift is immediate and complete. He turns from the Lord. He and the people serve groves and idols. The text does not explain why Joash is so quickly seduced away. But the pattern is clear: his righteousness was never his own. It was something he learned from Jehoiada, not something he had internalized deeply enough to stand alone. When the mentor dies, the disciple falls. Now, incredibly, Zechariah — the son of the man who saved Joash&apos;s life, who raised him, who guided him — is moved by the Spirit of God to stand up and call the people back. "Thus saith God, Why transgress ye the commandments of the Lord?" It is the call of a righteous prophet. And it costs him everything.',
        },
        {
          kind: 'commentary',
          id: '2c24-require',
          html:
            'Zechariah&apos;s last words are: "The Lord look upon it, and require it." These words echo in Jesus&apos;s voice when he speaks in Matthew 23:35 of Zechariah "son of Barachias" — likely referring to this very death. Jesus says: "That upon you may come all the righteous blood shed upon the earth, from the blood of righteous Abel unto the blood of Zechariah son of Barachias, whom ye slew between the temple and the altar." The death of Zechariah becomes a marker of judgment — a death that cries out for accountability. And Jesus says that His generation will face judgment for this and all the righteous blood spilled.',
        },
        {
          kind: 'hebrew',
          id: '2c24-zechariah-meaning',
          title: 'Zechariah — "Yah Remembers"',
          script: 'זְכַרְיָ֫ה',
          translit: '<strong>Zechariah</strong> · God remembers; the name itself is a promise',
          description:
            'The name "Zechariah" means "Yah remembers" or "God remembers." It is a name full of promise — the assurance that God sees, God knows, God will not forget. And when Zechariah is murdered in the court of the temple, the irony cuts deep. His name promises that God remembers. And God will. The blood of the righteous cries out, and God hears.',
        },
        {
          kind: 'christ',
          id: '2c24-christ-zechariah',
          title: 'Christ Connection — The Blood of the Righteous',
          html:
            'Jesus himself points to Zechariah&apos;s death as a watershed moment in Israel&apos;s history. When he condemns the scribes and Pharisees, he says they will face judgment for "all the righteous blood shed upon the earth, from the blood of righteous Abel unto the blood of Zechariah son of Barachias" (Matthew 23:35). The death of a prophet in the temple, at the command of the king, becomes emblematic of Israel&apos;s rejection of God&apos;s messengers. And Jesus — the ultimate righteous one, the ultimate prophet — will himself be rejected and killed. But unlike Zechariah, whose blood cries out for judgment, the blood of Christ cries out for redemption, for grace, for the reconciliation of all things.',
        },
        {
          kind: 'commentary',
          id: '2c24-joash-forgets',
          html:
            'The tragedy of Joash is crystallized in this verse: "Thus Joash the king remembered not the kindness which Jehoiada his father had done to him, but slew his son." The man who raised him — who saved him from death when he was an infant, who shaped his early righteousness, who was buried among the kings — his son Joash kills. This is not merely ingratitude. This is a profound spiritual amnesia. Joash has forgotten where he came from. He has forgotten what he owes. He has forgotten that his very life was a gift. And in that forgetting, he commits a murder so shocking that Jesus himself will point to it as a turning point in human history.',
        },
        {
          kind: 'carry',
          html:
            'Do you remember what was done for you? Joash had every reason to remember Jehoiada&apos;s kindness — the man saved his life, raised him, shaped him into a good king. And yet, almost immediately upon Jehoiada&apos;s death, he not only abandons the Lord, he attacks the son of his benefactor. Forgetting kindness leads to cruelty. In your own life, who has done good to you? Who has shaped you toward righteousness? Have you taken time to remember that kindness, to honor it, to ensure it is not lost when that person is gone? And equally: what have you learned well enough that you can stand alone, without depending on the presence of a mentor?',
        },
        {
          kind: 'reflection',
          id: '2c24-zechariah-stones',
          prompt:
            'Joash, who owed Jehoiada everything, killed Jehoiada&apos;s son. How does the forgetting of kindness lead us to hurt those we should honor? Who do you need to remember, and whose kindness do you need to honor?',
        },
      ],
    },

    /* ─── 2 Chronicles 24:23–27 — The Judgment of Joash ────────────────────────── */
    {
      ref: '2 Chronicles 24:23–27',
      title: 'The King&apos;s Judgment and Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(
              23,
              'And it came to pass at the end of the year, that the host of Syria came up against him: and they came to Judah and Jerusalem, and destroyed all the princes of the people from among the people, and sent all the spoil of them unto the king of Damascus.'
            ),
            plain(
              24,
              'For the army of the Syrians came with a small company of men, and the Lord delivered a very great host into their hand, because they had forsaken the Lord God of their fathers. So they executed judgment against Joash.'
            ),
            plain(
              25,
              'And when they were departed from him, (for they left him in great diseases,) his own servants conspired against him for the blood of the sons of Jehoiada the priest, and slew him on his bed; and he died: and they buried him in the city of David, but they buried him not in the sepulchres of the kings.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2c24-syria-judgment',
          html:
            'The judgment comes swiftly. At the end of the year, the Syrian host arrives. And though it is a "small company of men," the Lord delivers "a very great host" into their hand. This is not a military defeat. This is divine judgment. The text makes clear why: "because they had forsaken the Lord God of their fathers." The kingdom that was restored, the temple that was repaired, have been turned over to idolatry. And Joash, who began his reign with such promise, has led the nation into apostasy. The price is the destruction of the princes and the spoiling of the land.',
        },
        {
          kind: 'commentary',
          id: '2c24-own-servants',
          html:
            'After the Syrians leave, Joash is left "in great diseases." And then his own servants conspire against him and kill him "for the blood of the sons of Jehoiada the priest." The assassination is an act of justice — a reckoning for the murder of Zechariah. And most strikingly, Joash is not buried among the kings. He is buried in the city of David, but not in the royal tombs. He is denied the honor that was given to Jehoiada. The man who began his reign at seven years old, who did right all the days of his mentor, who was promised a long reign — dies in shame, killed by his own servants, buried without honor.',
        },
        {
          kind: 'hebrew',
          id: '2c24-gemul',
          title: 'Gemul — "Recompense" or "Retribution"',
          script: 'גְּמוּל',
          translit: '<strong>Gemul</strong> · recompense; what is deserved; retribution',
          description:
            'The theme of "gemul" — of receiving what one deserves — runs through this chapter. Jehoiada received honor because he did good. Joash received judgment because he forsook the Lord and murdered the innocent. The principle is biblical and ancient: you reap what you sow.',
        },
        {
          kind: 'christ',
          id: '2c24-christ-king-true',
          title: 'Christ Connection — The King Who Never Forgets',
          html:
            'Joash forgot Jehoiada&apos;s kindness. He turned away from God. He murdered the innocent. And he died without honor. But Christ — the True King — never forgets His Father&apos;s work. He never turns away from righteousness. In Hebrews 7:24–25, Paul writes of Christ: "But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them." Christ&apos;s priesthood does not end with His death. He ever lives. He ever makes intercession. He is the King who never dies, who never forgets, who never turns away.',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Chronicles 24 — The Fragility of Faithlessness ────────────────────── */
    {
      ref: '2 Chronicles 24 · All',
      title: 'A Kingdom Undone',
      blocks: [
        {
          kind: 'commentary',
          id: '2c24-summary',
          html:
            'The arc of Joash&apos;s life is tragic and instructive. He is given everything: he is crowned at seven, he is given a righteous mentor, he does what is right, he restores the temple, he leads the nation in a unified act of devotion. And then, almost overnight, it all unravels. The moment his mentor dies, he abandons everything. The princes who should guide him turn him toward idolatry. The righteousness he learned — but never fully owned — evaporates. And the final act is the murder of the one man who stood for truth. Zechariah&apos;s death is a turning point. It is the moment when the young king becomes something monstrous. And the judgment is swift: invasion, disease, assassination, and dishonor in death.',
        },
        {
          kind: 'commentary',
          id: '2c24-borrowed-faith',
          html:
            'The central tragedy is this: Joash&apos;s faith was borrowed. It was not his own. He believed while Jehoiada lived. He served God while his mentor shaped him. But the foundation was not deep enough. When Jehoiada died, the house collapsed. This is why Scripture emphasizes personal discipleship, personal commitment. You can be taught righteousness. You can be guided toward it. But at some point, you must own it yourself. You must internalize it deeply enough that it survives when your mentor is gone. Joash did not do this. And he paid the price.',
        },
        {
          kind: 'carry',
          html:
            'Are you standing on borrowed faith? Or have you gone deep enough with God that your righteousness is your own? Mentors are essential. Guides are gifts. But they cannot live for you. They cannot believe for you. At some point, you must decide for yourself. You must own your faith so deeply that it stands when you stand alone. And if you are a mentor — a parent, a teacher, a guide — you must help those under your care develop their own roots, their own convictions, their own relationship with God. The goal is not dependence on you, but independence in God.',
        },
        {
          kind: 'reflection',
          id: '2c24-borrowed-faith-reflect',
          prompt:
            'In what areas of your life are you standing on borrowed faith? What would it take to make your righteousness your own, so that it would stand even if your mentors were gone?',
        },
      ],
    },
  ],
};
