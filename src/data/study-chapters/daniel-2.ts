import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 2 — The Stone Cut Without Hands
 *
 * Nebuchadnezzar dreams of a great image with a head of gold, chest of silver,
 * belly of brass, legs of iron, feet of iron and clay. A stone is cut without
 * hands and smites the image, breaking it to pieces. The stone becomes a great
 * mountain and fills the whole earth. Daniel interprets: kingdoms shall rise and
 * fall, but "the God of heaven shall set up a kingdom, which shall never be
 * destroyed." Christ is that stone—cut without hands, breaking all earthly powers,
 * filling all creation.
 */
export const DANIEL_2: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  opener: {
    matchTitle: /Susannah and the Elders/i,
    caption: 'Daniel 2',
  },
  intros: [
    'In the second year of his reign, Nebuchadnezzar dreams a dream that troubles his spirit and robs him of sleep. He summons all his magicians, astrologers, and sorcerers, demanding they tell him the dream and its interpretation. They reply that no man can reveal the king&apos;s secret except the gods. The king grows furious and decrees that all the wise men shall be slain.',
    'When the commandment goes out to slay the wise men of Babylon, Daniel and his companions are sought out. But Daniel asks for time and makes known to the king that there is a God in heaven who reveals secrets. He seeks his companions, and together they pray. And in the night, the secret is revealed to Daniel in a vision. The stone cut without hands becomes the image of all that is yet to unfold—a kingdom that cannot be shaken, that stands forever.',
  ],

  sections: [
    {
      ref: 'Daniel 2:31–35',
      title: 'The Dream Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(31, 'Thou, O king, sawest, and behold a great image. This great image, whose brightness was excellent, stood before thee; and the form thereof was terrible.'),
            plain(32, 'This image&apos;s head was of fine gold, his breast and his arms of silver, his belly and his thighs of brass,'),
            plain(33, 'His legs of iron, his feet part of iron and part of clay.'),
            plain(34, 'Thou sawest till that a stone was cut out without hands, which smote the image upon his feet that were of iron and clay, and brake them to pieces.'),
            plain(35, 'Then was the iron, the clay, the brass, the silver, and the gold, broken to pieces together, and became like the chaff of the summer threshingfloors; and the wind carried them away, that no place was found for them: and the stone that smote the image became a great mountain, and filled the whole earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel2-metals',
          html: 'The image is a vision of kingdoms. The head of gold—Babylon under Nebuchadnezzar, whose reign is glorious but finite. Silver, brass, iron, and finally iron mixed with clay—each represents a kingdom in succession. The metals grow stronger (iron is stronger than brass) but more fragile (clay cannot hold with iron). The progression shows that all earthly empires, no matter how mighty, are ultimately weak, divided against themselves, destined for collapse[res:babylon-archaeology].',
        },
        {
          kind: 'commentary',
          id: 'daniel2-stone',
          html: '"A stone was cut out without hands." This is no human craft. This is the work of God alone. The stone smites the image at its feet—not at the head, but at the foundation. And when it strikes, the whole image crumbles. Iron, clay, brass, silver, gold—all broken together like chaff. The image of human earthly power is revealed to be fragile, insubstantial, driven away by wind. But the stone becomes a great mountain, filling the whole earth. That which is made without hands endures forever[res:cyrus-cylinder].',
        },
      ],
    },

    {
      ref: 'Daniel 2:36–45',
      title: 'The Interpretation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(36, 'This is the dream; and we will tell the interpretation thereof before the king.'),
            plain(37, 'Thou, O king, art a king of kings: for the God of heaven hath given thee a kingdom, power, and strength, and glory.'),
            plain(38, 'And wheresoever the children of men dwell, the beasts of the field and the fowls of the heaven hath he given into thine hand, and hath made thee ruler over them all. Thou art this head of gold.'),
            plain(40, 'And whereas thou sawest iron mixed with miry clay, they shall mingle themselves with the seed of men: but they shall not cleave one to another, even as iron is not mixed with clay.'),
            plain(44, 'And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.'),
            plain(45, 'Forasmuch as thou sawest that the stone was cut out of the mountain without hands, and that it brake in pieces the iron, the brass, the clay, the silver, and the gold; the great God hath made known to the king what shall come to pass hereafter: and the dream is certain, and the interpretation thereof sure.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel2-sovereignty',
          html: 'Daniel does not hide the hard truth. He tells Nebuchadnezzar plainly: your glory is real, but it is given to you by the God of heaven. Your dominion is vast, but it will fall. The gold shall give way to silver, silver to brass, brass to iron, iron to clay. And when clay tries to hold with iron, when kingdoms grow too weak to support themselves, when pride reaches its peak and fractures—then the stone of God&apos;s kingdom will be cut without hands, and it shall break in pieces all these kingdoms, and it shall stand for ever[res:ishtar-gate].',
        },
        {
          kind: 'hebrew',
          id: 'daniel2-malkhuto',
          title: 'Malkhuto — "Kingdom" (Sovereignty)',
          script: 'מַלְכוּת',
          translit: '<strong>Malkhuto</strong> · kingdom; sovereignty; reign',
          description:
            'The kingdom that shall never be destroyed is not Israel, not Babylon, not any earthly kingdom. It is the kingdom of God. It belongs to no human king and no earthly power. It stands above all time and all nations, sovereign and eternal. When Jesus tells Nicodemus, "Except a man be born again, he cannot see the kingdom of God," He speaks of the very kingdom Daniel reveals here—not a kingdom to come only at the end of all things, but a kingdom that breaks in upon human history with divine power, destroying all rivals, and standing forever.',
        },
        {
          kind: 'christ',
          id: 'daniel2-christ-stone',
          title: 'Christ Connection — The Rock of Ages',
          html: 'Jesus quotes this prophecy of Himself. In Matthew 26:64, at His trial before the Sanhedrin, He tells the high priest, "Ye shall see the Son of man sitting on the right hand of power, and coming in the clouds of heaven." The Son of Man—the very phrase from Daniel 7—is the stone cut without hands. Christ is not carved from earthly matter. He is begotten of God, born of a virgin, fashioned by the hand of God alone. He strikes the kingdoms of this world and breaks them. He rises from the dead and becomes the foundation of a kingdom that cannot be shaken, that fills all the earth, that stands forever.',
        },
        {
          kind: 'carry',
          html: 'In the presence of the most powerful king on earth, Daniel declares that all earthly power is temporary. The gold fades. The silver grows dull. The brass corrodes. The iron rusts. The clay crumbles. Only that which is made by God, that which is cut without the hands of men, endures forever. What are you building your life upon? Upon clay and iron—upon things that will break in pieces? Or upon the Rock that cannot be shaken, the kingdom that shall never be destroyed?',
        },
        {
          kind: 'reflection',
          id: 'daniel2-kingdom',
          prompt: 'The stone cut without hands will break in pieces and consume all earthly kingdoms. What in your own life belongs to the kingdoms of this world, and what would it mean to build upon the kingdom of God instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The God of heaven shall set up a kingdom, which shall never be destroyed: and the kingdom shall not be left to other people, but it shall break in pieces and consume all these kingdoms, and it shall stand for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 2 · Study Guide',
  },  resources: [
    {
      id: 'babylon-archaeology',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylon Archaeology',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA9050',
      description: 'Cuneiform records and artifacts from Babylon under Nebuchadnezzar II.',
    },
    {
      id: 'cyrus-cylinder',
      kind: 'museum',
      source: 'British Museum',
      label: 'Cyrus Cylinder',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA90920',
      description: 'Persian edict of Cyrus authorizing return of exiled peoples (ca. 539 BCE), fulfilling Daniel&apos;s prophecy.',
    },
    {
      id: 'ishtar-gate',
      kind: 'museum',
      source: 'British Museum / Berlin Museum',
      label: 'Ishtar Gate of Babylon',
      url: 'https://www.britishmuseum.org/collection/search?q=ishtar+gate',
      description: 'Reconstructed gate from ancient Babylon, showing the city&apos;s magnificence in Daniel&apos;s era.',
    }
  ],
  hasHebrew: true,
};
