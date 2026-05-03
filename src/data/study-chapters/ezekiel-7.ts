import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 7 — The End Is Come
 *
 * Ezekiel announces a refrain with escalating urgency: "An end is come, the end
 * is come." The day of the Lord approaches. It will not be a day of restoration
 * or rescue but of wrath. No one will be spared. No one will escape. The people
 * will discover that their wealth and their defenses cannot save them. Only the
 * knowledge of God remains.
 */
export const EZEKIEL_7: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'With Ezekiel 7, the tone becomes apocalyptic. The oracle grows darker, more urgent, more final. The refrain "An end is come, the end is come" pulses through the chapter like a heartbeat, insistent and inescapable. This is not the language of judgment that might be averted through repentance. This is the language of finality. The day of the Lord is approaching, and it will strip away everything on which Israel has built its false security — its wealth, its weapons, its commercial networks, its self-reliance. All will be revealed as worthless. And in the stripping away of all that is temporary, only one thing will remain: the knowledge that God is real, God is just, and God&apos;s word is true.',
  ],

  sections: [
    {
      ref: 'Ezekiel 7:1–9',
      title: 'The Day Approaches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Moreover the word of the Lord came unto me, saying,'),
            plain(2, 'Also, thou son of man, thus saith the Lord God unto the land of Israel; An end, the end is come upon the four corners of the land.'),
            plain(3, 'Now is the end come upon thee, and I will send mine anger upon thee, and will judge thee according to thy ways, and will recompense upon thee all thine abominations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-end-coming',
          html: '<p>The end comes; no escape, no pity. Yet even in doom, a remnant will know the Lord. Severity awakens faith.</p>[res:babylonian-exile-context]',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'And mine eye shall not spare thee, neither will I have pity: but I will recompense thy ways upon thee, and thine abominations shall be in the midst of thee: and ye shall know that I am the Lord.'),
            plain(5, 'Thus saith the Lord God; An evil, an only evil, behold, is come.'),
            plain(6, 'An end is come, the end is come: it watcheth for thee; behold, it is come.'),
            plain(7, 'The morning is come unto thee, O thou that dwellest in the land: the time is come, the day of trouble is near, and not the sounding again of the mountains.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk7-urgency-final',
          html: 'The repetition of "the end is come" is not poetic embellishment. It is the breaking through of an urgency that will not be denied. Ezekiel announces what Israel has refused to believe: the end of the age as you have known it. This is not a threat that might be averted. It is a reality that is already approaching, already watchful, already arriving. The day of the Lord — a day Israel once hoped for as a day of vindication — comes instead as a day of terror[res:ezekiel-revelation-intertextual][res:sefaria-ezekiel-7].',
        },
        {
          kind: 'carry',
          html: 'There comes a time when the possibility of return is foreclosed, when judgment is not pending but present. Ezekiel announces this moment with clarity: the time for amendment is past. Now comes consequence. This is a truth we do not like to contemplate, but it is real. The God of judgment is not less God than the God of mercy. He is the God of both, and there are times when mercy gives way to justice.',
        },
        {
          kind: 'reflection',
          id: 'ezk7-urgency-repent',
          prompt: 'Are there areas of your life where you sense an approaching reckoning, a moment when choices become final? What is God calling you to do while there is still time?',
        },
      ],
    },

    {
      ref: 'Ezekiel 7:19–27',
      title: 'Treasures Cannot Save',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(19, 'They shall cast their silver in the streets, and their gold shall be removed: their silver and their gold shall not be able to deliver them in the day of the wrath of the Lord: they shall not satisfy their souls, neither fill their bowels: because it is the stumblingblock of their iniquity.'),
            plain(24, 'Wherefore I will bring the worst of the heathen, and they shall possess their houses: I will also make the pomp of the strong to cease; and their holy places shall be defiled.'),
            plain(25, 'Destruction cometh; and they shall seek peace, and there shall be none.'),
            plain(26, 'Mischief shall come upon mischief, and rumour shall be upon rumour; then shall they seek a vision of the prophet; but the law shall fail from the priest, and counsel from the ancients.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk7-silver-gold-useless',
          html: 'In the moment of judgment, all the accumulations of peace become worthless. Silver and gold, the tokens of power and security, are cast into the streets like garbage. Why? Because they cannot buy deliverance. They cannot satisfy the soul or fill the belly when destruction comes. Israel has built its confidence on material things — on commerce, on display, on the visible signs of power. And in the day of judgment, all these things reveal their fundamental impotence.',
        },
        {
          kind: 'christ',
          id: 'ezk7-christ-true-wealth',
          title: 'Christ Connection — Treasure in Heaven',
          html:
            'Jesus teaches: "What does it profit a man if he gains the whole world but loses his soul?" The treasure that matters cannot be taken by the enemy, cannot be devalued by time, cannot be stripped away by judgment. That treasure is a heart turned toward God, a relationship with Him, a faith that survives when all else crumbles. Christ teaches His followers to lay up treasures in heaven, where moth and rust do not corrupt and thieves do not break in and steal.',
        },
        {
          kind: 'carry',
          html:
            'Our culture teaches us to accumulate, to display, to find security in material things. But Ezekiel &apos;s oracle teaches a starker truth: in the final hour, only what is eternal matters. Only the knowledge of God, only the relationship of the soul to its Creator, only faith that has been tested — these cannot be taken away. Everything else is dust.',
        },
        {
          kind: 'reflection',
          id: 'ezk7-eternal-security',
          prompt: 'Where are you placing your security? What would you grieve losing most? What does your answer reveal about what you truly believe is most important?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"An end is come, the end is come." — Ezekiel 7:6',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 7 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/text/ezekiel-40/revelation-21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    }
    {
      id: 'sefaria-ezekiel-7',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 7 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezekiel.7',
      description: 'The Hebrew text of Ezekiel 7 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
