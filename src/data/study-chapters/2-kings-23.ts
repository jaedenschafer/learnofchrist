import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 23 — Josiah's Covenant Renewal and Reform
 *
 * King Josiah discovers the Book of the Covenant in the temple and summons
 * all Judah to renew their covenant with the Lord. What follows is the most
 * sweeping religious reform in Judah's history: the destruction of idolatrous
 * vessels, altars, and high places, the defilement of Topheth, the desecration
 * of ancient shrines, and the celebration of a Passover unmatched since the
 * judges. Yet the text also records a haunting truth: even Josiah's thorough
 * reform cannot turn away the fierceness of God's anger kindled by Manasseh's
 * provocations. The chapter closes with Josiah's death at Megiddo and the
 * brief, troubling reigns of his successors.
 */
export const KINGS_2_23: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 23,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 21 },
  intros: [
    'In the eighteenth year of his reign, King Josiah gathers all the elders, priests, and people of Judah into the house of the Lord. He reads to them the words of the Book of the Covenant — the law of Moses — that has been found in the temple. Standing by a pillar, Josiah makes a solemn covenant before the Lord: he will walk after the Lord, keep His commandments, testimonies, and statutes with all his heart and soul. All the people stand to the covenant.',
    'What follows is a transformation without precedent. Josiah commands that every vessel made for Baal, every idol, every altar to the sun, moon, and planets — the accumulated idolatry of centuries — be brought out of the temple and burned. The high places are destroyed from Geba to Beersheba. The bones of false priests are burned upon their own altars. Even Topheth, the valley where children were made to pass through the fire to Molech, is defiled so that no man shall ever do such evil there again. In the eighteenth year of Josiah&apos;s reign, a Passover is kept in Jerusalem that stands unmatched since the days of the judges.',
    'Yet the Lord&apos;s wrath does not turn away. For all Josiah&apos;s righteousness, for all his reform, God declares that Judah will still be removed from His sight because of the provocation of Manasseh. And when Josiah rides against Pharaoh-nechoh at Megiddo, he is struck down — the future Armageddon claiming its first great king. His sons who follow him will reign in darkness, undoing his work. But in the moment of Josiah&apos;s reform, before the final fall, the kingdom experiences something rare: a king who turns to the Lord with all his heart.',
  ],

  sections: [
    /* ─── 2 Kings 23:1–3 — The Covenant Renewed ──────────────────────── */
    {
      ref: '2 Kings 23:1–3',
      title: 'The Covenant Renewed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(1, 'And the king sent, and they gathered unto him all the elders of Judah and of Jerusalem.'),
            plain(2, 'And the king went up into the house of the Lord, and all the men of Judah and all the inhabitants of Jerusalem with him, and the priests, and the prophets, and all the people, both small and great: and he read in their ears all the words of the book of the covenant which was found in the house of the Lord.'),
            {
              number: 3,
              spans: [
                t('And the king stood by a pillar, and '),
                hp('made a covenant', 'k23-covenant'),
                t(' before the Lord, to walk after the Lord, and to keep his commandments and his testimonies and his statutes with all his heart and all his soul, to perform the words of this covenant that were written in this book. And all the people stood to the covenant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-discovery',
          html:
            'The Book of the Covenant has been found in the temple. Some scholars identify this as Deuteronomy, or a portion of it — the law of Moses that had been lost to Judah, perhaps hidden during Manasseh&apos;s reign of idolatry. Its discovery is not an accident. It becomes the catalyst for Josiah&apos;s transformation and the transformation of a kingdom.',
        },
        {
          kind: 'commentary',
          id: 'k23-gathered',
          html:
            'Josiah gathers not just the leaders but "all the people, both small and great." This is not a private observance. The king stands by a pillar — a place of witness and authority — and reads the words of the covenant aloud. The entire community hears the law together. And in that hearing, something ancient awakens.',
        },
        {
          kind: 'hebrew',
          id: 'k23-berith',
          title: 'Berith — "Covenant"',
          script: 'בְרִית',
          translit: '<strong>Berith</strong> · covenant; binding agreement',
          description:
            'The covenant (berith) is not a private vow but a solemn binding between Josiah, the people, and the Lord. To make a berith is to enter into an unbreakable agreement, witnessed by all. The covenant Josiah makes at the pillar echoes the great covenants of Israel&apos;s past: with Abraham, with Moses at Sinai. It is a renewal, a return to the ancient path.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we must hear the law read aloud, together with others, to feel its weight and truth. Josiah did not discover the Book of the Covenant alone in secret. He gathered the elders, the priests, the people — and in their hearing, he read it. What practices or truths do you need to renew not in isolation, but in community?',
        },
        {
          kind: 'reflection',
          id: 'covenant-renewed',
          prompt: 'Josiah made a covenant before all the people. When have you made a commitment before witnesses? How did the presence of others deepen your resolve?',
        },
      ],
    },

    /* ─── 2 Kings 23:4–14 — The Comprehensive Reform ────────────────── */
    {
      ref: '2 Kings 23:4–14',
      title: 'The Comprehensive Reform',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(4, 'And the king commanded Hilkiah the high priest, and the priests of the second order, and the keepers of the door, to bring forth out of the temple of the Lord all the vessels that were made for Baal, and for the grove, and for all the host of heaven: and he burned them without Jerusalem in the fields of Kidron, and carried the ashes of them unto Bethel.'),
            plain(5, 'And he put down the idolatrous priests, whom the kings of Judah had ordained to burn incense in the high places in the cities of Judah, and in the places round about Jerusalem; them also that burned incense unto Baal, to the sun, and to the moon, and to the planets, and to all the host of heaven.'),
            plain(6, 'And he brought out the grove from the house of the Lord, without Jerusalem, unto the brook Kidron, and burned it at the brook Kidron, and stamped it small to powder, and cast the powder thereof upon the graves of the children of the people.'),
            plain(7, 'And he brake down the houses of the sodomites, that were by the house of the Lord, where the women wove hangings for the grove.'),
            {
              number: 8,
              spans: [
                t('And he brought all the priests out of the cities of Judah, and '),
                hg('defiled the high places', 'k23-high-places'),
                t(' where the priests had burned incense, from Geba to Beersheba: and he brake down the high places of the gates that were in the entering in of the gate of Joshua the governor of the city, which were on a man&apos;s left hand at the gate of the city.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Nevertheless the priests of the high places came not up to the altar of the Lord in Jerusalem, but they did eat of the unleavened bread among their brethren.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he defiled Topheth, which is in the valley of the children of Hinnom, that no man might make his son or his daughter to pass through the fire to Molech.'),
              ],
            },
            plain(11, 'And he took away the horses that the kings of Judah had given to the sun, by the entering in of the house of the Lord, by the chamber of Nathan-melech the chamberlain, which was in the suburbs; and burned the chariots of the sun with fire.'),
            plain(12, 'And the altars that were on the top of the upper chamber of Ahaz, which the kings of Judah had made, and the altars which Manasseh had made in the two courts of the house of the Lord, did the king beat down, and brake them down from thence, and cast the dust of them into the brook Kidron.'),
            {
              number: 13,
              spans: [
                t('And the high places that were before Jerusalem, on the right hand of the mount of corruption, which Solomon the king of Israel had builded for '),
                hg('Ashtoreth', 'k23-ashtoreth'),
                t(' the abomination of the Zidonians, and for Chemosh the abomination of the Moabites, and for Milcom the abomination of the children of Ammon, did the king defile.'),
              ],
            },
            plain(14, 'And he brake the images, and cut down the groves, and filled their places with the bones of men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-high-places',
          html:
            'Josiah&apos;s reform is not superficial. He does not merely remove idols from the temple; he travels the length of Judah from Geba to Beersheba and defiles every high place — the altars where false priests have burned incense for generations. To defile a high place means to make it ritually unusable, permanently broken.',
        },
        {
          kind: 'commentary',
          id: 'k23-topheth',
          html:
            'Topheth, the valley of Hinnom (later Gehenna), is where the practice of Molech-worship reached its darkest extreme: children were made to pass through the fire. Josiah&apos;s defilement of Topheth is an act of mercy and judgment combined — he strips the valley of its power to receive such evil ever again. By filling the high places with the bones of dead men, he makes them permanently impure by the law of the Lord, unable to serve as sites of worship.',
        },
        {
          kind: 'hebrew',
          id: 'k23-ashtoreth',
          title: 'Ashtoreth — The Canaanite Goddess',
          script: 'עַשְׁתֹּרֶת',
          translit: '<strong>Ashtoreth</strong> · Canaanite goddess of fertility and war',
          description:
            'Ashtoreth, along with Chemosh and Milcom, represents the religious syncretism that had infected Judah for generations. Even Solomon, the wisest king, built altars for these foreign deities to please his wives. Josiah&apos;s destruction of what Solomon built represents a radical reversal: the breaking of old patterns, even when they bear the name of greatness.',
        },
        {
          kind: 'carry',
          html:
            'Josiah&apos;s reform is decisive and total. He does not compromise. He does not leave one altar standing. True repentance and renewal sometimes require us to break what our ancestors built, to remake our spaces and practices completely. What in your life — old patterns, inherited habits, comfortable compromises — needs to be broken and rebuilt?',
        },
        {
          kind: 'reflection',
          id: 'comprehensive-reform',
          prompt: 'Josiah left nothing untouched — he traveled the entire kingdom destroying idols and defiling high places. What does it look like to pursue wholehearted reform in one area of your life, without compromise?',
        },
      ],
    },

    /* ─── 2 Kings 23:15–20 — The Prophecy of 1 Kings 13 Fulfilled ───── */
    {
      ref: '2 Kings 23:15–20',
      title: 'The Prophecy Fulfilled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 15,
              spans: [
                t('Moreover the altar that was at Bethel, and the high place which Jeroboam the son of Nebat, who made Israel to sin, had made, both that altar and the high place he brake down; and burned the high place, and stamped it small to powder, and burned the grove.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And as Josiah turned himself, he spied the sepulchres that were there in the mount; and sent, and took the bones out of the sepulchres, and burned them upon the altar, and '),
                hp('polluted it', 'k23-polluted-altar'),
                t(', according to the word of the Lord which the man of God proclaimed, who proclaimed these things.'),
              ],
            },
            plain(17, 'Then he said, What title is that that I see? And the men of the city told him, It is the sepulchre of the man of God, which came from Judah, and proclaimed these things that thou hast done against the altar of Bethel.'),
            plain(18, 'And he said, Let him alone; let no man move his bones. So they let his bones alone, with the bones of the prophet that came out of Samaria.'),
            {
              number: 19,
              spans: [
                t('And all the houses also of the high places that were in the cities of Samaria, which the kings of Israel had made to provoke the Lord, Josiah took away, and did to them according to all the acts that he had done in Bethel.'),
              ],
            },
            plain(20, 'And he slew all the priests of the high places that were there upon the altars, and burned the bones of men upon them, and returned to Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-bethel',
          html:
            'Bethel represents the beginning of Israel&apos;s idolatry. Jeroboam, the first king of the northern kingdom, set up golden calves there to prevent his people from returning to Jerusalem to worship. This high place has stood for nearly three hundred years. And now Josiah, a king of Judah, travels north and dismantles it — an act of both religious purity and political boldness.',
        },
        {
          kind: 'commentary',
          id: 'k23-polluted-altar',
          html:
            'The burning of human bones upon an altar renders it permanently defiled according to the law of the Lord. This is not desecration for its own sake; it is the fulfillment of an ancient word. Josiah&apos;s reformation is shaped by Scripture, guided by prophecies spoken generations before.',
        },
        {
          kind: 'commentary',
          id: 'k23-man-of-god',
          html:
            'The "man of God" who came from Judah is referenced in 1 Kings 13. He prophesied against the altar at Bethel by name, saying that a king named Josiah would one day burn the bones of false priests upon it — more than three centuries before Josiah was born. When the man of the city tells Josiah whose sepulcher he has found, Josiah shows mercy: "Let him alone; let no man move his bones." He honors the prophet whose word is being fulfilled through him.',
        },
        {
          kind: 'christ',
          id: 'k23-word-endures',
          title: 'Christ Connection — The Word That Does Not Return Void',
          html:
            'The prophecy spoken in 1 Kings 13 is fulfilled exactly, across more than three hundred years. The man of God speaks; the word waits; and in God&apos;s time, a king named Josiah steps forward and does precisely what was foretold. This pattern echoes throughout Scripture: "So shall my word be that goeth forth out of my mouth: it shall not return unto me empty, but it shall accomplish that which I please" (Isaiah 55:11). Christ is the ultimate fulfillment of this principle — every word concerning Him, spoken across centuries, finds its target.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s word does not lose its power across generations. What was spoken in truth continues to shape history. When you read Scripture, you are reading words that are not merely ancient — they are living, enduring, reaching toward their fulfillment. Do you trust that the words you have received — from Scripture, from wise counsel, from God Himself — will accomplish their purpose even across time?',
        },
        {
          kind: 'reflection',
          id: 'prophecy-fulfilled',
          prompt: 'How does it change your sense of Scripture&apos;s authority to know that God spoke through a prophet the name of a king three centuries before he was born, and that king fulfilled the word exactly?',
        },
      ],
    },

    /* ─── 2 Kings 23:21–23 — The Great Passover ────────────────────── */
    {
      ref: '2 Kings 23:21–23',
      title: 'The Great Passover',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(21, 'And the king commanded all the people, saying, Keep the passover unto the Lord your God, as it is written in the book of this covenant.'),
            {
              number: 22,
              spans: [
                t('Surely there was not holden such a passover from the days of the judges that judged Israel, nor in all the days of the kings of Israel, nor of the kings of Judah;'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But in the eighteenth year of king Josiah, wherein this passover was holden to the Lord in Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-passover-kept',
          html:
            'After the altars are destroyed, after the high places are defiled, Josiah commands all the people to keep the Passover. This is not a small observance. The text says it was unmatched in all the history of Israel and Judah — surpassing even the Passover of Solomon&apos;s time. The reformation of idolatry and the restoration of the true Passover belong together. The removal of false worship makes room for true worship.',
        },
        {
          kind: 'hebrew',
          id: 'k23-pesach',
          title: 'Pesach — "Passover"',
          script: 'פֶּ֫סַח',
          translit: '<strong>Pesach</strong> · Passover; the passing over',
          description:
            'The Passover commemorates the night when God passed over the houses of Israel while striking down the firstborn of Egypt. It is the festival of liberation, the remembrance of deliverance. For Josiah&apos;s generation, this Passover represents a spiritual deliverance as profound as the exodus: the deliverance from idolatry, the return to the covenant, the restoration of true worship.',
        },
        {
          kind: 'christ',
          id: 'k23-passover-christ',
          title: 'Christ Connection — The True Passover',
          html:
            'The Passover that Josiah and all the people keep points forward to a Passover greater still: the Passover of Christ. "Christ our passover is sacrificed for us" (1 Corinthians 5:7). The Lamb slain, whose blood marks the doorposts of our hearts, delivers us from the bondage of sin. Josiah&apos;s Passover was a return to the ancient covenant; Christ&apos;s Passover is the fulfillment of all covenants, the sacrifice that makes every other sacrifice complete.',
        },
        {
          kind: 'carry',
          html:
            'What practices of worship do you keep? Are they true returns to what God has asked, or have they become routine, hollowed of meaning? Josiah&apos;s Passover was extraordinary not because the ritual was new, but because it was kept with wholehearted recommitment. Do you taste the freedom, the gratitude, the deliverance that your practices are meant to celebrate?',
        },
        {
          kind: 'reflection',
          id: 'great-passover',
          prompt: 'Josiah&apos;s Passover was the greatest in Israel&apos;s history because the people kept it with renewed hearts. What practice or celebration in your spiritual life deserves a fresh, wholehearted recommitment?',
        },
      ],
    },

    /* ─── 2 Kings 23:24–25 — Josiah: The Unmatched King ──────────────── */
    {
      ref: '2 Kings 23:24–25',
      title: 'A King Unmatched',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(24, 'Moreover Josiah put away those that had familiar spirits, and the wizards, and the images, and the idols, and all the abominations that were spied in the land of Judah and in Jerusalem, that he might perform the words of the law which were written in the book that Hilkiah the priest found in the house of the Lord.'),
            {
              number: 25,
              spans: [
                t('And like unto him was there '),
                hp('no king before him', 'k23-no-king-before'),
                t(', that turned to the Lord with all his heart, and with all his soul, and with all his might, according to all the law of Moses; neither after him arose there any like him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-familiar-spirits',
          html:
            'Josiah&apos;s reform extends to the elimination of mediums, wizards, and all practitioners of divination. These are the spiritual counterfeits, the false channels of divine knowledge that compete with the true revelation of the law. Their removal is as thorough as the destruction of the physical idols.',
        },
        {
          kind: 'commentary',
          id: 'k23-no-king-before',
          html:
            'This is the highest commendation given to any king in the books of Samuel and Kings. David was called a man after God&apos;s own heart. Hezekiah was righteous. But only Josiah is said to have no equal before him or after him. He turned to the Lord with all his heart, all his soul, all his might — language that recalls the greatest commandment of the law itself: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind" (Deuteronomy 6:5; repeated in Matthew 22:37).',
        },
        {
          kind: 'carry',
          html:
            'Josiah turned to the Lord with all his heart, all his soul, all his might. This is the measure of true devotion: not a partial commitment, not a private faith, but a wholehearted turning that orders everything a person does. What does wholehearted devotion look like in the complexity of your actual life?',
        },
        {
          kind: 'reflection',
          id: 'unmatched-king',
          prompt: 'Josiah is the only king commended for turning to the Lord with his entire heart, soul, and might. What would it mean for you to turn to the Lord with the same wholeness?',
        },
      ],
    },

    /* ─── 2 Kings 23:26–27 — The Wrath That Does Not Turn ──────────── */
    {
      ref: '2 Kings 23:26–27',
      title: 'The Judgment That Stands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 26,
              spans: [
                t('Notwithstanding the Lord turned not from the fierceness of his great wrath, wherewith his anger was kindled against Judah, because of all the provocations that Manasseh had provoked him withal.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the Lord said, I will remove Judah out of my sight, as I have removed Israel, and will cast off this city Jerusalem which I have chosen, and the house of which I said, My name shall be there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-wrath-kindled',
          html:
            'This is the most heartbreaking verse in Josiah&apos;s story. For all his righteousness, for all his reform, for all his wholehearted turning to the Lord — the wrath kindled by Manasseh&apos;s provocations will not be turned away. The judgment has been determined. The book of Judah&apos;s exile is already written. Josiah cannot undo what has been done. His reformation is genuine, his heart is true, but the nation&apos;s fate is sealed.',
        },
        {
          kind: 'commentary',
          id: 'k23-manasseh-provocation',
          html:
            'Manasseh, Josiah&apos;s grandfather, reigned for fifty-five years and did more evil than any king before him. He filled Jerusalem with blood and with idolatry. Though he eventually repented, the damage was done. God had declared that He would remove Judah from His sight. Josiah&apos;s reform slows the judgment but cannot reverse it. This teaches a hard truth: sin has consequences that outlive repentance; judgment deferred is not judgment overturned.',
        },
        {
          kind: 'carry',
          html:
            'Josiah shows us that righteousness is always worth doing, even when it cannot prevent judgment. He does not despair or give up because the kingdom is doomed. He reforms with his whole heart. He keeps the Passover. He turns the nation toward God — not because it will save Judah, but because God is worthy of that turning. Sometimes we are called to be faithful not because faithfulness guarantees escape, but because faithfulness is itself the only true response to God.',
        },
        {
          kind: 'reflection',
          id: 'wrath-stands',
          prompt: 'What does it mean to pursue wholehearted obedience when you know judgment is coming? How would Josiah&apos;s example change the way you respond to consequences you cannot escape?',
        },
      ],
    },

    /* ─── 2 Kings 23:28–30 — Josiah's Death at Megiddo ────────────── */
    {
      ref: '2 Kings 23:28–30',
      title: 'The Death of the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(28, 'Now the rest of the acts of Josiah, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            {
              number: 29,
              spans: [
                t('In his days Pharaoh-nechoh king of Egypt went up against the king of Assyria to the river Euphrates: and king Josiah went against him; and he slew him at '),
                hg('Megiddo', 'k23-megiddo'),
                t(', when he had seen him.'),
              ],
            },
            plain(30, 'And his servants carried him in a chariot dead from Megiddo, and brought him to Jerusalem, and buried him in his own sepulchre. And the people of the land took Jehoahaz the son of Josiah, and anointed him, and made him king in his father&apos;s stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-megiddo',
          html:
            'Megiddo is the site of Armageddon — the place where, in Revelation, the final battle will take place. It is fitting and terrible that Josiah, the greatest of kings, falls at Megiddo. The text does not explain why Josiah goes to war against Pharaoh-nechoh, or why he is killed. It simply says that the king, returning in a chariot dead from Megiddo, is brought back to Jerusalem to be buried. His death is swift, unexpected, and final.',
        },
        {
          kind: 'carry',
          html:
            'The greatest king cannot escape mortality. The most righteous is not immune to loss. Josiah rides to Megiddo in the vigor of his reign and returns dead. His people mourn him. His work, for all its power, is not permanent. After him will come lesser kings. The idols will return. The high places will be rebuilt. But his reform, in its moment, was real. His covenant, in its hour, changed a kingdom. This is what we are given: not permanence, but the grace to be faithful in our time.',
        },
        {
          kind: 'reflection',
          id: 'death-megiddo',
          prompt: 'Josiah dies at the moment of his greatest triumph and righteousness. How do you hold the tension between faithfulness and finitude — between doing good work that you know will not last forever?',
        },
      ],
    },

    /* ─── 2 Kings 23:31–34 — Jehoahaz and Jehoiakim ────────────────── */
    {
      ref: '2 Kings 23:31–34',
      title: 'The Successors Fall to Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(31, 'Jehoahaz was twenty and three years old when he began to reign; and he reigned three months in Jerusalem. And his mother&apos;s name was Hamutal the daughter of Jeremiah of Libnah.'),
            plain(32, 'And he did that which was evil in the sight of the Lord, according to all that his fathers had done.'),
            plain(33, 'And Pharaoh-nechoh put him in bands at Riblah in the land of Hamath, that he might not reign in Jerusalem; and put the land to a tribute of an hundred talents of silver, and a talent of gold.'),
            {
              number: 34,
              spans: [
                t('And Pharaoh-nechoh made Eliakim the son of Josiah king in the room of Josiah his father, and turned his name to '),
                hg('Jehoiakim', 'k23-jehoiakim'),
                t(': and took Jehoahaz away: and he came to Egypt, and died there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'k23-jehoahaz-brief',
          html:
            'Jehoahaz, Josiah&apos;s son, reigns for only three months before Pharaoh-nechoh removes him and takes him to Egypt, where he dies. His reign is a blur — barely noted, quickly erased. The text is blunt: he did evil in the sight of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'k23-jehoiakim',
          html:
            'Jehoiakim, another son of Josiah, is set up as king by Pharaoh-nechoh. But he is not truly king; he is a vassal, a puppet. His name is changed from Eliakim to Jehoiakim, perhaps in an attempt to assert authority, but the reality is clear: Judah is now subject to Egypt. The land is taxed. The kingdom is diminished. The brief moment of Josiah&apos;s reform and greatness is already fading into memory.',
        },
        {
          kind: 'carry',
          html:
            'After the great reformer comes a vacuum. Josiah&apos;s sons do not inherit his spirit; they do evil. The work of one generation does not automatically carry into the next. This is the risk of faithfulness: it plants seeds, but it cannot guarantee that those who come after will water them. What Josiah built with his whole heart, his successors abandon. But the example endures. His faithfulness was real, even though it was not permanent.',
        },
        {
          kind: 'reflection',
          id: 'successors-fall',
          prompt: 'Josiah&apos;s reformation is undone by his successors. What spiritual inheritance or work have you seen lost or forgotten when leadership changed? How do you remain faithful even knowing that your work may not outlast you?',
        },
      ],
    },

    /* ─── Final Reflection: The Unfinished Kingdom ─────────────────── */
    {
      ref: '2 Kings 23',
      title: 'The Greater Reformation',
      blocks: [
        {
          kind: 'christ',
          id: 'k23-true-reform',
          title: 'Christ Connection — The True Reform of the Heart',
          html:
            'Josiah cleanses the temple. He destroys the vessels of Baal. He defiles the high places. He removes the false priests. But he cannot cleanse the human heart. The people around him continue in idolatry, and his successors will do evil. A true reformation — one that endures, that touches the deepest places — must reach hearts, not merely altars. Christ is the True Reformer. His blood "speaketh better things than that of Abel" (Hebrews 12:24). His Spirit writes the law not on tablets of stone, but on hearts of flesh. Where Josiah&apos;s reformation was outer, sweeping, and ultimately temporary, Christ&apos;s reformation is inner, eternal, and total. "Ye must be born again" — a reformation that no successor can undo, because it is written on the soul itself.',
        },
        {
          kind: 'commentary',
          id: 'k23-unfinished',
          html:
            'The chapter ends not with triumph but with loss. Josiah is dead. Judah is under Egypt&apos;s thumb. His sons do evil. The reader knows that within decades, the kingdom will fall to Babylon. The exile will come. Yet in the moment of Josiah&apos;s reign, in the space between his covenant and his death, something true happened. A king turned with all his heart. A people gathered to hear the law. A Passover was kept that remains unmatched. The kingdom did not escape judgment, but it experienced grace. This is the pattern that echoes through Scripture: not that the faithful escape suffering, but that even in the shadow of judgment, faithfulness glows with a kind of eternal significance.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Kings 23',
    quote:
      'Like unto Josiah was there no king that turned to the Lord with all his heart, and with all his soul, and with all his might, according to all the law of Moses. Though judgment was deferred but not turned away, he reformed with wholehearted devotion — and in that moment, a kingdom glimpsed the power of a heart entirely given to God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 23 · Study Guide',
  },
};
