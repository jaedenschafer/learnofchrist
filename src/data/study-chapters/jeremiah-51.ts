import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 51 — The Destruction of Babylon
 *
 * Jeremiah continues the oracle against Babylon with vivid imagery of destruction.
 * Babylon is drunk with wine, careless, confident. But God prepares a cup of wine
 * for Babylon to drink—the wine of God's wrath. And most importantly, God calls His
 * people: "Come out of her, my people...for her judgment reacheth unto heaven."
 * This call—quoted in Revelation 18:4—speaks to the eternal separation required
 * from worldly systems that oppose God.
 */
export const JEREMIAH_51: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 51,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'The oracle against Babylon continues with unrelenting force. Babylon has made all the earth drunk, but now Babylon itself must drink the cup of God&apos;s wrath. The image of the cup is profound: Babylon has made others stumble through its power and influence, but now the stumbling will be Babylon&apos;s own.',
    'Most importantly, God gives a call to His people that echoes through the centuries and finds its ultimate expression in Revelation: "Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues." This is a call to separation—not physical separation necessarily, but spiritual separation. To be God&apos;s people means to be distinct from the systems and values of the world.',
  ],

  sections: [
    /* ─── Jeremiah 51:1–14 — The Cup of Wrath ────────────────────────── */
    {
      ref: 'Jeremiah 51:1–14',
      title: 'Babylon&apos;s Judgment Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(7, 'Babylon hath been a golden cup in the hand of the Lord, that made all the earth drunken: the nations have drunken of her wine; therefore the nations are mad.'),
            plain(8, 'Babylon is suddenly fallen and destroyed: howl for her; take balm for her pain, if so be she may be healed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer51-golden-cup',
          html:
            'The image is striking: Babylon is a golden cup in the hand of the Lord. Beautiful, refined, precious—but a cup nonetheless, an instrument in God&apos;s hand. Babylon has made all the earth drunk with its power and influence. The nations have drunk deeply and become mad—intoxicated, disoriented, losing their judgment. But what was used to make others drunk will now be emptied.',
        },
        {
          kind: 'commentary',
          id: 'jer51-fallen',
          html:
            'The fall comes suddenly. No gradual decline, no warning. "Babylon is suddenly fallen and destroyed." The command to "howl for her" and "take balm for her pain" is ironic. Babylon&apos;s pain is mortal. No healing balm can save it. The golden cup is shattered.',
        },
        {
          kind: 'carry',
          html:
            'The fate of Babylon speaks to the fate of all worldly systems built without reference to God. They may seem golden, beautiful, refined. They may make others drunk with desire and ambition. But they stand on no sure foundation. And their fall comes suddenly. What golden cups—what beautiful but ultimately hollow systems—are you drinking from?',
        },
        {
          kind: 'reflection',
          id: 'jer51-golden-cup-2',
          prompt: 'What has been the "golden cup" of your life—the thing that seemed beautiful and refined but ultimately left you empty? How did its fall affect you?',
        },
      ],
    },

    /* ─── Jeremiah 51:45–48 — Come Out of Her ────────────────────────── */
    {
      ref: 'Jeremiah 51:45–48',
      title: 'The Call to Separation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 51,
          lines: [
            plain(45, 'My people, go ye out of the midst of her, and deliver every man his soul from the fierce anger of the Lord.'),
            plain(46, 'And lest your heart faint, and ye fear for the rumour that shall be heard in the land; a rumour shall come one year, and after that in another year shall come a rumour, and violence in the land, ruler against ruler:'),
            plain(48, 'Then the heavens and the earth, and all that is therein, shall sing for joy over Babylon: for the spoilers shall come unto her from the north, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer51-come-out',
          html:
            'God&apos;s call to His people is clear and urgent: leave Babylon. Separate yourselves from her. Do not remain entangled with a system that stands under God&apos;s judgment. This is not a suggestion or recommendation. This is a command. "Go ye out of the midst of her, and deliver every man his soul from the fierce anger of the Lord."',
        },
        {
          kind: 'commentary',
          id: 'jer51-fear-not',
          html:
            'God acknowledges that His people will hear rumors and stories of violence and collapse. Their hearts may faint. They may fear for their safety. But God tells them not to be afraid. The collapse will take time. Year after year, rumor and violence will come, but the final judgment will be certain. In the meantime, stand firm. Do not return to Babylon. Do not be drawn back by fear or nostalgia.',
        },
        {
          kind: 'christ',
          id: 'jer51-christ-separate',
          title: 'Christ Connection — Come Out and Be Separate',
          html:
            'This call—"Come out of her, my people"—is quoted directly in Revelation 18:4, where it applies to all God&apos;s people called to separation from the worldly system in the end times. Christ&apos;s teaching echoes this: "Come unto me, all ye that are weary and are heavy laden, and I will give you rest...Take my yoke upon you...and ye shall find rest unto your souls." To follow Christ is to separate from the systems of the world and to yoke ourselves to Him instead. Not through physical withdrawal, but through a reordering of allegiances and values.',
        },
        {
          kind: 'carry',
          html:
            'The question God poses to every person is: What are you entangled with? What systems, values, or relationships have you woven yourself into so thoroughly that separation seems impossible? God&apos;s call is to release these and to separate yourselves from what stands under judgment. This is not escape into isolation, but alignment with God&apos;s purposes.',
        },
        {
          kind: 'reflection',
          id: 'jer51-separate',
          prompt: 'From what is God calling you to separate? What would it cost to "come out of Babylon" completely? What keeps you from making that break?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Come out of the midst of her, my people, and deliver every man his soul from the fierce anger of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 51 · Study Guide',
  },
};
