import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 28 — Ahaz, Judah's Darkest Hour
 *
 * Ahaz begins his reign in his twentieth year and reigns sixteen years in
 * Jerusalem. He walks in the ways of the kings of Israel, not as David his
 * father. He burns his children in the fire — a horror that marks the depths
 * of spiritual apostasy. The Lord delivers him into the hands of his enemies:
 * Syria defeats him, Israel slaughters 120,000 in a single day. Yet in a
 * remarkable moment, a prophet named Oded and certain men of Israel act with
 * mercy, returning the captives. Ahaz, instead of repenting, turns to Assyria,
 * sacrifices to Damascus gods, and shuts the doors of the Lord's house.
 * This chapter is the nadir — the moment before grace and restoration through
 * his son Hezekiah.
 */
export const CHRONICLES_2_28: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 28,

  estimatedMinutes: { 5: 10, 10: 18, 15: 24 },
  intros: [
    'The reign of Ahaz marks a precipice in Judah&apos;s history. Unlike his father David, who sought the Lord and was upheld, Ahaz walks in the ways of the kings of Israel — the northern kingdom that has already turned from God. He will not be turned back. And in his refusal, he will drag Judah into apostasy so profound that it culminates in an act that shatters the covenant: the burning of his own children in fire, a practice born of the worship of Baal and the Hinnom valley demons.',
    'What follows is catastrophe. The Lord, whose patience has been tested unto the breaking point, delivers Judah into the hands of her enemies. Syria smites them. Israel — the very northern kingdom Ahaz has emulated — returns with a slaughter so great that 120,000 young men of Judah fall in a single day. It is as though heaven itself has turned away. Yet even in this darkness, mercy appears. A prophet named Oded speaks God&apos;s word, and men of Israel — the very people committing the carnage — listen. They release their captives, clothing them, anointing them, restoring them to their brethren. And then Ahaz himself must choose: will he repent, or will he harden his heart further? He chooses hardness. He looks to Assyria. He sacrifices to Damascus. He locks the doors of God&apos;s house. This is the nadir of Judah&apos;s history — and the moment before the miracle of Hezekiah.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 28',
    quote:
      'Ahaz did evil in the sight of the Lord. Yet even in the depths of apostasy, the Lord raised up a prophet to call his people back to mercy. The king refused. But his son would not.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 28 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 28:1–4 — Ahaz Begins to Reign ──────────────────── */
    {
      ref: '2 Chronicles 28:1–4',
      title: 'The Darkening of the Crown',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 1,
              spans: [
                t('Ahaz was twenty years old when he began to reign, and he reigned sixteen years in Jerusalem: but he '),
                hg('did not that which was right', '28-1-not-right'),
                t(' in the sight of the Lord, like David his father:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For he walked in the ways of the kings of Israel, and made also molten images for Baalim.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Moreover he burnt incense in the valley of the son of Hinnom, and '),
                hp('burnt his children in the fire', '28-3-children-fire'),
                t(', after the abominations of the heathen whom the Lord had cast out before the children of Israel:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he sacrificed and burnt incense in the high places, and on the hills, and under every green tree.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-not-right',
          html:
            'The text is stark: Ahaz did not do right in the sight of the Lord. Unlike David, his ancestor, who sought the Lord and received strength, Ahaz seeks idols. He is twenty years old when he takes the throne — young enough to be shaped by advisors, perhaps, but old enough to know the God of Israel. His choice to walk in the ways of the kings of Israel — the northern kingdom that has already fallen away — is not a stumble. It is a deliberate turn from the covenant.',
        },
        {
          kind: 'commentary',
          id: '28-molten-images',
          html:
            'Ahaz makes molten images for Baalim — the plural of Baal, the fertility god of Canaan. The making of these images is itself a violation of the covenant, a breaking of the second commandment. But worse is to follow.',
        },
        {
          kind: 'hebrew',
          id: '28-gei-ben-hinnom',
          title: 'Gei ben-Hinnom — "Valley of the Son of Hinnom" (Gehenna)',
          script: 'גֵּיא בֶן־הִנֹּם',
          translit: '<strong>Gei ben-Hinnom</strong> · the valley of the son of Hinnom; later called Gehenna',
          description:
            'This valley, south of Jerusalem, becomes a place of horror under Ahaz. It is where he performs the most unspeakable act: child sacrifice. The valley&apos;s name will echo through Scripture as Gehenna, the place of eternal judgment. What begins as a geographical location becomes a metaphor for hell itself — because of what was done there.',
        },
        {
          kind: 'commentary',
          id: '28-children-fire',
          html:
            'Ahaz burns his own children in the fire — not as a sacrifice to God (which would be abomination enough), but to the demons of the high places, to Baal, to the gods of Canaan that the Lord cast out before Israel. This is the ultimate breaking of the covenant, the ultimate betrayal of the bond between parent and child, between a king and his people. The text does not soften this. It names it with brutal clarity.',
        },
        {
          kind: 'carry',
          html:
            'The descent into apostasy is not always sudden. Ahaz begins by walking in the ways of the northern kingdom. Then he makes idols. Then he sacrifices on high places. And then — he crosses a line so absolute that it cannot be uncrossed. He offers his own children to demons. What starts as a small turn from God&apos;s path becomes a wholesale surrender to the voices that destroy. In our own lives, how do we recognize when a small compromise is beginning to lead us toward the unthinkable?',
        },
        {
          kind: 'reflection',
          id: '28-darkening',
          prompt: 'Ahaz&apos;s descent happens in stages — first walking in the ways of other kings, then making idols, then sacrificing on high places, then offering his own children. Have you ever noticed a gradual drift in your own choices? What would it mean to recognize and turn back at an earlier stage?',
        },
      ],
    },

    /* ─── 2 Chronicles 28:5–8 — The Great Slaughter ────────────────────── */
    {
      ref: '2 Chronicles 28:5–8',
      title: 'The Lord Delivers Him Into the Hand of His Enemies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 5,
              spans: [
                t('Wherefore the Lord his God delivered him into the hand of the king of Syria; and they smote him, and carried away a great multitude of them captives, and brought them to Damascus. And he was also delivered into the hand of the king of Israel, who smote him with a great slaughter.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For Pekah the son of Remaliah slew in Judah '),
                hg('an hundred and twenty thousand', '28-6-120k'),
                t(' in one day, which were all valiant men; because they had forsaken the Lord God of their fathers.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Zichri, a mighty man of Ephraim, slew Maaseiah the king&apos;s son, and Azrikam the governor of the house, and Elkanah that was next to the king.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the children of Israel carried away captive of their brethren two hundred thousand, women, sons, and daughters, and took also away much spoil from them, and brought the spoil to Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-delivered-enemy',
          html:
            'The phrase is repeated: "delivered him into the hand." It is the Lord who does this. The consequence of Ahaz&apos;s apostasy is not merely human retaliation — it is the withdrawal of God&apos;s protection. What has kept Judah safe is the covenant. Break it, and the walls fall. Ahaz has walked in the ways of Israel, made idols, sacrificed his children — and the Lord, whose patience is exhausted, opens the gates.',
        },
        {
          kind: 'commentary',
          id: '28-120k',
          html:
            'One hundred and twenty thousand in a single day. The number is so vast that it strains comprehension. But the text is clear: these are valiant men — men of strength and valor. Judah&apos;s finest are falling. And the reason is stated plainly: "because they had forsaken the Lord God of their fathers." It is not merely that they lost a battle. They lost the battle because they turned away from God.',
        },
        {
          kind: 'hebrew',
          id: '28-shivyah',
          title: 'Shivyah — "Captives" or "Captivity"',
          script: 'שִׁבְיָה',
          translit: '<strong>Shivyah</strong> · captivity; those taken captive',
          description:
            'Shivyah describes the state of being taken from freedom into bondage. Two hundred thousand men, women, and children — entire families — are removed from their homes, their land, their security. They are shivyah, the captives. And the text emphasizes that they are taken by their brethren — the northern kingdom of Israel, the very people Ahaz tried to emulate.',
        },
        {
          kind: 'carry',
          html:
            'The breaking of covenant has immediate consequences. Ahaz chose to walk away from the God of Israel, and what followed was not a slow decline but a catastrophe. The ones he trusted to guide him — the kings of Israel — turned on him. The land was filled with captives. Families were torn apart. This is the reality of apostasy in Scripture: it is not abstract, it is not delayed. It is the breakdown of order, the loss of protection, the shattering of the things we hold dear. Ahaz&apos;s choice to turn away had already cost his people everything.',
        },
        {
          kind: 'reflection',
          id: '28-slaughter',
          prompt: 'When Ahaz turned from God, the protection of the covenant was withdrawn. In the New Testament, Jesus promises that those who follow Him will be protected. What does it mean to you to trust in God&apos;s protection? What threatens that trust?',
        },
      ],
    },

    /* ─── 2 Chronicles 28:9–15 — Oded's Word and Israel's Mercy ────────── */
    {
      ref: '2 Chronicles 28:9–15',
      title: 'The Word of the Prophet Oded — A Moment of Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 9,
              spans: [
                t('But a prophet of the Lord was there, whose name was Oded: and he went out before the host that came to Samaria, and said unto them, Behold, because the Lord God of your fathers was wroth with Judah, he hath delivered them into your hand, and ye have '),
                hg('slain them in a rage that reacheth up unto heaven', '28-9-rage'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And now ye purpose to keep under the children of Judah and Jerusalem for bondmen and bondwomen unto you: but '),
                hp('are there not with you, even with you, sins against the Lord your God', '28-10-your-sins'),
                t('?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Now hear me therefore, and '),
                hp('deliver the captives again', '28-11-deliver'),
                t(', which ye have taken captive of your brethren: for the fierce wrath of the Lord is upon you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-oded',
          html:
            'Oded is a prophet whose name appears only here — his only moment in Scripture is this word spoken to the soldiers of Israel as they bring the captives of Judah back to Samaria. He does not shrink. He does not soften his message. He stands before them and says: the Lord was wroth with Judah, yes. But that does not justify what you have done.',
        },
        {
          kind: 'commentary',
          id: '28-rage',
          html:
            'The slaying "in a rage that reacheth up unto heaven" is vivid language. The fury has been so great, so consuming, that it rises to the heavens themselves. But here is the crucial move in Oded&apos;s logic: yes, the Lord was wroth with Judah. Yes, He delivered them into your hand. But your rage exceeded the measure of God&apos;s wrath. You took the judgment upon yourself and made it your own fury.',
        },
        {
          kind: 'commentary',
          id: '28-your-sins',
          html:
            'Oded turns the accusation back on Israel: "Are there not with you, even with you, sins against the Lord your God?" This is the work of a true prophet — to call judgment not only upon those being judged, but upon those doing the judging. You think you are God&apos;s instrument, but you are also sinners. You too have turned from the covenant. You too stand under God&apos;s wrath. What makes you think you can add more sin on top of that wrath?',
        },
        {
          kind: 'commentary',
          id: '28-deliver',
          html:
            'And then Oded calls them to mercy: deliver the captives. Release them. Let them go back to their brethren. It is a word of power spoken into a moment of brutality. Will anyone listen?',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 12,
              spans: [
                t('Then certain of the heads of the children of Ephraim, Azariah, and Berechiah, and Jehizkiah, and Amasa, stood up against them that came from the war;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And said unto them, Ye shall not bring in the captives hither: for whereas we have offended against the Lord already, ye intend to add more to our sins and to our trespass: for our trespass is great, and there is fierce wrath against Israel.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('So the armed men left the captives and the spoil before the princes and all the congregation.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the men which were expressed by name rose up, and took the captives, and with the spoil clothed all that were naked among them, and arrayed them, and shod them, and gave them to eat and to drink, and anointed them, and carried all the feeble of them upon asses, brought them to Jericho, the city of palm trees, to their brethren: then returned to Samaria.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-ephraim-leaders',
          html:
            'Oded&apos;s word reaches the leaders of Ephraim. Four men are named: Azariah, Berechiah, Jehizkiah, and Amasa. They are the ones who have the courage to stand against the soldiers of war — to say no to the captive-taking. They have heard a prophet speak God&apos;s word, and they have chosen to obey.',
        },
        {
          kind: 'commentary',
          id: '28-restore-captives',
          html:
            'What follows is extraordinary: the armed men release the captives. And then — listen — the named men clothe them, give them food and drink, anoint them, even carry the feeble of them on asses. They do not merely stop doing evil. They do active good. They restore dignity to the humiliated. They heal the wounded. They shepherd the broken back to Jericho, to safety, to their brethren.',
        },
        {
          kind: 'christ',
          id: '28-good-samaritan',
          title: 'Christ Connection — The Good Samaritan Foreshadowed',
          html:
            'When Jesus teaches the parable of the Good Samaritan (Luke 10:30–37), He is drawing on a deep well of meaning. A man is beaten, stripped, left for dead on the road. The priest passes by. The Levite passes by. And then a Samaritan — a member of the very people despised by Jews — stops. He binds his wounds, pours oil and wine, takes him to an inn, cares for him, pays for his recovery. Jesus asks: which of these three was neighbor to the man? And the answer is: the one who had mercy. In 2 Chronicles 28, the people of Israel — the very ones committing the slaughter — are moved to have mercy on those they had taken captive. They clothe the naked, give food to the hungry, carry the weak. They become, in that moment, neighbors. And this prefigures the ultimate neighbor — Christ Himself, who saw us beaten, stripped, and broken by sin, and did not pass by. He stopped. He bound our wounds. He paid the price. He carries us home.',
        },
        {
          kind: 'carry',
          html:
            'In a dark hour, when everything pointed toward hardness — slaughter, captivity, the justice of God — mercy appeared. Not because it was deserved, but because a prophet spoke truth, and certain men listened. They not only stopped doing evil; they began doing good. They restored the dignity of the humiliated. They healed the broken. This is the work of mercy: not merely passive restraint from harm, but active restoration of the harmed. In your own life, where might you stop merely refraining from harm and begin actively restoring?',
        },
        {
          kind: 'reflection',
          id: '28-mercy-moment',
          prompt: 'The men of Ephraim went beyond releasing the captives — they clothed them, fed them, anointed them, cared for the weak. What does it mean to show not just mercy but active restoration to those who have been harmed?',
        },
      ],
    },

    /* ─── 2 Chronicles 28:16–21 — Ahaz Turns to Assyria ────────────────── */
    {
      ref: '2 Chronicles 28:16–21',
      title: 'Ahaz Seeks Help From the Wrong King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 16,
              spans: [
                t('At that time did king Ahaz send unto the kings of Assyria to help him.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('For again the Edomites had come and smitten Judah, and carried away captives.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The Philistines also had invaded the cities of the low country, and of the south of Judah, and had taken Beth-shemesh, and Ajalon, and Gederoth, and Soco with the villages thereof, and Timnah with the villages thereof, and Gimzo with the villages thereof: and they dwelt there.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For the Lord brought Judah low because of Ahaz king of Judah; for he made Judah naked, and transgressed sore against the Lord.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Tilgath-pilneser king of Assyria came unto him, and distressed him, but strengthened him not.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('For Ahaz took away a portion out of the house of the Lord, and out of the house of the king, and of the princes, gave it unto the king of Assyria: but he helped him not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-assyria-help',
          html:
            'Ahaz is desperate. Judah is surrounded: Syria from the north, Israel from the north, Edom from the south, Philistines from the west. Cities are falling. Captives are being taken on every side. And Ahaz, instead of turning back to the God he has forsaken, turns to the king of Assyria. It is the logic of desperation without repentance. He seeks human power instead of divine mercy.',
        },
        {
          kind: 'commentary',
          id: '28-lord-brought-low',
          html:
            'The text is clear: "The Lord brought Judah low because of Ahaz king of Judah." It is not merely that bad things happened. The Lord is actively bringing Judah low — stripping her, humbling her, laying her bare. And why? Because Ahaz has transgressed sore — grossly, heavily — against the Lord. The apostasy has consequences written into the structure of reality itself.',
        },
        {
          kind: 'commentary',
          id: '28-assyria-distresses',
          html:
            'And then the cruel irony: Tilgath-pilneser of Assyria comes to Ahaz — not to help, but to distress him. The king Ahaz hoped would strengthen him instead weakens him further. The human power Ahaz grasped for becomes a scourge in his hand.',
        },
        {
          kind: 'hebrew',
          id: '28-maal',
          title: 'Maal — "Transgress" or "Act Treacherously"',
          script: 'מָעַל',
          translit: '<strong>Maal</strong> · to transgress; to act treacherously; to betray a covenant',
          description:
            'Maal is not merely wrongdoing. It is covenant-breaking, the betrayal of a relationship. When Ahaz transgresses against the Lord, he is not simply doing wrong — he is breaking his covenant with God, betraying the relationship that holds his kingdom together.',
        },
        {
          kind: 'commentary',
          id: '28-temple-spoil',
          html:
            'And then — the final degradation — Ahaz takes from the house of the Lord. He strips the temple of its treasures to pay tribute to the king of Assyria. He has already burned his children. Now he empties the house of God. And none of it helps. Tilgath-pilneser distresses him but strengthens him not.',
        },
        {
          kind: 'carry',
          html:
            'When we seek strength from the world instead of from God, when we grasp for human power instead of turning back to the covenant, we become vulnerable to the very powers we hoped would help us. Ahaz gives everything — his dignity, his wealth, the treasures of the temple — and receives nothing but more distress in return. What in your life have you tried to fix by looking everywhere except to God?',
        },
        {
          kind: 'reflection',
          id: '28-assyria-turn',
          prompt: 'Ahaz faced crisis and turned to Assyria instead of turning back to God. When you face a crisis, where do you instinctively look for help? What would it mean to turn to God first?',
        },
      ],
    },

    /* ─── 2 Chronicles 28:22–25 — The Hardening of the Heart ──────────── */
    {
      ref: '2 Chronicles 28:22–25',
      title: 'The Heart Hardens Further',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 22,
              spans: [
                t('And in the time of his distress did he '),
                hg('trespass yet more', '28-22-trespass-more'),
                t(' against the Lord: this is that king Ahaz.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For he sacrificed unto the gods of Damascus, which smote him: and he said, Because the gods of the kings of Syria help them, therefore will I sacrifice to them, that they may help me. But they were the ruin of him, and of all Israel.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Ahaz gathered together the vessels of the house of God, and cut in pieces the vessels of the house of the Lord, and shut up the doors of the house of the Lord, and he made him altars in every corner of Jerusalem.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And in every city of Judah he made high places to burn incense unto other gods, and provoked to anger the Lord God of his fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-trespass-more',
          html:
            'The phrase is devastating: "In the time of his distress did he trespass yet more." The distress — the consequence of his apostasy — does not turn him back to God. It hardens him. It does not soften his heart; it calcifies it. Instead of repenting, he transgresses more. This is the tragic arc of the hardened heart: not merely that it continues in wrong, but that wrong accelerates in response to judgment.',
        },
        {
          kind: 'commentary',
          id: '28-damascus-gods',
          html:
            'Ahaz has reasoned it out: the gods of Syria seem to help the kings of Syria. So he will sacrifice to them. It is the logic of defeat: what worked for them must work for us. But the text offers a clear response: "they were the ruin of him, and of all Israel." The gods of Damascus do not help. They destroy. Ahaz has confused the cause with the effect. The power of Syria comes not from their gods, but from the military strength God has allowed them as an instrument of judgment against Judah.',
        },
        {
          kind: 'commentary',
          id: '28-vessels-cut',
          html:
            'Now Ahaz does the unthinkable. He gathers the vessels of the house of God — the sacred vessels used in the temple worship — and cuts them in pieces. He is literally destroying the instruments of covenant worship. It is not merely that he abandons the God of Israel. He defaces the very house where He was worshipped.',
        },
        {
          kind: 'carry',
          html:
            'Ahaz shut the doors of the house of the Lord. He filled Jerusalem with altars to false gods. He spread high places for idolatry throughout every city of Judah. This is not coexistence — allowing both the true God and false gods to be honored. This is replacement. The covenant God is being systematically pushed out, locked away, forgotten. What had been the center of Judah&apos;s life — the house of the Lord — is now closed. And in its place, the voices of demons multiply.',
        },
        {
          kind: 'reflection',
          id: '28-heart-hardens',
          prompt: 'Judgment did not turn Ahaz toward repentance; it hardened his heart further. When you experience a consequence or setback, what tempts you to move deeper into wrong rather than turning back to God?',
        },
      ],
    },

    /* ─── 2 Chronicles 28:26–27 — The End of Ahaz ──────────────────────── */
    {
      ref: '2 Chronicles 28:26–27',
      title: 'Ahaz Dies — Rejected',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 26,
              spans: [
                t('Now the rest of his acts and of all his ways, first and last, behold, they are written in the book of the kings of Judah and Israel.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Ahaz slept with his fathers, and they buried him in the city, even in Jerusalem: but they brought him not into the sepulchres of the kings of Israel. And Hezekiah his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '28-acts-written',
          html:
            'The text records that Ahaz&apos;s acts are written in the book of the kings of Judah and Israel. But here is the note: they are not here. The reader is referred elsewhere. The chronicler does not dwell on Ahaz&apos;s record. It is as if the narrative turns away. Ahaz&apos;s reign is summed up in summary, not in the detailed account given to other kings.',
        },
        {
          kind: 'commentary',
          id: '28-no-kingly-burial',
          html:
            'And when Ahaz dies, he is denied the final honor that had been given to the kings of Judah. He is buried in Jerusalem, yes — but not in the sepulchres of the kings. The burial itself is a rejection. Even in death, Ahaz is marked as having fallen away from the line of covenant kings. He is not buried as a king of Israel, the true Israel. He is buried as one who has broken covenant.',
        },
        {
          kind: 'christ',
          id: '28-hezekiah-following',
          title: 'Christ Connection — The New King Who Restores',
          html:
            'Hezekiah his son reigned in his stead. And what does the reader of Scripture know about Hezekiah? That he will open the doors of the Lord&apos;s house that Ahaz closed. That he will cleanse the temple. That he will call Judah back to covenant. That he will restore what his father demolished. This is a pattern: the rejected king is followed by the restoring king. And it prefigures the ultimate pattern in Scripture — the rejected Messiah, Jesus Christ, who comes not after the pattern of Ahaz (who hardened his heart, closed the doors, turned to false gods), but as the King who opens all doors, who restores the covenant, who calls people back to the Father. What Ahaz tore down, Christ rebuilds. What Ahaz closed, Christ opens. What Ahaz turned away from, Christ restores. And where Ahaz refused to repent even unto judgment, Christ offers repentance to the uttermost.',
        },
        {
          kind: 'carry',
          html:
            'The reign of Ahaz is the nadir — the lowest point in Judah&apos;s spiritual history. He begins on a throne and ends in a dishonored grave. The path from one to the other is not accident or misfortune. It is choice. He chose to walk in the ways of the kings of Israel. He chose to make idols. He chose to burn his children. He chose to turn to Assyria. He chose to harden his heart in the face of judgment. And his choice is written into his very funeral. But then — the grace of God is such that after the darkest king comes the king of restoration. The doors are reopened. The house is cleansed. The covenant is remembered. What Ahaz destroyed, Hezekiah rebuilds. This is the rhythm of Scripture: judgment, then mercy; death, then life; the closing of doors, then the opening of them.',
        },
        {
          kind: 'reflection',
          id: '28-end-of-ahaz',
          prompt: 'Ahaz left office having closed the doors of the house of God. His son would reopen them. In your own life, what doors have you closed that need to be reopened? What would repentance and restoration look like?',
        },
      ],
    },
  ],
};
