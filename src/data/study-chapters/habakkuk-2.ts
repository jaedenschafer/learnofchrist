import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Habakkuk 2 — The Just Shall Live by Faith
 *
 * "The just shall live by his faith." Habakkuk waits for God's answer on the
 * watchtower. God declares the certainty of judgment on the wicked. The earth
 * shall be filled with the knowledge of God's glory.
 */
export const HABAKKUK_2: RichChapterContent = {
  bookSlug: 'habakkuk',
  bookName: 'Habakkuk',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Habakkuk takes his place on the watchtower to wait for God&apos;s answer to his complaint. And God speaks. The vision is written: the wicked will be punished, but "the just shall live by his faith." This single sentence, repeated in Romans 1:17, Galatians 3:11, and Hebrews 10:38, becomes the foundation of the doctrine of justification by faith.',
    'The key word is "faith"—not confidence in a better outcome, but trust in God&apos;s character and purpose even when circumstances seem to contradict it. The just one—the righteous person—lives not by sight or by circumstance, but by faith in the One who controls all circumstances.',
  ],

  sections: [
    {
      ref: 'Habakkuk 2:1–4',
      title: 'The Vision and the Faithful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'I will stand upon my watch, and set me upon the tower, and will watch to see what he will say unto me, and what I shall answer when I am reproved.'),
            plain(2, 'And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it.'),
            plain(3, 'For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.'),
            plain(4, 'Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'habakkuk2-just',
          html:
            '"The just shall live by his faith." The contrast is between the proud person whose soul is lifted up and not upright, and the just person who lives by faith. The just one is characterized not by outward success or vindication, but by faith—by trust in God even when evidence seems to contradict God&apos;s control[res:bibleodyssey-habakkuk-vision][res:sefaria-habakkuk-2].',
        },
        {
          kind: 'hebrew',
          id: 'habakkuk2-emunah',
          title: 'Emunah — "Faith"',
          script: 'אֱמוּנָה',
          translit: '<strong>Emunah</strong> · faith; faithfulness; trust; steadfastness',
          description:
            'The Hebrew word "emunah" is closely related to "amen"—it means constancy, reliability, steadfast trust. It is not mere belief, but a trust that endures, that does not waver even when circumstances seem to justify wavering.',
        },
        {
          kind: 'christ',
          id: 'habakkuk2-christ-faith',
          title: 'Christ Connection — Justification by Faith',
          html:
            'Paul quotes Habakkuk 2:4 as the foundation of his theology in Romans 1:17 and Galatians 3:11. Through Christ, the just live by faith. We are justified not by our works or our understanding, but by our faith in Christ and His redemptive work on our behalf[res:intertextual-habakkuk-2-romans-1].',
        },
        {
          kind: 'carry',
          html:
            'The life that matters is not the life that understands everything or that is vindicated in earthly success. It is the life that trusts God even when understanding fails. The just one—the righteous person—lives by this faith.',
        },
        {
          kind: 'reflection',
          id: 'habakkuk2-faith',
          prompt:
            'Can you live by faith when circumstances seem to contradict what you believe God has promised? What would that look like?',
        },
      ],
    },

    {
      ref: 'Habakkuk 2:5–20',
      title: 'The Judgment of the Wicked and God&apos;s Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(5, 'Yea also, because he transgresseth by wine, he is a proud man, neither keepeth at home, who enlargeth his desire as hell, and is as death, and cannot be satisfied, but gathereth unto him all nations, and heapeth unto him all people:'),
            plain(6, 'Shall not all these take up a parable against him, and a taunting proverb against him, and say, Woe to him that increaseth that which is not his! how long? and to him that ladeth himself with thick clay!'),
            plain(7, 'Shall they not rise up suddenly that shall bite thee, and awake that shall vex thee? and thou shalt be for booties unto them.'),
            plain(8, 'Because thou hast spoiled many nations, all the remnant of the people shall spoil thee; because of men&apos;s blood, and for the violence of the land, of the city, and of all that dwell therein.'),
            plain(12, 'Woe to him that buildeth a town with blood, and stablisheth a city by iniquity!'),
            plain(14, 'For the earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'habakkuk2-woe',
          html:
            'Habakkuk pronounces woes on the wicked in language similar to the other prophets. Those who build on violence, who covet dishonest gain, who exploit others—they will be brought low. Their victims will rise up. They will be spoiled as they have spoiled others.',
        },
        {
          kind: 'commentary',
          id: 'habakkuk2-glory',
          html:
            '"The earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea." This is the final word. Not the triumph of the wicked, but the universal knowledge of God&apos;s glory. Every nation, every people, will know Him. This is the vision that sustains the faithful.',
        },
        {
          kind: 'christ',
          id: 'habakkuk2-christ-glory',
          title: 'Christ Connection — The Knowledge of God&apos;s Glory',
          html:
            'In Colossians 1:15, Paul calls Christ "the image of the invisible God." When the earth is filled with the knowledge of God&apos;s glory, it is through Christ. He is the revelation of God&apos;s nature and purpose. In Him, God&apos;s glory is made visible.',
        },
        {
          kind: 'carry',
          html:
            'Even when we do not understand God&apos;s purposes, even when judgment seems slow, the final word is certain: God&apos;s glory will cover the earth. This is the vision that gives meaning to our faith, our waiting, our trust.',
        },
        {
          kind: 'reflection',
          id: 'habakkuk2-glory-earth',
          prompt:
            'Imagine a world where every person knew God&apos;s glory. How would that change everything? How would it change you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The just shall live by his faith...The earth shall be filled with the knowledge of the glory of the Lord, as the waters cover the sea.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Habakkuk 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-habakkuk-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Habakkuk 2 · Texts & Translations',
      url: 'https://www.sefaria.org/Habakkuk.2',
      description: 'Primary sources on the declaration that the just shall live by faith and the future glory of God.',
    },
    {
      id: 'intertextual-habakkuk-2-romans-1',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Habakkuk 2:4 → Romans 1:17 — Justification by Faith',
      url: 'https://intertextual.bible/search?query=habakkuk+romans',
      description: 'The foundational verse on justification by faith, quoted directly by Paul as the heart of the gospel.',
    },
    {
      id: 'bibleodyssey-habakkuk-vision',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Vision and God&apos;s Faithfulness',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-habakkuk/',
      description: 'Study of Habakkuk&apos;s transformation from complaint to trust in God&apos;s final victory.',
    },
  ],

  hasHebrew: true,
};
