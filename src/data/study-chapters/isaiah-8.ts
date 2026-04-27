import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 8 — Trust in God, Not in Phantoms
 *
 * "And when they shall say unto you, Seek unto them that have familiar spirits and unto
 * wizards that peep, and that mutter: should not a people seek unto their God?" Isaiah
 * contrasts trust in God with the pursuit of false guidance. The chapter speaks of fear
 * and stumbling, of a stone of stumbling and a rock of offense. First Peter 2:8 quotes
 * this passage, applying the stone metaphor to Christ. The message: reject all false
 * sources of guidance and trust only in the Holy One of Israel.
 */
export const ISAIAH_8: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 8,

  intros: [
    'Isaiah continues his message to a frightened people. They are tempted to seek guidance from sources other than God—from mediums and spiritists who "peep, and that mutter." These are practitioners of divination, consultants of the dead, those who claim secret knowledge of the future. But Isaiah insists that the people should not seek unto those who have familiar spirits and wizards. Instead, they should seek unto their God—to the living testimony and to the law of Israel. Those who do not speak according to this word are those for whom there is no dawn.',
    'The fundamental choice is clear: Will you trust in God, or will you trust in phantoms? Will you walk in light, or will you stumble in darkness? Isaiah does not make this choice comfortable. He speaks of fear that comes to the people, and of stumbling. But he also speaks of a stone—a stone of stumbling, yes, but also a rock of offense to both the house of Israel and the inhabitants of Jerusalem. That stone will prove to be Christ, the one upon whom faith can be built, even though many will stumble over it.',
  ],

  sections: [
    {
      ref: 'Isaiah 8:11–20',
      title: 'Trust in God, Not in Fear or Phantoms',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(12, 'Say ye not, A league: whatsoever this people shall say is a league; neither fear ye their fear, nor be afraid;'),
            plain(13, 'Sanctify the Lord of hosts himself; and let him be your fear.'),
            plain(16, 'Here am I, and the children which God hath given me. And it shall come to pass, as this word came to pass, so shall the signs and the wonders work among you.'),
            plain(19, 'And when they shall say unto you, Seek unto them that have familiar spirits and unto wizards that peep, and that mutter: should not a people seek unto their God? for the living to the dead?'),
            plain(20, 'To the law and to the testimony: if they speak not according to this word, it is because there is no light in them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah8-fear-contagion',
          html:
            'Isaiah names the temptation clearly: the people are being drawn into a conspiracy of fear. They are saying, "A league"—they are in a league with those who fear. And Isaiah warns: "Neither fear ye their fear, nor be afraid." Fear is contagious. When others fear, they try to spread their fear to you, to pull you into their panic. But Isaiah offers a different response: "Sanctify the Lord of hosts himself; and let him be your fear." Instead of being caught in the fear of others, make the Lord alone your fear. This does not mean terror. It means reverence, respect, the ordering of your life around His authority rather than around human opinion.',
        },
        {
          kind: 'commentary',
          id: 'isaiah8-false-guidance',
          html:
            'When people are frightened, they seek guidance from many sources. They turn to mediums—those who claim to have spirits familiar with them, who can speak with the dead or access hidden knowledge. Isaiah questions this impulse: "Should not a people seek unto their God?" The answer is obvious. If God is alive, if He has spoken His word, if His law and testimony are available, why would anyone seek guidance from the dead, from those who "peep, and that mutter"? Such guidance is darkness. True light comes from God&apos;s revealed word.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah8-torah',
          title: 'Torah — "Law" or "Instruction"',
          script: 'תּוֹרָה',
          translit: '<strong>Torah</strong> · law, instruction, teaching; God&apos;s revealed word',
          description:
            'Torah is not merely legal code. It is God&apos;s instruction—His guidance for how to live in covenant relationship with Him. To seek "according to the law and the testimony" is to ground oneself in what God has already made known, what has been tested, what has proven true.',
        },
        {
          kind: 'carry',
          html:
            'In our own time, we face the same temptation. When we are afraid about the future, when we are uncertain, we are drawn to seek guidance from many sources—from the culture&apos;s latest wisdom, from those who claim insider knowledge, from practices that promise hidden insight. But Isaiah&apos;s question remains: Why would we seek unto the dead when the living God is available? Why would we trust in darkness when we have been given light? The call is to sanctify the Lord—to treat His word as our highest authority, and His fear (His reverence and respect) as our only fear.',
        },
        {
          kind: 'reflection',
          id: 'isaiah8-guidance-reflect',
          prompt: 'What sources of guidance are you tempted to seek when you are afraid? How could you more consistently turn to God&apos;s revealed word—the law and testimony—as your primary source of wisdom?',
        },
      ],
    },

    {
      ref: 'Isaiah 8:14–15',
      title: 'A Stone of Stumbling, a Rock of Offense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(14, 'And he shall be for a sanctuary; but for a stone of stumbling and for a rock of offence to both the houses of Israel, for a gin and for a snare to the inhabitants of Jerusalem.'),
            plain(15, 'And many among them shall stumble, and fall, and be broken, and be snared, and be taken.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah8-stone',
          html:
            'In the midst of Isaiah&apos;s message, a profound mystery appears. There is a stone—but this stone has a dual nature. For those who trust, it is a sanctuary, a place of safety and refuge. But for those who refuse to trust, the same stone becomes a stumbling block, a rock of offense, a snare. This is the paradox of faith: the same truth that saves one person causes another to stumble.',
        },
        {
          kind: 'commentary',
          id: 'isaiah8-stumble-fall',
          html:
            'Those who do not believe will stumble. They will fall and be broken. They will be snared and taken. The image is not of external punishment inflicted from without, but of the natural consequence of refusing to see what is plainly there. When you stumble over a stone, the pain comes not from the stone wishing you ill, but from your own refusal to see it and walk around it.',
        },
        {
          kind: 'christ',
          id: 'isaiah8-christ-stone',
          title: 'Christ Connection — The Cornerstone',
          html:
            'In 1 Peter 2:6–8, Peter explicitly quotes Isaiah 8:14 and applies it to Christ: "Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded. Unto you therefore which believe he is precious: but unto them which be disobedient, the stone which the builders disallowed, the same is made the head of the corner, and a stone of stumbling, and a rock of offence, even to them which stumble at the word, being disobedient." Christ is that stone. For those who believe in Him, He is precious, the chief cornerstone upon which life is built. For those who reject Him, He becomes an offense, a stumbling block that causes them to fall. The choice is not between accepting Christ and remaining neutral. The choice is between accepting Him as Lord and stumbling over Him as an obstacle.',
        },
        {
          kind: 'carry',
          html:
            'What will Christ be to you? Will He be your sanctuary—the place where you find safety, refuge, and solid ground? Or will He be a stumbling block—an obstacle you refuse to acknowledge, a claim you resist, a foundation you do not trust? There is no neutral position. You cannot encounter Christ and remain unchanged. You must either build your life on Him or stumble over Him.',
        },
        {
          kind: 'reflection',
          id: 'isaiah8-stone-reflect',
          prompt: 'In what ways has Christ been a sanctuary to you—a solid foundation in a shifting world? In what ways have you stumbled over Him or been tempted to reject Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Sanctify the Lord of hosts himself; and let him be your fear.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 8:13 · Study Guide',
  },

  hasHebrew: true,
};
