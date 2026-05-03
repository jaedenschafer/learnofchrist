import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 46 — Against Egypt
 *
 * God turns the focus outward. The burden against Egypt begins with vivid
 * imagery: pharaoh and his chariots mustering for battle, confident in their
 * strength. But God's word cuts through the bravado. "Fear thou not, O Jacob
 * my servant." Israel may tremble before Egypt, but God remembers His people.
 * No earthly empire can separate the faithful from God's care.
 */
export const JEREMIAH_46: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 46,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'The book of Jeremiah shifts now from the word to Judah to the word against the nations. Egypt is the first. Pharaoh had offered Israel false hope—promises of protection and alliance that lured the weakening kingdom into political entanglement. When the moment of crisis came, Egypt&apos;s promises proved hollow. Now God speaks against Egypt itself.',
    'The chapter opens with a vivid tableau: Pharaoh and his army preparing for battle. Shields are bright, horses are prepared, chariots gleam. All the pomp and confidence of the mightiest empire in the ancient world—and yet it is nothing before the word of the Lord. God&apos;s message to terrified Israel is simple: "Fear thou not." Fear not Egypt&apos;s strength. Fear not the chariots and the shields. I remember you. I will save you.',
  ],

  sections: [
    /* ─── Jeremiah 46:1–12 — Egypt&apos;s Boast and Shame ──────────────── */
    {
      ref: 'Jeremiah 46:1–12',
      title: 'The Mighty Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(3, 'Order ye the buckler and shield, and draw near to battle.'),
            plain(4, 'Harness the horses; and get up, ye horsemen, and stand forth with your helmets; furbish the spears, and put on the brigandines.'),
            plain(5, 'Wherefore have I seen them dismayed and turned away back? and their mighty ones are beaten down, and are fled apace, and look not back: for fear was round about, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer46-boast',
          html: 'Egypt musters its strength with all the confidence of a superpower. Bucklers and shields, horses and chariots, helmets and spears—the full apparatus of ancient warfare. The language is brisk and commanding: "Order," "draw near," "harness," "get up," "stand forth," "furbish." This is the voice of a military machine in motion, certain of victory[res:bibleodyssey-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer46-dismayed',
          html: 'But then God&apos;s voice cuts in: "Wherefore have I seen them dismayed and turned away back?" The mighty ones are beaten down. They flee without looking back. "For fear was round about." What happened? No human explanation is given. The text simply states that God sees them dismayed—and they are dismayed. God sees them fleeing—and they flee. The implication is that the outcome is not the result of military prowess, but of God&apos;s will made manifest[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'carry',
          html: 'This passage presents a principle that runs through all of Jeremiah: the nations that seem most powerful are the most fragile when they stand against God. Egypt believed its chariots and horses and shields would secure its future. It did not understand that security comes not from arms, but from right relationship with God. What are you putting your confidence in? What shields and spears are you trusting?',
        },
        {
          kind: 'reflection',
          id: 'jer46-fear-not',
          prompt: 'What "Egypt" threatens you? What force or power makes you afraid? How does God&apos;s word to Israel—"Fear thou not"—speak to your situation?',
        },
      ],
    },

    /* ─── Jeremiah 46:27–28 — Fear Not, O Jacob ───────────────────────── */
    {
      ref: 'Jeremiah 46:27–28',
      title: 'The Promise of Remembrance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 46,
          lines: [
            plain(27, 'But fear not thou, O my servant Jacob, and be not dismayed, O Israel: for, behold, I will save thee from afar, and thy seed from the land of their captivity; and Jacob shall return, and be in rest and at ease, and none shall make him afraid.'),
            plain(28, 'Fear not thou, O Jacob my servant, saith the Lord: for I am with thee; for I will make a full end of all the nations whither I have driven thee: but I will not make a full end of thee; but correct thee in measure; yet will I not leave thee wholly unpunished.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer46-save-afar',
          html: 'In the midst of judgment against the nations, God turns to comfort His people. "Fear not thou, O my servant Jacob." The word is personal. Jacob is not a distant people; Jacob is "my servant," bound to God by covenant. And though Jacob will be carried off into captivity, God promises to save him "from afar"—that is, from the very place of exile itself. Jacob will return. He will be at rest and at ease. None shall make him afraid[res:lachish-letters].',
        },
        {
          kind: 'commentary',
          id: 'jer46-full-end',
          html: 'The contrast is stark. God will "make a full end of all the nations whither I have driven thee"—the nations that carried Israel into exile will themselves be destroyed. But Israel? "I will not make a full end of thee." Israel will be corrected, disciplined, punished in measure—but not destroyed. This is the heart of God&apos;s covenant promise: even in judgment, there is mercy. Even in exile, there is hope of return.',
        },
        {
          kind: 'christ',
          id: 'jer46-christ-shepherd',
          title: 'Christ Connection — The Shepherd Gathers',
          html: 'Jeremiah speaks of God gathering Israel from the land of captivity, bringing them back to rest and ease. Christ is that Shepherd. He gathers the scattered sheep—not by force, but by the power of His own life and love. He speaks to those in exile from God and says, "Come unto me, all ye that are weary and are heavy laden, and I will give you rest." The nations that rejected God face destruction. But those who are God&apos;s, even in their brokenness and captivity, are gathered, restored, and made whole in Christ.',
        },
        {
          kind: 'carry',
          html:
            'The word to the exiles is: God remembers you. God will not abandon you, even in the land where you have been taken. Even when surrounding nations seem powerful and threatening, God&apos;s care for His people endures. You may be corrected, disciplined, punished—but you will not be destroyed. You will return. You will find rest.',
        },
        {
          kind: 'reflection',
          id: 'jer46-remember',
          prompt: 'In what ways do you feel like you are in exile—separated from God, far from home, uncertain of return? How does the promise "I will not make a full end of thee" speak to your need?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Fear not thou, O my servant Jacob, and be not dismayed, O Israel: for, behold, I will save thee from afar, and thy seed from the land of their captivity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 46 · Study Guide',
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
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    }
  ],
};
