import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 16 — Rapid Succession: The Northern Kingdom Unstable
 *
 * In the space of a single chapter, four kings rise and fall in Israel:
 * Baasha to Elah to Zimri (who reigns seven days) to Omri. Each "does evil,"
 * each is worse than the last. And then comes Ahab, who marries Jezebel of
 * Sidon and turns the kingdom toward Baal worship. The arc of judgment
 * accelerates — and a single act of rebuilding fulfills a curse spoken
 * centuries before.
 */
export const KINGS_1_16: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 16,

  intros: [
    'The northern kingdom of Israel spirals. After decades of kings who "did evil in the sight of the Lord," the pace quickens. In 1 Kings 16 we watch four rulers pass before us in rapid succession — each falling into the judgment formula that has become Israel&apos;s refrain. But more than speed defines this chapter: it marks a turning point. With Ahab and Jezebel, the kingdom does not merely fail in the old ways — it imports a new idolatry, a foreign bride who brings a foreign god. And in a single sentence, we learn that the curse of Joshua, spoken centuries before, is being fulfilled by a man named Hiel.',
    'This is a chapter about the consequences of walking away from the God of Israel, but it is also a chapter about the faithfulness of God&apos;s word. What the Lord has spoken, the Lord fulfills — even across generations, even when the people forget.',
  ],

  bottomShare: {
    label: 'Share 1 Kings 16',
    quote:
      'Four kings in one chapter, each worse than the last — until Ahab and Jezebel usher in a new depth of apostasy. Yet in the background, a curse spoken by Joshua centuries before finds its fulfillment in Hiel&apos;s hand. God&apos;s word does not return void.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 16 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 16:1–7 — The Word Against Baasha and the House of Elah ──── */
    {
      ref: '1 Kings 16:1–7',
      title: 'Baasha&apos;s House Is Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'Then the word of the Lord came to Jehu the son of Hanani against Baasha, saying,'),
            {
              number: 2,
              spans: [
                t('Forasmuch as I exalted thee out of the dust, and made thee '),
                hp('prince over my people Israel', 'exalted-prince'),
                t('; and thou hast '),
                hg('walked in the way of Jeroboam', 'jeroboam-way'),
                t(', and hast made my people Israel to sin, to provoke me to anger with their sins;'),
              ],
            },
            plain(3, 'Behold, I will take away the posterity of Baasha, and the posterity of his house; and will make thy house like the house of Jeroboam the son of Nebat.'),
            plain(4, 'Him that dieth of Baasha in the city shall the dogs eat; and him that dieth of his in the fields shall the fowls of the air eat.'),
            plain(5, 'Now the rest of the acts of Baasha, and what he did, and his might, are they not written in the book of the chronicles of the kings of Israel?'),
            plain(6, 'So Baasha slept with his fathers, and was buried in Tirzah: and Elah his son reigned in his stead.'),
            plain(7, 'And also by the hand of the prophet Jehu the son of Hanani the word of the Lord came, to Baasha, and to his house, even all the evil that he did in the sight of the Lord, in provoking him to anger with the work of his hands, in being like the house of Jeroboam; and because he smote him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'exalted-prince',
          html:
            'The formula is familiar now: the Lord raised Baasha "out of the dust," made him prince, gave him authority. And like Jeroboam before him, he rejected the gift and walked in the way of idolatry. This is not the story of an innocent man corrupted by circumstance. This is the story of a man who received power and chose to turn God&apos;s people away from the Lord.',
        },
        {
          kind: 'commentary',
          id: 'jeroboam-way',
          html:
            'Baasha walks in the way of Jeroboam — the first schism, the first golden calves, the first lie told to a kingdom. To "walk in the way of Jeroboam" is to become a copycat of idolatry, to repeat the same mistakes as the man who first split the kingdom. The northern kingdom has learned nothing.',
        },
        {
          kind: 'carry',
          html:
            'Each generation has the chance to learn from what came before. Israel has watched the judgment fall on king after king, and yet each new ruler makes the same choice. How do we break such cycles in our own lives? What would it mean to look at the pattern of failure and choose differently?',
        },
        {
          kind: 'reflection',
          id: 'baasha-judged',
          prompt: 'Baasha was exalted by God, yet he led God&apos;s people into sin. When have you been given opportunity and squandered it by turning toward something other than what you were called to?',
        },
      ],
    },

    /* ─── 1 Kings 16:8–14 — Elah, Zimri, and Seven Days ──────────────────── */
    {
      ref: '1 Kings 16:8–14',
      title: 'Zimri&apos;s Seven Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(8, 'In the twenty and sixth year of Asa king of Judah began Elah the son of Baasha to reign over Israel in Tirzah, two years.'),
            plain(9, 'And his servant Zimri, captain of half his chariots, conspired against him: for he was in Tirzah, drinking himself drunk in the house of Arza steward of his house in Tirzah.'),
            {
              number: 10,
              spans: [
                t('And Zimri went in and '),
                hg('smote him, and killed him', 'zimri-coup'),
                t(', in the twenty and seventh year of Asa king of Judah, and reigned in his stead.'),
              ],
            },
            plain(11, 'And it came to pass, when he began to reign, as soon as he sat on the throne of his kingdom, that he slew all the house of Baasha: he left him not one that pisseth against a wall, neither of his kinsfolks, nor of his friends.'),
            {
              number: 12,
              spans: [
                t('Thus did Zimri destroy all the house of Baasha, according to the word of the Lord, which he spake against Baasha '),
                hp('by Jehu the prophet', 'zimri-word'),
                t('.'),
              ],
            },
            plain(13, 'For all the sins of Baasha, and the sins of Elah his son, by which they sinned, and by which they made Israel to sin, in provoking the Lord God of Israel to anger with their vanities.'),
            plain(14, 'Now the rest of the acts of Elah, and all that he did, are they not written in the book of the chronicles of the kings of Israel?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zimri-coup',
          html:
            'Elah reigns for only two years. The son of Baasha, inheriting both the throne and his father&apos;s sins, finds himself vulnerable — drinking in the house of his steward while his captain Zimri plots against him. A single moment of drunkenness, a single lapse in vigilance, and the kingdom shifts hands.',
        },
        {
          kind: 'commentary',
          id: 'zimri-word',
          html:
            'Zimri, the instrument of judgment, does not know he is fulfilling a prophecy. He carries out his coup for political power — yet he becomes the hand of God&apos;s judgment against Baasha&apos;s house. The scripture itself notes this: Zimri destroys the house of Baasha "according to the word of the Lord, which he spake against Baasha by Jehu the prophet." Judgment comes, sometimes through the hands of those who do not recognize their own role in God&apos;s purposes.',
        },
        {
          kind: 'hebrew',
          id: 'zimri-name',
          title: 'Zimri — צִמְרִי',
          script: 'צִמְרִי',
          translit: '<strong>Zimri</strong> · possibly related to "song" or "celebrating"; a short, memorable name for a brief reign',
          description:
            'Zimri&apos;s name is difficult to derive with certainty, but the text makes his significance clear through brevity: he will reign only seven days. His rule is so short that he becomes almost a footnote in Israel&apos;s history — yet long enough for him to fulfill God&apos;s judgment on Baasha&apos;s line.',
        },
        {
          kind: 'carry',
          html:
            'Power obtained by conspiracy is never secure. Zimri sits on the throne for seven days — barely enough time to breathe. The judgment on Baasha&apos;s house is complete, but the kingdom itself is in chaos. Sometimes God uses unlikely instruments. Sometimes evil is turned upon itself. But the result is always instability.',
        },
        {
          kind: 'reflection',
          id: 'zimri-seven-days',
          prompt: 'Zimri reigns for only seven days. When have you seen something built on compromise or violence crumble almost as soon as it was established?',
        },
      ],
    },

    /* ─── 1 Kings 16:15–22 — Omri Rises; Civil War Resolves ──────────────── */
    {
      ref: '1 Kings 16:15–22',
      title: 'Omri Buys Samaria and Unites Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(15, 'In the twenty and seventh year of Asa king of Judah did Zimri reign seven days in Tirzah. And the people that were encamped heard say, Zimri hath conspired, and hath also slain the king: wherefore all Israel made Omri, the captain of the host, king over Israel that day in the camp.'),
            plain(16, 'And Omri went up from Gibbethon, and all Israel with him, and they besieged Tirzah.'),
            plain(17, 'And it came to pass, when Zimri saw that the city was taken, that he went into the palace of the king&apos;s house, and burnt the king&apos;s house over him with fire, and died.'),
            plain(18, 'For his sins which he sinned in doing evil in the sight of the Lord, in walking in the way of Jeroboam, and in his sin which he did, to make Israel to sin.'),
            {
              number: 19,
              spans: [
                t('Now the rest of the acts of Zimri, and his treason that he wrought, are they not written in the book of the chronicles of the kings of Israel? Then were the people of Israel '),
                hg('divided into two parts', 'israel-divided'),
                t(': half followed Tibni the son of Ginath; and half followed Omri.'),
              ],
            },
            plain(20, 'But the people that followed Omri prevailed against the people that followed Tibni the son of Ginath: so Tibni died, and Omri reigned.'),
            {
              number: 21,
              spans: [
                t('In the thirty and first year of Asa king of Judah began Omri to reign over Israel, twelve years: six years reigned he in Tirzah.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And he bought the hill '),
                hy('Samaria', 'samaria-capital'),
                t(' of Shemer for two talents of silver, and built on the hill, and called the name of the city which he built, after the name of Shemer, owner of the hill, Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'israel-divided',
          html:
            'Even after Zimri is dead, Israel does not immediately settle. The people are divided — some follow Tibni, others follow Omri. It is a moment of civil war, of a kingdom uncertain of its own king. Only when Omri&apos;s faction prevails does stability begin to return.',
        },
        {
          kind: 'commentary',
          id: 'samaria-capital',
          html:
            'Omri&apos;s great achievement is the purchase and building of Samaria. He buys the hill from a man named Shemer and builds a new capital there. This is no insignificant act. The purchase of land, the construction of a city, the naming of a capital — these are acts that anchor a kingdom. Samaria will become the symbol of the northern kingdom itself, so much so that later prophets will use "Samaria" as shorthand for "the rebellion of the north."',
        },
        {
          kind: 'hebrew',
          id: 'samaria-name',
          title: 'Samaria — שֹׁמְרוֹן (Shomron)',
          script: 'שֹׁמְרוֹן',
          translit: '<strong>Shomron / Samaria</strong> · city name; possibly related to "watching" or "guarding"; becomes the capital of the northern kingdom',
          description:
            'Omri purchases the hill and names the city after its previous owner, Shemer. The city will endure for centuries and become synonymous with the northern kingdom of Israel. When later prophets speak of "Samaria," they mean the entire rebellious northern kingdom.',
        },
        {
          kind: 'carry',
          html:
            'Omri brings military stability and political acumen to the kingdom. He wins a civil war and establishes a new capital. By the standards of the world, he is a builder, a leader, a man of vision. And yet the scripture immediately tells us that he "did worse than all that were before him." Power and skill are not the same as righteousness.',
        },
        {
          kind: 'reflection',
          id: 'omri-samaria',
          prompt: 'Omri was a capable ruler who built a city and unified a kingdom. Yet he did evil in the sight of the Lord. What does it mean when someone is powerful and effective in the world, but leads people away from God?',
        },
      ],
    },

    /* ─── 1 Kings 16:29–34 — Ahab and Jezebel; Hiel Rebuilds Jericho ──── */
    {
      ref: '1 Kings 16:29–34',
      title: 'Ahab Marries Jezebel; Hiel Fulfills Joshua&apos;s Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(29, 'And Ahab the son of Omri did evil in the sight of the Lord above all that were before him.'),
            {
              number: 30,
              spans: [
                t('And it came to pass, as if it had been a light thing for him to walk in the sins of Jeroboam the son of Nebat, that he took to wife '),
                hg('Jezebel the daughter of Ethbaal king of the Zidonians', 'jezebel-marriage'),
                t(', and went and served '),
                hy('Baal', 'baal-worship'),
                t(', and worshipped him.'),
              ],
            },
            plain(31, 'And he reared up an altar for Baal in the house of Baal, which he had built in Samaria.'),
            plain(32, 'And Ahab made a grove; and Ahab did more to provoke the Lord God of Israel to anger than all the kings of Israel that were before him.'),
            {
              number: 33,
              spans: [
                t('In his days did '),
                hg('Hiel the Bethelite build Jericho', 'hiel-jericho'),
                t(': he laid the foundation thereof in Abiram his firstborn, and set up the gates thereof in his youngest son Segub: according to the word of the Lord, which he spake '),
                hp('by Joshua the son of Nun', 'joshua-curse'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jezebel-marriage',
          html:
            'Ahab "did evil in the sight of the Lord above all that were before him" — he surpasses every king who came before. And the turning point is his marriage to Jezebel, a Zidonian princess, the daughter of Ethbaal the king. This is no political alliance of two kingdoms bound by a peace treaty. This is the active importation of idolatry into the northern kingdom. Jezebel brings not just herself, but her god, her priests, her entire religious apparatus. She will become one of the most infamous figures in Scripture.',
        },
        {
          kind: 'commentary',
          id: 'baal-worship',
          html:
            'Baal was the god of fertility and storm, worshipped across Phoenicia and Syria. The word itself means "lord" — a generic title for a local deity. But in the context of Israel&apos;s covenant with the God of Abraham, Isaac, and Jacob, Baal worship is the ultimate betrayal. Ahab does not merely tolerate Baal. He builds an altar for Baal in the house of Baal, in the new capital city. He makes Baal worship official.',
        },
        {
          kind: 'hebrew',
          id: 'baal-name',
          title: 'Baal — בַּ֫עַל',
          script: 'בַּ֫עַל',
          translit: '<strong>Baal</strong> · "lord"; a Canaanite fertility deity; in Israel, the symbol of idolatry and covenant-breaking',
          description:
            'Baal worship was endemic in the ancient near east. But for Israel, devoted to the one God who had revealed Himself to Moses at Sinai, Baal was more than a rival deity — it was a sign that the people had forgotten their own God. Worship of Baal involved fertility rites, often including sexual practices, that were antithetical to the holiness code of Israel.',
        },
        {
          kind: 'commentary',
          id: 'hiel-jericho',
          html:
            'In a single verse, almost parenthetically, the scripture records that Hiel the Bethelite rebuilds Jericho. This is not a major military campaign or a political achievement. This is a man from Bethel undertaking a reconstruction project. And yet the statement carries immense weight: "he laid the foundation thereof in Abiram his firstborn, and set up the gates thereof in his youngest son Segub." This cryptic language means that Hiel&apos;s firstborn son and youngest son died during the construction of Jericho. The curse had not been forgotten.',
        },
        {
          kind: 'commentary',
          id: 'joshua-curse',
          html:
            'The reference takes us back to Joshua 6:26, where Joshua proclaimed a curse over anyone who would rebuild Jericho: "Cursed be the man before the Lord, that riseth up and buildeth this city Jericho: he shall lay the foundation thereof in his firstborn, and in his youngest son shall he set up the gates of it." Joshua spoke those words after the conquest, as the Israelites stood in the ruins of a city they had demolished. More than four hundred years have passed. Jericho has lain in ruins. And now, in the days of Ahab, someone attempts to rebuild it — and the curse falls upon him. Not through magic or superstition, but through the word of the Lord, spoken centuries before. God&apos;s word does not return void. It endures.',
        },
        {
          kind: 'christ',
          id: 'ahab-christ-connection',
          title: 'Christ Connection — The Bride Who Sanctifies vs. The Bride Who Corrupts',
          html:
            'Ahab marries Jezebel, and through that marriage, an entire kingdom is drawn into idolatry. The person closest to the king shapes the direction of the kingdom. In contrast, the New Testament speaks of Christ and the Church as bridegroom and bride (Ephesians 5:25–32). Christ loves the Church and sanctifies it, making it holy, spotless, without blemish. The bride who is loved and transformed by Christ becomes a reflection of His holiness. Jezebel leads Ahab — and through him, Israel — into compromise and apostasy. The Bride of Christ is called to be sanctified through her union with Him. The contrast is stark: one marriage corrupts a kingdom; the other transforms a people into the image of God.',
        },
        {
          kind: 'carry',
          html:
            'The people closest to us have the power to shape our spiritual direction. The choices of leaders ripple through nations. And the promises of God — even those spoken centuries before — do not fade. They endure. They find fulfillment. This chapter shows us a kingdom in freefall, led by a king worse than all who came before him, because he has married someone who leads him away from God. It also shows us a God whose word is trustworthy across generations.',
        },
        {
          kind: 'reflection',
          id: 'ahab-jezebel',
          prompt: 'Ahab was influenced by Jezebel to turn from God. Who are the people closest to you, and what direction are they pointing you in spiritually?',
        },
      ],
    },

    /* ─── A Divider ──────────────────────────────────────────────────────── */
    {
      ref: '1 Kings 16 closes with Ahab on the throne',
      blocks: [
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Closing Reflection on the Chapter ──────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          html:
            'In 1 Kings 16, we see the pattern of Israel&apos;s decline accelerated. Four kings in one chapter, each failing, each worse than the last. The relentless judgment formula — "did evil in the sight of the Lord" — becomes the rhythm of the narrative. But there is also God&apos;s faithfulness in the background. Joshua&apos;s curse, spoken over Jericho four centuries before, is fulfilled in Hiel&apos;s hand during Ahab&apos;s reign. God&apos;s word endures. Even as the kingdom falls away, even as Ahab marries Jezebel and turns toward Baal, the promises of the Lord remain true.',
        },
      ],
    },
  ],
};
