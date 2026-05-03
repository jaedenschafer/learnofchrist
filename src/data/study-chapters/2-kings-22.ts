import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 22 — Josiah Finds the Book of the Law
 *
 * At eight years old, Josiah inherits a kingdom. In his eighteenth year, while
 * repairs are being made to the Temple, the high priest discovers a book buried
 * in the sanctuary — the Book of the Law, lost to time. When the king hears its
 * words, he tears his clothes in recognition of how far his people have strayed
 * from the Lord&apos;s covenant. He sends his officials to consult the prophetess
 * Huldah, who pronounces judgment upon the nation — but mercy for the king whose
 * heart was tender enough to receive the Word. In this chapter, we see the power
 * of Scripture rediscovered, and a king who understood that true kingship bends
 * the heart toward God.
 */
export const KINGS_2_22: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 22,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 16 },
  intros: [
    'Josiah became king at eight years old. The text tells us he did right in the sight of the Lord and turned not aside to the right hand or to the left — a portrait of a child-king who chose obedience. But for decades, the Temple had fallen into disrepair. The Book of the Law — the sacred scroll that had been the anchor of Israel&apos;s covenant with the Lord — had been lost, buried perhaps intentionally, perhaps through neglect. The people had drifted. The Word had been forgotten.',
    'In the eighteenth year of his reign, Josiah sends the scribe Shaphan to the high priest Hilkiah with a simple instruction: gather the silver that has been brought into the Temple and use it to pay the workers who are repairing the sanctuary. But in that work of restoration, something far greater is discovered. The high priest speaks a sentence that will shake the kingdom: "I have found the Book of the Law in the house of the Lord."',
  ],

  bottomShare: {
    label: 'Share 2 Kings 22',
    quote:
      'When Josiah heard the words of the Book of the Law, he rent his clothes — a king whose tender heart was awakened by the Word of God. In his grief and conviction, we see what happens when a ruler truly encounters Scripture.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 22 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 22:1–2 — The Young King ────────────────────────────────── */
    {
      ref: '2 Kings 22:1–2',
      title: 'A Child King Sets His Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('Josiah was '),
                hy('eight', '22-eight-years'),
                t(' years old when he began to reign, and he reigned thirty and one years in Jerusalem. And his mother&apos;s name was Jedidah, the daughter of Adaiah of Bozkath.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he did that which was right in the sight of the Lord, and walked in all the way of David his father, and turned not aside to the right hand or to the left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '22-eight-years',
          html:
            'Josiah ascends to the throne before he can read. Yet the text immediately affirms that he did right in the sight of the Lord. This is not because of years or experience. This is because, even as a child, his heart was inclined toward obedience. He set his will toward the way of David, toward covenant faithfulness. From his earliest days as king, he chose the narrow path: no turning to the right hand or to the left. This is the portrait of a ruler formed by the fear of God.',
        },
        {
          kind: 'carry',
          html:
            'A king at eight. Most children his age are learning to read, not learning to rule. Yet Josiah did right. This tells us something profound: the orientation of the heart comes before the accumulation of knowledge or power. If you set yourself toward righteousness, toward humility, toward seeking God&apos;s way — the Lord will guide the rest.',
        },
        {
          kind: 'reflection',
          id: '22-child-king',
          prompt: 'What formative moment in your own life taught you to set your heart toward God? What did it cost to turn neither to the right nor to the left?',
        },
      ],
    },

    /* ─── 2 Kings 22:3–7 — The Temple Repairs Begin ───────────────────────── */
    {
      ref: '2 Kings 22:3–7',
      title: 'Restoring the House of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                t('And it came to pass in the eighteenth year of king Josiah, that the king sent Shaphan the scribe, the son of Azaliah, the son of Meshullam, to the house of the Lord, saying,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Go up to Hilkiah the high priest, that he may sum the silver which is brought into the house of the Lord, which the keepers of the door have gathered of the people:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And let them deliver it into the hand of the doers of the work, that have the oversight of the house of the Lord: and let them give it to the doers of the work which is in the house of the Lord, to repair the breaches thereof;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Unto carpenters, and builders, and masons, and to buy timber and hewn stone to repair the house.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Howbeit there was no reckoning made with them of the money that was delivered into their hand, because they dealt faithfully.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '22-temple-repairs',
          html:
            'In his eighteenth year — when he is twenty-six years old — Josiah gives a straightforward command: gather the money brought into the Temple and use it to repair the sanctuary. The language is administrative, practical. The Temple has fallen into disrepair. It needs carpenters, builders, masons, timber, and stone. The work must be done.',
        },
        {
          kind: 'commentary',
          id: '22-faithfulness',
          html:
            'The text notes that there was no need to audit the accounts, because "they dealt faithfully." This small phrase speaks volumes. In a culture where corruption was common, where officials skimmed from the sacred treasury, these workers were faithful. They took the money and used it exactly as commanded. The Temple was restored through honest hands.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the work of restoration is quiet and practical. Carpenters. Builders. Stone. We might expect a moment of spiritual awakening to announce itself in thunder and visions. Instead, it begins with repair. With the unglamorous work of fixing breaches, replacing timber, restoring what has fallen into disrepair.',
        },
        {
          kind: 'reflection',
          id: '22-breaches',
          prompt: 'What "breaches" in your own spiritual life need repairing? What practical, daily work might that repair require?',
        },
      ],
    },

    /* ─── 2 Kings 22:8–10 — The Book of the Law Is Found ───────────────────── */
    {
      ref: '2 Kings 22:8–10',
      title: 'The Book of the Law Discovered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 8,
              spans: [
                t('And Hilkiah the high priest said unto Shaphan the scribe, '),
                hy('I have found the book of the law', '22-found-law'),
                t(' in the house of the Lord. And Hilkiah gave the book to Shaphan; and Shaphan read it.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Shaphan the scribe came to the king, and brought the king word again, and said, Thy servants have gathered the money that was found in the house, and have delivered it into the hand of them that do the work, that have the oversight of the house of the Lord.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Shaphan the scribe shewed the king, saying, Hilkiah the priest hath delivered me a book. And Shaphan read it before the king.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: '22-sefer-torah',
          title: 'Sefer ha-Torah — "The Book of the Law"',
          script: 'סֵפֶר הַתּוֹרָה',
          translit: '<strong>Sefer ha-Torah</strong> · the scroll of instruction; the book containing God&apos;s covenant and law',
          description:
            'The phrase "Book of the Law" likely refers to the scroll of Deuteronomy, or a version of the Torah (the first five books of Moses). This was the covenant document itself — the written Word through which God had bound Himself to Israel and defined the terms of their faithfulness. When this book was lost, Israel lost its moral and spiritual compass. Its discovery would be a restoration of the foundation upon which the covenant rested.',
        },
        {
          kind: 'commentary',
          id: '22-found-law',
          html:
            'Hilkiah&apos;s words are brief but profound: "I have found the Book of the Law in the house of the Lord." How does the Book of the Law become lost in the house of the Lord itself? Through neglect. Through generations of drifting. Through a people who no longer consulted the Word. It was there all along, buried in the sanctuary, waiting to be discovered. And now a high priest, overseeing repairs, has found it. This is not accident. This is the Lord&apos;s work.',
        },
        {
          kind: 'commentary',
          id: '22-shaphan-reads',
          html:
            'Shaphan reads the book immediately — first to himself, then before the king. He becomes the messenger of the Word, the link between the sanctuary and the throne. His reading is an act of transmission. The Law moves from the hidden place where it had been lost, through Shaphan&apos;s voice, to the ears of the king.',
        },
        {
          kind: 'carry',
          html:
            'The Word of God can be lost in plain sight — even in the house of God itself. It lies dormant not because it is absent, but because no one is seeking it. What Scripture, what truth, have you neglected to search for? What would change if you opened that book again?',
        },
        {
          kind: 'reflection',
          id: '22-lost-word',
          prompt: 'When have you rediscovered truth you had forgotten — perhaps Scripture you once knew but had stopped reading, or wisdom that suddenly became urgent again? What brought you back to it?',
        },
      ],
    },

    /* ─── 2 Kings 22:11–13 — The King Rends His Clothes ──────────────────── */
    {
      ref: '2 Kings 22:11–13',
      title: 'A King&apos;s Tender Heart Breaks Open',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass, when the king had heard the words of the book of the law, that he '),
                hg('rent his clothes', '22-rent-clothes'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the king commanded Hilkiah the priest, and Ahikam the son of Shaphan, and Achbor the son of Michaiah, and Shaphan the scribe, and Asaiah a servant of the king, saying,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Go ye, enquire of the Lord for me, and for the people, and for all Judah, concerning the words of this book that is found: for great is '),
                hg('the wrath of the Lord', '22-wrath-kindled'),
                t(' that is kindled against us, because our fathers have not hearkened unto the words of this book, to do according unto all that which is written concerning us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '22-rent-clothes',
          html:
            'The king hears the words of the Law and immediately tears his clothes. This is not a performative gesture. This is the tearing of a man confronted with the abyss between God&apos;s demands and his people&apos;s unfaithfulness. He has done right in his own life; he has turned not aside. But his nation — his fathers before him — have forsaken the Lord. The Law speaks, and the king&apos;s heart breaks open.',
        },
        {
          kind: 'commentary',
          id: '22-wrath-kindled',
          html:
            'Josiah recognizes the gravity of what he is hearing. The wrath of the Lord is kindled. The covenant has been broken. The people have not hearkened to the words written in the Book. He understands instinctively what many modern readers miss: the Law is not mere rules. It is a covenant document, written to show a people how to live in relationship with the Holy God. To break it is to break covenant itself.',
        },
        {
          kind: 'commentary',
          id: '22-enquire-lord',
          html:
            'Josiah does not rest in his own interpretation. He sends his five most trusted officials to "enquire of the Lord" — to seek prophetic guidance about what this discovery means for Judah&apos;s future. He acts like a man who knows that his kingdom is not ultimately his. It belongs to the Lord. The Law belongs to the Lord. And only the Lord can speak to what comes next.',
        },
        {
          kind: 'carry',
          html:
            'When truth breaks open your heart, what do you do? Do you hide the breaking? Or do you let it change you? Josiah&apos;s torn clothes are visible. His grief is public. His officials see it. His people see it. And in that broken place, the king becomes teachable.',
        },
        {
          kind: 'reflection',
          id: '22-rent-heart',
          prompt: 'Has the Word of God ever broken your heart in this way — convicting you not of personal failure, but of a larger breach between what is and what should be? What did you do in that moment of recognition?',
        },
      ],
    },

    /* ─── 2 Kings 22:14–20 — Huldah the Prophetess Speaks ──────────────── */
    {
      ref: '2 Kings 22:14–20',
      title: 'The Prophetess Huldah Pronounces Judgment and Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 14,
              spans: [
                t('So Hilkiah the priest, and Ahikam, and Achbor, and Shaphan, and Asaiah, went unto '),
                hy('Huldah the prophetess', '22-huldah'),
                t(', the wife of Shallum the son of Tikvah, the son of Harhas, keeper of the wardrobe; (now she dwelt in Jerusalem in the college;) and they communed with her.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And she said unto them, Thus saith the Lord God of Israel, Tell the man that sent you to me,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Thus saith the Lord, Behold, I will bring evil upon this place, and upon the inhabitants thereof, even all the words of the book which the king of Judah hath read:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Because they have forsaken me, and have burned incense unto other gods, that they might provoke me to anger with all the works of their hands; therefore my wrath shall be kindled against this place, and shall not be quenched.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But to the king of Judah which sent you to enquire of the Lord, thus shall ye say to him, Thus saith the Lord God of Israel, As touching the words which thou hast heard;'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Because thine heart was '),
                hg('tender', '22-tender-heart'),
                t(', and thou hast humbled thyself before the Lord, when thou heardest what I spake against this place, and against the inhabitants thereof, that they should become a desolation and a curse, and hast '),
                hg('rent thy clothes', '22-huldah-rent-clothes'),
                t(', and wept before me; I also have heard thee, saith the Lord.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Behold therefore, I will gather thee unto thy fathers, and thou shalt be gathered into thy grave in peace; and thine eyes shall not see all the evil which I will bring upon this place. And they brought the king word again.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: '22-huldah-name',
          title: 'Chuldah — "Weasel" or "Mole"',
          script: 'חֻלְדָּה',
          translit: '<strong>Huldah</strong> · a prophetess of Israel; the name means weasel or mole',
          description:
            'Huldah is the only female prophet who speaks an oracle of judgment in the Hebrew Bible. She lives in Jerusalem, not in a temple or sanctuary, but in "the college" — suggesting a place of learning. She is the wife of Shallum, keeper of the royal wardrobe. She is known enough that when the king&apos;s officials need a word from the Lord, they know where to find her. The Lord speaks through women as well as men. A mole, burrowing beneath the surface, seeing what is hidden — an apt symbol for a prophet who sees what others cannot see.',
        },
        {
          kind: 'commentary',
          id: '22-huldah',
          html:
            'Huldah the prophetess speaks with the authority of God. She delivers a message in two parts: judgment on the nation, and mercy for the king. She is not present in the Temple. She is not a priest. She is a woman, living in the college in Jerusalem. Yet when the king needs to know the Lord&apos;s word, he sends his most trusted officials to her. This tells us something clear: God&apos;s word is not confined to institutional office. The Spirit speaks through those whom the Spirit chooses.',
        },
        {
          kind: 'commentary',
          id: '22-tender-heart',
          html:
            'The oracle turns from judgment to mercy when it speaks of Josiah: "Because thine heart was tender." The Hebrew word for tender suggests something easily moved, vulnerable, capable of being pierced. In a culture that often celebrated warrior kings and invulnerable rulers, Josiah&apos;s tenderness of heart becomes the very thing that moves God&apos;s mercy. A tender heart — that is what the Lord seeks.',
        },
        {
          kind: 'commentary',
          id: '22-huldah-rent-clothes',
          html:
            'Huldah directly references Josiah&apos;s tearing of his clothes and weeping. These outward signs of inward conviction matter. They are not wasted. The Lord sees them. The Lord counts them. And because Josiah humbled himself, because he wept, because his heart was tender, the Lord promises him peace — not for the nation, but for him.',
        },
        {
          kind: 'christ',
          id: '22-tender-king',
          title: 'Christ Connection — The King With the Tender Heart',
          html:
            'Josiah&apos;s tender heart — capable of being broken by the Word, moved to tears, humbled before God — prefigures the heart of Jesus. "Come unto me, all ye that are weary and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls" (Matthew 11:28–29). Christ is meek, lowly, tender — not weak, but strong enough to be vulnerable. A king who weeps over the city that will reject him; a Messiah who is pierced for our transgressions (Isaiah 53:5). The tenderness that Huldah recognized in Josiah is the hallmark of the King who came to redeem us.',
        },
        {
          kind: 'carry',
          html:
            'In a world that teaches us to armor ourselves, to show no weakness, to appear invulnerable — Josiah teaches a different way. His tenderness, his tears, his willingness to be broken by the Word — these are the very things the Lord honors. What would it cost you to let your heart be tender? To weep over the distance between what is and what should be? To humble yourself before the Lord?',
        },
        {
          kind: 'reflection',
          id: '22-tender',
          prompt: 'When have you experienced a tender heart as strength rather than weakness? What did it make possible that hardness of heart could not?',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Christ Connection: The Word Made Flesh ──────────────────────────── */
    {
      ref: 'Isaiah 53 & John 1',
      title: 'The Book Lost and Found in the Word Made Flesh',
      blocks: [
        {
          kind: 'commentary',
          id: '22-word-flesh',
          html:
            'The Book of the Law was lost in the house of the Lord — hidden away, forgotten. And when it was found, it pierced the heart of a king and called a nation back to covenant. But there is a deeper pattern here, one that echoes through the whole of Scripture: the Word itself — not merely written on parchment, but made flesh — would be the final Book that restores the broken covenant.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth. (John 1:14)'),
          ],
        },
        {
          kind: 'commentary',
          id: '22-word-flesh-comment',
          html:
            'John opens his gospel with the astonishing declaration that the Word — the divine Logos, the thought and will of God — became flesh. The Book that was lost and found in a temple now walks the earth as a person. He is the Law made incarnate, not as a set of rules to condemn, but as grace and truth to restore.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart. (Hebrews 4:12)'),
          ],
        },
        {
          kind: 'commentary',
          id: '22-sharper-sword',
          html:
            'When Josiah heard the words of the Book of the Law, his heart was pierced. He tore his clothes. He wept. This is what it means to encounter the Word: to be pierced through, to have the deepest parts of us examined and laid bare. And yet — it is not the piercing of a weapon meant to kill, but the piercing of a surgeon&apos;s knife meant to heal. The Word that pierces the heart is sharper than any sword, but it comes to separate what is false from what is true, what is self-serving from what is holy.',
        },
      ],
    },
  ],
};
