import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 8 — The Light of the World and "Before Abraham Was, I AM"
 *
 * The woman caught in adultery is brought before Jesus. He says: "He that is
 * without sin among you, let him first cast a stone at her." The accusers depart.
 * Jesus tells her: "Neither do I condemn thee: go, and sin no more." Then Jesus
 * proclaims: "I am the light of the world: he that followeth me shall not walk
 * in darkness, but shall have the light of life." The Jews debate, and Jesus
 * reveals: "Before Abraham was, I am"—an assertion of pre-existence and eternity.
 */
export const JOHN_8: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 8,

  intros: [
    'A woman is caught in adultery. The Pharisees bring her to Jesus, placing her in the midst of the crowd. The law says such a woman should be stoned. They ask Jesus: "What sayest thou?" It is a trap. If He says "stone her," He appears cruel and harsh. If He says "release her," He violates the law. Jesus bends down and writes in the dust—the only time in Scripture He is recorded writing anything. The gesture itself is profound. He writes upon the earth, upon the dust to which all flesh returns. Then He rises and speaks: "He that is without sin among you, let him first cast a stone at her."',
    'One by one, the accusers depart. Even the eldest, whose wisdom should be greatest, leaves first. Only Jesus and the woman remain. "Neither do I condemn thee: go, and sin no more." Judgment and mercy fuse. He does not condemn, yet He does not condone. He releases her to a new life, freed from both her accusers and her sin. Then Jesus proclaims: "I am the light of the world." In a dispute about His identity, He pushes toward an ultimate claim. Before Abraham was—the patriarch to whom all Jewish identity traced—"I am." The timeless presence of God speaking through Jesus&apos; lips.',
  ],

  sections: [
    /* ─── John 8:1–11 — The Woman Caught in Adultery ───────────────────── */
    {
      ref: 'John 8:1–11',
      title: 'Neither Do I Condemn Thee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(3, 'And the scribes and Pharisees brought unto him a woman taken in adultery; and when they had set her in the midst,'),
            plain(6, 'This they said, tempting him, that they might have to accuse him. But Jesus stooped down, and with his finger wrote on the ground, as though he heard them not.'),
            plain(7, 'So when they continued asking him, he lifted up himself, and said unto them, He that is without sin among you, let him first cast a stone at her.'),
            plain(9, 'And they which heard it, being convicted by their own conscience, went out one by one, being the eldest also, and Jesus was left alone, and the woman standing in the midst.'),
            plain(10, 'When Jesus had lifted up himself, and saw none but the woman, he said unto her, Woman, where are those thine accusers? hath no man condemned thee?'),
            plain(11, 'She said, No man, Lord. And Jesus said unto her, Neither do I condemn thee: go, and sin no more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john8-trap',
          html:
            'The Pharisees bring the woman caught in adultery. They do not bring the man—a revealing silence. Adultery requires two. Yet only the woman is exposed, shamed, condemned. The Pharisees use her as a test case, a trap for Jesus. They do not care about her. They care about catching Him in a contradiction.',
        },
        {
          kind: 'commentary',
          id: 'john8-writes',
          html:
            'Jesus stoops and writes with His finger in the dust. What does He write? Scripture does not say. But the action speaks. He writes upon the earth, upon the ground—the dust to which all flesh returns. He writes where no record is preserved, where the writing is erased by the next person who passes. In this silence and symbolic act, He acknowledges the presence of sin, the weight of judgment, the finality of condemnation—and steps outside all of it.',
        },
        {
          kind: 'greek',
          id: 'john8-hamartano',
          title: 'Hamartano — Sin',
          script: 'ἁμαρτάνω',
          translit: '<strong>Hamartano</strong> · to sin; to miss the mark; to transgress',
          description:
            'Sin is missing the mark, falling short of the standard. When Jesus says "He that is without sin," He acknowledges that all have fallen short. None can claim innocence. All have missed the mark. The distinction between accuser and accused collapses. We are all sinners.',
        },
        {
          kind: 'commentary',
          id: 'john8-conscience',
          html:
            '"Being convicted by their own conscience, went out one by one." The words of Jesus work in their hearts. They remember their own failings, their own compromises. The eldest depart first—perhaps because he has lived longest, sinned most, or knows most clearly his own guilt. One by one, they leave, until only Jesus and the woman remain.',
        },
        {
          kind: 'commentary',
          id: 'john8-neither',
          html:
            '"Neither do I condemn thee: go, and sin no more." This is not condoning the sin. It is transcending the mechanism of judgment. Jesus does not defend the sin or minimize it. But He breaks the cycle of condemnation. He releases her from both the stones of her accusers and the weight of her own self-judgment. And He calls her to new life: "go, and sin no more."',
        },
        {
          kind: 'christ',
          id: 'john8-christ-judge',
          title: 'Christ Connection — Judgment Transcended by Mercy',
          html:
            'Jesus has the authority to condemn. He is the judge. Yet He chooses mercy. In this act, He reveals the nature of God&apos;s judgment—it is not the hammer of wrath, but the call to transformation. He judges not to destroy, but to restore. To condemn would be easy. To offer forgiveness and call to change is far harder.',
        },
        {
          kind: 'carry',
          html:
            'We live under the judgment of others. We judge ourselves harshly. But Jesus asks: "Who are your accusers?" And when He calls them away—their condemnation—He offers you the freedom to begin again. The sin is real. But it is not your destiny. Go, and sin no more.',
        },
        {
          kind: 'reflection',
          id: 'john8-accusers',
          prompt: 'What accusations against yourself have you internalized? How does Jesus&apos; mercy call you to release yourself, and what would "sin no more" mean for your life?',
        },
      ],
    },

    /* ─── John 8:12–59 — The Light of the World and "I AM" ──────────────── */
    {
      ref: 'John 8:12–59',
      title: 'I Am the Light of the World; Before Abraham Was, I Am',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(12, 'Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.'),
            plain(32, 'And ye shall know the truth, and the truth shall make you free.'),
            plain(44, 'Ye are of your father the devil, and the lusts of your father ye will do. He was a murderer from the beginning, and abode not in the truth, because there is no truth in him. When he speaketh a lie, he speaketh of his own: for he is a liar, and the father of it.'),
            plain(56, 'Your father Abraham rejoiced to see my day: and he saw it, and was glad.'),
            plain(58, 'Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john8-light',
          html:
            '"I am the light of the world." This is the second "I am" statement in John. Jesus does not merely bring light; He is light. Light reveals, illuminates, guides. To follow Jesus is to walk in revelation, to see truly, to have the illumination of truth guiding your path. The contrast is stark: those who do not follow are in darkness, stumbling, lost.',
        },
        {
          kind: 'commentary',
          id: 'john8-truth',
          html:
            '"Ye shall know the truth, and the truth shall make you free." Truth is not abstract information. It is liberating, emancipatory. To know the truth is to be freed from illusion, from the lies that bind you, from the false narratives that limit your life. Jesus is the truth. To know Him is to be free.',
        },
        {
          kind: 'greek',
          id: 'john8-aletheia',
          title: 'Aletheia — Truth',
          script: 'ἀλήθεια',
          translit: '<strong>Aletheia</strong> · truth; reality; that which is genuine and authentic',
          description:
            'Aletheia is not mere factual accuracy. It is reality as it truly is, with all veils removed. When Jesus says He is the truth, He means He is the ultimate reality, the ground of all being, the authentic presence of God. To encounter Him is to encounter truth itself.',
        },
        {
          kind: 'commentary',
          id: 'john8-father-devil',
          html:
            'Jesus speaks harshly: "Ye are of your father the devil." This is not name-calling. It is a statement about origin and allegiance. Those who reject the light, who cling to lies, who refuse the truth, have aligned themselves with the father of lies. Satan "was a murderer from the beginning, and abode not in the truth." His nature is death; his method is deception.',
        },
        {
          kind: 'commentary',
          id: 'john8-before-abraham',
          html:
            'The Jews object: "Thou art not yet fifty years old, and hast thou seen Abraham?" They think Jesus speaks of literal meeting. But Jesus speaks of cosmic reality: "Before Abraham was, I am." Not "I was," but "I am"—the eternal present tense. This is the language of Exodus 3:14, where God reveals to Moses His eternal name: "I AM THAT I AM." Jesus claims the prerogatives of God.',
        },
        {
          kind: 'christ',
          id: 'john8-christ-eternal',
          title: 'Christ Connection — The Eternal One',
          html:
            'Jesus is not merely a teacher of the first century. He is the eternal one, present before Abraham, present at creation, present now. His identity transcends time. He is the light that has shone from the beginning, and He continues to shine. All history moves toward and flows from Him.',
        },
        {
          kind: 'carry',
          html:
            'When Jesus says "I am the light," He is not offering you a lesson in philosophy. He is offering you illumination for your path, clarity in confusion, guidance in darkness. You do not need to see your entire journey. You need only the light for the next step. Follow, and the light will show the way.',
        },
        {
          kind: 'reflection',
          id: 'john8-darkness',
          prompt: 'What darkness are you walking in? What truths do you resist knowing? How is Jesus calling you to step into the light?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that is without sin among you, let him first cast a stone at her. I am the light of the world. Ye shall know the truth, and the truth shall make you free. Before Abraham was, I am.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 8 · Study Guide',
  },

  hasHebrew: false,
};
