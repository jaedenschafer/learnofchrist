import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 8 — The Glory of God and the Smallness of Man
 *
 * "O Lord our Lord, how excellent is thy name in all the earth!" David lifts his
 * eyes to heaven and is seized by wonder. How is it that the God whose glory is
 * declared by the stars, whose majesty fills the cosmos, ever turns His attention
 * to human beings? "What is man, that thou art mindful of him?" Yet God does. He
 * has given humanity dominion over creation. He has crowned us with glory and
 * honour. Christ is the fulfillment of this psalm—the Son of Man elevated above
 * all things.
 */
export const PSALMS_8: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 8,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 8 is a psalm of cosmological wonder. David stands in creation and is struck by a paradox. The God whose name is excellent in all the earth, whose glory is above the heavens, whose power is reflected in every star and storm—this God is mindful of humanity. Not distant. Not remote. Mindful. Aware. Attentive. How can such a vast God care for such small creatures?',
    'The psalm answers with staggering affirmation. God has given humanity dominion. He has crowned us with glory and honour. He has placed all things under our feet. This is not human achievement. This is divine gift. From beginning to end, the psalm brackets human dignity with wonder at the God who bestows it.',
  ],

  sections: [
    {
      ref: 'Psalm 8:1–4',
      title: 'The Excellence of God&apos;s Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'O Lord our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.'),
            plain(
              2,
              'Out of the mouth of babes and sucklings hast thou ordained strength against thine enemies, that thou mightest still the enemy and the avenger.',
            ),
            plain(3, 'When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained;'),
            plain(4, 'What is man, that thou art mindful of him? or the son of man, that thou visitest him?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps8-excellent',
          html:
            'The psalm opens with direct address: "O Lord our Lord." The doubled name emphasizes that God is not merely the God of the cosmos but the God of this people. His name is "excellent"—it stands above all other names. It is known and praised throughout the earth. Yet even this falls short. His glory exceeds the heavens themselves. His majesty cannot be contained.',
        },
        {
          kind: 'hebrew',
          id: 'ps8-shem',
          title: 'Shem — "Name"',
          script: 'שֵׁם',
          translit: '<strong>Shem</strong> · name; reputation; being; essence',
          description:
            'In Hebrew thought, a name is not merely a label. It is the person. God&apos;s name is His reputation, His character made known. When the psalmist praises God&apos;s name, he is praising God Himself—His revealed character, His excellence, His nature.',
        },
        {
          kind: 'commentary',
          id: 'ps8-babes',
          html:
            'Then an unexpected turn: God has ordained strength "out of the mouth of babes and sucklings." The weakest creatures—those who cannot yet speak clearly, who cannot defend themselves—become vehicles of God&apos;s strength against His enemies. This is the paradox of the gospel. Power appears where the world sees only weakness.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s strength is not displayed in your credentials or your eloquence. It is displayed when you—aware of your own weakness—trust in God and let His power work through you. The simplicity of a child&apos;s faith can still the enemy where sophisticated arguments cannot.',
        },
      ],
    },

    {
      ref: 'Psalm 8:5–9',
      title: 'What Is Man?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(5, 'For thou hast made him a little lower than the angels, and hast crowned him with glory and honour.'),
            plain(6, 'Thou madest him to have dominion over the works of thy hands; thou hast put all things under his feet:'),
            plain(7, 'All sheep and oxen, yea, and the beasts of the field;'),
            plain(8, 'The fowl of the air, and the fish of the sea, and whatsoever passeth through the paths of the seas.'),
            plain(9, 'O Lord our Lord, how excellent is thy name in all the earth!'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps8-heavens',
          html:
            'David looks up. The heavens speak of God&apos;s power. The work of His fingers—as if the cosmos is merely the intricate craftsmanship of One whose hand has shaped it. The moon and stars, ordained by God, spin in their courses. Against this vastness, the question comes unbidden: "What is man?" Man is small. Man is fragile. Man is temporary. Yet God is mindful of him.',
        },
        {
          kind: 'commentary',
          id: 'ps8-visitest',
          html:
            'The repetition deepens the question. Not only is God mindful. God visits. He turns His attention toward humanity. He acts on His care. This is the mystery the psalm keeps returning to: How is the infinite God aware of the finite human? Yet He is. And His awareness is not distant. It is intimate.',
        },
        {
          kind: 'commentary',
          id: 'ps8-little-lower',
          html:
            'The answer: God has made humanity only "a little lower than the angels." This is startling. We stand between beasts and angels. Yet God has crowned us with "glory and honour." Not earned. Bestowed. God looks at the human being and sees worth, dignity, majesty. This is what it means to be made in God&apos;s image.',
        },
        {
          kind: 'commentary',
          id: 'ps8-dominion',
          html:
            'More: God has given humanity dominion. Not exploitation. Dominion—a caring authority over creation. Sheep and oxen, beasts and birds, fish and sea creatures—all are placed under human governance. This is the mandate given to Adam in Genesis, reaffirmed here in the Psalms. Humanity stands as a kind of regent over creation, bearing responsibility for it.',
        },
        {
          kind: 'christ',
          id: 'ps8-christ-son-of-man',
          title: 'Christ Connection — The Son of Man Exalted',
          html:
            'Hebrews 2:6–9 quotes Psalm 8 and applies it directly to Christ. "Thou hast put all things in subjection under his feet." The writer explains that Jesus, in His incarnation, was "made a little lower than the angels" but is now "crowned with glory and honour." Christ is the true Son of Man who perfectly fulfills the dominion promised in the psalm. And through Him, believers are seated in heavenly places, sharing in His exaltation.',
        },
        {
          kind: 'reflection',
          id: 'ps8-mindful',
          prompt: 'How does it change your day to know that the God who hung the stars is mindful of you? What does dominion over creation mean for how you treat the earth and its creatures?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Lord our Lord, how excellent is thy name in all the earth! What is man, that thou art mindful of him?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 8 · Study Guide',
  },

  hasHebrew: true,
};
