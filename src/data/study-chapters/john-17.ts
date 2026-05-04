import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 17 — The High Priestly Prayer
 *
 * Jesus prays for His disciples and for all who will believe through their word.
 * "Father, the hour is come; glorify thy Son, that thy Son also may glorify thee."
 * He prays for their sanctification: "Sanctify them through thy truth: thy word is
 * truth." And He prays for their unity: "That they all may be one... that the world
 * may believe that thou hast sent me." This is the longest prayer in Scripture—Jesus
 * interceding for those He loves, committing them to the Father&apos;s care.
 */
export const JOHN_17: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 17,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /The Last Sermon of/i,
    caption: 'John 17',
  },
  intros: [
    'Jesus lifts His eyes to heaven and prays. This is the High Priestly Prayer, the prayer of intercession for those He loves and for the gospel&apos;s advance into the world. "Father, the hour is come; glorify thy Son, that thy Son also may glorify thee." His glorification and the Father&apos;s glorification are bound together. In His death and resurrection, the Father&apos;s character is revealed. In the Father&apos;s vindication of Him, Christ&apos;s true identity becomes clear.',
    'Jesus prays specifically for His disciples and for all who will come to believe. He prays for their sanctification—their setting apart for the Father&apos;s use. "Sanctify them through thy truth: thy word is truth." Truth is not abstract doctrine. It is Jesus Himself, the living Word. To be sanctified in truth is to be conformed to Christ. And Jesus prays for unity: "That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me." The unity of believers is a sign to the world that Jesus came from God.',
  ],

  sections: [
    /* ─── John 17:1–19 — Glorification and Sanctification ────────────────── */
    {
      ref: 'John 17:1–19',
      title: 'Father, the Hour Is Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'These words spake Jesus, and lifted up his eyes to heaven, and said, Father, the hour is come; glorify thy Son, that thy Son also may glorify thee:'),
            plain(2, 'As thou hast given him power over all flesh, that he should give eternal life to as many as thou hast given him.'),
            plain(3, 'And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.'),
            plain(11, 'And now I am no more in the world, but these are in the world, and I come to thee. Holy Father, keep through thine own name those whom thou hast given me, that they may be one, as we are.'),
            plain(17, 'Sanctify them through thy truth: thy word is truth.'),
            plain(19, 'And for their sakes I sanctify myself, that they also might be sanctified through the truth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john17-hour',
          html:
            'Jesus lifts His eyes to heaven and addresses the Father directly. "Father, the hour is come." He does not speak with dread or resistance. He speaks with readiness. The hour appointed from the foundation of the world has arrived. His death and resurrection are about to unfold. He asks the Father to glorify Him so that He, in turn, might glorify the Father.',
        },
        {
          kind: 'commentary',
          id: 'john17-power',
          html:
            '"As thou hast given him power over all flesh, that he should give eternal life to as many as thou hast given him." Jesus has been given authority over all humanity by the Father. And He exercises that authority not in domination but in the gift of eternal life. He gives life to those whom the Father has given to Him—the redeemed, the called, the chosen.',
        },
        {
          kind: 'greek',
          id: 'john17-zoe',
          title: 'Zoe — Eternal Life',
          script: 'ζωή',
          translit: '<strong>Zoe</strong> · life; divine life; eternal existence in fellowship with God',
          description:
            'Zoe is not mere biological existence. It is the life of God, eternal, unbroken communion with the Father and the Son. To have eternal life is not to wait until after death for blessing. It is to enter now into the reality of living forever in relationship with God.',
        },
        {
          kind: 'commentary',
          id: 'john17-know',
          html:
            '"And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent." Eternal life is not a length of existence, but a quality of knowing. To know God—the true God, the Father, and Jesus Christ whom He sent—is to have entered into eternal life even now. The dimension of eternity is knowing.',
        },
        {
          kind: 'commentary',
          id: 'john17-sanctify',
          html:
            '"Sanctify them through thy truth: thy word is truth."[res:cambridge-john-prayer] Jesus prays for His disciples to be set apart, consecrated, made holy through truth. Truth is not abstract principle. It is the Word made flesh—Jesus Christ. To be sanctified in truth is to be conformed to Him, to have His character imprinted on your life.',
        },
        {
          kind: 'commentary',
          id: 'john17-sanctify-self',
          html:
            '"For their sakes I sanctify myself, that they also might be sanctified through the truth." Jesus sanctifies Himself by offering His life, by going to the cross, by being the living sacrifice. Through His self-offering, He makes a way for others to be sanctified. His death is the means of their holiness.',
        },
        {
          kind: 'christ',
          id: 'john17-christ-intercessor',
          title: 'Christ Connection — The Great High Priest',
          html:
            'Jesus prays as the High Priest, interceding for His people before the Father. His prayer is the climax of His priestly work. He offers Himself, commits His disciples to the Father&apos;s care, opens a way for all future believers to be sanctified and unified in Him.',
        },
        {
          kind: 'carry',
          html:
            'As Jesus prayed for His disciples, He prays for you. He brings your name before the Father. He intercedes, asking that you be sanctified, unified with other believers, protected in the Father&apos;s name. You are not lost or forgotten. The risen Christ ever lives to intercede for you.',
        },
        {
          kind: 'reflection',
          id: 'john17-pray',
          prompt: 'Knowing that Jesus is praying for you before the Father, how does that change your sense of security and belonging in His kingdom?',
        },
      ],
    },

    /* ─── John 17:20–26 — Unity and Eternal Purpose ────────────────────── */
    {
      ref: 'John 17:20–26',
      title: 'That They All May Be One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(20, 'Neither pray I for these alone, but for them also which shall believe on me through their word;'),
            plain(21, 'That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me.'),
            plain(22, 'And the glory which thou gavest me I have given them; that they may be one, even as we are one:'),
            plain(23, 'I in them, and thou in me, that they may be made perfect in one; and that the world may know that thou hast sent me, and hast loved them, as thou hast loved me.'),
            plain(24, 'Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory which thou hast given me: for thou lovedst me before the foundation of the world.'),
            plain(26, 'And I have declared unto them thy name, and will declare it: that the love wherewith thou hast loved me may be in them, and I in them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john17-future',
          html:
            '"Neither pray I for these alone, but for them also which shall believe on me through their word." Jesus&apos; prayer is not limited to the eleven disciples. It extends to all future believers—to all generations who will come to faith through the gospel proclaimed by His followers. Your faith is included in His prayer.',
        },
        {
          kind: 'commentary',
          id: 'john17-unity',
          html:
            '"That they all may be one."[res:intertextual-eternal-love] Unity is not organizational conformity or doctrinal uniformity imposed by force. It is organic, flowing from common life in Christ. As the Father and Son are one—united in being, purpose, love—so believers are to be one in Christ. This unity is a witness to the world that Christ came from God.',
        },
        {
          kind: 'greek',
          id: 'john17-hen',
          title: 'Hen — One',
          script: 'ἕν',
          translit: '<strong>Hen</strong> · one; unified; together; in harmonious whole',
          description:
            'The unity Jesus prays for is not uniformity but harmonious wholeness[res:perseus-doxa]. Many members, many gifts, many perspectives—yet one body, one life, one purpose in Christ. This unity becomes visible to the world as a sign that Christ is from God.',
        },
        {
          kind: 'commentary',
          id: 'john17-glory',
          html:
            '"The glory which thou gavest me I have given them." Jesus shares His glory with His disciples. Not the glory of being worshipped, but the glory of His character, His purpose, His victory. They are drawn into His life and mission. They become sharers in His glory.',
        },
        {
          kind: 'commentary',
          id: 'john17-love',
          html:
            '"That the love wherewith thou hast loved me may be in them, and I in them." The ultimate prayer. That the disciples—and all believers—would experience the same love that the Father has for the Son. Not a diminished version, but the full, infinite love of the Father flowing into you. And Christ dwelling in you, carrying that love, revealing that love.',
        },
        {
          kind: 'christ',
          id: 'john17-christ-love',
          title: 'Christ Connection — Loved Before the Foundation',
          html:
            'Jesus speaks of love from before the foundation of the world. The Father&apos;s love for the Son is eternal, preceding creation. And this eternal love is shared with all who believe. You are loved with the love that has been from eternity, that will endure forever.',
        },
        {
          kind: 'carry',
          html:
            'Jesus not only prays for you. He longs for you to be with Him where He is, to behold His glory, to experience the Father&apos;s love that he has known from before the foundation of the world. The destination is not uncertainty. It is union with Christ, participation in His glory, and forever dwelling in the Father&apos;s love.',
        },
        {
          kind: 'reflection',
          id: 'john17-glory-behold',
          prompt: 'What does it mean that Jesus wants you to be with Him and behold His glory? How does His eternal love for you change your identity and destiny?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Father, the hour is come; glorify thy Son. And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent. That they all may be one in us. That the love wherewith thou hast loved me may be in them, and I in them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 17 · Study Guide',
  },

  resources: [
    {
      id: 'intertextual-eternal-love',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'John 17:24 — Love Before Foundation',
      url: 'https://intertextual.bible/search?q=John+17+24',
      description: 'Jesus&apos; affirmation of the Father&apos;s eternal love and its extension to believers.',
    },
    {
      id: 'cambridge-john-prayer',
      kind: 'study',
      source: 'Cambridge University Press',
      label: 'John 17 as Priestly Prayer',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly resource on the structure and theological significance of Jesus&apos; high priestly prayer.',
    },
    {
      id: 'perseus-doxa',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Doxa (Glory) — Greek Lexicon',
      url: 'https://www.perseus.tufts.edu/',
      description: 'Classical and theological meanings of doxa as the divine radiance and honor Jesus shares with believers.',
    },
  ],

  hasHebrew: false,
};
