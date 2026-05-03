import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_9: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 9,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Amos 9 opens with a vision of the Lord standing upon the altar, striking the top of the pillars so the lintel shakes. No one will escape. Yet the chapter does not end in judgment alone. After the vision of destruction comes a word of hope: "In that day will I raise up the tabernacle of David that is fallen." Restoration follows judgment.',
    'The final vision shows that judgment is thorough but not final. The scattered house of Israel will be gathered again. The fall of David\'s house will be raised. The prophecy ends with abundance and permanence: "And they shall no more be pulled up out of their land which I have given them, saith the Lord thy God."',
  ],

  bottomShare: {
    label: 'Share Amos 9',
    quote:
      '"In that day will I raise up the tabernacle of David that is fallen." After judgment comes restoration. God\'s people will be gathered and established forever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 9 · Study Guide',
  },

  sections: [
    {
      ref: 'Amos 9:1–10',
      title: 'The Vision of Inescapable Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('I saw the Lord standing upon the altar: and he said, Smite the '),
                hp('lintel of the door', 'amos9-altar'),
                t(', that the posts may shake: and cut them in the head, all of them; and I will slay the last of them with the sword: he that fleeth of them shall not flee away, and he that escapeth of them shall not be delivered.'),
              ],
            },
            plain(2, 'Though they dig into hell, thence shall mine hand take them; though they climb up to heaven, thence will I bring them down:'),
            plain(3, 'And though they hide themselves in the top of Carmel, I will search and take them out thence; and though they be hid from my sight in the bottom of the sea, thence will I command the serpent, and he shall bite them:'),
            plain(4, 'And though they go into captivity before their enemies, thence will I command the sword, and it shall slay them: and I will set mine eyes upon them for evil, and not for good.'),
            plain(5, 'And the Lord God of hosts is he that toucheth the land, and it shall melt, and all that dwell therein shall mourn; and it shall rise up wholly like a flood; and shall be drowned, as by the flood of Egypt.'),
            plain(6, 'It is he that buildeth his stories in the heaven, and hath founded his troop in the earth; he calleth for the waters of the sea, and poureth them out upon the face of the earth: The Lord is his name.'),
            plain(7, 'Are ye not as children of the Ethiopians unto me, O children of Israel? saith the Lord. Have not I brought up Israel out of the land of Egypt? and the Philistines from Caphtor, and the Syrians from Kir?'),
            plain(8, 'Behold, the eyes of the Lord God are upon the sinful kingdom, and I will destroy it from off the face of the earth; saving that I will not utterly destroy the house of Jacob, saith the Lord.'),
            plain(9, 'For, lo, I will command, and I will sift the house of Israel among all nations, like as corn is sifted in a sieve, yet shall not the least grain fall upon the earth.'),
            plain(10, 'All the sinners of my people shall die by the sword, which say, The evil shall not overtake nor prevent us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos9-altar',
          html:
            'The Lord stands on the altar — the place of mercy and sacrifice. But now He brings judgment. No one can escape. Hell, heaven, Carmel, the sea — nowhere is beyond God\'s reach. Yet verse 8 contains a crucial word: "saving that I will not utterly destroy." Even in judgment, God reserves a remnant. Not all will be destroyed.',
        },
        {
          kind: 'hebrew',
          id: 'amos9-sift',
          title: 'Hebrew Word Study',
          script: 'נוּד',
          translit: 'nud',
          description: 'to sift, to separate grain from chaff',
        },
        {
          kind: 'christ',
          id: 'amos9-christ',
          title: 'Christ Connection',
          html:
            'Christ is the grain that does not fall. He passes through the sieve of judgment without being lost. Through Christ, the scattered remnant of God\'s people is gathered and preserved. His judgment separates the true from the false, and His mercy preserves those who belong to Him.',
        },
        {
          kind: 'carry',
          html:
            'Judgment falls on those who say, "The evil shall not overtake nor prevent us" — those who think they can escape God\'s eye. But nothing escapes God. The only safety is in being counted among the grain that God preserves. Are you clinging to God as one of His faithful remnant? Where are you tempted to think you can hide from Him?',
        },
        {
          kind: 'reflection',
          id: 'amos9-judgment',
          prompt:
            'God\'s eyes are upon the sinful, but He reserves a faithful remnant. Do you live as though you are seen and known by God? How does the reality of His all-seeing eye change how you live?',
        },
      ],
    },

    {
      ref: 'Amos 9:11–15',
      title: 'The Restoration of the Fallen Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 11,
              spans: [
                t('In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof; and I will raise up his ruins, and I will build it as in the days of old:'),
              ],
            },
            plain(12, 'That they may possess the remnant of Edom, and of all the heathen, which are called by my name, saith the Lord that doeth this.'),
            plain(13, 'Behold, the days come, saith the Lord, that the plowman shall overtake the reaper, and the treader of grapes him that soweth seed; and the mountains shall drop sweet wine, and all the hills shall melt.'),
            plain(14, 'And I will bring again the captivity of my people of Israel, and they shall build the waste cities, and inhabit them; and they shall plant vineyards, and drink the wine thereof; they shall also make gardens, and eat the fruit of them.'),
            plain(15, 'And I will plant them upon their land, and they shall no more be pulled up out of their land which I have given them, saith the Lord thy God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos9-restore',
          html:
            'After the vision of destruction comes the vision of restoration. "I will raise up the tabernacle of David that is fallen." The fallen house will be rebuilt. The scattered people will be gathered. The waste cities will be inhabited again. Abundance will return — grapes will be so plentiful that the plowman will overtake the reaper. This is the promise of the God who judges but also restores.',
        },
        {
          kind: 'hebrew',
          id: 'amos9-sukkah',
          title: 'Hebrew Word Study',
          script: 'סוּכָּה',
          translit: 'sukkah',
          description: 'tabernacle, booth, dwelling place',
        },
        {
          kind: 'christ',
          id: 'amos9-rebuild',
          title: 'Christ Connection',
          html:
            'Christ is the rebuilder of the fallen tabernacle. He restores what was broken. Through His kingdom, the house of David is raised up. The scattered remnant is gathered. The promise is that those who belong to God will never again be pulled up from their land. In Christ, we are established forever.',
        },
        {
          kind: 'carry',
          html:
            'Judgment is real, but it is not God\'s final word. After sifting comes restoration. After scattering comes gathering. After the breaking comes the rebuilding. Where have you experienced God\'s restoration after judgment? How does knowing that God restores the broken change how you face His judgment?',
        },
        {
          kind: 'reflection',
          id: 'amos9-restore-reflection',
          prompt:
            'God raises up the fallen tabernacle and plants His people on their land forever. What does restoration mean to you? How do you experience God rebuilding what was broken in your life?',
        },
      ],
    },

    {
      ref: 'Amos 9 · All',
      title: 'Judgment and Restoration',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos9-theme',
          html:
            'Amos 9 teaches that God\'s judgment is complete but not final. He sifts the nations to separate the faithful from the unfaithful, the true from the false. Yet His purpose is not destruction alone but restoration. The fallen tabernacle of David will be raised. The scattered people will be gathered. God\'s final word is not judgment but the establishment of an eternal kingdom where His people shall no more be pulled up from their land.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
