import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 3 — Nicodemus and the New Birth
 *
 * A Pharisee named Nicodemus comes to Jesus by night, drawn by the signs.
 * Jesus tells him: "Ye must be born again." The new birth is of Spirit, not
 * flesh. It is invisible, like the wind. Then follows the proclamation: "For
 * God so loved the world, that he gave his only begotten Son, that whosoever
 * believeth in him should not perish, but have everlasting life." John then
 * gives way to the Baptist, who declares: "He must increase, but I must
 * decrease."
 */
export const JOHN_3: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 8 },
  intros: [
    'Nicodemus, a ruler of the Jews, a Pharisee, comes to Jesus by night. He has seen the signs and is convinced that Jesus is a teacher sent from God. But he does not yet understand what is being offered. When Jesus tells him "Ye must be born again," Nicodemus is confused. "How can a man be born when he is old?" The new birth is of Spirit. It is invisible, as invisible as the wind. Nicodemus struggles with the spiritual language. Yet in this encounter lies the heart of the gospel: transformation, renewal, a passing from death into life.',
    'Jesus reveals the depth of God&apos;s love: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." The new birth is not earned or merited. It flows from grace, from God&apos;s love poured out for the world. Then John the Baptist, in his final testimony, steps back entirely. He has been the forerunner. His work is to prepare the way. But now the one he pointed to has come. "He must increase, but I must decrease."',
  ],

  sections: [
    /* ─── John 3:1–21 — Born Again ──────────────────────────────────────── */
    {
      ref: 'John 3:1–21',
      title: 'Ye Must Be Born Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(3, 'Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God.'),
            plain(4, 'Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother&apos;s womb, and be born?'),
            plain(5, 'Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.'),
            plain(6, 'That which is born of the flesh is flesh; and that which is born of the Spirit is spirit.'),
            plain(8, 'The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.'),
            plain(16, 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'),
            plain(17, 'For God sent not his Son into the world to condemn the world; but that the world through him might be saved.'),
            plain(18, 'He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john3-nicodemus',
          html:
            'Nicodemus[res:bible-odyssey-nicodemus] comes by night—a phrase that carries resonance throughout John&apos;s gospel. He is drawn, but cautious. He has status, authority, knowledge of Scripture. He has something to preserve. He begins his approach carefully: "Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him." He speaks in the plural, as if representing others. He is not yet willing to stand alone.',
        },
        {
          kind: 'commentary',
          id: 'john3-born-again',
          html:
            'Jesus does not answer Nicodemus&apos; implicit question. Instead, He cuts to the heart: "Ye must be born again." It is an absolute. Not a recommendation, not a possibility. Ye must. Nicodemus is baffled. He is caught in literalism, imagining a physical re-entry into the womb. He does not yet grasp that Jesus speaks of spiritual transformation.',
        },
        {
          kind: 'greek',
          id: 'john3-gennao',
          title: 'Gennao — Born',
          script: 'γεννάω',
          translit: '<strong>Gennao</strong> · to be born; to beget; to come into being',
          description:
            'The word gennao means to be born or brought forth. When Jesus says "born again" (gennao anothen), He means born from above, born anew. It is a complete origin point, a second beginning. The old categories of age, status, and knowledge do not apply. Spiritually, everyone stands as an infant, entirely dependent on God&apos;s initiative.',
        },
        {
          kind: 'commentary',
          id: 'john3-water-spirit',
          html:
            '"Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God." Jesus distinguishes between the natural birth (water) and the spiritual birth (Spirit). The natural birth brings flesh; the spiritual birth brings spirit. One is visible, inherited, known. The other is invisible, initiated by God&apos;s power, utterly new. Yet Jesus does not despise the flesh. The Spirit works in and through the physical. But the kingdom requires more than flesh. It requires the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'john3-wind',
          html:
            '"The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit."[res:intertextual-john3-serpent] Jesus uses the wind as an analogy. The pneuma (wind/spirit) is invisible. You hear its effects but cannot see its origin or destination. So it is with the Spirit. The born-again experience is not reducible to technique or control. It is God&apos;s sovereign, invisible working.',
        },
        {
          kind: 'christ',
          id: 'john3-christ-love',
          title: 'Christ Connection — God&apos;s Love Incarnate',
          html:
            '"For God so loved the world, that he gave his only begotten Son." This is the motivation for the incarnation, the cross, the offer of new birth. It is not judgment or wrath that drives God, but love—radical, self-giving love. The Son is given. His life is the price of redemption. In His offering, all who believe are born again, transformed from death to life.',
        },
        {
          kind: 'carry',
          html:
            'Being born again is not a moment of achievement or enlightenment you attain by effort. It is a gift received, like the gift of physical birth. You do not earn being born; you are born by the will of another. So too the spiritual birth. It comes from above, from God&apos;s initiative, through faith in Christ. Your role is to open yourself to receive what God freely offers.',
        },
        {
          kind: 'reflection',
          id: 'john3-spirit',
          prompt: 'In what areas of your life do you sense the need for a new birth, a fresh beginning? Where is the Spirit calling you to release the old and receive something entirely new?',
        },
      ],
    },

    /* ─── John 3:22–36 — John the Baptist&apos;s Final Testimony ──────────────── */
    {
      ref: 'John 3:22–36',
      title: 'He Must Increase; I Must Decrease',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(27, 'John answered and said, A man can receive nothing, except it be given him from heaven.'),
            plain(28, 'Ye yourselves bear me witness, that I said, I am not the Christ, but that I am sent before him.'),
            plain(29, 'He that hath the bride is the bridegroom: but the friend of the bridegroom, which standeth and heareth him, rejoiceth greatly because of the bridegroom&apos;s voice: so then my joy is fulfilled.'),
            plain(30, 'He must increase, but I must decrease.'),
            plain(31, 'He that cometh from above is above all: he that is of the earth is earthly, and speaketh of the earth: but he that cometh from heaven is above all.'),
            plain(34, 'For he whom God hath sent speaketh the words of God: for God giveth not the Spirit by measure unto him.'),
            plain(35, 'The Father loveth the Son, and hath given all things into his hand.'),
            plain(36, 'He that believeth on the Son hath everlasting life: and he that believeth not the Son shall not see life; but the wrath of God abideth on him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john3-baptist-decrease',
          html:
            'John the Baptist&apos;s disciples notice that people are going to Jesus. There is a subtle jealousy or concern: Jesus baptizes, and all men come to Him. But John does not resist or resent. He recognizes the divine order. "A man can receive nothing, except it be given him from heaven." His authority, his ministry, his entire role comes from God. He has never claimed to be the Christ, only the forerunner.',
        },
        {
          kind: 'commentary',
          id: 'john3-friend-bridegroom',
          html:
            '"He that hath the bride is the bridegroom: but the friend of the bridegroom, which standeth and heareth him, rejoiceth greatly because of the bridegroom&apos;s voice." John uses the image of the wedding attendant, the friend of the groom. His role is not to claim the bride but to stand by and support. When he hears the bridegroom&apos;s voice, his joy is complete. The friend does not mourn when his role ends; he rejoices that the bridegroom has arrived.',
        },
        {
          kind: 'greek',
          id: 'john3-auksano',
          title: 'Auksano — Increase',
          script: 'αὐξάνω',
          translit: '<strong>Auksano</strong> · to grow; to increase; to become greater',
          description:
            'John says Jesus "must increase" (auksano) while he must "decrease" (meioo). These are passive verbs—it is not something they choose, but something that happens. As the true Bridegroom arrives, His influence grows. The forerunner&apos;s role diminishes. This is not failure but fulfillment. John has completed his mission.',
        },
        {
          kind: 'commentary',
          id: 'john3-from-above',
          html:
            '"He that cometh from above is above all." Jesus is not merely a teacher or prophet. He comes from above, from heaven, from the Father. All authority flows from this origin. The Baptist is of the earth, earthly in his perspective. But Jesus speaks from the Father&apos;s knowledge. "God giveth not the Spirit by measure unto him."[res:sefaria-brazen-serpent] The Spirit is given to others in measured portions. Jesus receives the Spirit without limit. He is the fullness of God.',
        },
        {
          kind: 'christ',
          id: 'john3-christ-father',
          title: 'Christ Connection — The Father&apos;s Love Made Visible',
          html:
            '"The Father loveth the Son, and hath given all things into his hand." The incarnation is the manifestation of the Father&apos;s love for the Son. All authority in heaven and earth has been given to Him. And through Him, the Father&apos;s love reaches the world. Faith in the Son is faith in the Father&apos;s own self-giving love.',
        },
        {
          kind: 'carry',
          html:
            'John the Baptist teaches us the grace of decrease. Many fear diminishment, the loss of relevance or status. But John finds his greatest joy in stepping back, in letting another be greater. This is the pattern of discipleship: we do not cling to our own authority or achievements. We point beyond ourselves to Christ and rejoice when others recognize Him.',
        },
        {
          kind: 'reflection',
          id: 'john3-decrease',
          prompt: 'Where might you be called to "decrease" so that Christ can "increase" in your life and in others&apos; lives? What would it mean to find joy in that kind of self-offering?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ye must be born again. For God so loved the world, that he gave his only begotten Son. He must increase, but I must decrease.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 3 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-nicodemus',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Nicodemus',
      url: 'https://www.bibleodyssey.org/dictionary/nicodemus/',
      description: 'Open-access SBL entry on Nicodemus, his encounter with Jesus, and his later role as a follower.',
    },
    {
      id: 'sefaria-brazen-serpent',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 21:8–9 (Brazen Serpent)',
      url: 'https://www.sefaria.org/Numbers.21.8-9',
      description: 'The Torah passage Jesus references at John 3:14, with Jewish commentarial traditions on healing and redemption.',
    },
    {
      id: 'intertextual-john3-serpent',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 21:8–9 ↔ John 3:14',
      url: 'https://intertextual.bible/text/numbers-21.8-9/john-3.14',
      description: 'Side-by-side comparison of the brazen serpent and Jesus&apos; crucifixion as signs of healing and salvation.',
    },
  ],

  hasHebrew: false,
};
