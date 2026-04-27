import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 99 — The Lord Reigneth; Let the People Tremble
 *
 * "The Lord reigneth; let the people tremble." God&apos;s reign inspires awe and
 * reverence. "He is high above all the people." Yet He is not distant. "Moses
 * and Aaron among his priests, and Samuel among them that call upon his name."
 * God is approachable, not through our merit, but through those who have sought
 * Him, who have cried unto Him, and whom He has answered. The psalm concludes
 * with "Holy, holy, holy, is the Lord our God"—a precursor to the vision in
 * Isaiah and the worship in heaven.
 */
export const PSALMS_99: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 99,

  intros: [
    'Psalm 99 is the shortest of the great affirmations of God&apos;s sovereignty. Yet it is filled with theology. It speaks of God&apos;s greatness, His transcendence, His holiness. But it also speaks of His accessibility—through priests and intercessors, God can be approached. Moses, Aaron, and Samuel are named as those who called upon the Lord and were answered. They stand as witnesses that God hears and responds.',
    'The psalm culminates in "Holy, holy, holy, is the Lord our God"—a phrase that echoes through Scripture, culminating in the seraphim&apos;s cry in Isaiah&apos;s vision and in the worship of heaven itself. God&apos;s holiness is not merely His separation from sin, but His absolute transcendence, His otherness, His overwhelming greatness.',
  ],

  sections: [
    {
      ref: 'Psalm 99:1–9',
      title: 'Holy, Holy, Holy, Is the Lord Our God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 99,
          lines: [
            plain(1, 'The Lord reigneth; let the people tremble: he sitteth between the cherubims; let the earth be moved.'),
            plain(2, 'The Lord is great in Zion; and he is high above all the people.'),
            plain(3, 'Let them praise thy great and terrible name; For it is holy.'),
            plain(4, 'The king&apos;s strength also loveth judgment; thou dost establish equity, thou executest judgment and righteousness in Jacob.'),
            plain(5, 'Exalt ye the Lord our God, and worship at his footstool; for he is holy.'),
            plain(6, 'Moses and Aaron among his priests, and Samuel among them that call upon his name; they called upon the Lord, and he answered them.'),
            plain(7, 'He spake unto them in the cloudy pillar: they kept his testimonies, and the ordinance that he gave them.'),
            plain(8, 'Thou answeredst them, O Lord our God: thou wast a God that forgavest them, though thou tookest vengeance of their inventions.'),
            plain(9, 'Exalt the Lord our God, and worship at his holy hill; for the Lord our God is holy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms99-reigneth',
          html: '"The Lord reigneth; let the people tremble: he sitteth between the cherubims." Again, the affirmation of God&apos;s reign. But now the response is to tremble. Not with terror, but with awe, with reverence, with the recognition of God&apos;s awesome greatness. God sits between the cherubim—the throne of God is surrounded by the highest created beings, the guardians of holiness.',
        },
        {
          kind: 'commentary',
          id: 'psalms99-great-terrible',
          html: '"Let them praise thy great and terrible name; For it is holy." The name of God is great and terrible. Not terrible in the sense of evil, but awesome, overwhelming, inspiring both attraction and awe. It is holy—set apart, transcendent, pure.',
        },
        {
          kind: 'commentary',
          id: 'psalms99-judgment-equity',
          html: '"The king&apos;s strength also loveth judgment; thou dost establish equity." God&apos;s power is not arbitrary. It is directed toward judgment and equity. God loves justice. God establishes righteousness. The great King uses His strength not for domination, but for justice.',
        },
        {
          kind: 'commentary',
          id: 'psalms99-moses-aaron',
          html: '"Moses and Aaron among his priests, and Samuel among them that call upon his name; they called upon the Lord, and he answered them." These great leaders of Israel are named as witnesses. They called upon the Lord. And He answered. God is not so transcendent that He cannot be approached. He hears. He responds.',
        },
        {
          kind: 'commentary',
          id: 'psalms99-cloudy-pillar',
          html: '"He spake unto them in the cloudy pillar: they kept his testimonies." God spoke to these leaders. Not in a voice that all could hear, but in the pillar of cloud—the sign of His presence and guidance. They received His word. They kept His testimony.',
        },
        {
          kind: 'commentary',
          id: 'psalms99-holy',
          html: '"Exalt the Lord our God, and worship at his holy hill; for the Lord our God is holy." The refrain returns. The Lord is holy. Not once, but repeatedly, the psalm drives home this truth. Holiness is God&apos;s fundamental character. It is the reason for worship. It is the reason for trembling. It is the reason for praise.',
        },
        {
          kind: 'carry',
          html: 'Psalm 99 calls us to both fear and worship. To tremble at God&apos;s greatness. To be awed by His holiness. Yet also to approach Him, trusting that He hears, that He answers, that He is a God who forgives and guides.',
        },
        {
          kind: 'reflection',
          id: 'psalms99-holy-tremble',
          prompt: 'What does it mean for you to tremble before the holiness of God? How can you approach a God who is so awesome and yet so willing to hear your cry?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord reigneth; let the people tremble...Holy, holy, holy, is the Lord our God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 99 · Study Guide',
  },

  hasHebrew: false,
};
