import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 18 — Hezekiah's Reforms and Sennacherib's Threat
 *
 * Hezekiah becomes king at twenty-five and immediately sets himself against
 * the idolatries that plague the northern and southern kingdoms. He tears down
 * the high places, destroys carved images, cuts down the Asherah groves — and
 * even shatters the bronze serpent that Moses himself had made, because Israel
 * has turned it into an idol. His trust in the Lord is unshakable. Then comes
 * Sennacherib, king of Assyria, with mockery and psychological warfare. Through
 * his spokesman Rabshakeh, the enemy propagandizes: Your god is no different
 * from ours. We have taken every city. Trust in the Lord is folly. Yet the
 * people, bound by the king's command, hold their peace — the first and most
 * powerful defense against the enemy's lies.
 */
export const KINGS_2_18: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 18,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 17 },
  intros: [
    'The kingdom of Judah has wandered far into idolatry. Kings before Hezekiah have tolerated, even encouraged, the worship of foreign gods and the fertility cults that corrupted Israel&apos;s covenant with the Lord. Altars to Baal dot the hillsides. The serpent of bronze — the very instrument of God&apos;s mercy in the wilderness — has become an object of worship. The nation is sick, the temple neglected, and the people&apos;s hearts divided.',
    'And then Hezekiah comes to the throne. In the very first years of his reign, he acts with the speed and courage of a man seized by religious conviction. He closes the temple doors, he purifies the sanctuary, he destroys every idol — and he does something striking: he shatters the brazen serpent itself, an act that seems almost dangerous in its boldness. Only a king who trusts the Lord absolutely could destroy an ancient holy artifact because it had become an occasion for sin.',
    'But then a greater danger approaches: Sennacherib of Assyria, the most powerful empire on earth, comes to destroy Judah. The king of Assyria does not come with sword alone. He comes with words — with propaganda so skillful that it threatens to unmake faith itself. This is the story of a kingdom tested not by military might, but by the power of a lie.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 18',
    quote:
      'Hezekiah broke the idols and trusted in the Lord with a whole heart. But trust was tested when Sennacherib&apos;s spokesman mocked: "Your god cannot save you as no god has saved any nation from my hand." Yet the king commanded silence, and the people, holding their peace, became an army against the enemy&apos;s words.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 18 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 18:1–8 — Hezekiah's Reformations ─────────────────────── */
    {
      ref: '2 Kings 18:1–8',
      title: 'Hezekiah the Reformer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              1,
              'Now it came to pass in the third year of Hoshea son of Elah king of Israel, that Hezekiah the son of Ahaz king of Judah began to reign.',
            ),
            plain(
              2,
              'Twenty and five years old was he when he began to reign; and he reigned twenty and nine years in Jerusalem. His mother&apos;s name also was Abi the daughter of Zachariah.',
            ),
            plain(
              3,
              'And he did that which was right in the sight of the Lord, according to all that David his father had done.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hezekiah-young-king',
          html:
            'Hezekiah ascends the throne at twenty-five, an age at which most men are still finding their way. He has inherited a kingdom weakened by his father Ahaz&apos;s apostasy — a king who not only tolerated idolatry but actively promoted it. Yet Hezekiah does not negotiate with the corruption he has inherited. He acts as though his kingship itself is a covenant renewal, calling Judah back to the ways of David. The phrase "according to all that David his father had done" is a standard of excellence. Hezekiah will be measured against the greatest king in Israel&apos;s memory.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 4,
              spans: [
                t('He removed the high places, and brake the images, and cut down the groves, and brake in pieces the brasen serpent that Moses had made: for unto those days the children of Israel did burn incense to it: and he called it '),
                hy('Nehushtan', '2k18-nehushtan'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: '2k18-nehushtan',
          title: 'Nehushtan — "That Brass Thing"',
          script: 'נְחֻשְׁתָּן',
          translit: '<strong>Nehushtan</strong> · that brass thing; mere bronze',
          description:
            'The word "Nehushtan" is a name, but it is also a judgment. Hezekiah takes the ancient bronze serpent — the thing that saved Israel in the wilderness, that every Jew knew as a sign of God&apos;s mercy — and by calling it "that brass thing," he strips away the reverence with which it had been surrounded. A holy instrument has become an idol. Hezekiah does not merely condemn its worship; he names it rightly, calls it what it truly is without its false sacredness, and destroys it. The act is an act of naming and of mercy: he cuts through the lie that this object holds power.',
        },
        {
          kind: 'commentary',
          id: 'destroying-serpent',
          html:
            'This is one of the boldest religious reforms in Scripture. The brazen serpent was not a human invention or a foreign import. God Himself had commanded Moses to make it (Numbers 21:8–9). It had been venerated for centuries. To destroy it — to do what amounts to desecrating an ancient holy thing — requires a king who understands something: that the holiness of an object is conditional on how it is used. If God&apos;s people have begun to worship the object rather than God, then the object becomes an obstacle to faith and must be removed, no matter how sacred its history.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              5,
              'He trusted in the Lord God of Israel; so that after him was none like him among all the kings of Judah, nor any that were before him.',
            ),
            plain(
              6,
              'For he clave to the Lord, and departed not from following him, but kept his commandments which the Lord commanded by the hand of Moses.',
            ),
            {
              number: 7,
              spans: [
                t('And the Lord was with him; and he prospered whithersoever he went forth: and he '),
                hy('rebelled against the king of Assyria', '2k18-rebellion'),
                t(', and served him not.'),
              ],
            },
            plain(
              8,
              'He smote the Philistines, even unto Gaza, and the borders thereof, from the watch tower to the fenced city.',
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: '2k18-batach',
          title: 'Batach — "To Trust" or "To Lean Upon"',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust; to be confident; to lean on',
          description:
            'The Hebrew word batach carries the sense of physical leaning, of putting your full weight on something, of resting yourself completely upon it. Hezekiah "trusted in the Lord God of Israel" — he leaned his entire weight, his kingdom, his safety, his future, entirely on the Lord. This is not passive belief. It is active, bodily trust — a throwing of oneself upon God as a child throws himself into his father&apos;s arms.',
        },
        {
          kind: 'commentary',
          id: '2k18-rebellion',
          html:
            'The text uses strong language: Hezekiah "rebelled against the king of Assyria." Assyria is the empire of the moment, the superpower against which smaller kingdoms dare not rebel. Yet Hezekiah does. He stops paying tribute. He breaks free from the vassal status his father had accepted. And the text affirms this as a consequence of his trust in the Lord: "the Lord was with him; and he prospered whithersoever he went forth." The sequence is crucial: trust in God first, then the courage to act, then God&apos;s blessing follows.',
        },
        {
          kind: 'carry',
          html:
            'Hezekiah teaches us something about the cost of wholehearted trust. Reformation is not comfortable. It requires destroying things — comfortable compromises, familiar idols, even sacred traditions that have become obstacles. It requires a king (or a person) willing to stand alone if necessary, to act against the current, and to trust that God will vindicate what is true. Where in your own life are you being called to break with what is merely familiar in order to honor what is truly sacred?',
        },
        {
          kind: 'reflection',
          id: 'hezekiah-reform',
          prompt:
            'Hezekiah destroyed something that had once been holy because it had become an idol. What in your own spiritual life might have begun as good but become an obstacle to faith? What would it cost you to remove it?',
        },
      ],
    },

    /* ─── 2 Kings 18:9–12 — The Fall of Samaria (Context) ──────────────── */
    {
      ref: '2 Kings 18:9–12',
      title: 'The Fall of Samaria — A Warning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              9,
              'And it came to pass in the fourth year of king Hezekiah, which was the seventh year of Hoshea son of Elah king of Israel, that Shalmaneser king of Assyria came up against Samaria, and besieged it.',
            ),
            plain(
              10,
              'And at the end of three years they took it: even in the sixth year of Hezekiah, in the ninth year of Hoshea king of Israel, Samaria was taken.',
            ),
            plain(
              11,
              'And the king of Assyria did carry away Israel unto Assyria, and put them in Halah and in Habor by the river of Gozan, and in the cities of the Medes:',
            ),
            plain(
              12,
              'Because they obeyed not the voice of the Lord their God, but transgressed his covenant, and all that Moses the servant of the Lord commanded, and would not hear them, nor do them.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'samaria-context',
          html:
            'The text pauses to remind us of the fate of the northern kingdom, Israel. Samaria fell to Assyria in the sixth year of Hezekiah&apos;s reign — a catastrophe witnessed from Jerusalem, a visible proof of what happens when a nation turns from the Lord. The northern kingdom was conquered, its people carried away into exile, never to return. The explanation is clear: they disobeyed the Lord&apos;s voice, transgressed His covenant. This is a sober reminder for Judah. The same fate awaits any nation that abandons the God of their fathers.',
        },
        {
          kind: 'carry',
          html:
            'History speaks in warnings. Judah sees what happened to Israel. They see the power of Assyria — how it conquers, how it carries away entire peoples. This is the political landscape in which Hezekiah&apos;s faith must now be tested. Will Judah, unlike Israel, cling to the Lord? Or will they too fall?',
        },
      ],
    },

    /* ─── 2 Kings 18:13–16 — Sennacherib's Tribute ────────────────────── */
    {
      ref: '2 Kings 18:13–16',
      title: 'The King of Assyria Demands Tribute',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              13,
              'Now in the fourteenth year of king Hezekiah did Sennacherib king of Assyria come up against all the fenced cities of Judah, and took them.',
            ),
            plain(
              14,
              'And Hezekiah king of Judah sent to the king of Assyria to Lachish, saying, I have offended; return from me: that which thou puttest on me will I bear. And the king of Assyria appointed unto Hezekiah king of Judah three hundred talents of silver and thirty talents of gold.',
            ),
            plain(
              15,
              'And Hezekiah gave him all the silver that was found in the house of the Lord, and in the treasures of the king&apos;s house.',
            ),
            plain(
              16,
              'At that time did Hezekiah cut off the gold from the doors of the temple of the Lord, and from the pillars which Hezekiah king of Judah had overlaid, and gave it to the king of Assyria.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hezekiah-submission',
          html:
            'Here we see a complexity in Hezekiah that makes him human. For all his faith and courage, when the Assyrian army appears at his gates, his first response is to capitulate. He sends a message: "I have offended; return from me." He is willing to empty the royal treasury, to strip gold from the very doors of the temple, to pay whatever tribute is demanded. This is not the act of a man who trusts the Lord absolutely — at least, not yet. This is a king trying to buy his way out of trouble.',
        },
        {
          kind: 'commentary',
          id: 'gold-temple',
          html:
            'The detail is significant. Hezekiah had reformed the temple, purified it, made it a place of true worship again. Now, facing Sennacherib, he gives away its treasures. The gold that once adorned the temple doors flows into the hands of a pagan king. It is a moment of humiliation, of compromise, of the resources of worship being ransomed to buy peace.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we compromise our deepest commitments when we are afraid. Hezekiah&apos;s initial response to Assyria is not one of faith but of desperation. He hopes money can solve what only trust can address. But his journey is not over. What he learns next will teach him a deeper lesson about what true trust requires.',
        },
      ],
    },

    /* ─── 2 Kings 18:17–25 — Rabshakeh's Propaganda Begins ──────────────── */
    {
      ref: '2 Kings 18:17–25',
      title: 'The Enemy Speaks — Propaganda and Mockery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              17,
              'And the king of Assyria sent Tartan and Rabsaris and Rabshakeh from Lachish to king Hezekiah with a great host against Jerusalem. And they went up and came to Jerusalem. And when they were come up, they came and stood by the conduit of the upper pool, which is in the highway of the fuller&apos;s field.',
            ),
            plain(
              18,
              'And when they had called to the king, there came out to him Eliakim the son of Hilkiah, which was over the household, and Shebna the scribe, and Joah the son of Asaph the recorder.',
            ),
            {
              number: 19,
              spans: [
                t('And Rabshakeh said unto them, Say ye now to Hezekiah, Thus saith the great king, the king of Assyria, '),
                hy('What confidence is this wherein thou trustest', '2k18-confidence'),
                t('?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Surely thou trustest upon the staff of this bruised reed, even upon Egypt; on which if a man lean, it will go into his hand, and pierce it: so is Pharaoh king of Egypt unto all that trust on him.'),
              ],
            },
            plain(
              21,
              'But if ye say unto me, We trust in the Lord our God: is not that he, whose high places and whose altars Hezekiah hath taken away, and hath said to Judah and to Jerusalem, Ye shall worship before this altar in Jerusalem?',
            ),
            plain(
              22,
              'Now therefore, I pray thee, give pledges to my lord the king of Assyria, and I will deliver thee two thousand horses, if thou be able on thy part to set riders upon them.',
            ),
            plain(
              23,
              'How then wilt thou turn away the face of one captain of the least of my master&apos;s servants, and put thy trust on Egypt for chariots and for horsemen?',
            ),
            plain(
              24,
              'Am I now come up without the Lord against this place to destroy it? The Lord said to me, Go up against this land, and destroy it.',
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: '2k18-rabshakeh',
          title: 'Rabshakeh — A Title, Not a Name',
          script: 'רַבְשָׁקֵה',
          translit: '<strong>Rabshakeh</strong> · chief of the cupbearers; chief officer',
          description:
            'Rabshakeh is not a personal name but a title — "chief of the cupbearers" or "chief officer." He is Sennacherib&apos;s propaganda minister, sent to break Jerusalem&apos;s will through words rather than swords. He is skilled at manipulation, at finding the weaknesses in an enemy&apos;s faith and exploiting them. He stands by the public water source and speaks in the language of the people, ensuring maximum psychological impact.',
        },
        {
          kind: 'commentary',
          id: '2k18-confidence',
          html:
            'Rabshakeh&apos;s opening is a taunt: "What confidence is this wherein thou trustest?" He is attacking the foundation of Hezekiah&apos;s power — not his military might, but his faith. Every subsequent argument is an attack on trust itself. He wants to make Hezekiah doubt the God he has just begun to trust.',
        },
        {
          kind: 'commentary',
          id: '2k18-bruised-reed',
          html:
            'The image is vivid and contemptuous. Egypt, Rabshakeh suggests, is a "bruised reed" — something weak and useless, that will break if you lean on it and pierce your hand. The insult is clever: if Hezekiah trusts in an earthly power (Egypt), that trust is foolish. But Rabshakeh is sowing a poisonous seed. He is making Hezekiah doubt not just Egypt, but any trust at all.',
        },
        {
          kind: 'commentary',
          id: '2k18-high-places',
          html:
            'Then Rabshakeh turns Hezekiah&apos;s very reforms against him. "You took away the high places and the altars," he mocks. "You told Judah to worship only before this altar in Jerusalem. So — is your God as strong as our gods, who have saved so many nations from our hands?" The implication is clear: Your God is not unique. Your God is not stronger. Your reforms mean nothing. This is psychological warfare of the highest order — using the enemy&apos;s own convictions as a weapon.',
        },
        {
          kind: 'carry',
          html:
            'The enemy does not only attack with swords. He attacks with words designed to unmake faith. He finds the cracks in confidence and widens them. He offers false logic: "All gods are equal; your trust is foolish." He appeals to pragmatism: "Look at the facts — every nation that resisted us was destroyed." This is how ideologies fall, not through external force alone, but through the erosion of belief. The first defense against such attack is silence — to refuse to debate on the enemy&apos;s terms.',
        },
      ],
    },

    /* ─── 2 Kings 18:26–29 — The Language Game ────────────────────────── */
    {
      ref: '2 Kings 18:26–29',
      title: 'The Defense Against Propaganda',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              26,
              'Then said Eliakim the son of Hilkiah, and Shebna, and Joah, unto Rabshakeh, Speak, I pray thee, unto thy servants in the Syrian language; for we understand it: and talk not with us in the Jews&apos; language in the ears of the people that are on the wall.',
            ),
            plain(
              27,
              'But Rabshakeh said unto them, Hath my master sent me to thy master, and to thee, to speak these words? hath he not sent me to the men which sit on the wall, that they may eat their own dung, and drink their own piss with you?',
            ),
            plain(
              28,
              'Then Rabshakeh stood and cried with a loud voice in the Jews&apos; language, and spake, saying, Hear the word of the great king, the king of Assyria:',
            ),
            plain(
              29,
              'Thus saith the king, Let not Hezekiah deceive you: for he shall not be able to deliver you out of his hand:',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2k18-language',
          html:
            'Hezekiah&apos;s officials try to contain the damage. They ask Rabshakeh to speak in Aramaic — the diplomatic language — rather than Hebrew, so the people on the walls cannot hear and be demoralized. It is a reasonable request. But Rabshakeh refuses. He explicitly wants to speak to the people, to undermine them directly. This reveals the true nature of his mission: he is not here for negotiation. He is here to psychologically conquer Jerusalem by breaking the people&apos;s will.',
        },
        {
          kind: 'commentary',
          id: '2k18-crude-language',
          html:
            'His refusal is accompanied by grotesque language — speaking of eating dung and drinking urine, threats of the horrors of siege. He is using shock, obscenity, and scatology as weapons. He wants the people to be so revolted, so terrified of the humiliation awaiting them, that they will beg Hezekiah to surrender.',
        },
      ],
    },

    /* ─── 2 Kings 18:30–35 — The Core of the Lie ──────────────────────── */
    {
      ref: '2 Kings 18:30–35',
      title: 'The Heart of the Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              30,
              'Neither let Hezekiah make you trust in the Lord, saying, The Lord will surely deliver us, and this city shall not be delivered into the hand of the king of Assyria.',
            ),
            plain(
              31,
              'Hearken not to Hezekiah: for thus saith the king of Assyria, Make an agreement with me by a present, and come out to me, and then eat ye every man of his own vine, and every one of his fig tree, and drink ye every one the waters of his cistern;',
            ),
            plain(
              32,
              'Until I come and take you away to a land like your own land, a land of corn and wine, a land of bread and vineyards, a land of oil olive and of honey, that ye may live, and not die: and hearken not unto Hezekiah when he persuadeth you, saying, The Lord will deliver us.',
            ),
            {
              number: 33,
              spans: [
                t('Hath any of the gods of the nations delivered at all his land out of the hand of the king of Assyria?'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Where are the gods of Hamath, and of Arpad? where are the gods of Sepharvaim, Hena, and Ivah? have they delivered Samaria out of my hand?'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Who are they among all the gods of the countries, that have delivered their country out of the hand of the king of Assyria? how much less shall the Lord deliver Jerusalem out of my hand?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k18-central-lie',
          html:
            'Rabshakeh now articulates the core lie: "Do not let Hezekiah make you trust in the Lord, saying He will deliver you. All the gods of all the nations I have conquered — where are they now? Where is the god of Samaria? The god of Hamath? Every nation that trusted in their gods fell before me. Your God is no different. Trust in Him is a waste of faith." This is the fundamental attack — not "You will be defeated" but "Your faith itself is delusion." It is an attack not on Judah&apos;s strength but on the very possibility of God&apos;s intervention.',
        },
        {
          kind: 'commentary',
          id: '2k18-kind-offer',
          html:
            'Rabshakeh also offers a perverse mercy: "Make an agreement with me, come out, and I will take you to a land as good as your own." He is appealing to pragmatism, to the desire for survival without suffering. Surrender, and everyone lives. The trap is that this offer treats surrender as though it costs nothing — as though losing your land, your home, your identity does not matter so long as you physically survive.',
        },
        {
          kind: 'carry',
          html:
            'The lie is sophisticated. It uses truth — "Yes, Assyria has conquered many nations, many gods have fallen silent" — to reach a false conclusion: "Therefore your God cannot save you." It offers a false bargain: "Trade your faith and your home for safety." This is how despair works. It takes real facts and uses them to argue for the impossibility of hope. The only answer to such sophisticated deception is not debate, but silence and trust — to refuse to let the enemy&apos;s terms become your reality.',
        },
      ],
    },

    /* ─── 2 Kings 18:36 — The People Hold Their Peace ──────────────────── */
    {
      ref: '2 Kings 18:36',
      title: 'Silence as Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              36,
              'But the people held their peace, and answered him not a word: for the king&apos;s commandment was, Say nothing unto him.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2k18-silence',
          html:
            'In the face of Rabshakeh&apos;s torrent of mockery and psychological warfare, the people do something that requires tremendous discipline: they hold their peace. They say not a word. This silence is not cowardice. It is an act of collective resistance. By refusing to engage, by refusing to debate, by refusing to let the enemy&apos;s words penetrate into their hearts and create division, they deny Rabshakeh the victory he seeks.',
        },
        {
          kind: 'commentary',
          id: '2k18-king-command',
          html:
            'The text notes that this silence was by the king&apos;s commandment. Hezekiah has learned something from the experience of paying tribute. He will not negotiate further with an enemy who negotiates in bad faith. He will not allow his people to be divided by propaganda. The commandment is simple and absolute: do not answer.',
        },
        {
          kind: 'carry',
          html:
            'There is a time for words and a time for silence. When facing a lie so fundamental that it cannot be argued away, when facing an enemy who uses words only as weapons, the most powerful response is often to refuse the terms of the debate itself. The people hold their peace not because they have no answer, but because they understand that some words are not worth answering. Their silence becomes a form of faithfulness.',
        },
        {
          kind: 'reflection',
          id: '2k18-silence-2',
          prompt:
            'When have you had to hold your peace in the face of mockery or propaganda? What was it like to refuse to engage, and what did that silence protect in you?',
        },
      ],
    },

    /* ─── 2 Kings 18:37 — The Message to the King ────────────────────── */
    {
      ref: '2 Kings 18:37',
      title: 'The Report to Hezekiah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              37,
              'Then came Eliakim the son of Hilkiah, which was over the household, and Shebna the scribe, and Joah the son of Asaph the recorder, to Hezekiah with their clothes rent, and told him the words of Rabshakeh.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '2k18-report',
          html:
            'The officials return to Hezekiah with their clothes torn — a sign of deep distress and grief. They report what Rabshakeh has said: that the king of Assyria mocks trust in the Lord, that he claims every god has fallen before him, that surrender is the only rational choice. Hezekiah now faces a choice. Will he respond in fear, as he did when he stripped gold from the temple? Or will he respond in faith?',
        },
        {
          kind: 'christ',
          id: '2k18-christ',
          title: 'Christ Connection — The King Whose Trust Never Wavered',
          html:
            'Hezekiah is tested and nearly fails — paying tribute, compromising his own sanctified temple, nearly losing faith. But Christ — the greater King, the Messiah — faces mockery of a different order. At the cross itself, the rulers jeer: "He saved others; himself he cannot save." The suggestion is the same as Rabshakeh&apos;s: "Your faith is delusion; the evidence proves it." Yet Christ&apos;s trust in the Father is absolute and unshaken even in death. "Father, into thy hands I commend my spirit" (Luke 23:46). Where Hezekiah nearly falters, Christ stands firm. Moreover, Christ is the fulfillment of the brazen serpent that Hezekiah destroyed. "As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up" (John 3:14). The serpent that became an idol in Israel&apos;s hands becomes, in Christ, the true sign of God&apos;s mercy — lifted up on the cross, calling all the faithful to look and live. In Hezekiah we see the struggle of faith; in Christ we see faith perfected.',
        },
        {
          kind: 'carry',
          html:
            'Hezekiah&apos;s story is not finished. He has been shaken. His faith has been tested. But now, in the silence of his people and in the presence of the Lord&apos;s mockery, he will discover what it truly means to trust. Sometimes the beginning of real faith is the shattering of false confidence — the moment when we realize that money cannot buy safety, that compromise cannot purchase peace, and that the only solid ground is God Himself.',
        },
        {
          kind: 'reflection',
          id: '2k18-carry',
          prompt:
            'Have you ever felt your faith shaken by the mockery or arguments of others? What gave you the courage to hold to what you believed, even when it seemed foolish to do so?',
        },
      ],
    },
  ],
};
