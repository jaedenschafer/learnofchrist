import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 1 — God Has Spoken Through His Son
 *
 * The epistle opens with a magnificent declaration: God has spoken. In times past
 * through prophets. Now in these last days through His Son. This Son is not merely
 * a messenger. He is "the brightness of his glory, and the express image of his person."
 * He upholds all things. He has purged our sins. And He is seated at the right hand
 * of God, exalted above all angels. Here, the supremacy of Christ is established.
 */
export const HEBREWS_1: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 1,

  intros: [
    'The letter to the Hebrews was written to Jewish believers struggling with their identity. They had left the temple, the priesthood, the rituals—the entire apparatus of Jewish religion. Was that right? Had they lost something essential? The author answers by taking them deeper into what those things meant. The Son is the true priesthood, the true sacrifice, the true temple. He did not abolish Judaism. He fulfilled it.',
    'The opening passage is poetry—a hymn to Christ&apos;s supremacy. Not as a later Christian invention, but as the unveiling of what Scripture itself always testified. The Son is the exact image of God&apos;s substance. Angels worship Him. He is the heir of all things. This is the foundation upon which the entire letter is built.',
  ],

  sections: [
    /* ─── Hebrews 1:1–4 — God&apos;s Final Word ───────────────────────────── */
    {
      ref: 'Hebrews 1:1–4',
      title: 'God Spoke Through His Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets,'),
            plain(2, 'Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds;'),
            plain(3, 'Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high;'),
            plain(4, 'Being made so much better than the angels, as he hath by inheritance obtained a more excellent name than they.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb1-sundry-times',
          html:
            '"God, who at sundry times and in divers manners spake." The revelation was progressive, varied, given through many prophets over many centuries. But it was all one voice—God&apos;s voice, preparing the world for something final. Not more revelation to come, but a culmination.',
        },
        {
          kind: 'greek',
          id: 'heb1-apaugasma',
          title: 'Apaugasma — Brightness, Radiance',
          script: 'ἀπαύγασμα',
          translit: '<strong>Apaugasma</strong> · brightness; radiance; reflection of light',
          description:
            'The Son is the apaugasma of God&apos;s glory—not a reflection that exists separately, but the very radiance that emanates from the source. This is not creating a distance between God and Christ. It is expressing how intimately they are one.',
        },
        {
          kind: 'commentary',
          id: 'heb1-express-image',
          html:
            '"The express image of his person." The Son does not merely reflect God. He is the exact imprint of God&apos;s being. The word (charagter) is like the die that stamps a coin. Just as the coin bears the exact image of the die, so the Son bears the exact character of God the Father.',
        },
        {
          kind: 'christ',
          id: 'heb1-christ-sustainer',
          title: 'Christ Connection — Sustaining All Things',
          html:
            'Jesus "upholds all things by the word of his power." At this very moment, the cosmos is sustained by His word. Not as an impersonal force, but through the active word of the incarnate Son. He is not distant from creation. He continuously holds it in being.',
        },
        {
          kind: 'carry',
          html:
            'God has spoken His final word in the Son. You have heard it. That word is addressed to you, not to a distant people in a distant time. And that word is: Christ Jesus is supreme. All things—angels, prophets, law, ritual—find their meaning in Him. What does it mean for you to live in light of this supremacy?',
        },
        {
          kind: 'reflection',
          id: 'heb1-supremacy',
          prompt: 'In what area of your life do you struggle to recognize Christ&apos;s supremacy? Where do you still cling to something else as ultimate?',
        },
      ],
    },

    /* ─── Hebrews 1:5–14 — Angels Worship Him ──────────────────────── */
    {
      ref: 'Hebrews 1:5–14',
      title: 'Let All the Angels of God Worship Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'For unto which of the angels said he at any time, Thou art my Son, this day have I begotten thee? And again, I will be to him a Father, and he shall be to me a Son?'),
            plain(6, 'And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him.'),
            plain(7, 'And of the angels he saith, Who maketh his angels spirits, and his ministers a flame of fire.'),
            plain(8, 'But unto the Son he saith, Thy throne, O God, is for ever and ever: a sceptre of righteousness is the sceptre of thy kingdom.'),
            plain(13, 'But to which of the angels said he at any time, Sit on my right hand, until I make thine enemies thy footstool?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb1-son-declared',
          html:
            'The author quotes Psalm 2: "Thou art my Son, this day have I begotten thee." This is not a claim that the Son came into existence at a particular moment. It is the declaration of His status. He is the Son, eternally, uniquely, in a way no angel can claim.',
        },
        {
          kind: 'greek',
          id: 'heb1-prototokos',
          title: 'Prototokos — Firstborn',
          script: 'πρωτότοκος',
          translit: '<strong>Prototokos</strong> · firstborn; preeminent; heir',
          description:
            'Firstborn does not mean created first. It means most honored, most entitled to inheritance, most preeminent. The Son is the firstborn—not in time but in status, the supreme heir of all things.',
        },
        {
          kind: 'commentary',
          id: 'heb1-worship-angels',
          html:
            '"Let all the angels of God worship him." This is the decisive statement. No angel is ever commanded to be worshipped. But the Son—the angels worship Him. This distinguishes Him absolutely from all created beings, no matter how exalted.',
        },
        {
          kind: 'christ',
          id: 'heb1-christ-throne',
          title: 'Christ Connection — Eternal King',
          html:
            'The author quotes Psalm 45: "Thy throne, O God, is for ever and ever." The Son is addressed as God. His throne is eternal. His rule is righteous. Not a temporary appointment, but an everlasting kingship. And His enemies will be made His footstool—an image of complete victory.',
        },
        {
          kind: 'carry',
          html:
            'You live in a cosmos sustained by Christ. You live in a kingdom ruled by Christ. You live in a history whose endpoint is determined by Christ. This means your anxieties about the future are addressed not to uncertainty but to the One who holds all things. Worship Him as the angels do.',
        },
        {
          kind: 'reflection',
          id: 'heb1-worship',
          prompt: 'What would it mean to worship Christ with the certainty and wholeness that the angels do? What holds you back?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 1 · Study Guide',
  },

  hasHebrew: false,
};
