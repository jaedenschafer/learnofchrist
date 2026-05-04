import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Chronicles 2 — The Genealogy of Judah and David
 *
 * The chapter unfolds the genealogical thread that runs from the twelve sons of Israel
 * down through Judah to the line of David. It preserves names that are scandalous — Tamar,
 * who tricked her father-in-law; Achan, the troubler of Israel; women who bore children
 * outside traditional expectation. Yet this is precisely the line from which the Anointed
 * One would come. The Chronicler, writing after exile, is reminding his people: the promise
 * does not run through the perfect. It runs through the real, the broken, the redeemed.
 * And it leads to David. And beyond David, to the One who is coming.
 */
export const CHRONICLES_1_2: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 2,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 2',
  },
  intros: [
    'After the genealogy of Adam in chapter 1, the Chronicler turns to the twelve sons of Israel — the patriarchs whose names became the tribal inheritance of God&apos;s people. But the focus narrows quickly. The Chronicler is not writing a comprehensive tribal history. He is tracing a single line: the line that leads to Judah, and from Judah to David.',
    'What makes this genealogy remarkable is what it preserves. The sons of Judah include names of those whose birth stories were marked by scandal or tragedy. Tamar, the Canaanite woman whom Judah took against law and custom, mother of Pharez and Zerah. Achan, whose covetousness brought defeat upon all Israel. Yet these names remain in the record. The line of redemption is not hidden from darkness — it runs through it. It acknowledges it. And it continues.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 2',
    quote:
      'The genealogy of David preserves the names of the broken and the scandalous, because the promise runs not through the perfect, but through the real. This is the lineage from which Christ would come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-tribes-israel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Twelve Tribes of Israel',
      url: 'https://www.sefaria.org/search?q=tribes+israel&tab=text',
      description: 'Sefaria texts on the tribal divisions and genealogies of Israel.',
    },
    {
      id: 'sefaria-1-chronicles-2',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 2 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.2',
      description: 'The Hebrew text of 1 Chronicles 2 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 2:1–2 — The Twelve Sons of Israel ─────────────── */
    {
      ref: '1 Chronicles 2:1–2',
      title: 'The Twelve Sons of Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(
              1,
              'These are the sons of Israel; Reuben, Simeon, Levi, and Judah, Issachar, and Zebulun,'
            ),
            plain(
              2,
              'Dan, Joseph, and Benjamin, Naphtali, Gad, and Asher.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'twelve-sons-list',
          html:
            'The Chronicler begins where the history of Israel begins — with the twelve sons of Jacob, whose names became the twelve tribes that would inhabit Canaan after the wilderness wandering. Each name carries the story of Jacob&apos;s life: Reuben the firstborn, Simeon and Levi the fierce ones, Judah the one who emerged as leader, Joseph the beloved and the sufferer, Benjamin the youngest. From these twelve, the entire nation emerges. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'hebrew',
          id: 'shebatim-tribes',
          title: 'Shebatim — "Tribes"',
          script: 'שְׁבָטִים',
          translit: '<strong>Shebatim</strong> · tribes; the twelve divisions of Israel',
          description:
            'The twelve tribes (shebatim) represent the division of the promised land among Jacob&apos;s descendants. But they also represent something deeper: the scattering and gathering of God&apos;s people. In the Chronicler&apos;s time, after exile, most of the northern tribes had been scattered. The Chronicler writes partly to remind his people: all twelve remain in God&apos;s memory and promise, even if only Judah and Benjamin have returned from captivity.',
        },
        {
          kind: 'carry',
          html:
            'We all descend from ancestors — some glorious, some struggling, some unknown. The Chronicler does not skip the genealogy. He records it. He honors it. What ancestors do you carry in your own line? What struggles or strengths do you inherit?',
        },
        {
          kind: 'reflection',
          id: 'twelve-sons',
          prompt:
            'Each of the twelve tribes carries a different character and calling. If you were to name the different "tribes" or roles within your own family, what would they be? Which one are you?',
        },
      ],
    },

    /* ─── 1 Chronicles 2:3–8 — The Sons of Judah and the Scandal ────── */
    {
      ref: '1 Chronicles 2:3–8',
      title: 'Judah and His Line — Including Tamar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('The sons of '),
                hy('Judah', 'judah-praised'),
                t('; Er, and Onan, and Shelah: which three were born unto him of the daughter of Shua the Canaanitess. And Er, the firstborn of Judah, was evil in the sight of the Lord; and he slew him.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And '),
                hp('Tamar', 'tamar-line'),
                t(' his daughter in law bare him '),
                hp('Pharez', 'pharez-breach'),
                t(' and Zerah. All the sons of Judah were five.'),
              ],
            },
            plain(5, 'The sons of Pharez; Hezron, and Hamul.'),
            plain(6, 'And the sons of Zerah; Zimri, and Ethan, and Heman, and Calcol, and Dara: five of them in all.'),
            plain(
              7,
              'And the sons of Carmi; Achar, the troubler of Israel, who transgressed in the thing accursed.'
            ),
            plain(8, 'And the sons of Ethan; Azariah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'judah-praised',
          html:
            'The tribal name Judah derives from the Hebrew word meaning "praise" or "to give thanks." Even in the chaos of his family — the death of Er, the deception of Tamar, the children born in scandal — Judah becomes the tribe from which praise, worship, and kingship will flow. The name itself carries an irony: out of the very line marked by broken expectations and moral failure, a people of praise will emerge. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'tamar-line',
          html:
            'The Chronicler preserves the name of Tamar, the Canaanite woman who bore children to Judah after the death of two of his sons. The story behind these names is found in Genesis 38: Judah, believing his third son Shelah to be the cause of death for his first two, withholds the son from Tamar as her levirate marriage partner. Tamar, left childless and without the protection of the family, disguises herself as a prostitute and seduces Judah himself. When he discovers the deception, he acknowledges his own failure: "She hath been more righteous than I." The Chronicler does not hide this story. He names her. He honors her place in the line that leads to David, and beyond David to Christ. Matthew 1:3 echoes this: Tamar is one of only a few women named in Jesus&apos; genealogy. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'pharez-breach',
          html:
            'Pharez — his name means "breach" or "breaking out" in Hebrew. He and his twin brother Zerah were born amid the scandal of Tamar&apos;s deception. Yet it is Pharez, the product of this breach, from whom the line continues. Not despite the scandal, but through it, the promise flows[res:sefaria-1-chronicles-2][res:bibleodyssey-1-chronicles-overview-2].',
        },
        {
          kind: 'hebrew',
          id: 'peretz-breach',
          title: 'Peretz — "Breach" or "Breaking Out"',
          script: 'פֶּ֫רֶץ',
          translit: '<strong>Peretz</strong> · breach; breaking out; violation of a boundary',
          description:
            'The name Peretz reflects the unusual birth of the twins: Zerah&apos;s hand emerged first, but Peretz broke out ahead of him (Genesis 38:29). In Hebrew, a peretz can mean a breach in a wall, a violation of order. Yet this breach — this unexpected, unlawful emergence — is precisely where the line of David begins. The breaking of custom does not disqualify the line. It marks it.',
        },
        {
          kind: 'christ',
          id: 'tamar-christ',
          title: 'Christ Connection — The Ancestor Jesus Claimed',
          html:
            'Matthew 1:3 names Tamar explicitly in the genealogy of Jesus: "Judas begat Phares and Zara of Thamar." She is one of only five women named in Matthew&apos;s account of Jesus&apos; lineage — the others being Ruth, Bathsheba, and Mary. All of these women bear a mark: Tamar was a foreign woman who violated social law. Ruth was a Moabite, a foreigner and a widow of a man who died under curse. Bathsheba was taken in adultery and murder. Mary was an unwed mother who would be raised in a carpenter&apos;s house. The genealogy of Jesus does not run through the socially respectable. It runs through the women whom society condemned, yet whom God honored. Christ himself chose to be born into a line marked by scandal, by breach, by the overturning of human judgment. When we are condemned by the world, the genealogy whispers: you, too, may be part of this line.',
        },
        {
          kind: 'carry',
          html:
            'We all carry shame or regret — for things we have done, for the things our ancestors did, for the ways we have been marked by scandal or loss. The genealogy of David, preserved by the Chronicler, tells us: this does not disqualify you. It does not make you less a part of God&apos;s people. The promise runs through the broken. It acknowledges what happened. And it continues.',
        },
        {
          kind: 'reflection',
          id: 'tamar-scandal',
          prompt:
            'Tamar&apos;s story involves a deception that was later recognized as righteous. When have you seen injustice exposed or made right in an unexpected way?',
        },
      ],
    },

    /* ─── 1 Chronicles 2:9–17 — From Pharez to David Through Boaz ───── */
    {
      ref: '1 Chronicles 2:9–17',
      title: 'From Pharez to David — The Royal Line',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(
              9,
              'And the sons of Hezron, that were born unto him; Jerahmeel, and Ram, and Chelubai.'
            ),
            plain(10, 'And Ram begat Amminadab; and Amminadab begat Nahshon, prince of the children of Judah;'),
            plain(
              11,
              'And Nahshon begat Salma, and Salma begat Boaz,'
            ),
            plain(
              12,
              'And Boaz begat Obed, and Obed begat Jesse,'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr2-judah-line',
          html:
            'The line of Judah narrows toward David. Pharez and Hezron are not famous, but they are the bridge between the patriarch and the king.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(
              13,
              'And Jesse begat his firstborn Eliab, and Abinadab the second, and Shimma the third,'
            ),
            plain(
              14,
              'Nethaneel the fourth, and Raddai the fifth,'
            ),
            plain(
              15,
              'Ozem the sixth, and David the seventh:'
            ),
            plain(
              16,
              'Whose sisters were Zeruiah, and Abigail. And the sons of Zeruiah; Abishai, and Joab, and Asahel, three.'
            ),
            plain(
              17,
              'And Abigail bare Amasa: and the father of Amasa was Jether a stranger, an Ismaelite.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hezron-generations',
          html:
            'The genealogy narrows to a single line: Pharez&apos;s son Hezron, through his son Ram, down through a succession of generations to Boaz, the man who redeemed Ruth, took her as his wife, and fathered Obed. Obed fathered Jesse. And Jesse — the father of many sons — fathered David. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'nahshon-prince',
          html:
            'Nahshon is identified as a "prince of the children of Judah" — a leader in the wilderness wandering, according to the genealogical records. Yet he is mentioned here not for his own achievement, but for his place in the chain. He is a link in a line. His dignity is that he stands between Pharez and David.',
        },
        {
          kind: 'commentary',
          id: 'boaz-redeemer',
          html:
            'Boaz appears in the genealogy as the link between the old promise (the line of Judah) and a new generation (the generations that will lead to David). The full story of Boaz is in Ruth, where he redeems Ruth, the Moabite widow, and marries her. In doing so, he preserves the line of the kinsman-redeemer — the one who restores what was lost, who brings the outsider into the covenant people. His name means "in him is strength."',
        },
        {
          kind: 'hebrew',
          id: 'boaz-strength',
          title: 'Boaz — "In Him Is Strength"',
          script: 'בֹּעַז',
          translit: '<strong>Boaz</strong> · in him is strength; composed of ba ("in") and oz ("strength")',
          description:
            'The name Boaz carries both a description and a promise. He is the man of strength who acts on behalf of the weak and the widow. In the book of Ruth, he is a picture of redemption — a wealthy kinsman who uses his resources and his standing to redeem Ruth from poverty and preserve her place in the covenant line. When we read his name in this genealogy, we are reminded of what his life meant: strength in service of others, redemption in action.',
        },
        {
          kind: 'commentary',
          id: 'jesse-seventh-son',
          html:
            'David is listed as Jesse&apos;s seventh son. When Samuel comes to anoint a king, David is not even brought into the room at first — he is outside tending sheep. Yet the Lord says to Samuel: "Arise, anoint him; for this is he" (1 Samuel 16:12). The seventh son, the youngest, the one seemingly least likely to rule, is the one God chose. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'christ',
          id: 'boaz-christ',
          title: 'Christ Connection — The Kinsman Redeemer and the Lion of Judah',
          html:
            'Boaz is a forerunner to Christ as the kinsman-redeemer. In the law of levirate marriage and redemption, a kinsman could redeem a widow and restore her name in Israel. Christ plays this role for all humanity — He enters into our condition, takes our debt upon Himself, and restores us to the Father&apos;s family. Revelation 5:5 addresses Him as "the Lion of the tribe of Judah, the Root of David." The genealogy we read here — running through Judah, through Pharez and Tamar and Boaz and Ruth, through Jesse and David — is the genealogy of this Lion. Jesus did not emerge from nobility. He emerged from the poor, the excluded, the scandalous lines of history. And through that line, He came to redeem all.',
        },
        {
          kind: 'carry',
          html:
            'Do you ever feel that your lineage, your family history, your place in the world is too small, too shameful, too unlikely to matter? The genealogy speaks to you. Boaz was a man of strength, but his strength was known for how he used it on behalf of others. His name appears here because he acted. He redeemed. He brought the outsider in. What strength do you have? Whom are you called to redeem?',
        },
        {
          kind: 'reflection',
          id: 'boaz-redeem',
          prompt:
            'Boaz redeemed Ruth, a foreigner and a widow, by using his resources and standing on her behalf. Who in your circle is waiting for someone to act on their behalf? What can you, like Boaz, do to redeem or restore?',
        },
      ],
    },

    /* ─── 1 Chronicles 2:18–55 — The Descendants of Caleb and Jerahmeel ── */
    {
      ref: '1 Chronicles 2:18–55',
      title: 'The Lines of Caleb and Jerahmeel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(
              18,
              'Now Caleb the son of Hezron begat children by Azubah his wife, and by Jerioth: her sons are these; Jesher, and Shobab, and Ardon.'
            ),
            plain(
              19,
              'And when Azubah was dead, Caleb took unto him Ephrath, which bare him Hur.'
            ),
            plain(
              20,
              'And Hur begat Uri, and Uri begat Bezaleel.'
            ),
            plain(
              21,
              'And afterward Hezron went in to the daughter of Machir the father of Gilead, whom he married when he was threescore years old; and she bare him Segub.'
            ),
            plain(
              22,
              'And Segub begat Jair, who had three and twenty cities in the land of Gilead.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'caleb-branch',
          html:
            'The genealogy branches here. Hezron had multiple sons: Ram (who leads to David), Jerahmeel, and Caleb (also called Chelubai). The Chronicler preserves the line of Caleb, which descends through Hur and Uri to Bezaleel — the master craftsman who was appointed to build the Tabernacle. The line that leads away from the throne also carries its own honor: the one who builds the dwelling place of God. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'bezaleel-builder',
          html:
            'Bezaleel, son of Uri, son of Hur, is mentioned in Exodus 31 as a man filled with the Spirit of God, given wisdom and understanding to design and build the Tabernacle. His name appears here in the genealogy not because he was a king, but because his work was sacred. He built the place where God would meet His people. In the chronicle of Israel, king and craftsman, warrior and builder, all have their place in the unfolding story. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(
              25,
              'And the sons of Jerahmeel the firstborn of Hezron were, Ram the firstborn, and Bunah, and Oren, and Ozem, and Ahijah.'
            ),
            plain(
              26,
              'Jerahmeel had also another wife, whose name was Atarah; she was the mother of Onam.'
            ),
            plain(
              33,
              'And the sons of Jonathan; Peleth, and Zaza. These were the sons of Jerahmeel.'
            ),
            plain(
              34,
              'Now Sheshan had no sons, but daughters. And Sheshan had a servant, an Egyptian, whose name was Jarha.'
            ),
            plain(
              35,
              'And Sheshan gave his daughter to Jarha his servant to wife; and she bare him Attai.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'jerahmeel-descendants',
          html:
            'Jerahmeel, the eldest son of Hezron, receives extended genealogical attention. His line branches into many families, many names. The list itself — though it contains names we do not know, people whose stories Scripture does not tell — represents something crucial: the commitment to remember. Every person in this genealogy was part of God&apos;s people. Every name mattered. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'sheshan-daughter',
          html:
            'A striking detail: Sheshan had no sons, only daughters. Yet rather than allow the line to end, he gave his daughter to his Egyptian servant Jarha in marriage, and the line continued through her. In a patriarchal genealogy, this is an unusual and generous arrangement — a foreigner and a servant are brought into the line because the son needed to continue. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'commentary',
          id: 'achan-troubler',
          html:
            'Achan, mentioned earlier, is identified here as the "troubler of Israel." His story, told in Joshua 7, is of a man who took forbidden things after the fall of Jericho and brought defeat on all Israel until his sin was uncovered. Yet even his name appears in the genealogy. The Chronicler does not hide the sins of Israel or her people. He records them. The genealogy is not a record of the pure. It is a record of the chosen, marked by sin and redemption, failure and grace. [res:sefaria-tribes-israel]',
        },
        {
          kind: 'christ',
          id: 'christ-genealogy-complex',
          title: 'Christ Connection — A Genealogy of the Real',
          html:
            'The genealogy of David in 1 Chronicles 2, like the genealogy of Jesus in Matthew 1, does not present a line of perfection. It presents the real. It includes Tamar the deceiver, Achan the thief, women marrying foreigners and servants, people whose stories are shameful or complex or difficult. And yet these are the ancestors of David. These are the ancestors of Christ. The promise does not run through the flawless. It runs through the actual people who lived, sinned, repented, and continued. When we read that our Savior came from this line, we are reading a message: there is no sin so great, no failure so complete, no foreignness so absolute, that it disqualifies you from the promise. The genealogy itself is grace.',
        },
        {
          kind: 'carry',
          html:
            'We often want our spiritual lineage to be clean, our family history respectable, our place in God&apos;s story unmarred by failure. But Scripture teaches otherwise. The genealogy is real. It includes all of us — the ambitious and the shameful, the mighty and the forgotten, the native-born and the foreigner. And all of us are part of God&apos;s unfolding story of redemption. What failure in your own lineage — ancestral or personal — have you hidden? What might it mean to let it be part of your story, as Tamar&apos;s story is part of David&apos;s, and David&apos;s part of Christ&apos;s?',
        },
        {
          kind: 'reflection',
          id: 'genealogy-real',
          prompt:
            'This genealogy includes scandal, shame, and failure alongside the great names. When you think of your own spiritual lineage or family history, what difficult or shameful stories belong in the fuller picture?',
        },
      ],
    },
  ],
};
