import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 49 — The Redemption of the Soul
 *
 * "None of them can by any means redeem his brother, nor give to God a ransom
 * for him: (For the redemption of their soul is precious, and it ceaseth for
 * ever)." Only Christ can pay the price of redemption. "He gave his life a
 * ransom for many" (Mark 10:45). A psalm about the one true redeemer.
 */
export const PSALMS_49: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 49,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 49 is a meditation on mortality and redemption. The psalmist addresses "all inhabitants of the world, both low and high, rich and poor." He has something to tell them, a wisdom[res:bible-odyssey-wisdom-theme] he wishes them to hear. And his message is stark: the rich cannot use their wealth[res:sefaria-psalms-49] to buy immortality. They cannot redeem their brothers. They cannot give to God a ransom for themselves. In the face of death, all their riches are useless.',
    'Yet the psalm does not end in despair. There is One who can redeem what wealth cannot. There is One who can give what the rich cannot pay. The psalmist writes: "God will redeem my soul from the power of the grave: for he shall receive me." Only God can pay the price of redemption. Only God can offer what the human soul truly needs. In Christ, this promise finds its complete fulfillment. He is the ransom.',
  ],

  sections: [
    {
      ref: 'Psalm 49:1–12',
      title: 'The Wealth That Fails',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(1, 'Hear this, all ye people; give ear, all ye inhabitants of the world:'),
            plain(2, 'Both low and high, rich and poor together.'),
            plain(3, 'My mouth shall speak of wisdom; and the meditation of my heart shall be of understanding.'),
            plain(5, 'Wherefore should I fear in the days of evil, when the iniquity of my heels shall compass me about?'),
            plain(6, 'They that trust in their wealth, and boast themselves in the multitude of their riches;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps49-wisdom-truth',
          html:
            'The wise take up their riddle. Now the turn comes—but God will redeem my soul[res:bibleodyssey-korah-singers].',
        },
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(7, 'None of them can by any means redeem his brother, nor give to God a ransom for him:'),
            plain(8, '(For the redemption of their soul is precious, and it ceaseth for ever:)'),
            plain(10, 'For he seeth that wise men die, likewise the fool and the brutish person perish, and leave their wealth to others.'),
            plain(11, 'Their inward thought is, that their houses shall continue for ever, and their dwelling places to all generations; they call them after their own names.'),
            plain(12, 'Nevertheless man being in honour abideth not: he is like the beasts that perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms49-hear',
          html:
            'The psalmist speaks to everyone: "both low and high, rich and poor together." The wisdom he offers is not for an elite. It is for all. The message is universal. And it is a message about mortality—about what happens when the ultimate crisis comes, when death approaches, when all the trappings of earthly life become irrelevant.',
        },
        {
          kind: 'hebrew',
          id: 'psalms49-hokhmah',
          title: 'Hokhmah — "Wisdom"',
          script: 'חָכְמָה',
          translit: '<strong>Hokhmah</strong> · wisdom; understanding; skill in living',
          description:
            'The psalmist offers hokhmah—not mere cleverness, but wisdom about how to live, about what truly matters, about where to place one&apos;s trust. This is the wisdom that comes from seeing truly.',
        },
        {
          kind: 'commentary',
          id: 'psalms49-evil-days',
          html:
            '"Wherefore should I fear in the days of evil?" The psalmist has something to protect him in the days of evil. And what is that thing? It is not his wealth—the psalm seems to assume he has some. But his trust is not in his wealth.',
        },
        {
          kind: 'commentary',
          id: 'psalms49-redeem',
          html:
            '"None of them can by any means redeem his brother, nor give to God a ransom for him." This is the crucial point. Wealth cannot purchase redemption. You cannot buy your brother&apos;s soul. You cannot pay God a price to spare a life. The redemption of the soul is too precious. It is beyond price. It cannot be bought.',
        },
        {
          kind: 'commentary',
          id: 'psalms49-ceaseth',
          html:
            '"For the redemption of their soul is precious, and it ceaseth for ever." The phrase "it ceaseth for ever" means that the chance for ransom, for redemption by human effort, is gone forever. Once a soul passes out of this world, no amount of money can bring it back. No wealth can redeem it. The time for redemption is now, in this life.',
        },
        {
          kind: 'commentary',
          id: 'psalms49-wise-die',
          html:
            '"For he seeth that wise men die, likewise the fool and the brutish person perish." The great leveler is death. Wisdom does not save from it. Foolishness does not hasten it. Both die. Both leave their wealth behind. Both are forgotten, or remembered only by the names they impressed upon houses and lands.',
        },
        {
          kind: 'reflection',
          id: 'psalms49-what-matters',
          prompt: 'What are you building, accumulating, or striving for that will ultimately be left behind? What is precious that cannot be purchased, that cannot be left to another?',
        },
      ],
    },

    {
      ref: 'Psalm 49:14–15',
      title: 'The Redeemed Soul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(14, 'Like sheep they are laid in the grave; death shall feed on them; and the upright shall have dominion over them in the morning; and their beauty shall consume in the grave from their dwelling.'),
            plain(15, 'But God will redeem my soul from the power of the grave: for he shall receive me. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms49-grave',
          html:
            'The rich and the foolish are "like sheep laid in the grave." Death is the shepherd, gathering them like a flock, leading them to the tomb. They are consumed. They are forgotten. Yet in the morning—and the psalmist seems to suggest an ultimate morning, an awakening—"the upright shall have dominion over them." The tables are turned. What matters in this life will be proven meaningless in the judgment.',
        },
        {
          kind: 'hebrew',
          id: 'psalms49-padah',
          title: 'Padah — "Redeem"',
          script: 'פָּדָה',
          translit: '<strong>Padah</strong> · to redeem; to buy back; to ransom',
          description:
            'Padah is the word used for redeeming a captive, for paying a ransom. God padahs the psalmist—He buys him back from death, from the grave, from the power of the enemy. This is not impersonal rescue. It is the action of One who values, who cherishes, who pays the price.',
        },
        {
          kind: 'commentary',
          id: 'psalms49-receive-me',
          html:
            '"But God will redeem my soul from the power of the grave: for he shall receive me." This is the turning point. While the wicked are laid in the grave, the righteous man&apos;s soul is redeemed by God. God does not leave him in death. God receives him. This receiving suggests welcome, embrace, continuation of relationship beyond the grave.',
        },
        {
          kind: 'christ',
          id: 'psalms49-christ-ransom',
          title: 'Christ Connection — The Ransom',
          html:
            'In Mark 10:45, Jesus says: "The Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." This is Psalm 49 fulfilled. Christ is the One who gives what no human wealth can purchase. He gives His own life. He pays the ransom that redeems the souls of all who believe. And He does not remain in the grave. His resurrection proves that He has power even over death itself. The One who redeems us cannot be held by death. Therefore, neither can we who are redeemed by Him.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 49 speaks a hard truth: your wealth cannot save you. Your status cannot save you. Your accomplishments cannot save you. But God can. God will. If you turn to Him, if you believe, if you place your trust not in riches but in the One who created riches, then God will redeem your soul. He will receive you. He will not leave you in the grave. This is not because you have earned it. It is because Christ has paid the price that you cannot pay.',
        },
        {
          kind: 'reflection',
          id: 'psalms49-receive',
          prompt: 'What would it mean to stop trusting in your own resources—your wealth, your wisdom, your efforts—and instead place yourself completely in God&apos;s hands? What would it take for you to truly believe that He will receive you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'None of them can by any means redeem his brother...But God will redeem my soul from the power of the grave: for he shall receive me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 49 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-49',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 49 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.49',
      description: 'Wisdom psalm on the futility of wealth with Jewish commentary.',
    },
    {
      id: 'bible-odyssey-wisdom-theme',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Wisdom Psalms',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms teaching wisdom through reflection on life and conduct.',
    },
    {
      id: 'bibleodyssey-korah-singers',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Sons of Korah',
      url: 'https://www.bibleodyssey.org/dictionary/korah/',
      description: 'SBL entry on the Korahite guild of temple singers and the psalms attributed to them.',
    },

  ],

  hasHebrew: true,
};
