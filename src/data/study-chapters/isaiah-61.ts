import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 61 — The Mission of the Anointed
 *
 * "The Spirit of the Lord God is upon me; because the Lord hath anointed me to
 * preach good tidings unto the meek." The Servant describes His mission: to
 * bring glad tidings to the poor, to proclaim liberty to the captives, recovery
 * of sight to the blind, to let the oppressed go free, to proclaim the acceptable
 * year of the Lord. This is Christ\'s mission statement. In Luke 4, Jesus stands
 * in the Nazareth synagogue and reads these very words, declaring them fulfilled
 * in His hearing.
 */
export const ISAIAH_61: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 61,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['hope', 'deliverance', 'messianic-prophecy', 'new-creation'],
  opener: {
    topical: true,
    caption: 'Isaiah 61',
  },
  intros: [
    'Isaiah 61 is one of the most directly Christological chapters in the Old Testament. The Servant speaks in the first person, describing the anointing He has received and the mission He carries. He comes to heal the brokenhearted, to comfort those who mourn, to replace their mourning with joy, their ashes with a crown of beauty. This is not abstract theology. It is a description of redemption that touches every person, heals every wound, restores every loss. And Jesus Himself claims this as His mission, reading it in the synagogue and saying: "This day is this scripture fulfilled in your ears" (Luke 4:21).',
  ],

  sections: [
    {
      ref: 'Isaiah 61:1–6',
      title: 'The Anointed Servant\'s Mission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 61,
          lines: [
            plain(1, 'The Spirit of the Lord God is upon me; because the Lord hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to them that are bound;'),
            plain(2, 'To proclaim the acceptable year of the Lord, and the day of vengeance of our God; to comfort all that mourn;'),
            plain(3, 'To appoint unto them that mourn in Zion, to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the Lord, that he might be glorified.'),
            plain(4, 'And they shall build the old wastes, they shall raise up the former desolations, and they shall repair the waste cities, the desolations of many generations.'),
            plain(5, 'And strangers shall stand and feed your flocks, and the sons of the alien shall be your plowmen and your vinedressers.'),
            plain(6, 'But ye shall be called the Priests of the Lord: men shall call you the Ministers of our God: ye shall eat the riches of the Gentiles, and in their glory shall ye make your boast.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa61-spirit',
          html:
            'The Spirit of the Lord is upon the Servant. This is the anointing spoken of in Isaiah 11:2. The Lord has commissioned Him with a mission: to preach good tidings to the meek, to bind up the brokenhearted, to proclaim liberty to captives, to open prison doors. This is the gospel in summary: good news to the poor, freedom to the enslaved, comfort to the mourning.[res:sefaria-isaiah-61]',        },
        {
          kind: 'hebrew',
          id: 'isaiah61-yovlim',
          title: 'Yovlim — "Jubilee"',
          script: 'יוֹבִלִים',
          translit: '<strong>Yovlim</strong> · jubilees; periods of restoration',
          description: 'The jubilee year is when debts are forgiven and land restored—the year of God\'s favor.',
        },
        {
          kind: 'commentary',
          id: 'isa61-beauty',
          html:
            'The Servant appoints beauty for ashes, oil of joy for mourning, garment of praise for heaviness of spirit. This is not merely comfort. It is replacement—a complete reversal of sorrow into joy. The people who were in mourning become trees of righteousness, planted by the Lord[res:sefaria-isaiah-61-v1][res:bibleodyssey-isaiah-overview-61].',        },
        {
          kind: 'hebrew',
          id: 'isa61-yovl',
          title: 'Yovl — "Jubilee" (Acceptable Year)',
          script: 'יוֹבֵל',
          translit: '<strong>Yovl</strong> · jubilee; acceptable year; the year of release',
          description:
            'The "acceptable year of the Lord" refers to the Jubilee, the year when all debts are forgiven, all slaves are released, all land is returned to its original owners. Christ proclaims an eternal jubilee—a permanent liberation from sin\'s debt.',
        },
        {
          kind: 'christ',
          id: 'isa61-christ-mission',
          title: 'Christ Connection — The Mission Statement',
          html:
            'In Luke 4:16–21, Jesus enters the synagogue in Nazareth on the Sabbath and reads Isaiah 61:1–2. After reading, He closes the book and says: "This day is this scripture fulfilled in your ears." The Gospels record His ministry as fulfilling this mission: He healed the brokenhearted, called the poor blessed, proclaimed freedom to captives (both literal and spiritual), and brought sight to the blind. He is the Anointed One whose Spirit proclaims good news to the poor.',        },
        {
          kind: 'carry',
          html:
            'If we belong to Christ, we share in His mission. We are called to comfort those who mourn, to preach good tidings to the meek, to be agents of liberation and healing in a broken world. This is not a calling reserved for clergy or the specially gifted. It is the calling of every disciple.',        },
        {
          kind: 'reflection',
          id: 'isa61-mission',
          prompt: 'What does it mean to share in Christ\'s mission of healing the brokenhearted and proclaiming liberty to captives? How might you live out this mission in your community?',
        },
      ],
    },

    {
      ref: 'Isaiah 61:7–11',
      title: 'Everlasting Joy and Vindication',
      blocks: [
        {
          kind: 'scripture',
          chapter: 61,
          lines: [
            plain(7, 'For your shame ye shall have double; and for confusion they shall rejoice in their portion: therefore in their land they shall possess the double: everlasting joy shall be unto them.'),
            plain(8, 'For I the Lord love judgment, I hate robbery for burnt offering; and I will direct their work in truth, and I will make an everlasting covenant with them.'),
            plain(9, 'And their seed shall be known among the Gentiles, and their offspring among the people: all that see them shall acknowledge them, that they are the seed which the Lord hath blessed.'),
            plain(10, 'I will greatly rejoice in the Lord, my soul shall be joyful in my God; for he hath clothed me with the garments of salvation, he hath covered me with the robe of righteousness, as a bridegroom decketh himself with ornaments, and as a bride adorneth herself with her jewels.'),
            plain(11, 'For as the earth bringeth forth her bud, and as the garden causeth the things that are sown in it to spring forth; so the Lord God will cause righteousness and praise to spring forth before all the nations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa61-double',
          html:
            'For shame, there will be double honor. For confusion, rejoicing in their portion. Everlasting joy shall be theirs. This is not a small or temporary relief. This is permanent transformation. The past is not merely forgiven; it is reversed—shame becomes double honor.',        },
        {
          kind: 'commentary',
          id: 'isa61-covenant',
          html:
            'God makes an everlasting covenant with those who experience this redemption. He loves judgment and hates robbery. He directs their work in truth. Their seed will be known among the nations, acknowledged as blessed by the Lord.',        },
        {
          kind: 'commentary',
          id: 'isa61-bridegroom',
          html:
            'The redeemed person rejoices greatly in the Lord. They are clothed with garments of salvation, covered with the robe of righteousness. The imagery is that of a bridegroom adorned for his wedding, a bride adorned with jewels. The redeemed are prepared for intimate union with God.',        },
        {
          kind: 'carry',
          html:
            'Isaiah 61 ends with the affirmation that righteousness and praise will spring forth before all the nations, as surely as a garden brings forth growth. The Servant\'s redemptive work is not hidden or small. It bears fruit that is visible to all the earth.',
        },
        {
          kind: 'reflection',
          id: 'isa61-clothed',
          prompt: 'What does it mean to be "clothed with the garments of salvation" and "covered with the robe of righteousness"? How does this image change the way you understand your identity in Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Spirit of the Lord God is upon me...to preach good tidings unto the meek...to comfort all that mourn.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 61 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-61',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 61',
      url: 'https://www.sefaria.org/Isaiah.61',
      description: 'Sefaria open-access source text and translations for Isaiah 61.',
    },
    {
      id: 'sefaria-isaiah-61-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 61 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.61',
      description: 'The Hebrew text of Isaiah 61 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-isaiah-overview-61',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Isaiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/isaiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Isaiah.',
    },

  ],

  hasHebrew: true,
};
