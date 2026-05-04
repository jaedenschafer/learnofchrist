import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 32 — Sennacherib's Invasion, Hezekiah's Prayer, and the Test of Pride
 *
 * When the mighty king of Assyria turns his war machine toward Jerusalem,
 * Hezekiah faces a choice that has shaped every leader who must act in the
 * face of overwhelming odds. He does not wait for rescue. He prepares the
 * walls, he rallies the people, and he speaks words that have become a
 * template for faith under siege: "There be more with us than with him."
 * Then the angel comes. But what comes after the angel — the sickness,
 * the pride, the test — reveals that the deeper battle is always within.
 */
export const CHRONICLES_2_32: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 32,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 20 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 32',
  },
  intros: [
    'Sennacherib, the great king of Assyria, moves his armies toward Judah with the intention of conquest. He has already swallowed ten tribes of Israel. Now he comes for Judah and Jerusalem. But Hezekiah has spent his reign breaking down the high places, centralizing worship, repairing the temple, and seeking the Lord. When the crisis comes, he is ready — not because he is unafraid, but because he has already made the choice to trust.',
    'This chapter records one of the turning points of the Old Testament: an angel of the Lord cuts down the entire Assyrian army in a single night. But the chapter does not end there. Hezekiah becomes sick unto death, recovers, and then faces a subtler enemy — his own heart. God leaves him to be tested. The final section foreshadows the later humiliation that awaits him when ambassadors from Babylon arrive, and Hezekiah, in a moment of pride, shows them all the treasures of his house. This is the anatomy of a faithful king&apos;s greatest struggle: not with enemies, but with himself.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 32',
    quote:
      'When Hezekiah stood before the siege, he spoke to his people: "There be more with us than with him." The angel of the Lord destroyed the Assyrian army. But the true test came after — when God left Hezekiah to be tried.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 32 · Study Guide',
  },

  resources: [
    {
      id: 'israel-museum-hezekiah',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Hezekiah Reforms and Jerusalem',
      url: 'https://www.imj.org.il/',
      description: 'Iron Age Judah archaeology: water systems, inscriptions, cultic reform artifacts.',
    },
    {
      id: 'sefaria-2-chronicles-32',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 32 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.32',
      description: 'The Hebrew text of 2 Chronicles 32 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 32:1–8 — Sennacherib Invades; Hezekiah Prepares ───── */
    {
      ref: '2 Chronicles 32:1–8',
      title: 'The Siege Begins: Preparation and Courage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(1, 'After these things, and the establishment thereof, Sennacherib king of Assyria came, and entered into Judah, and encamped against the fenced cities, and thought to win them for himself.'),
            plain(2, 'And when Hezekiah saw that Sennacherib was come, and that he was purposed to fight against Jerusalem,'),
            plain(3, 'He took counsel with his princes and his mighty men to stop the waters of the fountains which were without the city: and they did help him.'),
            plain(4, 'So there was gathered much people together, who stopped all the fountains, and the brook that ran through the midst of the land, saying, Why should the kings of Assyria come, and find much water?'),
            plain(5, 'Also he strengthened himself, and built up all the wall that was broken, and raised it up to the towers, and another wall without, and repaired Millo in the city of David, and made darts and shields in abundance:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sennacherib-invasion',
          html:
            'Sennacherib comes, as he always does, with confidence in his military power and his god&apos;s favor. He has conquered the northern kingdom and reduced Judah&apos;s tributaries to vassal status. Now he marches on Jerusalem itself, the capital, the holy city. But Hezekiah has already broken down the high places. He has centralized worship in the temple. He has made himself unpopular by insisting that Israel look to the Lord, not to the gods of the nations. Now, in the face of an empire&apos;s advance, that choice will be tested. [res:israel-museum-hezekiah]',
        },
        {
          kind: 'commentary',
          id: 'stop-fountains',
          html:
            'Hezekiah&apos;s first response is practical and wise. A besieged city needs water. He cuts off access to the springs and the brook. This is not an act of prayer alone; it is the work of a leader who has counted the cost and decided to prepare the material foundation for trust. Faith and preparation are not opposites. Hezekiah does both[res:sefaria-2-chronicles-32][res:bibleodyssey-2-chronicles-overview-32].',
        },
        {
          kind: 'commentary',
          id: 'strengthened-walls',
          html:
            'The walls are broken. He builds them up. The towers are damaged. He raises them. He makes weapons — darts and shields — in abundance. Every preparation is recorded here as evidence that Hezekiah is not passive, not waiting for a miracle. He is a leader who strengthens his city, arms his people, and then looks to God. The material and the spiritual reinforce each other.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(6, 'And he set captains of war over the people, gathered them together to him in the street of the gate of the city, and spake comfortably to them, saying,'),
            {
              number: 7,
              spans: [
                t('Be strong and courageous, be not afraid nor dismayed for the king of Assyria, nor for all the multitude that is with him: for '),
                hp('there be more with us than with him', 'more-with-us'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('With him is an '),
                hy('arm of flesh', 'arm-flesh'),
                t('; but with us is the Lord our God to help us, and to fight our battles. And the people rested themselves upon the words of Hezekiah king of Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'more-with-us',
          html:
            'This is one of the great speeches of Scripture. Hezekiah does not minimize the threat. Sennacherib comes with a multitude. The armies are vast. The odds appear impossible. And yet: "There be more with us than with him." This is not optimism born of ignorance. This is faith born of alignment with God. The people are frightened, and Hezekiah does not tell them to ignore their fear. He tells them where the greater strength lies.',
        },
        {
          kind: 'hebrew',
          id: 'arm-flesh',
          title: 'Zeroa Basar — "Arm of Flesh"',
          script: 'זְרוֹעַ בָּשָׂר',
          translit: '<strong>Zeroa basar</strong> · literally, "arm of meat"; human strength; mortal power',
          description:
            'The "arm of flesh" is the symbol of human strength and military might. Sennacherib brings the full weight of the empire&apos;s armed power — cavalry, chariots, siege engines, a vast multitude of soldiers. All of this is "arm of flesh" — real, formidable, but ultimately limited to what mortal hands can do. The phrase echoes throughout Scripture as a way of distinguishing between human power (always limited) and divine power (always sufficient).',
        },
        {
          kind: 'carry',
          html:
            'Hezekiah&apos;s words contain a pattern we can follow whenever we face an overwhelming situation. First: do what you can. Prepare. Strengthen. Take practical steps. Do not wait passively. Second: acknowledge the reality of the threat. The Assyrian army is real, is vast, is formidable. Do not pretend it away. Third: reorient your vision. Look past the visible power to the greater strength that supports you. Whatever your crisis — at work, in your family, in your health — there is a force at work that is greater than the threat you face. Align yourself with it, and the people around you will rest in that alignment.',
        },
        {
          kind: 'reflection',
          id: 'more-with-us-2',
          prompt: 'When have you faced a situation that seemed to have impossible odds? What gave you courage in that moment? How did you speak to others about what you believed was happening?',
        },
      ],
    },

    /* ─── 2 Chronicles 32:9–23 — The Rabshakeh's Blasphemy; The Angel Destroys the Army ── */
    {
      ref: '2 Chronicles 32:9–23',
      title: 'The Blasphemy and the Angel: God\'s Judgment Against Arrogance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(9, 'After this did Sennacherib king of Assyria send his servants to Jerusalem, (but he himself laid siege against Lachish, and all his power with him,) to Hezekiah king of Judah, and to all Judah that were at Jerusalem, saying,'),
            plain(10, 'Thus saith Sennacherib king of Assyria, Whereon do ye trust, that ye abide in the siege in Jerusalem?'),
            plain(11, 'Doth not Hezekiah persuade you to give over yourselves to die by famine and by thirst, saying, The Lord our God shall deliver us out of the hand of the king of Assyria?'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-32-mid-11',
          html:
            '<p>Leadership transitions mark new direction—a builder hands off to the next.</p>',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(12, 'Hath not the same Hezekiah taken away his high places and his altars, and commanded Judah and Jerusalem, saying, Ye shall worship before one altar, and burn incense upon it?'),
            plain(13, 'Know ye not what I and my fathers have done unto all the people of other lands? were the gods of the nations of those lands any ways able to deliver their lands out of mine hand?'),
            plain(14, 'Who was there among all the gods of those nations that my fathers utterly destroyed, that could deliver his people out of mine hand, that your God should be able to deliver you out of mine hand?'),
            plain(15, 'Now therefore let not Hezekiah deceive you, nor persuade you on this manner, neither yet believe him: for no god of any nation or kingdom was able to deliver his people out of mine hand, and out of the hand of my fathers: how much less shall your God deliver you out of mine hand?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rabshakeh-speech',
          html:
            'The Rabshakeh (the "chief of the princes") speaks for Sennacherib, and his words are crafted to undermine Hezekiah&apos;s authority and to spread fear. The argument is subtle: Hezekiah has taken away the high places — the altars where the people have always made offerings. He has centralized worship. Now, in a crisis, can you trust a king who has alienated your gods? The Rabshakeh attempts to drive a wedge between the king and the people by appealing to their religious anxiety.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(16, 'And his servants spake yet more against the Lord God, and against Hezekiah his servant.'),
            plain(17, 'He wrote also letters to rail on the Lord God of Israel, and to speak against him, saying, As the gods of the nations of other lands have not delivered their people out of mine hand, so shall not the God of Judah deliver his people out of mine hand.'),
            plain(18, 'Then they cried with a loud voice in the Jews&apos; speech unto the people of Jerusalem that were on the wall, to affright them, and to trouble them; that so they might take the city.'),
            plain(19, 'And they spake of the God of Jerusalem, as of the gods of the people of the earth, which are the work of men&apos;s hands.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'loud-voice',
          html:
            'The Rabshakeh cries with a loud voice in the Hebrew tongue, so that the people on the wall can understand every word of mockery and threat. This is psychological warfare. He compares the God of Jerusalem to the "gods of the people of the earth, which are the work of men&apos;s hands" — dead idols, powerless statues. His aim is to terrify the people into surrendering. But there is a subtle danger here: the people are listening to words designed to make them doubt. They are on the wall, and every word of the Rabshakeh is reaching their ears.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(20, 'And for this cause Hezekiah the king and the prophet Isaiah the son of Amoz prayed and cried to heaven.'),
            {
              number: 21,
              spans: [
                t('And the Lord sent an '),
                t('angel'),
                t(', which cut off all the '),
                t('mighty men of valour, the leaders and captains'),
                t(', in the camp of the king of Assyria. So he returned with shame of face to his own land. And when he was come into the house of his god, they that came forth of his own bowels slew him there with the sword.'),
              ],
            },
            plain(22, 'Thus the Lord saved Hezekiah and the inhabitants of Jerusalem from the hand of Sennacherib the king of Assyria, and from the hand of all other, and guided them on every side.'),
            plain(23, 'And many brought gifts unto the Lord to Jerusalem, and presents to Hezekiah king of Judah: so that he was magnified in the sight of all nations from thenceforth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prayer-heaven',
          html:
            'Hezekiah and Isaiah do not argue with the Rabshakeh. They do not answer blasphemy with rhetoric. They pray. And their prayer is answered. In a single night, the angel of the Lord destroys the entire Assyrian army — the leaders, the captains, all the mighty men of valor. The text does not describe the mechanism. It simply states the fact: they are cut off. When Sennacherib returns to his own land in shame, he is assassinated by his own sons in the house of his god. The God who seems silent when the Rabshakeh rages speaks in a language the world cannot ignore.',
        },
        {
          kind: 'hebrew',
          id: 'malak-angel',
          title: 'Malak — "Angel" or "Messenger"',
          script: 'מַלְאַךְ',
          translit: '<strong>Malak</strong> · messenger; angel; one sent to execute God&apos;s will',
          description:
            'An angel in Hebrew is a malak, a messenger. But this malak is not sent to speak; it is sent to act. The angel of the Lord in Scripture is often portrayed as the executor of God&apos;s judgment — the one who stands between the living and the dead when a plague threatens, the one who appears in theophanic moments. This angel cuts off the mighty men. The destruction is swift, complete, and attributed directly to God&apos;s hand.',
        },
        {
          kind: 'christ',
          id: 'more-with-us-christ',
          title: 'Christ Connection — The Greater Power',
          html:
            'Hezekiah says, "There be more with us than with him." This is the faith of those who have aligned themselves with Christ. In Romans 8:31, Paul echoes this: "If God be for us, who can be against us?" The teaching is the same. The One who is for us — Christ, the Son of God — is greater than any power arrayed against us. The angel who cut off the Assyrian army foreshadows the angels of Revelation who execute judgment. But Christ is the One "with whom all the fullness of the Godhead bodily" (Colossians 2:9); He is the power that no earthly kingdom can finally resist. We are called to stand as Hezekiah stood — not arrogantly, but in confidence that we have aligned ourselves with the greatest power in the universe.',
        },
        {
          kind: 'carry',
          html:
            'Hezekiah did not defeat the Assyrian army. He prayed. The angel fought the battle. Yet Hezekiah&apos;s role was essential — he prepared the city, he encouraged the people, he aligned them with prayer and with trust in God. We are not called to accomplish impossible things by our own strength. We are called to do what lies within our power, to prepare as best we can, and then to pray and trust. The victory comes not from us, but from alignment with a power greater than ourselves.',
        },
        {
          kind: 'reflection',
          id: 'angel-victory',
          prompt: 'Have you ever experienced a situation where the outcome was not in your hands, and you had to trust something or someone greater than yourself? What did that teach you about the difference between doing your part and trusting God to do His?',
        },
      ],
    },

    /* ─── 2 Chronicles 32:24–26 — Hezekiah's Sickness and Pride ─────────── */
    {
      ref: '2 Chronicles 32:24–26',
      title: 'The Sickness, the Pride, and the Humbling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(24, 'In those days Hezekiah was sick to the death, and prayed unto the Lord: and he spake unto him, and gave him a sign.'),
            plain(25, 'But Hezekiah rendered not again according to the benefit done unto him; for his heart was lifted up: therefore there was wrath upon him, and upon Judah and Jerusalem.'),
            plain(26, 'Notwithstanding Hezekiah humbled himself for the pride of his heart, both he and the inhabitants of Jerusalem, so that the wrath of the Lord came not upon them in the days of Hezekiah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sickness-unto-death',
          html:
            'After the great victory, Hezekiah falls sick unto death. He prays, and the Lord answers. A sign is given — in 2 Kings we learn it is the sign of the sun&apos;s shadow going backward. Hezekiah is healed. He has been delivered from the siege, and now he is delivered from death itself. He has seen the angel of the Lord cut off an entire army. He has received a miraculous sign of healing. He has every reason to believe that he is favored, chosen, victorious.',
        },
        {
          kind: 'commentary',
          id: 'heart-lifted-up',
          html:
            'And yet: "His heart was lifted up." The same man who stood before the Assyrian army and said, "There be more with us than with him," now begins to believe that the more is primarily him. After healing, after victory, his heart exalts itself. He no longer sees himself as an instrument of God&apos;s will; he sees himself as the author of his own triumph. This is the danger that faces every leader who has known God&apos;s favor: the moment of victory can become the moment of spiritual disaster.',
        },
        {
          kind: 'commentary',
          id: 'humbled-himself',
          html:
            'But Hezekiah is not left to his pride. He humbles himself. The text says he "humbled himself for the pride of his heart" — which means he recognizes what has happened, he confesses it, and he turns back to seeking the Lord. And because he does this, the wrath of the Lord comes not upon them in the days of Hezekiah. His repentance is swift enough, his heart responsive enough, that the consequence is delayed. But the text makes clear: he needed to turn, and he did. The pride had to be named and confessed.',
        },
        {
          kind: 'carry',
          html:
            'This pattern repeats throughout Scripture and throughout our lives. We are tested by crisis (the siege), and we rely on God. We are blessed with deliverance. And then, in the quiet after, we are tested by success. Did I survive because God upheld me, or because I am strong? Did I win because God fought the battle, or because I planned well? Both are true, but pride wants to claim the credit solely for itself. Hezekiah teaches us that the moment of greatest danger is sometimes not the moment of greatest threat, but the moment of greatest success. That is when the heart is most likely to lift itself up. And that is when we most need to recognize the danger, humble ourselves, and return to seeking the Lord.',
        },
        {
          kind: 'reflection',
          id: 'pride-humbling',
          prompt: 'When has success tempted you to believe the narrative of your own importance more than the narrative of God&apos;s grace? How did you recognize the shift? What helped you return to humility?',
        },
      ],
    },

    /* ─── 2 Chronicles 32:27–31 — The Riches, The Ambassadors, and The Test ─ */
    {
      ref: '2 Chronicles 32:27–31',
      title: '"God Left Him to Try Him": The Test of the Ambassadors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(27, 'And Hezekiah had exceeding much riches and honour: and he made himself treasuries for silver, and for gold, and for precious stones, and for spices, and for shields, and for all manner of pleasant jewels;'),
            plain(28, 'Storehouses also for the increase of corn, and wine, and oil; and stalls for all manner of beasts, and cotes for flocks:'),
            plain(29, 'Moreover he provided him cities, and possessions of flocks and herds in abundance: for God had given him substance very much.'),
            plain(30, 'This same Hezekiah also stopped the upper watercourse of Gihon, and brought it straight down to the west side of the city of David. And Hezekiah prospered in all his works.'),
            {
              number: 31,
              spans: [
                t('Howbeit in the business of the ambassadors of the princes of Babylon, who sent unto him to enquire of the wonder that was done in the land, '),
                t('God left him, to try him'),
                t(', that he might know all that was in his heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exceeding-riches',
          html:
            'The text catalogs Hezekiah&apos;s wealth and accomplishments in detail. Treasuries of silver, gold, precious stones, spices, shields, jewels. Storehouses of grain, wine, oil. Herds, flocks, cities, possessions. He has also engineered the water system — stopped the upper watercourse of Gihon and brought it to the city of David (this is the engineering feat preserved in the Siloam Tunnel). Hezekiah has prospered. He is successful, wealthy, honored, and secure. All of this is said to come from God: "God had given him substance very much."',
        },
        {
          kind: 'commentary',
          id: 'ambassadors-babylon',
          html:
            'Then the ambassadors of the princes of Babylon come to Jerusalem. They have heard of the "wonder that was done in the land" — the miraculous destruction of the Assyrian army — and they come to inquire about it. This is a moment of international attention. The great kingdoms of the world want to know what happened, why the mighty Assyrian army was destroyed, and who this king Hezekiah is who has God&apos;s favor.',
        },
        {
          kind: 'hebrew',
          id: 'nissah-try',
          title: 'Nissah — "To Try" or "To Test"',
          script: 'נִסָּה',
          translit: '<strong>Nissah</strong> · to test; to try; to prove; to examine',
          description:
            'The root "nissah" means to put to the test. God left Hezekiah to be tried. This is not punishment; it is testing. God withdraws His presence — not finally, but temporally — to see what Hezekiah will do when left to his own inclinations. It is a test of character. What does Hezekiah do when the ambassadors come and the world is watching? How does he respond to being the center of international attention?',
        },
        {
          kind: 'commentary',
          id: 'know-heart',
          html:
            'The purpose of the test is "that he might know all that was in his heart." This phrase echoes the theology of testing throughout Scripture: God does not test in order to learn something He does not know. God tests so that we might see ourselves clearly — so that we might know what is truly in our hearts. Hezekiah is tested so that he (and we, reading his story) might see whether his trust in God is rooted or surface-level, whether his worship is genuine or dependent on victory and favor.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(32, 'Now the rest of the acts of Hezekiah, and his goodness, behold, they are written in the vision of Isaiah the prophet, the son of Amoz, and in the book of the kings of Judah and Israel.'),
            plain(33, 'And Hezekiah slept with his fathers, and they buried him in the chiefest of the sepulchres of the sons of David: and all Judah and the inhabitants of Jerusalem did him honour at his death. And Manasseh his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rest-acts',
          html:
            'The chapter does not tell us explicitly what Hezekiah did when the ambassadors came. Instead, it points us to the fuller record "in the vision of Isaiah the prophet" and "the book of the kings of Judah and Israel." In 2 Kings 20, we are told that Hezekiah showed the Babylonian ambassadors all his treasures — his silver, his gold, his precious things, his spices, his shields, his jewels — and his storehouses. He took pride in showing them the wealth of his kingdom. In that moment, he failed the test. God left him to try him, and in that test, his heart revealed that it had been lifted up. Isaiah then told him: "All that is in thine house, and that which thy fathers have laid up in store unto this day, shall be carried into Babylon" (2 Kings 20:17). The very treasures he showed them would one day be carried away.',
        },
        {
          kind: 'christ',
          id: 'tested-not-failed',
          title: 'Christ Connection — Tested, but Not Failing',
          html:
            'Hezekiah was tested and failed. He showed the ambassadors his treasures and took pride in his possessions. Christ was tested and did not fail. In Matthew 4 and Luke 4, the devil offers Jesus all the kingdoms of the world in their glory. Jesus does not yield. In Gethsemane, facing death, He says, "Nevertheless not my will, but thine, be done." Christ is the One who, when left to be tried, returned the correct answer. He never allowed His heart to be lifted up. He never took credit for the work that belonged to God. He never showed the world His treasures and took pride in them. Instead, He emptied Himself and became obedient unto death. In Him, the pattern of human failure — the cycle of trust, victory, pride, and humbling — is broken. He is the faithful king, the one whose heart never turns away.',
        },
        {
          kind: 'carry',
          html:
            'The test that came to Hezekiah comes to every person who has experienced God&apos;s favor. It does not come while we are struggling. It comes after we have been blessed. It comes when the world is watching. It comes in the form of attention, wealth, success, and opportunity. God does not withdraw because we have failed; He withdraws to test us — to show us whether we will seek Him for His own sake, or only when we are in crisis. Hezekiah was tested and fell. That is his tragedy. But the fact that it is recorded, that we see his failure, is itself a mercy: we are warned. We are invited to see the pattern before it takes root in our own hearts.',
        },
        {
          kind: 'reflection',
          id: 'god-left-him',
          prompt: 'Have you ever experienced a moment when God seemed distant after you had known His presence? What were you tested with in that moment? What did you learn about what is truly in your heart?',
        },
      ],
    },

    /* ─── 2 Chronicles 32 Closing: The Cycle of Trust, Victory, and Testing ── */
    {
      ref: '2 Chronicles 32:1–33',
      title: 'The Pattern: Trust, Victory, Humbling, and the Test',
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'hezekiah-pattern',
          html:
            'The chapter closes with Hezekiah honored by all Judah and the inhabitants of Jerusalem at his death. He is remembered as a good king, a reformer, a man who sought the Lord and saw the Lord&apos;s favor. And yet the chapter also contains the record of his failure. The ambassadors came, and he failed the test. In 2 Kings 20:18, the word comes through Isaiah: Hezekiah&apos;s children will be eunuchs in the palace of the king of Babylon. The consequence of his pride in that moment reaches beyond his lifetime. Yet God did not utterly reject him. He lived out his days. The wrath was delayed. The humbling came, and when he humbled himself, he was restored to God&apos;s favor, though the consequence remained.',
        },
        {
          kind: 'carry',
          html:
            'This is the anatomy of a faithful life: we trust God in the crisis. We see His hand. We are delivered. And then comes the subtler test — the test of the heart when all seems well. Will we remember that "there be more with us than with him"? Or will we allow our heart to be lifted up with what we have seen and done? The pattern is not shame and failure; the pattern is awareness and humbling. Hezekiah teaches us that even the best leaders, the most godly kings, can fall. But he also teaches us that the moment we recognize the fall, when we humble ourselves, the door back to God&apos;s favor opens. The victory is not that we never fall; the victory is that we fall, we see it, we repent, and we are restored.',
        },
        {
          kind: 'reflection',
          id: 'hezekiah-closing',
          prompt: 'As you reflect on the story of Hezekiah — his trust before the siege, his healing from sickness, his pride before the ambassadors, his humbling — where do you see yourself? Are you in a season of crisis where you need to remember "there be more with us than with him"? Or are you in a season of success where you most need to guard your heart?',
        },
      ],
    },
  ],
};
