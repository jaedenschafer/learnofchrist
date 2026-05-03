import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 25 — Seventy Years of Exile; Cup of God's Wrath
 *
 * Jeremiah proclaims that Judah will serve the king of Babylon for seventy years.
 * The cup of God's wrath will be passed to all nations. Yet after seventy years,
 * the cup will pass, and Babylon itself will drink the dregs. The promise is that
 * exile, though long, is temporary. Restoration will come.
 */
export const JEREMIAH_25: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 25,

  estimatedMinutes: { beginner: 5, intermediate: 7, deep: 9 },
  intros: [
    'For twenty-three years, Jeremiah has spoken to Judah, calling them to repent. They have not listened. Now, with Nebuchadrezzar about to besiege Jerusalem, Jeremiah announces the consequence: Judah will serve the king of Babylon and his son and his grandson for a total of seventy years. Seventy years — nearly the lifetime of a people, a generation that enters exile and a generation that is born in exile before the time of return.',
    'Yet seventy years is not forever. After that time, the cup of wrath will pass to Babylon itself. The exile that seems final, that seems like the end of the world, is actually limited and temporary. The cup of God&apos;s wrath, though it will be drunk, will eventually be emptied. And when the seventy years are complete, restoration will begin.',
  ],

  bottomShare: {
    label: 'Share Jeremiah 25',
    quote:
      'Seventy years of exile, then restoration. The cup of God&apos;s wrath is poured, but after seventy years, the captivity will end.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 25 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 25:1–11 — Seventy Years ───────────────────────────────────── */
    {
      ref: 'Jeremiah 25:1–11',
      title: 'The Length of Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 1,
              spans: [
                t('The word that came to Jeremiah concerning all the people of Judah in the fourth year of Jehoiakim the son of Josiah king of Judah, that was the first year of Nebuchadrezzar king of Babylon;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('The which Jeremiah the prophet spake unto all the people of Judah, and to all the inhabitants of Jerusalem, saying,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('From the thirteenth year of Josiah the son of Amon king of Judah, even unto this day, that is the three and twentieth year, the word of the Lord hath come unto me, and I have spoken unto you, rising early and speaking; but ye have not hearkened.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the Lord hath sent unto you all his servants the prophets, rising early and sending them; but ye have not hearkened, nor inclined your ear to hear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer25-prophet-cup',
          html: 'Jeremiah moves from God&apos;s long patience to the cup of wrath. Years of warning culminate in judgment[res:babylonian-chronicle].',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 5,
              spans: [
                t('They said, Turn ye again now every one from his evil way, and from the evil of your doings, and dwell in the land that the Lord hath given to you and to your fathers for ever and ever:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And go not after other gods to serve them, and to worship them, and provoke me not to anger with the works of your hands; and I will do you no hurt.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Yet ye have not hearkened unto me, saith the Lord; that ye might provoke me to anger with the works of your hands to your own hurt.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Therefore thus saith the Lord of hosts; Because ye have not heard my words,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Behold, I will send and take all the families of the north, saith the Lord, and Nebuchadrezzar the king of Babylon, my servant, and will bring them against this land, and against the inhabitants thereof, and against all these nations round about, and will utterly destroy them, and make them an astonishment, and an hissing, and perpetual desolations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer25-mirth-removed',
          html: 'The armies are summoned, the destruction declared. Now comes the catalog of loss: no mirth, no gladness, no bridegroom, no bride, no millstones grinding, no candles burning. All the sounds and signs of normal life will cease. Silence and desolation follow[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 10,
              spans: [
                t('Moreover I will take from them the voice of mirth, and the voice of gladness, the voice of the bridegroom, and the voice of the bride, the sound of the millstones, and the light of the candle.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And this whole land shall be a desolation, and an astonishment; and these nations shall serve the king of Babylon '),
                hp('seventy years', 'jer25-seventy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer25-seventy',
          html: 'Seventy years is a specific number. Not forever. Not a few years. A full generation and more. Those who enter exile as adults may not live to see the return. Those born in exile will be adults when it ends. Yet seventy years is a number that can be counted, can be endured, can be survived.',
        },
        {
          kind: 'commentary',
          id: 'jer25-servants',
          html: 'God calls the prophets His "servants" — they have spoken faithfully for twenty-three years. But the people have not listened. Now the consequence is clear: the prophets will be vindicated, their words will come true, and the people will endure what they were warned to avoid.',
        },
        {
          kind: 'carry',
          html:
            'Seventy years feels like forever when you are entering exile. The loss of the voice of the bridegroom, the sound of millstones, the light of the candle — all the signs of normal life — seems like permanent erasure. Yet the promise is that this time of darkness is limited. Seventy years will end. Life will return.',
        },
        {
          kind: 'reflection',
          id: 'jer25-darkness',
          prompt: 'The exile lasts seventy years — a long time, but not forever. When you face what seems like permanent darkness, how do you hold onto the promise that it is temporary?',
        },
      ],
    },

    /* ─── Jeremiah 25:12–16 — After Seventy Years ────────────────────────── */
    {
      ref: 'Jeremiah 25:12–16',
      title: 'Babylon Also Will Be Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 12,
              spans: [
                t('And it shall come to pass, when seventy years are accomplished, that I will punish the king of Babylon, and that nation, saith the Lord, for their iniquity, and the land of the Chaldeans, and will make it perpetual desolations.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And I will bring upon that land all my words which I have pronounced against it, even all that is written in this book, which Jeremiah hath prophesied against all the nations.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For many nations and great kings shall serve themselves of them also: and I will recompense them according to their deeds, and according to the work of their hands.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For thus saith the Lord God of Israel unto me; Take the wine cup of this fury at my hand, and cause all the nations, to whom I send thee, to drink it.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they shall drink, and be moved, and be mad, because of the sword that I will send among them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer25-punishment',
          html:
            'God will punish Babylon for its iniquity. Babylon was God&apos;s instrument for judgment on Judah, but Babylon itself is subject to God&apos;s justice. No nation escapes accountability. Babylon will drink the cup of God&apos;s wrath, as will all nations.',
        },
        {
          kind: 'commentary',
          id: 'jer25-wine-cup',
          html:
            'The image of the wine cup of God&apos;s fury is vivid and terrible. The nations will drink and be made mad, will stumble and fall under the sword. The cup passes from hand to hand, nation to nation, until all have drunk.',
        },
        {
          kind: 'carry',
          html:
            'While Judah drinks the cup in exile, they know that Babylon will also drink. Justice is not only for God&apos;s people; it is for all nations. No oppressor escapes God&apos;s reckoning. This knowledge — that God sees and will judge all nations — is a comfort to the exiled.',
        },
        {
          kind: 'christ',
          id: 'jer25-christ',
          title: 'Christ Connection — The Cup of Wrath',
          html:
            'The cup passes to all. Jeremiah watches nations drink the fury of God. Yet in the garden of Gethsemane, Jesus prays: "O my Father, if it be possible, let this cup pass from me" (Matt. 26:39). He knows what the cup contains. He drinks it anyway. "So Jesus took the cup, and said unto his disciples, Drink ye all of it; For this is my blood of the new testament, which is shed for many for the remission of sins" (Matt. 26:27–28). The cup of God&apos;s wrath, drunk by all the nations, all the peoples — Christ drinks it for His people. The judgment that was destined for them, He bears (Isa. 51:22–23).',
        },
        {
          kind: 'reflection',
          id: 'jer25-justice',
          prompt: 'Babylon judges Judah, but Babylon itself will be judged. How does knowing that God is a God of universal justice comfort you? How does it call you to live differently?',
        },
      ],
    },

    /* ─── Jeremiah 25:27–29 — All Nations Will Drink ──────────────────────── */
    {
      ref: 'Jeremiah 25:27–29',
      title: 'The Cup Passes to All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            {
              number: 27,
              spans: [
                t('Therefore thou shalt say unto them, Thus saith the Lord of hosts, the God of Israel; Drink ye, and be drunken, and spue, and fall, and rise no more, because of the sword which I will send among you.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And it shall be, if they refuse to take the cup at thine hand to drink, then shalt thou say unto them, Thus saith the Lord of hosts; Ye shall surely drink.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For, lo, I begin to bring evil on the city which is called by my name, and should ye be utterly unpunished? Ye shall not be unpunished: for I will call for a sword upon all the inhabitants of the earth, saith the Lord of hosts.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer25-refuse-cup',
          html:
            'No nation can refuse the cup. If they refuse to drink, they will be forced to drink. God&apos;s judgment is not optional; it is universal and inescapable. "I begin to bring evil on the city which is called by my name" — if Jerusalem must drink, how much more every other nation.',
        },
        {
          kind: 'carry',
          html:
            'The cup of God&apos;s wrath goes to all. No nation, no people, no individual escapes judgment. This seems harsh, yet it is also just. All are held accountable. The cup that comes to us is not arbitrary; it is the consequence of our deeds, the natural result of walking away from God.',
        },
        {
          kind: 'reflection',
          id: 'jer25-cup',
          prompt: 'The cup is passed to all nations; none escape. How do you respond to living under a God of justice as well as mercy?',
        },
      ],
    },

    /* ─── Jeremiah 25 · The Duration and the Hope ─────────────────────────── */
    {
      ref: 'Jeremiah 25 · All',
      title: 'Exile Is Not Forever',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer25-hope-seventy',
          html:
            'The chapter gives a specific date for the end of exile: seventy years. This specificity is itself a form of hope. The people can count toward it. They can imagine the day when the cup is emptied, when the exiles begin to return, when life resumes. Judgment is not permanent; it is a season.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    }
  ],
};
