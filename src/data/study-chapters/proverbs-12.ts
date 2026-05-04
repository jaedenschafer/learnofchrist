import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 12 — A Righteous Man Regards the Life of His Beast
 *
 * The chapter includes one of the most beautiful of all proverbs: "A righteous
 * man regardeth the life of his beast: but the tender mercies of the wicked are
 * cruel." Righteousness extends even to the innocent creatures under our care.
 * The chapter also emphasizes the power of words: "The lip of truth shall be
 * established for ever; but a lying tongue is but for a moment."
 */
export const PROVERBS_12: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  topicTags: ['wisdom', 'righteousness', 'folly', 'integrity'],
  opener: {
    topical: true,
    caption: 'Proverbs 12',
  },
  intros: [
    'The twelfth chapter continues the collection of sayings, now focusing on the reach of righteousness—how it extends not only to human relationships but to all of creation. It emphasizes the power of truth-telling and the destructiveness of deceit. And it insists that righteousness is not confined to grand gestures, but shows itself in small kindnesses, in the care we give to those under our authority.',
    'One saying in particular stands out for its compassion: "A righteous man regardeth the life of his beast." This is a radical claim in the ancient world, where animals were often seen as mere property. But Proverbs sees that true righteousness extends to those who are defenseless, including the creatures we depend upon.',
  ],

  sections: [
    {
      ref: 'Proverbs 12:1–15',
      title: 'Learning, Wisdom, and the Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Whoso loveth instruction loveth knowledge: but he that hateth reproof is brutish.'),
            plain(2, 'A good man obtaineth favour of the Lord: but a man of wicked devices will he condemn.'),
            plain(3, 'A man shall not be established by wickedness: but the root of the righteous shall not be moved.'),
            plain(4, 'A virtuous woman is a crown to her husband: but she that maketh ashamed is as rottenness in his bones.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12-mid-tongue-roots',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'The thoughts of the righteous are right: but the counsels of the wicked are deceit.'),
            plain(6, 'The words of the wicked are to lie in wait for blood: but the mouth of the upright shall deliver them.'),
            plain(7, 'The wicked are overthrown, and are not: but the house of the righteous shall stand.'),
            plain(8, 'A man shall be commended according to his wisdom: but he that is of a froward heart shall be despised.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12-wisdom-reproach',
          html: 'Love of instruction reveals your nature as human; hatred of reproof reveals brutishness. The righteous are grounded and cannot be moved; the wicked are overthrown. Wisdom brings commendation; a froward heart brings despising.[res:sefaria-proverbs-12]',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'He that is despised, and hath a servant, is better than he that honoureth himself, and lacketh bread.'),
            plain(10, 'A righteous man knoweth the soul of his beast: but the tender mercies of the wicked are cruel.'),
            plain(11, 'He that tilleth his land shall be satisfied with bread: but he that followeth vain persons is void of understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12b-mid-labor-soul',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(12, 'The wicked desireth the net of evil men: but the root of the righteous yieldeth fruit.'),
            plain(13, 'The wicked is snared by the transgression of his lips: but the just shall come out of trouble.'),
            plain(14, 'A man shall be satisfied with good by the fruit of his mouth: and the recompence of a man&apos;s hands shall be rendered unto him.'),
            plain(15, 'The way of a fool is right in his own eyes: but he that hearkeneth unto counsel is wise.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12-love-instruction',
          html: 'The chapter opens with a fundamental claim: "Whoso loveth instruction loveth knowledge: but he that hateth reproof is brutish." Those who are open to being taught, who welcome correction as an opportunity to learn, show themselves to be human in the highest sense. Those who refuse correction reveal themselves to be brutish, animal-like, closed to growth.',
        },
        {
          kind: 'hebrew',
          id: 'prov12-yada',
          title: 'Yada — "Know" (Recognize, Care For)',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know; to recognize; to care for; to have intimate knowledge',
          description: 'The word in verse 10—"A righteous man knoweth the soul of his beast"—suggests not mere knowledge about the animal but intimate care, recognition of its needs, regard for its life.',
        },
        {
          kind: 'commentary',
          id: 'prov12-beast-soul',
          html: 'Verse 10 makes an extraordinary claim about the reach of righteousness: "A righteous man knoweth the soul of his beast: but the tender mercies of the wicked are cruel." The righteous person recognizes that even the animals under their care have souls, have lives that matter. But the tender mercies of the wicked are themselves cruel—what they call mercy is actually the absence of real care, born not from love but from indifference.',
        },
        {
          kind: 'carry',
          html: 'Righteousness extends to the small things. It extends to those without power, without voice, without the ability to advocate for themselves. The way you treat the defenseless—whether human or animal—reveals what your righteousness actually consists of. Are you truly righteous when no one is watching? That is the question Proverbs poses.',
        },
        {
          kind: 'reflection',
          id: 'prov12-righteousness-reach',
          prompt: 'How far does your righteousness extend? Are you kind and just only when it costs you something? How do you treat those who cannot repay your kindness?',
        },
      ],
    },

    {
      ref: 'Proverbs 12:16–28',
      title: 'The Lip of Truth and the Life That Follows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(16, 'A fool&apos;s wrath is presently known: but a prudent man concealeth shame.'),
            plain(17, 'He that speaketh truth sheweth forth righteousness: but a false witness deceit.'),
            plain(18, 'There is that speaketh like the piercings of a sword: but the tongue of the wise is health.'),
            plain(19, 'The lip of truth shall be established for ever: but a lying tongue is but for a moment.'),
            plain(20, 'Deceit is in the heart of them that imagine evil: but to the counsellors of peace is joy.'),
            plain(21, 'There shall no evil happen to the just: but the wicked shall be filled with mischief.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12-truth-permanence',
          html: 'The first section establishes the power and permanence of truth. "The lip of truth shall be established for ever: but a lying tongue is but for a moment." Truth endures because it is rooted in reality itself. Lies are fleeting, temporary, eventually exposed. Words can wound like a sword or heal like medicine. But true speech shows forth righteousness, while false witness spreads deceit. Truth-telling is not neutral—it creates the conditions for justice and peace.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(22, 'Lying lips are abomination to the Lord: but they that deal truly are his delight.'),
            plain(23, 'A prudent man concealeth knowledge: but the heart of fools proclaimeth foolishness.'),
            plain(24, 'The hand of the diligent shall bear rule: but the slothful shall be under tribute.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12c-mid-diligent-rule',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(25, 'Heaviness in the heart of man maketh it stoop: but a good word maketh it glad.'),
            plain(26, 'The righteous is more excellent than his neighbour: but the way of the wicked seduceth them.'),
            plain(27, 'The slothful man roasteth not that which he took in hunting: but the substance of a diligent man is precious.'),
            plain(28, 'In the way of righteousness is life; and in the pathway thereof there is no death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov12-truth-established',
          html: 'One of the most profound sayings about truth: "The lip of truth shall be established for ever: but a lying tongue is but for a moment." Truth has permanence. It endures. It is rooted in reality itself and cannot be shaken. But lies are fleeting. They have no foundation. They may seem to work for a time, but they cannot stand. Eventually, the truth emerges and the lie is revealed.',
        },
        {
          kind: 'commentary',
          id: 'prov12-sword-health',
          html: 'Verse 18 captures the power of words: "There is that speaketh like the piercings of a sword: but the tongue of the wise is health." Words can wound deeply. But wise words heal. The tongue can cut or cure. Which will yours be?',
        },
        {
          kind: 'commentary',
          id: 'prov12-heaviness-good-word',
          html: 'A gentle verse: "Heaviness in the heart of man maketh it stoop: but a good word maketh it glad." Sometimes what someone needs is not advice or correction, but a good word—a word of affirmation, of encouragement, of belief in them. Such words have power to lift the heavy heart.',
        },
        {
          kind: 'christ',
          id: 'prov12-christ-truth',
          title: 'Christ Connection — Christ as Truth',
          html: 'Jesus declares in John 14:6, "I am the way, the truth, and the life." The truth that Proverbs insists will be established forever finds its ultimate expression in Christ. His truth cannot be shaken. His word endures. To speak truth is to align oneself with the one who is Truth itself.',
        },
        {
          kind: 'carry',
          html: 'The chapter promises something stunning: "In the way of righteousness is life; and in the pathway thereof there is no death." This is not mere promise of a long life or physical safety. It is a promise that the way of righteousness is the way of life itself—of authenticity, of alignment with reality, of peace. The way of deception is the way of death, even if it takes time for that death to manifest.',
        },
        {
          kind: 'reflection',
          id: 'prov12-truth-tongue',
          prompt: 'Are you building your life on truth or on deception? What lies are you still telling—to others or to yourself? What would it look like to align your words entirely with truth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A righteous man regardeth the life of his beast...The lip of truth shall be established for ever; but a lying tongue is but for a moment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 12 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 12',
      url: 'https://www.sefaria.org/Proverbs.12',
      description: 'Sefaria open-access source text and translations for Proverbs 12.',
    },
    {
      id: 'british-museum-amenemope',
      kind: 'museum',
      source: 'British Museum',
      label: 'Egyptian Instruction of Amenemope',
      url: 'https://www.britishmuseum.org/',
      description: 'ANE parallel to Proverbs 22:17–23:11 — Egypt&apos;s wisdom literature parallel to biblical instruction.',
    },
    {
      id: 'cambridge-up-proverbs-wisdom',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Proverbs and Ancient Near Eastern Wisdom',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly analysis of Proverbs within ANE wisdom tradition.',
    },
  ],

  hasHebrew: true,
};
