import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 1 — Holiness in Babylon
 *
 * Four young men are taken captive to Babylon. The king commands they eat from
 * his table and drink his wine. But Daniel purposed in his heart that he would
 * not defile himself. He and his three friends request pulse—vegetables—instead.
 * After ten days, they appear fairer and fatter in flesh than all the children
 * which ate the portion of the king&apos;s meat. God gives them knowledge and skill
 * in all learning and wisdom. Daniel understands visions and dreams. They are
 * made rulers and princes.
 */
export const DANIEL_1: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /Daniel among the Exiles/i,
    caption: 'Daniel 1',
  },
  intros: [
    'In the third year of the reign of Jehoiakim king of Judah, Nebuchadnezzar king of Babylon comes to Jerusalem and lays siege to it. The Lord gives Jehoiakim into his hand. Nebuchadnezzar carries away the vessels of the house of God into the land of Shinar. And he commands his chief eunuch to bring certain of the children of Israel—of the king&apos;s seed and of the nobles—those in whom was no blemish, but well favored, skillful in wisdom, and cunning in knowledge. These captives are to be taught the learning and the tongue of the Chaldeans, and given a daily provision of the king&apos;s meat and wine.',
    'Among these captives is a young man named Daniel, and with him three companions: Hananiah, Mishael, and Azariah. The chief of the eunuchs gives them new names—Belteshazzar, Shadrach, Meshach, and Abednego. But Daniel purposed in his heart that he would not defile himself with the portion of the king&apos;s meat, nor with the wine which he drank. This is not a moment of rebellion. This is the beginning of a lifetime of faithfulness in a pagan kingdom, where the temptation to compromise will be constant and subtle.',
  ],

  sections: [
    {
      ref: 'Daniel 1:1–7',
      title: 'The Captives Are Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.'),
            plain(2, 'And the Lord gave Jehoiakim king of Judah into his hand, with part of the vessels of the house of God: which he carried into the land of Shinar to the house of his god: and he brought the vessels into the treasure house of his god.'),
            plain(3, 'And the king spake unto Ashpenaz the master of his eunuchs, saying, Bring certain of the children of Israel, and of the king&apos;s seed, and of the princes;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-faith-test',
          html: '<p>Daniel and friends refuse the royal food, choosing faithfulness over comfort. See how conviction matters even in exile.</p>[res:bibleodyssey-apocalyptic]',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'Children in whom was no blemish, but well favoured, and skilful in all wisdom, and cunning in knowledge, and understanding science, and such as had ability in them to stand in the king&apos;s palace: and whom they might teach the learning and the tongue of the Chaldeans.'),
            plain(5, 'And the king appointed them a daily provision of the king&apos;s meat, and of the wine which he drank: so nourishing them three years, that at the end thereof they might stand before the king.'),
            plain(6, 'Now among these were of the children of Judah, Daniel, Hananiah, Mishael, and Azariah:'),
            plain(7, 'Unto whom the prince of the eunuchs gave names: for he gave unto Daniel the name of Belteshazzar; and to Hananiah, of Shadrach; and to Mishael, of Meshach; and to Azariah, of Abednego.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel1-purpose',
          html: 'Nebuchadnezzar takes the best of Judah&apos;s youth—those without blemish, skilled in wisdom, able to learn the tongue of the Chaldeans. He renames them, integrating them into his court, intending to make them Babylonian in speech, learning, and custom. He offers them the abundance of his table. But Daniel, though young, though far from home, though stripped of his identity, makes a decision that will shape his entire life: he will not defile himself. This is not passive faith. This is active resistance. He chooses what he will eat. He chooses what he will not become[res:sefaria-daniel][res:sefaria-daniel-1].',
        },
        {
          kind: 'hebrew',
          id: 'daniel1-zamar',
          title: 'Zamar — "Purposed" (Purpose)',
          script: 'זָמַר',
          translit: '<strong>Zamar</strong> · to purpose; to determine; to resolve in the heart',
          description:
            'The word carries weight. To zamar is not merely to wish or to hope. It is to set one&apos;s heart with deliberate resolve. Daniel does not stumble into faithfulness. He purposes. He sets his will. He determines in advance that he will not compromise, not because the situation demands it, but because holiness demands it. This inner resolve becomes the foundation of all that follows.',
        },
        {
          kind: 'commentary',
          id: 'daniel1-defilement',
          html: 'What does it mean for Daniel to defile himself? The king&apos;s meat may have been sacrificed to idols. The wine may have been offered in pagan ceremonies. To partake would be to accept the king&apos;s religion, to bow to Babylonian gods. But the deeper issue is this: Daniel&apos;s body belongs to God, not to a human king. In the midst of captivity, he reclaims the only sovereignty he possesses—the sovereignty over his own choices, his own conscience, his own faithfulness.',
        },
      ],
    },

    {
      ref: 'Daniel 1:8–16',
      title: 'The Test of Pulse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'But Daniel purposed in his heart that he would not defile himself with the portion of the king&apos;s meat, nor with the wine which he drank: therefore he requested of the prince of the eunuchs that he might not defile himself.'),
            plain(9, 'Now God had brought Daniel into favour and tender love with the prince of the eunuchs.'),
            plain(10, 'And the prince of the eunuchs said unto Daniel, I fear my lord the king, who hath appointed your meat and your drink: for why should he see your faces worse liking than the children which are of your sort? then shall ye make me lose my head before the king.'),
            plain(11, 'Then said Daniel to Melzar, Prove thy servants, I beseech thee, ten days; and let them give us pulse to eat, and water to drink.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel-1-test-proof',
          html: 'Ten days pass. A test becomes a testimony. The four youths prove what faith can do: refuse unclean food, watch God provide, stand cleaner and stronger than those who ate from the king&apos;s table.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'Then let our countenances be looked upon before thee, and the countenance of the children that eat of the portion of the king&apos;s meat: and as thou seest, deal with thy servants.'),
            plain(13, 'So he consented to them in this matter, and proved them ten days.'),
            plain(14, 'And at the end of ten days their countenances appeared fairer and fatter in flesh than all the children which did eat the portion of the king&apos;s meat.'),
            plain(15, 'Thus Melzar took away the portion of their meat, and the wine that they should drink; and gave them pulse.'),
            plain(16, 'As for these four children, God gave them knowledge and skill in all learning and wisdom: and Daniel had understanding in all visions and dreams.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel1-request',
          html:
            'Notice what Daniel does not do: he does not announce his refusal. He does not rebuke the king or accuse him of impiety. Instead, he makes a humble request. He asks permission. He appeals to the chief eunuch&apos;s sense of justice. And then he proposes a test. Give us pulse—simple vegetables—for ten days. Then judge us by our appearance. This is not arrogance. This is faith expressed as a proposal. Daniel trusts that God will vindicate faithfulness, and he gives God room to work.',
        },
        {
          kind: 'christ',
          id: 'daniel1-christ-temple',
          title: 'Christ Connection — The Temple of the Holy Spirit',
          html:
            'In Daniel&apos;s refusal to defile his body lies a foreshadowing of Paul&apos;s declaration to the Corinthians: "Know ye not that your body is the temple of the Holy Ghost which is in you?" Daniel, in exile, far from the temple of stone in Jerusalem, becomes himself a living temple. Christ consecrates His body as the final temple, and in Him, every believer becomes a sanctuary where the Holy Spirit dwells. The holiness Daniel guards so carefully points to a deeper holiness—not the purity of ritual, but the purity of a heart and body offered wholly to God.',
        },
        {
          kind: 'carry',
          html:
            'The picture here is not of asceticism for its own sake. Daniel eats. He drinks. He lives fully. But he eats and drinks in a way that honors God rather than the king. The question for us is this: In what areas of our lives do we compromise without noticing? Where do we accept the portion the world offers us, dressing it up in religious language? Daniel&apos;s courage begins with a simple act of refusal, with the determination to let his body reflect his faith.',
        },
        {
          kind: 'reflection',
          id: 'daniel1-defile',
          prompt: 'What would it look like for you to "purpose in your heart" in one area of your life—where you are settling for the world&apos;s provision when God offers something better? What would a humble, courageous request look like in that situation?',
        },
      ],
    },

    {
      ref: 'Daniel 1:17–21',
      title: 'Knowledge and Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(17, 'As for these four children, God gave them knowledge and skill in all learning and wisdom: and Daniel had understanding in all visions and dreams.'),
            plain(18, 'Now at the end of the days that the king had said he should bring them in, then the prince of the eunuchs brought them in before Nebuchadnezzar.'),
            plain(19, 'And the king communed with them; and among them all was found none like Daniel, Hananiah, Mishael, and Azariah: therefore stood they before the king.'),
            plain(20, 'And in all matters of wisdom and understanding, that the king inquired of them, he found them ten times better than all the magicians and astrologers that were in all his realm.'),
            plain(21, 'And Daniel continued even unto the first year of king Cyrus.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel1-knowledge',
          html:
            'The promise unfolds. God gives these four not merely survival, but excellence. They are found "ten times better" than the king&apos;s magicians and astrologers. This is not because they are cleverer—it is because their minds are aligned with truth, undistorted by the compromise and self-deception that plagued the Babylonian wise men. And Daniel himself receives a special gift: understanding in all visions and dreams. This gift will become his greatest utility to the pagan king, and his deepest calling from God.',
        },
        {
          kind: 'commentary',
          id: 'daniel1-standing',
          html:
            'They "stood before the king"—this phrase echoes the language of the temple, where priests stood in God&apos;s presence to serve. In the king&apos;s palace, these faithful Hebrews fulfill a priestly function. They stand before power, yet they are not corrupted by it. They serve the king, yet they do not serve his gods. And their faithfulness in small things—in the choice of what to eat and drink—proves to be the foundation of their faithfulness in great things.',
        },
        {
          kind: 'carry',
          html:
            'The story of Daniel 1 teaches that holiness and excellence are not opposed. They are partners. When we refuse to compromise in the small choices—the quiet choices no one sees—we develop the character that stands firm when the stakes are highest. Daniel&apos;s refusal of the king&apos;s meat seems like a private matter. But it opens the door to his entire calling. This is how God works in us: through daily faithfulness, through the determination to honor Him in hidden things, excellence is born.',
        },
        {
          kind: 'reflection',
          id: 'daniel1-faithful',
          prompt: 'Daniel&apos;s faithfulness in the small choice led to excellence and influence. Where in your life could faithful, hidden choices lead to greater opportunities to honor God and serve others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Daniel purposed in his heart that he would not defile himself with the portion of the king&apos;s meat, nor with the wine which he drank.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 1 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-apocalyptic',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apocalyptic Literature',
      url: 'https://www.bibleodyssey.org/dictionary/apocalypse/',
      description: 'SBL entry on the apocalyptic genre exemplified by Daniel.',
    },
    {
      id: 'sefaria-daniel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel',
      url: 'https://www.sefaria.org/Daniel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-daniel-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 1 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Daniel.1',
      description: 'The Hebrew text of Daniel 1 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
