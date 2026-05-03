import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 13 — The Burden of Babylon and the Day of the Lord
 *
 * "The burden of Babylon, which Isaiah the son of Amoz did see." Isaiah lifts his eyes
 * to the nations and the epochs of human history. Babylon will be visited by judgment—
 * the day of the Lord is coming, and it will shake the heavens and the earth. The stars
 * will not give their light. The sun will be darkened. Babylon, the great city, will fall.
 * This prophecy connects to the ultimate judgment of all evil and the final establishment
 * of God&apos;s kingdom.
 */
export const ISAIAH_13: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 13,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Isaiah shifts his vision from Israel to the nations. Chapter 13 opens the "Burdens"—a series of prophecies against the nations that have threatened God&apos;s people or that refuse to acknowledge God&apos;s sovereignty. The first burden is against Babylon, the great empire that will one day conquer Judah and carry the people into exile. Yet Babylon will not escape judgment. God has "mingled" the people for the day of battle—He has called them together to execute His judgment. And that judgment is described in terms that reach beyond Babylon itself to the ultimate Day of the Lord, when God will shake the heavens and the earth, when the stars will cease to shine, when darkness will cover the earth.',
    'The vision is apocalyptic. It is not merely the fall of one empire, but the cosmic upheaval that accompanies God&apos;s final judgment of evil. Yet even in the terror of that day, there is a promise: God has a purpose that reaches beyond destruction. The prophets who follow Isaiah will expand this vision—the day of judgment will issue in the establishment of a new heaven and a new earth, where God dwells with His people forever.',
  ],

  sections: [
    {
      ref: 'Isaiah 13:1–13',
      title: 'The Day of the Lord Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(2, 'Lift ye up a banner upon the high mountain, exalt the voice unto them, shake the hand, that they may go into the gates of the nobles.'),
            plain(6, 'Howl ye; for the day of the Lord is at hand; it shall come as a destruction from the Almighty.'),
            plain(9, 'Behold, the day of the Lord cometh, cruel both with wrath and fierce anger, to lay the land desolate: and he shall destroy the sinners thereof out of it.'),
            plain(10, 'For the stars of heaven and the constellations thereof shall not give their light: the sun shall be darkened in his going forth, and the moon shall not cause her light to shine.'),
            plain(11, 'And I will punish the world for their evil, and the wicked for their iniquity; and I will cause the arrogancy of the proud to cease, and will lay low the haughtiness of the terrible.'),
            plain(13, 'Therefore I will shake the heavens, and the earth shall remove out of her place, in the wrath of the Lord of hosts, and in the day of his fierce anger.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah13-day-lord',
          html:
            'The "day of the Lord" is a phrase that appears repeatedly in the prophets. It refers to the time when God will act decisively to establish His kingdom and bring judgment on all that opposes Him. This day is described as coming with "wrath and fierce anger." It is cruel. It destroys. It is not a day of human victory or triumph, but a day of divine judgment. The creation itself will shake. The sun will be darkened. The moon will not shine. The stars will cease to give light. This is not a merely earthly conflict. This is cosmic upheaval.',
        },
        {
          kind: 'commentary',
          id: 'isaiah13-cosmic-judgment',
          html:
            'The language is apocalyptic—it describes the end of the current order. But notice what it is that brings this judgment: "I will punish the world for their evil, and the wicked for their iniquity; and I will cause the arrogancy of the proud to cease, and will lay low the haughtiness of the terrible." Evil will be punished. Wickedness will be destroyed. Pride will be brought low. This is not random destruction. This is moral judgment. The God who judges does so because He is righteous, and evil stands opposed to His righteousness.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah13-yom-adonai',
          title: 'Yom Adonai — "Day of the Lord"',
          script: 'יוֹם יְהוָה',
          translit: '<strong>Yom Adonai</strong> · Day of the Lord; the day when God will act decisively',
          description:
            'This phrase points to a future moment when God will act with full power to establish His kingdom. It is both a day of judgment on evil and a day of salvation for the righteous. It is a day looked forward to with hope by the faithful and with dread by the wicked.',
        },
        {
          kind: 'carry',
          html:
            'The vision of the Day of the Lord can be sobering. It reminds us that God is not indifferent to evil. He will not allow wickedness to continue forever. He will judge. He will set things right. For those who have committed themselves to God, this is good news—He will vindicate them, He will destroy what opposes them. For those who stand against Him, it is a warning. But for all of us, it is a call to alignment: to cease from pride and arrogance, to abandon wickedness, to seek righteousness while the day of opportunity remains.',
        },
        {
          kind: 'reflection',
          id: 'isaiah13-judgment-reflect',
          prompt: 'How does the reality of God&apos;s coming judgment affect the way you live? Does it drive you toward greater righteousness, or does it fill you only with fear?',
        },
      ],
    },

    {
      ref: 'Isaiah 13:17–22',
      title: 'Babylon Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(17, 'Behold, I will stir up the Medes against them, which shall not regard silver; and as for gold, they shall not delight in it.'),
            plain(19, 'And Babylon, the glory of kingdoms, the beauty of the Chaldees&apos; excellency, shall be as when God overthrew Sodom and Gomorrah.'),
            plain(20, 'It shall never be inhabited, neither shall it be dwelt in from generation to generation: neither shall the Arabian pitch tent there; neither shall the shepherds make their fold there.'),
            plain(21, 'But wild beasts of the desert shall lie there; and their houses shall be full of doleful creatures; and owls shall dwell there, and satyrs shall dance there.'),
            plain(22, 'And the hyenas shall cry in their castles, and jackals in the pleasant palaces: and her time is near to come, and her days shall not be prolonged.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah13-babylon-fall',
          html:
            'The chapter narrows its focus from cosmic judgment to the particular judgment on Babylon. God will stir up the Medes against them—the Persians who historically did conquer Babylon. And the great city, the glory of kingdoms, will fall. The image is one of total desolation. Babylon will become like Sodom and Gomorrah—cursed, empty, a place of death. Where once stood palaces and streets crowded with people, there will be only ruins inhabited by wild beasts and owls.',
        },
        {
          kind: 'commentary',
          id: 'isaiah13-pride-fall',
          html:
            'This is the fate of pride. Babylon trusted in its own greatness, its own power, its own wisdom. Yet all of that will crumble. The city that seemed eternal will become desolate. The palaces that seemed permanent will become dens for animals. This is Isaiah&apos;s repeated message: whatever exalts itself against God, whatever refuses to acknowledge His authority, will fall. No human power, no human achievement, no human glory can stand against the judgment of the Lord.',
        },
        {
          kind: 'carry',
          html:
            'What are the "Babylons" in our own world? What empires, what systems, what powers seem invincible, seem as though they will endure forever? Isaiah teaches us to look at them with a different perspective—not as inevitable, not as ultimate, but as temporary, destined to fall, to be judged by a power far greater than they are. This perspective liberates us from fear of human power and helps us to place our trust in the God who alone is eternal and unchanging.',
        },
        {
          kind: 'reflection',
          id: 'isaiah13-pride-reflect',
          prompt: 'What are you tempted to fear because of its apparent strength or permanence? How does Isaiah&apos;s vision of its inevitable fall comfort or challenge you?',
        },
        {
          kind: 'christ',
          id: 'isa13-christ',
          title: 'Christ Connection — The Day of His Return',
          html:
            'The day of the Lord that Isaiah describes reaches its full meaning in Christ&apos;s return. When Jesus spoke of the end times, He echoed Isaiah&apos;s language: "Immediately after the tribulation... shall appear the sign of the Son of man... and they shall see the Son of man coming in the clouds of heaven with power and great glory" (Matt. 24:29–30). The stars will cease to shine when He returns. Babylon-the-great, that final rebellion against God, will fall before Him (Rev. 18:1–2). But unlike the judgment without mercy that fell on the ancient city, Christ&apos;s return brings vindication for the faithful and the establishment of His eternal kingdom.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, the day of the Lord cometh, cruel both with wrath and fierce anger, to lay the land desolate.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 13:9 · Study Guide',
  },

  hasHebrew: true,
};
