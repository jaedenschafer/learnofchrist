import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 36 — The Fall and the Threshold
 *
 * The Chronicler brings the entire Old Testament historical narrative to its close
 * with the final chapter of the kingdom of Judah. Four kings reign in rapid succession
 * — Jehoahaz, Jehoiakim, Jehoiachin, Zedekiah — each doing evil in the sight of the
 * Lord. Jerusalem falls. The temple is burned. The people are carried to Babylon.
 * It is the end of an era, the completion of everything Samuel and Kings have been
 * building toward.
 *
 * Yet the Chronicler does not end here. After the calamity, after the seventy years
 * of silence, comes Cyrus king of Persia, and the Lord stirs his spirit to make a
 * proclamation: "Let him go up." The door opens. The covenant survives judgment.
 * And for anyone who reads these words in exile, or after exile, the message is clear:
 * the God of Israel is still God. The promise still stands. The future is not closed.
 */
export const CHRONICLES_2_36: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 36,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 20 },
  intros: [
    'The kingdom of Judah stands at the edge of a precipice. The prophets have come and gone — Jeremiah, Zephaniah, Nahum, Habakkuk — all warning of judgment, all calling the people and their kings to repent. And for nearly four centuries, through the reign of the good kings, through revivals and reforms, there was a thin thread of hope. But that thread is about to break.',
    'In this final chapter of Old Testament history, we see the last four kings of Judah. None of them heed the voice of God. Instead, they do evil in the sight of the Lord, and the judgment that has been suspended for so long finally falls. Jerusalem is taken. The temple is burned. The vessels of the house of God are carried away to Babylon. The land is emptied. The people are slaves.',
    'It seems like an ending. It sounds like defeat. But the Chronicler, who has told us the story of the kingdom since David, ends not with destruction but with a door opening — the decree of Cyrus, and a word that echoes across the centuries: "Let him go up." Even in exile, even after calamity, the God of Israel has not abandoned His people. This is how the Old Testament closes: not with the last word belonging to the king of Babylon, but to the Lord of heaven, stirring the heart of a pagan king to send His people home.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 36',
    quote:
      'The kingdom falls. The temple burns. The people are exiled. Yet in the final word of the Old Testament, God stirs the heart of a pagan king and sends His people home. The promise survives judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 36 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 36:1–4 — Jehoahaz: Three Months of Darkness ──────── */
    {
      ref: '2 Chronicles 36:1–4',
      title: 'Jehoahaz: The First Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(1, 'Then the people of the land took Jehoahaz the son of Josiah, and made him king in his father&apos;s stead in Jerusalem.'),
            plain(2, 'Jehoahaz was twenty and three years old when he began to reign, and he reigned three months in Jerusalem.'),
            plain(3, 'And the king of Egypt put him down at Jerusalem, and condemned the land in an hundred talents of silver and a talent of gold.'),
            plain(4, 'And the king of Egypt made Eliakim his brother king over Judah and Jerusalem, and turned his name to Jehoiakim. And Necho took Jehoahaz his brother, and carried him to Egypt.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoahaz-assembly',
          html:
            'The death of Josiah — one of the kingdom&apos;s great reforming kings — marks a turning point. Now the "people of the land," who supported the reform, attempt to assert their will by choosing Jehoahaz. They bypass the older sons. They choose the young one. But their choice has no power against the king of Egypt. A king who sits on the throne of David can no longer act as an independent power. Judah is already a vassal.',
        },
        {
          kind: 'commentary',
          id: 'jehoahaz-exile',
          html:
            'Jehoahaz reigns only three months. He is deposed and taken to Egypt — the first king of Judah carried into exile. The pattern is set: disobedience brings judgment. But notice the form: it does not come as direct divine punishment in a single moment. It comes through the machinery of empires. God works through history, through the rise and fall of nations, to bring His people to account.',
        },
        {
          kind: 'hebrew',
          id: 'jehoahaz-galut',
          title: 'Galut — "Exile" or "Banishment"',
          script: 'גָּלוּת',
          translit: '<strong>Galut</strong> · exile; captivity; the state of being separated from one&apos;s homeland',
          description:
            'The word <em>galut</em> appears in Jewish experience not as a single moment but as the framework of a people separated from their land. Jehoahaz is the first to go into it. He will not return. But for the people of Israel, galut becomes not the end of their story but a central experience — exile becomes, paradoxically, a place where faith deepens and the promise is refined.',
        },
        {
          kind: 'carry',
          html:
            'We often expect judgment to come like a thunderbolt — sudden, unmistakable, divine. But judgment often comes through what looks like ordinary history: politics, the movements of empires, the choices of men. God is not less present in these moments. He is working through them.',
        },
        {
          kind: 'reflection',
          id: 'jehoahaz-reflection',
          prompt: 'When has judgment or correction come to you not in a dramatic moment, but through the ordinary consequences of choices — your own or others&apos;? Did you see God&apos;s hand in those consequences?',
        },
      ],
    },

    /* ─── 2 Chronicles 36:5–8 — Jehoiakim: Evil in the Sight of the Lord ─── */
    {
      ref: '2 Chronicles 36:5–8',
      title: 'Jehoiakim: The King Who Refuses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(5, 'Jehoiakim was twenty and five years old when he began to reign, and he reigned eleven years in Jerusalem: and he did that which was evil in the sight of the Lord his God.'),
            {
              number: 6,
              spans: [
                t('Against him came up Nebuchadnezzar king of Babylon, and bound him in fetters, to carry him to Babylon.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Nebuchadnezzar also carried of the vessels of the house of the Lord to Babylon, and put them in his temple at Babylon.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Now the rest of the acts of Jehoiakim, and his abominations which he did, and that which was found in him, behold, they are written in the book of the kings of Israel and Judah: and Jehoiachin his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiakim-evil',
          html:
            'The Chronicler wastes no words on Jehoiakim. He "did that which was evil in the sight of the Lord his God." Unlike the reformers — unlike Josiah, who sought the Lord — Jehoiakim does not seek God. His reign is marked by the word "abominations" — and the text does not elaborate. We are simply told: he did evil. That is enough.',
        },
        {
          kind: 'commentary',
          id: 'nebuchadnezzar-vessels',
          html:
            'Nebuchadnezzar comes. He binds the king in fetters — Jehoiakim becomes a prisoner in his own land, then is taken to Babylon. And the vessels of the house of the Lord — the very instruments of worship, the sacred objects, the treasures — are carried away to a pagan temple. This is more than military defeat. This is desecration. The holy things are taken to a place of exile. It is a sign that the temple itself will not stand much longer.',
        },
        {
          kind: 'hebrew',
          id: 'jehoiakim-keli',
          title: 'Keli — "Vessel" or "Instrument"',
          script: 'כְלִי',
          translit: '<strong>Keli</strong> · vessel; container; an instrument made for a particular purpose',
          description:
            'The <em>keli</em> of the house of the Lord were not merely objects. They were consecrated vessels — the lampstands, the altar of incense, the golden table for the bread of the presence. Each one was designed for worship, for the encounter between God and His people. To take them to Babylon is to say: this sanctuary is finished. The vessels of worship are going into captivity.',
        },
        {
          kind: 'carry',
          html:
            'Refusal to repent leads to the unraveling of everything. Not in one moment, but in stages. First the king is bound. Then the treasures are taken. Each step strips away more of what seemed permanent, what seemed secure. And yet — and this is crucial — the story does not end here.',
        },
        {
          kind: 'reflection',
          id: 'jehoiakim-reflection',
          prompt: 'What "sacred vessels" — things you once held as precious and permanent — have been taken from you when you refused to turn toward God? What did you learn in that loss?',
        },
      ],
    },

    /* ─── 2 Chronicles 36:9–10 — Jehoiachin: Eight Days King ─────────────── */
    {
      ref: '2 Chronicles 36:9–10',
      title: 'Jehoiachin: The Child King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(9, 'Jehoiachin was eight years old when he began to reign, and he reigned three months and ten days in Jerusalem: and he did that which was evil in the sight of the Lord.'),
            plain(10, 'And when the year was expired, king Nebuchadnezzar sent, and brought him to Babylon, with the goodly vessels of the house of the Lord, and made Zedekiah his brother king over Judah and Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-child',
          html:
            'The Chronicler notes that Jehoiachin was eight years old — though other texts suggest eighteen, which would make more sense for a reigning king. But whether child or young man, he ruled barely more than a hundred days. He did evil. He was taken to Babylon. Another king replaced him. The kingdom is crumbling in stages, each king weaker than the last, each reign shorter, each descent faster. The narrative is accelerating toward the end.',
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-vessels',
          html:
            'Once again, the vessels of the house of the Lord are carried away. Once again, the sacred things are taken. This is not a quick disaster. This is a slow stripping away, a progressive desecration. The Chronicler mentions it again to emphasize: the house of the Lord is being emptied. Its treasures go to Babylon. Only the shell remains.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we are too young to save ourselves. Sometimes the moment demands a strength we do not yet have. The child king, whatever his heart may be, cannot stand against the judgment that is falling on the nation. This is the reality of being part of a community — we are caught up in larger currents, shaped by the choices of those before us. The only escape is repentance, and it must come from the king and the people together.',
        },
        {
          kind: 'reflection',
          id: 'jehoiachin-reflection',
          prompt: 'Have you ever been caught in consequences you did not create — the results of someone else&apos;s choices, or the momentum of history? How did you respond when you were too young or too powerless to change the course?',
        },
      ],
    },

    /* ─── 2 Chronicles 36:11–14 — Zedekiah: The King Who Hardened His Heart ──── */
    {
      ref: '2 Chronicles 36:11–14',
      title: 'Zedekiah: A Hardened Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(11, 'Zedekiah was twenty and one years old when he began to reign, and reigned eleven years in Jerusalem.'),
            {
              number: 12,
              spans: [
                t('And he did that which was evil in the sight of the Lord his God, and '),
                hg('humbled not himself', 'zedekiah-humility'),
                t(' before Jeremiah the prophet speaking from the mouth of the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he also rebelled against king Nebuchadnezzar, who had made him swear by God: but he '),
                hy('stiffened his neck, and hardened his heart', 'zedekiah-heart'),
                t(' from turning unto the Lord God of Israel.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Moreover all the chief of the priests, and the people, transgressed very much after all the abominations of the heathen; and polluted the house of the Lord which he had hallowed in Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zedekiah-humility',
          html:
            'The Chronicler offers a precise diagnosis of Zedekiah&apos;s failure: he did not humble himself before Jeremiah the prophet. Jeremiah was there — preaching, warning, speaking the word of the Lord — and Zedekiah had the choice. He could listen. He could turn. He could repent. But he refused. The prophet spoke from the mouth of the Lord, and the king would not hear.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-heart',
          html:
            'The language here is critical: Zedekiah "stiffened his neck" and "hardened his heart." These are not passive states. These are acts of will. The king chooses not to turn. He has sworn an oath before God to Nebuchadnezzar, but he breaks that oath and rebels. He has a chance to obey God through submission to the king of Babylon — the very mechanism by which God is bringing judgment — and he refuses. His hardening of heart is not a mysteriously imposed darkness; it is his own refusal to bend.',
        },
        {
          kind: 'hebrew',
          id: 'zedekiah-lev',
          title: 'Lev — "Heart" — The Seat of Choice',
          script: 'לֵב',
          translit: '<strong>Lev</strong> · heart; the inner will; the seat of intention, memory, and moral choice',
          description:
            'In Hebrew thought, the <em>lev</em> (heart) is not the seat of emotion but of will and intention. To "harden the heart" is not poetic language for sadness or stubbornness in the modern sense; it is to choose against God with full knowledge and deliberation. Zedekiah&apos;s hardening is a deliberate turning away, a choice to close the door that God is holding open.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah stands and speaks, week after week. He tells the king what God has said. And the king chooses to refuse. This is the tragedy of free will: God sends prophets, opens doors, offers paths — and the heart can choose to close itself. The prophecy is not something imposed. It is something rejected. And when we reject the voice of God long enough, we become incapable of hearing it.',
        },
        {
          kind: 'reflection',
          id: 'zedekiah-reflection',
          prompt: 'Have you ever had someone speak God&apos;s truth to you — in a sermon, a friend&apos;s words, an inner conviction — and chosen to harden your heart against it? What was that moment like? What made you choose not to listen?',
        },
      ],
    },

    /* ─── 2 Chronicles 36:15–21 — The Burning and the Seventy-Year Sabbath ──── */
    {
      ref: '2 Chronicles 36:15–21',
      title: 'No Remedy: Judgment and the Land&apos;s Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 15,
              spans: [
                t('And the Lord God of their fathers '),
                hp('sent to them by his messengers, rising up betimes, and sending', 'no-remedy-1'),
                t('; because he had compassion on his people, and on his dwelling place:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But they mocked the messengers of God, and despised his words, and misused his prophets, until the wrath of the Lord arose against his people, '),
                hp('till there was no remedy', 'no-remedy'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Therefore he brought upon them the king of the Chaldees, who slew their young men with the sword in the house of their sanctuary, and had no compassion upon young man or maiden, old man, or him that stooped for age: he gave them all into his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-36-mid-17',
          html:
            '<p>A turning point shifts focus from building to sustaining what was built.</p>',
        },
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 18,
              spans: [
                t('All the vessels of the house of God, great and small, and the treasures of the house of the Lord, and the treasures of the king, and of his princes; all these he brought to Babylon.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they burnt the house of God, and brake down the wall of Jerusalem, and burnt all the palaces thereof with fire, and destroyed all the goodly vessels thereof.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And them that had escaped from the sword he carried away to Babylon; where they were servants to him and his sons until the reign of the kingdom of Persia:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('To fulfil the word of the Lord by the mouth of Jeremiah, until the land had enjoyed her '),
                hg('sabbaths', 'sabbaths-rest'),
                t(': for as long as she lay desolate she kept sabbath, to fulfil seventy years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-remedy-1',
          html:
            'This is one of the most powerful passages in Scripture. The Lord "sent to them by his messengers, rising up betimes, and sending" — the verb is repeated twice, emphasizing persistence. Again and again, He sent prophets. Again and again, they came with warnings, pleas, calls to repentance. "Because he had compassion on his people." God does not want to judge them. He sends messengers because He is trying to save them.',
        },
        {
          kind: 'commentary',
          id: 'no-remedy',
          html:
            'And yet, "till there was no remedy." The phrase marks a threshold — the point at which repentance is no longer possible because the hardening has become too great. The people mocked the messengers, despised the words, misused the prophets. And the result is "no remedy" — <em>no way back</em>. The judgment falls. There is nothing left to do but endure it.',
        },
        {
          kind: 'commentary',
          id: 'babylon-king',
          html:
            'The king of the Chaldees — Nebuchadnezzar — becomes the instrument of judgment. His army shows "no compassion" — they kill without regard for age or innocence. The temple, the heart of Israel&apos;s worship, is burned. The walls are broken down. The palaces are consumed. Everything visible, everything that stood as a witness to Israel&apos;s glory, is destroyed. And the people who survive are taken to Babylon as slaves.',
        },
        {
          kind: 'commentary',
          id: 'jeremiah-sabbath',
          html:
            'But then — and this is the pivot — the Chronicler reveals the hidden meaning. The destruction "fulfills the word of the Lord by the mouth of Jeremiah." Jeremiah had warned that unless the people gave the land its sabbath rest (as commanded in Leviticus 25), God would give it rest Himself. For seventy years, the land would lie desolate. No plowing. No harvest. No labor. The land would keep the sabbath that Israel had refused to keep. And the people, in exile, would learn in their bondage what they would not learn in their prosperity: that God alone sustains. That the land is not theirs to exploit. That rest, not endless striving, is the rhythm God has ordained.',
        },
        {
          kind: 'hebrew',
          id: 'sabbaths-rest',
          title: 'Shabbat — "Rest" — The Rhythm of Life',
          script: 'שַׁבָּת',
          translit: '<strong>Shabbat</strong> · the sabbath; rest; the seventh day; cessation from labor',
          description:
            'The <em>shabbat</em> is not a punishment but a blessing — the rhythm that God built into creation itself. Every seventh day, rest. Every seventh year, the land rests. Every fiftieth year, jubilee — all debts canceled, all slaves freed, all land returned to its original owners. The land that did not rest in freedom will rest in desolation. Exile becomes, paradoxically, the land&apos;s long sabbath — a time of restoration that the people, scattered as slaves, will not see.',
        },
        {
          kind: 'carry',
          html:
            'The message for exiles — for anyone reading this in Babylon, or decades later in Jerusalem, or in any era of apparent defeat — is this: what looks like punishment is not the last word. What looks like the end of the story is actually a threshold. The land will sleep. The people will wait. But the promise remains. The God who brought judgment is the same God who promised return. The seventy years have a boundary. They will end.',
        },
        {
          kind: 'reflection',
          id: 'no-remedy-reflection',
          prompt: 'What seasons in your life have felt like "no remedy" — situations where you could not fix what was broken, could only endure? How did you learn to wait, to rest, to trust that the season would change?',
        },
      ],
    },

    /* ─── 2 Chronicles 36:22–23 — Cyrus: "Let Him Go Up" ───────────────────── */
    {
      ref: '2 Chronicles 36:22–23',
      title: 'The Open Door: Cyrus and Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            {
              number: 22,
              spans: [
                t('Now in the first year of Cyrus king of Persia, that the word of the Lord spoken by the mouth of Jeremiah might be accomplished, the Lord stirred up the spirit of Cyrus king of Persia, that he made a proclamation throughout all his kingdom, and put it also in writing, saying,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Thus saith Cyrus king of Persia, All the kingdoms of the earth hath the Lord God of heaven given me; and '),
                hp('he hath charged me to build him an house at Jerusalem, which is in Judah', 'cyrus-building'),
                t('. '),
                hp('Who is there among you of all his people? let the Lord his God be with him, and let him go up', 'cyrus-let-go-up'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cyrus-spirit',
          html:
            'The Chronicler is clear about what happens: "The Lord stirred up the spirit of Cyrus king of Persia." It is not Cyrus&apos;s initiative. It is not the result of diplomatic pressure or political calculation. It is God. God stirs the heart of the pagan king. God moves the instruments of history. God opens the door that seemed sealed forever. The seventy years are complete. The moment has come.',
        },
        {
          kind: 'commentary',
          id: 'cyrus-building',
          html:
            'Remarkably, Cyrus speaks as if God has "charged me to build him an house at Jerusalem." Cyrus, a Persian pagan, becomes an instrument of God&apos;s purposes. He does not claim to believe in the God of Israel. He does not convert. But his will is moved to serve God&apos;s purpose: to rebuild the temple. This is the sovereign hand of God at work in history, using even those who do not know Him to accomplish His will.',
        },
        {
          kind: 'commentary',
          id: 'cyrus-let-go-up',
          html:
            'But the final word is crucial: "Let him go up." It is an open call. Who among the people of God will respond? Who will leave the security of Babylon, the homes they have built in exile, the lives they have established, and go up to Jerusalem to rebuild? Not all will. Some will stay. Some will choose the comfort of exile. But the door is open. The choice is offered. "Let him go up."',
        },
        {
          kind: 'hebrew',
          id: 'cyrus-alah',
          title: 'Alah — "To Go Up" — The Direction of Hope',
          script: 'עָלָה',
          translit: '<strong>Alah</strong> · to go up; to ascend; to rise; the direction toward Jerusalem and the temple',
          description:
            'The verb <em>alah</em> carries theological weight. To "go up" to Jerusalem is not merely geographical direction but spiritual orientation. It means turning toward the house of God, toward covenant, toward home. It is an ascent — from the low place of exile to the high place of restoration. The final word of the Old Testament invites the people to rise.',
        },
        {
          kind: 'christ',
          id: 'cyrus-christ',
          title: 'Christ Connection — The King Who Calls "Let Him Go Up"',
          html:
            'Cyrus speaks, and the people hear, "Let him go up." But the Chronicler writes this knowing what comes centuries later: another King, another opening of the way, another call to rise. When Jesus ascends to heaven, He sends word to His disciples: "Go ye therefore, and teach all nations" (Matthew 28:19). And at the end of Scripture, in Revelation, we hear again: "To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne" (Revelation 3:21). The call to "go up" echoes throughout Scripture. It is the call of every age: arise, leave behind the place of captivity, ascend toward the house of God. And the One who makes this call definitively is the risen Christ, the True Cyrus, who has opened the way for all who will enter.',
        },
        {
          kind: 'carry',
          html:
            'The door stands open. It may have seemed closed forever. You may have settled into exile, made your peace with captivity, stopped believing that return was possible. But God stirs the hearts of the unlikeliest servants. The way opens. And you hear the call: "Let him go up." The only question now is: will you answer? Will you leave the familiar, the secure, the false comfort of bondage, and rise toward home?',
        },
        {
          kind: 'reflection',
          id: 'cyrus-reflection',
          prompt: 'What in your life feels like exile — a place of captivity or diminishment you have made peace with? What would it mean to answer the call "Let him go up" and begin the journey home? What would you have to leave behind?',
        },
      ],
    },
  ],
};
