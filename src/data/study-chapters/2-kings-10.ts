import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Kings 10 — Jehu Purges Ahab&apos;s House & Baal Worship
 *
 * Jehu is a man of terrifying efficiency. Armed with a prophetic commission
 * to destroy the house of Ahab, he moves with the speed of divine judgment.
 * First the seventy sons of Ahab are slain and their heads sent in baskets to
 * Jezreel. Then the kinfolk of Ahaziah are caught and executed. Jehu allies
 * with Jehonadab, asking "Is thine heart right, as my heart is with thy
 * heart?" and together they ride toward Samaria. But the crown jewel of Jehu&apos;s
 * campaign is his deception of Baal&apos;s worshippers: he proclaims a great
 * sacrifice to Baal, gathers all the priests and prophets, then turns soldiers
 * loose inside the temple. All are slain. The house of Baal is razed and made
 * a latrine. Yet even in his triumph, Jehu keeps the golden calves of
 * Jeroboam — he destroys idolatry but preserves political religion. The Lord
 * promises his house four generations because he did what was right in the
 * Lord&apos;s eyes; yet because he did not walk with all his heart, the kingdom
 * begins to be cut short. Here is a paradox: partial obedience earns partial
 * blessing, but true wholeness belongs to Christ alone.
 */
export const KINGS_2_10: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 10,

  estimatedMinutes: { beginner: 5, intermediate: 12, deep: 17 },
  intros: [
    'Jehu has been anointed by a prophet of Elisha to strike down the house of Ahab. His commission is explicit and terrible: avenge the blood spilled by Ahab and Jezebel. Ahab is already dead, killed in battle at Ramoth-gilead; but his dynasty lives on in seventy sons, a family grown fat on plunder and idolatry. Jehu wastes no time. He writes letters to the rulers and elders of Samaria—letters that read as a loyalty test: the recipients must choose between Jehu and their young princes. The response is immediate and terrified: "Two kings stood not before him: how then shall we stand?" Rather than raise up a new king, Samaria yields. What follows is a cascade of death: the seventy sons of Ahab lose their heads; the kinfolk of Ahaziah are hunted down; the house of Baal is stripped bare and destroyed. By the end of 2 Kings 10, Ahab&apos;s name is nearly erased from the earth.',
    'Yet Jehu&apos;s story is more complex than a simple tale of divine vengeance. His deception—using a false holy assembly to trap Baal&apos;s priests—is cunning, even cruel. His promise to serve Baal "much" is a ruse. The question haunting the chapter is not whether he succeeded, but whether success without wholeness of heart is truly faithfulness. By the end, the Lord has blessed him with four generations of descendants on the throne. But the kingdom has already begun to shrink. Hazael, king of Syria, cuts Israel short in all her coasts. Partial obedience brings partial blessing. The full picture will emerge only in Christ, whose zeal is pure and whose obedience is complete.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 10',
    quote:
      'Jehu fulfilled the Lord&apos;s word with terrifying speed, yet kept one hand on the golden calves. Real faithfulness asks not just "Do we do what God commands?" but "Do we do it with our whole heart?" That wholeness belongs only to Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 10 · Study Guide',
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
    /* ─── 2 Kings 10:1–11 — The Seventy Sons of Ahab ──────────────────── */
    {
      ref: '2 Kings 10:1–11',
      title: 'The Seventy Heads in Baskets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'And Ahab had seventy sons in Samaria. And Jehu wrote letters, and sent to Samaria, unto the rulers of Jezreel, to the elders, and to them that brought up Ahab&apos;s children, saying,'),
            plain(2, 'Now as soon as this letter cometh to you, seeing your master&apos;s sons are with you, and there are with you chariots and horses, a fenced city also, and armour;'),
            plain(3, 'Look even out the best and meetest of your master&apos;s sons, and set him on his father&apos;s throne, and fight for your master&apos;s house.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-kings-10-mid-3',
          html:
            '<p>The siege turns, showing how faith and strategy interweave in critical moments.</p>[res:sefaria-elisha-ministry][res:bible-odyssey-elisha][res:iaa-northern-kingdom]',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(4, 'But they were exceedingly afraid: and said, Behold, two kings stood not before him: how then shall we stand?'),
            plain(5, 'And he that was over the house, and he that was over the city, the elders also, and the bringers up of the children, sent to Jehu, saying, We are thy servants, and will do all that thou shalt bid us; we will not make any king: do thou that which is good in thine eyes.'),
            plain(6, 'Then he wrote a letter the second time to them, saying, If ye be mine, and if ye will hearken unto my voice, take ye the heads of the men your master&apos;s sons, and come to me to Jezreel by to morrow this time. Now the king&apos;s sons, being seventy persons, were with the great men of the city, which brought them up.'),
            plain(7, 'And it came to pass, when the letter came to them, that they took the king&apos;s sons, and slew all seventy persons, and put their heads in baskets, and sent him them to Jezreel.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2k10-jehu-seventy',
          html:
            'Jehu writes letters to the royal guardians and elders: choose sides. Seventy princes live—Ahab&apos;s sons and grandsons. The guardians must decide: protect the old regime or align with the new. Loyalty&apos;s test comes in how we treat the vulnerable.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(8, 'And there came a messenger, and told him, saying, They have brought the heads of the king&apos;s sons. And he said, Lay ye them in two heaps at the entering in of the gate until the morning.'),
            plain(9, 'And it came to pass in the morning, that he went out, and stood, and said to all the people, Ye be righteous: behold, I conspired against my master, and slew him: but who slew all these?'),
            plain(10, 'Know now that there shall fall unto the earth nothing of the word of the Lord, which the Lord spake concerning the house of Ahab: for the Lord hath done that which he spake by his servant Elijah.'),
            plain(11, 'So Jehu slew all that remained of the house of Ahab in Jezreel, and all his great men, and his kinsfolks, and his priests, until he left him none remaining.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'seventy-sons',
          html:
            'The number is staggering: seventy sons. Ahab&apos;s house has grown enormous, a dynasty sprawling across a kingdom. Yet in Jehu&apos;s letters, they become leverage. He does not march on Samaria with armies; he writes words that divide loyalties. The elders and caretakers face an impossible choice: raise up a new king to oppose Jehu, or submit. But "two kings stood not before him"—they recognize that Jehu is already the stronger power, already backed by the prophet&apos;s word. They capitulate not to mercy, but to fear. In doing so, they become the executioners of their own young charges.',
        },
        {
          kind: 'hebrew',
          id: 'qinah',
          title: 'קִנְאָה — Zeal',
          script: 'קִנְאָה',
          translit: '<strong>qin&apos;ah</strong> · zeal, jealousy, passionate intensity',
          description:
            'This word captures Jehu&apos;s driving force. It is the fire that consumes him, the passion that will not be quenched until Ahab&apos;s house is utterly erased. But qin&apos;ah is not mere anger. It is a kind of divine jealousy—the intensity with which the Lord guards His covenant, the fervor with which He demands exclusive allegiance. Jehu&apos;s zeal is real, but, as the chapter will reveal, it is not matched by a whole heart.',
        },
        {
          kind: 'commentary',
          id: 'ritual-humiliation',
          html:
            'The heads in baskets are not merely a tactic; they are a ritual humiliation. Jehu arranges them at the city gate, heaping them in two piles for all of Jezreel to see. He then performs a kind of public justification: "Ye be righteous: behold, I conspired against my master, and slew him: but who slew all these?" He is not claiming innocence; he is appealing to a higher authority. He slew Ahab (that was his commission), but the death of the seventy belongs to the Lord who spoke through Elijah. This is both confession and justification—Jehu acknowledges his own guilt in Ahab&apos;s death while transferring the horror of the seventy to the Lord&apos;s account. It is a rationalization of the unreasonable.',
        },
        {
          kind: 'carry',
          html:
            'How often do we perform zeal without examining whether our hearts are whole? Jehu fulfilled the Lord&apos;s word with terrifying efficiency. He did what was commanded. But did he do it because he loved the Lord, or because power intoxicated him and a prophet&apos;s word gave him permission? Wholeness of heart is not the same as wholeness of action. A deed can be commissioned by God and executed with a divided will. Real faithfulness asks not just "Do we do what God commands?" but "Do we do it with a heart undivided from Him?"',
        },
        {
          kind: 'reflection',
          id: 'zeal-heart',
          prompt: 'Can you obey God while keeping part of your heart elsewhere? What would it look like to bring your whole heart to the things the Lord asks of you, rather than just the outward act?',
        },
      ],
    },

    /* ─── 2 Kings 10:12–17 — Jehonadab & the Brethren of Ahaziah ──────── */
    {
      ref: '2 Kings 10:12–17',
      title: 'The Test of the Heart & Ahaziah&apos;s Kinfolk',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(12, 'And he arose and departed, and came to Samaria. And as he was at the shearing house in the way,'),
            plain(13, 'Jehu met with the brethren of Ahaziah king of Judah: and said, Who are ye? And they answered, We are the brethren of Ahaziah; and we go down to salute the children of the king and the children of the queen.'),
            plain(14, 'And he said, Take them alive. And they took them alive, and slew them at the pit of the shearing house, even two and forty men; and he left none of them.'),
            plain(15, 'And when he was departed thence, he lighted on Jehonadab the son of Rechab coming to meet him: and he saluted him, and said to him, Is thine heart right, as my heart is with thy heart? And Jehonadab answered, It is. If it be, give me thine hand. And he took him up to him into the chariot.'),
            plain(16, 'And he said, Come with me, and see my zeal for the Lord. So they made him ride in his chariot.'),
            plain(17, 'And when he came to Samaria, he slew all that remained unto Ahab in Samaria, till he had destroyed him, according to the saying of the Lord, which he spake to Elijah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ahaziah-brethren',
          html:
            'In passing, Jehu encounters the brethren of Ahaziah king of Judah. They are traveling south to pay respects to the royal family—a gesture of kinship and alliance. But in Jehu&apos;s eyes, they are targets. He kills all forty-two of them at the pit of the shearing house. The text does not linger; it records it as fact. Ahaziah himself died in the previous chapter, killed when he tried to escape Jehu&apos;s men. These brethren die not because they have rebelled, but because they are bound by blood to a house Jehu is determined to erase.',
        },
        {
          kind: 'hebrew',
          id: 'jehonadab',
          title: 'יְהוֹנָדָב — Jehonadab, the Rechabite',
          script: 'יְהוֹנָדָב',
          translit: '<strong>Yehonav&apos;adav</strong> · Jehonadab, son of Rechab, founder of the Rechabite sect',
          description:
            'Jehonadab represents a different kind of zeal—one rooted not in conquest but in covenant fidelity. The Rechabites were known for strict asceticism: they drank no wine, built no houses, sowed no seed. Their rule was a protest against the complacency of settled Israel, a call to return to wilderness simplicity and obedience. When Jehu asks "Is thine heart right, as my heart is with thy heart?" he is not asking for intellectual agreement; he is asking for covenant partnership. Jehonadab answers, "It is," and climbs into Jehu&apos;s chariot. In the pages of 2 Kings, Jehonadab becomes a witness to Jehu&apos;s zeal. In the pages of Jeremiah, the Rechabites will stand as a model of faithfulness—their houses are blessed because they kept the commandment of their father Rechab.',
        },
        {
          kind: 'commentary',
          id: 'heart-right',
          html:
            '"Is thine heart right, as my heart is with thy heart?" This question cuts to the core of covenant. It is not "Do you agree with my politics?" or "Will you help me seize power?" It is "Are your deepest loyalties aligned with mine? Do we bow before the same God?" Jehonadab&apos;s answer is terse: "It is." And Jehu lifts him up into the chariot. The gesture is one of recognition—when your heart is right, you are yoked with those who serve the Lord. Yet the question also haunts us: When we ask this of others, can we ask it truthfully of ourselves?',
        },
        {
          kind: 'carry',
          html:
            'The encounter with Jehonadab is a mirror. Jehu invites him: "Come with me, and see my zeal for the Lord." Jehonadab accepts. But the zeal Jehonadab witnesses is a zeal mixed with vengeance, with political consolidation, with the lust for power. Does Jehonadab see what Jehu truly is? Or does he see only what he wishes to see—a zealot for covenant? The text does not tell us. But we know this: a heart that is right does not cling to half-measures. It does not serve the Lord while keeping one hand on the golden calf. When we yoke ourselves to leaders, movements, or causes, we must ask: Is the zeal we see truly pure, or is it mingled with ambition? Does it call us higher, or does it settle for power?',
        },
        {
          kind: 'reflection',
          id: 'covenant-partnership',
          prompt: 'What does it mean to have your heart "right"? When you ally yourself with others in faith or cause, how do you know whether their zeal is pure or mixed with other motives?',
        },
      ],
    },

    /* ─── 2 Kings 10:18–27 — The Baal Trap & the House of Baal ────────── */
    {
      ref: '2 Kings 10:18–27',
      title: 'The Deception: A Great Sacrifice to Baal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(18, 'And Jehu gathered all the people together, and said unto them, Ahab served Baal a little; but Jehu shall serve him much.'),
            plain(19, 'Now therefore call unto me all the prophets of Baal, all his servants, and all his priests; let none be wanting: for I have a great sacrifice to do to Baal; whosoever shall be wanting, he shall not live. But Jehu did it in subtilty, to the intent that he might destroy the worshippers of Baal.'),
            plain(20, 'And Jehu said, Proclaim a solemn assembly for Baal. And they proclaimed it.'),
            plain(21, 'And Jehu sent through all Israel: and all the worshippers of Baal came, so that there was not a man left that came not. And they came into the house of Baal; and the house of Baal was full from one end to another.'),
            plain(22, 'And he said unto him that was over the vestry, Bring forth vestments for all the worshippers of Baal. And he brought them forth vestments.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2k10-eradication-claim',
          html:
            'Jehu eradicates Baal worship; he declares his zeal for the Lord—but zealotry without faith remains empty.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(23, 'And Jehu went, and Jehonadab the son of Rechab, into the house of Baal, and said unto the worshippers of Baal, Search, and look that there be here with you none of the servants of the Lord, but the worshippers of Baal only.'),
            plain(24, 'And when they went in to offer sacrifices and burnt offerings, Jehu appointed fourscore men without, and said, If any of the men whom I have brought into your hands escape, he that letteth him go, his life shall be for the life of him.'),
            plain(25, 'And it came to pass, as soon as he had made an end of offering the burnt offering, that Jehu said to the guard and to the captains, Go in, and slay them; let none come forth. And they smote them with the edge of the sword; and the guard and the captains cast them out, and went to the city of the house of Baal.'),
            plain(26, 'And they brought forth the images out of the house of Baal, and burned them.'),
            plain(27, 'And they brake down the image of Baal, and brake down the house of Baal, and made it a draught house unto this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'baal-deception',
          html:
            'This is the crown jewel of Jehu&apos;s campaign—a masterpiece of deception. He proclaims that he will serve Baal "much"—far more than Ahab ever did. The promise draws in every prophet, priest, and worshipper in Israel. The house of Baal fills to capacity. Then, at the moment when the sacrifices are being offered, Jehu gives the signal. Eighty soldiers stand guard outside. The priests and worshippers are slaughtered inside the very temple where they have gathered to worship. It is a trap sanctified by the appearance of religious enthusiasm.',
        },
        {
          kind: 'hebrew',
          id: 'mashchit',
          title: 'מַשְׁחִית — The Destroyer',
          script: 'מַשְׁחִית',
          translit: '<strong>mashch&iacute;t</strong> · destroyer, one who ruins or corrupts',
          description:
            'The Hebrew word carries both active and passive force. A mashchit destroys by corrupting, by infiltrating, by pretending to be what it is not. Jehu becomes a kind of mashchit—he infiltrates Baal worship not to join it, but to annihilate it. The deception is complete; the worshippers never suspect that the man calling them to gather is calling them to their own slaughter. By the time they realize their error, it is too late.',
        },
        {
          kind: 'commentary',
          id: 'strategy-morality',
          html:
            'The text does not moralize about Jehu&apos;s deception. It records it as strategy, as cunning, as effective. Jehu needed to destroy Baal worship without sparking a civil war. A frontal assault would have been costly. Instead, he used psychology—he promised what the people craved (a great ceremony honoring their god), and they walked willingly into the trap. The moral question lingers: Is deception ever justified in the service of destroying idolatry? The text seems to say: in this case, yes. Jehu did what was right in the Lord&apos;s eyes. Yet we must ask: Did Jehu&apos;s heart remain right while he deceived? Or did the cunning required to destroy Baal begin to shape him into something other than what the Lord intended?',
        },
        {
          kind: 'commentary',
          id: 'desecration-mirror',
          html:
            'After the slaughter, Jehu orders the images and altars of Baal destroyed. The house of Baal itself is torn down and turned into a latrine—a draught house, a toilet. The desecration is absolute and deliberate. It mirrors the desecration of Baal worship itself: if Baal is not a god, then his house is not a temple but an outhouse. The text records this without comment. What was sacred to thousands becomes waste. Yet in the logic of covenant, this is fitting. A false god deserves a false temple, and what was held in reverence by idolators is held in contempt by those who serve the true God.',
        },
        {
          kind: 'christ',
          id: 'christ-baal-trap',
          title: 'Christ & the True Expulsion of Idols',
          html:
            'When Christ came to the temple in Jerusalem, He found merchants and moneychangers turning the house of His Father into a marketplace. He overturned their tables with the words: "It is written, My house shall be called the house of prayer; but ye have made it a den of thieves" (Matt. 21:13). Yet Christ&apos;s method was not Jehu&apos;s. He did not set a trap. He did not deceive. He simply spoke the truth and acted in authority. When He faced the principalities of darkness, He defeated them not through cunning but through the power of His own resurrection. The false gods of our hearts are destroyed not by our deception, but by the truth of Christ&apos;s presence and the power of His claim on our lives. Where Jehu needed a trap, Christ needed only the word of truth.',
        },
        {
          kind: 'carry',
          html:
            'The destruction of Baal worship through deception raises an uncomfortable question: When fighting evil, how much of evil&apos;s methods are we willing to adopt? Jehu destroyed idolatry but used the idolators&apos; own hunger against them. He promised them what they craved and led them to slaughter. The outcome was right, but the path was dark. In our own spiritual wars, we face the same temptation: to use the tools of the world, to manipulate and deceive, to justify the means by the righteousness of the end. But Christ calls us to a different way—to overcome evil with good, to speak truth rather than craft lies, to let the power of His resurrection be enough.',
        },
        {
          kind: 'reflection',
          id: 'idol-destruction',
          prompt: 'What idols have you had to destroy in your own heart? Have you destroyed them through deception and self-deception, or have you let Christ&apos;s truth expose and dismantle them? What would it look like to fight your inner battles with integrity rather than manipulation?',
        },
      ],
    },

    /* ─── 2 Kings 10:28–36 — Partial Obedience & Partial Blessing ──────── */
    {
      ref: '2 Kings 10:28–36',
      title: 'The Incomplete Victory: Jehu & the Golden Calves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(28, 'Thus Jehu destroyed Baal out of Israel.'),
            plain(29, 'Howbeit from the sins of Jeroboam the son of Nebat, who made Israel to sin, Jehu departed not from after them, the golden calves that were in Bethel, and that were in Dan.'),
            plain(30, 'And the Lord said unto Jehu, Because thou hast done well in executing that which is right in mine eyes, and hast done unto the house of Ahab according to all that was in mine heart, thy children of the fourth generation shall sit on the throne of Israel.'),
            plain(31, 'But Jehu took no heed to walk in the law of the Lord God of Israel with all his heart: he departed not from the sins of Jeroboam.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2k10-zeal-failure',
          html:
            'Jehu reigned; but he did not keep the law—zeal without obedience cannot secure the throne.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(32, 'In those days the Lord began to cut Israel short: and Hazael smote them in all the coasts of Israel;'),
            plain(33, 'From the Jordan eastward, all the land of Gilead, the Gadites, and the Reubenites, and the Manassites, from Aroer, which is by the river Arnon, even Gilead and Bashan.'),
            plain(34, 'Now the rest of the acts of Jehu, and all that he did, and all his might, are they not written in the book of the chronicles of the kings of Israel?'),
            plain(35, 'And Jehu slept with his fathers: and they buried him in Samaria. And Jehoahaz his son reigned in his stead.'),
            plain(36, 'And the time that Jehu reigned over Israel in Samaria was twenty and eight years.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'golden-calves',
          html:
            'The moment of reckoning comes in a single verse: "Howbeit from the sins of Jeroboam the son of Nebat, who made Israel to sin, Jehu departed not from after them, the golden calves that were in Bethel, and that were in Dan." Jehu destroyed Baal—foreign idolatry, the worship of a god of another nation. But he kept the golden calves—religious innovation instituted by Jeroboam centuries before to bind the northern kingdom to himself rather than to Jerusalem. Jehu had zeal, but not wholeness. He was willing to destroy what was overtly pagan but not willing to destroy what was politically useful.',
        },
        {
          kind: 'commentary',
          id: 'partial-blessing',
          html:
            'The Lord&apos;s word to Jehu is both blessing and diagnosis: "Because thou hast done well in executing that which is right in mine eyes, and hast done unto the house of Ahab according to all that was in mine heart, thy children of the fourth generation shall sit on the throne of Israel." The promise is real. Four generations will sit on Israel&apos;s throne because of Jehu&apos;s obedience. But the very next verse begins the reversal: "But Jehu took no heed to walk in the law of the Lord God of Israel with all his heart: he departed not from the sins of Jeroboam." The "but" is devastating. Partial obedience earns partial blessing; but it does not earn wholeness. And because the heart is not whole, the kingdom begins to be cut short. Hazael of Syria smites Israel in all her coasts.',
        },
        {
          kind: 'hebrew',
          id: 'malkhuth',
          title: 'מַלְכוּת — Kingdom, Kingship',
          script: 'מַלְכוּת',
          translit: '<strong>malkuth</strong> · kingdom, sovereignty, royal power',
          description:
            'In keeping the golden calves, Jehu kept his malkuth—his political kingdom. But in keeping the kingdom, he lost something far greater. The political religion of Jeroboam&apos;s calves had become a default, so normal that Jehu did not even see it as idolatry. He had eyes to see Baal and destroy it, but he was blind to the calcification of his own heart.',
        },
        {
          kind: 'commentary',
          id: 'hazael-cutting-short',
          html:
            'The text does not linger on the tragedy, but it is implicit. In the very days when Jehu is consolidating his power and sitting secure on the throne, with four generations promised, the Lord begins to cut Israel short. Hazael of Syria invades and smites Israel in all her coasts. The promise to Jehu is kept—four generations will reign—but the kingdom itself is already beginning to shrivel. One sign of Israel&apos;s diminishment: the eastern territories beyond the Jordan (Gilead, the lands of the Reubenites and Manassites) are seized by Syria. The seeds of Israel&apos;s eventual exile are already being sown. Jehu did what was right, but not with his whole heart. And the nation pays the price.',
        },
        {
          kind: 'christ',
          id: 'christ-wholeness',
          title: 'Christ & Wholeness of Heart',
          html:
            'Christ offers what Jehu could not achieve: wholeness of obedience. In the garden, when He prayed, "Not my will, but thine, be done," He was not hedging His bets. He was not keeping one hand on an alternative. Every word He spoke, every act He performed, every step He took toward the cross was in perfect alignment with the Father&apos;s will. "I am the way, the truth, and the life" is not a slogan; it is a claim rooted in the fact that Christ&apos;s heart was entirely given to the Father&apos;s purpose. Because of that wholeness, His victory is not partial. He does not destroy one idol while leaving another in place. He disarms all principalities and powers. He conquers death itself. The blessing He offers is not a promise of four generations on a throne; it is eternal life, not because of partial obedience, but because His obedience is complete and His heart is undivided.',
        },
        {
          kind: 'carry',
          html:
            'We are all Jehu in some way. We destroy the obvious sins—the Baals that are foreign and overtly evil—while we keep the golden calves hidden in the back rooms of our hearts. We convince ourselves that some compromises are necessary for survival, that some political religions are just how the world works. But the text is clear: partial obedience earns partial blessing. Our families may prosper for a few generations, but the kingdom itself begins to shrink. Real faithfulness asks not just "Do I obey?" but "Do I obey with my whole heart?" Do I let Christ dismantle not just the foreign idols, but the domestic ones? Do I trust that wholeness of heart is better than the preservation of my own power?',
        },
        {
          kind: 'reflection',
          id: 'whole-heart',
          prompt: 'What golden calves are you keeping? What religious or moral compromises have you rationalized as necessary? What would it cost you to obey with your whole heart?',
        },
      ],
    },

  ],
};
