import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 10 — The Death of Saul
 *
 * Saul falls at Gilboa. The Philistines hunt him down; his sons are slain.
 * Wounded and facing capture, he falls on his own sword. His body and his sons&apos;
 * bodies are desecrated by the Philistines, stripped and put to shame. Yet in the
 * end, the men of Jabesh-gilead, remembering Saul&apos;s kindness to their city,
 * risk their own lives to give him an honorable burial. The Chronicler, unlike
 * the Samuel account, frames Saul&apos;s death explicitly: he died for his
 * transgression — for consulting a medium instead of seeking God. In this chapter,
 * we see the price of spiritual rebellion and the power of small acts of covenant
 * loyalty.
 */
export const CHRONICLES_1_10: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 10,

  estimatedMinutes: { beginner: 3, intermediate: 8, deep: 11 },
  intros: [
    'The genealogies are complete. The post-exile community has been established. The Chronicler has shown the people who returned to rebuild the house of God. Now he turns to the reason this new beginning was necessary: the fall of the old order under King Saul. This chapter parallels 1 Samuel 31 — the death of Israel&apos;s first king — but with a crucial difference. The Chronicler adds editorial commentary, framing Saul&apos;s death not as mere military disaster, but as theological judgment.',
    'Saul was rejected by God long before he fell at Gilboa. He consulted a medium, seeking knowledge of the future instead of seeking the Lord. He made himself the measure of his own kingship, trusting in his own counsel rather than God&apos;s. And when the judgment came — when the Philistines closed in and his sons fell — there was nowhere to turn. The king who would not listen to God could not save himself. His body was stripped and put to shame. Yet even in his humiliation, there were those who remembered his kindness: the men of Jabesh-gilead, the city he had once defended, risked their lives to give him burial. In the story of a king&apos;s fall, we see both the consequence of turning from God and the strange grace of being remembered by those we have served.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 10',
    quote:
      'Saul died for his transgression which he committed against the Lord, even against the word of the Lord, which he kept not, and also for asking counsel of one that had a familiar spirit. Yet the covenant loyalty of Jabesh-gilead — a city Saul once defended — ensured that even the fallen king was not left without honor.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 10 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 10:1–7 — The Battle and the Fall ─────────────────── */
    {
      ref: '1 Chronicles 10:1–7',
      title: 'The Battle at Gilboa',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Now the Philistines fought against Israel; and the men of Israel fled before the Philistines, and fell down slain in mount Gilboa.'),
            plain(2, 'And the Philistines followed hard after Saul, and after his sons; and the Philistines slew Jonathan, and Abinadab, and Malchi-shua, the sons of Saul.'),
            plain(3, 'And the battle went sore against Saul, and the archers hit him, and he was wounded of the archers.'),
            {
              number: 4,
              spans: [
                t('Then said Saul to his armourbearer, '),
                hg('Draw thy sword', 'slay-me'),
                t(', and thrust me through therewith; lest these uncircumcised come, and abuse me. But his armourbearer would not; for he was sore afraid. So Saul took a '),
                hy('sword', 'slay-self'),
                t(', and fell upon it.'),
              ],
            },
            plain(5, 'And when his armourbearer saw that Saul was dead, he fell likewise on the sword, and died.'),
            plain(6, 'So Saul died, and his three sons, and all his house died together.'),
            plain(7, 'And when all the men of Israel that were in the valley saw that they fled, and that Saul and his sons were dead, then they forsook their cities, and fled: and the Philistines came and dwelt in them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mount-gilboa',
          html:
            'Mount Gilboa is the place of Saul&apos;s doom — the high place where Israel expected to defeat the Philistines, where the king and his sons were to make a stand. Instead, the battle goes "sore against Saul." The archers find him. He is wounded, trapped, surrounded. There is no escape. The mountain that should have been a place of strength becomes a place of death.',
        },
        {
          kind: 'hebrew',
          id: 'gilboa',
          title: 'Gilboa — "Spring of Boiling"',
          script: 'גִּלְבֹּעַ',
          translit: '<strong>Gilboa</strong> · spring of boiling; place of judgment',
          description:
            'Mount Gilboa looms large in Israel&apos;s memory — it is where the first king fell, where a generation of warriors died, where the hope of a unified kingdom collapsed. The name carries connotations of boiling, of upheaval, of the ground giving way. For David and for all who came after Saul, Gilboa becomes a symbol of the price of covenant-breaking.',
        },
        {
          kind: 'commentary',
          id: 'slay-me',
          html:
            'In his final moments, Saul asks his armor-bearer to kill him — to spare him from the hands of the uncircumcised Philistines. This is not cowardice but the desperate choice of a man who knows what capture will bring: mockery, mutilation, shame. His armor-bearer refuses, unwilling to raise his hand against the king. And so Saul falls on his own sword. He dies by his own hand, not by God&apos;s judgment, yet in a way that fulfills what that judgment has already pronounced: that the kingdom will be taken from him, that his line will not endure.',
        },
        {
          kind: 'commentary',
          id: 'slay-self',
          html:
            'The sword that Saul falls upon is his own weapon — the instrument by which he fought enemies, now turned against himself. There is a terrible completeness to this: the king who made himself his own measure now becomes his own executioner. He does not wait for God, does not seek counsel, does not repent. He acts on his own will to the very end.',
        },
        {
          kind: 'carry',
          html:
            'We often think of falling as something that happens to us — as though we are victims of circumstance. But the deeper pattern in Scripture is that we fall when we stop listening. Saul had already turned from God long before Gilboa. He had refused Samuel&apos;s word, consulted forbidden powers, pursued his own counsel. The battle was only the visible sign of an inner break that had already happened. What in your life have you turned from God to manage on your own? What might it mean to listen again?',
        },
        {
          kind: 'reflection',
          id: 'gilboa-fall',
          prompt: 'Saul was wounded and trapped — but his true defeat happened long before, when he stopped seeking God. When have you realized that a crisis was actually the visible consequence of choices made long before?',
        },
      ],
    },

    /* ─── 1 Chronicles 10:8–12 — The Philistine Desecration ──────────────── */
    {
      ref: '1 Chronicles 10:8–12',
      title: 'Shame and Remembrance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(8, 'And it came to pass, when the Philistines came to strip the slain, that they found Saul and his sons fallen in mount Gilboa.'),
            plain(9, 'And when they had stripped him, they took his head, and his armour, and sent into the land of the Philistines round about, to carry tidings unto their idols, and to the people.'),
            plain(10, 'And they put his armour in the house of their gods, and fastened his head in the temple of Dagon.'),
            plain(11, 'And when all Jabesh-gilead heard all that the Philistines had done to Saul,'),
            {
              number: 12,
              spans: [
                t('They arose, all the valiant men, and took away the body of Saul, and the bodies of his sons, and brought them to Jabesh, and buried their '),
                hg('bones', 'jabesh-covenant'),
                t(' under the oak in Jabesh, and '),
                hg('fasted seven days', 'jabesh-covenant'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'strip-the-slain',
          html:
            'In ancient warfare, stripping the bodies of the fallen was both a practical matter — taking weapons and armor — and a profound act of desecration. To be stripped and left exposed was to lose dignity, to be put beyond the reach of proper burial. The Philistines took Saul&apos;s armor and his head, and sent word throughout their lands. They had defeated the God of Israel. Or so they thought.',
        },
        {
          kind: 'commentary',
          id: 'dagon-temple',
          html:
            'The head of the king is fastened in the temple of Dagon, the fish-god of the Philistines. This is the ultimate mockery — the anointed of Israel, the one who bore God&apos;s mark, is made a trophy in a pagan temple. The Chronicler is clear about where this happened, emphasizing the spiritual dimensions of the humiliation. Yet this too becomes a kind of witness: the Philistines could not silence what had happened. Their own god-house became a testimony to Israel&apos;s king.',
        },
        {
          kind: 'hebrew',
          id: 'ob',
          title: 'Ob — "Familiar Spirit"',
          script: 'אוֹב',
          translit: '<strong>Ob</strong> · familiar spirit; spirit of the dead; necromancer',
          description:
            'An &apos;ob is a medium — one who claims to channel the spirits of the dead. Consulting an ob was forbidden in Israel&apos;s law, a violation of the covenant and a rejection of trust in God&apos;s guidance. Saul&apos;s consultation with the witch of Endor, seeking Samuel from beyond death, was one of his gravest acts of apostasy.',
        },
        {
          kind: 'commentary',
          id: 'jabesh-covenant',
          html:
            'And then, in the midst of this shame, something unexpected breaks through. The men of Jabesh-gilead — a city Saul had once defended in his early days, when he came to their aid and delivered them from the Ammonites — risk their own lives to recover Saul&apos;s body and his sons&apos; bodies. They travel by night into enemy territory. They take the bones and bring them back to Jabesh. They fast for seven days, mourning not for a great king, but for a man who once showed them mercy.',
        },
        {
          kind: 'christ',
          id: 'covenant-loyalty',
          title: 'Christ Connection — Remembrance Beyond Shame',
          html:
            'In the New Testament, when Christ is crucified and buried, His disciples are hiding in fear, but Joseph of Arimathea — a man of the council who had not consented to the deed — comes forward to give Him a tomb. It is a small act of covenant loyalty in the face of apparent defeat. Jabesh-gilead&apos;s action toward Saul&apos;s body, and Joseph&apos;s action toward Jesus&apos; burial, teach us that the covenant of love endures even when the great king has fallen. Christ rose from the dead three days later; His resurrection vindicated what faithfulness had preserved. The same Christ teaches us that even in humiliation and shame, we are not beyond the reach of those who love God.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world that is quick to mock the fallen. When someone fails publicly, we often join in the mockery or turn away. But covenant loyalty — the kind that Jabesh-gilead showed — remembers the good a person once did and honors the sacred office they held, even after their fall. Who in your life has fallen, and how might you act toward them with the kind of quiet, faithful loyalty that Jabesh-gilead showed Saul?',
        },
        {
          kind: 'reflection',
          id: 'jabesh-memory',
          prompt: 'Jabesh-gilead risked their lives to honor Saul&apos;s body because Saul had once defended them. What acts of kindness have been shown to you that you haven&apos;t yet had a chance to repay?',
        },
      ],
    },

    /* ─── 1 Chronicles 10:13–14 — The Chronicler's Judgment ──────────────── */
    {
      ref: '1 Chronicles 10:13–14',
      title: 'Why Saul Died',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('So Saul died for his '),
                hy('transgression', 'transgression-meaning'),
                t(' which he committed against the Lord, even against the '),
                hp('word of the Lord', 'word-rejected'),
                t(', which he kept not, and also for asking counsel of one that had a '),
                hy('familiar spirit', 'familiar-spirit'),
                t(', to enquire of it;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And enquired not of the Lord: therefore he '),
                hp('slew him', 'god-slew'),
                t(', and turned the kingdom unto David the son of Jesse.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'transgression-meaning',
          html:
            'The Chronicler uses the word "transgression" — not merely failure or military defeat, but deliberate violation of covenant. This is the theological verdict that distinguishes the Chronicler&apos;s account from the Samuel narrative. Saul&apos;s death was not random or merely unfortunate. It was consequence. His choices — his refusal to listen to the prophets, his pursuit of David, his willingness to consult forbidden spiritual powers — had already broken his covenant with God. Gilboa was only where that broken covenant became visible.',
        },
        {
          kind: 'commentary',
          id: 'word-rejected',
          html:
            'Saul kept not the word of the Lord. This refusal goes back decades — to Samuel&apos;s initial words, to the direct commands about what to do with Amalek, to all the warnings that he would lose the kingdom. The word of God came to him again and again, and each time he chose his own path. By the end, he could not hear God&apos;s voice at all. In his desperation, he sought the voice of the dead instead.',
        },
        {
          kind: 'commentary',
          id: 'familiar-spirit',
          html:
            'The sin of consulting a familiar spirit — a medium, a necromancer — was explicitly forbidden in Israel&apos;s law. Saul himself had driven out the mediums and spiritists from the land in his early days. Yet in his desperation, facing the Philistines and silent heavens, he broke his own law. He went to the witch of Endor and asked her to call up Samuel from the dead. It was an act of profound spiritual desperation — the attempt to wrest knowledge from the realm of death when he could not receive it from God.',
        },
        {
          kind: 'commentary',
          id: 'god-slew',
          html:
            'The Chronicler is explicit: "God slew him." This is not chance or military misfortune. It is active judgment. God ended Saul&apos;s reign because Saul had ended his own obedience. There is a stark mercy in this too — Saul&apos;s broken kingship did not endure to corrupt the nation further. The kingdom passed to David, whom God had chosen.',
        },
        {
          kind: 'hebrew',
          id: 'maal',
          title: 'Maal — "Transgression" or "Unfaithfulness"',
          script: 'מַעַל',
          translit: '<strong>Maal</strong> · transgression; breach of covenant; unfaithfulness',
          description:
            'The word maal carries the weight of covenant-breaking. It is not a small sin or a mistake. It is a deliberate turning from the covenant bond, a violation that touches the very heart of the relationship between God and His people. When the Chronicler says Saul died for his maal, he is saying that Saul&apos;s death was the consequence of breaking covenant.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that relativizes authority — that suggests we each get to decide what the word of God means, or whether to follow it at all. But the Chronicler&apos;s message is clear and hard: turning from God&apos;s word has consequences. Not as punishment from a distant judge, but as the inevitable result of breaking the relationship that sustains us. When we say no to God&apos;s word, we are not asserting our freedom. We are cutting ourselves off from the source of our life. Repentance — returning to listen — is the only way back.',
        },
        {
          kind: 'reflection',
          id: 'saul-death',
          prompt: 'Saul did not suddenly turn from God at Gilboa. He had been refusing God&apos;s word for years. What words of God are you currently hearing but not keeping? What would it mean to return?',
        },
      ],
    },
  ],
};
