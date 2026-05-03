import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 2 — The Fountain Forsaken
 *
 * God speaks through Jeremiah in language of love broken. "I remember thee,
 * the kindness of thy youth, the love of thine espousals." But then the
 * accusation: "They have forsaken me the fountain of living waters, and hewed
 * them out cisterns, broken cisterns, that can hold no water." Israel has
 * turned from the source of life to broken vessels. The people have chosen
 * idols, and in doing so have chosen emptiness. Yet throughout this chapter,
 * the voice of God carries the pain of spurned love, not merely the anger
 * of a betrayed sovereign.
 */
export const JEREMIAH_2: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 2,

  estimatedMinutes: { beginner: 2, intermediate: 6, deep: 7 },
  intros: [
    'The second chapter of Jeremiah begins with God remembering. This is not the cold memory of a judge reviewing a case file. This is the memory of a lover. "I remember thee, the kindness of thy youth, the love of thine espousals, when thou wentest after me in the wilderness, in a land that was not sown." God recalls the early days of Israel, when the people were young in their faith, when they followed Him into the wilderness, depending on Him utterly. It is a memory suffused with longing.',
    'But that memory serves to heighten the accusation that follows: "My people have changed their glory for that which doth not profit." Israel has made an exchange. They have given up the living God for dead idols. They have forsaken the fountain of living waters and hewed out cisterns—broken cisterns that can hold no water. The image is stark: attempting to collect and store what flows eternally from God, and finding that the vessels crack and leak. What drives a people to do such a thing? And what is the nature of a love that continues to call them back, even as they turn away?',
  ],

  sections: [
    {
      ref: 'Jeremiah 2:1–13',
      title: 'The Memory of Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Moreover the word of the Lord came to me, saying,'),
            plain(2, 'Go and cry in the ears of Jerusalem, saying, Thus saith the Lord; I remember thee, the kindness of thy youth, the love of thine espousals, when thou wentest after me in the wilderness, in a land that was not sown.'),
            plain(3, 'Israel was holiness unto the Lord, and the firstfruits of his increase: all that devour him shall offend; evil shall come upon them, saith the Lord.'),
            plain(4, 'Hear ye the word of the Lord, O house of Jacob, and all the families of the house of Israel:'),
            plain(5, 'Thus saith the Lord, What iniquity have your fathers found in me, that they are gone far from me, and have walked after vanity, and are become vain?'),
            plain(6, 'Neither said they, Where is the Lord that brought us up out of the land of Egypt, that led us through the wilderness, through a land of deserts and of pits, through a land of drought, and of the shadow of death, through a land that no man passed through, and where no man dwelt?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer2-remembrance-to-accusation',
          html: 'God remembers the kindness and love of Israel&apos;s youth—when they followed Him in the wilderness, when they were holy to the Lord, when they asked "Where is the Lord?" Now comes the turning point: from what God has done for them, to what they have done with what they were given[res:bibleodyssey-jeremiah].',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(7, 'And I brought you into a plentiful country, to eat the fruit thereof and the goodness thereof; but when ye entered, ye defiled my land, and made mine heritage an abomination.'),
            plain(8, 'The priests said not, Where is the Lord? and they that handle the law knew me not: the pastors also transgressed against me, and the prophets prophesied by Baal, and walked after things that do not profit.'),
            plain(9, 'Wherefore I will yet plead with you, saith the Lord, and with your children&apos;s children will I plead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-2-78mid-1',
          html: 'After God states He will plead "with your children&apos;s children," the tone shifts from appeal to the hard evidence of Israel&apos;s ruin[res:lachish-letters].',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'For pass over the isles of Chittim, and see; and send unto Kedar, and consider diligently, and see if there be such a thing.'),
            plain(11, 'Hath a nation changed their gods, which are yet no gods? but my people have changed their glory for that which doth not profit.'),
            plain(12, 'Be astonished, O ye heavens, at this, and be ye very desolate, saith the Lord.; For my people have committed two evils; they have forsaken me the fountain of living waters, and hewed them out cisterns, broken cisterns, that can hold no water.'),
            plain(13, 'Is Israel a servant? is he a homeborn slave? why is he spoiled?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer2-remember',
          html: 'God begins by remembering the kindness and love of Israel&apos;s youth. This memory is not meant to shame but to remind. God recalls that early moment when Israel was newly formed as a people, when they followed Him through the wilderness. At that time, Israel was holy to the Lord, set apart as a people of God. The memory serves as a baseline against which the present fall is measured[res:sefaria-jeremiah].',
        },
        {
          kind: 'hebrew',
          id: 'jer2-chesed',
          title: 'Chesed — "Kindness" (Covenant Love)',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · kindness; covenant love; faithful love',
          description: 'The Hebrew word chesed is often translated "mercy" or "loving-kindness," but it is rooted in covenant. When God recalls Israel&apos;s chesed toward Him—their covenant love—He is remembering that the people once reciprocated His own faithfulness. They loved Him. They kept covenant with Him. And God&apos;s own chesed for Israel persists even as they turn away.',
        },
        {
          kind: 'commentary',
          id: 'jer2-fountain',
          html: 'The core image of this chapter is the contrast between a fountain and broken cisterns. A fountain is living water—it flows continuously from an inexhaustible source. A cistern is a human construction meant to hold water, but these cisterns are broken. They leak. Nothing put into them can be retained. To forsake the fountain of living waters is to give up what is eternal, abundant, and freely given. To hew out broken cisterns is to labor frantically to create what was already freely available.',
        },
        {
          kind: 'commentary',
          id: 'jer2-astonished',
          html: 'Even the heavens are called to witness and be astonished at what Israel has done. This is not behavior that follows from the human condition or from ignorance. Other nations do not change their gods—even though their gods are no gods. Israel has done what is unnatural and incomprehensible: traded the fountain of living waters for broken cisterns. This is not a reasonable mistake. It is a profound perversion of the natural order.',
        },
        {
          kind: 'christ',
          id: 'jer2-christ-fountain',
          title: 'Christ Connection — The Living Water',
          html: 'In John 4, Jesus speaks to the Samaritan woman at the well: "If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water." Christ is the fountain. He is the source of life that does not run dry. To drink of Him is to never thirst again. The woman at the well had gone from man to man—broken cistern after broken cistern—seeking to fill the emptiness within. When she encountered Christ, she found the fountain. Israel&apos;s tragedy is that they knew the fountain but turned away.',
        },
        {
          kind: 'carry',
          html: 'The language of broken cisterns speaks to our own age. We hew out cisterns constantly—we chase relationships that cannot sustain us, work that does not nourish us, pleasures that leave us empty. The fountain of living waters is still offered. Yet we build our own systems, our own structures, our own solutions, finding after great labor that they leak, that they cannot hold what we hoped to contain. What broken cisterns are you trying to fill in your own life?',
        },
        {
          kind: 'reflection',
          id: 'jer2-what-cisterns',
          prompt: 'When you feel spiritually thirsty or empty, what do you tend to turn to first? How might those broken cisterns be keeping you from the fountain?',
        },
      ],
    },

    {
      ref: 'Jeremiah 2:14–37',
      title: 'The Cycle of Forgetting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'Therefore thus saith the Lord; Because ye have forsaken me, I will also do unto you as ye have done unto yourselves.'),
            plain(20, 'For of old I brake thy yoke, and burst thy bands; and thou saidst, I will not transgress; when upon every high hill and under every green tree thou wanderest, playing the harlot.'),
            plain(22, 'For though thou wash thee with nitre, and take thee much soap, yet thine iniquity is marked before me, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-2-78mid-2',
          html:
            'Jeremiah turns from naming Israel&apos;s love-at-the-start to naming her later betrayal. The honeymoon is over; the indictment begins.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(23, 'How canst thou say, I am not polluted, I have not gone after Baalim? see thy way in the valley, know what thou hast done: thou art a swift dromedary traversing her ways;'),
            plain(27, 'Saying to a stock, Thou art my father; and to a stone, Thou hast brought me forth: for they have turned their back unto me, and not their face: but in the time of their trouble they will say, Arise, and save us.'),
            plain(31, 'O generation, see ye the word of the Lord. Have I been a wilderness unto Israel? a land of darkness? wherefore say my people, We are lords; we will come no more unto thee?'),
            plain(32, 'Can a maid forget her ornaments, or a bride her attire? yet my people have forgotten me days without number.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer2-consequences',
          html: 'God states the consequence: because Israel has forsaken Him and chosen other gods, He will let them experience the logical outcome of their choice. This is not punishment in the sense of arbitrary retribution. It is the natural consequence of a people who have cut themselves off from their source of life. As they have done to themselves, so it will be done to them.',
        },
        {
          kind: 'commentary',
          id: 'jer2-stubborn',
          html: 'Throughout this section, Israel is portrayed as stubborn and blind. Like a dromedary—a camel—racing aimlessly through the desert, Israel pursues idolatry without reason or restraint. They speak to logs and stones as if these dead things could save them. They claim to be clean when they are polluted. They say "I am not polluted, I have not gone after Baalim," yet their way in the valley is visible testimony against them.',
        },
        {
          kind: 'commentary',
          id: 'jer2-forget',
          html: 'God poses a question that cuts to the heart: "Can a maid forget her ornaments, or a bride her attire? yet my people have forgotten me days without number." The image is intimate. A bride does not forget her adornments. Her wedding attire is tied to her identity, to her joy, to the most sacred moment of her life. Yet Israel—described as the bride of God—has forgotten Him as if He were nothing. This forgetting is not innocent. It is active, willful, sustained over many days.',
        },
        {
          kind: 'carry',
          html: 'The tragedy of Israel is the tragedy of forgetting. Not forgetting intellectually—they know God exists. But forgetting what He means, forgetting the covenant, forgetting the one who saved them. We do the same. We forget quickly the goodness we have experienced, the deliverance we have received, the love that has been shown us. We live as if these things never happened. How do you cultivate remembrance? What practices keep you from the spiritual forgetting that Israel exemplifies?',
        },
        {
          kind: 'reflection',
          id: 'jer2-can-forget',
          prompt: 'What goodness or deliverance from God have you forgotten or taken for granted? How could you practice remembrance—not just intellectually, but in your daily life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My people have committed two evils; they have forsaken me the fountain of living waters, and hewed them out cisterns, broken cisterns, that can hold no water.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 2 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-jeremiah',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jeremiah',
      url: 'https://www.bibleodyssey.org/passages/main-articles/jeremiah/',
      description: 'Peer-reviewed SBL entry on the prophet Jeremiah and his historical context.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],

  hasHebrew: true,
};
