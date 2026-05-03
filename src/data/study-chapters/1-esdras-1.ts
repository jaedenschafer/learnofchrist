import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Esdras 1 — The Rise and Fall of the Last Great King
 *
 * 1 Esdras (the Greek Esdras) retells the latter chapters of 2 Chronicles,
 * all of Ezra, and parts of Nehemiah, with one famous addition (the Story
 * of the Three Bodyguards in 1 Esd 3-4). Chapter 1 covers Josiah's great
 * Passover, his death at Megiddo, and the rapid succession of unfaithful
 * kings leading to Jerusalem's destruction by Nebuchadnezzar — paralleling
 * 2 Chr 35-36.
 *
 * The chapter opens at the apex — the most magnificent Passover since Samuel
 * — and closes in exile. It is a study in the fragility of revival, and the
 * power of a single faithful life to illuminate the alternative.
 */
export const FIRST_ESDRAS_1: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 20 },
  intros: [
    'Josiah inherits a kingdom where the law of God has been neglected. He undertakes a great reformation, and the discovery of the book of the Law becomes the catalyst for genuine revival. He cleanses the temple, tears down the idols, and calls the people to a feast of remembrance — a Passover kept with such care and expense that it will be remembered as the greatest since the days of Samuel the Prophet. For one shining moment, it seems the covenant might be renewed.',
    'But the very height of Josiah&apos;s reign marks its turning point. A military campaign against Egypt ends not in triumph but in death. Josiah falls at Megiddo — the same valley that will one day be called Armageddon, the gathering place of final conflict. And with him falls the spiritual center of the nation. His successors are appointed by foreign powers. Kings do evil and refuse to listen to the prophets. Within decades, Jerusalem is besieged, the temple is violated, and the people are marched into exile in Babylon. The great king&apos;s revival becomes a memory of what might have been — a warning that one generation&apos;s faithfulness cannot sustain a nation unless the next generation chooses faith anew.',
  ],

  sections: [
    /* ─── 1 Esdras 1:1–13 — Josiah's Great Passover ──────────────────── */
    {
      ref: '1 Esdras 1:1–13',
      title: 'Josiah&apos;s Great Passover',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('Josias held the feast of the passover in Jerusalem unto his Lord', 'josiah-passover'),
                t(': and offered the passover, '),
                hy('being an hundred and eighty thousand', 'passover-scale'),
                t(', and four thousand sheep.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josiah-passover',
          html:
            'Josiah does not merely keep the Passover; he holds a feast in honor of God. The verb suggests not a duty performed but a celebration given. The scale is overwhelming—180,000 lambs and 4,000 sheep, all from the royal treasury. This is not a memorial for the wealthy; it is a gift to the poor, a way of saying: <em>let every family, from the least to the greatest, remember what God has done.</em>',
        },
        {
          kind: 'commentary',
          id: 'passover-scale',
          html:
            'The numbers are staggering. Even allowing for some textual exaggeration in the retelling (this is the Greek version of the text), the order of magnitude is clear: Josiah gives lavishly. The Passover becomes not a burden imposed by the king but a gift from him. He makes it possible for every household to remember and celebrate.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('And they feasted and made merry, and '),
                hg('the Levites and the priests gave praise unto the Lord day by day', 'priestly-praise'),
                t(', singing loud unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'priestly-praise',
          html:
            'The feast is not silent. It is filled with singing, with the voices of the Levites and priests lifted in praise. Day after day, the temple resonates with song. The people do not rush through the Passover as though it were a legal obligation. They dwell in it. They celebrate. They let their worship be heard.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 13,
              spans: [
                t('So '),
                hg('the things that were spoken concerning Israel, Judas, and Jerusalem', 'fulfilled-word'),
                t(', were fulfilled in the days of Josias.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fulfilled-word',
          html:
            'The Chronicler steps back and makes an interpretive claim: the words spoken by the prophets <em>about</em> Israel are being fulfilled now. The covenant is being renewed. The God who spoke through the prophets is being honored. For a moment, the nation and its king are aligned with the purpose God has always held for them.',
        },

        {
          kind: 'hebrew',
          id: 'pesach',
          title: 'Pesach — "Passover"',
          script: 'פֶּסַח',
          translit: '<strong>Pesach</strong> · Passover; the festival commemorating the deliverance from Egypt',
          description:
            'The Passover marks the night when the Lord passed over the homes of Israel, striking down the firstborn of Egypt but sparing those under the blood of the lamb (Exodus 12). Every Passover is a reenactment of that deliverance, a covenant renewal, a memory that binds the people to their God. To keep Pesach faithfully is to declare: <em>we are God&apos;s people, redeemed and chosen.</em>',
        },

        {
          kind: 'christ',
          id: 'christ-lamb',
          title: 'Christ Connection — The Passover Lamb',
          html:
            'Josiah&apos;s Passover points toward a sacrifice far greater than lambs. Paul writes, "Christ our passover is sacrificed for us" (1 Corinthians 5:7). The blood that marked the doorposts of Israel foreshadowed the blood of Christ, shed on the cross for all who believe. Where the Passover lamb protected one household from one plague, Christ&apos;s blood protects all believers from death itself — eternal death. Every memorial feast in the Old Testament is a shadow of the feast of the Lamb.',
        },

        {
          kind: 'carry',
          html:
            'Josiah knew something the later kings forgot: memory is not nostalgia. Memory is power. To remember what God has done is not to live in the past; it is to anchor yourself in something true and unchanging while the present rages around you. What acts of God are worth remembering in your own story? What feast of remembrance do you keep — a moment each week, each year, when you deliberately say: <em>God, you were faithful then. You are faithful now.</em>',
        },

        {
          kind: 'reflection',
          id: 'remember-faith',
          prompt:
            'What has God done in your life that is worth remembering? How does that remembrance strengthen your faith when you face what seems impossible now?',
        },
      ],
    },

    /* ─── 1 Esdras 1:14–35 — The Order of Priests and Levites ──────────── */
    {
      ref: '1 Esdras 1:14–35',
      title: 'The Order of Priests and Levites',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And Josias appointed the priests in their vestments, and the Levites in their courses, as it was written in the book of Moses, to serve in the house of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'priestly-order',
          html:
            'Josiah does not leave the worship to chance or custom. He appoints the priests and Levites according to <em>the book of Moses</em> — the written word. He is deliberately restoring not what the people think is right, but what God has commanded. This is the heart of reformation: not innovation, but obedience to what was always written.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('And he said unto the Levites, the teachers of all Israel, which were holy unto the Lord, '),
                hg('Put the holy ark of the Lord into the house which Solomon the son of David king of Israel did build', 'ark-restored'),
                t(': it shall not be a burden upon your shoulders.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ark-restored',
          html:
            'The ark — the most sacred object in Israel, the throne of God&apos;s presence — has been moved or hidden during the unfaithful reigns. Josiah restores it to its proper place in the temple. The holiest thing is being returned to where it belongs. And he tells the Levites: you are called to serve, not to be crushed. The burden of the sacred is not meant to weigh you down; it is meant to lift you up.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 16,
              spans: [
                t('Now prepare yourselves by your families, and kindreds, after your courses, according to the writing of David king of Israel, and according to the writing of Solomon his son:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And '),
                hg('stand in the sanctuary according to the several divisions of the families of your fathers of your brethren', 'divisions-families'),
                t(', the people, and the parts of the family of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'divisions-families',
          html:
            'The worship is not chaotic. It follows the pattern given by David and Solomon — orderly, structured, yet not cold. Each family has its place. Each division of the Levites has its role. The sanctuary becomes a choreography of worship, with every part fitted to every other part.',
        },

        {
          kind: 'greek',
          id: 'divine-order',
          title: 'Taxis — "Order" or "Arrangement"',
          script: 'τάξις',
          translit: '<strong>Taxis</strong> · order; arrangement; sequence; a position held in an ordered structure',
          description:
            'The Greek word taxis carries both the meaning of order and of honor. To have a place in the taxis is to have a station, a role, a dignity. Josiah restores not just worship, but the dignity of those who serve. Each Levite, each priest, knows their place not as a limitation but as a gift.',
        },

        {
          kind: 'carry',
          html:
            'We often feel that order and structure constrain us. But Josiah shows us something different: the structure of worship, when it follows God&apos;s design, enables freedom. You can sing fully when you know your part. You can serve fully when your role is clear. The architecture of worship is not meant to crush us but to give us a place where we belong.',
        },

        {
          kind: 'reflection',
          id: 'order-worship',
          prompt:
            'How has structure in worship — liturgy, tradition, a regular practice — helped you encounter God rather than hindered you? What "order" in your own life has freed you to serve more fully?',
        },
      ],
    },

    /* ─── 1 Esdras 1:35–45 — Josiah Slain at Megiddo ─────────────────── */
    {
      ref: '1 Esdras 1:35–45',
      title: 'Josiah Slain at Megiddo',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 35,
              spans: [
                t('After all these things, when '),
                hg('Josias had prepared the temple, Necho king of Egypt came up to make war', 'necho-war'),
                t(': and Josias went out against him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'necho-war',
          html:
            'At the height of his power, at the moment of his greatest triumph, the king of Egypt marches toward Carchemish in the north — not against Judah, but against Assyria. The world&apos;s empires are shifting. And Josiah, flush with the success of the Passover, moves to intercept him.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 36,
              spans: [
                t('But he sent ambassadors to him, saying, What have I to do with thee, thou king of Judah? I come not against thee this day, but against the house wherewith I have war; and God hath commanded me to make haste: forbear thou from meddling with God, who is with me, that he destroy thee not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'necho-warning',
          html:
            'Necho&apos;s message is astonishing: "God hath commanded me to make haste. Forbear from meddling with God, who is with me." A pagan king claims that God has commissioned him and warns Josiah not to oppose God&apos;s work. By the standards of the ancient world, this is extraordinary. Yet Necho makes the claim plainly.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 37,
              spans: [
                t('Nevertheless Josias would not turn his face from him, but '),
                hp('disguised himself, that he might fight with him', 'josiah-disguise'),
                t(', and hearkened not unto the words of Necho from the mouth of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josiah-disguise',
          html:
            'Josiah refuses. He disguises himself — perhaps in hope that he will not be recognized and killed, perhaps in arrogance that his reformation has made him invincible. And notice the diagnosis the text offers: he "hearkened not unto the words of Necho from the mouth of God." The king who has just celebrated the greatest Passover, who has just ordered the worship of Israel according to the law — that king refuses to hear God&apos;s word when it comes from a pagan king&apos;s mouth.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 38,
              spans: [
                t('And he joined battle with him in the plain of Megiddo, and the princes came out against him with the chariots of the king.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And when Josias had gone out of his chariot, the archers shot at him, and he was wounded in the battle, and removed out of his chariot.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('Then his servants took him up, and brought him to Jerusalem, and he was buried in his father&apos;s sepulchre.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And all Judea mourned Josias: and '),
                hg('Jeremy the prophet bewailed Josias with lamentation', 'jeremiah-lament'),
                t('; and the chief men with the women made a lamentation for him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-lament',
          html:
            'Jeremiah — the prophet who will soon proclaim judgment upon Judah, who will stand alone against the nation, who will see Jerusalem fall — weeps for Josiah. Not as an enemy fallen, but as a righteous king taken in the midst of his good work. A prophet grieves.',
        },

        {
          kind: 'hebrew',
          id: 'megiddo',
          title: 'Megiddo — The Valley of Conflict',
          script: 'מְגִדּוֹ',
          translit: '<strong>Megiddo</strong> · a strategic valley; site of many ancient battles; called Armageddon in Revelation',
          description:
            'Megiddo is a place of power and peril in Scripture. It was where Deborah and Barak defeated Sisera. It was where Judah&apos;s kings fought many battles. And it is the place where Josiah dies — struck by archers, carried home dying, buried in his fathers&apos; sepulchers. In the Book of Revelation, this valley is called Armageddon, the gathering place of the final conflict (Revelation 16:16). That Josiah dies in Megiddo is a sign: the moment when the kingdom refuses to listen to God is the moment when it begins to die.',
        },

        {
          kind: 'carry',
          html:
            'Josiah&apos;s death is not the consequence of disobedience to God&apos;s written law — he has kept that law more faithfully than perhaps any king before him. It is the consequence of <em>refusing to listen</em> when God speaks through an unexpected voice. He has heard God clearly through written revelation. He has kept the Passover in meticulous obedience. But he cannot hear God&apos;s warning when it comes from a pagan king. Pride, perhaps. Or the hard assumption that obedience in the past guarantees wisdom in the present. Listening is not a one-time act. It must be renewed in every moment, in every circumstance, through every voice God chooses to speak through.',
        },

        {
          kind: 'reflection',
          id: 'listen-unlikely',
          prompt:
            'When has God&apos;s truth come to you through an unlikely or unwelcome source? Did you listen, or did you, like Josiah, refuse? What was that moment like?',
        },
      ],
    },

    /* ─── 1 Esdras 1:46–53 — The Unfaithful Successors ────────────────── */
    {
      ref: '1 Esdras 1:46–53',
      title: 'The Unfaithful Successors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 46,
              spans: [
                t('And after Josias '),
                hg('the people took Joachaz his son, and made him king instead of his father', 'joachaz-chosen'),
                t(': but he reigned only three months and ten days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joachaz-chosen',
          html:
            'The people themselves choose Joachaz, perhaps hoping to preserve the spiritual revival. But the choice has no power against Necho. Joachaz is deposed almost immediately. He reigns barely more than a hundred days. The attempt to continue Josiah&apos;s legacy collapses.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 47,
              spans: [
                t('And when the king of Egypt heard that Joachaz was made king, he came down and bound him, and condemned the land in a tribute of an hundred talents of silver and a talent of gold.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And the king of Egypt made Eliakim his brother king of Judah and Jerusalem, and turned his name to Jehoiakim, and took his brother Joachaz and brought him into Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'egypt-control',
          html:
            'Necho moves to consolidate power. Judah is now a vassal state. The king is appointed by Egypt. The treasury is emptied. The people are learning a hard lesson: one king&apos;s devotion, however magnificent, cannot protect a nation whose next generation does not share that devotion.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 49,
              spans: [
                t('And Jehoiakim was '),
                hg('five and twenty years old when he began to reign over Judah and Jerusalem, and he did that which was evil in the sight of the Lord', 'jehoiakim-evil'),
                t('.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And Nebuchodonosor king of Babylon came up against him, and bound him in fetters, and took him to Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiakim-evil',
          html:
            'The Chronicler is brief: Jehoiakim "did that which was evil in the sight of the Lord." Unlike his father Josiah, who sought God, Jehoiakim does not seek Him. The Chronicler does not elaborate on his evils. We are simply told: he did evil. That is enough. And Nebuchadnezzar, the king of Babylon, rises to power and claims vassal states. Judah changes masters — from Egypt to Babylon. The trend is clear and irreversible.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 52,
              spans: [
                t('After him his son Jehoiachin reigned a hundred and ten days, and he did that which was evil in the sight of the Lord.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And at the end of a year king Nebuchodonosor sent and caused him to be brought again to Babylon, and took the holy vessels of the house of the Lord: so Jehoiachin went to Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-fall',
          html:
            'Each king is weaker than the last. Jehoiachin reigns barely more than three months. He does evil. And Nebuchadnezzar takes not only the king but the holy vessels of the temple — the instruments of worship, the treasures. This is more than political defeat. This is the desecration of the holy things.',
        },

        {
          kind: 'greek',
          id: 'basileús',
          title: 'Basileus — "King"',
          script: 'βασιλεύς',
          translit: '<strong>Basileus</strong> · king; ruler; one who reigns',
          description:
            'The Greek word basileus can mean a true ruler, one who governs by wisdom and virtue, or merely a figure on a throne with no real power. By the time of Jehoiakim and Jehoiachin, the kings of Judah are basileus in form only. They are appointed by foreign powers. They serve foreign masters. The title remains, but the reality is gone.',
        },

        {
          kind: 'carry',
          html:
            'The narrative accelerates. Josiah reigns in strength. His successors grow weaker. Joachaz reigns three months. Jehoiakim is a vassal. Jehoiachin reigns barely a hundred days. The pattern is set: refusal to listen leads to the unraveling of everything — not in one catastrophic moment, but in stages. First the king is bound. Then the treasures are taken. Each step strips away more of what seemed permanent, what seemed secure. And yet the people continue in their refusal.',
        },

        {
          kind: 'reflection',
          id: 'legacy-fade',
          prompt:
            'Josiah&apos;s great work fades within a generation. What legacy have you inherited that is already fading? What are you doing to renew it, or to create something that will outlast you?',
        },
      ],
    },

    /* ─── 1 Esdras 1:54–58 — Nebuchadnezzar Takes Jerusalem ────────────── */
    {
      ref: '1 Esdras 1:54–58',
      title: 'Nebuchadnezzar Takes Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 54,
              spans: [
                t('And Sedechias was made king, and he reigned eleven years.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('And at last '),
                hp('Nabuchodonosor king of Babylon carried away captive the remnant that were left of the people', 'exile-babylon'),
                t(', and brake down the walls of Jerusalem, and burnt the house of the Lord, and cut down all her pleasant trees.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exile-babylon',
          html:
            'The narrative, which has been moving swiftly through failed reigns, now moves toward its climax. Nebuchadnezzar besieges Jerusalem. The city falls. The temple — where Josiah kept the greatest Passover in generations — is burned. The walls are torn down. The pleasant trees are cut down. Everything visible, everything that stood as witness to Israel&apos;s glory, is destroyed.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 56,
              spans: [
                t('And he carried them away to Babylon, and '),
                hg('they were servants to him and to his children until the Persians reigned', 'servants-babylon'),
                t(', to fulfil the word of the Lord spoken by the mouth of Jeremy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'servants-babylon',
          html:
            'The people are taken into captivity. They become servants to the king of Babylon. And the text marks a crucial moment: their captivity will last until the Persians reign — a period of seventy years, during which the land will rest and the people will learn, in bondage, what they would not learn in prosperity.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 57,
              spans: [
                t('How when the Lord had accomplished that the land should enjoy her sabbaths, '),
                hg('Cyrus king of Persia, the Lord stirred up his spirit, and he made a proclamation throughout all his kingdom', 'cyrus-stirred'),
                t(','),
              ],
            },
            {
              number: 58,
              spans: [
                t('Saying, '),
                hp('Let him go up, and build the house of the Lord of Jerusalem', 'let-go-up'),
                t(': for the Lord hath said, I am with those that go up.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cyrus-stirred',
          html:
            'Then comes the pivot. After the judgment, after the seventy years of exile, God stirs the spirit of Cyrus, a pagan king. And Cyrus, not claiming to believe in God, nonetheless becomes an instrument of God&apos;s purposes. He opens the way for the people to return and rebuild the temple.',
        },
        {
          kind: 'commentary',
          id: 'let-go-up',
          html:
            'The final words are words of hope: "Let him go up, and build the house of the Lord of Jerusalem: for the Lord hath said, I am with those that go up." It is an open call. The door stands open. Who will answer? Who will leave the security of exile, the lives they have built in Babylon, and rise toward Jerusalem to rebuild?',
        },

        {
          kind: 'hebrew',
          id: 'shabbat',
          title: 'Shabbat — "Rest" or "Sabbath"',
          script: 'שַׁבָּת',
          translit: '<strong>Shabbat</strong> · rest; the seventh day; cessation from labor',
          description:
            'The shabbat is not punishment but blessing — the rhythm that God built into creation and commanded Israel to observe. The land that did not rest in freedom will rest in desolation. Exile becomes, paradoxically, the land&apos;s long sabbath — a period of restoration. The text reminds us: what looks like pure judgment is actually also a kind of mercy.',
        },

        {
          kind: 'christ',
          id: 'christ-restoration',
          title: 'Christ Connection — The Door That Opens',
          html:
            'Cyrus speaks, "Let him go up," but the Word recognizes something deeper. Centuries later, Jesus will speak the same language of ascent: "I have overcome the world" (John 16:33). And at the ascension, we hear again: the disciples will receive power from on high (Luke 24:49), and they are told to "go" and "teach all nations" (Matthew 28:19) — another "go up," another opening of the way. The call to rise, to ascend toward the house of God, echoes throughout Scripture. And the One who makes this call definitively is Christ Himself: "If I be lifted up from the earth, will draw all men unto me" (John 12:32). The pattern is always the same: judgment, then mercy; exile, then return; death, then resurrection.',
        },

        {
          kind: 'carry',
          html:
            'The chapter ends not with the destruction of Jerusalem but with an open door. For anyone reading this in exile — in Babylon, or in any age of apparent defeat, any season where the temple seems burned and hope seems lost — the message is: what looks like the end of the story is actually a threshold. The God who brought judgment is the same God who promised return. Seventy years have a boundary. They will end. The door will open. And you will hear the call: "Let him go up."',
        },

        {
          kind: 'reflection',
          id: 'door-opens',
          prompt:
            'What in your life feels like exile — a place of captivity you have made peace with? What would it mean to answer the call "Let him go up" and begin the journey home? What would you have to leave behind?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Esdras 1',
    quote:
      'And Josias held the feast of the passover in Jerusalem unto his Lord: and offered the passover, being an hundred and eighty thousand, and four thousand sheep. And they feasted and made merry, and the Levites and the priests gave praise unto the Lord day by day.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 1 · Study Guide',
  },

  hasHebrew: true,
};
