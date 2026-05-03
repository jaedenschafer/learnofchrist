import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_13: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 13,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Hosea 13 moves toward the climax of judgment. "I will be unto thee as a lion." God will tear Israel like a lion tears its prey. The language is fierce, the imagery violent. Yet even here, in the midst of judgment, there are seeds of redemption.',
    'The chapter contains one of the most powerful statements about resurrection and victory: "I will ransom them from the power of the grave; I will redeem them from death: O death, I will be thy plagues; O grave, I will be thy destruction." The New Testament quotes this passage as fulfilled in Christ&apos;s resurrection. Even as Hosea speaks of judgment, he speaks of Christ&apos;s ultimate victory.',
  ],

  bottomShare: {
    label: 'Share Hosea 13',
    quote:
      '"I will ransom them from the power of the grave; I will redeem them from death." Even in judgment, God promises ultimate redemption through Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 13 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hosea-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hosea 13 · Texts & Translations',
      url: 'https://www.sefaria.org/Hosea.13',
      description: 'Primary sources on God&apos;s fierce judgment and the promise of redemption from death itself.',
    },
    {
      id: 'intertextual-hosea-13-resurrection',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hosea 13:14 ↔ 1 Corinthians 15 — Victory Over Death',
      url: 'https://intertextual.bible/search?query=hosea+13:14',
      description: 'Intertextual study of how Paul applies Hosea&apos;s resurrection promise to Christ&apos;s victory over death.',
    },
  ],

  sections: [
    {
      ref: 'Hosea 13:1–8',
      title: 'The Lion of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'When Ephraim spake trembling, he exalted himself in Israel; but when he offended in Baal, he died.'),
            plain(2, 'And now they sin more and more, and have made them molten images of their silver, and idols according to their own understanding, all of it the work of the craftsmen: they say of them, Let the men that sacrifice kiss the calves.'),
            plain(3, 'Therefore they shall be as the morning cloud, and as the early dew that passeth away, as the chaff that is driven with the whirlwind out of the floor, and as the smoke out of the chimney.'),
            plain(4, 'Yet I am the Lord thy God from the land of Egypt, and thou shalt know no god but me: for there is no saviour beside me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-13-78mid-1',
          html:
            'Ephraim&apos;s ascent and fall are named. Then comes the sharpest turn in the book: &quot;O death, I will be thy plagues; O grave, I will be thy destruction.&quot;',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(5, 'I did know thee in the wilderness, in the land of great drought.'),
            plain(6, 'According to their pasture, so were they filled; they were filled, and their heart was exalted; therefore have they forgotten me.'),
            plain(7, 'Therefore I will be unto them as a lion: as a leopard by the way will I observe them:'),
            plain(8, 'I will meet them as a bear that is bereaved of her whelps, and will rend the caul of their heart, and there will I devour them like a lion: the wild beasts shall tear them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea13-lion',
          html:
            'God will be unto Israel as a lion, as a leopard, as a bereaved bear. The imagery is violent and personal. God will tear Israel&apos;s heart. This is judgment in its most severe form. Yet it comes from the One who knew Israel in the wilderness, who led her, who provided for her. The judgment flows from intimate knowledge and betrayed love[res:sefaria-hosea-13][res:intertextual-hosea-13-resurrection].',
        },
        {
          kind: 'carry',
          html:
            'Israel was exalted but then forgot the God who exalted her. She looked to idols, to false gods, when there was no Savior beside the Lord. What have you forgotten in your seasons of comfort? Where have you turned to false saviors when you should have turned to God?',
        },
        {
          kind: 'reflection',
          id: 'hosea13-forgotten',
          prompt: 'Israel forgot God when she was filled and her heart was exalted. What causes you to forget God? How will you remember Him in seasons of blessing?',
        },
      ],
    },

    {
      ref: 'Hosea 13:9–16',
      title: 'Victory Over Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(9, 'O Israel, thou hast destroyed thyself; but in me is thine help.'),
            plain(10, 'I will be thy king: where is any other that may save thee in all thy cities? and thy judges of whom thou saidst, Give me a king and princes?'),
            plain(11, 'I gave thee a king in mine anger, and took him away in my wrath.'),
            plain(12, 'The iniquity of Ephraim is bound up; his sin is hid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-13-78mid-2',
          html:
            'Ephraim&apos;s ascent and fall are named. Then comes the sharpest turn in the book: &quot;O death, I will be thy plagues; O grave, I will be thy destruction.&quot;',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(13, 'The sorrows of a travailing woman shall come upon him: he is an unwise son; for he should not stay long in the place of the breaking forth of children.'),
            {
              number: 14,
              spans: [
                t('I will ransom them from the power of the grave; I will redeem them from death: O death, '),
                hp('I will be thy plagues', 'hosea13-death'),
                t('; O grave, I will be thy destruction: repentance shall be hid from mine eyes.'),
              ],
            },
            plain(15, 'Though he be fruitful among his brethren, an east wind shall come, the wind of the Lord shall come up from the wilderness, and his spring shall become dry, and his fountain shall be dried up: he shall spoil the treasure of all pleasant vessels.'),
            plain(16, 'Samaria shall become desolate; for she hath rebelled against her God: they shall fall by the sword: their infants shall be dashed in pieces, and their women with child shall be ripped up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea13-death',
          html:
            'The most extraordinary passage in the book: "I will ransom them from the power of the grave; I will redeem them from death: O death, I will be thy plagues; O grave, I will be thy destruction." God is not merely judging. He is promising redemption even from death itself. This is resurrection language, and the New Testament sees it as prophetic of Christ.',
        },
        {
          kind: 'hebrew',
          id: 'hosea13-gaal',
          title: 'Gaal — "To Redeem"',
          script: 'גָּאַל',
          translit: '<strong>Gaal</strong> · to redeem; to buy back; to act as redeemer',
          description:
            'The word "gaal" means to redeem, to buy back, to act as a kinsman-redeemer. When God says "I will redeem them from death," He is placing Himself in the role of Redeemer — the One who will pay the price to buy them back from death itself.',
        },
        {
          kind: 'christ',
          id: 'hosea13-christ-death',
          title: 'Christ Connection — Victory Over Death',
          html:
            'Paul quotes Hosea 13:14 in 1 Corinthians 15:55: "O death, where is thy sting? O grave, where is thy victory?" This is the triumph of Christ&apos;s resurrection. Christ became the Redeemer who ransomed us from the power of death. In His victory, death loses its power. The grave has no victory. Christ is the fulfillment of Hosea&apos;s promise.',
        },
        {
          kind: 'carry',
          html:
            'Even as judgment falls, even as Israel is torn by the lion and the bear, even in the midst of destruction, God promises: "I will ransom them from the power of the grave; I will redeem them from death." This is the God of Hosea — a God who will not ultimately let His people go, who will overcome even death itself.',
        },
        {
          kind: 'reflection',
          id: 'hosea13-redemption',
          prompt: 'God promises to redeem us from the power of death. How does that promise change the way you face your own mortality? How does Christ&apos;s resurrection fulfill it?',
        },
      ],
    },

    {
      ref: 'Hosea 13 · All',
      title: 'Judgment and Redemption',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea13-theme',
          html:
            'Hosea 13 holds judgment and redemption in tension. Israel will be torn by the lion of God&apos;s wrath. Yet even as she is judged, God is planning her redemption. He will ransom her from death. He will destroy the power of the grave. This is the pattern throughout Hosea: God does not destroy His people finally. He judges them to turn them back to Himself.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
