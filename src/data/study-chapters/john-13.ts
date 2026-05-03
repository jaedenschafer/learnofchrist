import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 13 — The Last Supper and the Foot Washing
 *
 * Before the feast of Passover, Jesus rises from supper, lays aside His garments,
 * and washes His disciples&apos; feet. Peter resists: "Thou shalt never wash my feet."
 * But Jesus says: "If I wash thee not, thou hast no part with me." After washing,
 * He teaches: "By this shall all men know that ye are my disciples, if ye have
 * love one to another." Then Jesus announces: "One of you shall betray me." Judas
 * leaves into the night. Jesus speaks of glory and gives commandment: "A new
 * commandment I give unto you, That ye love one another."
 */
export const JOHN_13: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 13,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Before the Feast of Passover, Jesus knows His hour has come. He rises from supper, lays aside His garments, takes a towel, and girds Himself. He pours water into a basin and begins to wash His disciples&apos; feet. This is the work of a servant, of a slave. The Master does the servant&apos;s work. When He comes to Peter, Peter resists in horror: "Lord, dost thou wash my feet?" It is a violation of order, of dignity. But Jesus insists: "If I wash thee not, thou hast no part with me." The symbol is clear: His death, His self-offering, is the only way to union with Him.',
    'After washing their feet, Jesus commands: "By this shall all men know that ye are my disciples, if ye have love one to another." Then the darkness enters. "One of you shall betray me." The betrayer is among them, eating bread with Him, yet preparing to deliver Him over. Judas leaves into the night. And Jesus enters the last hours before the cross, speaking of His own glorification and His commandment: love one another as He has loved them. This love is the mark of discipleship.',
  ],

  sections: [
    /* ─── John 13:1–20 — The Foot Washing ────────────────────────────── */
    {
      ref: 'John 13:1–20',
      title: 'If I Then, Your Lord and Master, Have Washed Your Feet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Now before the feast of the passover, when Jesus knew that his hour was come that he should depart out of this world unto the Father, having loved his own which were in the world, he loved them unto the end.'),
            plain(4, 'He riseth from supper, and laid aside his garments; and took a towel, and girded himself.'),
            plain(5, 'After that he poureth water into a basin, and began to wash the disciples&apos; feet, and to wipe them with the towel wherewith he was girded.'),
            plain(8, 'Peter saith unto him, Thou shalt never wash my feet. Jesus answered him, If I wash thee not, thou hast no part with me.'),
            plain(12, 'So after he had washed their feet, and had taken his garments, and was set down again, he said unto them, Know ye what I have done to you?'),
            plain(14, 'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another&apos;s feet.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john13-hour',
          html:
            '"Now before the feast of the passover, when Jesus knew that his hour was come..." Jesus is aware of what approaches. Yet this knowledge does not lead to withdrawal. Instead, John says: "having loved his own which were in the world, he loved them unto the end." His love is not diminished by the approach of death. It is perfected. He loves to the end, fully, without reservation.',
        },
        {
          kind: 'commentary',
          id: 'john13-garments',
          html:
            'Jesus lays aside His garments. This act strips Him of authority, status, dignity. He takes a towel—the mark of a servant—and girds Himself[res:bible-odyssey-footwashing]. He becomes, literally, like a slave. The King serves the servants. The Master becomes the servant. This reversal of order embodies the entire meaning of His mission.',
        },
        {
          kind: 'greek',
          id: 'john13-loutron',
          title: 'Loutron — Wash',
          script: 'λούω',
          translit: '<strong>Loutron</strong> · to wash; to cleanse; to purify',
          description:
            'To wash is to cleanse, to purify, to make clean. When Jesus washes the disciples&apos; feet, He performs an act of ritual cleansing, yet with deeper significance. He cleanses them from the dust of their walk, prepares them, sanctifies them.',
        },
        {
          kind: 'commentary',
          id: 'john13-peter',
          html:
            'Peter resists: "Thou shalt never wash my feet." He cannot accept this reversal. His Lord does not wash feet. But Jesus insists: "If I wash thee not, thou hast no part with me." The washing is not optional. Acceptance of His humiliation, His self-offering, His descent, is the prerequisite for union with Him. To follow Him is to accept His pattern of self-emptying.',
        },
        {
          kind: 'commentary',
          id: 'john13-example',
          html:
            'Jesus does not wash their feet as a symbolic act meant to be remembered only. He says: "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another&apos;s feet." Discipleship means following His example. It means taking on the role of servant, washing one another&apos;s feet literally and metaphorically, serving without regard to status.',
        },
        {
          kind: 'christ',
          id: 'john13-christ-servant',
          title: 'Christ Connection — The Servant King',
          html:
            'Jesus is Lord and Master, yet He washes feet. This is not contradiction but revelation. True lordship consists in service. True authority expresses itself in humility. Jesus is the Servant King who leads by example, who teaches by doing, who gives authority to His disciples by first serving them.',
        },
        {
          kind: 'carry',
          html:
            'Are you like Peter, resistant to receiving service? Can you accept that in your lowest moments, when you need cleansing, Jesus bends to wash you? And can you then turn and wash the feet of others?',
        },
        {
          kind: 'reflection',
          id: 'john13-feet',
          prompt: 'Whose feet are you called to wash? Where is Jesus inviting you to serve those beneath you in status?',
        },
      ],
    },

    /* ─── John 13:21–38 — The Betrayer and the New Commandment ────────── */
    {
      ref: 'John 13:21–38',
      title: 'A New Commandment I Give Unto You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(21, 'When Jesus had thus spoken, he was troubled in spirit, and testified, and said, Verily, verily, I say unto you, that one of you shall betray me.'),
            plain(27, 'And after the sop Satan entered into him. Then said Jesus unto him, That thou doest, do quickly.'),
            plain(31, 'Therefore, when he was gone out, Jesus said, Now is the Son of man glorified, and God is glorified in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-13-78mid-1',
          html:
            'Jesus washes the disciples&apos; feet in an act of humbling love; now He begins to teach. The servant-teacher shows them the pattern: love is shown in service.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(34, 'A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another.'),
            plain(35, 'By this shall all men know that ye are my disciples, if ye have love one to another.'),
            plain(37, 'Peter said unto him, Lord, why cannot I follow thee now? I will lay down my life for thy sake.'),
            plain(38, 'Jesus answered him, Wilt thou lay down thy life for my sake? Verily, I say unto thee, The cock shall not crow, till thou hast denied me thrice.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john13-betrayer',
          html:
            '"One of you shall betray me." The announcement troubles Jesus. He has loved these men, chosen them, invested in them. Yet one will turn against Him. Judas, who has eaten bread with Him, who has walked with Him, will deliver Him over. The presence of betrayal is known, yet Jesus does not flee it. He walks into it willingly.',
        },
        {
          kind: 'commentary',
          id: 'john13-satan',
          html:
            '"Satan entered into him." Judas chooses betrayal, yet the power behind the choice is evil, demonic. He is not acting freely against necessity; he is surrendering his freedom to a power that enslaves. Yet Jesus says: "That thou doest, do quickly." He acknowledges the betrayal is coming, and He releases Judas to do what he will do.',
        },
        {
          kind: 'greek',
          id: 'john13-doxa-again',
          title: 'Doxa — Glory',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; honor; brightness; the revealed character of God',
          description:
            'When Jesus says "Now is the Son of man glorified," He speaks of His approaching death as glorification. This is the revealed character of God: self-offering, love unto death, sacrifice for the world. His death is His hour of glory, the moment when His true nature is revealed.',
        },
        {
          kind: 'commentary',
          id: 'john13-new-commandment',
          html:
            '"A new commandment I give unto you, That ye love one another."[res:bible-odyssey-last-supper] Not new in that it has never been heard, but new in its source and its demand. Jesus does not merely command love; He demonstrates it. He loves them unto the end, washing their feet, offering His life. They are to love one another as He has loved them—fully, sacrificially, without limit.',
        },
        {
          kind: 'commentary',
          id: 'john13-know',
          html:
            '"By this shall all men know that ye are my disciples, if ye have love one to another."[res:intertextual-love] Love is the mark of discipleship. Not doctrine, not ritual, not law-keeping, but love. The world will recognize Jesus&apos; followers by the love they bear toward one another. Love is the proclamation.',
        },
        {
          kind: 'commentary',
          id: 'john13-deny',
          html:
            'Peter boasts: "I will lay down my life for thy sake." Yet Jesus responds: "The cock shall not crow, till thou hast denied me thrice." Peter&apos;s love and courage are real, but they are tested before his claim is fulfilled. Denial comes before the laying down of life. Failure precedes victory.',
        },
        {
          kind: 'christ',
          id: 'john13-christ-new',
          title: 'Christ Connection — Love As the Mark of the Kingdom',
          html:
            'Jesus gives a new commandment: love one another as He has loved. This is not conditional, not reserved for the deserving. It is comprehensive, unlimited, sacrificial. It is the law of the kingdom, the mark of those who follow Him, the measure by which the world will recognize His presence.',
        },
        {
          kind: 'carry',
          html:
            'Jesus knows betrayal is coming. He knows Peter will deny Him. Yet He still commands love. He does not withdraw His love because He will be rejected. He does not make love conditional on loyalty. His love endures even through betrayal. Can you?',
        },
        {
          kind: 'reflection',
          id: 'john13-love',
          prompt: 'How has Jesus loved you? How are you called to love others with that same love, even when it is not returned?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If I then, your Lord and Master, have washed your feet; ye also ought to wash one another&apos;s feet. A new commandment I give unto you, That ye love one another. By this shall all men know that ye are my disciples, if ye have love one to another.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 13 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-footwashing',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Foot-Washing in Biblical Context',
      url: 'https://www.bibleodyssey.org/dictionary/footwashing/',
      description: 'Open-access SBL resource on foot-washing as a household practice and its spiritual significance.',
    },
    {
      id: 'bible-odyssey-last-supper',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Last Supper and the Eucharist',
      url: 'https://www.bibleodyssey.org/dictionary/last-supper/',
      description: 'SBL entry on the final meal with Jesus&apos; disciples and its ritual significance.',
    },
    {
      id: 'intertextual-love',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Leviticus 19:18 ↔ John 13:34–35',
      url: 'https://intertextual.bible/text/leviticus-19.18/john-13.34-35',
      description: 'How Jesus&apos; new commandment both fulfills and transforms the love of neighbor.',
    },
  ],

  hasHebrew: false,
};
