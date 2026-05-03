import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 11 — John&apos;s Question and Jesus&apos; Rest
 *
 * John the Baptist, imprisoned by Herod, sends disciples to Jesus to ask "Art
 * thou he that should come, or do we look for another?" John has baptized Jesus
 * and proclaimed Him, but now doubt seems to arise. Jesus answers by pointing to
 * His works: the blind see, the lame walk, the dead are raised. Then Jesus
 * speaks about John: "Among them that are born of women there hath not risen a
 * greater than John the Baptist." Yet the kingdom is greater still. Jesus
 * denounces the cities that have rejected Him, then turns to the weary: "Come
 * unto me, all ye that labour and are heavy laden, and I will give you rest.
 * Take my yoke upon you... and ye shall find rest unto your souls." Jesus offers
 * Himself as rest for the broken and the heavy-laden.
 */
export const MATTHEW_11: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 11,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'John the Baptist sits in Herod&apos;s prison. He has fulfilled his role as forerunner, preparing the way for Jesus. But now, in the darkness of confinement, doubt seems to assault him. He sends disciples to Jesus with a question: "Art thou he that should come, or do we look for another?" It is not a rejection of Jesus. It is the cry of a soul in crisis, seeking reassurance. Jesus responds not with words of rebuke but with a demonstration of His works.',
    'Jesus answers by pointing to what is happening: the blind are receiving sight, the lame are walking, the deaf are hearing, the dead are being raised, and good tidings are being preached to the poor. These are the signs of the Messiah, the evidence of the kingdom breaking into the world. Then Jesus pivots. He affirms John—"Among them that are born of women there hath not risen a greater than John the Baptist"—yet He proclaims something greater still: the kingdom of heaven.',
  ],

  sections: [
    {
      ref: 'Matthew 11:1–19',
      title: 'John&apos;s Question and Jesus&apos; Affirmation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(2, 'Now when John had heard in the prison the works of Christ, he sent two of his disciples,'),
            plain(3, 'And said unto him, Art thou he that should come, or do we look for another?'),
            plain(4, 'Jesus answered and said unto them, Go and shew John again those things which ye do hear and see:'),
            plain(5, 'The blind receive their sight, and the lame walk, the lepers are cleansed, and the deaf hear, the dead are raised up, and the gospel is preached to the poor;'),
            plain(11, 'Verily I say unto you, Among them that are born of women there hath not risen a greater than John the Baptist: notwithstanding he that is least in the kingdom of heaven is greater than he.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt11-john-doubt',
          html:
            'John the Baptist sends disciples to Jesus with a question that sounds like doubt. But it may be something different: a request for reassurance, a struggle to hold faith in darkness, a genuine uncertainty in the prison. Jesus does not rebuke John for asking. Rather, He points John to the evidence: the works of the kingdom breaking in. The blind see. The lame walk. The dead are raised. These are the signs. This is the answer.',
        },
        {
          kind: 'commentary',
          id: 'matt11-jesus-works',
          html:
            '"The blind receive their sight, and the lame walk, the lepers are cleansed, and the deaf hear, the dead are raised up, and the gospel is preached to the poor." These are not arbitrary miracles. They are signs of redemption. The blind receiving sight symbolizes spiritual illumination. The lame walking symbolizes restoration. The gospel preached to the poor symbolizes the universality of God&apos;s offer. Let the works speak.',
        },
        {
          kind: 'commentary',
          id: 'matt11-john-greatest',
          html:
            'Jesus affirms John with extraordinary praise: "Among them that are born of women there hath not risen a greater than John the Baptist." John is the greatest of all those born before the kingdom came. Yet Jesus adds a paradox: "Notwithstanding he that is least in the kingdom of heaven is greater than he." The kingdom of heaven is so transformative, so filled with the presence of God, that even the least in it is greater than the greatest of the old age.',
        },
        {
          kind: 'greek',
          id: 'matt11-ergon',
          title: 'Ergon — Works',
          script: 'ἔργον',
          translit: '<strong>Ergon</strong> · work; deed; action; evidence of power and purpose',
          description:
            'The Greek word ergon refers to deeds and works. Jesus points John not to claims but to works. The kingdom is verified not by assertion but by action—the blind seeing, the lame walking, the dead rising. Works are the fruit of the kingdom breaking into the world.',
        },
        {
          kind: 'christ',
          id: 'matt11-christ-rest',
          title: 'Christ Connection — Christ Our Rest',
          html:
            'Jesus reveals Himself to John not through words of explanation but through works of redemption. Every miracle is a sign. Every healing is a proclamation: the kingdom is here. The Messiah is present. And in the midst of this, Jesus extends an invitation to the weary: "Come unto me... and I will give you rest." He is not only the one who performs miracles. He is the one who offers rest.',
        },
        {
          kind: 'carry',
          html:
            'John&apos;s question in prison reminds us that even the strongest faith can waver. Even John, who baptized Jesus and received the revelation of the Spirit, faces doubt in the darkness. Jesus does not punish this doubt. He responds with evidence and affirmation. Your questions do not disqualify you from the kingdom. Bring them to Jesus.',
        },
        {
          kind: 'reflection',
          id: 'matt11-question',
          prompt: 'What question burns in your heart right now? What doubt would you like to bring to Jesus? What evidence of His power do you need to see?',
        },
      ],
    },

    {
      ref: 'Matthew 11:20–30',
      title: 'Rejection of the Cities and the Invitation to Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(20, 'Then began he to upbraid the cities wherein most of his mighty works were done, because they repented not:'),
            plain(28, 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.'),
            plain(29, 'Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.'),
            plain(30, 'For my yoke is easy, and my burden is light.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt11-unrepentant-cities',
          html:
            'Jesus denounces the cities wherein He has performed mighty works yet the inhabitants have not repented. It is a sobering word: seeing miracles is not the same as seeing the kingdom. Witnessing the power of God does not automatically lead to faith. Some see and turn away. They harden their hearts. They refuse the invitation. "Woe unto thee, Chorazin! woe unto thee, Bethsaida!"',
        },
        {
          kind: 'commentary',
          id: 'matt11-come-unto-me',
          html:
            '"Come unto me, all ye that labour and are heavy laden, and I will give you rest." This is perhaps the most tender and inviting word in all of Scripture. Jesus does not say "Come, you who have it all figured out" or "Come, you who are successful and powerful." He says "Come, you who are laboring, who are heavy laden, who are exhausted, who are carrying burdens too heavy to bear." This is the invitation to everyone who knows their need.',
        },
        {
          kind: 'commentary',
          id: 'matt11-yoke',
          html:
            '"Take my yoke upon you, and learn of me; for I am meek and lowly in heart." The yoke is a symbol of service and of being bound together. To take Jesus&apos; yoke is to be joined to Him, to learn from Him, to walk in step with Him. And the yoke is described as "easy" and the burden as "light." This is not because the road is effortless, but because it is a shared burden. Jesus carries it with you. Your strength is not your own; it is sustained by His.',
        },
        {
          kind: 'greek',
          id: 'matt11-kopiaō',
          title: 'Kopiaō — Labor',
          script: 'κοπιάω',
          translit: '<strong>Kopiaō</strong> · to labor; to toil; to be weary; to work to exhaustion',
          description:
            'The Greek word kopiaō suggests labor that exhausts, work that wears you down, toil that burdens the soul. Jesus invites those who are worn out, those whose labor seems endless, those who carry weight beyond their strength. He offers them rest.',
        },
        {
          kind: 'christ',
          id: 'matt11-christ-rest-2',
          title: 'Christ Connection — Christ the Rest of the Soul',
          html:
            'After His works of power and His denunciation of unbelief, Jesus extends an invitation that opens the door to every weary soul. He is not only the one who performs miracles. He is the one who gives rest. Not the cessation of all labor, but the presence of one who labors alongside you, whose burden you share, whose strength sustains you.',
        },
        {
          kind: 'carry',
          html:
            'Jesus&apos; words about rest are not a call to idleness. They are a call to a different kind of life—one where you are not alone in your struggle, where someone stronger carries the weight with you, where there is both purpose in your labor and rest in the presence of the one who called you.',
        },
        {
          kind: 'reflection',
          id: 'matt11-rest',
          prompt: 'What burdens are you carrying that are too heavy? What would it look like to truly hand them to Jesus and find rest in His presence?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Art thou he that should come? Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 11 · Study Guide',
  },

  hasHebrew: false,
};
