import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 9 — The Man Born Blind
 *
 * Jesus encounters a man born blind. His disciples ask: "Who did sin, this man
 * or his parents, that he was born blind?" Jesus answers: "Neither hath this man
 * sinned, nor his parents: but that the works of God should be made manifest in
 * him." Jesus makes clay, anoints the man&apos;s eyes, and sends him to wash in the
 * pool of Siloam. He is healed. But the Pharisees dispute. Some say Jesus cannot
 * be from God because He breaks the Sabbath. The healed man testifies simply:
 * "Whereas I was blind, now I see."
 */
export const JOHN_9: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 9,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'As Jesus walks, He sees a man blind from birth. Immediately His disciples assume blame: "Who sinned?" They operate within a framework of cause and effect, punishment and desert. But Jesus corrects them. "Neither hath this man sinned, nor his parents." Blindness is not a judgment. It is an opportunity. "But that the works of God should be made manifest in him." The blind man&apos;s condition exists so that God&apos;s power can be revealed through healing.',
    'Jesus makes clay and anoints the blind man&apos;s eyes, then sends him to wash in the pool of Siloam. In that moment of washing, sight is given. The blind man sees. He returns to his neighbors, his parents, the authorities. But his healing becomes controversial. It happened on the Sabbath. The Pharisees debate whether Jesus is from God. The man&apos;s testimony is simple and unshakeable: "Whereas I was blind, now I see." He knows nothing of theology or law. He knows only that he sees. That knowledge, that encounter with transformation, cannot be argued away.',
  ],

  sections: [
    /* ─── John 9:1–23 — The Healing ───────────────────────────────────── */
    {
      ref: 'John 9:1–23',
      title: 'That the Works of God Should Be Made Manifest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'And as Jesus passed by, he saw a man which was blind from his birth.'),
            plain(2, 'And his disciples asked him, saying, Master, who did sin, this man, or his parents, that he was born blind?'),
            plain(3, 'Jesus answered, Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him.'),
            plain(5, 'As long as I am in the world, I am the light of the world.'),
            plain(6, 'When he had thus spoken, he spat on the ground, and made clay of the spittle, and he anointed the eyes of the blind man with the clay;'),
            plain(7, 'And said unto him, Go, wash in the pool of Siloam, (which is by interpretation, Sent.) He went his way therefore, and washed, and came seeing.'),
            plain(11, 'He answered and said, A man that is called Jesus made clay, and anointed mine eyes, and said unto me, Go to the pool of Siloam, and wash: and I went and washed, and I received sight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john9-question',
          html:
            'The disciples ask a loaded question: "Who did sin?" They assume suffering is punishment. They operate within a framework of moral cause and effect: wrongdoing brings consequence. A man born blind must have sinned—either he, through some pre-mortal act, or his parents, whose sin he bears. This is a common worldview, but Jesus shatters it.',
        },
        {
          kind: 'commentary',
          id: 'john9-manifest',
          html:
            '"But that the works of God should be made manifest in him." Jesus reframes suffering not as judgment but as opportunity. The blind man&apos;s condition is not a curse. It is the canvas on which God will paint His power. God is not the author of suffering, but He can work through any circumstance to reveal His glory. Healing is not a compensation for past sin; it is a revelation of present power.',
        },
        {
          kind: 'greek',
          id: 'john9-phanos',
          title: 'Phaneros — Manifest / Visible',
          script: 'φανερός',
          translit: '<strong>Phaneros</strong> · manifest; visible; apparent; made known',
          description:
            'For God&apos;s works to be made manifest is for them to become visible, undeniable, known. What was hidden in potential is revealed in actuality. The blind man&apos;s healing is not merely personal blessing; it is a public declaration of God&apos;s power made visible in flesh.',
        },
        {
          kind: 'commentary',
          id: 'john9-clay',
          html:
            'Jesus makes clay from the ground and His own spittle. This is intimate, embodied healing. He does not speak a word from a distance. He kneels, creates, touches. The clay is applied to the blind man&apos;s eyes. Then comes the command: "Go, wash in the pool of Siloam." The man must act. He must trust and obey. In that action, in the moment of washing, sight is given.',
        },
        {
          kind: 'commentary',
          id: 'john9-siloam',
          html:
            'Siloam means "Sent." The blind man is sent to wash in the pool of Siloam—sent to the place called "Sent." There is a play on words, a deeper resonance. Jesus is the Sent One, sent by the Father. The healing waters connect to His mission. In the act of washing, the man participates in the Sent One&apos;s work.',
        },
        {
          kind: 'christ',
          id: 'john9-christ-light',
          title: 'Christ Connection — The Light That Reveals',
          html:
            'Jesus says: "As long as I am in the world, I am the light of the world." The blind man receives physical sight so that he can see the light that Jesus is. The healing is not merely medical; it is theological. It opens the man to see not only the visible world but the reality of God breaking into it.',
        },
        {
          kind: 'carry',
          html:
            'The blind man obeys without argument. He does not understand how clay and water will give him sight. But he trusts the command. He goes, washes, and receives sight. Obedience often precedes understanding. You do not need to see the end before you begin. You need only to hear the voice and step forward.',
        },
        {
          kind: 'reflection',
          id: 'john9-see',
          prompt: 'Where in your life might God be inviting you to step forward without seeing the entire path? What would it look like to obey before you understand?',
        },
      ],
    },

    /* ─── John 9:24–41 — The Testimony and the Pharisees ────────────────── */
    {
      ref: 'John 9:24–41',
      title: 'Whereas I Was Blind, Now I See',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(25, 'He answered and said, Whether he be a sinner or no, I know not: one thing I know, that, whereas I was blind, now I see.'),
            plain(31, 'Now we know that God heareth not sinners: but if any man be a worshipper of God, and doeth his will, him he heareth.'),
            plain(34, 'They answered and said unto him, Thou wast altogether born in sins, and dost thou teach us? And they cast him out.'),
            plain(35, 'Jesus heard that they had cast him out; and when he had found him, he said unto him, Dost thou believe on the Son of God?'),
            plain(37, 'And Jesus said unto him, Thou hast both seen him, and it is he that talketh with thee.'),
            plain(38, 'And he said, Lord, I believe. And he worshipped him.'),
            plain(39, 'And Jesus said, For judgment I am come into this world, that they which see not might see; and that they which see might be made blind.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john9-testimony',
          html:
            'When the Pharisees interrogate the healed man, demanding to know who healed him, he says: "Whether he be a sinner or no, I know not: one thing I know, that, whereas I was blind, now I see." His testimony is unshakeable. He does not have a systematic theology. He has an encounter. He does not claim to understand who Jesus is completely. He knows one thing: transformation.',
        },
        {
          kind: 'commentary',
          id: 'john9-reject',
          html:
            'The Pharisees cannot accept his testimony. They cannot accept his healing on the Sabbath. They cannot accept that Jesus might be from God. They descend into insult: "Thou wast altogether born in sins, and dost thou teach us?" They cast him out. His response—to offer simple witness—is deemed presumption. For his healing and his testimony, he is excommunicated.',
        },
        {
          kind: 'greek',
          id: 'john9-ekballo',
          title: 'Ekballo — Cast Out',
          script: 'ἐκβάλλω',
          translit: '<strong>Ekballo</strong> · to cast out; to throw out; to expel; to send forth',
          description:
            'The same word used when Jesus casts out demons is used when the Pharisees cast out the healed man. They treat him as unclean, demonic, beyond the pale. Yet it is not he who is impure; it is their hearts that refuse the light.',
        },
        {
          kind: 'commentary',
          id: 'john9-jesus-finds',
          html:
            'Jesus hears that the man has been cast out, and He finds him. Again and again, Jesus seeks out those cast off by others. He does not leave them in isolation. He comes to them, by name, with a question: "Dost thou believe on the Son of God?" The man has seen. Now Jesus invites him to confess his faith.',
        },
        {
          kind: 'commentary',
          id: 'john9-believe',
          html:
            '"Lord, I believe. And he worshipped him." The man&apos;s journey is complete. From blindness to sight, from confusion to clarity, from isolation to fellowship with Jesus. He now understands: the one who healed him is the Son of God. He moves from faith to worship.',
        },
        {
          kind: 'christ',
          id: 'john9-christ-judge',
          title: 'Christ Connection — Judgment and Reversal',
          html:
            'Jesus says: "For judgment I am come into this world, that they which see not might see; and that they which see might be made blind." The blind man becomes sighted. The self-righteous Pharisees, who pride themselves on their spiritual sight, are revealed as blind. Jesus&apos; coming inverts the world&apos;s valuations.',
        },
        {
          kind: 'carry',
          html:
            'The healed man&apos;s testimony is powerful precisely because it is simple and true. He does not need scholarly arguments. He does not need to defend his experience. He testifies to what he knows. Your own testimony—what you have experienced of God&apos;s healing and transformation—is valid and powerful, even when others reject it.',
        },
        {
          kind: 'reflection',
          id: 'john9-see-blind',
          prompt: 'What has Jesus&apos; light revealed in you that others cannot understand or accept? How is He inviting you to remain faithful to your testimony even in isolation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Neither hath this man sinned, nor his parents. Whereas I was blind, now I see. For judgment I am come into this world, that they which see not might see.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 9 · Study Guide',
  },

  hasHebrew: false,
};
