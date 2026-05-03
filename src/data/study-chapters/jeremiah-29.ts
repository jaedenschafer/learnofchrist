import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 29 — The Letter to the Exiles
 *
 * Jeremiah writes a letter to those carried into captivity: "Build ye houses,
 * and dwell in them; and plant gardens, and eat the fruit of them... And seek
 * the peace of the city whither I have caused you to be carried away captive,
 * and pray unto the Lord for it: for in the peace thereof shall ye have peace."
 * The exiles are called to live fully in exile, to seek God&apos;s good plans,
 * to find Him when they seek Him with all their hearts.
 */
export const JEREMIAH_29: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 29,

  estimatedMinutes: { beginner: 5, intermediate: 7, deep: 10 },
  intros: [
    'This is a letter of hope written to those already in exile. Jeremiah does not promise that the exile will end immediately or easily. Instead, he calls the exiles to live fully, to build homes, plant gardens, marry their children, seek peace in Babylon itself. "I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end."',
    'The promise is that God&apos;s thoughts toward the exiles are not thoughts of destruction but of peace, of a future and a hope. And the way to find that future is not to resist exile but to seek God with all their hearts in exile: "And ye shall seek me, and find me, when ye shall search for me with all your heart."',
  ],

  bottomShare: {
    label: 'Share Jeremiah 29',
    quote:
      '"I know the thoughts that I think toward you... thoughts of peace... Seek me, and find me, when ye shall search for me with all your heart." God&apos;s good plans and the promise of His presence.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 29 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 29:1–7 — Build and Dwell ──────────────────────────────────── */
    {
      ref: 'Jeremiah 29:1–7',
      title: 'Life in Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the words of the letter that Jeremiah the prophet sent from Jerusalem unto the residue of the elders which were carried away captive, and to the priests, and to the prophets, and to all the people whom Nebuchadrezzar had carried away captive from Jerusalem to Babylon;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Thus saith the Lord of hosts, the God of Israel, unto all that are carried away captive, whom I have caused to be carried away from Jerusalem unto Babylon;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Build ye houses, and dwell in them; and plant gardens, and eat the fruit of them;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Take ye wives, and beget sons and daughters; and take wives for your sons, and give your daughters to husbands, that they may bear sons and daughters; that ye may be multiplied there, and not diminished.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And seek the peace of the city whither I have caused you to be carried away captive, and pray unto the Lord for it: for in the peace thereof shall ye have peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer29-build',
          html:
            'Jeremiah tells the exiles not to despair, not to mark time, not to wait passively for return. Instead, build houses, plant gardens, marry, have children. Live as though you are staying. This is the wisdom of exile: not to reject your circumstances but to embrace them, to live fully within them.',
        },
        {
          kind: 'commentary',
          id: 'jer29-peace',
          html:
            'And the exiles are told to seek the peace of the city where they are held captive. Babylon is the enemy city, yet they are called to pray for its peace, to seek its welfare. In doing so, they will find peace for themselves. The paradox: by seeking the good of those who hold you captive, you find your own good.',
        },
        {
          kind: 'carry',
          html:
            'We often find ourselves in circumstances we did not choose. Yet Jeremiah teaches that exile is not a time to cease living, to put off joy, to wait for rescue. It is a time to live fully, to plant and build, to marry and have children, to seek the common good. Life happens in exile, not after it.',
        },
        {
          kind: 'reflection',
          id: 'jer29-build-dwell',
          prompt: 'Jeremiah calls the exiles to build and dwell, to plant gardens and have children. Where in your life are you waiting for better circumstances before fully living? What would it mean to build and plant right now?',
        },
      ],
    },

    /* ─── Jeremiah 29:8–14 — Thoughts of Peace ───────────────────────────────── */
    {
      ref: 'Jeremiah 29:8–14',
      title: "God&apos;s Good Plans",
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 8,
              spans: [
                t('For thus saith the Lord of hosts, the God of Israel; Let not your prophets and your diviners, that be in the midst of you, deceive you, neither hearken to your dreams which ye cause to be dreamed.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For they prophesy falsely unto you in my name: I have not sent them, saith the Lord.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For thus saith the Lord, That after seventy years be accomplished at Babylon I will visit you, and perform my good word toward you, in causing you to return to this place.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For I know the thoughts that I think toward you, saith the Lord, '),
                hp('thoughts of peace, and not of evil, to give you an expected end', 'jer29-thoughts'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And ye shall seek me, and find me, when ye shall search for me with all your heart.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And I will be found of you, saith the Lord: and I will turn away your captivity, and I will gather you from all the nations, and from all the places whither I have driven you, saith the Lord; and I will bring you again into the place whence I caused you to be carried away captive.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer29-thoughts',
          html:
            '"I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end." The exiles need to know that their exile is not the end of God&apos;s plan for them. God has a future in mind, a restoration. But that future comes through the exile, not around it. They must learn to seek God in the place of captivity.',
        },
        {
          kind: 'commentary',
          id: 'jer29-seek-find',
          html:
            '"Ye shall seek me, and find me, when ye shall search for me with all your heart." The promise is that seeking God is not futile, that God is not hidden from those who seek Him with wholehearted devotion. And when they find Him, they find not only God but also their own restoration.',
        },
        {
          kind: 'hebrew',
          id: 'jer29-darash',
          title: 'Darash — "Seek" or "Search"',
          script: 'דָּרַש',
          translit: '<strong>Darash</strong> · to seek; to search; to inquire; to require',
          description:
            'The verb "darash" carries the sense of diligent searching, of questioning, of pursuing something with intention. To seek God with all your heart is not passive hoping; it is active, wholehearted pursuit.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s thoughts toward us are thoughts of peace. We do not know the future, but God does. And His plans are not for harm but for good. The way to know this is to seek Him, to call upon Him, to pray. And when we search for Him with all our hearts, we will find Him.',
        },
        {
          kind: 'reflection',
          id: 'jer29-peace',
          prompt: 'God&apos;s thoughts toward you are thoughts of peace and good, not evil. How does this promise change the way you face difficult circumstances? How are you seeking God with all your heart?',
        },
      ],
    },

    /* ─── Jeremiah 29:24–32 — Against the False Prophets in Exile ──────────────── */
    {
      ref: 'Jeremiah 29:24–32',
      title: 'False Prophets Follow the Exiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 24,
              spans: [
                t('And concerning Shemaiah the Nehelamite, thou shalt say,'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Thus speaketh the Lord of hosts, the God of Israel, saying, Because thou hast sent letters in thy name unto all the people that are at Jerusalem, and to Zephaniah the son of Maaseiah the priest, and unto all the priests, saying,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('The Lord hath made thee priest in the stead of Jehoiada the priest, that ye should be officers in the house of the Lord, for every man that is mad, and maketh himself a prophet, to put him in prison, and in the stocks.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Now therefore why hast thou not reproved Jeremiah of Anathoth, which maketh himself a prophet to you?'),
              ],
            },
            {
              number: 28,
              spans: [
                t('For therefore he sent unto us in Babylon, saying, This captivity is long: build ye houses, and dwell in them; and plant gardens, and eat the fruit of them.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Therefore thus saith the Lord of Shemaiah the Nehelamite; Because that Shemaiah hath prophesied unto you, and I sent him not, and he caused you to trust in a lie:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Therefore thus saith the Lord; Behold, I will punish Shemaiah the Nehelamite, and his seed: he shall not have a man to dwell among this people; neither shall he behold the good that I will do for my people, saith the Lord; because he hath spoken rebellion against the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer29-shemaiah',
          html:
            'Even in Babylon, there are false prophets. Shemaiah writes letters saying that Jeremiah is mad for telling the people to build and dwell. The false prophets promise quick return; Jeremiah calls them to live as though exile is long. Shemaiah wants the priests to put Jeremiah in stocks. Yet Jeremiah&apos;s word is God&apos;s word, and Shemaiah&apos;s is a lie.',
        },
        {
          kind: 'commentary',
          id: 'jer29-not-behold',
          html:
            'Shemaiah will not behold the good that God will do for His people. He will be separated from the restoration he refused to believe in. His children will have no one among the people — he will be erased from community and memory.',
        },
        {
          kind: 'carry',
          html:
            'Even in exile, even in a foreign land, the false prophets try to redirect the people away from God&apos;s true word. Yet God&apos;s word stands. Those who speak against it will face judgment. Those who seek God with all their hearts will find Him.',
        },
        {
          kind: 'reflection',
          id: 'jer29-hear-god',
          prompt: 'In Babylon, the false prophets try to turn people from Jeremiah&apos;s message. Where in your life do you face voices telling you not to trust God&apos;s word? How do you distinguish truth from lies?',
        },
      ],
    },

    /* ─── Jeremiah 29 · Hope and Seeking ──────────────────────────────────── */
    {
      ref: 'Jeremiah 29 · All',
      title: 'The Promise in Exile',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer29-exiles-live',
          html:
            'The chapter presents a vision of exile transformed. Not merely endured but lived in. Not merely waited through but engaged with. The exiles build, plant, marry, have children, and seek the peace of the city that holds them. And in doing so, they find God, and God finds them.',
        },
        {
          kind: 'christ',
          id: 'jer29-christ-seek-find',
          title: 'Christ Connection — Seek and You Will Find',
          html:
            'Jesus teaches, "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you" (Matthew 7:7). He echoes Jeremiah&apos;s promise: those who seek find. God is not hidden from those who search for Him with all their hearts. In exile and in every circumstance, God promises His presence to those who seek Him.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
