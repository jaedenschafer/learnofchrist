import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Esdras 2 — Cyrus Stirs, the Opposition Begins
 *
 * 1 Esdras 2 parallels Ezra 1 and the opening of Ezra 4. In the first year of
 * Cyrus&apos;s Persian reign, the Lord stirs his spirit to send the exiles home
 * and release the temple vessels. Cyrus issues a proclamation. The returned
 * remnant lays the foundation of the temple. But enemies of Judah and Benjamin,
 * claiming to worship the same God, offer to build alongside the returnees.
 * Rejected, they turn to opposition—writing letters to Artaxerxes and bringing
 * work to a halt. The chapter opens in hope and ends in resistance, yet God&apos;s
 * purpose stands firm. What cannot be stopped can only be delayed.
 */
export const FIRST_ESDRAS_2: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 2,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 18 },
  intros: [
    'Cyrus the Persian sits on history&apos;s greatest throne. His empire stretches from Egypt to the borders of India. He has conquered nations and bent the world to his will. Yet in the first year of his reign, something stirs his spirit—an unseen hand moving him toward a decision that will change the course of history. He opens prison gates and sends an entire people home to a city that lies in ruins. He returns the sacred vessels that have sat in pagan temples for seventy years. He gives money and materials for a work he will never see completed. The God of Israel, the God he has never explicitly named as his own, moves this mighty king to become His instrument.',
    'But the return is not a simple triumph. When the first builders lay the foundation and shout in celebration, those who have lived in the land for seventy years watch in fear. They offer themselves as partners. When they are refused, their offer curdles into opposition. Letters fly to the Persian court. Work stops. The chapter ends not with celebration but with silence—a stalled project, postponed hope, and the hard truth that God&apos;s work moves against resistance, even when that work has come from a king&apos;s own mouth.',
  ],

  sections: [
    /* ─── 1 Esdras 2:1–3 — Cyrus Stirred by the Lord ──────────────────── */
    {
      ref: '1 Esdras 2:1–3',
      title: 'Cyrus Stirred by the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('Now in the first year of Cyrus king of the Persians, that '),
                hp('the word of the Lord spoken by Jeremiah might be accomplished', 'word-jeremiah'),
                t(', '),
                hp('the Lord stirred up the spirit of Cyrus', 'lord-stirred'),
                t(' king of the Persians, and he made a proclamation throughout all his kingdom, and put it also in writing, saying,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'word-jeremiah',
          html:
            'Jeremiah, preaching to a nation heading toward exile, made a specific promise: seventy years would pass, then God would bring the people home (Jeremiah 25:11–12; 29:10). That word did not disappear. It waited. It was written. And when the time came, it found its fulfillment not through the compassion of a Hebrew king, but through the will of a Persian one. The Word of God outlives the exile that it promises to end. [res:sefaria-1-esdras-2] [res:bible-odyssey-second-temple-period]',
        },
        {
          kind: 'commentary',
          id: 'lord-stirred',
          html:
            'The text does not say Cyrus heard God speak. It says the Lord stirred his spirit—moved him as an eagle stirs its nest to teach its young to fly (see Deuteronomy 32:11). The moving is invisible. Cyrus has no name for what he feels, no theology to explain why he acts. He simply acts. This is how God moves the hearts of rulers whose kingdoms do not acknowledge His name.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('Thus saith Cyrus king of the Persians: The Lord God of Israel, the most high God, hath made me king of the whole world;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he hath commanded me to build him a house at '),
                hy('Jerusalem in Judea', 'judea-home'),
                t('. If therefore there be any of you that are of his people, let their Lord be with them, and let them '),
                hp('go up to Jerusalem in Judea', 'judea-home'),
                t(' and build the house of the Lord God of Israel; '),
                t('for he is the God that dwelleth in Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judea-home',
          html:
            'Cyrus names the place and the people. He does not call it a distant province or a subject nation. He calls it by the name the exiles themselves would use: Judea—the land of Judah. He recognizes what seventy years of Babylonian rule could not obliterate: this people have a home that belongs to them, and that home is singular and irreplaceable.',
        },
        {
          kind: 'carry',
          html:
            'You have promises written somewhere in your story—words spoken over you in childhood, in prayer, in a moment of clarity that you have never forgotten. They may have been dormant for years. Like Jeremiah&apos;s words, they do not disappear. They wait. And God, who spoke them, moves heaven and earth to accomplish them in His time, sometimes through sources you would never have predicted. What promise have you almost given up on? What if its time has already come?',
        },
        {
          kind: 'reflection',
          id: 'stirred-spirit',
          prompt:
            'Where do you see God stirring not your own spirit, but the spirit of someone outside your faith? Have you ever witnessed a non-believer being moved to do something that advanced God&apos;s work? What does that tell you about God&apos;s reach?',
        },
      ],
    },

    /* ─── 1 Esdras 2:3–7 — The Proclamation and Provision ───────────────── */
    {
      ref: '1 Esdras 2:3–7',
      title: 'The Proclamation and Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And whosoever are left in the place where they dwell, let the men of their place help them with gold and silver,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And with gifts, and with horses, and with beasts, beside that which is voluntarily offered for the temple of the Lord in Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gold-silver',
          html:
            'Cyrus does not merely allow the exiles to leave. He provisions them. Those who remain behind are ordered to help with gold, silver, gifts, horses, and animals. The king&apos;s decree becomes the king&apos;s gift. This is not a grudging release but a launching. The exiles are not sent out empty; they are sent out equipped. And the text is careful to note that all of this comes before even the voluntary offerings of the people themselves.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('Then rose up the chief of the fathers of Judah and Benjamin, and the priests, and the Levites, '),
                hg('and all they whose mind the Lord had moved to go up', 'mind-moved'),
                t(' to build the house of the Lord which is in Jerusalem.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And all they that were about them strengthened their hands with vessels of gold, with silver, with horses, and with beasts, and with very precious gifts, besides all that was willingly offered.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mind-moved',
          html:
            'The text uses the same language for the people as for Cyrus: their minds are moved. The same God who stirred the spirit of the Persian king stirs the hearts of the Jewish exiles. Response meets initiative. The machinery of redemption engages. And when the people move, those around them—the Babylonians, the merchants, the neighbors—all contribute. A community awakens to help.',
        },
        {
          kind: 'hebrew',
          id: 'nesiat-rosh',
          title: 'Nasí — "Chief" or "Leader"',
          script: 'נָשִׂיא',
          translit: '<strong>nasí</strong> · a leader; one who is lifted up; a prince or chief',
          description:
            'The leaders who stand to go up are called by a word that means literally "one who is lifted up." Not by their own power, but by the stirring of God, they are lifted out of captivity and raised to lead their people home. Leadership in Scripture is not self-assumed; it is divinely moved.',
        },
        {
          kind: 'christ',
          id: 'christ-anointed',
          title: 'Christ Connection — The Anointed One Who Opens Doors',
          html:
            'Isaiah prophesies that God will call Cyrus by name and gird him, though Cyrus knows not God: "I am the Lord, and there is none else… I have raised him up in righteousness… that thou mayest know that I, the Lord, which call thee by thy name, am the God of Israel" (Isaiah 45:5–6). Christ is the ultimate fulfillment of this pattern—the One whom God raises up to accomplish redemption, the One who opens the way for His captive people to come home (John 10:9). But even before Christ, God was moving pagan rulers and stirring pagan hearts toward His purposes. The hand of God reaches beyond the boundaries of Israel. It reaches beyond the boundaries of history itself.',
        },
        {
          kind: 'carry',
          html:
            'If Cyrus, who did not know God, was moved by the stirring of God&apos;s spirit to release a captive people, what captivity in your own life might God be about to open? Cyrus gave gold and horses and vessels—but the gift that mattered most was the open gate. Freedom is the greatest gift anyone with power can give. Where is God calling you to be the one who opens a gate for someone else?',
        },
      ],
    },

    /* ─── 1 Esdras 2:8–15 — The Sacred Vessels Released ───────────────────── */
    {
      ref: '1 Esdras 2:8–15',
      title: 'The Sacred Vessels Released',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('And Cyrus king of the Persians brought forth the vessels of the house of the Lord, which Nabuchodonosor had carried away out of Jerusalem, and had set them in his temple of idols.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Now when Cyrus king of the Persians brought them forth, he delivered them to Mithridates his treasurer,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vessels-returned',
          html:
            'The vessels are not forgotten. For seventy years they have sat in the temple of Babylon&apos;s gods—not as treasures but as trophies, symbols of defeat and desecration. Now Cyrus brings them forth from that place of defilement. This is more than returning property; this is a kind of restitution, a reversal of conquest. What was taken as spoil is given back as grace.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('And Mithridates brought them forth, and delivered them to Sanabassar, the governor of Judah.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the number of them was: of the Lord a thousand chargers of gold, a thousand chargers of silver, nine and twenty knives,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Thirty basins of gold, and two thousand four hundred and ten vessels of silver, and a thousand other vessels.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('So all the vessels were delivered, which were of gold and of silver, five thousand and four hundred fourscore and nine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vessel-count',
          html:
            'The text records the specific number of vessels—not a vague approximation, but a precise inventory. This matters. The seventy-year exile did not lose even one vessel to history&apos;s carelessness. The God who counted the stars and knew Jeremiah before his birth also counted these vessels. None was lost. All are returned. The precision of the count speaks to God&apos;s meticulous care.',
        },
        {
          kind: 'greek',
          id: 'restoration-pattern',
          title: 'Apokathistemi — "To Restore" or "To Return"',
          script: 'ἀποκαθίστημι',
          translit: '<strong>apokathistemi</strong> · to set back in place; to restore; to return to a former state',
          description:
            'The bringing forth of the vessels is a restoration—a setting back of things into their proper place. Not merely a return of objects, but a restoration of order, of holiness, of the proper relationship between people and the sacred things entrusted to them. Every restored vessel is a small resurrection.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, what has been taken—years, opportunities, trust, wholeness? The return of Cyrus&apos;s decree was not about erasing the exile; the land could not simply go back to 586 BC. The people could not un-be exiles. But what was stolen could be returned. What was defiled could be reclaimed. What seemed permanently lost could come home. Your own restoration does not erase your exile, but it does bring back what matters most.',
        },
        {
          kind: 'reflection',
          id: 'vessels-restored',
          prompt:
            'What "vessel" in your own life—a gift, a calling, a role, a relationship—has been sitting in a place of defilement or captivity? Can you imagine it being brought home and set back in its proper place? What would that restoration look like?',
        },
      ],
    },

    /* ─── 1 Esdras 2:16–30 — The Foundation Laid and Work Begins ──────────── */
    {
      ref: '1 Esdras 2:16–30',
      title: 'The Foundation Laid, the Work Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('All these vessels were brought and delivered to Sanabassar, the governor; and he carried them up, when he came to build the house of the Lord in Jerusalem.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Now when the builders of the temple of the Lord began to build it, the priests stood in their vestments with musical instruments and trumpets; and the Levites, the sons of Asaph, with cymbals,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'foundation-ceremony',
          html:
            'The laying of the foundation is not a quiet act. The priests are in their vestments. Trumpets sound. The Levites sing. This is worship—a celebration that something seventy years broken is being rebuilt, that the exile has truly ended, that the God who seemed silent has spoken again. After decades of silence, the temple echoes with music.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('Singing with praise and giving thanks unto the Lord; Because his mercy and glory is for ever upon all Israel.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And all the people shouted with a great shout, when they praised the Lord, because the foundation of the house of the Lord was laid.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'great-shout',
          html:
            'The shout is so great that the text will later tell us it is heard from a distance. This is not mere rejoicing at a building project. This is the sound of a people who thought they had lost everything discovering that restoration is still possible, that their God has not abandoned them, that the future is being built on a foundation that rests in their beloved city.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('But many of the priests and Levites and chief of the fathers, who were ancient men, that had seen the first house, when the foundation of this house was laid before their eyes, wept with a loud voice; and many shouted aloud for joy:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('So that the noise of the sound was heard far off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mixed-sound',
          html:
            'Some weep. Some shout. Those who remember the old temple—destroyed in their sight, burned while they watched—cannot contain their grief and their joy together. Both tears and shouts are true. Restoration is not a simple return. It comes laden with all the weight of what was lost. The noise—mixed voices, both lament and joy—carries far. The empire hears it.',
        },
        {
          kind: 'artwork',
          matchTitle: /foundation|temple|jerusalem/i,
          caption: '1 Esdras 2:16–21 · The Foundation Laid with Shouts and Tears',
        },
        {
          kind: 'carry',
          html:
            'Has there been a moment when you experienced restoration—a healing, a return, a new beginning—and found yourself weeping and shouting at the same time? Restoration is not the same as the original. What is rebuilt will never be exactly what was before. But it is built. And that is enough.',
        },
      ],
    },

    /* ─── 1 Esdras 2:22–25 — The Adversaries Offer Partnership ────────────── */
    {
      ref: '1 Esdras 2:22–25',
      title: 'The Adversaries Offer Partnership',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 22,
              spans: [
                t('But the adversaries of the tribe of Judah and Benjamin heard that the exiles that were come up from captivity were building the temple unto the Lord God of Israel.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('So they came to Zorobabel and to Jesua, and to the chief of the fathers, and said unto them, Let us build together with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'adversaries-arrive',
          html:
            'The word is adversaries—not neutral neighbors, but those who oppose Judah and Benjamin. Yet their arrival is dressed in the language of partnership. They offer cooperation. They frame themselves not as threats but as allies. This is the most dangerous form of opposition: one that approaches wearing a smile, speaking the language of common cause.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 24,
              spans: [
                t('For we likewise, as ye, do seek your Lord, and we do sacrifice unto him since the days of Asoreus the king of Assur, which brought us hither.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then Zorobabel and Jesua and the chief of the fathers of Israel said unto them, It is not for you and us to build together a house unto the Lord our God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'false-unity',
          html:
            'The adversaries claim to seek the same Lord and to have sacrificed to Him for generations. But Zerubbabel and Jeshua see what is hidden beneath. The offer of partnership would mean compromising the purity of the restoration. Those who remained during exile are not the people for whom Cyrus opened the gate. They have lived under foreign rule, received foreign influences, perhaps mixed their faith with the religions around them. To build with them would be to build a hybrid temple, a compromise. The leaders refuse, even though refusal will cost them. Some boundaries cannot be crossed without losing the thing you are building.',
        },
        {
          kind: 'reflection',
          id: 'true-unity',
          prompt:
            'When have you been tempted by an offer of partnership that would have required compromising something central to who you are? What did refusal cost you? And what did it protect?',
        },
      ],
    },

    /* ─── 1 Esdras 2:26–36 — The Opposition Hardens and Work Ceases ──────── */
    {
      ref: '1 Esdras 2:26–36',
      title: 'The Opposition Hardens, the Work Ceases',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 26,
              spans: [
                t('For '),
                hp('we ourselves alone will build', 'build-alone'),
                t(' it unto the Lord our God; as Cyrus the king of the Persians hath commanded us.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Then the people of the land came upon them, and they weakened the hands of the people of Judah, and troubled them in building,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'build-alone',
          html:
            'The words are clear. Cyrus commanded them to build. This is not arrogance; this is obedience to the king whose decree opened the way. The builders are standing on firm ground. Yet the ground they stand on will not hold against what comes next.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 28,
              spans: [
                t('And '),
                hg('sent counsellors against them, and made their purpose come to nought', 'counsellors-sent'),
                t(' all the days of Cyrus king of the Persians: and until the reign of Darius king of the Persians.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'counsellors-sent',
          html:
            'The offer of partnership rejected, the adversaries resort to a weapon more subtle than violence: bureaucracy, counseling, official opposition. Letters go to the Persian court. The work is characterized as seditious, as a threat to Persian order. And somehow—the text does not explain how—the opposition succeeds. Work stops. The king&apos;s own decree becomes irrelevant. The gate that opened closes. Cyrus dies or his attention turns elsewhere. The project sits silent.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 30,
              spans: [
                t('Then the work of the house of the Lord that is in Jerusalem ceased again; and it ceased until the second year of the reign of Darius king of the Persians.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'work-ceases',
          html:
            'The foundation is laid. The vessels are in place. The priests are ready. But the work ceases. Not permanently—the chapter assures us it will resume under Darius—but for now, for years, the silence returns. The returnees are back in their homeland, but the temple is not rebuilt. They live among its unfinished walls, a constant reminder that what they were sent to do remains undone. They are no longer captives, but they are not yet free to complete their work.',
        },
        {
          kind: 'christ',
          id: 'christ-opposition',
          title: 'Christ Connection — Opposition to God&apos;s Work Never Triumphs',
          html:
            'The foundation is laid and then covered in silence. Two thousand years later, another foundation is laid—the stone that the builders rejected, the cornerstone that would be the foundation of the church (1 Peter 2:6–8). And opposition came immediately: arrest, beatings, imprisonment, crucifixion of the Lord Himself. The adversaries of God&apos;s work have never changed their tactics. They smile and offer partnership. When refused, they write letters to authorities. They make the work costly. They make it seem impossible. But Jesus said, "Upon this rock I will build my church; and the gates of hell shall not prevail against it" (Matthew 16:18). The opposition that halts the work in Cyrus&apos;s time, that troubles the builders in Darius&apos;s time, that persecutes the church in every age—none of it has the last word. God&apos;s work will be completed.',
        },
        {
          kind: 'carry',
          html:
            'You may be facing opposition right now—not to a temple made of stone, but to something God has stirred your own spirit to build or to do. Work that started with such momentum. Work that has now stalled. Letters have gone to someone in authority. Someone is making it hard. And you cannot simply command that opposition away. Like the exiles, you can only stand firm in the boundary you have drawn, keep your eyes on the work, and wait for the time when you can build again. The stalling of work is not the end of work.',
        },
        {
          kind: 'reflection',
          id: 'stalled-work',
          prompt:
            'What work has God stirred you to do that has now stalled? Is it in a season of waiting, or are you still being opposed? What does it mean to you that the work resumed under Darius—that stalling is not the same as ending?',
        },
        { kind: 'divider' },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-1-esdras-2',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Esdras 2 — Return and Temple Rebuilding',
      url: 'https://www.sefaria.org/I_Esdras.2',
      description: 'Return from exile and Second Temple construction under Zerubbabel.',
    },
    {
      id: 'bible-odyssey-second-temple-period',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Second Temple Period: Reconstruction',
      url: 'https://www.bibleodyssey.org/dictionary/second-temple/',
      description: 'Temple rebuilding and Judean community restoration in Persian period.',
    },
  ],

  bottomShare: {
    quote:
      'The Lord stirred up the spirit of Cyrus king of the Persians, and he made a proclamation throughout all his kingdom: The Lord God of Israel hath made me king of the whole world, and he hath commanded me to build him a house at Jerusalem in Judea.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 2 · Study Guide',
  },

};
