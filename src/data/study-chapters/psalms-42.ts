import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 42 — The Living Water
 *
 * "As the hart panteth after the water brooks, so panteth my soul[res:sefaria-psalms-42] after thee,
 * O God." The psalmist is thirsty—not for water, but for the presence of God.
 * "Why art thou cast down, O my soul?" he repeats throughout the psalm.
 * Despair and hope struggle together. Christ is the Living Water (John 4),
 * the one who quenches the spiritual thirst of the human soul.
 */
export const PSALMS_42: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 42,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Psalm 42 begins with an image of desperate thirst. The hart—the deer—pants after the water brooks. All its being is oriented toward water. It runs, it seeks, it yearns for the thing it needs to live. And the psalmist says: "So panteth my soul after thee, O God." This is not polite religion. This is desperation. This is the expression of someone whose whole being is bent toward God, whose need for God&apos;s presence is as essential as water to the deer.',
    'Yet the psalm is not only longing[res:bible-odyssey-thirsting-psalms]. It is also struggle. "Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance." The refrain echoes again and again, a psalmist talking to himself, exhorting his own soul not to give way to despair. This is the psalm of someone in the fight between faith and doubt, between hope and despair, between the memory of what God has done and the present feeling that He is absent.',
  ],

  sections: [
    {
      ref: 'Psalm 42:1–5',
      title: 'Thirst and Remembrance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(1, 'As the hart panteth after the water brooks, so panteth my soul after thee, O God.'),
            plain(2, 'My soul thirsteth for God, for the living God: when shall I come and appear before God?'),
            plain(3, 'My tears have been my meat day and night, while they continually say unto me, Where is thy God?'),
            plain(4, 'When I remember these things, I pour out my soul in me: for I had gone with the multitude, I went with them to the house of God, with the voice of joy and praise, with a multitude that kept holyday.'),
            plain(5, 'Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms42-hart',
          html:
            'The image of the panting hart is one of the Bible&apos;s most enduring metaphors. The animal is in motion, driven by necessity. It is not calm. It is not indifferent. It runs. It seeks. And so the psalmist describes his soul&apos;s seeking after God. This is not a quiet prayer. This is a desperate running toward God, a motion of the whole being.',
        },
        {
          kind: 'hebrew',
          id: 'psalms42-elohim-chai',
          title: 'El Chai — "Living God"',
          script: 'אֱלֹהִים חַיִּים',
          translit: '<strong>El Chai</strong> · the living God; God characterized by life',
          description:
            'The psalmist specifies: not just God, but "the living God." This is the God who moves, who acts, who responds. Not a distant principle, not an idea, but a God who is alive and with whom encounter is possible. The soul thirsts not for the concept of God, but for the presence of the living God.',
        },
        {
          kind: 'commentary',
          id: 'psalms42-appear',
          html:
            'The question burns: "When shall I come and appear before God?" To appear before God is to be in His presence, to stand before Him without fear, to be seen and known and accepted. The psalmist&apos;s whole being is oriented toward this. But he is not there. He is separated. And the separation is agony.',
        },
        {
          kind: 'commentary',
          id: 'psalms42-tears',
          html:
            'Instead of appearing before God, the psalmist&apos;s "tears have been my meat day and night." His tears are his only food. His grief consumes him. And to add insult to wound, those around him mock him: "Where is thy God?" They are saying: if He existed, He would help you. The fact that you are suffering proves He is not there. This kind of mockery, hurled at someone who is already desperate, cuts deeply.',
        },
        {
          kind: 'commentary',
          id: 'psalms42-remember',
          html:
            'But then a memory surfaces. "When I remember these things, I pour out my soul in me." He remembers the times when he has gone with the multitude to the house of God, when he has been part of a company of worshippers, when joy has filled him, when he has sung praises. The memory of past experience with God becomes both a comfort and a deepening of his present grief. He has known God. And he has lost that knowledge, at least for now.',
        },
        {
          kind: 'reflection',
          id: 'psalms42-cast-down',
          prompt: 'When you have felt cast down, when God seems distant, do you remember times when you have felt His presence? How do those memories both comfort and deepen your longing?',
        },
      ],
    },

    {
      ref: 'Psalm 42:6–11',
      title: 'Hope in the Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(6, 'O my God, my soul is cast down within me: therefore will I remember thee from the land of Jordan, and of the Hermonites, from the hill Mizar.'),
            plain(7, 'Deep calleth unto deep at the noise of thy waterspouts: all thy waves and thy billows are gone over me.'),
            plain(8, 'Yet the Lord will command his lovingkindness in the daytime, and in the night his song shall be with me, and my prayer unto the God of my life.'),
            plain(9, 'I will say unto God my rock, Why hast thou forgotten me? why go I mourning because of the oppression of the enemy?'),
            plain(10, 'As with a sword in my bones, my enemies reproach me; while they say daily unto me, Where is thy God?'),
            plain(11, 'Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms42-land-jordan',
          html:
            'From the depths, the psalmist reaches back to memory. He will remember God "from the land of Jordan, and of the Hermonites, from the hill Mizar." These are places of past encounter, past clarity. He is calling these memories up deliberately, using them as anchors. I have known you here. I have met you there. How can I truly have lost you?',
        },
        {
          kind: 'hebrew',
          id: 'psalms42-tehom',
          title: 'Tehom — "Deep"',
          script: 'תְהוֹם',
          translit: '<strong>Tehom</strong> · deep; abyss; the deep waters of chaos',
          description:
            'Tehom evokes the primordial deep from Genesis 1, the chaos waters over which God hovered. Here, the psalmist uses the word to describe his own interior state. He is in the deep. He is in the waters of chaos. One deep calls to another—the internal abyss within him calls to the external abyss of God&apos;s mystery.',
        },
        {
          kind: 'commentary',
          id: 'psalms42-waves',
          html:
            'The image intensifies: "All thy waves and thy billows are gone over me." He is drowning. The waves of God&apos;s dealings, or so it seems, are overwhelming him. This is not gentle water. This is turbulent, overwhelming flood. Yet—and here is the pivot—he recognizes these as God&apos;s waves, God&apos;s waterspouts. Even in the drowning, he is not abandoned. He is being overwhelmed by God, not by chaos.',
        },
        {
          kind: 'commentary',
          id: 'psalms42-yet-lord',
          html:
            '"Yet the Lord will command his lovingkindness in the daytime, and in the night his song shall be with me." The yet is crucial. Despite the darkness, despite the overwhelming waves, yet the Lord will command His lovingkindness. And even in the night—the time of deepest darkness—his prayer to God will be a song. This is not hope born of certainty. This is hope born of covenant, of past faithfulness, of trust that God will not abandon.',
        },
        {
          kind: 'christ',
          id: 'psalms42-christ-living-water',
          title: 'Christ Connection — The Living Water',
          html:
            'In John 4, Jesus sits by a well parched and thirsty Himself, and He tells the Samaritan woman: "Whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life." The hart pants for the water brooks. But Jesus offers water that satisfies eternally. He is the Living Water. To come to Him is to have one&apos;s thirst—the soul&apos;s thirst—finally and completely quenched. The believer in Christ is never again in the land of Jordan separated from God. He has drunk of Christ, and the spring of living water flows within him forever.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 42 speaks to the moments when you feel separated from God, when your tears are your only food, when those around you mock your faith. It teaches that despair and hope can struggle together in the same heart. But it also teaches that the struggle is won, finally, by remembrance and by trust. You have known God. You can know Him again. The night will not last forever. And even in the darkest moment, you can command your soul to hope, knowing that God&apos;s lovingkindness is real, and that you shall yet praise Him.',
        },
        {
          kind: 'reflection',
          id: 'psalms42-night-song',
          prompt: 'In your darkest night, when God feels absent, can you imagine your prayer becoming a song? What would it take for you to trust that even in the darkness, God&apos;s lovingkindness is being commanded on your behalf?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'As the hart panteth after the water brooks, so panteth my soul after thee, O God. My soul thirsteth for God, for the living God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 42 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-42',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 42 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.42',
      description: 'Lament with longing for God with Jewish commentary.',
    },
    {
      id: 'bible-odyssey-thirsting-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Thirst for God',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms expressing deep longing for God&apos;s presence.',
    },
  ],

  hasHebrew: true,
};
