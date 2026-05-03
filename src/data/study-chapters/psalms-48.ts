import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 48 — The Holy City
 *
 * "Great is the Lord, and greatly to be praised in the city of our God, in
 * the mountain of his holiness." The psalm celebrates Zion—the city of God,
 * beautiful, established, protected. For Christian readers, this points to the
 * New Jerusalem, the city descending from heaven where God dwells forever with
 * His people (Revelation 21).
 */
export const PSALMS_48: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 48,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Psalm 48 is a song of Zion—a celebration of the city of God, His dwelling place, the mountain of His holiness. The psalmist looks at this city and sees beauty, strength, permanence. "Great is the Lord, and greatly to be praised in the city of our God, in the mountain of his holiness." The city itself is beautiful in its elevation. The mountain on which it stands is the expression of God&apos;s dominion. Kings and princes have tried to attack it, but they could not prevail. God is in its midst. It will not be moved.',
    'For Jewish readers, this was an actual city—Jerusalem, the place where the Temple stood, where God dwelt among His people. For Christian readers, the imagery points beyond the earthly Jerusalem to the heavenly city, the New Jerusalem, the home that Christ is preparing for His people. It is a city not made with hands, but eternal in the heavens. A place of perfect beauty, perfect safety, eternal dwelling with God.',
  ],

  sections: [
    {
      ref: 'Psalm 48:1–8',
      title: 'Beautiful Zion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(1, 'Great is the Lord, and greatly to be praised in the city of our God, in the mountain of his holiness.'),
            plain(2, 'Beautiful for situation, the joy of the whole earth, is mount Zion, on the sides of the north, the city of the great King.'),
            plain(3, 'God is known in her palaces for a refuge.'),
            plain(4, 'For, lo, the kings assembled, they passed by together.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-48-78mid-1',
          html:
            'Praise of God&apos;s greatness and protection of Zion shifts to meditation on His steadfast love. Sight becomes understanding.',
        },
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(5, 'They saw it, and so they marvelled; they were troubled, and hasted away.'),
            plain(6, 'Fear took hold upon them there, and pain, as of a woman in travail.'),
            plain(7, 'Thou breakest the ships of Tarshish with an east wind.'),
            plain(8, 'As we have heard, so have we seen in the city of the Lord of hosts, in the city of our God: God will establish it for ever. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms48-beautiful',
          html:
            '"Beautiful for situation" describes Zion&apos;s natural splendor—its location, its setting, its visible loveliness. But more than this, it is "the joy of the whole earth." The city is not merely a political capital or a trading hub. It is a cause of joy to all the earth. Because God dwells there. Because His presence makes it beautiful.',
        },
        {
          kind: 'hebrew',
          id: 'psalms48-zion',
          title: 'Zion',
          script: 'צִיּוֹן',
          translit: '<strong>Zion</strong> · the mountain; the city; God&apos;s dwelling place; the center of God&apos;s kingdom on earth',
          description:
            'Zion in Scripture represents not merely geography but theology. It is the place where God has chosen to dwell, the mountain of His holiness, the city of His presence. To speak of Zion is to speak of the intimate connection between God and His people in a specific place.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-refuge',
          html:
            '"God is known in her palaces for a refuge." The palaces of the city—its buildings, its structures—are known as a place of refuge. Not because the buildings themselves are strong, but because God is in them. He is the refuge. And His presence fills the city.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-kings',
          html:
            '"For, lo, the kings assembled, they passed by together." The kings of the earth have tried to move against Zion. They have gathered together, passing through the land. But what happened? "They saw it, and so they marvelled; they were troubled, and hasted away." The sight of the city, the recognition of God&apos;s presence there, filled them with fear. They fled.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-fear-pain',
          html:
            '"Fear took hold upon them there, and pain, as of a woman in travail." The enemies of the city experience terror, panic, pain. But this pain is not inflicted by weapons. It is the pain of spiritual realization—the fear that comes from encountering the living God.',
        },
        {
          kind: 'reflection',
          id: 'psalms48-refuge-zion',
          prompt: 'If Zion represents the presence of God, what is your Zion? Where and how do you encounter God&apos;s refuge most clearly in your own life?',
        },
      ],
    },

    {
      ref: 'Psalm 48:9–14',
      title: 'God Establishes Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(9, 'We have thought of thy lovingkindness, O God, in the midst of thy temple.'),
            plain(10, 'According to thy name, O God, so is thy praise unto the ends of the earth: thy right hand is full of righteousness.'),
            plain(11, 'Let mount Zion rejoice, let the daughters of Judah be glad, because of thy judgments.'),
            plain(12, 'Walk about Zion, and go round about her: tell of the towers thereof.'),
            plain(13, 'Mark ye well her bulwarks, consider her palaces; that ye may tell it to the generation following.'),
            plain(14, 'For this God is our God for ever and ever: he will be our guide even unto death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms48-lovingkindness',
          html:
            '"We have thought of thy lovingkindness, O God, in the midst of thy temple." Those who are in Zion meditate on God&apos;s lovingkindness. They are surrounded by His presence, and in that presence, they remember His mercy. The city becomes a place not only of refuge, but of contemplation, of remembrance of God&apos;s covenant love.',
        },
        {
          kind: 'hebrew',
          id: 'psalms48-teshuah',
          title: 'Tsedakah — "Righteousness"',
          script: 'צְדָקָה',
          translit: '<strong>Tsedakah</strong> · righteousness; justice; right standing',
          description:
            'God&apos;s right hand is full of righteousness. This means His power is always exercised justly. He is not capricious, not tyrannical, but righteous. His judgments are always true, always fair, always aligned with truth.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-rejoice',
          html:
            '"Let mount Zion rejoice, let the daughters of Judah be glad, because of thy judgments." The people of God rejoice because God judges. This seems backwards to modern ears, but it is profound truth. God&apos;s judgment is salvific. It destroys evil. It establishes righteousness. Therefore the just are glad when God judges.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-walk-about',
          html:
            '"Walk about Zion, and go round about her: tell of the towers thereof." The psalm invites a pilgrimage. Walk around the city. Count its towers. Notice its walls, its bulwarks, its palaces. And then tell the story. Pass it on to the next generation. The city is not merely a physical place to defend. It is a sign, a symbol, a witness to God&apos;s faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'psalms48-forever',
          html:
            '"For this God is our God for ever and ever: he will be our guide even unto death." This is the final word. The God who dwells in Zion is our God. Not just for now, but forever and ever. And He is not only our God in good times. He will be our guide "even unto death." He will not abandon us at the end. He will guide us through death itself into whatever lies beyond.',
        },
        {
          kind: 'christ',
          id: 'psalms48-christ-jerusalem',
          title: 'Christ Connection — The New Jerusalem',
          html:
            'In Revelation 21:2–4, John sees a vision of what comes after the resurrection, after Christ&apos;s redemption is complete: "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband...and God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." This is the ultimate Zion—the city where God dwells forever with His people, beautiful beyond telling, protected from all harm, eternal. Christ&apos;s redemption makes this possible. We are being prepared to enter that city.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 48 teaches that God has a dwelling place—a city, a holy mountain, a center from which His presence radiates. Those who dwell in that presence experience refuge, safety, the joy of God&apos;s lovingkindness. And they are called to testify, to walk about the city, to tell others of its glory, to pass on the story to the next generation. We are not meant to keep our experience of God to ourselves. We are meant to be witnesses to His faithfulness, His righteousness, His eternal care.',
        },
        {
          kind: 'reflection',
          id: 'psalms48-city-testimony',
          prompt: 'If your life is a dwelling place for God—if He dwells in you—what would it mean to "tell of the towers" of that dwelling to the generation following? How would you testify to His faithfulness to those coming after you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Great is the Lord, and greatly to be praised in the city of our God, in the mountain of his holiness. Beautiful for situation, the joy of the whole earth, is mount Zion.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 48 · Study Guide',
  },

  hasHebrew: true,
};
