import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 7 — Jesus at the Feast of Tabernacles
 *
 * Jesus goes up to the Feast of Tabernacles in Jerusalem in secret, then reveals
 * Himself mid-feast. The Jews marvel at His teaching: "How knoweth this man
 * letters, having never learned?" There is controversy. Some say He is the
 * Christ; others say He is a deceiver. The officers sent to seize Him return
 * without Him, saying: "Never man spake like this man." Jesus proclaims: "If any
 * man thirst, let him come unto me, and drink."
 */
export const JOHN_7: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 7,

  estimatedMinutes: { 5: 2, 10: 5, 15: 6 },
  intros: [
    'The Feast of Tabernacles draws near. Jesus goes to the feast in secret, not openly. His family encourages Him to go publicly, to reveal Himself openly to the world. But Jesus knows that the world hates Him. He knows that the powers oppose Him. When He arrives mid-feast and begins to teach, the crowds marvel. His teaching surpasses what they expect. He speaks with authority about Scripture, yet He never studied in the schools of the rabbis. "How knoweth this man letters, having never learned?"',
    '"Never man spake like this man," the officers declare when they are sent to arrest Him and return empty-handed. In the waters of the feast, Jesus makes a proclamation: "If any man thirst, let him come unto me, and drink." The image recalls the ritual pouring of water during the feast, the remembrance of water from the rock in the wilderness. But Jesus offers something deeper—a spring within, the Holy Spirit, welling up to eternal life. The crowd is divided. Some believe He is the Christ. Others dismiss Him as a deceiver. The truth is hidden, waiting for recognition.',
  ],

  sections: [
    /* ─── John 7:1–24 — Teaching at the Feast ──────────────────────────── */
    {
      ref: 'John 7:1–24',
      title: 'Teaching in the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(14, 'Now about the midst of the feast Jesus went up into the temple, and taught.'),
            plain(15, 'And the Jews marvelled, saying, How knoweth this man letters, having never learned?'),
            plain(16, 'Jesus answered them, and said, My doctrine is not mine, but his that sent me.'),
            plain(17, 'If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself.'),
            plain(24, 'Judge not according to the appearance, but judge righteous judgment.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john7-teach-authority',
          html:
            'Jesus goes to the Temple and teaches. The Jews marvel, not at the content, but at the fact that He teaches. He is untrained in their schools, unauthorized by their authorities. Yet His teaching carries weight. It is not the recitation of tradition or the clever parsing of precedent. It speaks with directness and power. The Jews cannot explain it, so they question its source. "How knoweth this man letters, having never learned?"',
        },
        {
          kind: 'commentary',
          id: 'john7-doctrine',
          html:
            'Jesus answers: "My doctrine is not mine, but his that sent me." His teaching is not original in the sense of self-generated. It flows from the Father. He is the messenger, the voice of the Father made audible. Yet this does not diminish Him. To hear His teaching is to hear the Father. To reject His teaching is to reject the one who sent Him.',
        },
        {
          kind: 'greek',
          id: 'john7-didache',
          title: 'Didache — Doctrine / Teaching',
          script: 'διδαχή',
          translit: '<strong>Didache</strong> · teaching; doctrine; instruction; what is taught',
          description:
            'Didache is more than information transmission. It is the communication of truth that shapes how one lives, the formation of the student into alignment with what is taught. When Jesus offers His didache, He offers not mere facts, but a transformation of understanding and being.',
        },
        {
          kind: 'commentary',
          id: 'john7-willing',
          html:
            '"If any man will do his will, he shall know of the doctrine." Here Jesus makes an epistemological claim: understanding comes through obedience. You do not first understand, then decide whether to obey. Rather, as you move to obey, understanding unfolds. Willingness is the prerequisite for comprehension. Faith and obedience open the door to knowledge.',
        },
        {
          kind: 'christ',
          id: 'john7-christ-sent',
          title: 'Christ Connection — The Word of the Father',
          html:
            'Jesus teaches with the authority of one sent by God. Every word He speaks comes from the Father. To encounter His teaching is to encounter divine wisdom, not human opinion. This is what gives His words their power and demands a response from those who hear.',
        },
        {
          kind: 'carry',
          html:
            'Jesus tells His questioners: "Judge not according to the appearance, but judge righteous judgment." Do not judge based on credentials or official approval. Judge based on the content and the Spirit. Does this teaching lead to truth? Does it align with righteousness? Let those be your measures.',
        },
        {
          kind: 'reflection',
          id: 'john7-know',
          prompt: 'When have you found that obedience led to understanding? Where might God be inviting you to move forward in faith before you fully comprehend?',
        },
      ],
    },

    /* ─── John 7:25–52 — Division over Jesus ────────────────────────────── */
    {
      ref: 'John 7:25–52',
      title: 'If Any Man Thirst, Let Him Come Unto Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(37, 'In the last day, that great day of the feast, Jesus stood and cried, saying, If any man thirst, let him come unto me, and drink.'),
            plain(38, 'He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.'),
            plain(39, '(But this spake he of the Spirit, which they that believe on him should receive: for the Holy Ghost was not yet given; because that Jesus was not yet glorified.)'),
            plain(40, 'Many of the people therefore, when they heard this saying, said, Of a truth this is the Prophet.'),
            plain(41, 'Others said, This is the Christ. But some said, Shall Christ come out of Galilee?'),
            plain(45, 'Then came the officers to the chief priests and Pharisees; and they said unto them, Why have ye not brought him?'),
            plain(46, 'The officers answered, Never man spake like this man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john7-thirst',
          html:
            'In the great day of the feast, the day of water-pouring ritual, Jesus makes a proclamation: "If any man thirst, let him come unto me, and drink." Thirst is the condition. It is the awareness of lack, the longing for something more. Jesus addresses the thirsty. He does not address the satisfied, the self-sufficient, the content. He offers Himself as drink to those who know they need.',
        },
        {
          kind: 'commentary',
          id: 'john7-living-water',
          html:
            '"He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water." The image is one of abundance flowing outward. To believe in Jesus is not merely to be filled for yourself. It is to become a source from which blessing flows to others. The Spirit, received by faith, becomes a river, not a pool. It moves, quickens, vivifies.',
        },
        {
          kind: 'greek',
          id: 'john7-potamoi',
          title: 'Potamoi — Rivers',
          script: 'ποταμοί',
          translit: '<strong>Potamoi</strong> · rivers; flowing water; abundance in motion',
          description:
            'Rivers, unlike pools or cisterns, are flowing, alive, dynamic. When the Spirit is given, it is not a static possession. It flows through you, renews, refreshes, reaches others. The Spirit is not contained. It moves wherever it will, like the wind.',
        },
        {
          kind: 'commentary',
          id: 'john7-division',
          html:
            'The response is division. Some say: "Of a truth this is the Prophet." Others: "This is the Christ." But some object: "Shall Christ come out of Galilee?" Their preconceived notions block recognition. They know where the Messiah should come from (Bethlehem, according to Scripture), and they have decided Jesus cannot be He. They mistake their expectations for truth.',
        },
        {
          kind: 'commentary',
          id: 'john7-officers',
          html:
            'The chief priests and Pharisees send officers to arrest Jesus. But the officers return without Him. When questioned, they do not give a report of violence resisted or escape enabled. They say simply: "Never man spake like this man." The officers, sent to condemn and capture, have been arrested instead by the words He spoke. They recognize something beyond their authority.',
        },
        {
          kind: 'christ',
          id: 'john7-christ-spirit',
          title: 'Christ Connection — The Source of Living Water',
          html:
            'Jesus is the source from which the Holy Spirit flows. Belief in Him leads to the giving of the Spirit, to transformation, to rivers of life flowing outward. He is not merely a moral teacher or prophet. He is the one through whom God&apos;s own Spirit is poured out upon the world.',
        },
        {
          kind: 'carry',
          html:
            'Are you thirsty? That thirst is not a sign of failure. It is the Spirit drawing you toward Jesus. Many block their own salvation by insisting on how salvation should look, what form the Savior should take. Jesus comes in unexpected ways. He breaks our categories. Will you come and drink, or will you hold to your preconceptions?',
        },
        {
          kind: 'reflection',
          id: 'john7-river',
          prompt: 'What thirst in your soul does only Christ can satisfy? If you drank of His water, how would rivers flow from you to others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If any man thirst, let him come unto me, and drink. Out of his belly shall flow rivers of living water. Never man spake like this man.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 7 · Study Guide',
  },

  hasHebrew: false,
};
