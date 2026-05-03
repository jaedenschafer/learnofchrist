import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 5 — Healing at Bethesda and Claims of Equality with God
 *
 * At the pool of Bethesda, a man lies ill for thirty-eight years. Jesus asks:
 * "Wilt thou be made whole?" The man does not cry for healing; he is passive,
 * defeated. Yet Jesus speaks the word: "Rise, take up thy bed, and walk." He
 * is healed immediately. But the Sabbath—the day of healing is Sabbath. The
 * Jews demand to know who healed him. When they discover it is Jesus, they
 * seek to kill Him. For He claims: "I and my Father work hitherto." He has
 * made Himself equal with God.
 */
export const JOHN_5: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 5,

  estimatedMinutes: { 5: 2, 10: 6, 15: 7 },
  intros: [
    'Near the Sheep Gate at Jerusalem lies a pool called Bethesda, surrounded by five porches. In these porches lay a great multitude of the infirm, the blind, the halt, the withered—all waiting for the moving of the water. An angel stirred the water at certain seasons, and whoever stepped in first after the stirring was made whole. A man lies there who has been infirm for thirty-eight years. Thirty-eight years of waiting, of hoping, of disappointment. Yet when Jesus approaches and asks "Wilt thou be made whole?" the man does not answer yes. Instead, he gives excuse: "I have no man, when the water is troubled, to put me into the pool." He has settled into his infirmity. Yet Jesus, without waiting for consent, speaks a word: "Rise, take up thy bed, and walk."',
    'Immediately the man is whole. But it is the Sabbath. And in taking up his bed and walking, he has violated Sabbath law. The Jews confront him: "It is the Sabbath day: it is not lawful for thee to carry thy bed." But the man answers: "He that made me whole, the same said unto me, Take up thy bed, and walk." When they discover that it is Jesus, they seek to kill Him. For He does not only break the law. He claims a power that belongs to God alone. "I and my Father work hitherto," He says. The Father and the Son working together. Equal in authority, equal in power.',
  ],

  sections: [
    /* ─── John 5:1–15 — Healing at Bethesda ────────────────────────────── */
    {
      ref: 'John 5:1–15',
      title: 'Rise, Take Up Thy Bed and Walk',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(2, 'Now there is at Jerusalem by the sheep market a pool, which is called in the Hebrew tongue Bethesda, having five porches.'),
            plain(5, 'And a certain man was there, which had an infirmity thirty and eight years.'),
            plain(6, 'When Jesus saw him lie, and knew that he had been now a long time in that case, he saith unto him, Wilt thou be made whole?'),
            plain(8, 'Jesus saith unto him, Rise, take up thy bed, and walk.'),
            plain(9, 'And immediately the man was made whole, and took up his bed, and walked: and on the same day was the Sabbath.'),
            plain(14, 'Afterward Jesus findeth him in the temple, and said unto him, Behold, thou art made whole: sin no more, lest a worse thing come unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john5-bethesda',
          html:
            'Bethesda means "House of Mercy." Yet those who gather there experience little mercy. For decades, some have waited for healing that never comes. They gather around a pool whose waters stir at unpredictable times. The first to enter after the stirring is healed. It is chance, lottery, the survival of the fastest. The weak grow weaker. The infirm remain infirm. Mercy, paradoxically, seems absent from the House of Mercy.',
        },
        {
          kind: 'commentary',
          id: 'john5-thirtyeight',
          html:
            'A man has been infirm for thirty-eight years. This is a lifetime of suffering, of dependency, of waiting. His infirmity has become his identity. When Jesus asks "Wilt thou be made whole?" the man does not leap at the question. Instead, he offers excuse: "I have no man." He does not lack will; he lacks agency. He has become passive, habituated to suffering. Yet Jesus does not require his consent. He does not debate. He speaks the word of creation: "Rise, take up thy bed, and walk."',
        },
        {
          kind: 'greek',
          id: 'john5-hygieia',
          title: 'Hygieia — Whole / Wholeness',
          script: 'ὑγιής',
          translit: '<strong>Hygieia</strong> · whole; well; sound; healthy; restored to completeness',
          description:
            'To be hygieia is not merely to lack disease but to be whole, complete, restored to full function. The man is made hygieia—not merely healed of symptom, but restored to wholeness. His body, his agency, his capacity to act are all returned to him. This is the fullness of healing.',
        },
        {
          kind: 'commentary',
          id: 'john5-sin-no-more',
          html:
            'After the healing, Jesus finds the man in the Temple and says: "Behold, thou art made whole: sin no more, lest a worse thing come unto thee." The statement is cryptic. It suggests a connection between the infirmity and sin—not that the man was judged for sin, but that sin brought consequence. Now healed, he is warned against returning to the pattern. The healing is complete, but the possibility of deeper loss remains if he chooses the way of sin.',
        },
        {
          kind: 'christ',
          id: 'john5-christ-creation',
          title: 'Christ Connection — The Word That Heals',
          html:
            'Jesus speaks as the one who created. In Genesis, God speaks creation into being: "Let there be light." Here, Jesus speaks healing into being. His word carries creative power. The man is not gradually restored. The moment He speaks, it is done. This is the authority of the Son, the same authority by which all things were made.',
        },
        {
          kind: 'carry',
          html:
            'The man had settled into his infirmity. He had become comfortable with the excuse, habituated to waiting. Yet Jesus asks him directly: "Wilt thou be made whole?" What has your suffering become? What excuses have you settled into? Jesus offers not sympathy but the possibility of real transformation.',
        },
        {
          kind: 'reflection',
          id: 'john5-whole',
          prompt: 'Where in your life have you stopped believing wholeness is possible? What would it mean to hear Jesus ask you directly: "Wilt thou be made whole?"',
        },
      ],
    },

    /* ─── John 5:16–47 — The Son&apos;s Authority and Witness ───────────────── */
    {
      ref: 'John 5:16–47',
      title: 'The Father and the Son Working Together',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(16, 'And therefore did the Jews persecute Jesus, and sought to slay him, because he had done these things on the Sabbath day.'),
            plain(17, 'But Jesus answered them, My Father worketh hitherto, and I work.'),
            plain(19, 'Then answered Jesus and said unto them, Verily, verily, I say unto you, The Son can do nothing of himself, but what he seeth the Father do: for what things soever he doeth, these also doeth the Son likewise.'),
            plain(24, 'Verily, I say unto you, He that heareth my word, and believeth on him that sent me, hath everlasting life.'),
            plain(26, 'For as the Father hath life in himself; so hath he given to the Son to have life in himself;'),
            plain(27, 'And hath given him authority to execute judgment also, because he is the Son of man.'),
            plain(39, 'Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john5-sabbath-work',
          html:
            'The Jews seek to kill Jesus because He healed on the Sabbath. In their interpretation, healing is work, and work is forbidden on the Sabbath. But Jesus responds with a radical claim: "My Father worketh hitherto, and I work." Even on the Sabbath, God works. The universe does not rest on Sabbath. God sustains creation. Jesus claims to do the same. He works with His Father in the continuous work of creation and redemption.',
        },
        {
          kind: 'commentary',
          id: 'john5-son-father',
          html:
            '"The Son can do nothing of himself, but what he seeth the Father do." This is not weakness but intimacy. The Son&apos;s work is not independent of the Father&apos;s. They are aligned, united, working in perfect concert. What the Father does, the Son does. Where the Father works, the Son works. They are not in opposition. They are one in purpose and power.',
        },
        {
          kind: 'greek',
          id: 'john5-krisis',
          title: 'Krisis — Judgment',
          script: 'κρίσις',
          translit: '<strong>Krisis</strong> · judgment; decision; discernment; verdict',
          description:
            'The Father has given the Son authority to execute judgment. Krisis is not primarily condemnation but discernment, the ability to judge rightly, to see and declare truth. All judgment has been given to the Son. This includes the power to condemn, but also the power to save, to forgive, to restore.',
        },
        {
          kind: 'commentary',
          id: 'john5-life-in-himself',
          html:
            '"For as the Father hath life in himself; so hath he given to the Son to have life in himself." The Father is the source of all life, self-existent and eternal. The Son, having received from the Father, also has life in Himself. This is not something earned or learned. It is given, bestowed. And through the Son, this life flows to all who believe.',
        },
        {
          kind: 'commentary',
          id: 'john5-scriptures',
          html:
            '"Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me." Jesus does not dismiss Scripture. He affirms its truth and claims that it all points to Him. Moses wrote of Him. The prophets testified of Him. The Law and the Prophets, understood rightly, are a witness to Jesus. Those who truly know Scripture will recognize Him.',
        },
        {
          kind: 'christ',
          id: 'john5-christ-judge',
          title: 'Christ Connection — Judge of All',
          html:
            'The Son has been given authority to judge—all judgment has been committed to Him. He judges not out of malice but out of truth and mercy. He judges to save, to restore, to make whole. In Him, judgment and love converge. The same one who heals at Bethesda is also the one before whom all must stand.',
        },
        {
          kind: 'carry',
          html:
            'Jesus invites the Jews to search the Scriptures. He does not hide. He welcomes investigation. He trusts that those who seek truth in Scripture will find Him. Is your own reading of Scripture open to being surprised? Are you willing to let the text point you toward Christ, even if it challenges your expectations?',
        },
        {
          kind: 'reflection',
          id: 'john5-judge',
          prompt: 'What does it mean to you that Jesus is the judge of all? How does that claim humble you, and how does it offer you hope?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Wilt thou be made whole? Rise, take up thy bed, and walk. My Father worketh hitherto, and I work. He that heareth my word, and believeth on him that sent me, hath everlasting life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 5 · Study Guide',
  },

  hasHebrew: false,
};
