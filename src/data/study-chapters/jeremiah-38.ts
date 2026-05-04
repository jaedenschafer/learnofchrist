import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 38 — Rescue from the Dungeon
 *
 * Jeremiah is thrown into a miry dungeon to die. The princes have had enough
 * of his "defeatist" prophecy. But Ebed-melech, a foreign servant, risks his
 * life to rescue the prophet from the mire. In this inversion of power, God
 * uses an outsider to save His prophet.
 */
export const JEREMIAH_38: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 38,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 38',
  },
  intros: [
    'Jeremiah&apos;s life has become a series of attempts to silence him. He has been imprisoned, beaten, now thrown into a dungeon—a place of ooze and mud where he will slowly die. The princes want him dead not because he has committed a crime, but because his message gives them no political hope. A prophet who says the city will fall is dangerous to those who want to believe the city can be saved.',
    'But in the darkness of the dungeon, salvation comes from an unexpected source. Ebed-melech is an Ethiopian servant—a foreigner, a eunuch, a person of no status or authority. Yet he risks his life, goes to the king, and persuades him to let Jeremiah be pulled from the mire. In this moment, God uses the least powerful person in the kingdom to save His prophet.',
  ],

  sections: [
    {
      ref: 'Jeremiah 38:1–13',
      title: 'The Rescue from the Mire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(4, 'Therefore the princes said unto the king, We beseech thee, let this man be put to death: for thus he weakeneth the hands of the men of war that remain in this city, and the hands of all the people, by speaking such words unto them: for this man seeketh not the welfare of this people, but the hurt.'),
            plain(6, 'Then took they Jeremiah, and cast him into the dungeon of Malchiah the king&apos;s son, that was in the court of the prison: and they let down Jeremiah with cords. And in the dungeon there was no water, but mire: and Jeremiah sunk in the mire.'),
            plain(7, 'Now when Ebed-melech the Ethiopian, one of the king&apos;s chamberlains, heard that they had put Jeremiah in the dungeon; the king then sitting in the gate of Benjamin;'),
            plain(8, 'Ebed-melech went forth out of the king&apos;s house, and spake to the king, saying,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-38-78mid-1',
          html: 'Ebed-melech the Ethiopian intervenes. The prophet who was thrown into the cistern is lifted out by a foreigner&apos;s mercy[res:bibleodyssey-jeremiah].',
        },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(9, 'My lord the king, these men have done evil in all that they have done to Jeremiah the prophet, whom they have cast into the dungeon; and he is like to die for hunger in the place where he is: for there is no more bread in the city.'),
            plain(11, 'So Ebed-melech took the men with him, and went into the house of the king under the treasury, and took thence old cast clouts and old rotten rags, and let them down by cords into the dungeon to Jeremiah.'),
            plain(12, 'And Ebed-melech the Ethiopian said unto Jeremiah, Put now these old clouts and rotten rags under thine armholes under the cords. And Jeremiah did so.'),
            plain(13, 'So they drew up Jeremiah with cords, and took him up out of the dungeon: and Jeremiah remained in the court of the prison.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer38-dungeon',
          html: 'The princes accuse Jeremiah of weakening the hands of the soldiers. But weakening hands is not Jeremiah&apos;s fault. It is the result of judgment. A truth-teller speaks the reality that circumstance already contains. Denying that reality does not change it. Silencing the prophet does not silence the approaching judgment. The mire awaits regardless of whether Jeremiah speaks it or not[res:lachish-letters].',
        },
        {
          kind: 'commentary',
          id: 'jer38-ebed-melech',
          html: 'Ebed-melech is a foreigner. He is a chamberlain—a servant, a eunuch, a person of no authority in his own right. Yet he alone has the courage to speak for the prophet. He goes to the king. He argues that what is being done is evil. He risks his position, his reputation, perhaps his life. And the king listens. God uses the outsider to save His prophet[res:sefaria-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer38-rags-rope',
          html: 'Ebed-melech takes cast clouts and rotten rags—discarded material—and uses them to rescue Jeremiah. The manner of rescue is as humble as the rescuer. But it works. The abandoned rags protect the prophet&apos;s skin as he is drawn up from the mire. Nothing is wasted. Everything is used. Even the least and most broken materials become instruments of salvation.',
        },
        {
          kind: 'christ',
          id: 'jer38-christ-rescue',
          title: 'Christ Connection — The Foreign Savior',
          html: 'In Jeremiah, a foreigner rescues the prophet. In the Gospels, the Gentiles respond to Jesus&apos; message while the religious authorities oppose Him. The pattern repeats: those outside the establishment often see what insiders refuse to see. And Christ&apos;s entire work is one of rescue—pulling us from the mire of sin, lifting us from the dungeon of death, using materials that seem useless and broken to accomplish salvation.',
        },
        {
          kind: 'carry',
          html: 'Have you found yourself in a mire, abandoned by those who should have helped you? Has rescue come from an unexpected source? God uses the weak, the outsider, the foreigner, the discarded. He wastes nothing. His salvation often comes through people we would never have expected, using means we would never have predicted.',
        },
        {
          kind: 'reflection',
          id: 'jer38-unexpected-rescue',
          prompt: 'From what "mire" do you need rescuing? How has God used unexpected people or circumstances to save or restore you? How might you become an Ebed-melech for someone else who is imprisoned or in need?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My lord the king, these men have done evil in all that they have done to Jeremiah the prophet, whom they have cast into the dungeon. And Ebed-melech took the men with him...and they drew up Jeremiah with cords.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 38 · Study Guide',
  },  resources: [
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],

  hasHebrew: false,
};
