import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 50 — the close of the book.
 *
 * Joseph weeps over Jacob; the elaborate Egyptian funeral procession back
 * to Canaan; the brothers' lingering fear after Jacob's death; Joseph's
 * great reconciliation speech ("ye thought evil against me; but God meant it
 * unto good"); Joseph's death and the promise written into his bones — that
 * one day his people will leave Egypt and carry him home. The chapter ends
 * with a coffin waiting, a gesture of faith that is also a question mark.
 * Genesis opened with God making a world. It closes with a man's bones
 * waiting in Egypt for an exodus that won't happen for four hundred years.
 */
export const GENESIS_50: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 50,

  estimatedMinutes: { 5: 7, 10: 12, 15: 15 },
  intros: [
    'Genesis opened with God bringing light out of chaos. It closes with a coffin in Egypt. A man lies dead, surrounded by sons he once thought he would never see again. One of those sons has risen to be the second-most powerful man in the kingdom. Joseph has fed them, housed them, forgiven them — and still they wonder if his forgiveness was only a mask, waiting for the moment their father died to fall away.',
    'The chapter is built on a question the brothers ask aloud (v. 15): "Joseph will peradventure hate us." After seventeen years, they still don\'t believe him. And Joseph\'s response is not irritation but tears — the kind of tears that come when you love someone and they still don\'t trust you. In the middle of the weeping, though, Joseph says something that will echo through two thousand years of theology: "Ye thought evil against me; but God meant it unto good." Human malice, divine providence, and salvation threading through both.',
    'The book ends not with a triumph but with a wait. Joseph dies, his body embalmed and coffined, and makes his family swear they will carry his bones out of Egypt when the time comes. Genesis closes with an act of faith — a dead man whose trust in God\'s promise is stronger than the comfort of burial in the land where he rose to power. His bones are a question waiting for an answer: Will God keep His word? Will there be an exodus? Will the promise made to Abraham actually come to pass?',
  ],

  bottomShare: {
    label: 'Share Genesis 50',
    quote:
      'Ye thought evil against me; but God meant it unto good — and Joseph wept over his father, forgave his brothers, and died trusting that his bones would one day go home.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 50 · Study Guide',
  },

  sections: [
    /* ─── Genesis 50:1–11 — The Funeral ───────────────────────────────── */
    {
      ref: 'Genesis 50:1–11',
      title: 'Joseph Weeps, and Egypt Grieves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('Joseph fell upon his father\'s face, and wept upon him, and kissed him', 'christ-weeping'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Joseph commanded his servants the physicians to '),
                hg('embalm his father', 'c-embalm'),
                t(': and the physicians embalmed Israel.'),
              ],
            },
            {
              number: 3,
              spans: [t('And forty days were fulfilled for him; for so are fulfilled the days of those which are embalmed: and the Egyptians '),
                hg('mourned for him threescore and ten days', 'c-mourning-days'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And when the days of his mourning were past, Joseph spake unto the house of Pharaoh, saying, If now I have found grace in your eyes, speak, I pray you, in the ears of Pharaoh, saying,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('My father made me swear, saying, Lo, I die: in my grave which I have digged for me in the land of Canaan, there shalt thou bury me. Now therefore let me go up, I pray thee, and '),
                hy('bury my father', 'ref-bury-father'),
                t(', and I will come again.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Pharaoh said, Go up, and bury thy father, according as he made thee swear.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Joseph went up to bury his father: and with him went all the servants of Pharaoh, the elders of his house, and all the elders of the land of Egypt,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And all the house of Joseph, and his brethren, and his father\'s house: only their little ones, and their flocks, and their herds, they left in the land of Goshen.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And there went up with him both chariots and horsemen: and it was a very great company.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they came to the threshingfloor of Atad, which is beyond Jordan, and there they made a very great and sore lamentation: and he made a mourning for his father '),
                hg('seven days', 'c-seven-days'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And when the inhabitants of the land, the Canaanites, saw the mourning in the threshingfloor of Atad, they said, This is a grievous mourning to the Egyptians: wherefore the name of it was called, '),
                hg('Abel-mizraim', 'c-abel-mizraim'),
                t(', which is beyond Jordan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-embalm',
          html:
            'Embalming was an Egyptian practice, not a Hebrew one. Joseph honors his father by giving him the funeral rites of the kingdom where he — and where Joseph — have risen to prominence. Seventeen years in Egypt, and Jacob has become important enough to the Pharaoh that his death is a state matter. The family grieves as Egyptians now, not as the nomads they once were.',
        },
        {
          kind: 'commentary',
          id: 'c-mourning-days',
          html:
            'Seventy days of mourning — an extraordinarily long period, and one recorded in Egyptian annals as fit for a royal or exceptionally honored person. Jacob, a stranger who became part of Joseph\'s household, receives the honor of the kingdom. There is a kind of homecoming in this: Jacob lives as an alien in Egypt, but when he dies, Egypt mourns him as one of its own.',
        },
        {
          kind: 'commentary',
          id: 'c-seven-days',
          html:
            'After reaching Canaan, they mourn for seven more days at the threshingfloor of Atad. The number seven echoes the creation week, the Sabbath, the sacred cycles of Israel. Even in grief, time is being sanctified — marked, set apart, named as belonging to God.',
        },
        {
          kind: 'commentary',
          id: 'c-abel-mizraim',
          html:
            'The name means "meadow of Egypt" — a place on Canaanite soil that will be remembered as a place where Egyptians wept for a Hebrew elder. The text marks the boundary: here, Egypt\'s mourning touches Canaan. The language shifts, the soil changes, the covenant promise comes back into view.',
        },
        {
          kind: 'carry',
          html:
            'Grief is honest and worth the time it takes. Joseph doesn\'t rush his father\'s burial. He doesn\'t minimize the loss or try to move quickly past it. He makes space for the Egyptians to mourn, and for his own family to grieve with him — seven days in Canaan, at the threshold of the land where his ancestors lie buried. When someone you love dies, a week of stopping is not too much. Tears that flow for forty days and seventy are not a sign of weakness but of the weight of a life, the depth of a bond. Let yourself be thorough in your grief.',
        },
        {
          kind: 'reflection',
          id: 'gen50-grief',
          prompt:
            'Who in your life deserves a full seven days of your grief — or more? What would it look like to give someone\'s loss the time it actually needs?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*jacob|jacob.*death|embalm/i,
          caption: 'Genesis 50:1–11 · The Funeral Procession',
        },
      ],
    },

    /* ─── Genesis 50:12–14 — The Burial ──────────────────────────────── */
    {
      ref: 'Genesis 50:12–14',
      title: 'Home Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            {
              number: 12,
              spans: [
                t('And his sons did unto him according as he commanded them:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For his sons carried him into the land of Canaan, and buried him in the '),
                hy('cave of the field of Machpelah', 'ref-cave-machpelah'),
                t(', which Abraham bought with the field for a possession of a buryingplace of Ephron the Hittite, before Mamre.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Joseph returned into Egypt, he, and his brethren, and all that went up with him to bury his father, after he had buried his father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ref-cave-machpelah',
          html:
            'The cave of Machpelah is the family sepulcher — the burial place of Abraham, Sarah, Isaac, Rebekah, and Jacob\'s first wife Leah. It is the one piece of Canaan that Abraham bought as his own, the only land the family has ever owned there. Jacob, who fled Egypt in fear of Esau, dies in Egypt — and returns home to be buried with his ancestors. He never left the covenant promise, even when he left the land.',
        },
        {
          kind: 'carry',
          html:
            'Some promises take a lifetime to fulfill. Jacob was told his descendants would inherit Canaan, but he died and was buried there instead of building a dynasty in the land. Yet his bones in that soil are a kind of claim — a statement written in death that the family belongs there, that the promise is real, that one day his descendants will return. What promise are you holding that won\'t see completion in your lifetime? Let your faithfulness now be the foundation for someone else\'s fulfillment later.',
        },
        {
          kind: 'reflection',
          id: 'gen50-burial',
          prompt:
            'What legacy are you planting now that you may never see harvested? How does it change your faithfulness, knowing that you\'re planting for a future you won\'t fully witness?',
        },
      ],
    },

    /* ─── Genesis 50:15–21 — The Reconciliation ──────────────────────── */
    {
      ref: 'Genesis 50:15–21',
      title: 'The Speech They Needed to Hear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            {
              number: 15,
              spans: [
                t('And when Joseph\'s brethren saw that their father was dead, they said, '),
                hg('Joseph will peradventure hate us, and will fully requite us all the evil which we did unto him', 'c-brothers-fear'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they sent a messenger unto Joseph, saying, Thy father did command before he died, saying,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('So shall ye say unto Joseph, Forgive, I pray thee now, the trespass of thy brethren, and their sin; for they did unto thee evil: and now, we pray thee, forgive the trespass of the servants of the '),
                hg('God of thy father', 'c-god-of-thy-father'),
                t('. And Joseph wept when they spake unto him.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And his brethren also went and fell down before his face; and they said, Behold, we be thy servants.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Joseph said unto them, '),
                hp('Fear not', 'christ-comfort'),
                t(': for am I in the place of God?'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But as for you, '),
                hp('ye thought evil against me; but God meant it unto good', 'christ-providence'),
                t(', to bring to pass, as it is this day, to save much people alive.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Now therefore fear ye not: I will nourish you, and your little ones. And he comforted them, and spake kindly unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chashav',
          title: 'Chashav — &ldquo;thought, intended, reckoned&rdquo;',
          script: 'חָשַׁב',
          translit: '<strong>chashav</strong> · to think, plan, intend, reckon',
          description:
            'Verse 20 uses <em>chashav</em> twice in parallel: "ye thought evil against me; but God <em>thought</em> it unto good." The same verb is used in Genesis 15:6 where "Abram believed the LORD, and he counted it [<em>chashav</em>] to him for righteousness." What you intend for harm and what God reckons for salvation are two different accountings.',
        },
        {
          kind: 'commentary',
          id: 'c-brothers-fear',
          html:
            'Seventeen years. Joseph has ruled Egypt, governed the famine, settled his family in Goshen, honored his father, wept, fed them, housed them. Seventeen years of consistent action. And when Jacob dies, the brothers\' first thought is: <em>now he will take revenge.</em> They don\'t trust his tears. They don\'t trust his actions. They still see a man who was wronged, and they assume the wrong is only being deferred.',
        },
        {
          kind: 'commentary',
          id: 'c-god-of-thy-father',
          html:
            'The brothers appeal to Joseph not on their own merit but on the covenant: "the God of thy father." They are reminding Joseph that he stands in a tradition, in a line of promise, in a family story larger than any one injury. Forgiveness is not just a personal choice; it is a covenant choice — an act of honoring the God who has held the family together.',
        },
        {
          kind: 'christ',
          id: 'christ-providence',
          title: 'Christ Connection — Evil Intended, Good Meant',
          html:
            '"Ye thought evil against me; but God meant it unto good." This is the clearest statement of the gospel pattern in the Old Testament. Acts 2:23 says: "Him, being delivered by the determinate counsel and foreknowledge of God, ye have taken, and by wicked hands have crucified and slain." Human malice and divine providence work on two different levels. The brothers meant to destroy their brother; God was using their hatred to preserve a family. The crucifixion follows the exact same shape: human evil, divine intention, salvation for many. Joseph\'s words are the gospel in miniature.',
        },
        {
          kind: 'carry',
          html:
            'Forgiveness is not forgetting that harm was done. Joseph remembers. His brothers remember. He holds no grudge, but the injury is real — and so is his choice to see a hand larger than his brothers\' malice at work in it. If you\'ve been deeply hurt, you don\'t move past it by pretending it didn\'t matter. You move past it when you can see that God was at work in the very story that included the wound. That doesn\'t excuse the person who hurt you. It frees you from needing their apology to validate your life.',
        },
        {
          kind: 'reflection',
          id: 'gen50-reconciliation',
          prompt:
            'Is there a place in your story where "evil thought against you" has become, in God\'s providence, something He meant for good? How does Joseph\'s faith change the way you look at your own broken places?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*brothers|reconcil|forgiv/i,
          caption: 'Genesis 50:15–21 · The Reconciliation',
        },
      ],
    },

    /* ─── Genesis 50:22–26 — Bones and Promise ──────────────────────── */
    {
      ref: 'Genesis 50:22–26',
      title: 'Joseph\'s Oath and His Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            {
              number: 22,
              spans: [
                t('And Joseph dwelt in Egypt, he, and his father\'s house: and Joseph lived an hundred and ten years.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Joseph saw Ephraim\'s children of the third generation: the children also of Machir the son of Manasseh were brought up upon Joseph\'s knees.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Joseph said unto his brethren, I die: and God will surely visit you, and bring you out of this land unto the land which he '),
                hy('sware to Abraham, to Isaac, and to Jacob', 'ref-oath-patriarchs'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Joseph took an oath of the children of Israel, saying, God will surely visit you, and ye shall carry up my '),
                hy('bones from hence', 'hebrew-bones'),
                t('.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('So Joseph died, being an hundred and ten years old: and they '),
                hg('embalmed him, and he was put in a coffin in Egypt', 'c-coffin-egypt'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ref-oath-patriarchs',
          html:
            'On his deathbed, Joseph speaks as a man of faith. He will not live to see the exodus. He will not walk in Canaan. But he knows — <em>surely</em> knows — that God will visit His people and bring them out of Egypt. This is not hope; it is certainty. The covenant made to Abraham generations before is still alive, still moving, still going to happen.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-atsamot',
          title: 'Atsamot — &ldquo;bones&rdquo;',
          script: 'עֲצָמוֹת',
          translit: '<strong>atsamot</strong> · bones',
          description:
            'Joseph\'s bones become a sign of faith. Moses will carry them out of Egypt (Exodus 13:19), and Joshua will bury them in Shechem (Joshua 24:32) — a fulfillment of this oath, centuries later. Bones are the hardest part of the body; they persist when everything else decays. Joseph\'s bones are his faith made flesh.',
        },
        {
          kind: 'christ',
          id: 'christ-bones',
          title: 'Christ Connection — Bones and Resurrection',
          html:
            'Hebrews 11:22 singles out this moment: "By faith Joseph, when he made mention of the departing of the children of Israel, gave commandment concerning his bones." A dead man\'s faith. A coffin in Egypt. Bones that know they aren\'t done yet. This is the shape of resurrection hope — the confidence that what looks like an ending is not the last word. When Ezekiel sees a valley of dry bones and God asks, "Can these bones live?" (Ezekiel 37:3), he is standing in the shadow of Joseph\'s coffin, of a man whose faith in God\'s promise proved stronger than the finality of death.',
        },
        {
          kind: 'commentary',
          id: 'c-coffin-egypt',
          html:
            'Genesis ends not with triumph but with a waiting. Jacob is buried in Canaan, at rest in the covenant land. But Joseph — Joseph who rose higher than any of his brothers, who saved a nation, who had authority second only to Pharaoh — Joseph stays in Egypt, in a coffin, waiting. The book that opened with God creating light closes with a man\'s body waiting in darkness for a God who will not forget Him.',
        },
        {
          kind: 'carry',
          html:
            'When you make a promise that you won\'t live to see kept, you\'re acting like Joseph. When you invest in something that will outlast you, plant seeds for a harvest you won\'t reap, teach someone who will teach someone else — you are testifying with your whole life that God is faithful beyond what you can see. Joseph\'s bones in Egypt are a statement of faith written in the grammar of the body. Your faithfulness now is a kind of oath written into the future, a promise that the God you trust is trustworthy enough to outlive you.',
        },
        {
          kind: 'reflection',
          id: 'gen50-bones',
          prompt:
            'What are you investing in that you won\'t see completed? How does Joseph\'s faith in his bones change the way you think about your own mortality and the promises you\'re making?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*death|coffin|egypt/i,
          caption: 'Genesis 50:22–26 · Joseph\'s Oath',
        },
      ],
    },
  ],

  hasHebrew: true,
};
