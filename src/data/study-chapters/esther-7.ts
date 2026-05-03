import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 7 — Esther Exposes Haman; Haman Hanged
 *
 * The king and Haman come to the second banquet with Esther. The king asks again
 * what she desires, promising to grant it even to half his kingdom. Esther reveals
 * the plot: she and her people are sold to destruction. Haman, the adversary, has
 * conspired to annihilate them. The king rises in fury and leaves to the garden.
 * Haman, desperate, begs Esther for his life — but as he falls upon her couch,
 * the king returns and perceives assault. A chamberlain reveals Haman's gallows,
 * prepared for Mordecai, who once saved the king. The king commands: "Hang him
 * thereon." Haman is hanged on the gallows he built for another. His own device
 * becomes his destruction — a reversal that echoes Psalm 7:15–16 and foreshadows
 * the defeat of the adversary himself.
 */
export const ESTHER_7: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 7,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 10 },
  intros: [
    'The moment of revelation has come. Esther sits at table with King Ahasuerus and Haman, the man who set in motion the decree to destroy all the Jews in the kingdom. The king, still unaware of the plot, asks again at the second banquet: "What is thy petition?" For the second time, he promises to grant it, even to half his kingdom. The stage is set. Esther, who has prepared herself through fasting and prayer, must now speak the truth that will determine the fate of her people and the destiny of her enemy.',
    'This chapter is the dramatic climax of the book of Esther. It is a story of reversed fortune — the man who dug a pit for another falls into it himself; the gallows built for the innocent becomes the scaffold of the guilty; the plot to annihilate becomes the destruction of the plotter. And beneath it lies a pattern that echoes through Scripture: the overthrow of the adversary by the designs he meant for the righteous.',
  ],

  sections: [
    /* ─── Esther 7:1–6 — The Second Banquet: "What is thy petition?" ────── */
    {
      ref: 'Esther 7:1–6',
      title: 'The Second Banquet: What Is Thy Petition?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              1,
              'So the king and Haman came to banquet with Esther the queen.'
            ),
            plain(
              2,
              'And the king said again unto Esther on the second day at the banquet of wine, What is thy petition, queen Esther? it shall be granted thee: and what is thy request? it shall be performed, even to the half of the kingdom.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-repeats-promise',
          html:
            'The king has already asked this question once, at the first banquet. Esther declined to speak then. Now, at the second banquet, he asks again — and the urgency in his repetition suggests he is eager to grant her whatever she desires. The phrase "even to the half of the kingdom" is not to be taken literally, but it expresses the absolute nature of the promise: there is nothing he will not give her. [res:theoi-herodotus]',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              3,
              'Then Esther the queen answered and said, If I have found favour in thy sight, O king, and if it please the king, let my life be given me at my petition, and my people at my request:'
            ),
            plain(
              4,
              'For we are sold, I and my people, to be destroyed, to be slain, and to perish. But if we had been sold for bondmen and bondwomen, I had held my tongue, although the enemy could not countervail the king&apos;s damage.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esther-reveals-plot',
          html:
            'Esther speaks. She begins not by naming Haman, but by revealing the nature of the crime: destruction, slaughter, annihilation. She notes the irony: if her people had merely been sold into slavery, she might have endured it silently. But this is not a matter of slavery. This is genocide. The plot is designed not to profit the king materially, but to destroy him by taking from him the Jews who — as Mordecai once proved — serve his interests and welfare[res:sefaria-esther-7][res:bibleodyssey-esther-overview-7].',
        },
        {
          kind: 'carry',
          html:
            'There is a moment when silence becomes complicity. Esther has fasted and prepared herself not to secure her own safety, but to speak for those who cannot speak for themselves. She risks the king&apos;s anger, risks her own life, to name the threat. Sometimes our calling is to break silence and speak truth, not for our own vindication, but for the vindication of others.',
        },
        {
          kind: 'reflection',
          id: 'break-silence',
          prompt:
            'When have you faced a moment where you had to choose between safety and speaking truth for others? What gave you the courage to speak?',
        },
      ],
    },

    /* ─── Esther 7:7–10a — "The Adversary Is This Wicked Haman" ─────────── */
    {
      ref: 'Esther 7:7–10',
      title: 'The Adversary Is This Wicked Haman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              5,
              'Then the king Ahasuerus answered and said unto Esther the queen, Who is he, and where is he, that durst presume in his heart to do so?'
            ),
            plain(
              6,
              'And Esther said, The adversary and enemy is this wicked Haman. Then Haman was afraid before the king and the queen.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-seeks-enemy',
          html:
            'The king demands to know: Who is this man who dares to conspire against the crown? His anger is kindled. And Esther answers with directness: "The adversary and enemy is this wicked Haman." Five words — and they shatter the court&apos;s peace.',
        },
        {
          kind: 'hebrew',
          id: 'tsar-adversary',
          title: 'Tzar — "Adversary"',
          script: 'צַר',
          translit: '<strong>Tzar</strong> · adversary; enemy; one who oppresses',
          description:
            'The Hebrew word <em>tzar</em> does not merely mean an opponent. It carries the weight of oppression, of malevolence. The word appears in Scripture to describe those who war against the people of God — enemies not by chance, but by design. When Esther names Haman as <em>tzar</em>, she is naming him not merely as a political rival, but as one whose malice is directed against an entire people.',
        },
        {
          kind: 'commentary',
          id: 'haman-afraid',
          html:
            'Haman is afraid. He has been in control, secure in his position, confident in the king&apos;s favor. But in the moment that he is named, in the moment that his plot is revealed before the king and queen, his dominance shatters. Fear grips him. He sees his destruction coming.',
        },
        {
          kind: 'carry',
          html:
            'Wickedness loves darkness. It thrives in secrecy, in hidden schemes, in the spaces where truth is not spoken. But the moment truth is spoken aloud — the moment the plot is named before witnesses — the power of the wicked one crumbles into fear. This is the strength of testimony: to speak the truth in the presence of power and let power itself become the instrument of justice.',
        },
        {
          kind: 'reflection',
          id: 'name-the-truth',
          prompt:
            'What does it take to speak truth aloud in front of power? What changed for Haman the moment his plot was named?',
        },
      ],
    },

    /* ─── Esther 7:7–10b — The King's Wrath; Haman's Final Moment ────────── */
    {
      ref: 'Esther 7:7–10',
      title: "Haman Falls; the King&apos;s Judgment",
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              7,
              'And the king arising from the banquet of wine in his wrath went into the palace garden: and Haman stood up to make request for his life to Esther the queen; for he saw that there was evil determined against him by the king.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-wrath',
          html:
            'The king&apos;s anger is kindled. He rises from the table and goes into the palace garden — removing himself, perhaps, to wrestle with what he has heard, to consider the enormity of the betrayal. Haman, seeing that the king has turned from him, understands that he has fallen. He turns not to the king for mercy, but to Esther. He stands to make request for his life. It is a moment of desperate reversal.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              8,
              'Then the king returned out of the palace garden into the place of the banquet of wine; and Haman was fallen upon the bed whereon Esther was. Then said the king, Will he force the queen also before me in the house? As the word went out of the king&apos;s mouth, they covered Haman&apos;s face.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'fallen-on-bed',
          html:
            'The moment the king returns from the garden, he sees Haman fallen upon Esther&apos;s couch — whether in supplication or something more sinister, the king interprets it as assault. "Will he force the queen also before me in the house?" — the king&apos;s judgment is instant and final. Haman, who thought he could manipulate the king through the king&apos;s favor, has now given the king cause for absolute condemnation. In a single act, Haman has sealed his fate.',
        },
        {
          kind: 'commentary',
          id: 'face-covered',
          html:
            'The covering of Haman&apos;s face is a mark of shame and death. It signals that his judgment has been pronounced, that his standing as a man of honor is gone. He is already condemned.',
        },
        {
          kind: 'carry',
          html:
            'Our own schemes often become our undoing. Haman plotted to destroy; he becomes destroyed. He reached for power; he falls into disgrace. There is a mercy in this pattern — it is as if God says to us: the path you choose will be the path you walk. The hole you dig for another, you yourself may fall into. It is an invitation to lay down weapons, to seek peace, to cease from plotting.',
        },
        {
          kind: 'reflection',
          id: 'haman-falls',
          prompt:
            'How did Haman&apos;s own schemes and ambitions lead to his downfall? What does his fall teach you about the power of human pride?',
        },
      ],
    },

    /* ─── Esther 7:10 — Haman Hanged on His Own Gallows ───────────────────── */
    {
      ref: 'Esther 7:10',
      title: 'Hanged on His Own Gallows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(
              9,
              'And Harbonah, one of the chamberlains, said before the king, Behold also, the gallows fifty cubits high, which Haman had made for Mordecai, who had spoken good for the king, standeth in the house of Haman.'
            ),
            plain(
              10,
              'Then said the king, Hang him thereon. So they hanged Haman on the gallows that he had prepared for Mordecai. Then was the king&apos;s wrath pacified.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'harbonah-speaks',
          html:
            'A chamberlain speaks a crucial word. He reminds the king of the gallows — fifty cubits high, an enormous structure. And he names its purpose: it was built by Haman for Mordecai, who once saved the king from assassination. The king, learning this, understands not only Haman&apos;s crime against the Jews, but his crime against the king&apos;s own benefactor. The gallows becomes evidence of the full scope of Haman&apos;s wickedness.',
        },
        {
          kind: 'hebrew',
          id: 'etz-wood',
          title: 'Etz — "Wood" or "Tree"',
          script: 'עֵץ',
          translit: '<strong>Etz</strong> · wood; tree; gallows',
          description:
            'The Hebrew word <em>etz</em>, meaning wood or tree, is the root term for the gallows on which Haman is hanged. In the language of Scripture, the <em>etz</em> takes on deep significance: it is the tree of life in Eden, the tree of the covenant, and — in the New Testament — the <em>etz</em> becomes the Cross itself. Haman&apos;s device of death is made of wood. His own wooden instrument becomes his scaffold.',
        },
        {
          kind: 'hebrew',
          id: 'shavah-countervail',
          title: 'Shavah — "Countervail" or "Equivalent"',
          script: 'שָׁוָה',
          translit: '<strong>Shavah</strong> · to countervail; to equal; to be equivalent',
          description:
            'In verse 4, Esther notes that if her people had been sold as slaves, "the enemy could not countervail the king&apos;s damage" — the loss would not be worth what the king would gain. The Hebrew <em>shavah</em> speaks to equivalence, to balance. But in the end, there is no balance for Haman. His life becomes the payment for his crimes. Justice is not balanced; it is absolute.',
        },
        {
          kind: 'commentary',
          id: 'hang-him-thereon',
          html:
            'The king&apos;s command is swift: "Hang him thereon." And so Haman is executed on the very gallows he had built for Mordecai. This is the moment of perfect irony — the instrument of death prepared for the innocent becomes the instrument of judgment for the guilty. Haman, the architect of his own destruction, hangs on his own device.',
        },
        {
          kind: 'christ',
          id: 'haman-psalm-7',
          title: 'Christ Connection — The Pit Prepared for Another',
          html:
            'Haman dug a pit; he fell into it himself. This pattern echoes Psalm 7:15–16: "He made a pit, and digged it, and is fallen into the ditch which he made. His mischief shall return upon his own head." The psalmist celebrates this reversal of fortune — the designs of the wicked become their own condemnation. In the New Testament, this pattern reaches its ultimate fulfillment. Satan, the great adversary, plotted to destroy the Son of God through the Cross. But the Cross, meant for death, became the instrument of Satan&apos;s defeat (Hebrews 2:14). The device prepared for the righteous — for Christ — became the means of the adversary&apos;s overthrow. In Revelation 20:10, we see the final judgment: "And the devil that deceived them was cast into the lake of fire and brimstone." The enemy falls into the pit of his own making. Christ, like Mordecai, is vindicated. And those who stood against Him find themselves standing on the scaffold they built.',
        },
        {
          kind: 'commentary',
          id: 'wrath-pacified',
          html:
            'The text ends with a simple, powerful note: "Then was the king&apos;s wrath pacified." Justice has been done. The king&apos;s anger, kindled by the revelation of the plot against the Jews, finds its satisfaction in Haman&apos;s execution. The story moves toward resolution. But more than that — the wrath of the king becomes, in this moment, the instrument of God&apos;s protection for His people.',
        },
        {
          kind: 'carry',
          html:
            'There is a deep truth here: the plans we make against others often reveal our own character. Haman built a gallows fifty cubits high — an act of such arrogance, such confidence in his own power, that he felt free to broadcast his enmity. He did not hide it. He displayed it. And in that display, he revealed the corruption of his heart. When we scheme, when we plot against others, we are writing our own judgment. God is not fooled by hidden malice. And often, as with Haman, the very devices we prepare become the means of our own undoing.',
        },
        {
          kind: 'reflection',
          id: 'pit-own-making',
          prompt:
            'What did Haman&apos;s execution on his own gallows reveal about the consequences of his pride and malice? How does the reversal of fortune comfort you when you face those who plot against you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Esther 7',
    quote:
      'Haman built a gallows for the innocent and fell upon it himself. His own device became his judgment. In this reversal, we see a pattern that echoes throughout Scripture: the plot of the adversary becomes the means of his own defeat.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 7 · Study Guide',
  },

  resources: [
    {
      id: 'theoi-herodotus',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Herodotus on Xerxes I',
      url: 'https://www.theoi.com/Text/HerodotusHistories.html',
      description: 'Herodotus accounts of Xerxes, Persian court intrigues, and royal authority.',
    },
    {
      id: 'sefaria-esther-7',
      kind: 'study',
      source: 'Sefaria',
      label: 'Esther 7 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Esther.7',
      description: 'The Hebrew text of Esther 7 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-esther-overview-7',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Esther — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/esther/',
      description: 'Open-access SBL essay on the historical and literary setting of Esther.',
    },

  ],
};
