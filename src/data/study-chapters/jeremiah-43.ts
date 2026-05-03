import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 43 — The Disobedience
 *
 * The remnant promised to obey God&apos;s word. God said: stay. But fear
 * overrides promise. The remnant does the opposite of what God commands—they
 * flee to Egypt, taking Jeremiah with them against his will. The chapter ends
 * with the prophet captive in the very place God warned against. Human desires
 * override divine word, and the consequences are set in motion.
 */
export const JEREMIAH_43: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 43,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Jeremiah 43 is a chapter of broken promises. The remnant said they would obey, whatever God commanded. God commanded them to stay. But fear speaks louder than promise. The leadership—Johanan and the captains—decides to flee to Egypt. They accuse Jeremiah of speaking falsely, of being instigated by Baruch his scribe to lead them astray. But the truth is simpler: they do not want to obey.',
    'And so they take Jeremiah with them to Egypt against his will. The prophet who has lived to proclaim God&apos;s word is now captive among those who refuse to hear it. The chapter ends in captivity, exile, and the consequences of human disobedience. It is a tragic conclusion to the story of the remnant—not because God has failed, but because the people have chosen to disbelieve.',
  ],

  sections: [
    {
      ref: 'Jeremiah 43:1–13',
      title: 'Disobedience and Captivity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 43,
          lines: [
            plain(1, 'And it came to pass, that when Jeremiah had made an end of speaking unto all the people all the words of the Lord their God, for which the Lord their God had sent him to them, even all these words,'),
            plain(2, 'Then spake Azariah the son of Hoshaiah, and Johanan the son of Kareah, and all the proud men, saying unto Jeremiah, Thou speakest falsely: the Lord our God hath not sent thee to say, Go not into Egypt to sojourn there:'),
            plain(4, 'So Johanan the son of Kareah, and all the captains of the forces, took all the remnant of Judah, that were returned from all nations, whither they had been driven, to dwell in the land of Judah;'),
            plain(5, 'Even men, and women, and children, and the king&apos;s daughters, and every person that Nebuzaradan the captain of the guard had left with Gedaliah the son of Ahikam the son of Shaphan, and Jeremiah the prophet, and Baruch the son of Neriah.'),
            plain(6, 'So they came into the land of Egypt: for they obeyed not the voice of the Lord: thus came they even to Tahpanhes.'),
            plain(7, 'Then came the word of the Lord unto Jeremiah in Tahpanhes, saying,'),
            plain(8, 'Take great stones in thine hand, and hide them in the clay in the brickkiln, which is at the entry of Pharaoh&apos;s house in Tahpanhes, in the sight of the men of Judah;'),
            plain(9, 'And say unto them, Thus saith the Lord of hosts, the God of Israel; Behold, I will send and take Nebuchadrezzar the king of Babylon, my servant, and will set his throne above these stones that I have hid; and he shall spread his royal pavilion over them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer43-denial',
          html:
            'The leaders deny that God has spoken. "Thou speakest falsely," they say. Yet Jeremiah has delivered the word God gave him. The denial is not of the prophet&apos;s integrity, but of God&apos;s authority. They deny the very God they had promised to obey. This is the moment when promise meets test, and the people fail.',
        },
        {
          kind: 'commentary',
          id: 'jer43-captive',
          html:
            'Jeremiah is taken to Egypt against his will. He does not flee. He does not choose this path. But he is compelled to go, the captive of those he has tried to lead. And even in Egypt, he continues to speak God&apos;s word. Even captive, he is not silenced. Even in the place of disobedience, the prophet continues to proclaim what God speaks.',
        },
        {
          kind: 'commentary',
          id: 'jer43-sign',
          html:
            'God gives a sign. Jeremiah buries stones in the palace of Pharaoh and declares that Nebuchadnezzar will set his throne above them. Even Egypt is not safe from the Babylonian king. The very refuge the remnant sought will be conquered. The decision to flee does not save them. It only delays judgment and sets it in a foreign place.',
        },
        {
          kind: 'christ',
          id: 'jer43-christ-bent-away',
          title: 'Christ Connection — The Human Heart&apos;s Bent',
          html:
            'The heart bent away from God will find countless reasons to justify disobedience. The remnant did not say, "We want to disobey." They said, "You are lying. God did not really say this." This is how the human heart rationalizes rebellion. Jesus spoke constantly about this: the human heart that hears truth but refuses to believe, that prefers darkness to light, that runs from what it should run toward. Only transformation of the heart—the work of the Spirit, the rebirth that comes through Christ—can realign human will toward God&apos;s will.',
        },
        {
          kind: 'carry',
          html:
            'Do you find yourself making excuses for disobedience? Reinterpreting God&apos;s word to match your desires? The remnant&apos;s story is your story repeated. The only path forward is honesty about your bent toward disobedience, repentance, and asking God to realign your will toward His.',
        },
        {
          kind: 'reflection',
          id: 'jer43-bent-away',
          prompt: 'Where is your heart bent away from God? What word of God are you tempted to deny or reinterpret? What would it take to align your will with God&apos;s, even when it costs you what you want?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They obeyed not the voice of the Lord: thus came they even to Tahpanhes. Behold, I will send and take Nebuchadrezzar the king of Babylon, and will set his throne above these stones.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 43 · Study Guide',
  },

  hasHebrew: false,
};
