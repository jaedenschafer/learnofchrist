import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 12 — Rehoboam Forsakes the Law; Shishak Invades
 *
 * At the peak of his power, King Rehoboam turns away from the Lord. He does
 * not seek Him. The kingdom collapses under invasion. Yet when the king
 * humbles himself, God grants a partial reprieve. The treasures of Solomon
 * are plundered; the golden shields are replaced with brass. A cycle emerges:
 * forsaking brings judgment; humbling brings mercy. And always, the visible
 * splendor fades.
 */
export const CHRONICLES_2_12: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 12,

  estimatedMinutes: { beginner: 3, intermediate: 8, deep: 12 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 12',
  },
  intros: [
    'The book of 2 Chronicles presents a recurring pattern: strength produces pride; pride produces forsaking; forsaking brings judgment; humbling brings mercy. And yet mercy, when it comes, is often partial. The treasures remain lost. The kingdom is diminished.',
    'Rehoboam begins his reign with the kingdom firmly established. He has strengthened himself. The kingdom is his. But then comes the crucial moment, the hinge on which everything turns: He forsook the law of the Lord. Not in a moment of desperate persecution or desperate weakness, but in a moment of strength. When he had the power to choose otherwise, he chose to turn away. The prophet Shemaiah will later describe it precisely: "He prepared not his heart to seek the Lord." This is not failure of circumstance; this is failure of will.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 12',
    quote:
      'In the moment of strength, Rehoboam turned from the Lord. Yet when he humbled himself, mercy came — though not restoration. The pattern teaches: what we lose through forsaking cannot always be recovered, even when we repent.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 12 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-judah-monarchy',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Judah in the Monarchy Period',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA database of Iron Age Judahite sites, inscriptions, and settlement patterns.',
    },
    {
      id: 'sefaria-2-chronicles-12',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.12',
      description: 'The Hebrew text of 2 Chronicles 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-2-chronicles-overview-12',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '2 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/2-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 2 Chronicles.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 12:1–4 — Rehoboam Forsakes; Shishak Invades ────── */
    {
      ref: '2 Chronicles 12:1–4',
      title: 'He Forsook the Law of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And it came to pass, when Rehoboam had established the kingdom, and had strengthened himself, he forsook the law of the Lord, and all Israel with him.'),
            plain(2, 'And it came to pass, that in the fifth year of king Rehoboam Shishak king of Egypt came up against Jerusalem, because they had transgressed against the Lord,'),
            plain(3, 'With twelve hundred chariots, and threescore thousand horsemen: and the people were without number that came with him out of Egypt; the Lubims, the Sukkiims, and the Ethiopians.'),
            plain(4, 'And he took the fenced cities which pertained to Judah, and came to Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'established-forsook',
          html:
            'Notice the sequence: <em>after</em> he has established the kingdom, <em>after</em> he has strengthened himself, he forsakes the law. This is not the forsaking of a desperate man grasping at survival. This is the forsaking of a secure man, confident in his own power. And when he forsakes, all Israel with him — the spiritual leadership of a nation shapes the whole nation\'s path[res:sefaria-2-chronicles-12][res:bibleodyssey-2-chronicles-overview-12].',
        },
        {
          kind: 'hebrew',
          id: 'azav-forsake',
          title: 'Azav — "To Forsake" or "To Leave Behind"',
          script: 'עָזַב',
          translit: '<strong>Azav</strong> · to forsake, abandon, leave',
          description:
            'The Hebrew verb <em>azav</em> is the heart of this account. It means not merely to turn away momentarily, but to abandon, to leave behind. When Rehoboam forsakes the law, he is not stumbling into error; he is actively choosing to leave behind the covenant obligations that held his kingdom together.',
        },
        {
          kind: 'commentary',
          id: 'shishak-invasion',
          html:
            'Shishak of Egypt does not come by chance. He comes because Israel has "transgressed against the Lord." The narrative makes clear: the political invasion is the visible expression of a spiritual rupture. The kingdom is vulnerable not because Rehoboam is weak in arms, but because he has separated himself from the Lord. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'commentary',
          id: 'twelve-hundred-chariots',
          html:
            'The army Shishak brings is staggering — twelve hundred chariots, sixty thousand horsemen, and peoples from Egypt, Libya, and Ethiopia. The number is overwhelming, and Rehoboam has no answer for it. He has strengthened the kingdom, but that strength has become brittle, hollow. True strength rests in faithfulness, not in fortifications or military preparation alone.',
        },
        {
          kind: 'carry',
          html:
            'We strengthen ourselves and forget that the only strength worth having is anchored in God. We build our walls, assemble our armies, and then wonder why they fail us. Sometimes our collapse comes not from weakness but from the confidence that our own strength is enough. What are you relying on that might fail if the Lord is not at the foundation?',
        },
        {
          kind: 'reflection',
          id: 'forsake-strength',
          prompt: 'Rehoboam turned from God when he was <em>strong</em>, not when he was weak. When have you been most tempted to turn away from faithfulness — in times of struggle, or in times of security?',
        },
      ],
    },

    /* ─── 2 Chronicles 12:5–8 — The Prophet Shemaiah; Humbling and Mercy ── */
    {
      ref: '2 Chronicles 12:5–8',
      title: 'Shemaiah: "Ye Have Forsaken Me, and Therefore Have I Left You"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'Then came Shemaiah the prophet to Rehoboam, and to the princes of Judah, that were gathered together to Jerusalem because of Shishak, saying unto them, Thus saith the Lord, Ye have forsaken me, and therefore have I also left you in the hand of Shishak.'),
            plain(6, 'Whereupon the princes of Israel and the king humbled themselves; and they said, The Lord is righteous.'),
            plain(7, 'And when the Lord saw that they humbled themselves, the word of the Lord came to Shemaiah, saying, They have humbled themselves; therefore I will not destroy them, but I will grant them some deliverance; and my wrath shall not be poured out upon Jerusalem by the hand of Shishak.'),
            plain(8, 'Nevertheless they shall be his servants; that they may know the difference between my service, and the service of the kingdoms of the countries.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'shemaiah-message',
          html:
            'Shemaiah brings the word of the Lord with perfect clarity: the reason for the invasion is not geopolitical, not a matter of military miscalculation. It is spiritual. "Ye have forsaken me, and therefore have I also left you." The forsaking works both ways. When the people turn away, the Lord permits the consequences of that turning to fall upon them.',
        },
        {
          kind: 'hebrew',
          id: 'nakha-humble',
          title: 'Nakha — "To Humble Oneself"',
          script: 'נָכַע',
          translit: '<strong>Nakha</strong> · to be humbled, to humble oneself, to be subdued',
          description:
            'The turning point comes when the king and princes <em>humble themselves</em> (nakha). This is not mere acknowledgment of wrongdoing. In Hebrew, it carries the sense of being broken, subdued, made small. Rehoboam and his princes do not defend themselves or make excuses. They receive the judgment and bow under it.',
        },
        {
          kind: 'commentary',
          id: 'lord-is-righteous',
          html:
            'Their confession is striking in its simplicity: "The Lord is righteous." Not "We are sorry," not "We will do better," but an affirmation that God is right to judge them. They align themselves with God&apos;s justice rather than arguing against it.',
        },
        {
          kind: 'commentary',
          id: 'partial-deliverance',
          html:
            'The mercy that comes is remarkable — and yet it is partial. "I will grant them some deliverance" and "my wrath shall not be poured out upon Jerusalem." But notice: "Nevertheless they shall be his servants." Mercy rescues them from total destruction, but does not restore them. They are spared, but enslaved. They may know the difference between the Lord&apos;s service and the service of earthly kingdoms.',
        },
        {
          kind: 'carry',
          html:
            'The pattern of partial mercy teaches something hard: repentance restores relationship, but it does not always restore circumstances. The humbled man is freed from the sentence of death, but he may still bear the consequences of his choices. Yet in that bearing, there is a gift — the knowledge of what it costs to turn away, and what it means to belong to the Lord.',
        },
        {
          kind: 'reflection',
          id: 'humble-themselves',
          prompt: 'When Rehoboam and his princes humbled themselves, they said, "The Lord is righteous." Have you ever faced a moment where, instead of defending yourself, you had to acknowledge that judgment was just? What happened next?',
        },
      ],
    },

    /* ─── 2 Chronicles 12:9–11 — The Golden Shields Replaced with Brass ──── */
    {
      ref: '2 Chronicles 12:9–11',
      title: 'The Shields of Gold Become Brass',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'So Shishak king of Egypt came up against Jerusalem, and took away the treasures of the house of the Lord, and the treasures of the king\'s house; he took all: he carried away also the shields of gold which Solomon had made.'),
            plain(10, 'Instead of which king Rehoboam made shields of brass, and committed them to the hands of the chief of the guard, that kept the entrance of the king\'s house.'),
            plain(11, 'And when the king entered into the house of the Lord, the guard came and fetched them, and brought them again into the guard chamber.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'treasures-taken',
          html:
            'The invasion becomes concrete. It is not an abstraction. Shishak takes the treasures of the house of the Lord — the very heart of the sanctuary\'s wealth — and the treasures of the king\'s house. What was precious, what was secure, what represented the glory of Solomon\'s reign, is gone. Carried away to Egypt.',
        },
        {
          kind: 'hebrew',
          id: 'zahav-nechoshet',
          title: 'Zahav and Nechoshet — "Gold" and "Brass"',
          script: 'זָהָב / נְחֹ֫שֶׁת',
          translit: '<strong>Zahav</strong> · gold · <strong>Nechoshet</strong> · brass, bronze, copper',
          description:
            'The contrast between zahav (gold) and nechoshet (brass) runs through the account like a refrain. Gold is precious, enduring, refined by fire. Brass is common, practical, less valuable. The substitution speaks volumes: what was once glorious and precious has become ordinary. The symbols of power have been degraded.',
        },
        {
          kind: 'commentary',
          id: 'shields-of-gold',
          html:
            'The shields of gold are not primarily weapons. They are symbols — of Solomon\'s magnificence, of the kingdom\'s wealth, of the visible blessing of God on the line of David. When Shishak takes them, he takes the visible sign of the kingdom\'s glory. Rehoboam replaces them with shields of brass — functional, but stripped of splendor.',
        },
        {
          kind: 'commentary',
          id: 'guard-chamber',
          html:
            'The brass shields are not for use in battle. They are ceremonial — brought out only when the king enters the house of the Lord, then returned to the guard chamber. Even the appearance of power must be carefully managed. The strength is gone, and what remains is theater.',
        },
        {
          kind: 'christ',
          id: 'christ-treasures-kingdom',
          title: 'Christ Connection — Treasures That Cannot Be Plundered',
          html:
            'Rehoboam\'s golden treasures were taken from him because they were tangible, external, vulnerable to an invading army. But Jesus teaches: "Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal: But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal: For where your treasure is, there will your heart be also" (Matthew 6:19–20). The King who establishes an eternal kingdom does not rely on gold shields. His kingdom cannot be plundered by any earthly power.',
        },
        {
          kind: 'carry',
          html:
            'What treasures are you guarding as if they were permanent? What symbols of security are you depending on that can be carried away in a moment? The story of the golden shields teaches: only what rests in God\'s hands is truly safe. Everything else is brass.',
        },
        {
          kind: 'reflection',
          id: 'shields-brass',
          prompt: 'The golden shields were replaced with brass — less precious, but still functional. What loss in your life required you to let go of what was beautiful or precious, and accept something more ordinary?',
        },
      ],
    },

    /* ─── 2 Chronicles 12:12–16 — "He Prepared Not His Heart to Seek the Lord" ── */
    {
      ref: '2 Chronicles 12:12–16',
      title: '"He Prepared Not His Heart to Seek the Lord"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(12, 'And when he humbled himself, the wrath of the Lord turned from him, that he would not destroy him altogether: and also in Judah things went well.'),
            plain(13, 'So king Rehoboam strengthened himself in Jerusalem, and reigned: for Rehoboam was one and forty years old when he began to reign, and he reigned seventeen years in Jerusalem, the city which the Lord had chosen out of all the tribes of Israel, to put his name there.'),
            plain(14, 'And his mother\'s name was Naamah an Ammonitess. And he did evil, because he prepared not his heart to seek the Lord.'),
            plain(15, 'And the acts of Rehoboam, first and last, are they not written in the book of Shemaiah the prophet, and of Iddo the seer concerning genealogies? And there were wars between Rehoboam and Jeroboam continually.'),
            plain(16, 'And Rehoboam slept with his fathers, and was buried in the city of David: and Abijah his son reigned in his stead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'wrath-turned',
          html:
            'When Rehoboam humbles himself, the wrath turns away. He is spared. "Also in Judah things went well" — not perfectly, not restored to former glory, but well enough. Mercy has genuine power. The humbled man finds that grace can repair what shame has broken.',
        },
        {
          kind: 'commentary',
          id: 'strengthened-himself',
          html:
            'Yet the pattern does not break. Rehoboam, after his humbling and after the disaster, strengthens himself in Jerusalem again. The statement echoes verse 1: "he strengthened himself." Has he learned? Or does he, once again, rely on his own power? The text will answer.',
        },
        {
          kind: 'commentary',
          id: 'city-chosen',
          html:
            'The narrator pauses to note that Jerusalem is "the city which the Lord had chosen out of all the tribes of Israel, to put his name there." This is the city where the Lord dwells, where the temple stands. It is the city Rehoboam could not protect through his own strength, but which God preserved through his mercy.',
        },
        {
          kind: 'hebrew',
          id: 'lev-kashan',
          title: 'Lev — "Heart"',
          script: 'לֵב',
          translit: '<strong>Lev</strong> · heart, mind, center; the seat of will and intention',
          description:
            'The verdict on Rehoboam is devastating in its simplicity: he did evil "because he prepared not his heart to seek the Lord." The word <em>lev</em> (heart) is not merely the seat of emotion, but the center of will and intention. Rehoboam did not prepare his heart — he did not orient his deepest self toward seeking the Lord. The forsaking came from a heart that was not ready, not disposed, not inclined toward God.',
        },
        {
          kind: 'commentary',
          id: 'prepared-not-heart',
          html:
            'This is the Chronicler\'s final judgment on Rehoboam. Not that he was weak, not that he was foolish, not that circumstances overwhelmed him. Rather: he prepared not his heart to seek the Lord. The blame rests not on circumstance, but on a will that did not choose to pursue God. And from that unprepared heart, evil flows.',
        },
        {
          kind: 'christ',
          id: 'christ-heart-hebrews',
          title: 'Christ Connection — "Take Heed, Brethren"',
          html:
            'The warning about an unprepared heart echoes through Hebrews: "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God" (Hebrews 3:12). And: "But exhort one another daily, while it is called To day; lest any of you be hardened through the deceitfulness of sin" (Hebrews 3:13). Rehoboam\'s failure was not a moment of weakness in a faithful life; it was the fruit of a heart that had not been kept, not guarded, not prepared to seek. The writer of Hebrews urges the same vigilance: maintain a heart ready to receive God, or it will grow hard.',
        },
        {
          kind: 'commentary',
          id: 'wars-continually',
          html:
            'The kingdom continues, but the wars continue too. Between Rehoboam and Jeroboam, there is no peace. The kingdom is divided, and the division is permanent. Rehoboam rules, but over a kingdom that has lost its unity, its treasure, its golden symbols of power. He reigns seventeen years, then he dies. His son Abijah succeeds him.',
        },
        {
          kind: 'carry',
          html:
            'Rehoboam teaches a hard lesson: mercy preserves life, but it does not erase consequences. The unprepared heart — the heart not seeking the Lord — produces a life of unresolved conflict, diminished glory, lost treasures, and brass shields where gold once hung. Yet even this diminished life is a kind of grace. He is not destroyed. Judah endures. And in the endurance, there is still the possibility of turning back, if only a later king will prepare his heart to seek.',
        },
        {
          kind: 'reflection',
          id: 'prepared-heart',
          prompt: 'Rehoboam "prepared not his heart to seek the Lord." What does it mean for you to "prepare your heart" in your own faith? How do you do that, and what happens when you stop?',
        },
      ],
    },
  ],
};
