import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 9 — Authority Granted and Transfiguration
 *
 * Jesus calls the twelve and gives them power and authority over all demons
 * and to cure diseases. He sends them to preach the kingdom of God. They go
 * forth and perform miracles. Herod, hearing of Jesus, is perplexed: "John
 * have I beheaded; but who is this, of whom I hear such things?" The twelve
 * return and report. Jesus feeds 5,000 with five loaves and two fishes. Peter
 * confesses: "Thou art the Christ of God." Jesus foretells His death. He says:
 * "If any man will come after me, let him deny himself, and take up his cross
 * daily, and follow me." On a mountain, Jesus is transfigured. Moses and
 * Elijah appear. A voice from heaven speaks: "This is my beloved Son: hear him."
 */
export const LUKE_9: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 9,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Jesus calls the twelve and gives them power and authority over all demons and to cure diseases. He sends them forth to preach the kingdom of God and to heal. They depart and go through every village, preaching the gospel and healing everywhere. Herod hears of all that is done. He is perplexed. John he had beheaded, but who is this man of whom he hears such things? When the apostles return, they tell Jesus all that they have done. Jesus takes them and withdraws privately to a city called Bethsaida. But the multitude knows where He is. They follow Him. He welcomes them and speaks to them of the kingdom of God and heals those who have need of healing.',
    'As the day wanes, the twelve come to Jesus: "Send the multitude away, that they may go into the towns and country round about, and lodge, and get victuals: for we are here in a desert place." But Jesus says: "Give ye them to eat." They have but five loaves and two fishes. Jesus blesses them and breaks them. All eat and are filled. Twelve baskets of fragments remain. And it comes to pass as Jesus is praying alone, His disciples are with Him. He asks them: "Whom say the people that I am?" They answer. Jesus says: "But whom say ye that I am?" Peter answers: "The Christ of God."',
  ],

  sections: [
    {
      ref: 'Luke 9:1–27',
      title: 'Authority and Confession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Then he called his twelve disciples together, and gave them power and authority over all devils, and to cure diseases.'),
            plain(2, 'And he sent them to preach the kingdom of God, and to heal the sick.'),
            plain(18, 'And it came to pass, as he was alone praying, his disciples were with him: and he asked them, saying, Whom say the people that I am?'),
            plain(20, 'He said unto them, But whom say ye that I am? Peter answering said, The Christ of God.'),
            plain(22, 'Saying, The Son of man must suffer many things, and be rejected of the elders and chief priests and scribes, and be slain, and be raised the third day.'),
            plain(23, 'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke9-commission',
          html:
            'Jesus gives the twelve power and authority—not to rule, but to heal and to preach. He sends them to go forth in His name, armed with authority that comes from Him. As they go, they do what Jesus Himself has done: they preach the kingdom of God and heal the sick. The disciples participate in Jesus&apos; own work.',
        },
        {
          kind: 'greek',
          id: 'luke9-exousia',
          title: 'Exousia — Authority; Power; Right to Rule',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; jurisdiction; the right to act',
          description:
            'Jesus gives the twelve exousia—the authority to act in His name. This is not mere permission. It is the delegation of His own power. As His representatives, they carry His authority.',
        },
        {
          kind: 'commentary',
          id: 'luke9-confession',
          html:
            'Jesus asks His disciples: "Whom say ye that I am?" Peter answers: "The Christ of God"—the anointed one, the Messiah promised to Israel. This confession is the turning point. The disciples acknowledge Jesus as the Messiah. But then Jesus begins to foretell what the Messiah will do: "The Son of man must suffer many things, and be rejected... and be slain, and be raised the third day."',
        },
        {
          kind: 'commentary',
          id: 'luke9-cross',
          html:
            'Jesus states the condition of discipleship: "If any man will come after me, let him deny himself, and take up his cross daily, and follow me." Denying oneself means surrendering your own will to follow His. Taking up your cross means accepting suffering. This is the cost. Yet Jesus also says: "Whosoever will save his life shall lose it: but whosoever will lose his life for my sake, the same shall save it."',
        },
        {
          kind: 'christ',
          id: 'luke9-christ-messiah',
          title: 'Christ Connection — The Suffering Messiah',
          html:
            'Jesus redefines what "Messiah" means. Not a political conqueror, not an earthly king. A suffering servant. One who is rejected, condemned, killed. Then raised on the third day. The disciples must learn that following the Messiah means following Him into suffering, not into glory.',
        },
        {
          kind: 'carry',
          html:
            'Jesus feeds 5,000 with five loaves and two fishes. The disciples witness both the miracle and the principle: He takes what is small and blesses it, multiplies it, and it satisfies multitudes. Trust in His provision. Give what you have. He will multiply it.',
        },
        {
          kind: 'reflection',
          id: 'luke9-deny-self-reflect',
          prompt: 'What does it mean for you to deny yourself and take up your cross? What would you have to surrender to follow Jesus?',
        },
      ],
    },

    {
      ref: 'Luke 9:28–62',
      title: 'The Transfiguration and the Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(28, 'And it came to pass about an eight days after these sayings, he took Peter and John and James, and went up into a mountain to pray.'),
            plain(29, 'And as he prayed, the fashion of his countenance was altered, and his raiment was white and glistering.'),
            plain(30, 'And, behold, there talked with him two men, which were Moses and Elias:'),
            plain(31, 'Who appeared in glory, and spake of his decease which he should accomplish at Jerusalem.'),
            plain(35, 'And there came a voice out of the cloud, saying, This is my beloved Son: hear him.'),
            plain(57, 'And it came to pass, that, as they went in the way, a certain man said unto him, Lord, I will follow thee; but let me first go bid farewell to them that are at home.'),
            plain(58, 'And Jesus said unto him, No man, having put his hand to the plough, and looking back, is fit for the kingdom of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke9-transfiguration',
          html:
            'Jesus takes Peter, John, and James up into a mountain to pray. As He prays, His countenance is altered. His raiment becomes white and glistering. This is the transfiguration—a glimpse of Jesus&apos; divine glory, usually veiled in His earthly form. Moses and Elijah appear with Him. They speak of His "decease which he should accomplish at Jerusalem"—His death. The greatest figures of the old covenant converse with Jesus about His coming death and resurrection.',
        },
        {
          kind: 'greek',
          id: 'luke9-doxa',
          title: 'Doxa — Glory; Radiance; Divine Splendor',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; magnificence; the radiant splendor of God',
          description:
            'Moses and Elijah appear "in glory." This is not earthly splendor. This is the doxa of God—the divine radiance, the presence of the almighty. Jesus is transfigured into this glory, revealing who He truly is.',
        },
        {
          kind: 'commentary',
          id: 'luke9-voice',
          html:
            'A voice from the cloud speaks: "This is my beloved Son: hear him." The voice of God the Father affirms Jesus as His son. The cloud recalls the presence of God in the Old Testament—in the tabernacle, on Mount Sinai. God is present. And God speaks. "Hear him." Listen to Jesus. Obey Him. Believe Him.',
        },
        {
          kind: 'commentary',
          id: 'luke9-commitment',
          html:
            'After the transfiguration, Jesus and the disciples continue on their way to Jerusalem. A man says to Jesus: "Lord, I will follow thee; but let me first go bid farewell to them that are at home." Jesus replies: "No man, having put his hand to the plough, and looking back, is fit for the kingdom of God." The kingdom requires commitment without reservation. You cannot follow Jesus while still bound to the old life.',
        },
        {
          kind: 'christ',
          id: 'luke9-christ-glory',
          title: 'Christ Connection — Hidden Glory Revealed',
          html:
            'The transfiguration shows what Jesus truly is beneath His earthly form. He is the son of God in glory. Yet He will be rejected, condemned, crucified. The glory is veiled. But it will be revealed in resurrection. To follow Jesus is to follow one who appears weak and broken, but is in fact the glory of God.',
        },
        {
          kind: 'reflection',
          id: 'luke9-transfiguration-reflect',
          prompt: 'Peter, John, and James saw Jesus transfigured in glory. Yet they still had to follow Him to the cross. What does it mean to believe both truths—His glory and His suffering?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If any man will come after me, let him deny himself, and take up his cross daily, and follow me. This is my beloved Son: hear him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 9 · Study Guide',
  },

  hasHebrew: false,
};
