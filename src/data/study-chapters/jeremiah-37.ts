import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 37 — The Word Spoken from Prison
 *
 * Jeremiah is imprisoned for his prophecies. King Zedekiah, in secret desperation,
 * inquires of him. The prophet remains faithful. His message does not change
 * because his circumstances have changed. From prison, he continues to speak
 * God&apos;s truth. His confinement does not silence him.
 */
export const JEREMIAH_37: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 37,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 37',
  },
  intros: [
    'Jeremiah has been speaking God&apos;s word for forty years. He has been beaten, imprisoned, threatened with death. His message has not wavered: Jerusalem will fall. Babylon will prevail. Yet the city&apos;s leaders keep hoping for escape, for political maneuvering to preserve the kingdom.',
    'Now Jeremiah is imprisoned. The city is under siege. And King Zedekiah, desperate, sends for the prophet in secret. He wants to hear from Jeremiah. He wants to know if God will deliver them. But the word Jeremiah speaks is the same word he has spoken all along: you will not escape. The king has imprisoned the prophet, yet he still seeks him out. The prophet is in chains, yet his message is unbound.',
  ],

  sections: [
    {
      ref: 'Jeremiah 37:1–21',
      title: 'The Imprisoned Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(6, 'Then came the word of the Lord unto the prophet Jeremiah, saying,'),
            plain(7, 'Thus saith the Lord, the God of Israel; Thus shall ye say to the king of Judah that sent you unto me; Behold, Pharaoh&apos;s army, which is come forth to help you, shall return to Egypt into their own land.'),
            plain(8, 'And the Chaldeans shall come again, and fight against this city, and take it, and burn it with fire.'),
            plain(10, 'For though ye had smitten the whole army of the Chaldeans that fight against you, and there remained but wounded men among them, yet should they rise up every man in his tent, and burn this city with fire.'),
            plain(17, 'Then Zedekiah the king sent, and took him out: and the king asked him secretly in his house, and said, Is there any word from the Lord? And Jeremiah said, There is: for said he, thou shalt be delivered into the hand of the king of Babylon.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer37-same-word',
          html: 'What is remarkable is not that Jeremiah is imprisoned, but that his message is unchanged. He could have negotiated his release by saying what the king wanted to hear. He could have altered his prophecy to suit the moment. But he does not. From prison, he speaks the same word: "Thou shalt be delivered into the hand of the king of Babylon." The truth is not negotiable. It is not contingent on circumstance[res:bibleodyssey-jeremiah][res:sefaria-jeremiah-37].',
        },
        {
          kind: 'commentary',
          id: 'jer37-reliance-false-hope',
          html: 'The people rely on Pharaoh&apos;s army to deliver them. They believe political alliances will save them. But Jeremiah says Pharaoh will return to Egypt, and the Babylonians will come again. The people are looking to human power. God is offering truth. The truth says the human power will fail. The only real security is in accepting God&apos;s word and preparing for restoration beyond judgment[res:sefaria-jeremiah].',
        },
        {
          kind: 'carry',
          html: 'When your circumstances are difficult—when you are imprisoned by circumstance, by illness, by limitation—does your message to others change? Do you offer false hope because hope is what is wanted? Or do you maintain the truth, even when it is costly? Jeremiah&apos;s example is one of faithfulness that transcends circumstance.',
        },
        {
          kind: 'reflection',
          id: 'jer37-truth-cost',
          prompt: 'What truth have you been tempted to compromise or hide because of your circumstances? How can you maintain faithfulness to God&apos;s truth even when it costs you?',
        },
        {
          kind: 'christ',
          id: 'jer37-christ',
          title: 'Christ Connection — Prisoner and Judge',
          html: 'Jeremiah sits in chains, imprisoned and falsely accused. Yet the king seeks him out, desperate for truth. Christ too was imprisoned. He was falsely accused before the council: "Now the chief priests and elders and all the council, sought false witness against Jesus" (Matthew 26:59–60). Yet even in chains, His word did not waver. Pilate came to Him in secret, asking questions, just as Zedekiah did. "Art thou the King of the Jews?" And Christ spoke truth to power, unafraid. The prisoner became the judge. The accused became the deliverer. In both cases, the world would not believe, even when truth came from captivity.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Is there any word from the Lord? And Jeremiah said, There is: for said he, thou shalt be delivered into the hand of the king of Babylon.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 37 · Study Guide',
  },  resources: [
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-jeremiah-37',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 37 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.37',
      description: 'The Hebrew text of Jeremiah 37 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: false,
};
