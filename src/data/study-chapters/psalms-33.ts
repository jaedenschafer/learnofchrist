import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 33 — Sing Unto Him a New Song
 *
 * "Sing unto him a new song; play skilfully with a loud noise." This psalm
 * begins with exultation and moves toward the deepest truth: "By the word of the
 * Lord were the heavens made; and all the host of them by the breath of his
 * mouth." The psalmist presents God as Creator and Sustainer, whose word brought
 * all things into being. For Christians, that Word is Christ, the Logos through
 * whom all things exist and in whom all things cohere.
 */
export const PSALMS_33: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 33,

  estimatedMinutes: { 5: 1, 10: 3, 15: 5 },
  intros: [
    'Psalm 33 is a song of exultation in God&apos;s creative power and His ongoing care for His people. The psalm calls for praise—singing, playing instruments, shouting for joy—and then explains why such praise is appropriate: God has made all things by His word. His eye is upon all who fear Him. His counsel stands forever. To understand God as Creator and Sustainer is to understand why praise is the only appropriate response.',
  ],

  sections: [
    {
      ref: 'Psalm 33:1–11',
      title: 'The Word That Creates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(1, 'Rejoice in the Lord, O ye righteous: for praise is comely for the upright.'),
            plain(2, 'Praise the Lord with harp: sing unto him with the psaltery and an instrument of ten strings.'),
            plain(3, 'Sing unto him a new song; play skilfully with a loud noise.'),
            plain(4, 'For the word of the Lord is right; and all his works are done in truth.'),
            plain(5, 'He loveth righteousness and judgment: the earth is full of the goodness of the Lord.'),
            plain(6, 'By the word of the Lord were the heavens made; and all the host of them by the breath of his mouth.'),
            plain(8, 'Let all the earth fear the Lord: let all the inhabitants of the world stand in awe of him.'),
            plain(9, 'For he spake, and it was done; he commanded, and it stood fast.'),
            plain(10, 'The Lord bringeth the counsel of the heathen to nought: he maketh the devices of the people of none effect.'),
            plain(11, 'The counsel of the Lord standeth for ever, the thoughts of his heart to all generations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms33-praise-comely',
          html: 'The psalm opens with a call to praise: "Rejoice in the Lord, O ye righteous: for praise is comely for the upright." Praise is not merely acceptable; it is beautiful, fitting, the natural response of the upright to God&apos;s goodness. And it is not whispered. It is sung with harps, with instruments, with a loud noise. Praise is meant to be expressed fully.',
        },
        {
          kind: 'hebrew',
          id: 'psalms33-dabar-adonai',
          title: 'Dabar Adonai — "Word of the Lord" (God&apos;s Utterance)',
          script: 'דְּבַר־יְהוָה',
          translit: '<strong>Dabar Adonai</strong> · the word of the Lord; God&apos;s utterance; His creative and sustaining power',
          description: 'The Hebrew phrase dabar Adonai refers not merely to God&apos;s spoken words, but to His powerful utterance that accomplishes His purposes. When God speaks, reality conforms to His word. This is the word that created the heavens and earth. This is the word that sustains all creation.',
        },
        {
          kind: 'commentary',
          id: 'psalms33-word-right',
          html: '"For the word of the Lord is right; and all his works are done in truth." God&apos;s word is not arbitrary or capricious. It is right, aligned with justice and truth. And all His works are done in truth. Creation itself displays God&apos;s character. To look at creation is to see God&apos;s righteousness made visible.',
        },
        {
          kind: 'commentary',
          id: 'psalms33-spake-done',
          html: '"For he spake, and it was done; he commanded, and it stood fast." The directness is stunning. God does not struggle to accomplish His will. He speaks, and reality obeys. This is not a god dependent on tools or forces outside himself. This is the God of absolute power, whose will is law, whose word is creation.',
        },
        {
          kind: 'christ',
          id: 'psalms33-christ-word',
          title: 'Christ Connection — The Word Made Flesh',
          html: 'John 1:1–3 reveals the deepest meaning: "In the beginning was the Word, and the Word was with God, and the Word was God. All things were made by him; and without him was not any thing made that was made." The Word that creates all things is Christ. He is the creative power that holds the universe together. And remarkably, that same Word "was made flesh, and dwelt among us" (John 1:14). The creator became creation to redeem creation.',
        },
        {
          kind: 'carry',
          html: 'To recognize God as the Creator who speaks all things into being is to understand that He can speak into being whatever He wills for you. His counsel stands forever. His thoughts toward you are not momentary or changing. They are fixed in eternity. You are not an accident of blind forces. You are the work of the Word.',
        },
        {
          kind: 'reflection',
          id: 'psalms33-word-power',
          prompt: 'How does knowing that Christ is the Word by which all things were created change how you understand your own existence? What does it mean that that same Word is with you, knows you, cares for you?',
        },
      ],
    },

    {
      ref: 'Psalm 33:12–22',
      title: 'God&apos;s Care for His People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(12, 'Blessed is the nation whose God is the Lord; and the people whom he hath chosen for his own inheritance.'),
            plain(13, 'The Lord looketh from heaven; he beholdeth all the children of men.'),
            plain(14, 'From the place of his habitation he looketh upon all the inhabitants of the earth.'),
            plain(15, 'He fashioneth their hearts alike; he considereth all their works.'),
            plain(18, 'Behold, the eye of the Lord is upon them that fear him, upon them that hope in his mercy.'),
            plain(20, 'Our soul waiteth for the Lord: he is our help and our shield.'),
            plain(21, 'For our heart shall rejoice in him, because we have trusted in his holy name.'),
            plain(22, 'Let thy mercy, O Lord, be upon us, according as we hope in thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms33-blessed-nation',
          html: '"Blessed is the nation whose God is the Lord; and the people whom he hath chosen for his own inheritance." The blessing is not material wealth or military might. It is being chosen by God, belonging to Him. A nation&apos;s true strength lies not in its resources, but in its relationship with God.',
        },
        {
          kind: 'commentary',
          id: 'psalms33-eye-upon',
          html: '"Behold, the eye of the Lord is upon them that fear him, upon them that hope in his mercy." God&apos;s attention is not turned away from His people. His eye is upon them. He watches not to condemn, but to care. He sees the trust they place in Him and responds with mercy.',
        },
        {
          kind: 'carry',
          html: 'The psalm teaches that in a world of uncertainty and chaos, there is one sure thing: God sees. He fashions hearts. He considers all works. He is our help and shield. The proper response is to wait for Him, to trust in His holy name, and to hope for His mercy. And in hoping for His mercy, we find it.',
        },
        {
          kind: 'reflection',
          id: 'psalms33-eye-upon-me',
          prompt: 'Do you live with the awareness that God&apos;s eye is upon you? Does that truth comfort you or trouble you? How might it change your daily life to know that you are always seen by One who loves you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Sing unto him a new song; play skilfully with a loud noise. By the word of the Lord were the heavens made; and all the host of them by the breath of his mouth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 33 · Study Guide',
  },

  hasHebrew: true,
};
