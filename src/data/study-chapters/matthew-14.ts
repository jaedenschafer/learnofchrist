import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 14 — The Beheading of John, the Feeding of Five Thousand, and Walking on Water
 *
 * Herod beheads John the Baptist to honor a rash oath made before his courtiers.
 * When Jesus hears of John&apos;s death, He withdraws to a solitary place, yet the
 * multitudes follow. Moved with compassion, He heals the sick. As evening falls,
 * the disciples ask Him to send the crowds away, but Jesus says "They need not
 * depart: give ye them to eat." With five loaves and two fishes, He feeds five
 * thousand. Then, sending the disciples to cross the sea, Jesus goes alone to
 * pray. In the darkness, He walks on the water toward them. The disciples are
 * terrified: "It is a spirit." But Jesus says "Be of good cheer; it is I; be not
 * afraid." Peter asks to walk on the water, and for a moment he does—until fear
 * rises and he begins to sink. "Lord, save me." Jesus saves the sinking.
 */
export const MATTHEW_14: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 14,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Matthew reports the death of John the Baptist. Herod has imprisoned him for condemning his marriage to Herodias, his brother&apos;s wife. During his birthday celebration, Herodias&apos; daughter dances before Herod and pleases him. In a rash moment, he swears to give her whatever she asks. She is prompted by her mother to ask for John&apos;s head. Herod is bound by his oath. Though he does not want to, he commands John&apos;s execution. The forerunner is silenced. The voice crying in the wilderness is stilled.',
    'When Jesus hears of John&apos;s death, He withdraws to a solitary place. But the multitudes follow Him. Moved with compassion, He heals their sick. As evening falls, there arises the question of food. The disciples want Him to send the crowds away. But Jesus says "They need not depart: give ye them to eat." And from five loaves and two fishes, He feeds five thousand. The kingdom operates by a different economy—scarcity becomes abundance, death gives way to feeding, compassion multiplies what seems insufficient.',
  ],

  sections: [
    {
      ref: 'Matthew 14:1–21',
      title: 'John&apos;s Death and the Feeding of Five Thousand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(3, 'For Herod had laid hold on John, and bound him, and put him in prison for Herodias&apos; sake, his brother Philip&apos;s wife.'),
            plain(10, 'And he sent, and beheaded John in the prison.'),
            plain(12, 'And his disciples came, and took up the body, and buried it, and went and told Jesus.'),
            plain(14, 'And Jesus went forth, and saw a great multitude, and was moved with compassion toward them, and he healed their sick.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt14-compassion-feeds',
          html:
            'The crowd had pressed Him for a day; Jesus felt their hunger and asked for what little His disciples had. Compassion is not abstract here; it is bread.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(16, 'But Jesus said unto them, They need not depart: give ye them to eat.'),
            plain(18, 'He said, Bring them hither to me.'),
            plain(19, 'And he commanded the multitude to sit down on the grass: and took the five loaves, and the two fishes, and looking up to heaven, he blessed, and brake, and gave the loaves to his disciples, and the disciples to the multitude.'),
            plain(20, 'And they did all eat, and were filled: and they took up of the fragments that remained twelve baskets full.'),
            plain(21, 'And they that had eaten were about five thousand men, beside women and children.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt14-john-death',
          html:
            'John the Baptist is beheaded by Herod to satisfy a dancing girl and a vengeful woman [res:bibleodyssey-herod-death]. It seems a senseless death, a waste. Yet Matthew reports it without editorial comment. John&apos;s mission was to prepare the way for Jesus. That mission is complete. John has testified to Jesus. He has baptized Jesus. Now he dies. His death points to a greater death—the death of the Messiah himself.',
        },
        {
          kind: 'commentary',
          id: 'matt14-withdrawal',
          html:
            'When Jesus hears of John&apos;s death, He withdraws. Yet He cannot escape the multitudes. They follow Him. Rather than being annoyed, Jesus "was moved with compassion toward them, and he healed their sick." The death of the forerunner does not deter Him. The opposition of the world does not diminish His love. He heals the broken regardless of circumstance.',
        },
        {
          kind: 'commentary',
          id: 'matt14-feeding',
          html:
            'The disciples want to send the crowds away so they can find food in the villages. Jesus rejects this: "They need not depart: give ye them to eat." It is an impossible command. The disciples have five loaves and two fishes. Five thousand men (besides women and children). Yet Jesus takes what they have, blesses it, and multiplies it [res:intertextual-feeding-5000]. All eat and are filled. Twelve baskets of fragments remain—more than they started with.',
        },
        {
          kind: 'commentary',
          id: 'matt14-twelve-baskets',
          html:
            'The twelve baskets of fragments are significant. There are twelve disciples. Each receives a basket. The surplus is not wasted but distributed. The miracle is not merely quantitative—more food—but revelatory. It shows Jesus&apos; power to provide, to multiply, to feed. It prefigures the Eucharist: the blessing, breaking, and giving of bread.',
        },
        {
          kind: 'greek',
          id: 'matt14-splagchnizomai',
          title: 'Splagchnizomai — Moved with Compassion',
          script: 'σπλαγχνίζομαι',
          translit: '<strong>Splagchnizomai</strong> · moved with compassion; felt in the deepest being',
          description:
            'The Greek word splagchnizomai appears repeatedly in Matthew to describe Jesus&apos; response to human need. It is not sentimental pity but deep visceral compassion that moves Him to action. His compassion transcends circumstance—whether the crowds follow after John&apos;s death or His own impending crucifixion, He is moved to heal and to feed.',
        },
        {
          kind: 'christ',
          id: 'matt14-christ-feeds',
          title: 'Christ Connection — Christ Saves the Sinking',
          html:
            'Jesus demonstrates His lordship over natural scarcity. He blesses and multiplies. He provides not minimally but abundantly—five thousand fed with twelve baskets remaining. This is not just generosity but a proclamation: the kingdom of God operates by a different economy. Where the world sees lack and sends people away, Jesus sees need and feeds them.',
        },
        {
          kind: 'carry',
          html:
            'The feeding miracle teaches us about the nature of God&apos;s provision. God does not wait for abundance before He acts. He works with what is at hand. He takes the little that the disciples offer—five loaves and two fishes—and transforms it. Your offering is not too small for God to use. Your resources are not insufficient for His purpose.',
        },
        {
          kind: 'reflection',
          id: 'matt14-feed',
          prompt: 'When have you experienced God providing beyond what seemed possible? What did you offer that God multiplied? How does this shape your trust in His provision?',
        },
      ],
    },

    {
      ref: 'Matthew 14:22–36',
      title: 'Walking on Water and Peter&apos;s Cry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(22, 'And straightway Jesus constrained his disciples to get into a ship, and to go before him unto the other side, while he sent the multitudes away.'),
            plain(24, 'But the ship was now in the midst of the sea, tossed with waves: for the wind was contrary.'),
            plain(25, 'And in the fourth watch of the night Jesus went unto them, walking on the sea.'),
            plain(26, 'And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt-14-walking-miracle',
          html:
            'The boat is battered. Waves crash. The disciples row in terror. Jesus walks toward them on water. Fear turns to awe. He is here. The storm cannot undo what His presence ensures.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(27, 'But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid.'),
            plain(28, 'And Peter answered him and said, Lord, if it be thou, tell me to come unto thee on the water.'),
            plain(29, 'And he said, Come. And when Peter was come down out of the ship, he walked on the water, to go to Jesus.'),
            plain(30, 'But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me.'),
            plain(31, 'And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt14-walking-water',
          html:
            'Jesus sends the disciples across the sea while He goes to the mountain to pray. In the darkness, the ship is tossed with contrary winds. Then, in the fourth watch of the night, Jesus walks toward them—on the sea itself. The disciples are terrified. This cannot be natural. A man does not walk on water. They cry out: "It is a spirit." But Jesus announces Himself: "Be of good cheer; it is I; be not afraid."',
        },
        {
          kind: 'commentary',
          id: 'matt14-peter-walk',
          html:
            'Peter recognizes the voice and, in a moment of courage, asks "Lord, if it be thou, tell me to come unto thee on the water." Jesus says "Come." And miraculously, Peter walks on the water toward Jesus [res:intertextual-peter-walking]. For a moment, faith overcomes nature. Peter is doing the impossible. But then fear rises: "When he saw the wind boisterous, he was afraid." Fear breaks the spell. Peter begins to sink. "Lord, save me," he cries. And Jesus, reaching out His hand, saves him from drowning.',
        },
        {
          kind: 'commentary',
          id: 'matt14-faith-doubt',
          html:
            'Jesus asks Peter "O thou of little faith, wherefore didst thou doubt?" It is a gentle rebuke. Peter did not fail because he lacked ability. He failed because his faith was divided. For a moment, he trusted Jesus enough to walk on water. But when he saw the storm, his trust in Jesus was overcome by fear of circumstances. The storm is real. The wind is boisterous. But Jesus is more real, more powerful, more trustworthy than any storm.',
        },
        {
          kind: 'commentary',
          id: 'matt14-immediately',
          html:
            '"Immediately Jesus stretched forth his hand, and caught him." Jesus does not delay. He does not let Peter drown or suffer unnecessarily. The moment Peter cries out, Jesus acts. This is the pattern throughout Matthew: Jesus hears the cry of those in need and responds with immediate salvation. "Save me" and He saves.',
        },
        {
          kind: 'greek',
          id: 'matt14-oligopistos',
          title: 'Oligopistos — Little Faith',
          script: 'ὀλιγόπιστος',
          translit: '<strong>Oligopistos</strong> · little faith; faith of small measure; insufficient trust',
          description:
            'Peter does not lack faith entirely. He has enough faith to step out of the boat and walk on water. His faith is not absent but divided, wavering. Jesus calls him to a faith that is not divided by fear, a trust that sees the storm yet trusts Jesus more than the storm.',
        },
        {
          kind: 'christ',
          id: 'matt14-christ-saves-sinking',
          title: 'Christ Connection — Christ Saves the Sinking',
          html:
            'The image of Peter sinking and Jesus reaching out to save him is the pattern of redemption itself. We are all sinking—caught in forces beyond our control, going down in circumstances and fears. Jesus walks toward us. He is present in the storm. He hears when we cry "Lord, save me," and He reaches out His hand. This is the gospel: the Savior for the sinking, the rescue in the moment of death.',
        },
        {
          kind: 'carry',
          html:
            'Peter&apos;s willingness to step out of the boat shows courage. But his fear when he sees the wind shows that faith is tested in difficulty. Jesus does not criticize Peter for facing fear. He asks why Peter allowed fear to overcome his trust in Jesus. The call is not to be fearless, but to be faith-full—to trust Jesus even when circumstances terrify.',
        },
        {
          kind: 'reflection',
          id: 'matt14-sinking',
          prompt: 'In what situation are you "sinking"—caught in forces beyond your control, going down under the weight of circumstances? Can you cry out "Lord, save me" and trust Him to reach out His hand?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They need not depart: give ye them to eat. Be of good cheer; it is I; be not afraid. Lord, save me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 14 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-herod-death',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Herod and the Execution of John the Baptist',
      url: 'https://www.bibleodyssey.org/dictionary/herod-the-great/',
      description: 'Historical and theological context for Herod&apos;s rule and his role in John the Baptist&apos;s execution.',
    },
    {
      id: 'intertextual-feeding-5000',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Feeding of the Five Thousand — Synoptic Parallels',
      url: 'https://intertextual.bible/text/matthew-14.13',
      description: 'Comparison of the feeding miracle across Matthew, Mark, Luke, and John with interpretative variations.',
    },
    {
      id: 'intertextual-peter-walking',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Peter Walking on Water — Synoptic Parallels',
      url: 'https://intertextual.bible/text/matthew-14.28',
      description: 'Parallel accounts of Peter&apos;s attempt to walk on water and his cry for salvation across the Gospels.',
    },
  ],

  hasHebrew: false,
};
