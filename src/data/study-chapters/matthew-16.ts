import { hp, t, plain, type RichChapterContent } from './types';

/**
 * Matthew 16 — The Rock and the Cross
 *
 * Pharisees demand a sign; Jesus warns against their leaven. At Caesarea Philippi,
 * Peter confesses: "Thou art the Christ, the Son of the living God." Jesus responds:
 * "Upon this rock I will build my church." Peter is renamed—his faith is the
 * foundation. Yet when Jesus speaks of His coming death, Peter rebukes Him. Jesus
 * replies sharply: "Get thee behind me, Satan." To follow requires denying self and
 * taking up a cross.
 */
export const MATTHEW_16: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 16,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The Pharisees and Sadducees approach Jesus asking for a sign from heaven. Jesus refuses. The only sign given will be the sign of Jonah—a reference to His death and resurrection. He warns His disciples to beware the leaven of the Pharisees and Sadducees—their teaching, their skepticism, their refusal to believe.',
    'Jesus withdraws with His disciples to Caesarea Philippi, a city of many temples and religions. In this pagan place, He asks a question that cuts to the heart: "Whom do men say that I the Son of man am?" After hearing various answers, He presses deeper: "But whom say ye that I am?" Peter alone responds with fullness: "Thou art the Christ, the Son of the living God." In this moment, the church is conceived.',
  ],

  sections: [
    /* ─── Matthew 16:1–12 — Sign of Jonah, Leaven of Pharisees ────────────── */
    {
      ref: 'Matthew 16:1–12',
      title: 'Discerning Truth from Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'The Pharisees also with the Sadducees came, and tempting him desired him that he would shew them a sign from heaven.'),
            plain(2, 'He answered and said unto them, When it is evening, ye say, It will be fair weather: for the sky is red.'),
            plain(4, 'A wicked and adulterous generation seeketh after a sign; and there shall no sign be given unto it, but the sign of the prophet Jonas:'),
            plain(6, 'Then Jesus said unto them, Take heed and beware of the leaven of the Pharisees and of the Sadducees.'),
            plain(11, 'How is it that ye do not understand that I spake it not to you concerning bread? but beware of the leaven of the Pharisees and Sadducees.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt16-sign',
          html:
            'The Pharisees and Sadducees—rivals in almost everything—unite in demanding a sign. Jesus refuses. They can read weather signs in the sky, yet they cannot discern the signs of the times. They cannot see that the Messiah stands before them, that His very presence is the sign. The only sign they will receive is His resurrection, foreshadowed by Jonah&apos;s three days in the great fish.',
        },
        {
          kind: 'commentary',
          id: 'matt16-leaven',
          html:
            'Leaven is a small substance that permeates an entire batch of dough. Jesus warns His disciples against the leaven of the Pharisees and Sadducees—their doctrine, their skepticism, their tendency to prioritize human tradition over God&apos;s word. The disciples initially misunderstand, thinking Jesus speaks of literal bread. But the warning is spiritual: be alert to false teaching that subtly corrupts your understanding of truth.',
        },
        {
          kind: 'greek',
          id: 'matt16-doktrina',
          title: 'Doktrina — Doctrine',
          script: 'δόκτρινα',
          translit: '<strong>Doktrina</strong> · doctrine; teaching; instruction',
          description:
            'Jesus warns against the doktrina—the teaching, the system of thought that shapes a person&apos;s understanding. False doctrine spreads like leaven, invisibly, until the whole is leavened. Truth requires vigilance and discernment.',
        },
        {
          kind: 'christ',
          id: 'matt16-christ-sign',
          title: 'Christ Connection — The Sign of Resurrection',
          html:
            'Jesus is Himself the sign—His life, His teaching, His power over nature and disease, and ultimately His death and resurrection. The sign of Jonah points to Christ&apos;s three-day entombment and His rising. Those with eyes to see recognize in Christ the fulfillment of all covenant promises.',
        },
        {
          kind: 'carry',
          html:
            'What false teachings or skeptical voices whisper in your ear, subtly shaping how you understand your faith? What would it mean to consciously reject the leaven and commit fully to truth?',
        },
        {
          kind: 'reflection',
          id: 'matt16-discernment',
          prompt: 'How do you discern between true teaching and false teaching? What signs help you recognize truth?',
        },
      ],
    },

    /* ─── Matthew 16:13–28 — Peter&apos;s Confession, Cross, and Coming ────── */
    {
      ref: 'Matthew 16:13–28',
      title: 'The Rock, the Cross, and the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(16, 'And Simon Peter answered and said, Thou art the Christ, the Son of the living God.'),
            plain(17, 'And Jesus answered and said unto him, Blessed art thou, Simon Barjona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.'),
            plain(18, 'And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.'),
            plain(21, 'From that time forth began Jesus to shew unto his disciples, how that he must go unto Jerusalem, and suffer many things of the elders and chief priests and scribes, and be killed, and be raised again the third day.'),
            plain(24, 'Then said Jesus unto his disciples, If any man will come after me, let him deny himself, and take up his cross, and follow me.'),
            plain(25, 'For whosoever will save his life shall lose it: and whosoever will lose his life for my sake shall find it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt16-peter',
          html:
            'Peter&apos;s confession is sudden and complete: "Thou art the Christ, the Son of the living God [res:intertextual-peter-confession]." This is not mere intellectual agreement. Peter recognizes Jesus as the long-awaited Messiah, the anointed one, the Son of God Himself. Jesus pronounces Peter blessed—this understanding comes not from flesh and blood, but from God the Father.',
        },
        {
          kind: 'commentary',
          id: 'matt16-rock',
          html:
            'Jesus makes a pun in Aramaic: "Thou art Peter [Cephas—a stone], and upon this rock [petra—bedrock, foundation] I will build my church [res:sefaria-isaiah-28-16]." Peter&apos;s faith becomes the cornerstone. Yet Matthew will soon show Peter denying Jesus in shame. The church rests not on Peter&apos;s perfection, but on Christ—the Rock upon which all faith stands.',
        },
        {
          kind: 'greek',
          id: 'matt16-ekklesia',
          title: 'Ekklesia — Church',
          script: 'ἐκκλησία',
          translit: '<strong>Ekklesia</strong> · assembly; congregation; church; those called out',
          description:
            'Ekklesia means those called out—an assembly summoned together. Jesus announces that He will build His church, a people gathered not by blood but by faith, by being called into covenant with Him. "The gates of hell shall not prevail against it" promises that God&apos;s purposes cannot be thwarted.',
        },
        {
          kind: 'commentary',
          id: 'matt16-suffering',
          html:
            'Immediately after this high moment, Jesus speaks the unthinkable: He must go to Jerusalem, be arrested, be killed, and be raised on the third day. Peter, still riding the wave of his confession, begins to rebuke Jesus. How can the Messiah suffer? But Jesus turns to Peter sharply: "Get thee behind me, Satan." Peter, in his human understanding, would hinder the work of God.',
        },
        {
          kind: 'commentary',
          id: 'matt16-cross',
          html:
            'Jesus then defines what it means to follow Him: "If any man will come after me, let him deny himself, and take up his cross, and follow me." The cross is an instrument of death. To take it up means to surrender all claim to self-preservation, comfort, or vindication. The world believes you save life by grasping it tightly. Jesus teaches the opposite: you lose life by grasping, and find it by letting go.',
        },
        {
          kind: 'christ',
          id: 'matt16-christ-foundation',
          title: 'Christ Connection — Christ the Cornerstone',
          html:
            'Jesus is the Rock, the foundation upon which the church is built. He alone defeats death and the powers of darkness. All who follow Him must be willing to embrace the cross—not as punishment, but as the way of self-emptying love that leads to resurrection life.',
        },
        {
          kind: 'carry',
          html:
            'What comfort or security are you unwilling to surrender? What would it look like for you to truly deny yourself and follow Jesus? The promise is that loss leads to finding—that the life surrendered to Christ is the life truly gained.',
        },
        {
          kind: 'reflection',
          id: 'matt16-cross-2',
          prompt: 'Peter confessed truth but then rejected the cross. How do you sometimes hold true beliefs while resisting the costly changes they demand?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou art the Christ, the Son of the living God... let him deny himself, and take up his cross, and follow me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 16 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-peter-confession',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Peter&apos;s Confession — Gospel Parallels',
      url: 'https://intertextual.bible/text/matthew-16.16',
      description: 'Comparison of Peter&apos;s confession across Matthew, Mark, and Luke with theological differences.',
    },
    {
      id: 'sefaria-isaiah-28-16',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 28:16 — A Stone Laid in Zion',
      url: 'https://www.sefaria.org/Isaiah.28.16',
      description: 'Old Testament prophecy underlying Jesus&apos; metaphor of Peter as a stone and the rock foundation.',
    },
    {
      id: 'bibleodyssey-caesarea-philippi',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Caesarea Philippi and Jesus&apos; Ministry',
      url: 'https://www.bibleodyssey.org/dictionary/caesarea-philippi/',
      description: 'Historical and geographical context for the pagan city where Jesus makes His foundational announcement.',
    },
  ],

  hasHebrew: false,
};
