import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 3 Maccabees 1 — Pride Before the Holy God
 *
 * 3 Maccabees recounts the persecution of Egyptian Jews by Ptolemy IV
 * Philopator after his military victory at Raphia (217 BC). Chapter 1
 * narrates Ptolemy&apos;s audacious attempt to enter the holy of holies
 * in the Jerusalem temple, and God&apos;s supernatural intervention to
 * stop him—a moment of divine protection and the revelation of whose
 * kingdom is truly supreme.
 *
 * This is not a story about punishment alone, but about the boundary
 * between the sacred and the profane, and what happens when a mortal
 * king—intoxicated by conquest—reaches for divinity itself.
 */
export const THIRD_MACCABEES_1: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 16 },
  intros: [
    'Ptolemy IV Philopator has just defeated Antiochus III at Raphia—a stunning victory that leaves Egypt the dominant power in the eastern Mediterranean. The king is drunk on conquest, secure in his own magnificence. To him, all cities and temples are now subject to Egypt, and all borders are his to cross.',
    'But the Jews of Jerusalem have a different King—an invisible one who dwells in the holy of holies, the most sacred space in their temple. When Ptolemy decides he will enter that inner sanctuary to "know what mysteries are hidden," he is not asking permission. He is declaring that even the mysteries of God are now his to claim.',
    'What follows is a collision between human pride and divine holiness—between a king who will not accept a boundary and a God who makes boundaries absolute.',
  ],

  sections: [
    /* ─── 3 Maccabees 1:1–5 — Ptolemy&apos;s Victory at Raphia ────────────────── */
    {
      ref: '3 Maccabees 1:1–5',
      title: 'Victory at Raphia — The King&apos;s Boasting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1,
              t('When '),
              hg('Ptolemaeus had taken possession of the regions of Syria and Phoenicia', 'ptolemy-conquest'),
              t(', being elated in mind, he conceived the purpose of visiting the cities of Judea and Jerusalem, to accomplish his intended design.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ptolemy-conquest',
          html:
            'Ptolemy has conquered. The military victory at Raphia (217 BC) has made him master of vast territories. He is "elated in mind"—the Greek word conveys not just joy but a kind of intoxicated euphoria. This is not the careful deliberation of a wise ruler. This is a king high on victory, ready to assert his will everywhere.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(2,
              t('And when he came to Jerusalem, he was amazed at the wealth and the glory of the city, and at the magnificence of the temple and the riches which had been gathered there. '),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'amazement-temple',
          html:
            'Ptolemy walks through Jerusalem and sees splendor—the city itself is wealthy, the temple is magnificent. But amazement does not lead him to reverence. Instead, it leads him to assumption: <em>if the city is this wealthy, if the temple is this magnificent, then surely it contains treasures and mysteries that should be mine to possess.</em>',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3,
              t('When therefore he heard, that '),
              hg('the naos of the Hebrews was at Jerusalem', 'naos-sanctuary'),
              t(', he desired to enter in and to see it, that he might know what was within.'),
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'naos-sanctuary',
          title: 'Naos — The Inner Sanctuary',
          script: 'ναός',
          translit: '<strong>Naos</strong> · the inner sanctuary; the holy of holies; the dwelling place of God',
          description:
            'The naos is the innermost chamber of the temple, separated from the rest by a veil. Inside is the ark of the covenant, the mercy seat, and the very presence of God. No human being may enter the naos except the high priest, and he may do so only once per year, on the Day of Atonement. For a foreigner, a pagan king, even to speak of entering the naos is blasphemy. It is the boundary that defines what is sacred.',
        },

        {
          kind: 'carry',
          html:
            'Ptolemy sees magnificence and interprets it as an invitation to possession. He assumes that because he has conquered the city, he has the right to know its deepest secrets. There is a kind of pride that looks at what is holy and sees only what can be seized. The inner sanctuary, to Ptolemy, is just another treasure to be claimed.',
        },

        {
          kind: 'reflection',
          id: 'reflect-seize',
          prompt:
            'What sacred or holy things have you tried to claim by force or ambition? What have you assumed was yours to take simply because you had power?',
        },
      ],
    },

    /* ─── 3 Maccabees 1:6–9 — Ptolemy States His Purpose ────────────────────── */
    {
      ref: '3 Maccabees 1:6–9',
      title: 'The King&apos;s Declared Intent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(7,
              t('And the king, saying unto those about him, '),
              hp('Why will not ye suffer me to enter the temple? Are ye afraid of the temple, and of the sacrifice which is offered in the temple?', 'king-demand'),
              t(' Hear therefore, that I am willing to enter.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-demand',
          html:
            'The king frames his demand as a question: Why will you not let me enter? Are you simply afraid? He dismisses the boundary as though it were rooted only in timidity, not in law or holiness. His tone is contemptuous. He is not asking permission; he is demanding to know why anyone would dare to say no to him.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(8,
              t('And he spake unto the high priest saying, I will even go in alone into the naos, for I am desirous to know what mysteries are hidden within, and what the purpose of God is concerning the Jews, whom ye declare to be under His special care.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mysteries-hidden',
          html:
            'Notice the king&apos;s language: "I will even go in <em>alone</em>." He is not asking the high priest to accompany him or to prepare the way. He will enter the holy of holies by his own will, with no intermediary, no preparation, no submission to Jewish law or custom. And he will do it to "know what mysteries are hidden." He is curious, yes—but with a conquistador&apos;s curiosity. He wants to seize knowledge that is not his to possess.',
        },

        {
          kind: 'greek',
          id: 'mysterion',
          title: 'Mysterion — "Mystery" or "Hidden Thing"',
          script: 'μυστήριον',
          translit: '<strong>Mysterion</strong> · a hidden or sacred mystery; that which is concealed from the uninitiated',
          description:
            'A mysterion is not something unknown, but something hidden—hidden by design, revealed only to those who are initiated or chosen. For Ptolemy to claim he will "know what mysteries are hidden" is to claim he will break the veil between the sacred and the profane, between what God has chosen to reveal and what God chooses to conceal.',
        },

        {
          kind: 'carry',
          html:
            'The king speaks as though the boundaries of the temple are mere obstacles to his will. He assumes that because he has the power, he has the right. He does not see the naos as the place where God dwells, but as a locked room containing secrets he wants to unlock. What he cannot see—what his pride prevents him from seeing—is that the boundary itself is the message. The locked door says: <em>Here is holiness. Here you cannot go.</em> And the king answers: <em>Watch me.</em>',
        },

        {
          kind: 'reflection',
          id: 'mysteries-seize',
          prompt:
            'What divine mysteries are you trying to seize rather than receive? What would change if you acknowledged that some things are meant to be hidden, that not all doors are yours to open?',
        },
      ],
    },

    /* ─── 3 Maccabees 1:10–13 — The Priests&apos; Alarm ───────────────────────── */
    {
      ref: '3 Maccabees 1:10–13',
      title: 'The Priests Cry Out Against Defilement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(10,
              t('But the priests, falling down before the Lord, with their vestures rent, and making great lamentation, began to pray unto the Lord, saying,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'priests-prayer',
          html:
            'The priests understand what Ptolemy does not: what he is threatening to do is not merely an act of disrespect. It is defilement of the holiest place. They do not argue with the king. They do not try to convince him by reason. They fall before the Lord. They tear their vestments. They cry out in prayer. They know that this moment is not in their hands—it is in God&apos;s.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(11,
              t('O Lord, '),
              hg('who art the God of all power, the Most Mighty, and Most Merciful', 'god-mighty'),
              t(', Thou alone art the Lord, and there is none other that is able to resist Thy power. Thou that art the protector and saviour of the temple, defend the sanctuary, that no man may profane it. We beseech Thee, hear our prayers.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-mighty',
          html:
            'The priests call upon the attributes of God—all power, mighty and merciful. They remind God that He alone can resist the power of the king. They invoke God not as a distant deity but as "the protector and saviour of the temple"—the one who takes personal responsibility for the sanctity of His house. Their prayer is not a plea for justice; it is a plea for <em>preservation</em>. Preserve the sanctuary. Do not let it be profaned.',
        },

        {
          kind: 'carry',
          html:
            'Notice who acts first: not the people, not the city, but the priests. They see the threat and they pray. They do not organize a defense. They do not bargain with the king. They bring the crisis to God. This is prayer at its most profound—not as a request for favors, but as an act of surrender, a placing of the burden where it truly belongs.',
        },

        {
          kind: 'reflection',
          id: 'when-pray',
          prompt:
            'When do you pray? At the moment when you see a threat and understand that the situation is beyond your control, or only after you have exhausted every other option?',
        },
      ],
    },

    /* ─── 3 Maccabees 1:14–23 — The People&apos;s Prayer and Simon&apos;s Intercession ──── */
    {
      ref: '3 Maccabees 1:14–23',
      title: 'The People&apos;s Cry and the High Priest&apos;s Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(14,
              t('And when King Ptolemaeus had heard these prayers, he went unto the temple, being yet minded to accomplish that which he had determined. '),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ptolemy-unmoved',
          html:
            'The priests pray. The king hears their prayer. And the king, unmoved by their entreaties, proceeds toward the temple anyway. Prayer does not change his mind because his mind is not open to change. He has decided, and decisions made in pride are rigid. He has not come to Jerusalem to listen; he has come to assert his will.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(15,
              t('Then all the multitude of the people began to pray vehemently, falling down upon the ground, stretching out their hands unto heaven, imploring the Lord, that He would not suffer His sanctuary to be defiled.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'multitude-prayer',
          html:
            'Now the entire people join the priests in prayer. The whole city is on its knees. They are not praying for their own safety or their own honor—they are praying for <em>the sanctuary</em>. The concern is not self-preservation but the holiness of God&apos;s house. They throw themselves on the mercy of God with nothing else to offer but their desperation and their faith.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16,
              t('And the high priest Simon, '),
              hy('clothed in his priestly garments, and falling down before the altar', 'simon-intercession'),
              t(', lifted up his hands and made a prayer unto the Lord, saying,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'simon-intercession',
          html:
            'The high priest steps forward. Simon is not merely one of many priests—he is the high priest, the one authorized to enter the holy of holies once yearly on the Day of Atonement. He wears his priestly garments. He falls before the altar. This is not a casual prayer; it is an act of sacred intercession. He stands in the gap between God and the people.',
        },

        {
          kind: 'hebrew',
          id: 'cohen',
          title: 'Cohen — "Priest"; The One Who Stands Between',
          script: 'כֹּהֵן',
          translit: '<strong>Cohen</strong> · priest; one who offers sacrifice; one who stands in the gap',
          description:
            'The priest is the intermediary, the one who stands between the people and God. He knows God&apos;s holiness firsthand—he is the only one permitted in the holy of holies. When the high priest prays, he prays with the authority and knowledge that comes from standing in the presence of the Most High.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(17,
              t('O Lord, '),
              hp('Thou that art the God of heaven, and hast the power over all things', 'lord-sovereign'),
              t(', '),
              hg('look upon us that are appointed to be Thy people in this hour of our distress', 'appointed-people'),
              t(': for, behold, the king hath gone about to accomplish his wicked purpose, and the sanctuary that hath been holy in all ages is now in danger of being polluted by him that is unclean.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-sovereign',
          html:
            'Simon begins with the fundamental truth: God is sovereign over all things. The king, for all his power, is not ultimate. God alone is ultimate. This is not flattery or political hedging. This is the ground of all prayer—the acknowledgment of who God truly is.',
        },
        {
          kind: 'commentary',
          id: 'appointed-people',
          html:
            'Simon claims the covenant: we are "Thy people...appointed" in this hour. He does not beg for mercy on the basis of Jewish worth or power. He appeals to the covenant relationship itself. God has chosen Israel. That choice is not revoked by circumstance or by a foreign king&apos;s ambition.',
        },

        {
          kind: 'carry',
          html:
            'The high priest intercedes not for himself but for the sanctuary and for the people. He stands in the gap. This is the role of every true priest—to mediate between the sacred and the profane, between heaven and earth. Simon&apos;s prayer reminds us that there are moments when our only resource is the one who has been authorized to enter the presence of God.',
        },

        {
          kind: 'reflection',
          id: 'stand-gap',
          prompt:
            'Who stands in the gap for you? For whom do you stand in the gap? What does it mean to intercede—to bring others&apos; burdens before God, not your own?',
        },
      ],
    },

    /* ─── 3 Maccabees 1:24–29 — God's Answer: Ptolemy Struck ───────────────── */
    {
      ref: '3 Maccabees 1:24–29',
      title: 'God Acts: The King is Stopped',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(24,
              t('And when he was yet speaking, the Lord '),
              hp('gave a sign, and struck him with a great fear, so that he could not move forward', 'lord-struck'),
              t(', but was kept back by the power of God.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-struck',
          html:
            'The prayer is not yet finished when God acts. Prayer does not need to be eloquent or complete for God to respond. The moment the petition rises from a sincere heart, God hears. And God does not defeat the king through violence. He defeats him through <em>phobos</em>—a supernatural fear that paralyzes his will. The king who boasted of his power cannot move. The invisible God overcomes the visible king.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(25,
              t('Then the king, being astonied at this divine power, '),
              hg('gave praise and honour to the Lord', 'ptolemy-acknowledges'),
              t(': for the thing which he had determined in his heart could not be brought to pass.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ptolemy-acknowledges',
          html:
            'The king is "astonied"—amazed, shocked out of his assurance. He has met a power greater than his own. And faced with this reality, he does what Ptolemy the conqueror would never willingly do: he gives praise and honor to the Lord. He is forced into humility. The God he dismissed as the object of local superstition has revealed Himself as sovereign.',
        },

        {
          kind: 'greek',
          id: 'phobos-fear',
          title: 'Phobos — Fear, Awe, Sacred Trembling',
          script: 'φόβος',
          translit: '<strong>Phobos</strong> · fear; terror; awe; reverent trembling before God',
          description:
            'Phobos is not anxiety or mere emotion. It is the encounter with a reality that transcends the self. When Ptolemy experiences phobos before God, he is encountering something that unmakes his pride, that reveals his actual place in the cosmos. He is moved from the position of master to the position of creature.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(27,
              t('And now, when the king had come to the holy mountain, and heard a voice from above, saying, Go not in, he was greatly afraid, and said unto them that were with him, '),
              hg('Great is the God of the Jews, whose power is greater than that of all kings', 'god-power'),
              t(': yea, I will declare it unto all the world.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'god-power',
          html:
            'Ptolemy not only ceases his assault on the sanctuary—he becomes an advocate for the God he tried to violate. He declares publicly that the God of the Jews is mighty, that His power exceeds that of all kings. The king who entered Jerusalem to assert his dominion exits proclaiming his submission. His conversion is complete, though it may not be lasting.',
        },

        {
          kind: 'christ',
          id: 'christ-enters',
          title: 'Christ Connection — The One Who Enters',
          html:
            'Ptolemy could not enter the holy of holies. No human being can. But Jesus did. The book of Hebrews tells us that <em>Christ is entered into the holy places, made by hands, which are the figures of the true; but into heaven itself, now to appear in the presence of God for us</em> (Hebrews 9:24). Where Ptolemy was struck down, Christ was welcomed. Where the king was paralyzed by fear, Christ entered in love. He did not come by conquest or ambition, but by sacrifice. He did not seize the holy place; He opened it for all who would follow Him.',
        },

        {
          kind: 'carry',
          html:
            'The boundary is real. The sanctuary is holy. And we cannot breach it by our own will or power. But the barrier is not meant to keep us forever at a distance. The veil between the human and the divine is meant to teach us humility—that we cannot storm heaven, cannot seize God&apos;s presence, cannot compel Him by our ambition. But it is also meant to lead us to the one who can. Jesus alone enters the holy of holies on our behalf. And through Him, we are given access—not as conquerors, but as those invited, received, loved.',
        },

        {
          kind: 'reflection',
          id: 'access-invite',
          prompt:
            'Where have you tried to force your way in, to seize what is sacred? What would it look like to stop trying to break in, and instead to wait for the one who opens the door?',
        },
      ],
    },

    /* ─── Closing Artwork and Divider ──────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /temple|sanctuary|priest/i,
          caption:
            'The Second Temple as it stood in Jerusalem. The inner sanctuary, the holy of holies, was the most sacred place, separated from the outer courts and accessible only to the high priest once yearly.',
        },
        { kind: 'divider' },
      ],
    },
  ],

  bottomShare: {
    quote:
      'When King Ptolemaeus heard the prayers and went toward the temple, the Lord gave a sign and struck him with a great fear, so that he could not move forward. Great is the God of the Jews, whose power is greater than that of all kings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 1 · Study Guide',
  },

  hasHebrew: true,
};
