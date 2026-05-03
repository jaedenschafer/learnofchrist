import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 26 — Jeremiah Threatened with Death; Saved by Ahikam
 *
 * When Jeremiah speaks God's word in the temple, the priests and prophets
 * demand his death. Yet the princes and some of the elders remember that Micah
 * the prophet also spoke similar words and was not killed. Jeremiah is saved from
 * death by Ahikam the son of Shaphan, who protects him. God preserves His witnesses.
 */
export const JEREMIAH_26: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 26,

  estimatedMinutes: { beginner: 6, intermediate: 8, deep: 10 },
  intros: [
    'Jeremiah stands in the court of the Lord&apos;s house and speaks words of judgment against Jerusalem. The priests and prophets seize him, demanding his death. "Why hast thou prophesied in the name of the Lord, saying, This house shall be like Shiloh, and this city shall be desolate without an inhabitant?" They want to silence him, to stop the message. Yet God raises up protectors — the princes and elders who remember that Micah spoke similar words and was not put to death. Ahikam son of Shaphan stands with Jeremiah, and he is delivered from the hands of those who would kill him.',
    'The chapter shows that God does not leave His prophets without witnesses and protectors. Even when the religious establishment turns against the true prophet, God raises up defenders. Jeremiah is saved not by his own strength but by God&apos;s provision of allies.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 26',
    quote:
      'Jeremiah is threatened with death for speaking God&apos;s word, but God preserves him through the protection of faithful men like Ahikam.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 26 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 26:1–9 — Jeremiah's Temple Speech ─────────────────────────── */
    {
      ref: 'Jeremiah 26:1–9',
      title: 'Speaking the Word, Facing Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('In the beginning of the reign of Jehoiakim the son of Josiah king of Judah came this word from the Lord, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Thus saith the Lord; Stand in the court of the Lord&apos;s house, and speak unto all the cities of Judah, which come to worship in the Lord&apos;s house, all the words that I command thee to speak unto them; diminish not a word:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('If so be they will hearken, and turn every man from his evil way, that I may repent me of the evil, which I purpose to do unto them because of the evil of their doings.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And thou shalt say unto them, Thus saith the Lord; If ye will not hearken to me, to walk in my law, which I have set before you,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('To hearken to the words of my servants the prophets, whom I sent unto you, both rising up early, and sending them, but ye have not hearkened;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Then will I make this house like Shiloh, and will make this city a curse to all the nations of the earth.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('So Jeremiah spake all these words in the house of the Lord.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Now it came to pass, when Jeremiah had made an end of speaking all that the Lord had commanded him to speak unto all the people, that the priests and the prophets and all the people took him, saying, Thou shalt surely die.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Why hast thou prophesied in the name of the Lord, saying, This house shall be like Shiloh, and this city shall be desolate without an inhabitant? And all the people were gathered against Jeremiah in the house of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer26-diminish-not',
          html:
            'God commands Jeremiah to "diminish not a word." Jeremiah must speak the full message, not edit it for palatability or to avoid offense. The message includes the hard word: that the temple will be destroyed, that Jerusalem will become a curse. And when he speaks this word faithfully, he is seized and threatened with death.',
        },
        {
          kind: 'commentary',
          id: 'jer26-took-him',
          html:
            'The priests and prophets and all the people take him. The crowd turns against him. The message that should bring repentance instead brings persecution. Yet Jeremiah has spoken faithfully. He has not diminished a word.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes faithfulness to God brings not gratitude but danger. The prophets must speak even when speaking brings persecution. The comfort is that God commands it, knows it will happen, and will protect the one who obeys.',
        },
        {
          kind: 'reflection',
          id: 'jer26-speak-truth',
          prompt: 'Jeremiah speaks truth and faces death. When have you spoken truth even at personal cost? What sustained you?',
        },
      ],
    },

    /* ─── Jeremiah 26:10–19 — The Trial and the Defense ────────────────────── */
    {
      ref: 'Jeremiah 26:10–19',
      title: 'Micah and the Precedent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 10,
              spans: [
                t('When the princes of Judah heard these things, they came up from the king&apos;s house unto the house of the Lord, and sat down in the entry of the new gate of the Lord&apos;s house.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then spake the priests and the prophets unto the princes and to all the people, saying, This man is worthy to die; for he hath prophesied against this city, as ye have heard with your ears.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then spake Jeremiah unto all the princes and to all the people, saying, The Lord sent me to prophesy against this house and against this city all the words that ye have heard.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Therefore now amend your ways and your doings, and obey the voice of the Lord your God; and the Lord will repent him of the evil that he hath pronounced against you.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('As for me, behold, I am in your hand: do with me as seemeth good and meet unto you.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But know ye for certain, that if ye put me to death, ye shall surely bring innocent blood upon yourselves, and upon this city, and upon the inhabitants thereof: for of a truth the Lord hath sent me unto you to speak all these words in your ears.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Then said the princes and all the people unto the priests and to the prophets; This man is not worthy to die: for he hath spoken to us in the name of the Lord our God.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then rose up certain of the elders of the land, and spake to all the assembly of the people, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Micah the Morasthite prophesied in the days of Hezekiah king of Judah, and spake to all the people of Judah, saying, Thus saith the Lord of hosts; Zion shall be plowed like a field, and Jerusalem shall become heaps, and the mountain of the house as the high places of a forest.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Did Hezekiah king of Judah and all Judah put him at all to death? did they not rather fear the Lord, and besought the Lord, and the Lord repented him of the evil which he had pronounced against them? Thus might we procure great evil against our souls.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer26-micah',
          html:
            'The elders remember Micah, who spoke similar words of judgment against Jerusalem a century earlier — "Zion shall be plowed like a field." Yet Micah was not executed; instead, King Hezekiah feared the Lord and sought His mercy, and God repented of the evil He had pronounced. The precedent is that a prophet speaking God&apos;s word should be heard, not killed.',
        },
        {
          kind: 'commentary',
          id: 'jer26-innocent-blood',
          html:
            'Jeremiah says, "If ye put me to death, ye shall surely bring innocent blood upon yourselves." To kill a prophet sent by God is to bring judgment upon oneself. The blood of the innocent cries out. The people hear this warning and turn from their intention to kill him.',
        },
        {
          kind: 'carry',
          html:
            'God preserves His prophets not always through dramatic rescue, but through the conscience of faithful ones who remember God&apos;s past work and fear to add innocent blood to their sin. The princes and elders, hearing the memory of Micah, hear the voice of God calling them back from murder.',
        },
        {
          kind: 'christ',
          id: 'jer26-christ',
          title: 'Christ Connection — The Prophet Threatened',
          html:
            'Jeremiah stands in the temple and speaks judgment on the temple. The priests demand his death for this word. Yet Christ, standing in the temple, speaks a harder word: "Destroy this temple, and in three days I will raise it up" (John 2:19). He is threatened not only with death but with crucifixion. And unlike Jeremiah, saved by Ahikam, Christ is not spared. Yet Christ alone is not the last prophet killed. Jesus weeps: "O Jerusalem, Jerusalem, thou that killest the prophets, and stonest them which are sent unto thee" (Matt. 23:37). The prophets were killed before Him. He knew the cost of speaking God&apos;s word. He paid it.',
        },
        {
          kind: 'reflection',
          id: 'jer26-remember',
          prompt: 'The elders remember what God did in the time of Micah and Hezekiah. What memories of God&apos;s faithfulness keep you from doing evil?',
        },
      ],
    },

    /* ─── Jeremiah 26:20–24 — Urijah Killed, But Jeremiah Saved ─────────────── */
    {
      ref: 'Jeremiah 26:20–24',
      title: 'Not All Prophets Are Saved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 20,
              spans: [
                t('And there was also a man that prophesied in the name of the Lord, Urijah the son of Shemaiah of Kirjath-jearim: and he prophesied against this city and against this land according to all the words of Jeremiah:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And when Jehoiakim the king heard his words, he sought to put him to death: but when Urijah heard it, he was afraid, and fled, and went into Egypt;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Jehoiakim the king sent men into Egypt, and they fetched forth Urijah out of Egypt, and brought him unto Jehoiakim the king; who smote him with the sword, and cast his dead body into the graves of the common people.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But the hand of Ahikam the son of Shaphan was with Jeremiah, that they should not give him into the hand of the people to put him to death.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('But the hand of Ahikam the son of Shaphan was with Jeremiah, that they should not give him into the hand of the people to put him to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer26-urijah',
          html:
            'Urijah, another prophet speaking God&apos;s word, is not so fortunate. Jehoiakim hunts him down in Egypt and executes him. Yet Jeremiah is saved. The difference is the "hand of Ahikam the son of Shaphan" — a man of power who uses his influence to protect the prophet.',
        },
        {
          kind: 'commentary',
          id: 'jer26-ahikam',
          html:
            'Ahikam becomes Jeremiah&apos;s protector. He is not merely sympathetic; he uses his position as a prince to shield Jeremiah from death. This is the work of faithful men — to stand with God&apos;s prophet even when the crowd wants the prophet dead.',
        },
        {
          kind: 'carry',
          html:
            'We live in the real world, where not all faithfulness is rewarded with rescue, where Urijah dies even as Jeremiah lives. Yet God does provide protectors — faithful people who stand with the truth. We are called to be Ahikams: to use whatever power and position we have to shield those who speak truth.',
        },
        {
          kind: 'reflection',
          id: 'jer26-ahikam-role',
          prompt: 'Ahikam uses his position to protect Jeremiah. How are you using your position or influence to protect and support those who speak truth?',
        },
      ],
    },

    /* ─── Jeremiah 26 · The Witness Preserved ─────────────────────────────── */
    {
      ref: 'Jeremiah 26 · All',
      title: 'Protected by Providence and People',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer26-preserved-witness',
          html:
            'The chapter shows that God preserves His witnesses not through constant miracles but through a combination of divine providence and human faithfulness. God works through conscience (the elders&apos; memory of Micah), through law (the trial that saves Jeremiah), and through human friendship (Ahikam&apos;s protection).',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
