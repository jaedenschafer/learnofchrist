import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 20 — The Sign-Act: Isaiah Naked and Barefoot for Three Years
 *
 * The LORD commands Isaiah to walk naked and barefoot for three years as a sign
 * against Egypt and Ethiopia. This is not symbolic prophecy alone—it is
 * embodied witness. The prophet becomes himself a living sign, his humiliation
 * and vulnerability acting out the humiliation and captivity that will come
 * upon the nations that trust in their own strength rather than in God.
 */
export const ISAIAH_20: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 20,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Isaiah 20 contains one of the most extraordinary commands in Scripture: the prophet himself is ordered by the Lord to walk naked and barefoot as a sign and a portent against Egypt and Ethiopia. For three years—roughly the duration of a typical military campaign—Isaiah carries his body through the streets of Jerusalem bearing witness to the future captivity of the nations. This is not metaphorical prophecy. It is prophecy enacted in flesh and blood, in shame and vulnerability.',
    'The chapter reveals the nature of prophetic calling at its most radical. The prophet does not merely speak God&apos;s word; he becomes that word, inscribing it on his own body, embodying judgment and exile in his own flesh. It is an act of identification, of solidarity—the prophet bearing in his body the shame that others will bear in their captivity.',
  ],

  sections: [
    {
      ref: 'Isaiah 20:1–6',
      title: 'The Living Sign: Isaiah&apos;s Three-Year Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'In the year that Tartan came unto Ashdod, (when Sargon the king of Assyria sent him,) and fought against Ashdod, and took it;'),
            plain(2, 'At the same time spake the Lord by Isaiah the son of Amoz, saying, Go and loose the sackcloth from off thy loins, and put off thy shoe from thy foot. And he did so, walking naked and barefoot.'),
            plain(3, 'And the Lord said, Like as my servant Isaiah hath walked naked and barefoot three years for a sign and a wonder upon Egypt and upon Ethiopia;'),
            plain(4, 'So shall the king of Assyria lead away the Egyptians prisoners, and the Ethiopians captives, young and old, naked and barefoot, even with their buttocks uncovered, to the shame of Egypt.'),
            plain(5, 'And they shall be afraid and ashamed of the Ethiopians their confidants, and of Egypt their glory.'),
            plain(6, 'And the inhabitant of this isle shall say in that day, Behold, such is our confidant, wherein we trusted to be delivered from the king of Assyria: and how shall we escape?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah20-command',
          html:
            'The command is stark and without explanation: "Loose the sackcloth from off thy loins, and put off thy shoe from thy foot." Isaiah obeys. He walks naked and barefoot. No altar, no temple mediates this act. It is body to street, flesh to the public gaze. The prophet submits his dignity, his modesty, to the purposes of God.[res:sefaria-isaiah-20]',
        },
        {
          kind: 'commentary',
          id: 'isaiah20-sign',
          html:
            '"For a sign and a wonder upon Egypt and upon Ethiopia." The prophet&apos;s nakedness is not symbolic poetry. It is a sign—something that points beyond itself to a reality. Just as Egypt and Ethiopia will be led away naked and barefoot into captivity, so the prophet walks. He is the pre-enactment, the living prophecy of what will come upon them.[res:british-museum-babylon-tyre]',
        },
        {
          kind: 'hebrew',
          id: 'isaiah20-sign-ot',
          title: 'Ot — "Sign" (Wonder)',
          script: 'אוֹת',
          translit: '<strong>Ot</strong> · sign; wonder; portent; something that points beyond itself',
          description:
            'A sign is not merely a symbol. It is a visible reality that points toward a hidden meaning or future event. When Moses shows the plagues as signs, they are both real events and pointers to God&apos;s power. When Isaiah&apos;s body becomes a sign, his actual nakedness and humiliation point to the coming humiliation of nations.',
        },
        {
          kind: 'commentary',
          id: 'isaiah20-buttocks',
          html:
            'The details matter. Captives are stripped "even with their buttocks uncovered, to the shame of Egypt." This is not merely loss of clothing. It is the exposure of shame, the stripping away of dignity. The prophet, walking these streets in this condition for three years, makes visceral what will happen to the proud when they are brought low[res:sefaria-isaiah-20-v1].',
        },
        {
          kind: 'commentary',
          id: 'isaiah20-confidence',
          html:
            'The inhabitants of Judah will see Egypt and Ethiopia—their hoped-for allies against Assyria—led away in chains. The confidence in these nations will be shattered. Those who trusted in the strength of Egypt and Ethiopia will ask in despair: "How shall we escape?" The sign-act enacts the answer: the only confidence that survives is confidence in the Lord.',
        },
        {
          kind: 'christ',
          id: 'isaiah20-christ-naked',
          title: 'Christ Connection — The Naked Servant',
          html:
            'Isaiah&apos;s nakedness for three years points forward to Christ, who stripped Himself of glory to take on human flesh, and who was stripped naked on the cross. In Philippians 2, Paul describes Christ "emptying himself," taking the form of a servant. At the crucifixion, Christ is left naked and humiliated, bearing in His body the judgment that humanity deserves. Yet this nakedness, this stripping, becomes the sign of salvation. Where Isaiah&apos;s body testified to judgment, Christ&apos;s body testifies to redemption—judgment borne, judgment overcome, salvation purchased.',
        },
        {
          kind: 'carry',
          html:
            'The sign-act of Isaiah reminds us that witness sometimes requires vulnerability and sacrifice. The prophet does not speak truth from a position of comfort and respectability. He embodies it, bearing shame in his own flesh. It challenges us to ask: what are we willing to sacrifice to bear witness to what we believe?',
        },
        {
          kind: 'reflection',
          id: 'isaiah20-witness',
          prompt: 'What would it cost you to bear witness to God&apos;s truth, not merely in words but in the vulnerability of your own life? Are there comforts or dignities you guard that the prophet calls you to release?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Go and loose the sackcloth from off thy loins, and put off thy shoe from thy foot...walking naked and barefoot.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 20 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-20',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 20',
      url: 'https://www.sefaria.org/Isaiah.20',
      description: 'Sefaria open-access source text and translations for Isaiah 20.',
    },
    {
      id: 'british-museum-babylon-tyre',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'Babylon & Tyre: Imperial Power',
      url: 'https://www.britishmuseum.org/',
      description: 'Archaeological and textual evidence of the nations Isaiah prophesies against.',
    },
    {
      id: 'sefaria-isaiah-20-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 20 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Isaiah.20',
      description: 'The Hebrew text of Isaiah 20 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
