import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Esdras 6 — Haggai and Zechariah Stir the People to Rebuild
 *
 * This chapter parallels Ezra 5, showing the prophets Haggai and Zechariah
 * arousing the people to resume the temple-building. As the work progresses,
 * Sisinnes the governor comes to inspect and demand "Who has commanded you?"
 * The Jews answer with the long history of Cyrus&apos; decree. Sisinnes writes
 * to King Darius for verification—and the path to vindication unfolds.
 */
export const FIRST_ESDRAS_6: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 13 },
  intros: [
    'The temple-building had stalled. Years had passed since the foundation was laid, and the people had grown weary and discouraged. But then two prophets arose—Haggai and Zechariah—with a word from God: the work must resume. Immediately, the people rose up and began to build.',
    'Yet this building does not go unnoticed. The governor of the province comes to inspect and demands to know who authorized the work. What follows is one of the most courageous confessions in Scripture: the Jewish elders stand before their accuser and declare, "We are the servants of the God of heaven and earth, and we build the house that was built many years ago." In their answer lies the entire biblical vision of whose authority matters most.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /temple|building|reconstruct/i,
    caption: 'The Rebuilding of the Temple',
  },

  sections: [
    /* ─── 1 Esdras 6:1–5 — The Prophets Arise; The Work Resumes ──────── */
    {
      ref: '1 Esdras 6:1–2',
      title: 'Haggai and Zechariah Prophesy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And the prophets, '),
                hy('Haggai and Zechariah the son of Iddo', 'esdras6-prophets'),
                t(', prophesied unto the Jews that were in Judea and Jerusalem, in the name of the God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-awakening',
          html:
            'The prophetic word comes not as suggestion but as command from heaven. Haggai and Zechariah are not offering opinions—they speak <em>in the name of the God of Israel</em>. This distinction is crucial. They do not speak for themselves or for the political situation; they speak for the one who made and sustains all things. When such a word goes forth, everything changes. [res:sefaria-ezra-4-6] [res:bible-odyssey-opposition-diaspora]',
        },
        {
          kind: 'hebrew',
          id: 'esdras6-prophets',
          title: 'Navi — "Prophet"',
          script: 'נָבִיא',
          translit: '<strong>Navi</strong> · prophet; one called to speak for God',
          description:
            'A navi is not a fortune-teller or a wise counselor. A navi is one authorized and anointed to speak the word of the LORD. The word navi comes from a root meaning "to bubble forth" or "to call out"—as if the word of God bubbles up from within the prophet and overflows. A prophet is a person through whom God&apos;s word emerges.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-awakening',
          title: 'Christ Connection — The Spirit Awakening the Disciples',
          html:
            'After the Resurrection, the disciples huddle in fear, the work seemingly undone. Then the Spirit of God comes upon them (Acts 2:1–4), filling them and sending them forth to bear witness. Like Haggai and Zechariah awakening the people to rebuild, the Spirit awakens the apostles to proclaim. The prophetic word that stirs the people to action is fulfilled in the Spirit&apos;s work in the New Covenant[res:sefaria-1-esdras-6].',
        },
        {
          kind: 'carry',
          html:
            'When have you felt a word from God stir your heart to action? Not a mere idea or inclination, but a word that came <em>in the name of God</em>—a word that commanded your allegiance and moved you to begin or resume a work you had abandoned?',
        },
        {
          kind: 'reflection',
          id: 'esdras6-stirred',
          prompt:
            'What work has the Spirit of God called you to that you have abandoned or left unfinished? What would it mean to hear His word again and rise to build?',
        },
      ],
    },

    /* ─── 1 Esdras 6:3–7 — The Work Resumes ───────────────────────────── */
    {
      ref: '1 Esdras 6:3–5',
      title: 'The Builders Rise Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('Then '),
                hg('rose up Zerubbabel the son of Shealtiel', 'esdras6-zerubbabel'),
                t(' and Jeshua the son of Jozadak, and began to build the house of God which is at Jerusalem; and with them were the prophets of God helping them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-zerubbabel',
          html:
            'Notice the immediacy. The prophets speak, and the leaders do not hesitate. They do not call a committee meeting. They do not weigh the political consequences. They do not ask for a sign. The word is spoken, and they rise to build. Moreover, the prophets remain with them—<em>helping them</em>. The word that calls them forth does not then abandon them in their labor.',
        },
        {
          kind: 'carry',
          html:
            'Obedience moves faster than doubt. When a word comes from God through those who speak for Him, the response is not "Wait and see"—it is to rise up and begin. The prophets will help you. God does not call you to a work and then leave you alone to accomplish it.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-obedience',
          prompt:
            'What prevents you from rising up immediately when you sense God&apos;s call? Fear? Doubt? A need for more information? What would change if you trusted that the one who calls you will help you?',
        },
      ],
    },

    /* ─── 1 Esdras 6:6–12 — Sisinnes Inspects and Questions ──────────── */
    {
      ref: '1 Esdras 6:6–7',
      title: 'The Governor Questions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('At the same time came Sisinnes the governor on this side the river, and Satharbuzanes, and their companions, and said unto them, '),
                hp('Who hath commanded you to build this house', 'esdras6-question'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-question',
          html:
            'Opposition comes quickly. The governor represents the Persian crown—the political authority of the age. He does not ask gently or with curiosity. He demands: <em>Who commanded you?</em> It is a challenge to authority and legitimacy. The implication is clear: if you have no authorization from the throne, you have no right to build. The work could be stopped.',
        },
        {
          kind: 'carry',
          html:
            'When you do work that matters to God, opposition will come. It often comes wrapped in authority—legal questions, regulatory challenges, the demand for credentials. Do not be surprised. But remember: the question "Who gave you permission?" has only one ultimate answer: God did.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-authority',
          prompt:
            'What authority do you appeal to when challenged? Do you seek human permission, or do you ground yourself in God&apos;s call?',
        },
      ],
    },

    /* ─── 1 Esdras 6:8–27 — The Jews Answer: Cyrus&apos; Decree ─────── */
    {
      ref: '1 Esdras 6:8–9',
      title: '"We Are the Servants of the God of Heaven"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('Then answered the elders of the Jews and said, '),
                hp('We are the servants of the God of heaven and earth', 'esdras6-servants'),
                t(', and build the house that was builded these many years ago, and finished by a great king of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-servants',
          html:
            'This is one of the most courageous declarations in all of Scripture. Facing a governor who wields the authority of the Persian Empire, the elders do not appeal to Cyrus&apos;s name first. They appeal to something higher: "We are the servants of the God of heaven and earth." They declare their ultimate allegiance. They are not primarily servants of Persia or of the throne. They are servants of the God of heaven and earth—the God who made all things and sustains all authority.',
        },
        {
          kind: 'hebrew',
          id: 'esdras6-avadim',
          title: 'Avadim — "Servants"',
          script: 'עֲבָדִים',
          translit: '<strong>Avadim</strong> · servants; those who belong to and serve',
          description:
            'To be an eved (singular: servant) is to belong wholly to another. It is a relationship of complete dependence and obedience. The elders are declaring that they belong to God, not to the throne of Persia. Their labor, their loyalty, their very lives are at God&apos;s disposal.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-confession',
          title: 'Christ Connection — Before Kings and Rulers',
          html:
            'When the disciples face the Sanhedrin, they echo this same courage. Peter says, "We ought to obey God rather than men" (Acts 5:29). When Jesus says His followers will "be brought before kings and rulers" for His name&apos;s sake, He adds, "It shall turn to you for a testimony" (Luke 21:13). The confession of the elders—"We are the servants of the God of heaven and earth"—is the same confession the apostles would make.',
        },
        {
          kind: 'carry',
          html:
            'What does it mean for you to confess that you are a servant of the God of heaven and earth? In your work, your relationships, your choices—to whom do you ultimately belong? When authorities or pressures conflict with God&apos;s call, which allegiance takes precedence?',
        },
        {
          kind: 'reflection',
          id: 'esdras6-servant',
          prompt:
            'Is your deepest identity rooted in being a servant of God? What would it look like to declare that allegiance when it costs you something?',
        },
      ],
    },

    /* ─── 1 Esdras 6:28–33 — Sisinnes Writes to Darius ───────────────── */
    {
      ref: '1 Esdras 6:28–31',
      title: 'The Letter to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 28,
              spans: [
                t('Then Sisinnes the governor and Satharbuzanes and their companions wrote and sent unto king Darius, saying, All hail, O king.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Be it known unto the king, that being come into the province of Judea, we found the Jews that were captives building a house unto the Lord, a house most great and stately, wrought with squared stones, and timber set in the walls.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And this work goeth fast on, and the work prospereth in their hands, and is finished with great diligence and speed.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Then asked we of these elders, saying, "By whose commandment do ye build this house, and lay the foundations of this worshiping place?"'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-king-greeting',
          html:
            'Notice that the governor does not suppress the work immediately. Instead, he writes to the king. This is significant. The Jews have grounded their answer in a decree—in written authority. To counter that, the governor must appeal to a higher written authority: the king himself. What looks like a political maneuver is actually an opening for the truth to be discovered and vindicated.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s work moves forward not by avoiding documentation or authority but by standing on truth that has been written and recorded. The decree of Cyrus did not fade with time. It endured. Written truth is harder to erase than spoken promises. When you do God&apos;s work, let it be known. Let it be recorded. Truth that stands in the light cannot be hidden or denied forever.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-written-truth',
          prompt:
            'What truth about God or His call has been written in your life? How does it sustain you when opposition comes?',
        },
      ],
    },

    /* ─── 1 Esdras 6:32–End — The King Responds; Work Resumes ───────── */
    {
      ref: '1 Esdras 6:32–33',
      title: 'Truth Vindicated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 32,
              spans: [
                t('Then answered the elders of the Jews and said, "'),
                hp('We are indeed the servants of the Lord of heaven and earth', 'esdras6-final-confession'),
                t(', and we build the house that was builded many years ago by a great king of Israel, and was finished; but our fathers provoked the God of heaven unto wrath, and he gave them into the hand of Nebuchadnezzar king of Babylon, the Chaldean, who destroyed this house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-final-confession',
          html:
            'The elders repeat their confession, then tell the long story: the original building, the exile, the destruction. This is not argument but testimony. They speak the truth of what happened. And in that truth lies vindication—the truth of God&apos;s judgment, God&apos;s mercy, and God&apos;s promise to restore.',
        },
        {
          kind: 'hebrew',
          id: 'esdras6-emet',
          title: 'Emet — "Truth"',
          script: 'אֱמֶת',
          translit: '<strong>Emet</strong> · truth; faithfulness; that which endures',
          description:
            'Emet is not mere fact but faithful truth—a truth that stands because it is rooted in the nature of God. When the elders speak the truth of their history, they are not merely narrating events. They are speaking a truth that has been tested and proved true by God&apos;s faithfulness and judgment across generations.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 33,
              spans: [
                t('But when the king Cyrus reigned, he made a decree to build this house of the Lord at Jerusalem; and gave us commandment to do the same work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras6-decree-cited',
          html:
            'Now they invoke Cyrus&apos;s name—not first, but after the greater truth. The decree of Cyrus has authority because it is aligned with the purposes of God. The elders are not asking Darius to overturn a tyrant&apos;s order. They are asking him to remember his predecessor&apos;s wise and pious judgment.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-building',
          title: 'Christ Connection — Building God&apos;s House',
          html:
            'In Matthew 16:18, Christ says, "Upon this rock I will build my church." The temple-building foreshadows Christ&apos;s work of building the church—His people, His household. The opposition the Jews face in rebuilding the physical temple mirrors the spiritual opposition the church will face in building the kingdom. Yet as Cyrus&apos;s decree vindicated the Jews, Christ&apos;s resurrection vindicated His work: "All power is given unto me in heaven and in earth" (Matthew 28:18).',
        },
        {
          kind: 'carry',
          html:
            'When the truth of your story is told—not to boast, but to bear witness—it has power to move even distant hearts. You do not have to win your case with clever arguments. Tell the true story of what God has done and what He has called you to do. Truth, spoken in humility and in God&apos;s name, has authority that no opposition can permanently resist.',
        },
        {
          kind: 'reflection',
          id: 'esdras6-true-story',
          prompt:
            'What is the true story of God&apos;s work in your life? Who needs to hear it? How would telling it change the way you see your own journey?',
        },
      ],
    },

    {
      ref: 'Summary',
      title: 'God&apos;s Word Awakens; Truth Vindicates',
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchArtist: /tissot/i,
          matchTitle: /prophet|vision|ezra|builders/i,
          caption: 'The Prophets Call the People to Build',
        },
        {
          kind: 'commentary',
          html:
            'In 1 Esdras 6, three movements of God&apos;s work emerge: First, the prophetic word awakens the people to resume their labor. Not because the task became easier or conditions improved, but because God&apos;s word stirred their hearts. Second, opposition comes swiftly—not through violence but through official challenge. The governor demands justification. Third, the elders answer with confession and testimony, appealing to a decree written long ago and to the God whose purposes that decree served. The work continues because truth—once recorded, once grounded in God&apos;s covenant—cannot ultimately be overturned. In each moment, the people discover that God&apos;s work depends not on human politics but on alignment with God&apos;s eternal purpose.',
        },
        {
          kind: 'christ',
          id: 'esdras6-christ-summary',
          title: 'Christ Connection — The Work That Cannot Be Stopped',
          html:
            'Christ&apos;s disciples face opposition from religious and civil authorities. They are arrested, threatened, beaten. Yet they declare, "We ought to obey God rather than men." The word of God goes forth, and believers are gathered. Opposition cannot stop it. False witnesses come, trials are held, disciples are killed—yet the church grows. The work of God cannot be undone, because it is grounded not in human authority but in the resurrected authority of Christ Himself.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-ezra-4-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezra 4-6 — Opposition and Completion',
      url: 'https://www.sefaria.org/Ezra.4',
      description: 'Opposition to temple work and completion of reconstruction.',
    },
    {
      id: 'bible-odyssey-opposition-diaspora',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Diaspora Opposition and Community Resistance',
      url: 'https://www.bibleodyssey.org/dictionary/diaspora/',
      description: 'Conflict between diaspora returnees and local populations in Persian period.',
    },
    {
      id: 'sefaria-1-esdras-6',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Esdras 6 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Esdras.6',
      description: 'The Hebrew text of 1 Esdras 6 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  bottomShare: {
    label: 'Share 1 Esdras 6',
    quote:
      'We are the servants of the God of heaven and earth, and we build the house that was builded many years ago. Whosoever shall alter or hinder this edict shall suffer greatly.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 6 · Study Guide',
  },

  hasHebrew: true,
};
