import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 15 — The Word Made Delightful
 *
 * "Thy words were found, and I did eat them; and thy word was unto me the
 * joy and rejoicing of mine heart." Jeremiah describes his experience of
 * God&apos;s word not as burden but as nourishment, not as task but as delight.
 * The word of God sustains him, transforms him, brings him joy. And yet he
 * suffers for speaking it. In this paradox we see the shape of faithful
 * witness: the word is precious beyond measure, yet speaking it brings
 * isolation and suffering. Christ, the Word made flesh, experienced this
 * paradox perfectly.
 */
export const JEREMIAH_15: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 15,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Jeremiah 15 contains one of the most beautiful yet troubling statements in Scripture. Jeremiah speaks of receiving God&apos;s word: "Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart." He is describing his experience of the word of God not as something imposed upon him but as something discovered, devoured, delighted in. The word sustains him as food sustains the body. It brings him joy as a feast brings joy.',
    'Yet immediately after this declaration of delight comes the acknowledgment of isolation: "I sat alone because of thy hand: for thou hadst filled me with indignation." The word that brings him joy has isolated him. He sits alone. He is filled with indignation at the wickedness he sees. And he laments that he was not born on a day of peace and joy but on a day of sorrow and battle. The paradox of the faithful witness is complete: the greatest joy and the deepest suffering coexist in the one who truly knows and speaks God&apos;s word.',
  ],

  sections: [
    {
      ref: 'Jeremiah 15:1–11',
      title: 'No Intercession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Then said the Lord unto me, Though Moses and Samuel stood before me, yet my mind could not be toward this people: cast them out of my sight, and let them go forth.'),
            plain(2, 'And it shall come to pass, if they say unto thee, Whither shall we go? then thou shalt tell them, Thus saith the Lord; Such as are for death, to death; and such as are for the sword, to the sword; and such as are for the famine, to the famine; and such as are for the captivity, to the captivity.'),
            plain(4, 'And I will cause them to be removed into all kingdoms of the earth, because of Manasseh the son of Hezekiah king of Judah, for that which he did in Jerusalem.'),
            plain(5, 'For who shall have pity upon thee, O Jerusalem? or who shall bemoan thee? or who shall go aside to ask how thou doest?'),
            plain(6, 'Thou hast forsaken me, saith the Lord, thou art gone backward: therefore will I stretch out my hand against thee, and destroy thee; I am weary with repenting.'),
            plain(7, 'And I will fan them with a fan in the gates of the land; I will bereave them of children, I will destroy my people, since they return not from their ways.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer15-moses',
          html: 'Even if Moses and Samuel—two of the greatest intercessors in Scripture—stood before God, God would not relent. The judgment is certain. No amount of intercession can change what is coming. The people have refused the prophets, rejected the warnings, embraced lies. Now judgment must come[res:jer31-hebrews-intertextual][res:sefaria-jeremiah-15].',
        },
        {
          kind: 'commentary',
          id: 'jer15-weary',
          html: 'A remarkable statement: "I am weary with repenting." God is weary with changing His mind, with offering mercy and being rejected, with calling the people back and being spurned. The patience has limits. Yet this weariness is not coldness—it is the exhaustion of love that has been persistently refused[res:lachish-letters].',
        },
        {
          kind: 'carry',
          html: 'The chapter opens with a hard truth: there is a point at which judgment becomes certain, at which turning back is no longer possible. God&apos;s patience is real, but it is not infinite. The invitation to return is extended, but it does not extend forever.',
        },
        {
          kind: 'reflection',
          id: 'jer15-patience',
          prompt: 'If God&apos;s patience has limits, what does that mean about returning to Him? How long will you wait before turning?',
        },
      ],
    },

    {
      ref: 'Jeremiah 15:16–21',
      title: 'The Word as Food',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(16, 'Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart: for I am called by thy name, O Lord God of hosts.'),
            plain(17, 'I sat alone because of thy hand: for thou hadst filled me with indignation.'),
            plain(18, 'Why is my pain perpetual, and my wound incurable, which refuseth to be healed? wilt thou be altogether unto me as a liar, and as waters that fail?'),
            plain(19, 'Therefore thus saith the Lord, If thou return, then will I bring thee again, and thou shalt stand before me: and if thou take forth the precious from the vile, thou shalt be as my mouth.'),
            plain(20, 'And they shall fight against thee; but they shall not prevail against thee: for I am with thee to save thee and to deliver thee, saith the Lord.'),
            plain(21, 'And I will deliver thee out of the hand of the wicked, and I will redeem thee out of the hand of the terrible.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer15-words-found',
          html: 'The word of God is described as something discovered and devoured: "Thy words were found, and I did eat them." The word is not forced upon Jeremiah but received by him like nourishment. It becomes part of his being, the source of his joy. Yet this joy coexists with isolation and suffering. The one who truly feeds on God&apos;s word becomes a voice crying in the wilderness, separated from those who reject that word.',
        },
        {
          kind: 'hebrew',
          id: 'jer15-achal',
          title: 'Achal — "Ate" (Consumed, Internalized)',
          script: 'אָכַל',
          translit: '<strong>Achal</strong> · to eat; to consume; to devour',
          description: 'The Hebrew word achal emphasizes not merely hearing God&apos;s word but consuming it, taking it in, making it part of oneself. To eat the word is to internalize it, to let it nourish and transform you from the inside.',
        },
        {
          kind: 'commentary',
          id: 'jer15-return',
          html: 'In response to Jeremiah&apos;s lament, God offers a way forward: "If thou return, then will I bring thee again." But the return is not from rebellion. Jeremiah is already faithful. The return is a return to trust, to confidence, to standing before God despite the suffering. If he returns to the Lord with his complaint, God will restore him.',
        },
        {
          kind: 'christ',
          id: 'jer15-christ-word',
          title: 'Christ Connection — The Word Made Flesh',
          html: 'In John 1:1, John writes, "In the beginning was the Word, and the Word was with God, and the Word was God." Christ is the Word of God. To eat of Christ, to consume His body and blood in the Eucharist or as a symbol, is to eat the word of God itself. And like Jeremiah, Christ brought joy to those who received Him and suffering to Himself for bringing the truth.',
        },
        {
          kind: 'carry',
          html: 'The deepest joy and the deepest suffering are often found together in the one who truly knows God. The word sustains you, transforms you, brings you joy—yet it may also isolate you, set you at odds with a world that rejects the truth. But God promises to be with you, to deliver you, to redeem you from the hands of those who oppose you.',
        },
        {
          kind: 'reflection',
          id: 'jer15-eat-word',
          prompt: 'How do you eat and consume God&apos;s word? What does it mean to you? And what have you suffered or sacrificed for knowing the truth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart: for I am called by thy name, O Lord God of hosts.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 15 · Study Guide',
  },  resources: [
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
    {
      id: 'sefaria-jeremiah-15',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 15 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.15',
      description: 'The Hebrew text of Jeremiah 15 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
