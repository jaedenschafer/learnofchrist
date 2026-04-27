import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 10 — The Glory Departs
 *
 * The glory of the Lord, which Ezekiel saw enthroned in chapter 1, now departs
 * from the temple. The cherubim lift up, the wheels roll forward, the glory moves
 * toward the east. God is leaving His house. The word "Ichabod" — the glory has
 * departed — becomes the hidden refrain of this chapter. Yet the departure itself
 * is an act of justice. God will not remain in a place of such profound idolatry.
 */
export const EZEKIEL_10: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 10,

  intros: [
    'The vision of Ezekiel 1 showed the throne of God, surrounded by creatures and wheels, radiant with glory. Now, in chapter 10, that same glory leaves. The cherubim that bore the throne move. The wheels turn. The glory that has rested on Jerusalem since Solomon dedicated the temple — that glory departs. This is perhaps the most devastating moment in Ezekiel&apos;s visions. Not the judgment that falls on the people, but the departure of God from His own house. An ancient Hebrew phrase echoes through the Old Testament: "Ichabod — the glory is departed." It is spoken when the Ark is captured, when God&apos;s presence is no longer visibly with His people. Now Ezekiel witnesses the final departure. The God who came to dwell with Israel is leaving.',
  ],

  sections: [
    {
      ref: 'Ezekiel 10:1–22',
      title: 'The Throne Lifts Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Then I looked, and, behold, in the firmament that was above the head of the cherubims there appeared over them as it were a sapphire stone, as the appearance of the likeness of a throne.'),
            plain(4, 'Then the glory of the Lord went up from the cherub, and stood over the threshold of the house; and the house was filled with the cloud, and the court was full of the brightness of the Lord&apos;s glory.'),
            plain(15, 'So the cherubims rose up: this is the living creature that I saw by the river of Chebar.'),
            plain(16, 'And when the cherubims went, the wheels went by them: and when the cherubims lifted up their wings to mount up from the earth, the same wheels also turned not from beside them.'),
            plain(18, 'Then the glory of the Lord departed from off the threshold of the house, and stood over the cherubims.'),
            plain(19, 'And the cherubims lifted up their wings, and mounted up from the earth in my sight: when they went out, the wheels also were beside them, and every one stood at the door of the east gate of the Lord&apos;s house; and the glory of the God of Israel was over them above.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk10-glory-departure',
          html:
            'Step by step, God&apos;s glory leaves the temple. First it rises from the cherubim. Then it stands over the threshold. Then it departs entirely. The wheels, those mysterious wheels-within-wheels that represent divine omniscience, move. The cherubim, those four-faced creatures, lift up their wings. And the entire throne-chariot of God is carried away toward the east gate. This is not angry ejection but deliberate departure. God is not being driven out by force. He is choosing to leave.',
        },
        {
          kind: 'commentary',
          id: 'ezk10-why-depart',
          html:
            'Why does God depart? Because His presence cannot remain where He is denied. A temple that has become a den of idolatry is no longer a temple. A city that turns its back on its God cannot contain His glory. The departure is itself a judgment. It says to Israel: You have rejected Me. You have made your own gods. Very well. I will remove My presence. And you will discover what it means to live without the God you spurned.',
        },
        {
          kind: 'carry',
          html:
            'The most terrible possibility for a people called by God is not violent judgment but the withdrawal of His presence. To be left alone with our own choices, with the systems we have built, with the gods we have chosen — this is a judgment deeper than any sword. Yet even in the departure there is grace. God does not depart forever. The departure itself is a call to return.',
        },
        {
          kind: 'reflection',
          id: 'ezk10-presence-absence',
          prompt: 'Have you ever felt the presence of God withdraw from your life? What did that absence teach you? How did it change your desire to seek Him again?',
        },
      ],
    },

    {
      ref: 'Ezekiel 10:20–22',
      title: 'The Creatures Known',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(20, 'This is the living creature that I saw under the God of Israel by the river of Chebar; and I knew that they were the cherubims.'),
            plain(21, 'Every one had four faces apiece, and every one four wings; and the likeness of the hands of a man was under their wings.'),
            plain(22, 'And the likeness of their faces was the same faces which I saw by the river of Chebar, when I saw them; they went every one straight forward.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk10-cherubim-identified',
          html:
            'Now Ezekiel understands. The creatures he saw in chapter 1 — the ones with four faces, the wheels, the glory above them — those were cherubim, the divine attendants. They are not new beings arriving. They are the same beings who bore God&apos;s throne, who guarded Eden&apos;s gate, who symbolize God&apos;s presence and power. And now, recognizing them, Ezekiel watches as they depart.',
        },
        {
          kind: 'christ',
          id: 'ezk10-christ-return-glory',
          title: 'Christ Connection — The Glory Returns',
          html:
            'The departure of God&apos;s glory from the temple in Ezekiel&apos;s time was not the final word. Christ returns to the temple — not as a child in arms, but as the Messiah, the one in whom "all the fullness of the Godhead dwells bodily." And through His death and resurrection, He becomes the new temple. The glory that departed from the stone temple comes to dwell in the living temple of His body, and through Him, in every person who believes. The departure is temporary. The return is eternal.',
        },
        {
          kind: 'carry',
          html:
            'When God&apos;s presence seems to depart, we can trust that this is not the end of His story with us. He does not abandon His people permanently. The withdrawal is a call, an invitation to seek Him again with renewed desperation. And when He returns, it is not to the same place, but to a deeper place — not to a temple made with hands, but to the human heart that has learned through absence how much it needs His presence.',
        },
        {
          kind: 'reflection',
          id: 'ezk10-seeking-return',
          prompt: 'When God is distant, how do you respond? Do you harden yourself against Him, or does the distance make you seek Him more desperately? What would it take for you to reclaim the presence of God that you may have lost?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"The glory of the Lord departed from off the threshold of the house." — Ezekiel 10:18',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 10 · Study Guide',
  },

  hasHebrew: false,
};
