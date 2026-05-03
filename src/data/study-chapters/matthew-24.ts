import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 24 — The Olivet Discourse
 *
 * Jesus sits on the Mount of Olives. His disciples ask: when will these things be?
 * What will be the sign of your coming and of the end of the world? Jesus teaches
 * about wars, earthquakes, famines. "This gospel of the kingdom shall be preached
 * in all the world for a witness unto all nations." Then the end. Signs in the sun,
 * moon, and stars. The Son of man comes in the clouds with power and great glory.
 * "Heaven and earth shall pass away, but my words shall not pass away."
 */
export const MATTHEW_24: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 24,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'Jesus leaves the temple and sits on the Mount of Olives. His disciples approach and ask Him privately: "Tell us, when shall these things be? and what shall be the sign of thy coming, and of the end of the world?" The question embraces both the immediate (the destruction of the temple) and the ultimate (the end of human history). Jesus responds with an extended discourse about the last days.',
    'The discourse is marked by exhortations to watchfulness. Wars, rumors of wars, earthquakes in various places—these are the beginning of sorrows. The gospel must be preached to all nations. Tribulation comes. Yet Jesus promises: "Heaven and earth shall pass away, but my words shall not pass away." The faithful are called to vigilance, readiness, and faithfulness, for the day of the Lord comes when no one expects it.',
  ],

  sections: [
    /* ─── Matthew 24:1–35 — Signs and the Gospel Preached to All Nations ─── */
    {
      ref: 'Matthew 24:1–35',
      title: 'The Gospel to All Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(3, 'Tell us, when shall these things be? and what shall be the sign of thy coming, and of the end of the world?'),
            plain(4, 'And Jesus answered and said unto them, Take heed that no man deceive you.'),
            plain(6, 'Ye shall hear of wars and rumours of wars: see that ye be not troubled: for all these things must come to pass, but the end is not yet.'),
            plain(14, 'And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.'),
            plain(29, 'Immediately after the tribulation of those days shall the sun be darkened, and the moon shall not give her light, and the stars shall fall from heaven, and the powers of the heavens shall be shaken:'),
            plain(35, 'Heaven and earth shall pass away, but my words shall not pass away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt24-deception',
          html:
            'Jesus&apos; first warning is about deception [res:bibleodyssey-false-messiahs]. "Take heed that no man deceive you. For many shall come in my name, saying, I am Christ; and shall deceive many." In the last times, false messiahs and false prophets will arise. The sign of the end is not a single event or person but a pattern of turbulence, accompanied by the warning not to be deceived.',
        },
        {
          kind: 'commentary',
          id: 'matt24-not-the-end',
          html:
            'Wars, rumors of wars, famines, earthquakes—these will come. "See that ye be not troubled: for all these things must come to pass, but the end is not yet." Jesus teaches that calamity is not the end. These are "the beginning of sorrows," birth pangs signaling labor but not yet birth. Watchfulness requires patience and perspective.',
        },
        {
          kind: 'greek',
          id: 'matt24-gospel',
          title: 'Euaggelion — Gospel',
          script: 'εὐαγγέλιον',
          translit: '<strong>Euaggelion</strong> · gospel; good news; the message of salvation',
          description:
            'The gospel—the good news of Christ—must be preached to all nations as a witness. The spread of the gospel across the earth is itself a sign of the nearness of the end. The kingdom expands before it culminates.',
        },
        {
          kind: 'commentary',
          id: 'matt24-coming',
          html:
            'When all nations have heard, then the end comes [res:sefaria-isaiah-13-cosmic-signs]. Jesus describes cosmic signs: the sun darkened, the moon giving no light, stars falling from heaven. "And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn: and they shall see the Son of man coming in the clouds of heaven with power and great glory."',
        },
        {
          kind: 'commentary',
          id: 'matt24-words',
          html:
            'Amid all the cosmic upheaval, Jesus speaks of the permanence of His words: "Heaven and earth shall pass away, but my words shall not pass away." When all earthly things dissolve, the word of Christ endures. It is the rock upon which believers stand.',
        },
        {
          kind: 'christ',
          id: 'matt24-christ-coming',
          title: 'Christ Connection — Christ&apos;s Coming',
          html:
            'Jesus promises His return. The consummation of history is not accident or tragedy but the deliberate return of Christ to establish His reign fully. Until then, disciples are called to witness, to preach the gospel, and to remain faithful.',
        },
        {
          kind: 'carry',
          html:
            'The Olivet Discourse is not primarily about date-setting or speculation. It is about faithfulness. Jesus calls His followers to remain alert, steadfast, and watchful. How are you living as though Christ could return at any moment? What would change if you truly expected His coming?',
        },
        {
          kind: 'reflection',
          id: 'matt24-watchful',
          prompt: 'If Jesus returned today, would you be at peace or ashamed? What would it mean to live as though His coming were imminent?',
        },
      ],
    },

    /* ─── Matthew 24:36–51 — The Unknown Hour and Watchfulness ────────────── */
    {
      ref: 'Matthew 24:36–51',
      title: 'Be Ready',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(36, 'But of that day and hour knoweth no man, no, not the angels of heaven, but my Father only.'),
            plain(37, 'But as the days of Noe were, so shall also the coming of the Son of man be.'),
            plain(42, 'Watch therefore: for ye know not what hour your Lord doth come.'),
            plain(44, 'Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.'),
            plain(46, 'Blessed is that servant, whom his lord when he cometh shall find so doing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt24-unknown-hour',
          html:
            'No one knows the day or hour—not the angels, not anyone but God the Father. Jesus speaks not to satisfy curiosity about the end times but to prevent complacency. Because the hour is unknown, watchfulness is essential. "Watch therefore: for ye know not what hour your Lord doth come."',
        },
        {
          kind: 'commentary',
          id: 'matt24-days-of-noah',
          html:
            'Jesus compares His coming to the days of Noah. In Noah&apos;s time, people were eating, drinking, marrying—engaged in ordinary life—when judgment came suddenly. "The flood came, and took them all away; so shall also the coming of the Son of man be." The danger is not tragedy or catastrophe but complacency, the illusion that the world will continue as it always has.',
        },
        {
          kind: 'greek',
          id: 'matt24-gregoreuo',
          title: 'Gregoreuo — Watch; Stay Awake',
          script: 'γρηγορεύω',
          translit: '<strong>Gregoreuo</strong> · to watch; to stay awake; to be vigilant; to keep alert',
          description:
            'Gregoreuo means more than physical wakefulness. It means spiritual alertness, readiness, commitment to duty. A watchful servant is one who attends to his responsibility regardless of when the master returns.',
        },
        {
          kind: 'commentary',
          id: 'matt24-faithful-servant',
          html:
            'Jesus praises the servant "whom his lord when he cometh shall find so doing." The servant is faithful in his duty, working faithfully whether the master is near or far. This is the model: faithfulness in the present, readiness for the future. "Blessed is that servant... his lord shall make him ruler over all his goods."',
        },
        {
          kind: 'commentary',
          id: 'matt24-evil-servant',
          html:
            'Yet Jesus also describes the evil servant who thinks, "My lord delayeth his coming," and begins to mistreat others and indulge in excess. When the master returns unexpectedly, the servant is unprepared and suffers judgment. The delayed coming is no excuse for unfaithfulness.',
        },
        {
          kind: 'christ',
          id: 'matt24-christ-faithful',
          title: 'Christ Connection — Christ the Master of the Faithful',
          html:
            'Jesus is the Master who will return. He commends the faithful servant and rebukes the negligent one. Readiness for His coming is demonstrated not in speculative knowledge but in present faithfulness to duty, compassion, and integrity.',
        },
        {
          kind: 'carry',
          html:
            'The question is not "When will the end come?" but "Am I ready?" Are you living in a way that would bring blessing if Christ returned today? Faithfulness, not knowledge of the future, is what Jesus calls for.',
        },
        {
          kind: 'reflection',
          id: 'matt24-blessed',
          prompt: 'What would it look like to be "so doing"—faithfully occupied in righteous work—at the moment Christ returns? What changes might that vision suggest?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Heaven and earth shall pass away, but my words shall not pass away... Watch therefore: for ye know not what hour your Lord doth come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 24 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-false-messiahs',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'False Messiahs and Prophets in the Last Days',
      url: 'https://www.bibleodyssey.org/dictionary/false-messiahs/',
      description: 'Overview of eschatological deception and the proliferation of false messiahs in Jewish and Christian expectation.',
    },
    {
      id: 'sefaria-isaiah-13-cosmic-signs',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 13 — Cosmic Signs and Divine Judgment',
      url: 'https://www.sefaria.org/Isaiah.13',
      description: 'Old Testament prophecy of cosmic upheaval and divine judgment that Jesus echoes in His eschatological discourse.',
    },
    {
      id: 'intertextual-olivet-discourse',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Olivet Discourse — Gospel Parallels',
      url: 'https://intertextual.bible/text/matthew-24.1',
      description: 'Comparison of Jesus&apos; end-times teaching across Matthew, Mark, and Luke, highlighting unique Matthean emphases.',
    },
  ],

  hasHebrew: false,
};
