import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 3 — Letters to Three Churches and a Knock at the Door
 *
 * Christ continues His letters to the final three churches: Sardis (a church
 * of dead reputation), Philadelphia (faithful and given an open door), and
 * Laodicea (lukewarm and self-deceived). Then, in the most intimate image,
 * He stands at the door and knocks.
 */
export const REVELATION_3: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 3,

  intros: [
    'The final three letters reveal the spectrum of spiritual condition. Sardis has a name that it lives, but is dead. Philadelphia is weak in the world&apos;s eyes but faithful in God&apos;s. Laodicea is wealthy and content, unaware of its true poverty. Each diagnosis calls the church to see itself as Christ sees it—not as the world sees it, not as it sees itself.',
    'The chapter closes with perhaps the most tender image in Scripture: Christ standing at the door, knocking. He does not break in. He waits for permission to enter. The door is opened from within.',
  ],

  sections: [
    {
      ref: 'Revelation 3:1–6',
      title: 'Sardis — A Name, but Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And unto the angel of the church in Sardis write; These things saith he that hath the seven Spirits of God, and the seven stars; I know thy works, that thou hast a name that thou livest, and art dead.'),
            plain(2, 'Be watchful, and strengthen the things which remain, that are ready to die: for I have not found thy works perfect before God.'),
            plain(4, 'Thou hast a few names even in Sardis which have not defiled their garments; and they shall walk with me in white: for they are worthy.'),
            plain(5, 'He that overcometh, the same shall be clothed in white raiment; and I will not blot out his name out of the book of life, but I will confess his name before my Father, and before his angels.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev3-sardis',
          html:
            'Sardis has a reputation for life—it appears vibrant and active—but Christ sees the truth: it is dead. The church has forms of godliness but lacks the power. It goes through the motions but lacks the fire. Yet there are "a few names" who have not defiled their garments—remnants of faithfulness. The call is to strengthen what remains.',
        },
        {
          kind: 'greek',
          id: 'rev3-zao',
          title: 'Zao — To Live',
          script: 'ζάω',
          translit: '<strong>Zao</strong> · to live; to be alive; to have life',
          description:
            'Sardis has a name that it zao—that it lives—but it does not. The Greek zao speaks of vital existence, not mere breathing. A dead church may look alive in the eyes of the world, filling its programs and activities with the appearance of life, but lacking the breath of the Spirit.',
        },
        {
          kind: 'christ',
          id: 'rev3-christ-sardis',
          title: 'Christ Connection — The One Who Raises the Dead',
          html:
            'Christ holds the seven Spirits—the fullness of God&apos;s Spirit—and the seven stars. He calls Sardis to be revived. The promise to those who overcome is to be clothed in white—the garments of the redeemed—and to have their names confessed before the Father. Christ raises the dead.',
        },
        {
          kind: 'carry',
          html:
            'How does your faith appear to others versus how does it live within you? Do your actions flow from a living relationship with Christ, or from habit and duty? The call is: Be watchful. Strengthen what remains. Return to life.',
        },
        {
          kind: 'reflection',
          id: 'rev3-sardis-alive',
          prompt: 'What does it look like for a faith to be truly alive? Where in your life are you going through motions rather than living in genuine connection with God?',
        },
      ],
    },

    {
      ref: 'Revelation 3:7–13',
      title: 'Philadelphia — The Open Door',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'And to the angel of the church in Philadelphia write; These things saith he that is holy, he that is true, he that hath the key of David, he that openeth, and no man shutteth; and shutteth, and no man openeth;'),
            plain(8, 'I know thy works: behold, I have set before thee an open door, and no man can shut it: for thou hast a little strength, and hast kept my word, and hast not denied my name.'),
            plain(10, 'Because thou hast kept the word of my patience, I also will keep thee from the hour of temptation which shall come upon all the world, to try them that dwell upon the earth.'),
            plain(12, 'Him that overcometh will I make a pillar in the temple of my God, and he shall go no more out: and I will write upon him the name of my God, and the name of the city of my God, which is new Jerusalem, which cometh down out of heaven from my God: and I will write upon him my new name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev3-philadelphia-door',
          html:
            'Philadelphia has little strength in the world&apos;s reckoning, yet Christ has set before it an open door. The city is weak but faithful—it has kept His word and not denied His name. Because of this faithfulness, Christ promises protection from the hour of temptation and a place as a pillar in God&apos;s temple. Weakness plus faithfulness equals strength.',
        },
        {
          kind: 'greek',
          id: 'rev3-thyra',
          title: 'Thyra — Door',
          script: 'θύρα',
          translit: '<strong>Thyra</strong> · door; opening; entrance',
          description:
            'The open door is access to God&apos;s presence and God&apos;s purposes. No human power can close it. Christ opens and no one shuts; He shuts and no one opens. The open door is the symbol of grace and opportunity extended to the faithful.',
        },
        {
          kind: 'christ',
          id: 'rev3-christ-philadelphia',
          title: 'Christ Connection — The Key of David',
          html:
            'Christ holds the key of David—the authority to open and shut. He opens doors no one can close. To Philadelphia, He promises a place in the eternal temple of God. To those who overcome, He will write His own name, marking them as His own forever.',
        },
        {
          kind: 'carry',
          html:
            'The world measures strength by numbers, by wealth, by political power. But Christ measures strength differently: by faithfulness. A small church that keeps His word is immeasurably strong. An open door lies before you. Walk through it.',
        },
        {
          kind: 'reflection',
          id: 'rev3-philadelphia-door',
          prompt: 'What open doors is Christ setting before you? How does your weakness become strength through faithful obedience?',
        },
      ],
    },

    {
      ref: 'Revelation 3:14–22',
      title: 'Laodicea — Lukewarm and Self-Deceived',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(15, 'I know thy works, that thou art neither cold nor hot: I would thou wert cold or hot.'),
            plain(16, 'So then because thou art lukewarm, and neither cold nor hot, I will spue thee out of my mouth.'),
            plain(17, 'Because thou sayest, I am rich, and increased with goods, and have need of nothing; and knowest not that thou art wretched, and miserable, and poor, and blind, and naked:'),
            plain(19, 'As many as I love, I rebuke and chasten: be therefore zealous, and repent.'),
            plain(20, 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.'),
            plain(21, 'To him that overcometh will I grant to sit with me in my throne, even as I also overcame, and am set down with my Father in his throne.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev3-laodicea-lukewarm',
          html:
            'Laodicea is neither cold nor hot—lukewarm. The church is prosperous and self-satisfied, unaware of its true condition: wretched, miserable, poor, blind, and naked. Material wealth has masked spiritual poverty. Self-deception is the deadliest trap. Christ&apos;s rebuke is an act of love—He rebukes because He cares, because He calls the church to repentance.',
        },
        {
          kind: 'greek',
          id: 'rev3-chrestos',
          title: 'Chrestos — Useful; Kind',
          script: 'χρηστός',
          translit: '<strong>Chrestos</strong> · useful; serviceable; kind',
          description:
            'Lukewarm faith is useless. Hot faith burns with passion. Cold faith, at least, is honest. But lukewarm faith is neither useful nor true. It claims commitment while withholding the depth of the heart. God desires genuine commitment, not comfortable compromise.',
        },
        {
          kind: 'christ',
          id: 'rev3-christ-knock',
          title: 'Christ Connection — I Stand at the Door',
          html:
            'In the most intimate image of all Scripture, Christ stands at the door of the lukewarm church and knocks. He does not force His way in. He waits. He calls. He desires communion—to sup with you and you with Him. The door opens from within. The choice is yours.',
        },
        {
          kind: 'carry',
          html:
            'Hear the knock. Open the door. Not because you are worthy, but because He has chosen to stand there. Laodicea teaches the danger of comfort, of believing yourself rich while being poor. Return to Christ. Return to passion. Return to the narrow way.',
        },
        {
          kind: 'reflection',
          id: 'rev3-laodicea-knock',
          prompt: 'Where have you become lukewarm in your faith? Christ knocks at the door. Will you open it? What does it mean to sup with Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 3 · Study Guide',
  },

  hasHebrew: false,
};
