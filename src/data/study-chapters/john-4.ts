import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 4 — The Samaritan Woman at the Well
 *
 * Jesus travels through Samaria and stops at Jacob&apos;s well. A woman comes to
 * draw water at midday—unusual, likely to avoid others. Jesus asks for a drink.
 * She is surprised: Jews do not associate with Samaritans. Yet Jesus speaks to
 * her of living water, of a spring that wells up to eternal life. He reveals
 * that He knows her past—five husbands and now living with a man not her
 * husband. She runs to the town: "Come, see a man, which told me all things that
 * ever I did." The kingdom comes to those nobody else would approach.
 */
export const JOHN_4: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Jesus leaves Judea and travels through Samaria. In the heat of midday, exhausted from the journey, He sits at Jacob&apos;s well. A Samaritan woman comes to draw water. In that moment, cultural boundaries collide: Jews and Samaritans, man and woman, public and private. Yet Jesus initiates conversation. "Give me to drink." She is astonished. "How is it that thou, being a Jew, askest drink of me, which am a Samaritan woman?" The request breaks every protocol.',
    'Jesus begins to speak of water—not the ordinary water in the well, but living water, water that wells up to eternal life. The woman is intrigued but remains literal. She does not understand spiritual language. Yet Jesus persists. He reveals His knowledge of her life: five husbands, and now living with a man not her husband. The revelation, rather than driving her away, opens her. "Sir, I perceive that thou art a prophet." She asks about worship, about truth. And Jesus reveals Himself to her as the Messiah—the first such explicit declaration in John&apos;s gospel.',
  ],

  sections: [
    /* ─── John 4:1–26 — Living Water ───────────────────────────────────── */
    {
      ref: 'John 4:1–26',
      title: 'Living Water',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(5, 'Then cometh he to a city of Samaria, which is called Sychar, being near to the parcel of ground that Jacob gave to his son Joseph.'),
            plain(7, 'There cometh a woman of Samaria to draw water: Jesus saith unto her, Give me to drink.'),
            plain(10, 'Jesus answered and said unto her, If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water.'),
            plain(13, 'Jesus answered and said unto her, Whosoever drinketh of this water shall thirst again:'),
            plain(14, 'But whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life.'),
            plain(24, 'God is a Spirit: and they that worship him must worship him in spirit and in truth.'),
            plain(26, 'Jesus saith unto her, I that speak unto thee am he.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john4-samaria',
          html:
            'Samaria was hostile territory for Jews. The Samaritans were considered half-breeds and heretics, worshipping on Mount Gerizim rather than in Jerusalem. Most Jews would have avoided Samaria entirely or traveled through it quickly. Yet Jesus goes deliberately. He sits at Jacob&apos;s well—the well associated with Israel&apos;s patriarch, a place of history and covenant promise. There He meets not a dignitary or disciple, but a woman drawing water.',
        },
        {
          kind: 'commentary',
          id: 'john4-ask-drink',
          html:
            'Jesus asks the woman for a drink. A small request, yet it shatters boundaries. A Jewish man does not speak to a woman alone. A Jew does not ask a Samaritan for hospitality. Jesus violates the protocol. He makes Himself vulnerable—thirsty, dependent on her kindness. In doing so, He invites her into relationship. He asks. She can choose to give or refuse.',
        },
        {
          kind: 'greek',
          id: 'john4-hydor',
          title: 'Hydor — Water',
          script: 'ὕδωρ',
          translit: '<strong>Hydor</strong> · water; life-giving sustenance; cleansing',
          description:
            'Water appears throughout Scripture as a symbol of life, cleansing, and the Holy Spirit. In Isaiah, God offers "waters of life" to the thirsty. Jesus uses this imagery but points beyond the literal. The living water He offers is the Spirit, eternal life, transformation that wells up from within. It is not something you carry from outside, but a spring within your own being.',
        },
        {
          kind: 'commentary',
          id: 'john4-living-water',
          html:
            'Jesus speaks of living water—water that satisfies, that never leaves you thirsty. The well of Jacob is ancient; its water is good but temporary. Those who drink must return, again and again. But the water Jesus offers is a spring, welling up eternally. It becomes part of you, internal, perpetual. The woman is confused—she does not understand spiritual language—but she is drawn. She desires this water.',
        },
        {
          kind: 'commentary',
          id: 'john4-truth-spirit',
          html:
            '"God is a Spirit: and they that worship him must worship him in spirit and in truth." The woman raises the ancient controversy between Jews and Samaritans: where shall we worship? Jesus dissolves the question. Worship is not about place but about nature. God is Spirit. Those who worship must do so in spirit—with the whole inward being—and in truth—with authenticity, without pretense. This is the worship the Father seeks.',
        },
        {
          kind: 'christ',
          id: 'john4-christ-thirst',
          title: 'Christ Connection — The Spring of Life',
          html:
            'Jesus is the source of living water. To drink of Him is to receive the Spirit, to be satisfied in a way that ordinary satisfaction cannot match. But He offers it to the woman at the well—a Samaritan, a woman of questionable reputation, someone society had written off. The kingdom comes not to the righteous or the prominent, but to the thirsty, to those who know their need.',
        },
        {
          kind: 'carry',
          html:
            'Jesus begins by asking her for a drink. He makes Himself dependent, vulnerable. This is how He draws her in—not through demand or judgment, but through invitation to mutuality. In your own life, who are you called to reach out to in vulnerability? Whom has society isolated that you might approach?',
        },
        {
          kind: 'reflection',
          id: 'john4-thirst',
          prompt: 'What thirsts in your own soul that no amount of ordinary water can satisfy? Where is Christ offering you a spring that will never run dry?',
        },
      ],
    },

    /* ─── John 4:27–42 — The Woman&apos;s Testimony and Harvest ──────────────── */
    {
      ref: 'John 4:27–42',
      title: 'I Know That This Is Indeed the Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(28, 'The woman then left her waterpot, and went her way into the city, and saith to the men of the city,'),
            plain(29, 'Come, see a man, which told me all things that ever I did: is not this the Christ?'),
            plain(39, 'And many of the Samaritans of that city believed on him for the saying of the woman, which testified, He told me all that ever I did.'),
            plain(41, 'And many more believed because of his own word;'),
            plain(42, 'And said unto the woman, Now we believe, not because of thy saying: for we have heard him ourselves, and know that this is indeed the Christ, the Saviour of the world.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john4-woman-messenger',
          html:
            'The woman leaves her waterpot and runs into the city. She leaves behind the tool of her daily labor, the reason she came. She forgets her original purpose, so caught up is she in the revelation. She does not present herself as a teacher or prophet. She simply testifies: "Come, see a man, which told me all things that ever I did: is not this the Christ?" Her witness is raw, honest, and powerful. She invites others to come and see, as Philip invited Nathanael.',
        },
        {
          kind: 'commentary',
          id: 'john4-samaritan-faith',
          html:
            'The Samaritans, despised by Jews, excluded from the temple in Jerusalem, respond in faith. They have been reached by an outsider, a woman, through a simple invitation. They come to Jesus, spend time with Him, and believe not because of her testimony but because they have encountered Him. "Now we believe, not because of thy saying: for we have heard him ourselves."',
        },
        {
          kind: 'greek',
          id: 'john4-pisteuo',
          title: 'Pisteuo — Believe',
          script: 'πιστεύω',
          translit: '<strong>Pisteuo</strong> · to believe; to have faith; to trust; to place confidence in',
          description:
            'Pisteuo in John does not mean mere intellectual assent. It means to commit yourself, to trust, to stake your life on. The Samaritans believe—they entrust themselves to Jesus. Their belief grows from encounter, from relationship. The woman&apos;s initial testimony is a catalyst, but genuine faith requires their own direct engagement with Christ.',
        },
        {
          kind: 'commentary',
          id: 'john4-harvest',
          html:
            'As the disciples return from the city with food, Jesus speaks of a harvest: "Say not ye, There are yet four months, and then cometh harvest? behold, I say unto you, Lift up your eyes, and look on the fields; for they are white already to harvest." The Samaritans coming toward Jesus are the harvest. The fields are ripe. The hour is urgent. The work is not in the future but now.',
        },
        {
          kind: 'christ',
          id: 'john4-christ-saviour',
          title: 'Christ Connection — Saviour of the World',
          html:
            'The Samaritans confess: "this is indeed the Christ, the Saviour of the world." Not just a Jewish Messiah, but the Saviour of the entire world—including Samaritans, including the despised, including all who will believe. The gospel breaks all ethnic and cultural boundaries. Jesus is the Saviour of humanity, not of a chosen few.',
        },
        {
          kind: 'carry',
          html:
            'The woman&apos;s role teaches us about the power of simple testimony. She did not become a disciple or scholar before witnessing. She simply told what she had experienced. Her word was enough to bring others to encounter Jesus themselves. Your testimony—your honest account of what you have encountered—is a tool of spiritual harvest.',
        },
        {
          kind: 'reflection',
          id: 'john4-saviour',
          prompt: 'Who are the Samaritans in your world—those considered unlikely or unworthy of spiritual attention? How is Jesus calling you to reach across boundaries and invite them to encounter Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whosoever drinketh of the water that I shall give him shall never thirst. God is a Spirit: and they that worship him must worship him in spirit and in truth. This is indeed the Christ, the Saviour of the world.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 4 · Study Guide',
  },

  hasHebrew: false,
};
