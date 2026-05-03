import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 21 — Zedekiah's Inquiry; The Way of Life and Death
 *
 * King Zedekiah, facing the siege of the Babylonians, sends to Jeremiah asking
 * if God will deliver them. Jeremiah replies: "Behold, I set before you the way
 * of life, and the way of death." The king must choose between submission to
 * Babylon and continued resistance. The path of humility is the path of life.
 */
export const JEREMIAH_21: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 21,

  estimatedMinutes: { beginner: 4, intermediate: 7, deep: 8 },
  intros: [
    'King Zedekiah sends Pashur and Zephaniah to ask Jeremiah if the Lord will deliver Jerusalem from the siege of the Babylonians. Zedekiah still hopes for a miraculous deliverance, yet he does not want to hear what the prophet will actually say. Jeremiah&apos;s answer is stark: God will not fight for Jerusalem. The only way to survive is to surrender to Babylon.',
    'This is the hardest message Jeremiah has had to deliver — to a king, to a people, to promise not deliverance but subjugation. Yet the message carries a deeper truth: the way of death is the way of pride and resistance; the way of life is the way of submission and humility. God offers His people a choice, and the choice is clear.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 21',
    quote:
      '"Behold, I set before you the way of life, and the way of death." Jeremiah offers the king a choice: humble submission brings life; proud resistance brings death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 21 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 21:1–7 — Zedekiah's Question and God's Answer ────────────── */
    {
      ref: 'Jeremiah 21:1–7',
      title: 'Will God Deliver?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('The word which came unto Jeremiah from the Lord, when king Zedekiah sent unto him Pashur the son of Melchiah, and Zephaniah the son of Maaseiah the priest, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Enquire, I pray thee, of the Lord for us; for Nebuchadrezzar king of Babylon maketh war against us; if so be that the Lord will deal with us according to all his wondrous works, that he may go up from us.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Then said Jeremiah unto them, Thus shall ye say to Zedekiah;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-21-78mid-1',
          html:
            'Jeremiah pivots here — from indictment to grief, or from grief to a glimpse of mercy. The prophet&apos;s heart and the LORD&apos;s heart are hard to tell apart.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 4,
              spans: [
                t('Thus saith the Lord God of Israel; Behold, I will turn back the weapons of war that are in your hands, wherewith ye fight against the king of Babylon, and against the Chaldeans, which besiege you without the walls, and I will assemble them into the midst of this city.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And I myself will fight against you with an outstretched arm and with a strong hand, and in anger, and in fury, and in great wrath.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And I will smite the inhabitants of this city, both man and beast: they shall die of a great pestilence.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And afterward, saith the Lord, I will deliver Zedekiah king of Judah, and his servants, and the people, and such as are left in this city from the pestilence, from the sword, and from the famine, into the hand of Nebuchadrezzar king of Babylon, and into the hand of their enemies, and into the hand of those that seek their life: and he shall smite them with the edge of the sword; he shall not spare them, neither have pity, nor have mercy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer21-turn-back',
          html:
            'Zedekiah hopes for deliverance, for one of God&apos;s "wondrous works." But Jeremiah&apos;s answer is shattering: God will turn back the weapons the people are using against Babylon and use them against the city itself. God will fight against Jerusalem, not for it. The king who hoped God would join his military struggle learns that God opposes him.',
        },
        {
          kind: 'commentary',
          id: 'jer21-deliver-enemy',
          html:
            'The promise of "deliverance" in verse 7 is delivered — but delivered into the hands of enemies, into the hand of Nebuchadrezzar. Zedekiah will be delivered, but as a captive, for destruction. The word "deliver" is turned inside out, inverted into its opposite.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we pray for rescue that God refuses to give. We ask for deliverance from consequences, but God offers something harder: the invitation to face consequences and learn from them. We want God to align with our plans; God invites us to align with His.',
        },
        {
          kind: 'reflection',
          id: 'jer21-deliverance',
          prompt: 'Zedekiah expects God to deliver him from Babylon, but instead God delivers him into Babylon&apos;s hands. When have you prayed for deliverance and received something different? What did you learn?',
        },
      ],
    },

    /* ─── Jeremiah 21:8–10 — The Way of Life and the Way of Death ────────────── */
    {
      ref: 'Jeremiah 21:8–10',
      title: 'Choose Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 8,
              spans: [
                t('And unto this people thou shalt say, Thus saith the Lord; '),
                hp('Behold, I set before you the way of life, and the way of death', 'jer21-way'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('He that abideth in this city shall die by the sword, and by the famine, and by the pestilence: but he that goeth out, and falleth to the Chaldeans that besiege you, he shall live, and his life shall be unto him for a prey.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For I have set my face against this city for evil, and not for good, saith the Lord: it shall be given into the hand of the king of Babylon, and he shall burn it with fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer21-way',
          html:
            'This is the central choice Jeremiah offers: the way of life is surrender to Babylon; the way of death is resistance and continued siege. There is nothing noble or glorious in this choice. But it is the choice that leads to living. Those who humble themselves, who lay down arms, will survive. Those who cling to pride and power will perish.',
        },
        {
          kind: 'commentary',
          id: 'jer21-face-set',
          html:
            'God says, "I have set my face against this city for evil, and not for good." The city has not escaped the pattern Jeremiah has been proclaiming. But even in this judgment, there is a way to live — not by winning, but by yielding. The logic of the kingdom is inverted: life comes through surrender, not through resistance.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that celebrates strength, resistance, the refusal to submit. Yet Jeremiah teaches that true strength sometimes looks like surrender. When God sets His face against us, when He calls us to yield, the path of life may look like the path of death. But choosing submission to God&apos;s will over our own stubborn resistance is always the way of life.',
        },
        {
          kind: 'reflection',
          id: 'jer21-choose',
          prompt: 'Jeremiah presents a stark choice: submit and live, resist and die. Where in your life are you resisting God&apos;s will? What would it mean to surrender?',
        },
      ],
    },

    /* ─── Jeremiah 21:11–14 — Against the House of Judah's Kings ────────────── */
    {
      ref: 'Jeremiah 21:11–14',
      title: 'The Judgment of Kings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 11,
              spans: [
                t('And touching the house of the king of Judah, say, Hear ye the word of the Lord;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('O house of David, thus saith the Lord; Execute judgment in the morning, and deliver him that is spoiled out of the hand of the oppressor: lest my fury go out like fire, and burn that none can quench it, because of the evil of your doings.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Behold, I am against thee, O inhabitant of the valley, and rock of the plain, saith the Lord; which say, Who shall come down against us? or who shall enter into our habitations?'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But I will punish you according to the fruit of your doings, saith the Lord: and I will kindle a fire in the forest thereof, and it shall devour all things round about it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer21-execute-judgment',
          html:
            'Even to the royal house, Jeremiah offers a way: "Execute judgment in the morning, and deliver him that is spoiled." The king could avert God&apos;s fury if he would only do justice, if he would protect the vulnerable. But the palace asks instead, "Who shall come down against us?" — confident in their strength and their position. God answers: "I am against thee."',
        },
        {
          kind: 'carry',
          html:
            'The kings of Judah have built their confidence on their strength and position, but strength based on injustice is doomed. The only king whose throne stands firm is one who executes justice and protects the vulnerable. This is as true in our time as in Jeremiah&apos;s — those in power who ignore justice sow the seeds of their own downfall.',
        },
        {
          kind: 'reflection',
          id: 'jer21-justice',
          prompt: 'God calls the kings to execute justice and protect the vulnerable. What does justice look like in your own position of responsibility or influence?',
        },
      ],
    },

    /* ─── Jeremiah 21 · The Choice and Its Consequences ───────────────────── */
    {
      ref: 'Jeremiah 21 · All',
      title: 'Life Through Surrender',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer21-hard-choice',
          html:
            'The chapter presents the hardest choice a people could be asked to make — to surrender to a foreign power, to lay down weapons, to accept subjugation. Yet Jeremiah insists: this is the way of life. The way of stubborn resistance is the way of death. The kingdom of God often works backwards, by the logic of the cross, where losing life is the way to save it.',
        },
        {
          kind: 'christ',
          id: 'jer21-christ-way',
          title: 'Christ Connection — The Way of Life',
          html:
            'Jesus says, "I am the way, the truth, and the life" (John 14:6). He embodies the way of life Jeremiah points toward — a way that looks like death, that requires surrender, that says "not my will, but thine be done." The cross appears to be defeat, but it is the way of life for all who follow Him. Those who cling to their lives for their own sake will lose them; those who lose their lives for His sake will find them (Matthew 16:25).',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
