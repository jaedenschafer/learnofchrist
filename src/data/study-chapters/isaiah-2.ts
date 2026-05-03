import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 2 — The Mountain of the Lord&apos;s House
 *
 * "It shall come to pass in the last days, that the mountain of the Lord&apos;s house
 * shall be established in the top of the mountains, and shall be exalted above the hills;
 * and all nations shall flow unto it." This is Isaiah&apos;s vision of redemption — a future
 * where the nations of the earth turn their instruments of war into instruments of peace,
 * where all people come to learn God&apos;s ways. Yet before this hope comes a warning: the
 * Lord will lay low the pride of man.
 */
export const ISAIAH_2: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 2,

  estimatedMinutes: { 5: 2, 10: 4, 15: 6 },
  intros: [
    'The vision shifts. After pronouncing judgment on Judah&apos;s corruption, Isaiah lifts his eyes to a future horizon. He sees a day when the mountain of the Lord&apos;s house shall be lifted up, established, exalted. All nations shall flow unto it. This is not a vision of territorial conquest. This is a vision of spiritual pilgrimage — the whole world coming to learn from God. The arms of humanity shall be beaten into plowshares and pruning hooks. The lion shall lie down with the lamb. All this seems impossible until we understand: God has already promised to bring it to pass.',
    'But the vision of peace does not come without transition. First, the Lord must deal with human pride. "The lofty looks of man shall be humbled, and the haughtiness of men shall be bowed down, and the Lord alone shall be exalted in that day." The messianic kingdom is born not from human achievement but from human surrender — the laying low of all that exalts itself against the knowledge of God.',
  ],

  sections: [
    {
      ref: 'Isaiah 2:1–5',
      title: 'The Mountain Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(2, 'And it shall come to pass in the last days, that the mountain of the Lord&apos;s house shall be established in the top of the mountains, and shall be exalted above the hills; and all nations shall flow unto it.'),
            plain(3, 'And many people shall go and say, Come ye, and let us go up to the mountain of the Lord, to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for out of Zion shall go forth the law, and the word of the Lord from Jerusalem.'),
            plain(4, 'And he shall judge among the nations, and shall rebuke many people: and they shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift up sword against nation, neither shall they learn war any more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah2-mountain',
          html:
            'The mountain is not a place of military strength or economic power. It is the place of God&apos;s dwelling, where His law is taught and His word spoken. All nations—not just Judah, not just Israel, but all the families of the earth—shall flow to it. This is a vision of universal spiritual pilgrimage. The words "shall flow" suggest a natural, irresistible movement toward God&apos;s house, like waters flowing downhill toward the sea. The messianic age is one where the whole world recognizes the authority and beauty of God&apos;s ways.',
        },
        {
          kind: 'commentary',
          id: 'isaiah2-weapons',
          html:
            'The image of swords beaten into plowshares is so powerful that it appears again in Micah 4 and is quoted in modern times by those who dream of peace. But notice the basis for this disarmament: "He shall judge among the nations, and shall rebuke many people." It is not human negotiation that lays down weapons. It is the judgment and rebuke of the Lord. Peace comes not from human wisdom or compromise, but from God establishing right judgment among the nations.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah2-mishneh',
          title: 'Acharith — "Latter Days"',
          script: 'אַחֲרִית',
          translit: '<strong>Acharith</strong> · latter days, end times, future destiny',
          description:
            'The phrase "last days" or "latter days" (acharith hayamim) appears throughout the prophetic books. It refers to a future epoch when God will act decisively to establish His kingdom. This is not a distant, vague future, but a real historical moment when the character of human civilization will be transformed.',
        },
        {
          kind: 'christ',
          id: 'isaiah2-christ-kingdom',
          title: 'Christ Connection — The Reign of Peace',
          html:
            'In the New Testament, the kingdom that Jesus proclaimed is this kingdom that Isaiah foresaw. When the Sermon on the Mount speaks of peacemakers being blessed, when the epistles call believers to put away wrath and pursue peace, they are living in the tension between the kingdom already inaugurated in Christ and the kingdom not yet fully realized. Christ&apos;s resurrection and ascension placed Him on the throne of God—the true "mountain of the Lord&apos;s house." Those who follow Him now are learning His ways, already experiencing the conversion of hearts from war to peace. The full manifestation awaits His return.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah&apos;s vision invites us into hope. We live in a world marked by conflict, by nations lifting up sword against nation, by the accumulation of weapons. Yet this passage insists that this is not the final state of human civilization. God has promised a different future. What would it mean, in your own sphere of influence, to beat your sword into a plowshare—to convert some instrument of conflict or division into an instrument of growth and nourishment?',
        },
        {
          kind: 'reflection',
          id: 'isaiah2-peace-reflect',
          prompt: 'What would it look like in your life—in your family, your work, your relationships—to live as if the messianic age of peace had begun? What weapons would you need to lay down?',
        },
      ],
    },

    {
      ref: 'Isaiah 2:6–22',
      title: 'The Day of the Lord Brings Low the Proud',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(11, 'The lofty looks of man shall be humbled, and the haughtiness of men shall be bowed down, and the Lord alone shall be exalted in that day.'),
            plain(12, 'For the day of the Lord of hosts shall be upon every one that is proud and lofty, and upon every one that is lifted up; and he shall be brought low:'),
            plain(17, 'And the loftiness of man shall be bowed down, and the haughtiness of men shall be made low: and the Lord alone shall be exalted in that day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah2-humbled',
          html:
            'Before the nations can flow unto the mountain of the Lord, before they can learn His ways, human pride must be humbled. Isaiah paints a portrait of the day of the Lord with repeated emphasis: the lofty looks shall be humbled, the haughtiness bowed down, the lifted up brought low. This is not a single action but a comprehensive upheaval. Everything that humans have built to exalt themselves—their towers, their ships, their gardens, their luxuries—will be laid waste. The day of the Lord is a day of leveling.',
        },
        {
          kind: 'commentary',
          id: 'isaiah2-alone',
          html:
            'The repeated assertion is stark: "The Lord alone shall be exalted." Not the Lord and human achievement. Not the Lord and human ingenuity. The Lord alone. This does not mean that human civilization is annihilated. It means that all human activity will be subordinated to God&apos;s purposes, freed from the tyranny of human pride. The paradox is this: only when human pride is brought low can genuine human flourishing begin.',
        },
        {
          kind: 'carry',
          html:
            'What do you trust? In what are you tempted to take pride—your accomplishments, your knowledge, your strength, your resources? Isaiah&apos;s message is that all these things stand under the judgment of the Lord. The path to true life is not the path of magnifying oneself, but the path of diminishing—of emptying oneself of pride, so that the Lord alone might be exalted. This is a difficult word for human ears. It is also a liberating word.',
        },
        {
          kind: 'reflection',
          id: 'isaiah2-pride-reflect',
          prompt: 'Where in your life is human pride—your own or others&apos;—blocking the way toward justice, peace, and God&apos;s purposes? What would repentance look like?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And it shall come to pass in the last days, that the mountain of the Lord&apos;s house shall be established...and all nations shall flow unto it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 2:2 · Study Guide',
  },

  hasHebrew: true,
};
