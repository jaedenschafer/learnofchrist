import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_12: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 12,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Hosea 12 looks back to Jacob, Israel&apos;s ancestor. "By his strength he had power with God." Jacob wrestled with the angel of the Lord and prevailed. He wept and made supplication. This is the pattern: struggle, prayer, prevailing through intimacy with God.',
    'Yet Israel has not followed Jacob&apos;s pattern. She has followed Jacob&apos;s deception instead — his striving in her own strength, his manipulation. The chapter calls Israel to return to the God with whom Jacob wrestled, to find strength not in cunning but in communion with God.',
  ],

  bottomShare: {
    label: 'Share Hosea 12',
    quote:
      '"By his strength he had power with God." Jacob prevailed through wrestling with God, through prayer. This is the strength Israel has forgotten.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 12 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 12:1–6',
      title: 'Ephraim Feeds on Wind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Ephraim feedeth on wind, and followeth after the east wind: he daily increaseth lies and desolation; and they do make a covenant with the Assyrians, and oil is carried into Egypt.'),
            plain(2, 'The Lord hath also a controversy with Judah, and will punish Jacob according to his ways; according to his doings will he recompense him.'),
            plain(3, 'He took his brother by the heel in the womb, and by his strength he had power with God:'),
            plain(4, 'Yea, he had power over the angel, and prevailed: he wept, and made supplication unto him: he found him in Beth-el, and there he spake with us;'),
            {
              number: 5,
              spans: [
                t('Even the Lord God of hosts; the Lord is his memorial.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Therefore turn thou to thy God: keep mercy and judgment, and wait on thy God continually.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea12-wind',
          html:
            'Ephraim feeds on wind — on something insubstantial, that cannot nourish. She follows after the east wind — the destructive sirocco that withers all it touches. She increases lies and desolation. Yet Jacob — her ancestor — found power with God through struggle, through weeping, through supplication. There is a contrast: Ephraim feeds on wind; Jacob found God.',
        },
        {
          kind: 'carry',
          html:
            'What are you feeding on? What seems substantial but is only wind? Jacob&apos;s pattern was different: he wrestled, he wept, he made supplication, and he found God. He did not rely on strength or cunning but on persistence in prayer. In what area of your life do you need to turn from chasing wind and return to seeking God?',
        },
        {
          kind: 'reflection',
          id: 'hosea12-wind-2',
          prompt: 'Ephraim feeds on wind. What are you consuming that does not nourish your soul? How will you return to feeding on God&apos;s Word?',
        },
      ],
    },

    {
      ref: 'Hosea 12:7–14',
      title: 'Jacob&apos;s God Is Your God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(7, 'He is a merchant, the balances of deceit are in his hand: he loveth to oppress.'),
            plain(8, 'And Ephraim said, Yet I am become rich, I have found me out substance: in all my labours they shall find none iniquity in me that were sin.'),
            plain(9, 'And I that am the Lord thy God from the land of Egypt will yet make thee to dwell in tabernacles, as in the days of the solemn feast.'),
            plain(10, 'I have also spoken by the prophets, and I have multiplied visions, and used similitudes, by the ministry of the prophets.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea-12-78mid-1',
          html:
            'The prophet turns from accusation to appeal. The marriage metaphor keeps reaching for words to say what unfaithfulness costs.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(11, 'Is there iniquity in Gilead? surely they are vanity: they sacrifice bullocks in Gilgal; yea, their altars are as heaps in the furrows of the fields.'),
            plain(12, 'And Jacob fled into the country of Syria, and Israel served for a wife, and for a wife he kept sheep.'),
            plain(13, 'And by a prophet the Lord brought Israel up out of Egypt, and by a prophet was he preserved.'),
            plain(14, 'Ephraim provoked him to anger most bitterly: therefore shall he leave his blood upon him, and his reproach shall his Lord return unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea12-jacob',
          html:
            'God reminds Israel of her own heritage. "I am the Lord thy God from the land of Egypt." This is the same God who was with Jacob, who brought Israel out of Egypt, who has spoken through the prophets. And this God still claims Israel. He is willing to make her dwell in tabernacles again, to restore the covenant fellowship. But Israel has forgotten Him and pursued deception.',
        },
        {
          kind: 'hebrew',
          id: 'hosea12-natzar',
          title: 'Natzar — "To Keep" or "To Preserve"',
          script: 'נָצַר',
          translit: '<strong>Natzar</strong> · to keep; to guard; to preserve',
          description:
            'God preserved Jacob, kept him, guarded him throughout his journey. This is God&apos;s role toward His people — not just to lead but to keep, to preserve through all danger.',
        },
        {
          kind: 'carry',
          html:
            'Jacob served seven years for a wife. He wrestled through the night for a blessing. He was willing to serve, to labor, to struggle. But Ephraim has grown rich through deception and oppression. She has forgotten Jacob&apos;s example. Where are you relying on deception or strength instead of on prayer and struggle and service?',
        },
        {
          kind: 'reflection',
          id: 'hosea12-jacob-reflection',
          prompt: 'Jacob served, labored, and wrestled with God. How are you following Jacob&apos;s example? Where do you need to be willing to serve and struggle for what God is calling you to?',
        },
      ],
    },

    {
      ref: 'Hosea 12 · All',
      title: 'Prevailing Prayer',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea12-theme',
          html:
            'Hosea 12 teaches that true strength comes through wrestling with God, through prayer, through intimacy with Him. Jacob prevailed not because he was mighty but because he would not let go of God. He held on through the night, weeping, making supplication. This is the strength God is calling Israel to recover.',
        },
        {
          kind: 'christ',
          id: 'hos12-christ',
          title: 'Christ Connection — Intercessor and Wrestler',
          html:
            'Jacob wrestled with God and would not let go. Yet the mightiest wrestler with God, the one who sweated as it were great drops of blood in His struggle, was Christ in Gethsemane. "Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done" (Luke 22:42). Christ did not turn away. He held on through the night of His passion. He prevailed not by might but by yielding wholly to the Father&apos;s will. In Him, Jacob&apos;s pattern reaches its fullest meaning.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
