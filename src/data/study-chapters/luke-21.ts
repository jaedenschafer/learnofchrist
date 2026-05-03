import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 21 — The Olivet Discourse and End Times
 *
 * Jesus sits on the Mount of Olives and speaks to His disciples about the
 * future. Wars, earthquakes, famines, plagues will come. False Messiahs will
 * arise. "But before all these, they shall lay their hands on you, and
 * persecute you." Yet those who endure will be saved. "And this gospel of the
 * kingdom shall be preached unto all nations." The sun will be darkened, the
 * moon will not give her light. Then shall appear the sign of the Son of man.
 * "Watch therefore, and pray always, that ye may be accounted worthy to escape
 * all these things that shall come to pass, and to stand before the Son of
 * man." Jesus watches the widow cast in her last two mites.
 */
export const LUKE_21: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 21,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'Jesus speaks on the Mount of Olives. His disciples ask: "Master, but when shall these things be? and what sign will there be when these things shall come to pass?" Jesus says: "Take heed that ye be not deceived: for many shall come in my name, saying, I am Christ; and the time draweth near: go ye not therefore after them." Wars and rumours of wars, earthquakes in divers places, famines and pestilences. But all this is the beginning of sorrows. Before these, they will lay hands on disciples, persecute them, deliver them to synagogues and prisons. But they will be given utterance and wisdom to answer their adversaries.',
    'Jesus says: "But when ye shall see Jerusalem compassed with armies, then know that the desolation thereof is nigh." The sun shall be darkened, the moon shall not give her light, the stars shall fall from heaven, the powers of heaven shall be shaken. Then shall appear the sign of the Son of man in heaven. "And then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory." He sends forth His angels to gather His elect.',
  ],

  sections: [
    {
      ref: 'Luke 21:1–19',
      title: 'Signs and Persecution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(8, 'And he said, Take heed that ye be not deceived: for many shall come in my name, saying, I am Christ; and the time draweth near: go ye not therefore after them.'),
            plain(11, 'And great earthquakes shall be in divers places, and famines, and pestilences; and fearful sights and great signs shall there be from heaven.'),
            plain(15, 'For I will give you a mouth and wisdom, which all your adversaries shall not be able to gainsay nor resist.'),
            plain(19, 'In your patience possess ye your souls.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke21-deception',
          html:
            'Jesus warns: "Take heed that ye be not deceived." Many will come claiming to be Christ. Wars will arise. Earthquakes will shake the earth. Famines will bring suffering. These are signs, but they are not the end. They are the beginning of the end. Disciples must not be seized by fear or despair. There will be a long season of tribulation before the final coming.',
        },
        {
          kind: 'greek',
          id: 'luke21-apokalyptō',
          title: 'Apokalyptō — Reveal; Uncover; Disclose',
          script: 'ἀποκαλύπτω',
          translit: '<strong>Apokalyptō</strong> · reveal; uncover; disclose; make manifest',
          description:
            'The word underlying "apocalypse"—revelation. All that is hidden will be revealed. The true nature of things will be uncovered. The truth about the end times cannot remain veiled.',
        },
        {
          kind: 'commentary',
          id: 'luke21-persecution',
          html:
            'Jesus says: "They shall lay their hands on you, and persecute you." But disciples need not fear what men can do to the body. "For I will give you a mouth and wisdom, which all your adversaries shall not be able to gainsay nor resist." The Spirit will provide utterance. Truth will confound opposition. Courage in persecution comes from the Holy Ghost.',
        },
        {
          kind: 'commentary',
          id: 'luke21-patience',
          html:
            '"In your patience possess ye your souls." Patience is not passivity. It is active endurance. It is the soul&apos;s steadfastness through trial. To possess one&apos;s soul in patience is to maintain mastery over oneself, to keep the heart from despair, to remain rooted in God&apos;s sovereignty.',
        },
        {
          kind: 'christ',
          id: 'luke21-christ-steadfast',
          title: 'Christ Connection — The Steadfast Witness',
          html:
            'Jesus speaks of persecution as inevitable but calls disciples to steadfastness. The gospel will be preached to all nations. Truth will be given utterance. The Spirit will sustain. The witness continues through trial.',
        },
        {
          kind: 'reflection',
          id: 'luke21-persecution-reflect',
          prompt: 'What does it mean to "possess your soul in patience"? How does Jesus equip disciples for opposition?',
        },
      ],
    },

    {
      ref: 'Luke 21:20–37',
      title: 'The Coming of the Son of Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(25, 'And there shall be signs in the sun, and in the moon, and in the stars; and upon the earth distress of nations, with perplexity; the sea and the waves roaring;'),
            plain(27, 'And then shall they see the Son of man coming in a cloud with power and great glory.'),
            plain(28, 'And when these things begin to come to pass, then look up, and lift up your heads; for your redemption draweth nigh.'),
            plain(33, 'Heaven and earth shall pass away: but my words shall not pass away.'),
            plain(36, 'Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass, and to stand before the Son of man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke21-signs-cosmos',
          html:
            'The sun will be darkened. The moon will not give her light. The stars will fall from heaven. The very cosmos will shake. These cosmic signs announce the end. Yet Jesus says to the terrified: "Look up, and lift up your heads; for your redemption draweth nigh." In the darkest hour, redemption approaches.',
        },
        {
          kind: 'commentary',
          id: 'luke21-son-of-man',
          html:
            '"And then shall they see the Son of man coming in a cloud with power and great glory." The Son of man comes visibly, in clouds, with power and glory. This is not a hidden spiritual coming. This is the manifest return of the judge, the vindicator, the deliverer. All will see. All will know.',
        },
        {
          kind: 'greek',
          id: 'luke21-dunāmis',
          title: 'Dunāmis — Power; Ability; Mighty Work',
          script: 'δύναμις',
          translit: '<strong>Dunāmis</strong> · power; ability; strength; mighty work',
          description:
            'The Son of man comes with dunāmis—divine power manifested, irresistible might. His coming is not quiet or debatable. It is a cosmic unveiling of power.',
        },
        {
          kind: 'commentary',
          id: 'luke21-watchfulness',
          html:
            '"Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass." Watchfulness is the posture of the disciple. Not anxious fear, but alert readiness. Prayer sustains the watching soul. To be accounted worthy is to be found faithful, to have endured, to have kept faith.',
        },
        {
          kind: 'christ',
          id: 'luke21-christ-return',
          title: 'Christ Connection — The Manifest Return',
          html:
            'Jesus teaches that His coming is both terrible and redemptive. Judgment will fall. But those who watch and pray will be accounted worthy to escape and stand before the Son of man.',
        },
        {
          kind: 'reflection',
          id: 'luke21-watchfulness-reflect',
          prompt: 'What is the difference between anxiety about the future and watchful readiness? How does prayer prepare you for the end of all things?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Take heed that ye be not deceived. In your patience possess ye your souls. Watch therefore, and pray always.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 21 · Study Guide',
  },

  hasHebrew: false,
};
