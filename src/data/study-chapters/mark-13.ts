import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 13 — The Olivet Discourse
 *
 * Jesus foretells the destruction of the temple. Not one stone will be left upon
 * another. When will these things be? Jesus teaches about tribulation, false
 * prophets, the gospel preached to all nations. "Heaven and earth shall pass away:
 * but my words shall not pass away." No one knows the day or hour, not the angels,
 * not the Son, but only the Father. Therefore: watch. Be ready. The chapter is
 * apocalyptic—it speaks of the end times with urgency and mystery. But its central
 * truth is simple: remain watchful. Jesus&apos; words will endure. The kingdom is
 * coming. "What I say unto you I say unto all, Watch."
 */
export const MARK_13: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 13,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  opener: {
    matchTitle: /The Prophecy of the/i,
    caption: 'Mark 13',
  },
  intros: [
    'Jesus and His disciples leave the temple. One of the disciples marvels at its magnificence: "Master, see what manner of stones and what buildings are here!" Jesus responds: "Seest thou these great buildings? there shall not be left one stone upon another, that shall not be thrown down." The temple, symbol of God&apos;s presence on earth, is destined for destruction. This is shocking. Peter, James, John, and Andrew ask: "Tell us, when shall these things be? and what shall be the sign when all these things shall be fulfilled?"',
    'Jesus teaches the Olivet Discourse—a prophecy about the end times. False Christs will come. There will be wars and rumors of wars, famines, earthquakes in diverse places. The gospel will be preached to all nations before the end. Then the Son of Man will come in clouds with great power and glory. He will gather His elect from the four winds. But no one knows the day or hour—not the angels, not the Son, but only the Father. Therefore: watch. Be ready. Keep awake. The chapter emphasizes vigilance, readiness, confidence in Jesus&apos; words which will not pass away.',
  ],

  sections: [
    /* ─── Mark 13:1–23 — Signs and Warnings ────────────────────────────── */
    {
      ref: 'Mark 13:1–23',
      title: 'The End and the Watch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(2, 'And Jesus answering said unto him, Seest thou these great buildings? there shall not be left one stone upon another, that shall not be thrown down.'),
            plain(14, 'But when ye shall see the abomination of desolation, spoken of by Daniel the prophet, standing where it ought not, (let him that readeth understand,) then let them that be in Judaea flee to the mountains:'),
            plain(24, 'But in those days, after that tribulation, the sun shall be darkened, and the moon shall not give her light,'),
            plain(26, 'And then shall they see the Son of man coming in the clouds with great power and glory.'),
            plain(27, 'And then shall he send his angels, and shall gather together his elect from the four winds, from the uttermost part of the earth to the uttermost part of heaven.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark13-temple-destroyed',
          html:
            'Jesus predicts the destruction of the temple. This occurred in 70 CE when the Romans sacked Jerusalem. The destruction is not merely a political or historical event. It is a sign that the old temple order is passing away. A new temple—the body of Christ—is rising. The end of the earthly temple makes way for the gathering of the elect into Christ.',
        },
        {
          kind: 'commentary',
          id: 'mark13-false-christs',
          html:
            'Jesus warns of false Christs and false prophets: "There shall arise false Christs, and false prophets, and shall shew signs and wonders, to seduce, if it were possible, even the elect." The mark of false messianism is that it performs signs and seeks to seduce through spectacle. The true Messiah has already come and will come again. Beware of being led astray by those who claim "Lo, here is Christ; or, lo, he is there."',
        },
        {
          kind: 'greek',
          id: 'mark13-pseudochristos',
          title: 'Pseudochristos — False Christ',
          script: 'ψευδόχριστος',
          translit: '<strong>Pseudochristos</strong> · false Christ; false messiah',
          description:
            'A pseudo-christ is one who falsely claims messianic status. Jesus warns that deception will be a mark of the end times. Vigilance and discernment are necessary.',
        },
        {
          kind: 'commentary',
          id: 'mark13-gospel-all-nations',
          html:
            'Before the end comes, "the gospel must first be published among all nations."[res:bible-odyssey-eschatology] The mission of the church is not peripheral but central to God&apos;s plan. The gospel must reach all peoples before the final consummation. This gives urgency and significance to the work of proclamation.',
        },
        {
          kind: 'christ',
          id: 'mark13-christ-coming',
          title: 'Christ Connection — The Final Revelation',
          html:
            'Jesus speaks as the one who will come again in clouds with great power and glory. The incarnation is not the final revelation of Christ. He will return to gather His elect, to judge the nations, to establish His kingdom completely. The present is the already-not-yet—He has come; He will come again.',
        },
        {
          kind: 'carry',
          html:
            'The Olivet Discourse calls disciples to watchfulness rather than speculation. Do not obsess over knowing the day or hour. Instead, remain awake, ready, faithful. The one who endures to the end will be saved.',
        },
        {
          kind: 'reflection',
          id: 'mark13-watch-ready',
          prompt: 'What does it mean for you to be watching and ready for Christ&apos;s return? How would your life change if you truly believed He might come at any moment?',
        },
      ],
    },

    /* ─── Mark 13:24–37 — Watchfulness ────────────────────────────────── */
    {
      ref: 'Mark 13:24–37',
      title: 'Be Ready, Keep Watch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(31, 'Heaven and earth shall pass away: but my words shall not pass away.'),
            plain(32, 'But of that day and that hour knoweth no man, no, not the angels which are in heaven, neither the Son, but the Father.'),
            plain(35, 'Watch ye therefore: for ye know not when the master of the house cometh, at even, or at midnight, or at the cockcrowing, or in the morning:'),
            plain(36, 'Lest coming suddenly he find you sleeping.'),
            plain(37, 'And what I say unto you I say unto all, Watch.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark13-words-endure',
          html:
            'In the face of coming tribulation, Jesus offers a fundamental assurance: "Heaven and earth shall pass away: but my words shall not pass away."[res:topostext-logoi-jesus] All earthly things—the temple, the buildings, empires, even the material heavens and earth—will ultimately pass away and be transformed. But the word of Jesus is permanent. It will endure. It defines reality. It determines the destiny of all things.',
        },
        {
          kind: 'commentary',
          id: 'mark13-day-hour',
          html:
            'Jesus explicitly states that no one knows the day or hour—"not the angels which are in heaven, neither the Son, but the Father."[res:intertextual-parousia] This is a remarkable statement of limitation. The Son does not possess knowledge of the date of His return. Yet this is not a deficiency. It is the Father&apos;s prerogative to determine the hour. The purpose of this unknowing is to prevent calculation and to maintain readiness. If we knew the date, we might postpone repentance until the last moment.',
        },
        {
          kind: 'greek',
          id: 'mark13-gregoreō',
          title: 'Gregoreō — Watch, Stay Awake',
          script: 'γρηγορέω',
          translit: '<strong>Gregoreō</strong> · watch; be awake; remain vigilant; be spiritually alert',
          description:
            'To watch (gregoreō) is not merely to look outward for signs. It is to remain spiritually awake, alert to the presence of God, ready to respond. It is the opposite of spiritual sleep or complacency.',
        },
        {
          kind: 'commentary',
          id: 'mark13-parable-doorkeeper',
          html:
            'Jesus compares the situation to a man traveling into a far country. He leaves his house and gives his servants authority, assigning each their work. He commands the doorkeeper to watch. "Watch ye therefore: for ye know not when the master of the house cometh...Lest coming suddenly he find you sleeping." The disciples are the servants. Each has their assigned work. All must remain awake and watchful.',
        },
        {
          kind: 'commentary',
          id: 'mark13-watch-all',
          html:
            'The discourse closes with a universal word: "What I say unto you I say unto all, Watch." This is not directed to the Twelve alone. It is directed to all disciples, to all readers of the gospel, to all Christians. The call to watchfulness is the constant demand of discipleship. In every age, every disciple must ask: Is Jesus coming today? Am I ready? Have I fallen asleep spiritually?',
        },
        {
          kind: 'christ',
          id: 'mark13-christ-word-eternal',
          title: 'Christ Connection — The Eternal Word',
          html:
            'Jesus&apos; words endure forever because they are not merely human words. They are the word of God incarnate. To believe in Jesus is to believe that His teaching will outlast all earthly powers, all human systems, all material reality itself. His word is the foundation of all that is and will be.',
        },
        {
          kind: 'carry',
          html:
            'Mark 13 invites us into a stance of readiness and anticipation. Not anxious worry about the end times, but peaceful watchfulness. The master is coming. Be ready. Be awake. This is the constant posture of faith.',
        },
        {
          kind: 'reflection',
          id: 'mark13-awake-asleep',
          prompt: 'Where have you fallen asleep spiritually? What would it take to wake up and remain vigilant in your faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Heaven and earth shall pass away: but my words shall not pass away. What I say unto you I say unto all, Watch.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 13 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-parousia',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Parousia & Day of the Lord',
      url: 'https://intertextual.bible/search?q=Daniel+12+Mark+13+32',
      description: 'Intertextual links showing how Jesus&apos; teaching on His return fulfills Old Testament prophecy about the day of the Lord.',
    },
  ],

  hasHebrew: false,
};
