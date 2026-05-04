import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 8 — Benjamin's Genealogy and Saul's House
 *
 * In the midst of genealogies, a story emerges. Benjamin, the smallest tribe,
 * produced the first king of Israel — Saul. But more than that, this chapter
 * traces the line of Jonathan's son Mephibosheth, a line that should have been
 * erased when Saul fell, but was preserved by God through David's covenant
 * faithfulness. Here we see how even broken houses are held in the book of God.
 */
export const CHRONICLES_1_8: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 8,

  estimatedMinutes: { beginner: 4, intermediate: 8, deep: 12 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 8',
  },
  intros: [
    'The genealogies of 1 Chronicles can feel like an endless roll-call — names piling upon names, fathers and sons stretching back through time. But within them lies a pattern of grace. Benjamin was the youngest son of Jacob, born of Rachel on the road to Ephrath. His name means "son of the right hand" — a position of favor. Yet his tribe would be the smallest in Israel, a constant reminder that greatness in God&apos;s kingdom is not measured by size.',
    'Chapter 8 unfolds Benjamin&apos;s own genealogy, and midway through, the narrative reveals its true purpose: the line of Saul, Israel&apos;s first king. From Kish to Saul to Jonathan — and then, strikingly, to Mephibosheth, Jonathan&apos;s son. This genealogy is more than historical record. It is a testimony to covenant. When Saul&apos;s line should have ended in disgrace, when David became king and could have eliminated his rival&apos;s descendants, the line of Jonathan instead was preserved. God kept His promise to those bound by covenant, even across generations.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 8',
    quote:
      'Even the smallest tribe produced a king. Even the line of a fallen house was preserved. In the book of God, covenant faithfulness echoes across generations, reaching down to those who cannot reach back.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-tribal-lists',
      kind: 'study',
      source: 'Sefaria',
      label: 'Tribal Genealogies and Borders',
      url: 'https://www.sefaria.org/search?q=tribe+israel&tab=text',
      description: 'Sefaria resources on the twelve tribes, genealogies, and territorial divisions.',
    },
    {
      id: 'sefaria-1-chronicles-8',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 8 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.8',
      description: 'The Hebrew text of 1 Chronicles 8 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-1-chronicles-overview-8',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '1 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/1-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 1 Chronicles.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 8:1–5 — Benjamin's First Generation ────────────── */
    {
      ref: '1 Chronicles 8:1–5',
      title: 'The Line of Benjamin Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Now Benjamin begat Bela his firstborn, Ashbel the second, and Aharah the third,'),
            plain(2, 'Nohah the fourth, and Rapha the fifth.'),
            plain(3, 'And the sons of Bela were, Addar, and Gera, and Abihud,'),
            plain(4, 'And Abishua, and Naaman, and Ahoah,'),
            plain(5, 'And Gera, and Shephuphan, and Huram.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'benjamin-firstborn',
          html:
            'Benjamin, the youngest of Jacob&apos;s sons, had five sons of his own. His firstborn was Bela. These names appear again and again throughout Chronicles — not because each descendant is equally important to the record, but because genealogy in Israel was a way of saying: "You belong. You are counted. Your place in the people of God is secure." In a world where kingdoms crumble and nations fall, the book of genealogy says: you are written here. [res:sefaria-tribal-lists]',
        },
        {
          kind: 'hebrew',
          id: 'benjamin-rh',
          title: 'Benjamin — "Son of the Right Hand"',
          script: 'בִּנְיָמִין',
          translit: '<strong>Binyamin</strong> · son of the right hand; the favored position',
          description:
            'Benjamin&apos;s name is rich with meaning. Born at the right side of Rachel as she died giving him life, he carries the weight of that moment. The "right hand" in Scripture is the place of honor, of strength, of covenant. Yet Benjamin was the smallest tribe. God&apos;s people would learn that greatness is not measured in size.',
        },
        {
          kind: 'carry',
          html:
            'The details matter. The names are recorded. God keeps account of those we might consider ordinary or small. In your own life, do you live as though you are counted, as though your name is written in God&apos;s book? Or do you measure your worth by size, by prominence, by what others see?',
        },
        {
          kind: 'reflection',
          id: 'benjamin-counted',
          prompt: 'What does it mean to know that your name is written in God&apos;s genealogy, that you are counted even if you feel small or overlooked?',
        },
      ],
    },

    /* ─── 1 Chronicles 8:6–15 — Ehud's House and Beriah's Victory ────── */
    {
      ref: '1 Chronicles 8:6–15',
      title: 'Ehud&apos;s House and the Victory at Aijalon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(6, 'And these are the sons of Ehud: these are the heads of the fathers of the inhabitants of Geba: and they removed them to Manahath:'),
            plain(7, 'And Naaman, and Ahiah, and Gera, he removed them; and begat Uzza, and Ahihud.'),
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(8, 'And Shaharaim begat children in the country of Moab, after he had sent them away; and his wives were Hushim and Baara.'),
            plain(9, 'And he begat of Hodesh his wife, Jobab, and Zibia, and Mesha, and Malcham,'),
            plain(10, 'And Jeuz, and Shachia, and Mirma. These were his sons, heads of the fathers.'),
            plain(11, 'And of Hushim he begat Abitub, and Elpaal.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-8-mid-11',
          html:
            '<p>These connections reveal how God&apos;s family plan unfolded across centuries.</p>',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(12, 'The sons of Elpaal; Eber, and Misham, and Shamed, who built Ono, and Lod, with the towns thereof:'),
            plain(13, 'Beriah also, and Shema, who were heads of the fathers of the inhabitants of Aijalon, who drove away the inhabitants of Gath:'),
            plain(14, 'And Ahio, Shashak, and Jeremoth,'),
            plain(15, 'And Zebadiah, and Arad, and Ader,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ehud-house',
          html:
            'The genealogy traces the spreading of Benjamin&apos;s line across the land. Some settled in Geba, others were removed to Manahath. Shaharaim divorced his wives Hushim and Baara and took another, Hodesh, begetting more sons. The text records these family upheavals — divorces, relocations, new sons — without judgment or explanation. These are the human facts of tribal history. Yet the point is consistent: the people spread, multiplied, and took root in cities across the land[res:sefaria-1-chronicles-8][res:bibleodyssey-1-chronicles-overview-8].',
        },
        {
          kind: 'commentary',
          id: 'beriah-aijalon',
          html:
            'Beriah and Shema are noted as heads of fathers&apos; houses in Aijalon, significant enough to mention a specific military deed: they "drove away the inhabitants of Gath." This is not a full battle account, but a hint of conflict and courage. Gath was a Philistine city. Benjamin, though the smallest tribe, was fierce enough to put even the Philistines to flight. Courage is not always proportional to size.',
        },
        {
          kind: 'carry',
          html:
            'These scattered references to scattered Benjamites all over the land — Aijalon, Gath, the towns of Ono and Lod — tell us something about the nature of God&apos;s people. They are not concentrated in one place. They are spread out, living among neighbors, sometimes in conflict, sometimes simply enduring. Faith is not only what happens in the temple. It is also what happens in Aijalon, in the ordinary act of keeping your city and protecting your borders.',
        },
        {
          kind: 'reflection',
          id: 'scattered-faithful',
          prompt: 'Where are you "scattered" — in your family, your workplace, your neighborhood? How do you keep faith there?',
        },
      ],
    },

    /* ─── 1 Chronicles 8:16–28 — Further Generations of Benjamin ──────── */
    {
      ref: '1 Chronicles 8:16–28',
      title: "The Spread of Benjamin&apos;s Descendants",
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(16, 'And Michael, and Ispah, and Joha, the sons of Beriah;'),
            plain(17, 'And Zebadiah, and Meshullam, and Hezeki, and Heber,'),
            plain(18, 'Ishmerai also, and Jezliah, and Jobab, the sons of Elpaal;'),
            plain(19, 'And Jakim, and Zichri, and Zabdi,'),
            plain(20, 'And Elienai, and Zillethai, and Eliel,'),
            plain(21, 'And Adaiah, and Beraiah, and Shimrath, the sons of Shimei;'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr8-benjamins',
          html:
            'Benjamin&apos;s line stretches from Bela through Ashbel, Aharah, Nohah, and Rapha. Six sons named, each carrying Benjamin&apos;s legacy. In later history, Benjamin will produce Israel&apos;s first king, Saul—but also Paul the apostle. The line holds both.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(22, 'And Ishpan, and Eber, and Eliel,'),
            plain(23, 'And Abdon, and Zichri, and Hanan,'),
            plain(24, 'And Hananiah, and Elam, and Antothijah,'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-8-mid-24',
          html:
            '<p>This family boundary reveals the line through which God&apos;s covenant promises continued.</p>',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(25, 'And Iphedeiah, and Penuel, the sons of Shashak;'),
            plain(26, 'And Shamsherai, and Shehariah, and Athaliah,'),
            plain(27, 'And Jaareshiah, and Eliah, and Zichri, the sons of Jeroham.'),
            plain(28, 'These were heads of the fathers, by their generations, chief men. These dwelt in Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'generations-dwelling',
          html:
            'The genealogy spirals outward — more names, more generations. Some dwelt in Jerusalem itself, the capital city, the place of the temple. Others scattered throughout the land. But all are recorded. The note that these were "heads of the fathers, by their generations, chief men" suggests that this was an established, recognized genealogy — one that mattered for inheritance, for place, for identity. In ancient Israel, your genealogy was your credential. It said who you were and where you belonged.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time of documents and records, yet genealogy has lost its sacred character. We are identified by job title, by social media presence, by credentials. But Scripture reminds us of something older: you belong to a family. Your lineage matters. Whether you dwell in Jerusalem or in a scattered city, your place in the genealogy of God&apos;s people is secure.',
        },
        {
          kind: 'reflection',
          id: 'genealogy-identity',
          prompt: 'How does knowing your spiritual genealogy — that you are part of the people of God, going back generations — change how you see yourself?',
        },
      ],
    },

    /* ─── 1 Chronicles 8:29–40 — Saul's Genealogy and the Covenant Line ─ */
    {
      ref: '1 Chronicles 8:29–40',
      title: "The House of Saul — and the Preservation of Jonathan&apos;s Seed",
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(29, 'And at Gibeon dwelt the father of Gibeon; whose wife&apos;s name was Maachah:'),
            plain(30, 'And his firstborn son Abdon, and Zur, and Kish, and Baal, and Nadab,'),
            plain(31, 'And Gedor, and Ahio, and Zacher.'),
            plain(32, 'And Mikloth begat Shimeah. And these also dwelt with their brethren in Jerusalem, over against them.'),
            {
              number: 33,
              spans: [
                t('And '),
                hg('Ner begat Kish', 'saul-line-begins'),
                t(', and Kish begat '),
                hg('Saul', 'saul-king'),
                t(', and Saul begat Jonathan, and Malchi-shua, and Abinadab, and Esh-baal.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the son of Jonathan was '),
                hg('Merib-baal', 'merib-baal'),
                t('; and Merib-baal begat Micah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1chr8-saul-line-preserved',
          html:
            'The chronicler keeps Saul&apos;s line on the roll long after Saul is gone. The kingdom passed to David, but the names remain — a quiet refusal to erase a family God once chose, even after that family failed.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(35, 'And the sons of Micah were, Pithon, and Melech, and Tarea, and Ahaz.'),
            plain(36, 'And Ahaz begat Jehoadah; and Jehoadah begat Alemeth, and Azmaveth, and Zimri; and Zimri begat Moza;'),
            plain(37, 'And Moza begat Binea: Rapha was his son, Eleasah his son, Azel his son:'),
            plain(38, 'And Azel had six sons, whose names are these, Azrikam, Bocheru, and Ishmael, and Sheariah, and Obadiah, and Hanan. All these were the sons of Azel.'),
            plain(39, 'And the sons of Eshek his brother were, Ulam his firstborn, Jehush the second, and Eliphelet the third.'),
            plain(40, 'And the sons of Ulam were mighty men of valour, archers, and had many sons, and sons&apos; sons, one hundred and fifty. All these are of the sons of Benjamin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-line-begins',
          html:
            'The genealogy narrows to the line of Ner — "Ner begat Kish." Kish is the father of Saul. This is the pivot-point of the chapter. From the general genealogy of Benjamin, we zoom in to the specific line that will produce the first king of Israel. Ner and Kish are the hinges on which the monarchy turns.',
        },
        {
          kind: 'hebrew',
          id: 'shaul-rh',
          title: 'Shaul — "Asked" or "Sought"',
          script: 'שָׁאוּל',
          translit: '<strong>Shaul</strong> · asked; sought; he who was requested',
          description:
            'Saul&apos;s name carries the memory of how he was chosen. The people came to Samuel and said, "Give us a king like all the nations." God granted their request — and gave them Saul. He was the answer to a prayer, though not always the answer they needed. His name is a constant reminder of how we ask, and how God answers differently than we expect.',
        },
        {
          kind: 'commentary',
          id: 'saul-king',
          html:
            'Saul became the first king of Israel. But the genealogy does not celebrate him. It traces his line forward, neutral and matter-of-fact. Later books will tell of his pride, his jealousy, his pursuit of David, his fall at Gilboa. Here, he is simply Kish&apos;s son, a link in the chain of Benjamin&apos;s descendants.',
        },
        {
          kind: 'commentary',
          id: 'merib-baal',
          html:
            'Jonathan was Saul&apos;s son. And Jonathan had a son: Merib-baal (also called Mephibosheth). Here, Chronicles records that Merib-baal had descendants — Micah, and Micah&apos;s sons. The genealogy continues. When Saul died at Gilboa, the dynasty should have ended. When David became king, there was no political reason to spare Saul&apos;s descendants. Yet this genealogy testifies to something remarkable: the line of Jonathan survived. God preserved Jonathan&apos;s seed — not because of Saul, but because of David&apos;s covenant with Jonathan. "The Lord do so to Jonathan, and more also, if it shall be well with David, and if I do not show him the same kindness as the Lord has shown thee" (1 Samuel 20:13). That covenant held even after Jonathan&apos;s death. Even after Saul&apos;s fall. The line was preserved.',
        },
        {
          kind: 'hebrew',
          id: 'mephibosheth-rh',
          title: 'Merib-baal / Mephibosheth — From Shame to Salvation',
          script: 'מְפִי־בֹשֶׁת',
          translit: '<strong>Mephibosheth</strong> · from the mouth of shame; shame-breaking',
          description:
            'Mephibosheth (also called Merib-baal in Chronicles) carries a name loaded with meaning. "From the mouth of shame." His father Jonathan was Saul&apos;s son, born into the line of the fallen king. Yet the name suggests not that he is shamed, but that he breaks shame. His very existence is a testimony: the covenant was kept. The seed was preserved. Shame did not have the final word.',
        },
        {
          kind: 'christ',
          id: 'covenant-preserved',
          title: 'Christ Connection — Covenants That Hold Across Generations',
          html:
            'David made a covenant with Jonathan: "The Lord shall be between me and thee, and between my seed and thy seed for ever" (1 Samuel 20:42). That covenant was sealed in blood and oath. And when David became king, when he had the power to erase Jonathan&apos;s line entirely, he did not. Instead, he brought Mephibosheth to his table. He restored his inheritance. He said, "Surely I will show thee kindness for Jonathan thy father&apos;s sake" (2 Samuel 9:7). This is the pattern of God&apos;s covenant — it does not depend on the strength of the person asking for it. It depends on the faithfulness of the One who made it. Christ is our covenant-keeper. "For he hath said, I will never leave thee, nor forsake thee" (Hebrews 13:5). Even when we are lame, broken, forgotten — as Mephibosheth was, hiding in Lo-debar — the covenant holds. Christ keeps His promise. His blood-covenant with us is eternal. We are preserved.',
        },
        {
          kind: 'carry',
          html:
            'Mephibosheth lived under a cloud. His grandfather was Saul, the failed king. His father was Jonathan, who died at his father&apos;s side. He himself was lame in both feet, hidden away in a place called Lo-debar — "no pasture," a wasteland. Yet David sought him out. "Is there yet any that is left of the house of Saul, that I may show him kindness for Jonathan&apos;s sake?" (2 Samuel 9:1). Mephibosheth was brought out of exile and restored. This is what it means to be held by covenant. You are not erased by your family&apos;s failures. You are not abandoned because you are lame or broken. You are kept. Do you know that you are kept?',
        },
        {
          kind: 'reflection',
          id: 'mephibosheth-reflection',
          prompt: 'Like Mephibosheth, have you ever felt that your family&apos;s failures were your own shame? How does it change things to know that covenant — not performance — holds you?',
        },
      ],
    },

    /* ─── Closing: The Genealogy as Testimony ────────────────────────── */
    {
      ref: '1 Chronicles 8',
      title: 'A Genealogy of Grace',
      blocks: [
        {
          kind: 'commentary',
          id: 'genealogy-testimony',
          html:
            'The genealogy of Benjamin is not glamorous. It does not tell a story of conquest or victory. Instead, it simply says: these people were. They were born. They had children. They dwelt in cities. They had courage when they needed it. They were counted. And when a king rose from among them, and then fell, their descendants were not erased. Instead, they were preserved. God kept His covenant. The genealogy is a book of remembrance — a record that says: you belong. Your name is written here. You matter to God.',
        },
        {
          kind: 'carry',
          html:
            'We live in a time when genealogy seems quaint. Yet Chronicles reminds us of something profound: there is a book in which you are written. Not because of your achievement, not because of your size or power, but because you belong to the covenant people of God. That book is older than any earthly record. And it matters. It says you are counted. It says your seed will continue. It says even if you fall, your covenant line is preserved. This is the testimony of genealogy.',
        },
        {
          kind: 'reflection',
          id: 'book-remembrance',
          prompt: 'What would it mean to live as though your name is written in God&apos;s genealogy — that you are remembered, counted, and part of a family that stretches backward to Abraham and forward to Christ?',
        },
      ],
    },
  ],
};
