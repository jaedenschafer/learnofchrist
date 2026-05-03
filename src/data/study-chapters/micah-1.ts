import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 1 — God Comes Down
 *
 * The prophet calls all peoples to hear. God comes down from His temple,
 * treading upon the high places of the earth. The transgression of Jacob and
 * the sins of Judah are exposed. God will make Samaria a heap of ruins.
 */
export const MICAH_1: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 1,

  estimatedMinutes: { 5: 2, 10: 3, 15: 4 },
  intros: [
    'Micah begins not with comfort but with a summons. "Hear, all ye people." And then, "The Lord will bear witness against you." God comes down from His place, treading the high places of the earth in judgment. The mountains melt like wax before Him. This is no distant God. This is a God who walks into history, who is moved to action by the sins of His people.',
    'What provokes this descent? The transgression of Jacob—the systematic injustice that has become the way of Israel. The sins of Judah—the turning away from the living God toward idols and false security. Micah names the cities that will fall, the strongholds that will crumble. And in the midst of judgment, he laments, because he loves the people and sees clearly what they refuse to see: that their own choices are leading them toward ruin.',
  ],

  sections: [
    {
      ref: 'Micah 1:1–4',
      title: 'The God Who Comes Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The word of the Lord that came to Micah the Morasthite in the days of Jotham, Ahaz, and Hezekiah, kings of Judah, which he saw concerning Samaria and Jerusalem.'),
            plain(2, 'Hear, all ye people; hearken, O earth, and all that therein is: and let the Lord God be witness against you, the Lord from his holy temple.'),
            plain(3, 'For, behold, the Lord cometh forth out of his place, and will come down, and tread upon the high places of the earth.'),
            plain(4, 'And the mountains shall be molten under him, and the valleys shall be cleft, as wax before the fire, and as the waters that are poured down a steep place.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah1-hear',
          html:
            'The prophet calls all peoples to witness. Hear, all ye people. The audience is universal, and the witness is God Himself. This is not human judgment, susceptible to error or partiality. This is the Lord God bearing witness. The trial is cosmic in scope. The mountains and valleys, the earth and the heavens—all are called to see what the Lord will do.',
        },
        {
          kind: 'hebrew',
          id: 'micah1-yashab',
          title: 'Yashab — "Dwell"',
          script: 'יַשַׁב',
          translit: '<strong>Yashab</strong> · to dwell; to sit; to be enthroned',
          description:
            'God comes down from His holy temple, from His dwelling place. He does not abandon His throne to come. Rather, He leaves it to enter the world of human history and human sin. The God who sits enthroned also comes down.',
        },
        {
          kind: 'christ',
          id: 'micah1-christ-earth-shaking',
          title: 'Christ Connection — God&apos;s Presence Shakes the Earth',
          html:
            'In Matthew 28, at the resurrection of Christ, there is a great earthquake. "Behold, there was a great earthquake: for the angel of the Lord descended from heaven, and came and rolled back the stone." Christ&apos;s presence, even at His resurrection, shakes the foundations. He is the God who comes down, whose presence moves mountains and splits valleys.',
        },
        {
          kind: 'carry',
          html:
            'When we encounter God in judgment, we often want Him to be distant, abstract, not truly present. But Micah presents a God who comes down, who enters into history, who cannot be ignored or dismissed. His coming is visible in the world He created.',
        },
        {
          kind: 'reflection',
          id: 'micah1-god-descends',
          prompt:
            'God comes down to deal with human sin. How do you experience God&apos;s presence—as distant, or as truly present and engaged with your life?',
        },
      ],
    },

    {
      ref: 'Micah 1:5–16',
      title: 'The Fall of Samaria and Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'For the transgression of Jacob is all this, and for the sins of the house of Judah. What is the transgression of Jacob? is it not Samaria? and what are the high places of Judah? are they not Jerusalem?'),
            plain(6, 'Therefore I will make Samaria as a heap of the field, and as plantings of a vineyard: and I will pour down the stones thereof into the valley, and I will discover the foundations thereof.'),
            plain(7, 'And all the graven images thereof shall be beaten to pieces, and all the hires thereof shall be burned with the fire, and all the idols thereof will I lay desolate: for she gathered it of the hire of an harlot, and they shall return to the hire of an harlot.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah1-transgression',
          html:
            'The word transgression is translated from the Hebrew "pasha"—a deliberate crossing of a boundary. Jacob has deliberately turned away from the law of the Lord. The high places—the places of idol worship—are the physical manifestation of this spiritual rebellion. Samaria, the capital of the northern kingdom, becomes the symbol of all that has turned away from the covenant.',
        },
        {
          kind: 'commentary',
          id: 'micah1-ruin',
          html:
            'God will make Samaria a heap of rubble, a field where nothing grows. The idols will be beaten to pieces. The graven images will be burned. This is not gentle judgment. This is a complete undoing. Samaria gathered her wealth through the hire of harlotry—through the corruption and idolatry that are like adultery against God—and that wealth will become the spoil of enemies.',
        },
        {
          kind: 'christ',
          id: 'micah1-christ-prophet',
          title: 'Christ Connection — Christ the True Prophet',
          html:
            'In John 4, Christ sits at the well of Samaria and speaks to a woman about her past. He knows her sins completely. Yet He offers her living water. Where Micah saw only destruction coming to Samaria, Christ saw the possibility of redemption. He is the fulfillment of what the prophets point toward: not judgment alone, but judgment that makes way for restoration.',
        },
        {
          kind: 'carry',
          html:
            'Micah grieves for the cities he prophesies against. He will walk barefoot and naked, mourning for the fall of Samaria. The prophet does not gloat over judgment. He laments it, because he sees what the people refuse to see: that their own choices have made this ruin inevitable.',
        },
        {
          kind: 'reflection',
          id: 'micah1-consequences',
          prompt:
            'Micah saw that Samaria&apos;s sins would inevitably lead to judgment. Are there patterns in your own life where you can see the consequences of choices before they fully arrive?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Hear, all ye people...The Lord cometh forth out of his place, and will come down, and tread upon the high places of the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 1 · Study Guide',
  },

  hasHebrew: true,
};
