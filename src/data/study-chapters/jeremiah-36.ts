import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 36 — The Word That Cannot Be Burned
 *
 * Jeremiah dictates his prophecies to Baruch, and they are written on a scroll.
 * When King Jehoiakim hears the scroll read, he burns it section by section.
 * But God commands: write it again. The word of God cannot be destroyed. It
 * cannot be silenced. What is burned is replaced, made stronger, expanded.
 */
export const JEREMIAH_36: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 36,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Jeremiah 36 is a story about the indestructibility of God&apos;s word. The prophet has spent years speaking to Israel, and the people have not listened. Now God tells him to write. Baruch, Jeremiah&apos;s scribe, writes all the words God has given Jeremiah on a scroll. The scroll is read in the Temple, and word reaches the king.',
    'Jehoiakim&apos;s response is to burn the scroll. Section by section, he cuts it up and throws it into the fire. For a moment, it might seem that the word of God has been destroyed—the only written record of these prophecies consumed. But God&apos;s response is simple: "Take thee again another roll, and write in it all the former words." What has been burned is replaced. What has been destroyed is restored, and the second version is longer, stronger, more complete than the first.',
  ],

  sections: [
    {
      ref: 'Jeremiah 36:1–32',
      title: 'The Burning and the Rewriting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            plain(2, 'Take thee a roll of a book, and write therein all the words that I have spoken unto thee against Israel, and against Judah, and against all the nations, from the day I spake unto thee, from the days of Josiah, even unto this day.'),
            plain(21, 'So the king sent Jehudi to fetch the roll: and he took it out of Elishama the scribe&apos;s chamber. And Jehudi read it in the ears of the king, and in the ears of all the princes which stood beside the king.'),
            plain(23, 'And it came to pass, that when Jehudi had read three or four leaves, he cut it with the penknife, and cast it into the fire that was on the hearth, until all the roll was consumed in the fire that was on the hearth.'),
            plain(27, 'Then the word of the Lord came to Jeremiah, after that the king had burned the roll, and the words which Baruch wrote at the mouth of Jeremiah, saying,'),
            plain(28, 'Take thee again another roll, and write in it all the former words that were in the first roll: and moreover, add unto it many other words like unto them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer36-write-scroll',
          html: 'God&apos;s command is simple: write. After years of speaking, the word must be recorded. Writing gives permanence. It creates a testimony that extends beyond the prophet&apos;s lifetime. It allows the word to reach those not present when it is first spoken. Jeremiah does not write it himself. He dictates to Baruch. The prophet&apos;s words become the scribe&apos;s words, but the authority is God&apos;s[res:bibleodyssey-jeremiah][res:sefaria-jeremiah-36].',
        },
        {
          kind: 'commentary',
          id: 'jer36-burning',
          html: 'Jehoiakim&apos;s response is defiant. He burns the scroll. This is not merely an act of political suppression. It is an attempt to erase God&apos;s word itself. If the scroll is destroyed, the thinking goes, the word dies with it. But this logic misunderstands the nature of God&apos;s word. What is burned is merely paper. What is destroyed is merely ink. The word itself—the eternal decree, the divine pronouncement—cannot be destroyed[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'commentary',
          id: 'jer36-rewrite',
          html: 'God&apos;s response is not a lamentation for what is lost. It is a command to write again. And this time, more is written. The second scroll contains all the former words plus "many other words like unto them." What the king meant for harm—burning the word—becomes an occasion for the word to be expanded, strengthened, multiplied.',
        },
        {
          kind: 'christ',
          id: 'jer36-christ-word',
          title: 'Christ Connection — Christ the Eternal Word',
          html: 'Jesus is called "the Word of God" in John&apos;s gospel. He is the living embodiment of all that God speaks. And though attempts were made to silence Him—false witnesses, political pressure, ultimately crucifixion—He could not be destroyed. His death became the very means of His word being spread to all the world. What enemies meant to end became the gospel reaching to the ends of the earth. The word that could not be burned finds its fullest expression in Christ, who cannot be contained or destroyed.',
        },
        {
          kind: 'carry',
          html:
            'What word of God have you attempted to silence in your life? What truth have you tried to burn away? The word will not be destroyed. It will not remain silenced. What is burned springs back up stronger. What is opposed becomes more evident. The word of God—in Scripture, in conscience, in the witness of the Spirit—cannot be unmade.',
        },
        {
          kind: 'reflection',
          id: 'jer36-word-unburnable',
          prompt: 'What would it mean to trust that God&apos;s word cannot be destroyed—not by external opposition and not by internal doubt? Where might God be calling you to speak His word afresh after it has been burned away?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The word of the Lord endureth for ever. Take thee again another roll, and write in it all the former words...and moreover, add unto it many other words like unto them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 36 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-jeremiah',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jeremiah',
      url: 'https://www.bibleodyssey.org/passages/main-articles/jeremiah/',
      description: 'Peer-reviewed SBL entry on the prophet Jeremiah and his historical context.',
    },
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    }
    {
      id: 'sefaria-jeremiah-36',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 36 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.36',
      description: 'The Hebrew text of Jeremiah 36 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
