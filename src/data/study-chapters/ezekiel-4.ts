import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 4 — Sign-Acts of the Siege
 *
 * God commands Ezekiel to perform a remarkable and grueling act: he must
 * recreate the siege of Jerusalem in miniature. He takes a tile, draws the
 * city, builds siege works around it. Then he must lie on his side — 390 days
 * for Israel's iniquity, then 40 days for Judah's. Prophecy is not mere words.
 * It is embodied. It is performed. Ezekiel becomes a living sign to the exiles.
 */
export const EZEKIEL_4: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  topicTags: ['judgment', 'glory', 'hope', 'second-coming'],
  opener: {
    topical: true,
    caption: 'Ezekiel 4',
  },
  intros: [
    'God calls prophets to proclaim truths that are difficult to hear. Sometimes the words alone are not enough. God calls them to embody the truth, to make it visible, to turn their very bodies into sermons. Ezekiel is commanded to take a tile and draw Jerusalem upon it. He builds siege works around it — a miniature model of the disaster about to fall. Then comes the harder command: he must lie on his side for 430 days, enacting the weight of Jerusalem&apos;s sin and judgment. This is prophecy of a visceral kind. The people who see Ezekiel lying on his side, unable to move, will understand in their bones what is coming: the city besieged, the people pinned down, unable to escape. This is the reality of captivity made flesh.',
  ],

  sections: [
    {
      ref: 'Ezekiel 4:1–8',
      title: 'The Prophetic Model',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Thou also, son of man, take thee a tile, and lay it before thee, and pourtray upon it the city, even Jerusalem:'),
            plain(2, 'And lay siege against it, and build a fort against it, and cast a mount against it; set the camp also against it, and set battering rams against it round about.'),
            plain(3, 'Moreover take thou unto thee an iron pan, and set it for a wall of iron between thee and the city: and set thy face against it, and it shall be besieged, and thou shalt lay siege against it. This shall be a sign to the house of Israel.'),
            plain(4, 'Lie thou also upon thy left side, and lay the iniquity of the house of Israel upon thy left side: according to the number of the days that thou shalt lie upon it thou shalt bear their iniquity.'),
            plain(5, 'For I have laid upon thee the years of their iniquity, according to the number of the days, three hundred and ninety days: so shalt thou bear the iniquity of the house of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk4-sign-act',
          html: 'The commands God gives Ezekiel are specific and strange. Take a tile. Draw the city. Build siege works. These are not metaphorical instructions. Ezekiel is to do these things literally, visibly, that the exiles might see and understand. Words about judgment are one thing. But a prophet lying on his side for months, bearing the weight of the city&apos;s iniquity on his own body — this has a power words alone cannot match[res:babylonian-exile-context].',
        },
        {
          kind: 'carry',
          html: 'Truth spoken only in words can be intellectualized, dismissed, forgotten. But truth embodied — truth lived out in the body, in visible action, in the prophetic dramatization of what lies ahead — enters deeper. Ezekiel&apos;s sacrifice of his own comfort, his willingness to lie immobilized for hundreds of days, declares to the exiles: This is how serious God is. This is how complete the judgment will be. And by extension: how great is the God who requires even His prophet to share the weight of His people&apos;s sin[res:ezekiel-revelation-intertextual].',
        },
        {
          kind: 'reflection',
          id: 'ezk4-embodied-truth',
          prompt: 'What truths about God do you understand through action and witness rather than through words alone? How might embodying your faith change what others understand about your commitment to it?',
        },
      ],
    },

    {
      ref: 'Ezekiel 4:9–17',
      title: 'Siege Rations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(9, 'Take thou also unto thee wheat, and barley, and beans, and lentiles, and millet, and fitches, and put them in one vessel, and make thee bread thereof, according to the number of the days that thou shalt lie upon thy side, three hundred and ninety days shalt thou eat thereof.'),
            plain(10, 'And thy meat which thou shalt eat shall be by weight, twenty shekels a day: from time to time thou shalt eat it.'),
            plain(11, 'Thou shalt drink also water by measure, the sixth part of an hin: from time to time thou shalt drink.'),
            plain(12, 'And thou shalt eat it as barley cakes, and thou shalt bake it with dung that cometh out of man, in their sight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk4-siege-deprivation',
          html: 'Not only must Ezekiel lie immobilized, but he must eat siege rations — meager portions, carefully measured, mixed with ingredients that would normally be considered unclean. The God of Israel, concerned with holiness and purity, commands His prophet to eat bread baked over human dung. This is the reality of siege: all refinement stripped away, all decency sacrificed to mere survival. The exiles watching Ezekiel eat will understand: this is what comes[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'christ',
          id: 'ezk4-christ-suffering',
          title: 'Christ Connection — Bearing Our Affliction',
          html: 'When Christ came, He did not merely proclaim redemption. He entered into the human condition fully, bearing its weight and shame. He fasted and hungered. He was mocked and stripped. He ate and drank with those considered unclean. He made Himself a sign to the world not of comfort but of willingness to share in the affliction of those He came to save. Ezekiel&apos;s willingness to live out the judgment in his own body prefigures Christ&apos;s willingness to bear the sins of the world in His own body.',
        },
        {
          kind: 'carry',
          html: 'Our faith is not only what we confess. It is how we live. When we are willing to sacrifice our comfort, our dignity, our preferences in order to witness to truth or to serve others, we become signs — living signs that God is real and His truth worth every cost.',
        },
        {
          kind: 'reflection',
          id: 'ezk4-cost-witness',
          prompt: 'What cost are you willing to bear to witness to the truth of God? How might your willingness to sacrifice comfort change the way others see your faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"This shall be a sign to the house of Israel." — Ezekiel 4:3',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 4 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/search?q=Ezekiel+40+Revelation+21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    }
  ],

  hasHebrew: false,
};
