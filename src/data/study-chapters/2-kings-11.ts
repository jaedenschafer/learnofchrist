import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Kings 11 — Athaliah's Coup and the Hidden King
 *
 * When King Ahaziah dies, his mother Athaliah seizes power and slaughters all
 * the royal seed. But one child escapes: Joash, hidden by his aunt Jehosheba
 * and the priest Jehoiada in the temple of the Lord for six years. In the
 * seventh year, Jehoiada rallies the captains and the guard, crowns the boy
 * king, and in a single day restores the covenant between the Lord, the king,
 * and the people. This is a chapter about the preservation of the Davidic line
 * against every threat — and the faithful remnant who risk everything to keep
 * the promise alive.
 */
export const KINGS_2_11: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 11,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 21 },
  opener: {
    matchTitle: /The Death of Athaliah/i,
    caption: '2 Kings 11',
  },
  intros: [
    'The book of 2 Kings opens a long shadow over Israel and Judah. Kings rise and fall. Some turn to the Lord; most turn from him. The northern kingdom spirals toward exile. The southern kingdom staggers under the weight of its own unfaithfulness. And yet, woven through this history of decline is a thread that never breaks: God&apos;s covenant with David. His seed will not fail. His throne will not be forsaken. Even when enemies close in, even when the bloodline itself is threatened with extinction, God preserves a remnant — hidden, protected, faithful.',
    '2 Kings 11 is the story of that preservation. It is the story of a woman who saw her son the king cut down, and in her rage, she rose up to destroy everyone who stood between her and absolute power. And it is the story of an aunt and an uncle — a woman and a priest — who stole a child in the night and kept him safe while a usurper reigned. For six years, Joash lived in hiding within the very house of the Lord. And in the seventh year, the truth came out. The child king was crowned. The covenant was restored. And the seed of David lived to see another day.',
  ],

  bottomShare: {
    label: 'Share 2 Kings 11',
    quote:
      'In the darkest hour, when the heir to David&apos;s throne faced extinction, a faithful aunt and priest hid the child in the temple of the Lord. Six years of hidden faithfulness led to a kingdom restored and a covenant renewed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 11 · Study Guide',
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
    /* ─── 2 Kings 11:1–3 — Athaliah's Slaughter and Jehosheba's Rescue ────── */
    {
      ref: '2 Kings 11:1–3',
      title: 'The Slaughter and the Secret Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And when Athaliah the mother of Ahaziah saw that her son was dead, she arose and '),
                hg('destroyed all the seed royal', '2k11-seed-royal'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But '),
                hg('Jehosheba, the daughter of king Joram, sister of Ahaziah', '2k11-jehosheba'),
                t(', took Joash the son of Ahaziah, and stole him from among the king&apos;s sons which were slain; and they hid him, even him and his nurse, in a bedchamber from Athaliah, so that he was not slain.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he was with her hid in the house of the Lord six years. And Athaliah did reign over the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k11-seed-royal',
          html:
            'Athaliah, the mother of a fallen king, sees an opportunity. With her son dead, she moves to consolidate power by eliminating any possible rival. She destroys "all the seed royal" — the royal offspring, the heirs, anyone who might claim the throne she now covets. This is not an act of mourning for a son. This is the ruthlessness of a woman willing to commit genocide to hold power. The Davidic line, the covenant promise, stands on the edge of extinction.[res:sefaria-elisha-ministry][res:bible-odyssey-elisha][res:iaa-northern-kingdom]',
        },
        {
          kind: 'commentary',
          id: '2k11-jehosheba',
          html:
            'Into this moment of terror steps Jehosheba — the daughter of King Joram, the sister of the dead king Ahaziah. She is brave, quick, and deeply faithful. She sees the children being slaughtered and acts. She steals Joash, the young son of her brother, and takes him into hiding with his nurse. The text tells us almost nothing about her motives, her fear, her courage — but the action speaks. She risked everything. If Athaliah had discovered that she harbored the heir, Jehosheba herself would have been slain.',
        },
        {
          kind: 'hebrew',
          id: '2k11-yoash',
          title: 'Yoash — "Given by Yah"',
          script: 'יוֹאָשׁ',
          translit: '<strong>Yoash</strong> · The Lord gives',
          description:
            'The boy king&apos;s name carries a meaning of profound assurance: Yoash means "given by Yah" or "the Lord gives." In the moment when Athaliah was trying to murder every heir, when human power seemed to be erasing the Davidic seed, the child bore a name that affirmed a different truth: that he was a gift of the Lord. His very name was a covenant promise in flesh.',
        },
        {
          kind: 'commentary',
          id: '2k11-temple-refuge',
          html:
            'The refuge is the house of the Lord — the temple itself. For six years, Joash lived hidden within its walls. Not in a palace, where assassins could find him. Not in exile abroad, cut off from his people. But in the sanctuary, in the presence of God, guarded by the priest Jehoiada. The temple becomes a place of covenant protection, a reminder that even when the kingdom itself is in the hands of a usurper, the house of God stands as a refuge for the faithful.',
        },
        {
          kind: 'carry',
          html:
            'There are moments in life when everything seems to be collapsing. When the powerful move to destroy what you love, when faithfulness seems only to deepen your peril. Jehosheba did not stand and fight with an army. She did not write letters or protest in the streets. She did what one woman could do: she hid the child. She kept faith. She waited. And in the waiting, in the hidden work, in the sacrifice that no one saw — there was the seed of a future kingdom. What small faithfulness are you called to in the darkness? What hidden work might you be the only one to do?',
        },
        {
          kind: 'reflection',
          id: '2k11-athaliah-slaughter',
          prompt: 'Jehosheba risked her own life to hide the heir to the throne. What would it cost you to protect something you believed God had called you to protect?',
        },
      ],
    },

    /* ─── 2 Kings 11:4–8 — The Conspiracy in the Temple ────────────────────── */
    {
      ref: '2 Kings 11:4–8',
      title: 'The Priest&apos;s Covenant and the Seventh Year',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('And the seventh year Jehoiada sent and fetched the rulers of hundreds, with the captains and the guard, and brought them to him into the house of the Lord, and made a covenant with them, and took an oath of them in the house of the Lord, and shewed them the king&apos;s son.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he commanded them, saying, This is the thing that ye shall do; A third part of you that enter in on the sabbath shall even be keepers of the watch of the king&apos;s house;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And a third part shall be at the gate of Sur; and a third part at the gate behind the guard: so shall ye keep the watch of the house, that it be not broken down.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And two parts of all you that go forth on the sabbath, even they shall keep the watch of the house of the Lord about the king.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And ye shall compass the king round about, every man with his weapons in his hand: and he that cometh within the ranges, let him be slain: be ye with the king as he goeth out and as he cometh in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k11-seventh-year',
          html:
            'Six years pass in silence. The boy grows. The usurper reigns. And then, in the seventh year, Jehoiada the priest acts. He gathers the military captains and the royal guard — the very men who serve the state, who have been under Athaliah&apos;s command. He brings them into the house of the Lord and reveals the secret he has kept: there is a king. The boy lives. And he makes a covenant with them before God.',
        },
        {
          kind: 'commentary',
          id: '2k11-jehoiada-priest',
          html:
            'Jehoiada is the one constant in this story. He is the priest — the keeper of the covenant, the representative of God in the sanctuary. For six years, he has sheltered the heir. He has watched over the boy in the temple. He has waited. And now he orchestrates a revolution that is also a covenant renewal. He does not act for political power. He acts to restore what God had promised: that the seed of David would continue, and that the king would stand in covenant with the Lord.',
        },
        {
          kind: 'commentary',
          id: '2k11-military-plan',
          html:
            'Jehoiada divides the captains into three units. They will guard every gate, every entrance, every boundary of the temple and the king&apos;s house. The plan is military in its precision: those who enter on the sabbath will provide security; those who go out will accompany the king. Any unauthorized person who crosses the boundary will be slain. This is not the work of a moment. It is meticulous, deliberate, and aimed at a single purpose: to get the boy king safely crowned.',
        },
        {
          kind: 'hebrew',
          id: '2k11-yehoyada',
          title: 'Yehoyada — "The Lord Knows"',
          script: 'יְהוֹיָדָע',
          translit: '<strong>Yehoyada</strong> · The Lord knows; Yah knows',
          description:
            'The priest&apos;s name itself is a declaration: Yehoyada, "the Lord knows." In the darkness of Athaliah&apos;s reign, when the seed of David seemed lost, when all seemed hopeless, the priest carried a name that affirmed an unshakeable truth: the Lord knows. The Lord sees. The Lord will act. And through the faithful work of one who bore that name, God&apos;s covenant came to light.',
        },
        {
          kind: 'carry',
          html:
            'Jehoiada waited six years. He did not rush. He did not despair. He prepared. He taught the boy. He watched for the moment when the military men who held power could be brought to see the truth — that there was a rightful king, that the covenant stood, that their duty was to protect the Lord&apos;s anointed, not the usurper on the throne. Sometimes faithfulness means waiting. Sometimes it means preparing, educating, and speaking truth to power at exactly the right moment. When is your moment?',
        },
        {
          kind: 'reflection',
          id: '2k11-covenant',
          prompt: 'Jehoiada made a covenant with the captains in the house of the Lord, swearing them to protect the true king. What covenants bind you — to God, to others, to a vision of justice?',
        },
      ],
    },

    /* ─── 2 Kings 11:9–12 — The Coronation ────────────────────────────────── */
    {
      ref: '2 Kings 11:9–12',
      title: 'The Boy King Crowned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('And the captains over the hundreds did according to all things that Jehoiada the priest commanded: and took every man his men that were to come in on the sabbath, with them that should go out on the sabbath, and came to Jehoiada the priest.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And to the captains over the hundreds the priest gave king David&apos;s spears and shields, that were in the temple of the Lord.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the guard stood, every man with his weapons in his hand, round about the king, from the right corner of the temple to the left corner of the temple, along by the altar and the temple.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he brought forth the king&apos;s son, and put the crown upon him, and gave him the testimony; made him king, and anointed him; and they clapped their hands, and said, God save the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k11-king-david-spears',
          html:
            'The weaponry is symbolic: King David&apos;s spears and shields. The priest does not arm the captains with new weapons. He reaches back to the spears and shields of David — the greatest king, the man after God&apos;s own heart, the one who conquered Israel&apos;s enemies and established the kingdom. To take up David&apos;s weapons is to take up his covenant, his calling, his vision. The new king is placed in the lineage of the greatest.',
        },
        {
          kind: 'commentary',
          id: '2k11-coronation-moment',
          html:
            'The coronation itself is a sacramental moment. Jehoiada brings forth the boy. He places the crown upon him. He gives him "the testimony" — the law of the Lord, the covenant scroll, the constitution of the kingdom written by God Himself. He anoints him — the oil of the Lord poured over his head, marking him as chosen, as God&apos;s elect. And the people respond: they clap their hands and cry, "God save the king." The hidden child becomes the visible king, revealed and recognized.',
        },
        {
          kind: 'commentary',
          id: '2k11-age-of-king',
          html:
            'The text will tell us that Joash was seven years old when he began to reign. A child king. He cannot rule himself. He cannot make decisions. He is too young. But he is the lawful heir, the anointed one, the one through whom the covenant is restored. The kingdom is not ruled by a child&apos;s wisdom. It is ruled by the covenant itself, by the priests and captains who stand in the breach and uphold the law of the Lord. This is theocracy at its clearest: the kingdom belongs to God, and those who serve it are servants of God.',
        },
        {
          kind: 'hebrew',
          id: '2k11-athaliah',
          title: 'Athaliah — "The Lord is Exalted"',
          script: 'עֲתַלְיָה',
          translit: '<strong>Athaliah</strong> · The Lord is exalted; Yah is exalted',
          description:
            'Even the name of the usurper carries a irony. Athaliah means "the Lord is exalted," yet she sought to exalt herself by destroying the Lord&apos;s anointed. She bore a name that testified against her own actions. And when the true king is crowned, when the covenant is restored, the truth of that name is vindicated — the Lord is indeed exalted, and all human attempts to usurp His purposes are revealed as temporary and futile.',
        },
        {
          kind: 'christ',
          id: '2k11-hidden-king',
          title: 'Christ Connection — The Hidden King Who Emerges',
          html:
            'In this chapter, we see a pattern that echoes through Scripture and culminates in Christ. The heir to the throne is hunted. He is hidden away. He is protected in secret by the faithful remnant. He grows in hiddenness. And in God&apos;s appointed time, he is revealed and crowned. This is the pattern of Jesus. He came as a child, hidden in Egypt, protected from Herod&apos;s sword. He grew "in wisdom and stature" (Luke 2:52), hidden from the notice of the world. And at His baptism and transfiguration and resurrection, He was revealed as the King — anointed, crowned, recognized by the faithful. Hebrews 2:14 promises that Christ came to "destroy him that had the power of death, even the devil." Like Joash, Jesus came to undo the work of those who sought to destroy God&apos;s purposes. But unlike Joash, Christ does not merely restore a kingdom. He establishes a kingdom that will never be overthrown.',
        },
        {
          kind: 'carry',
          html:
            'The boy king was crowned while Athaliah still lived. The usurper was still in the land. The old order had not yet been swept away. Yet the true order was restored. The covenant was renewed. The people clapped their hands. Whatever Athaliah did from that moment forward, she no longer ruled in covenant with the Lord. The sacred had been restored. Sometimes restoration does not wait for complete victory. Sometimes it begins in the midst of the old order, hidden at first, and grows until it is undeniable.',
        },
        {
          kind: 'reflection',
          id: '2k11-boy-king',
          prompt: 'Joash was crowned at seven years old, unable to rule himself. What does it mean to claim a new identity before you are ready to live fully into it? How does covenant community help us grow into who we are meant to be?',
        },
      ],
    },

    /* ─── 2 Kings 11:13–16 — Athaliah's Cry and Her Judgment ──────────────── */
    {
      ref: '2 Kings 11:13–16',
      title: 'The Usurper Discovered and Condemned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 13,
              spans: [
                t('And when Athaliah heard the noise of the guard and of the people, she came to the people into the temple of the Lord.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And when she looked, behold, the king stood by a pillar, as the manner was, and the princes and the trumpeters by the king, and all the people of the land rejoiced, and blew with trumpets: and Athaliah rent her clothes, and cried, Treason, Treason.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But Jehoiada the priest commanded the captains of the hundreds, the officers of the host, and said unto them, Have her forth without the ranges: and him that followeth her kill with the sword. For the priest said, Let her not be slain in the house of the Lord.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they laid hands on her; and she went by the way by the which the horses came into the king&apos;s house: and there was she slain.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k11-athaliah-discovers',
          html:
            'Athaliah hears the noise — the sound of celebration, of trumpets, of the people rejoicing. She comes to the temple to investigate and sees what she did not expect: a boy standing by the pillar, crowned, with princes around him and trumpeters proclaiming him. She understands immediately. Everything she has built is collapsing. She tears her clothes — a gesture of absolute devastation. And she cries out: "Treason, treason." She accuses the nation of treason, but the truth is sharper: it is she who has been committing treason against the Lord&apos;s anointed.',
        },
        {
          kind: 'commentary',
          id: '2k11-not-in-temple',
          html:
            'Jehoiada the priest does not allow her to be killed in the temple. The house of the Lord must remain holy, untainted by bloodshed — even the bloodshed of a usurper. She is led out, outside the boundaries of the sacred space, and there she is executed by the sword. Justice is done, but the sanctuary is preserved. The holiness of God&apos;s house is more important than the convenience of judgment.',
        },
        {
          kind: 'commentary',
          id: '2k11-death-of-usurper',
          html:
            'With Athaliah&apos;s death, the immediate threat is ended. The woman who sought to destroy the Davidic line, who murdered the royal seed, who usurped the throne, is herself removed from the land. She does not escape. She does not retire to a fortress. She is brought to swift justice by the covenant people.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world where usurpation often goes unpunished. Where those who seize power, who destroy innocents to hold their position, often die in their beds, honored and celebrated. But Scripture speaks a different word: judgment is real. It may be delayed. It may be hidden for a season. But it is sure. The usurper falls. The covenant people stand. The anointed is restored. In what ways has God&apos;s justice proved true in your own life, even if it took time?',
        },
        {
          kind: 'reflection',
          id: '2k11-athaliah-judgment',
          prompt: 'Athaliah saw everything she had built collapse in a moment. Have you ever experienced a sudden reversal — a moment when you recognized you had built something on a false foundation?',
        },
      ],
    },

    /* ─── 2 Kings 11:17–21 — The Covenant Renewed ────────────────────────── */
    {
      ref: '2 Kings 11:17–21',
      title: 'The Covenant Renewed with the Lord and the People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 17,
              spans: [
                t('And '),
                hg('Jehoiada made a covenant between the Lord and the king and the people', '2k11-covenant-three'),
                t(', that they should be the Lord&apos;s people; between the king and the people.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And all the people of the land went into the house of Baal, and brake it down; his altars and his images brake they in pieces thoroughly, and slew Mattan the priest of Baal before the altars. And the priest appointed officers over the house of the Lord.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he took the rulers of hundreds, and the captains, and the guard, and all the people of the land; and they brought down the king from the house of the Lord, and came by the way of the gate of the guard to the king&apos;s house. And he sat on the throne of the kings.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And all the people of the land rejoiced: and the city was in quiet: and they slew Athaliah with the sword beside the king&apos;s house.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Jehoash was seven years old when he began to reign.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2k11-covenant-three',
          html:
            'Jehoiada does not simply restore a king. He renews a covenant — a covenant that binds three parties together: the Lord, the king, and the people. The king is not above the people or the covenant. The people are not the ultimate authority. All three stand together, bound to the Lord and His law. This is the vision of a covenanted kingdom: the ruler and the ruled, bound to God and to each other, answerable to a law higher than any human will.',
        },
        {
          kind: 'commentary',
          id: '2k11-baal-destroyed',
          html:
            'With the covenant renewed, the people move against Baal — the false god of the land, the idol that had been erected during Athaliah&apos;s reign. They "brake it down" and destroyed "his altars and his images." Even Mattan, the priest of Baal, was slain before the altars. This is not mere political cleansing. It is religious reformation. The people are affirming that the Lord — not Baal, not any human ruler — is the God of this kingdom. The idols must fall if the covenant is to stand.',
        },
        {
          kind: 'commentary',
          id: '2k11-city-quiet',
          html:
            'The text tells us that "the city was in quiet." After six years of a usurper&apos;s reign, after days of revolution and judgment, peace comes. The people rejoice. Not out of bloodlust or revenge, but out of relief and restoration. The rightful king is on the throne. The covenant is renewed. Order is restored. And the Lord is acknowledged as the true sovereign.',
        },
        {
          kind: 'christ',
          id: '2k11-christ-covenant',
          title: 'Christ Connection — The Eternal Covenant Sealed',
          html:
            'Jehoiada renewed the covenant between the Lord, the king, and the people. This pattern reaches its ultimate fulfillment in Jesus Christ, who is both King and Mediator of a new covenant. Through His blood, He seals a covenant between God the Father and all believers — a covenant written not on stone but on the heart (Jeremiah 31:31–34; Hebrews 8:6–13). And just as the temple was cleansed of idols when Joash was crowned, so Christ cleanses His temple — not the building in Jerusalem, but the hearts of His people — of all that stands against the reign of God. The covenant that Jehoiada made was shadow and promise. The covenant that Christ sealed is fulfillment and eternity.',
        },
        {
          kind: 'carry',
          html:
            'The kingdom is restored not because Joash himself is a great king — he is seven years old. It is restored because the people return to covenant. They tear down the idols. They renew their vow to the Lord. They stand together in the light of the Law. And in that covenant commitment, chaos gives way to quiet, usurpation gives way to rightful rule, and the future is secure. What idols must you tear down to renew your covenant with God? What false gods have you allowed to be erected in your heart? And what would it look like to stand, with the people of God, in a recommitted covenant to follow only Him?',
        },
        {
          kind: 'reflection',
          id: '2k11-covenant-renewed',
          prompt: 'The people tore down the idols of Baal before they could fully rejoice in the restored kingdom. What do you need to renounce or remove from your life before you can fully step into what God is calling you toward?',
        },
      ],
    },
  ],
};
