import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 35 — Faithfulness Across Generations
 *
 * Jeremiah tests the Rechabites, a clan famous for their loyalty to ancestral
 * commands. They refuse wine, honoring a vow their father Jonadab made
 * generations before. Their faithfulness becomes a mirror held up to Israel&apos;s
 * disobedience. The Rechabites show consistency across time; Israel shows only
 * the drift from God that marks each generation.
 */
export const JEREMIAH_35: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 35,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Jeremiah 35 uses an unexpected device to rebuke Israel: the faithfulness of the Rechabites. The Rechabites were a community led by Jonadab, a man who gave his descendants strict rules—they would not drink wine, not plant vineyards, not build houses, but would live as nomads in tents. This was not arbitrary. It was a covenant, a way of maintaining separation from the degrading influences of settled civilization.',
    'The prophet invites the Rechabites to drink wine, and they refuse. They honor their father&apos;s command across generations. And God uses this faithfulness as an indictment of Israel&apos;s unfaithfulness. For centuries, God has sent prophets calling Israel to keep covenant. Yet Israel has drifted further and further from obedience. The Rechabites&apos; loyalty to a human father stands in stark contrast to Israel&apos;s disloyalty to the divine Father.',
  ],

  sections: [
    {
      ref: 'Jeremiah 35:1–19',
      title: 'The Faithful Rechabites',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(2, 'Go unto the house of the Rechabites, and speak unto them, and bring them into the house of the Lord, into one of the chambers, and give them wine to drink.'),
            plain(4, 'And I took Jaazaniah the son of Jeremiah, the son of Habaziniah, and his brethren, and all his sons, and the whole house of the Rechabites;'),
            plain(6, 'But they said, We will drink no wine: for Jonadab the son of Rechab our father commanded us, saying, Ye shall drink no wine, neither ye, nor your sons for ever:'),
            plain(8, 'Thus have we obeyed the voice of Jonadab the son of Rechab our father in all that he hath charged us, to drink no wine all our days, we and our wives, our sons, nor our daughters;'),
            plain(18, 'And Jeremiah said unto the house of the Rechabites, Thus saith the Lord of hosts, the God of Israel; Because ye have obeyed the commandment of Jonadab your father, and kept all his precepts, and done according unto all that he hath commanded you:'),
            plain(19, 'Therefore thus saith the Lord of hosts, the God of Israel; Jonadab the son of Rechab shall not want a man to stand before me for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer35-rechabite',
          html: 'The Rechabites are remarkable not for the commands they keep, but for their consistency in keeping them across generations. The command not to drink wine is specific and peculiar. Yet they honor it. Why? Because their father commanded it. Because they are bound to an ancestral covenant, and they understand their faithfulness as a way of honoring that bond[res:babylonian-chronicle].',
        },
        {
          kind: 'commentary',
          id: 'jer35-obedience',
          html: 'Notice their language: "We will drink no wine...for Jonadab the son of Rechab our father commanded us." The command itself is the reason for obedience. They do not ask whether the command makes sense, whether wine is truly harmful, whether a new generation might choose differently. They obey because to obey is to honor the father who commanded[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'commentary',
          id: 'jer35-israel-contrast',
          html: 'By contrast, Jeremiah turns to Israel and says: I have sent prophets, saying, "Turn ye now every one from his evil way, and amend your doings." But you have not obeyed. You have not listened. The Rechabites honor a human father&apos;s command across centuries. Israel will not honor the commands of the Father of all. The Rechabites maintain covenant. Israel breaks it. The comparison is devastating.',
        },
        {
          kind: 'carry',
          html: 'The Rechabites are rewarded not with the absence of struggle, but with the assurance that their line will not fail. "Jonadab the son of Rechab shall not want a man to stand before me for ever." They chose loyalty across generations, and their legacy is secured. What loyalty are you extending to the God of your fathers? What faithfulness will you pass on to the next generation?',
        },
        {
          kind: 'reflection',
          id: 'jer35-faithful-generations',
          prompt: 'What command or covenant do you need to honor across time? How can faithfulness be passed from one generation to the next? What would it mean to be as consistent as the Rechabites in your obedience to God?',
        },
        {
          kind: 'christ',
          id: 'jer35-christ',
          title: 'Christ Connection — Obedience to the Father',
          html:
            'The Rechabites honored their father&apos;s word across generations, and God called this faithfulness good. But there is one whose obedience surpasses theirs entirely. "My meat is to do the will of him that sent me" (John 4:34). Christ did not question the Father&apos;s commands or ask whether they made sense. He did not waver from them even in Gethsemane, where the cup was bitter. "I delight to do thy will, O my God" (Psalm 40:8). Where the Rechabites honored a human father, Christ honors the divine Father unto completion. Their obedience is the shadow; His obedience is the substance.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Jonadab the son of Rechab our father commanded us...Thus have we obeyed the voice of Jonadab our father in all that he hath charged us. But Israel will not hearken unto my voice, saith the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 35 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    }
  ],

  hasHebrew: false,
};
