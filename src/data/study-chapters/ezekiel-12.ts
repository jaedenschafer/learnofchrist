import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 12 — The Prophet Enacts Exile
 *
 * Again, God commands Ezekiel to perform a sign-act. This time, he must pack his
 * belongings as though for exile. He digs through a wall, carrying his baggage
 * through it. He eats trembling bread and drinks water in anxiety. The exiles
 * watching will understand: this is what is coming. The king will flee. The
 * people will be scattered. All the security they feel will be stripped away.
 */
export const EZEKIEL_12: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Ezekiel&apos;s prophetic ministry continues through sign-acts. The people of Israel, still in the promised land, still imagining that the threat of judgment is distant, need to see what exile looks like. So God commands Ezekiel to perform it. He packs a bag. He digs through a wall. He covers his face that he might not see the land he is leaving. In the presence of the exiles by the Chebar River, he enacts the exile to come. This is prophecy not as mere words but as embodied truth. The people will see and understand: this is where Jerusalem is headed. The king who rules will flee. The people will be taken captive. The comfort they feel is illusion. The exile is coming.',
  ],

  sections: [
    {
      ref: 'Ezekiel 12:1–20',
      title: 'Exile Enacted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(3, 'Therefore, thou son of man, prepare thee stuff for removing, and remove by day in their sight: and thou shalt remove from thy place to another place in their sight: it may be they will consider, though they be a rebellious house.'),
            plain(4, 'Then shalt thou bring out thy stuff by day in their sight, as stuff for removing: and thou shalt go forth at even in their sight, as they that go forth into captivity.'),
            plain(5, 'Dig thou through the wall in their sight, and carry out thereby.'),
            plain(6, 'In their sight shalt thou bear it upon thy shoulders, and carry it forth in the twilight: thou shalt cover thy face, that thou see not the ground: for I have set thee for a sign unto the house of Israel.'),
            plain(7, 'And I did so as I was commanded: I brought forth my stuff by day, as stuff for captivity, and in the even I digged through the wall with mine hand; I brought it out in the twilight, and I bare it upon my shoulder in their sight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk12-sign-act-exile',
          html: 'The sign-act is explicit. Ezekiel prepares a bag as though for exile. He carries it out in the sight of all. He digs through a wall — as a refugee might flee through a collapsed or weakened wall rather than walking openly through a gate. He covers his face so he cannot see the land he is leaving. All of this is visible prophecy. The exiles who see will understand: Ezekiel is showing us what will happen. The king will not walk openly through the gates. He will flee. The people will not gather their goods in orderly fashion. They will flee in panic. This is the reality Ezekiel makes visible[res:ezekiel-revelation-intertextual][res:sefaria-ezekiel-12].',
        },
        {
          kind: 'carry',
          html: 'Sometimes the deepest prophecy is not words but actions that make visible what lies ahead. Sometimes people need to see before they can truly hear. Ezekiel&apos;s willingness to enact exile, to become a living sign, declares his certainty about what he proclaims. He is not merely theorizing about judgment. He is demonstrating it through his body.',
        },
        {
          kind: 'reflection',
          id: 'ezk12-visible-witness',
          prompt: 'What truths about God or about the consequences of our choices do you witness to through how you live? Are your actions a consistent sign to others of what you truly believe?',
        },
      ],
    },

    {
      ref: 'Ezekiel 12:21–28',
      title: 'The Word Will Not Delay',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(21, 'And the word of the Lord came unto me, saying,'),
            plain(22, 'Son of man, what is that proverb that ye have in the land of Israel, saying, The days are prolonged, and every vision faileth?'),
            plain(23, 'Tell them therefore, Thus saith the Lord God; I will make this proverb to cease, and they shall no more use it as a proverb in Israel; but say unto them, The days are at hand, and the effect of every vision.'),
            plain(24, 'For there shall be no more any vain vision nor flattering divination within the house of Israel.'),
            plain(25, 'For I am the Lord: I will speak, and the word that I shall speak shall come to pass; it shall be no more prolonged: for in your days, O rebellious house, will I say the word, and will perform it, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk12-vision-fails-not',
          html: 'The people of Israel have a saying: "The days are prolonged, and every vision fails." In other words, the prophets keep announcing judgment, but it never comes. Surely Ezekiel&apos;s words will also prove empty. But God speaks directly against this false hope: the vain visions will cease, the false prophecies will end, and Ezekiel&apos;s word will stand. Not prolonged further. Not delayed indefinitely. It will happen. It will happen in their days. The people are living under the illusion that they have time. They do not[res:gog-magog-bibleodyssey].',
        },
        {
          kind: 'christ',
          id: 'ezk12-christ-word-stands',
          title: 'Christ Connection — A Word That Will Never Pass Away',
          html: 'Jesus teaches: "Heaven and earth shall pass away, but my words shall not pass away." The measure of a true prophet is whether his word comes to pass. Ezekiel&apos;s words did come to pass. Jerusalem fell. The people were exiled. The temple was destroyed. And the promise of restoration came true as well. Christ is the one about whom every true prophet spoke. His word stands. It will accomplish all that He purposes.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time when false prophecies abound and true words seem perpetually delayed. But the God of Ezekiel has not changed. His word will not fail. His purposes will not be frustrated. The delay itself is mercy — time to repent, time to turn back. But the turning point will come.',
        },
        {
          kind: 'reflection',
          id: 'ezk12-delayed-repent',
          prompt: 'Are there areas where God has spoken to you and you have been waiting for the consequence or fulfillment? How does the delay affect your faith? Are you using the delay as a moment to repent, or as permission to ignore what God has said?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"The word that I shall speak shall come to pass." — Ezekiel 12:25',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 12 · Study Guide',
  },  resources: [
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/text/ezekiel-40/revelation-21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    },
    {
      id: 'gog-magog-bibleodyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gog and Magog',
      url: 'https://www.bibleodyssey.org/dictionary/gog/',
      description: 'SBL entry on the mysterious Gog figure in Ezekiel and Revelation.',
    }
    {
      id: 'sefaria-ezekiel-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezekiel.12',
      description: 'The Hebrew text of Ezekiel 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
