import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 8 — Abominations in the Temple
 *
 * Ezekiel is lifted up by the Spirit and brought to Jerusalem. Inside the temple
 * itself — the holiest place, the seat of God&apos;s presence — he sees idolatry.
 * An image that provokes God to jealousy stands at the north gate. Women weep for
 * Tammuz. Men worship the sun. The temple that should be the center of true
 * worship has become a den of false religion. The horror is not merely that the
 * people sin, but that they sin in the very presence of God.
 */
export const EZEKIEL_8: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 8,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'Ezekiel, sitting among the exiles in Babylon, is lifted up by the Spirit and transported in vision to Jerusalem. But what he sees there is not what he expects. He has been announcing judgment on the people, but he has not fully grasped how complete the apostasy has become. Inside the temple — the holiest place on earth, the site where God promised to dwell, where the Ark of the Covenant rests — Ezekiel witnesses idolatry of a brazen kind. Not out in the high places beyond the city, but in God&apos;s own house, in the chamber where God&apos;s presence dwells, false worship continues. The horror is not merely that Israel has turned away from God, but that they have done so in His presence, as if flaunting their rejection.',
  ],

  sections: [
    {
      ref: 'Ezekiel 8:1–18',
      title: 'Idolatry in the Holy Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(3, 'And he put forth the form of an hand, and took me by a lock of mine head; and the spirit lifted me up between the earth and the heaven, and brought me in the visions of God to Jerusalem, to the door of the gate of the inner court that looketh toward the north; where was the seat of the image of jealousy, which provoketh to jealousy.'),
            plain(5, 'Then said he unto me, Son of man, lift up thine eyes now the way toward the north. So I lifted up mine eyes the way toward the north, and behold northward at the gate of the altar this image of jealousy in the entry.'),
            plain(10, 'So I went in and saw; and behold every form of creeping things, and abominable beasts, and all the idols of the house of Israel, pourtrayed upon the wall round about.'),
            plain(11, 'And there stood before them seventy men of the ancients of the house of Israel, and in the midst of them stood Jaazaniah the son of Shaphan, with every man his censer in his hand; and a thick cloud of incense went up.'),
            plain(12, 'Then said he unto me, Son of man, hast thou seen what the ancients of the house of Israel do in the dark? every man in the chambers of his imagery? for they say, The Lord seeth us not; the Lord hath forsaken the land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk8-idols-in-temple',
          html: 'The image of jealousy provokes God&apos;s jealousy because it stands in the most sacred place, the inner court, the very chamber where God promised to dwell. Israel has not merely drifted into idolatry. The priests and elders, the leaders of the people, have brought false worship into the sanctuary itself. And they do this in the dark, in hidden chambers, believing themselves hidden from God&apos;s sight. This is not ignorance but deliberate rebellion[res:babylonian-exile-context].',
        },
        {
          kind: 'hebrew',
          id: 'ezk8-semel-kina',
          title: 'Semel Kinaah — "Image of Jealousy"',
          script: 'סֶמֶל הַקִּנְאָה',
          translit: '<strong>Semel Kinaah</strong> · image of jealousy; the idol that provokes God&apos;s passionate response',
          description:
            'The phrase "image of jealousy" is striking. Not merely an idol, but an idol that provokes God to jealous anger. The Hebrew word kinaah means both jealousy and zeal — it is the passionate response of God to betrayal by those He loves. The idol standing in His temple is not a neutral false god, but a particular provocation, an insult to God&apos;s exclusive covenant with Israel.',
        },
        {
          kind: 'commentary',
          id: 'ezk8-leaders-responsible',
          html: 'The seventy elders of Israel — the leadership, the ones supposed to guard the covenant — are burning incense to these idols in the dark chambers of the temple. They believe they are hidden, that God cannot see what they do in darkness. This assumption reveals how far they have fallen. They have forgotten that God sees all, that darkness is not a refuge from divine sight, that the inner chambers of the temple are not hidden from the God who dwells there[res:sefaria-ezekiel].',
        },
        {
          kind: 'carry',
          html: 'We too sometimes believe ourselves hidden — that what we do in secret, in the dark chambers of our hearts, is unseen by God. But the God who dwells in us, who has claimed our hearts as His temple, sees all. The question is not whether God sees our secret sins, but whether we will confess them and turn.',
        },
        {
          kind: 'reflection',
          id: 'ezk8-hidden-sins',
          prompt: 'What are you doing in darkness that you believe is hidden from God? How does it change your understanding of your relationship with God to know that He sees all, even what you hide from yourself?',
        },
      ],
    },

    {
      ref: 'Ezekiel 8:14–18',
      title: 'Women and the Sun',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(14, 'Then he said unto me, Hast thou seen this, O son of man? turn thee yet again, and thou shalt see greater abominations than these.'),
            plain(15, 'Then he brought me to the door of the gate of the Lord&apos;s house which was toward the north; and, behold, there sat women weeping for Tammuz.'),
            plain(16, 'Then said he unto me, Hast thou seen this, O son of man? turn thee yet again, and thou shalt see greater abominations than these.'),
            plain(17, 'And he brought me into the inner court of the Lord&apos;s house, and, behold, at the door of the temple of the Lord, between the porch and the altar, were about five and twenty men, with their backs toward the temple of the Lord, and their faces toward the east; and they worshipped the sun toward the east.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk8-tammuz-sun',
          html: 'The abominations multiply. Women weep for Tammuz, a dying-and-rising god of the ancient Near East, whose worship was particularly associated with fertility rituals. Then twenty-five men turn their backs on the temple of the Lord and worship the sun toward the east. The progression reveals the depths of Israel&apos;s apostasy. They have not merely added false gods alongside the true God. They have turned their backs on Him entirely, directing their worship toward the creation rather than the Creator[res:tyre-archaeology].',
        },
        {
          kind: 'christ',
          id: 'ezk8-christ-temple-cleanse',
          title: 'Christ Connection — The Temple Cleansed',
          html: 'When Christ enters the temple, He sees a different kind of desecration — the money changers and sellers of doves, the institution corrupted by commerce. But His action is the same as the judgment Ezekiel announces: He drives out the merchants, He overturns the tables, He declares: "It is written, My house shall be called the house of prayer, but ye have made it a den of thieves." Christ will not permit His house to be profaned. The cleansing of the temple is a sign of Christ&apos;s authority and His absolute claim on what belongs to God.',
        },
        {
          kind: 'carry',
          html: 'Our bodies are the temple of the Holy Spirit. When we act in ways that contradict our identity in Christ, when we turn our backs on Him and worship other things, we are desecrating the very temple of God that we are. The call to holiness is not arbitrary. It flows from the truth that we belong to God, that we are His dwelling place, that the least of our actions matters because God sees all.',
        },
        {
          kind: 'reflection',
          id: 'ezk8-temple-body',
          prompt: 'What would it mean to treat your body and mind as God&apos;s temple? Where are you turning your back on God — even in small ways — and directing your worship toward "the sun," toward the created things of this world?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"There stood before them seventy men...with every man his censer in his hand." — Ezekiel 8:11',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 8 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'tyre-archaeology',
      kind: 'archaeology',
      source: 'Israel Museum / ToposText',
      label: 'Tyre Archaeology (Ezek 26-28)',
      url: 'https://www.imj.org.il/en',
      description: 'Archaeological record of ancient Tyre, subject of Ezekiel&apos;s prophecies.',
    }
  ],

  hasHebrew: true,
};
