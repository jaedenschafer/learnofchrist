import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 24 — Apocalyptic Judgment: The Earth Mourns and Fadeth Away
 *
 * Isaiah 24 shifts from oracles against specific nations to an apocalyptic vision
 * of universal judgment. The earth itself will mourn and fade away. Inhabitans are
 * scattered; the moon will lose its light; the sun will be ashamed. Yet amidst
 * this cosmic upheaval, the Lord will reign in Zion, and those who wait upon Him
 * will be saved. It is a vision of judgment leading to the establishment of
 * God&apos;s eternal kingdom.
 */
export const ISAIAH_24: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 24,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'Isaiah 24 marks a shift in the prophecy from specific historical judgments to cosmic eschatological vision. The prophet looks beyond the fall of Babylon and Tyre to see the final consummation of history, when the Lord will judge not merely kingdoms but the entire creation. The earth itself will be emptied, made waste, and turned upside down. Yet this is not chaos without purpose. It is the unmaking of an old order so that a new kingdom—the kingdom of God—can be established.',
    'The chapter sets the stage for the future coming of Christ, when all things will be renewed, when death will be swallowed up in victory, and when those who have waited upon God will rejoice in His salvation. It is a vision meant to sustain faith in dark times—a reminder that no power, no authority, no kingdom of this world is permanent.',
  ],

  sections: [
    {
      ref: 'Isaiah 24:1–13',
      title: 'Universal Judgment; the Earth Made Desolate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(1, 'Behold, the Lord maketh the earth empty, and maketh it waste, and turneth it upside down, and scattereth abroad the inhabitants thereof.'),
            plain(2, 'And it shall be, as with the people, so with the priest; as with the servant, so with his master; as with the maid, so with her mistress; as with the buyer, so with the seller; as with the lender, so with the borrower; as with the taker of usury, so with the giver of usury to him.'),
            plain(3, 'The land shall be utterly emptied, and utterly spoiled: for the Lord hath spoken this word.'),
            plain(4, 'The earth mourneth and fadeth away, the world languisheth and fadeth away, the haughty people of the earth do languish.'),
            plain(5, 'The earth also is defiled under the inhabitants thereof; because they have transgressed the laws, changed the ordinance, broken the everlasting covenant.'),
            plain(6, 'Therefore hath the curse devoured the earth, and they that dwell therein are desolate: therefore the inhabitants of the earth are burned, and few men left.'),
            plain(7, 'The new wine mourneth; the vine languisheth; all the merryhearted do sigh.'),
            plain(8, 'The mirth of tabrets ceaseth, the noise of them that rejoice endeth, the joy of the harp ceaseth.'),
            plain(9, 'They shall not drink wine with a song; strong drink shall be bitter to them that drink it.'),
            plain(10, 'The city of confusion is broken down: every house is shut up, that no man may come in.'),
            plain(11, 'There is a crying for wine in the streets; all joy is darkened, the mirth of the land is gone.'),
            plain(12, 'In the city is left desolation, and the gate is smitten with destruction.'),
            plain(13, 'When thus it shall be in the midst of the land among the people, there shall be as the shaking of an olive tree, and as the gleaning grapes when the vintage is done.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah24-maketh-empty',
          html:
            '"The Lord maketh the earth empty, and maketh it waste, and turneth it upside down, and scattereth abroad the inhabitants thereof." The verbs are stark and repeated, emphasizing the totality of the upheaval. It is not merely a judgment on one city or nation. It is a remaking of the cosmos, a complete inversion of all that seemed stable and fixed.',
        },
        {
          kind: 'commentary',
          id: 'isaiah24-no-distinction',
          html:
            '"As with the people, so with the priest; as with the servant, so with his master." The judgment is universal. No rank, no station, no privilege protects from the equity of God&apos;s judgment. Those who enjoyed distinction will find themselves reduced to the same state as those they once ruled. There is an implicit justice in this leveling.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah24-everlasting',
          title: 'Olam — "Everlasting" (Eternal; Forever)',
          script: 'עוֹלָם',
          translit: '<strong>Olam</strong> · eternity; forever; the everlasting; ancient time',
          description:
            'The everlasting covenant is the deepest reality, the foundation beneath all temporary things. When it is broken, all structure collapses. Olam refers to what transcends human time and change. Yet even those who have broken the eternal covenant will face its consequences.',
        },
        {
          kind: 'commentary',
          id: 'isaiah24-mourning',
          html:
            'The passage then catalogs the signs of desolation: mourning, languishing, fading. "The new wine mourneth; the vine languisheth; all the merryhearted do sigh." What brought joy—wine, celebration, music, mirth—becomes empty. The harp ceases; the tabrets no longer sound; the city is broken and shut up. It is a portrait of absolute desolation, the removal of every joy.',
        },
        {
          kind: 'carry',
          html:
            'The vision challenges us to consider what we rely upon for security and joy. When the Lord maketh the earth empty, when all external supports fall away, what remains? This is the ultimate question Isaiah poses.',
        },
      ],
    },

    {
      ref: 'Isaiah 24:14–23',
      title: 'The Remnant Sings; the Kingdom of God Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(14, 'They shall lift up their voice, they shall sing for the majesty of the Lord, they shall cry aloud from the sea.'),
            plain(15, 'Wherefore glorify ye the Lord in the fires, even the name of the Lord God of Israel in the isles of the sea.'),
            plain(16, 'From the uttermost part of the earth have we heard songs, even glory to the righteous. But I said, My leanness, my leanness, woe unto me! the treacherous dealers have dealt treacherously; yea, the treacherous dealers have dealt very treacherously.'),
            plain(17, 'Fear, and the pit, and the snare, are upon thee, O inhabitant of the earth.'),
            plain(18, 'And it shall come to pass, that he who fleeth from the noise of the fear shall fall into the pit; and he that cometh up out of the midst of the pit shall be taken in the snare: for the windows of heaven are opened, and the foundations of the earth do shake.'),
            plain(19, 'The earth is utterly broken down, the earth is clean dissolved, the earth is moved exceedingly.'),
            plain(20, 'The earth shall reel to and fro like a drunkard, and shall be removed like a cottage; and the transgression thereof shall be heavy upon it; and it shall fall, and not rise again.'),
            plain(21, 'And it shall come to pass in that day, that the Lord shall punish the host of the high ones that are on high, and the kings of the earth upon the earth.'),
            plain(22, 'And they shall be gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited.'),
            plain(23, 'Then the moon shall be confounded, and the sun ashamed, when the Lord of hosts shall reign in mount Zion, and in Jerusalem, and before his ancients gloriously.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah24-songs',
          html:
            'Yet amidst the desolation, there is a sound: songs. "They shall lift up their voice, they shall sing for the majesty of the Lord." A remnant survives and sings. Even in the midst of the cosmic upheaval, those who are faithful break forth in worship. From the uttermost part of the earth, songs of glory to the righteous are heard.',
        },
        {
          kind: 'commentary',
          id: 'isaiah24-leanness',
          html:
            'The prophet himself interjects: "My leanness, my leanness, woe unto me!" He grieves the treacherous dealers who have dealt treacherously. The remnant that sings is small, stripped, and lean—yet they sing. Their worship is not based on prosperity or ease. It flows from faith itself.',
        },
        {
          kind: 'commentary',
          id: 'isaiah24-hosts',
          html:
            'The climax comes in verse 23: "When the Lord of hosts shall reign in mount Zion, and in Jerusalem, and before his ancients gloriously." The final purpose of all judgment is the establishment of God&apos;s kingdom. The moon is confounded; the sun is ashamed—the heavens themselves acknowledge the supremacy of the Lord. Kings and powers that opposed Him are gathered in the pit and shut up in prison. But before the ancients of Israel, before those who have waited upon Him, the Lord reigns in glory.',
        },
        {
          kind: 'christ',
          id: 'isaiah24-christ-reign',
          title: 'Christ Connection — The Reign of Christ',
          html:
            'In Revelation 21, John sees the fulfillment of this vision: the former things pass away; God wipes away all tears; there is no more death, mourning, pain, or crying. The throne of God is established, and His kingdom reigns forever. Christ is the Lord of hosts who will reign on mount Zion. To all who have waited upon Him, endured in faith, and sung His praise even in darkness, He will say: "Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world."',
        },
        {
          kind: 'carry',
          html:
            'The vision sustains us in the knowledge that no present power, no current injustice, no earthly kingdom is permanent. The Lord will reign. Those who wait upon Him will be vindicated. Those who sing His praise even in the time of desolation will see His glory.',
        },
        {
          kind: 'reflection',
          id: 'isaiah24-waiting',
          prompt: 'In what areas of your life or the world do you struggle to believe that God will reign? What would it look like to sing His praise and wait upon Him even amidst desolation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Then the moon shall be confounded, and the sun ashamed, when the Lord of hosts shall reign in mount Zion, and in Jerusalem, and before his ancients gloriously.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 24 · Study Guide',
  },

  hasHebrew: true,
};
