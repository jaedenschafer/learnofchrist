import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 6 — The Bread of Life
 *
 * Five thousand people follow Jesus, seeking healing and signs. Jesus feeds
 * them with five loaves and two small fishes. Afterward, He walks upon the
 * sea in a storm. Then comes the great discourse: "I am the bread of life."
 * To eat His flesh and drink His blood is to have eternal life. Many disciples
 * turn back: "This is an hard saying; who can hear it?" Jesus asks the Twelve:
 * "Will ye also go away?" Peter answers: "Lord, to whom shall we go? thou hast
 * the words of eternal life."
 */
export const JOHN_6: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  intros: [
    'A multitude follows Jesus, drawn by the signs He performs on those who are sick. He goes up into a mountain with His disciples. When He looks out and sees the great company, He asks Philip: "Whence shall we buy bread, that these may eat?" A test of faith. Philip calculates and despairs: "Two hundred pennyworth of bread is not sufficient for them." But Jesus takes five barley loaves and two small fishes, blesses them, breaks them, and distributes them. Twelve baskets of fragments remain. The people are filled. The miracle is not merely sustenance; it is abundance, overflow, the sign of God&apos;s kingdom breaking into want.',
    'That night, the disciples row their boat across the sea. A storm arises. They are afraid. And then they see Jesus walking toward them on the water, and they are terrified. But He speaks: "It is I; be not afraid." He comes to them in the midst of their fear and confusion. He is not absent when danger strikes; He walks on water, master of the forces that terrify. Then comes the discourse on bread. Jesus proclaims: "I am the bread of life: he that cometh to me shall never hunger." His flesh given for the life of the world. Many cannot receive this. It is too demanding, too radical. They turn back.',
  ],

  sections: [
    /* ─── John 6:1–21 — Feeding and Walking on Water ────────────────────── */
    {
      ref: 'John 6:1–21',
      title: 'The Feeding and the Fear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(5, 'When Jesus then lifted up his eyes, and saw a great company come unto him, he saith unto Philip, Whence shall we buy bread, that these may eat?'),
            plain(9, 'There is a lad here, which hath five barley loaves, and two small fishes: but what are they among so many?'),
            plain(11, 'And Jesus took the loaves; and when he had given thanks, he distributed to the disciples, and the disciples to them that were set down; and likewise of the fishes as much as they would.'),
            plain(12, 'When they were filled, he said unto his disciples, Gather up the fragments that remain, that nothing be lost. Therefore they gathered them together, and filled twelve baskets with the fragments of the five barley loaves, which remained over and above unto them that had eaten.'),
            plain(19, 'So when they had rowed about five and twenty or thirty furlongs, they saw Jesus walking on the sea, and drawing nigh unto the ship: and they were afraid.'),
            plain(20, 'But he said unto them, It is I; be not afraid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john6-abundance',
          html:
            'Five thousand people gather, hungry and seeking. Jesus does not send them away. He does not say, "Return when we are better prepared." He addresses the need in the moment, using what is available—five loaves and two fishes, the offering of a boy. His blessing transforms scarcity into superabundance. Twelve baskets of fragments remain. Not crumbs or remnants scattered about, but baskets full, carefully gathered, preserved. Nothing is wasted.',
        },
        {
          kind: 'commentary',
          id: 'john6-thanks',
          html:
            'Before breaking the loaves, Jesus gives thanks. He blesses God for the provision, however modest. This act of gratitude sanctifies the meal. It acknowledges the source. Thanksgiving is not a formality but an act of faith that transforms what we have into something sacred, something that carries God&apos;s blessing.',
        },
        {
          kind: 'greek',
          id: 'john6-artos',
          title: 'Artos — Bread',
          script: 'ἄρτος',
          translit: '<strong>Artos</strong> · bread; food; sustenance; livelihood',
          description:
            'Bread is the fundamental provision, the staff of life. In the ancient world, bread and water are the measure of survival. To give bread is to give life itself. When Jesus speaks of Himself as the bread of life, He claims to be the ultimate provision, the foundation of existence. Without Him, spiritual hunger persists. With Him, all need is satisfied.',
        },
        {
          kind: 'commentary',
          id: 'john6-storm',
          html:
            'The disciples row their boat across the sea. Night falls. A strong wind stirs up the sea. They row against wind and current. They are exhausted, disoriented, afraid. In the fourth watch of the night, when fear has reached its peak, Jesus comes. Not by boat, but walking on the sea—walking on the element that threatened to destroy them. He is not subject to the storm. He masters it. He comes to them in the midst of their terror.',
        },
        {
          kind: 'christ',
          id: 'john6-christ-provision',
          title: 'Christ Connection — Source of All Sustenance',
          html:
            'Jesus provides bread for hungry multitudes. He walks on water when disciples are terrified. In both signs, He manifests as the source of life and the master of forces that threaten. He is the one who sustains, who protects, who comes toward us even in our greatest fear. All provision, all security, flows from Him.',
        },
        {
          kind: 'carry',
          html:
            'The disciples were afraid when they saw Jesus on the water. Fear is real. Circumstances are genuinely difficult. But Jesus says: "It is I; be not afraid." His presence does not eliminate the storm, but it transforms your relationship to it. You are no longer alone. You are no longer without guidance. The one who walks on water is with you.',
        },
        {
          kind: 'reflection',
          id: 'john6-afraid',
          prompt: 'What storm are you rowing through right now? Where do you need to hear Jesus say: "It is I; be not afraid"?',
        },
      ],
    },

    /* ─── John 6:22–71 — The Bread of Life Discourse ────────────────────── */
    {
      ref: 'John 6:22–71',
      title: 'I Am the Bread of Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(35, 'And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.'),
            plain(48, 'I am that bread of life.'),
            plain(51, 'I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever: and the bread that I will give is my flesh, which I will give for the life of the world.'),
            plain(53, 'Then Jesus said unto them, Verily, verily, I say unto you, Except ye eat the flesh of the Son of man, and drink his blood, ye have not life in you.'),
            plain(56, 'Whoso eateth my flesh, and drinketh my blood, hath eternal life; and I will raise him up at the last day.'),
            plain(66, 'From that time many of his disciples went back, and walked no more with him.'),
            plain(68, 'Then said Simon Peter unto him, Lord, to whom shall we go? thou hast the words of eternal life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john6-bread-of-life',
          html:
            '"I am the bread of life: he that cometh to me shall never hunger." This is the first of seven "I am" statements in John&apos;s gospel. Jesus does not say He provides bread. He is bread. He is the fundamental substance that nourishes spiritual life. To come to Him is to be satisfied at the deepest level. Physical hunger returns; spiritual hunger in Christ does not.',
        },
        {
          kind: 'commentary',
          id: 'john6-flesh-blood',
          html:
            '"The bread that I will give is my flesh, which I will give for the life of the world." And: "Except ye eat the flesh of the Son of man, and drink his blood, ye have not life in you." This language is shocking, offensive to first-century ears. To eat flesh and drink blood violates Jewish law and sensibility. Yet Jesus speaks in terms that demand complete identification with Him, complete dependence, complete incorporation into His life. To believe in Jesus is not intellectual assent. It is consumption, incorporation, transformation.',
        },
        {
          kind: 'greek',
          id: 'john6-phago',
          title: 'Phago — Eat',
          script: 'φάγω',
          translit: '<strong>Phago</strong> · to eat; to consume; to take into oneself',
          description:
            'To eat is to incorporate something into your own body, to make it part of yourself. When Jesus speaks of eating His flesh, He speaks of union so intimate and real that it can only be expressed in terms of literal eating. To believe in Christ is to allow Him to become part of your substance, your being, your very life.',
        },
        {
          kind: 'commentary',
          id: 'john6-hard-saying',
          html:
            'Many of His disciples say: "This is an hard saying; who can hear it?" They are offended. The demand is too great. To consume the flesh of the Son of man, to believe so radically, to make Jesus not a teacher but your very life—this exceeds what they are willing to offer. They turn back. They walk no more with Him. Faith, it turns out, is not merely admiration or agreement. It is costly.',
        },
        {
          kind: 'commentary',
          id: 'john6-peter',
          html:
            'Jesus asks the Twelve: "Will ye also go away?" This is the moment of decision. Peter speaks for the group: "Lord, to whom shall we go? thou hast the words of eternal life." Peter does not claim to understand everything. He does not pretend the saying is not hard. But he recognizes that Jesus alone has the words that lead to eternal life. Commitment to Christ is not always because the path is easy. It is because all other paths are seen as dead ends.',
        },
        {
          kind: 'christ',
          id: 'john6-christ-consumed',
          title: 'Christ Connection — Given for the Life of the World',
          html:
            'Jesus offers His own flesh and blood—His life given, His death accepted—as the bread and drink that sustains humanity. This foreshadows the cross. His body is broken. His blood is poured out. And through this self-giving, the world is sustained. To eat and drink of Jesus is to participate in His self-offering, to be saved by His sacrifice, to be made one with Him in His death and resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Peter says: "Lord, to whom shall we go?" There may be many voices calling for your allegiance, many paths offering easier journeys. But Peter sees in Jesus the source of eternal words, eternal meaning, eternal life. When circumstances are difficult and faith is tested, remember: there is no other source of life. Jesus alone has the words of eternal life.',
        },
        {
          kind: 'reflection',
          id: 'john6-go',
          prompt: 'Where would you go if you turned from Jesus? What alternative sustenance are you tempted to pursue? And why do you remain, despite the difficulty of the calling?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the bread of life: he that cometh to me shall never hunger. I am the living bread which came down from heaven. Lord, to whom shall we go? thou hast the words of eternal life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 6 · Study Guide',
  },

  hasHebrew: false,
};
