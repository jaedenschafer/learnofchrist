import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Peter 2 — Living Stones & Royal Priesthood
 *
 * Peter shifts the metaphor from birth to architecture. The believers are newborn
 * babes, desiring the milk of the word. They are also living stones, built together
 * into a spiritual house, a royal priesthood. Christ is the cornerstone—rejected by
 * men but chosen by God. In His suffering, He left us an example. By His stripes we
 * are healed.
 */
export const FIRST_PETER_2: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 2,

  intros: [
    'Peter develops the image of spiritual birth. The believers are to long for the word as a newborn longs for milk—with an intensity that sustains their growth. They are not disconnected individuals but are being built together as a house for God. Each stone matters. Each believer, though weak and small, is essential to the structure.',
    'He then introduces Christ as the cornerstone—the stone the builders rejected but which God chose and honored. Around this cornerstone, the whole structure takes shape. And the believers, built on this cornerstone, are called to follow His example in suffering. Christ endured unjust treatment, opposition, even execution. His followers will likewise face hostility. But there is redemption in His suffering: "by whose stripes ye were healed."',
  ],

  sections: [
    /* ─── 1 Peter 2:1–10 — Living Stones ────────────────────────────── */
    {
      ref: '1 Peter 2:1–10',
      title: 'A Spiritual House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Wherefore laying aside all malice, and all guile, and hypocrisies, and envies, and all evil speakings,'),
            plain(2, 'As newborn babes, desire the sincere milk of the word, that ye may grow thereby:'),
            plain(4, 'To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious,'),
            plain(5, 'Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ.'),
            plain(9, 'But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light:'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet2-newborn',
          html:
            'Peter calls the believers to put away all that hinders growth: malice, guile, hypocrisy, envy, slander. Then, like newborns, they are to crave the word. The intensity of a newborn&apos;s desire for milk is the model. Not a casual interest in Scripture, but a hunger that drives everything. From that word, they grow. They become strong.',
        },
        {
          kind: 'greek',
          id: '1pet2-lithos',
          title: 'Lithos — Stone',
          script: 'λίθος',
          translit: '<strong>Lithos</strong> · stone; rock; the fundamental material of a building',
          description:
            'A stone is durable, foundational. Jesus is the living stone—rejected by the builders (human leaders and authorities) but chosen by God. The believers are also living stones—not passive matter but transformed by the life of Christ, built into His structure.',
        },
        {
          kind: 'commentary',
          id: '1pet2-priesthood',
          html:
            'Peter describes the believers as a holy priesthood. In the Old Testament, only the Levites could offer sacrifice. Now, Peter says, every believer is a priest—called to offer up spiritual sacrifices to God. These sacrifices are not animals but the offering of our whole selves: our worship, our service, our lives poured out in love.',
        },
        {
          kind: 'christ',
          id: '1pet2-christ-cornerstone',
          title: 'Christ Connection — The Rejected Stone',
          html:
            'Jesus was rejected by the religious and political leaders of His day. Yet He is the cornerstone—the fundamental stone on which everything is built. His rejection was not failure but vindication. He is exalted and honored by God, made the chief cornerstone of God&apos;s eternal structure.',
        },
        {
          kind: 'carry',
          html:
            'The believers are called a "peculiar people"—people set apart, owned by God, called to reveal His character. They are to show forth His praises—to live in such a way that those who see them see evidence of God&apos;s light and love. This is evangelism not through words alone but through transformed lives.',
        },
        {
          kind: 'reflection',
          id: '1pet2-stone',
          prompt: 'You are a living stone in God&apos;s spiritual house. What does it mean to be built together with others in the church?',
        },
      ],
    },

    /* ─── 1 Peter 2:18–25 — Following His Example ────────────────────── */
    {
      ref: '1 Peter 2:18–25',
      title: 'Christ Our Example in Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(18, 'Servants, be subject to your masters with all fear; not only to the good and gentle, but also to the froward.'),
            plain(21, 'For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps:'),
            plain(22, 'Who did no sin, neither was guile found in his mouth:'),
            plain(24, 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.'),
            plain(25, 'For ye were as sheep going astray; but are now returned unto the Shepherd and Bishop of your souls.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet2-suffering',
          html:
            'Peter addresses believers in difficult social positions—servants under harsh masters. He calls them to patient endurance, remembering that Christ Himself suffered unjustly. This is not a call to accept injustice as right, but to endure hardship without returning evil for evil. In this way, they follow their Master.',
        },
        {
          kind: 'greek',
          id: '1pet2-hupatasso',
          title: 'Hupatasso — To Subject',
          script: 'ὑποτάσσω',
          translit: '<strong>Hupatasso</strong> · to submit; to place under authority; to arrange in order',
          description:
            'Submission is not the same as accepting injustice. It is choosing to accept your place in a relationship rather than rebel against it. Even when the authority is unjust, the believer is called to respond with patience and trust in God rather than with anger or revenge.',
        },
        {
          kind: 'commentary',
          id: '1pet2-stripes',
          html:
            'Peter quotes Isaiah 53: "By whose stripes ye were healed." Jesus was beaten—literally whipped—as part of His suffering. Yet from His suffering comes healing for all who believe. This is the mystery of the cross: through His death, we find life. Through His wounds, we are made whole.',
        },
        {
          kind: 'christ',
          id: '1pet2-christ-suffering',
          title: 'Christ Connection — The Suffering Servant',
          html:
            'Jesus is described in Isaiah as the suffering servant who bears our iniquities. He endured mockery, betrayal, torture, and execution—all unjustly. Yet in His suffering, He accomplished redemption. His example teaches us that endurance in trial, loyalty to God, and refusal to return evil for evil are the marks of true faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'Peter closes with a beautiful image: "Ye were as sheep going astray; but are now returned unto the Shepherd and Bishop of your souls." The scattered, lost sheep have found their Shepherd. This Shepherd is Christ Himself, who cares for us, guides us, protects us. Whatever hardship we face, we are not alone. We are known and loved by our Shepherd.',
        },
        {
          kind: 'reflection',
          id: '1pet2-example',
          prompt: 'Where in your life are you called to follow Christ&apos;s example of patient endurance? What would that look like?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'As newborn babes, desire the sincere milk of the word. Ye also, as lively stones, are built up a spiritual house. By whose stripes ye were healed. Ye were as sheep going astray; but are now returned unto the Shepherd.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 2 · Study Guide',
  },

  hasHebrew: false,
};
