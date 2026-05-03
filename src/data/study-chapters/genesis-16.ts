import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 16 — Sarai gives Hagar to Abram; Hagar conceives and despises Sarai;
 * Sarai deals harshly with her; Hagar flees to the wilderness; the angel of the
 * LORD finds her by a fountain of water. She becomes the first person in the
 * Bible to give God a name: *El Roi*, "Thou God seest me." Ishmael is born.
 *
 * This is a chapter about what we do when we lose patience with God's promises,
 * and a chapter about a slave woman in the wilderness who becomes the first
 * person to name God.
 */
export const GENESIS_16: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 16,

  estimatedMinutes: { 5: 5, 10: 8, 15: 11 },
  intros: [
    'Genesis 15 closed with God making a covenant with Abram: your offspring will be more numerous than the stars. Genesis 16 opens ten years later. Sarai is still childless. The promise sits in the air, unborn. And Sarai, tired of waiting, decides to take matters into her own hands. What she does makes sense by the customs of the ancient Near East — a servant-surrogacy was a recognized way for a barren wife to build a family. But making sense and making peace are different things. Hagar will pay the cost of Sarai\'s impatience.',
    'Yet this chapter belongs to Hagar. She is the one who runs, the one God finds, the one who speaks with God and names Him. Before Moses at the burning bush, before any priest at an altar, before any king in a temple, Hagar — a pregnant slave woman alone in the wilderness — becomes the first person in Scripture to give God a name. *El Roi*: "Thou God seest me." The chapter is a portrait of the unseen made visible, and the God who sees those no one else looks at.',
  ],

  bottomShare: {
    label: 'Share Genesis 16',
    quote:
      'Hagar fled into the wilderness alone and afraid, and the angel of the LORD found her by a well. He saw her, spoke to her, and she named God: El Roi, "Thou God seest me."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 16 · Study Guide',
  },

  sections: [
    /* ─── Genesis 16:1–6 — Sarai's Plan ─────────────────────────────────── */
    {
      ref: 'Genesis 16:1–6',
      title: 'Sarai\'s Plan and Hagar\'s Pregnancy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Sarai Abram\'s wife '),
                hg('bare him no children', 'c-barren'),
                t(': and she had an handmaid, an Egyptian, whose name was Hagar.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Sarai said unto Abram, Behold now, the LORD hath restrained me from bearing: I pray thee, go in unto my maid; it may be that '),
                hg('I may obtain children by her', 'c-surrogacy'),
                t('. And Abram hearkened to the voice of Sarai.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-barren',
          html:
            'Ten years have passed since God promised Abram offspring (Gen. 15). Sarai has waited, watched, hoped. The silence has worn on her. She names what everyone knows: she is barren. The word is not a diagnosis; it is a door closing.',
        },
        {
          kind: 'commentary',
          id: 'c-surrogacy',
          html:
            'In ancient Near Eastern law codes — the Code of Hammurabi, cuneiform tablets from Nuzi — a barren wife could give her servant to her husband so that the servant\'s children would legally belong to the wife. It was a recognized, lawful practice. Sarai is not inventing something scandalous; she is naming something her culture understands. The question is not whether it was legal. It is whether impatience is wisdom.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 3,
              spans: [
                t('And Sarai Abram\'s wife took Hagar her maid the Egyptian, after Abram had dwelt ten years in the land of Canaan, and gave her to her husband Abram to be his wife.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he went in unto Hagar; and she conceived: and when she saw that she had conceived, '),
                hy('her mistress was despised in her eyes', 'hebrew-qalal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qalal',
          title: 'Qalal — &ldquo;was despised&rdquo;',
          script: 'קָלַל',
          translit: '<strong>qalal</strong> · to be light, to be of little account, to despise',
          description:
            'The same root that meant "to divide" (light from darkness, in Genesis 1) now means to demote, to make light of, to treat with contempt. Hagar, carrying Abram\'s child, looks at Sarai — the one who gave her to him — and sees her as nothing. The irony is bitter: Sarai gave up power to gain a child, and lost power in the bargain.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 5,
              spans: [
                t('And Sarai said unto Abram, My wrong be upon thee: I have given my maid into thy bosom; and when she saw that she had conceived, I was despised in her eyes: the LORD judge between me and thee.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But Abram said unto Sarai, Behold, thy maid is in thy hand; do to her as it pleaseth thee. And when Sarai '),
                hg('dealt hardly with her', 'c-harshly'),
                t(', she fled from her face.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-harshly',
          html:
            'Sarai deals hardly with Hagar. The text does not specify the cruelty, only names it. The vagueness carries weight. Whatever it was, it was enough to make a pregnant woman flee into the desert alone. Hagar runs not to freedom but away from unbearable harm — and she runs while carrying Abram\'s unborn son, the heir Sarai wanted, the solution Sarai created.',
        },
        {
          kind: 'carry',
          html:
            'Impatience makes us do things we thought we wouldn\'t. We take control of a timeline God already knows. We offer a solution that costs us more than we bargained for. And when the solution backfires, we sometimes blame the person we used to fix it. Sarai\'s story is not rare. Wherever you\'ve tried to force God\'s timing, you have probably met this moment: the moment you realized the problem was not what you thought it was.',
        },
        {
          kind: 'reflection',
          id: 'gen16-impatience',
          prompt:
            'Where have you tried to speed up God\'s timeline by taking control? What did you discover about yourself in the fallout?',
        },
      ],
    },

    /* ─── Genesis 16:7–12 — The Angel at the Well ──────────────────────── */
    {
      ref: 'Genesis 16:7–12',
      title: 'Hagar in the Wilderness; The Angel Finds Her',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 7,
              spans: [
                t('And the '),
                hy('angel of the LORD', 'hebrew-malak-yhwh'),
                t(' found her by a fountain of water in the wilderness, by the fountain in the way to Shur.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he said, Hagar, Sarai\'s maid, whence camest thou? and whither wilt thou go? And she said, I flee from the face of my mistress Sarai.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-malak-yhwh',
          title: 'Malak YHWH — &ldquo;angel of the LORD&rdquo;',
          script: 'מַלְאַךְ יְהוָה',
          translit: '<strong>malak YHWH</strong> · messenger of the LORD',
          description:
            'This is the *malak YHWH*\'s first appearance in Scripture. The figure speaks as God in the first person — "I will multiply thy seed" — yet is called God\'s messenger. Theologians have long puzzled over the identity; the text holds the mystery: a being who speaks with God\'s authority, sent by God, meeting Hagar at a well.',
        },
        {
          kind: 'commentary',
          id: 'c-well-wilderness',
          html:
            'She is alone in the wilderness, and the first thing she encounters is a well. In the ancient Near East, a well means survival — water, life. Before anyone tells her she matters, God provides what she needs to live. Then the angel arrives.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 9,
              spans: [
                t('And the angel of the LORD said unto her, Return to thy mistress, and '),
                hg('submit thyself under her hands', 'c-return'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-return',
          html:
            'This is the hard word. Return. Submit. The angel does not say the cruelty will stop, or that Sarai will repent, or that her life will become easy. He says: go back. This is not the comfort we expect from a divine encounter. Yet what follows is a promise so extravagant that Hagar\'s submission makes sense — not as capitulation, but as trust.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 10,
              spans: [
                t('And the angel of the LORD said unto her, I will multiply thy seed exceedingly, that it shall not be numbered for multitude.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the angel of the LORD said unto her, Behold, thou art with child, and shalt bear a son: and thou shalt call his name '),
                hy('Ishmael', 'hebrew-ishmael'),
                t('; because the LORD hath heard thy affliction.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ishmael',
          title: 'Ishmael — &ldquo;God hears&rdquo;',
          script: 'יִשְׁמָעֵאל',
          translit: '<strong>ishmael</strong> · God hears / God will hear',
          description:
            'The boy\'s name means "God hears." It is spoken before he is born, by an angel who has just heard Hagar\'s cry. In a story where Hagar has been unseen and unheard, she is told that the child in her womb will carry forever the name of a God who listens.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 12,
              spans: [
                t('And he will be a wild ass among men; his hand will be against every man, and every man\'s hand against him; and he shall dwell in the presence of all his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'A well in the wilderness. A messenger who sees you. A promise that your name will be remembered, your child will live, your affliction has been heard. When you have run from cruelty and find yourself alone and afraid, the very first thing God offers is not comfort but proof that He is paying attention. You have been seen. The promise comes after the seeing.',
        },
        {
          kind: 'reflection',
          id: 'gen16-seen',
          prompt:
            'What affliction have you been carrying that you felt no one sees? What changes if you believe that God hears it?',
        },
      ],
    },

    /* ─── Genesis 16:13–14 — "Thou God Seest Me" ────────────────────────── */
    {
      ref: 'Genesis 16:13–14',
      title: '"Thou God Seest Me" — El Roi',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 13,
              spans: [
                t('And she said, '),
                hp('Have I also here looked after him that seeth me', 'christ-el-roi'),
                t('? Therefore the well was called '),
                hy('Beer-lahai-roi', 'hebrew-el-roi'),
                t('; behold, it is between Kadesh and Bered.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-el-roi',
          title: 'El Roi — &ldquo;God who sees me&rdquo;',
          script: 'אֵל רֳאִי',
          translit: '<strong>el roi</strong> · the God who sees / the God of my seeing',
          description:
            'Hagar speaks the only name for God anyone has given Him so far in Scripture. Not the name He revealed to Moses, but a name she has discerned. She is a slave woman, a foreigner, a runaway pregnant in the desert — and she alone has named the nature of God: He is the One who sees. The Hebrew root *rah* (to see) echoes through her statement: she has seen Him, and she has been seen. Beer-lahai-roi means "the Well of the Living One Who Sees Me."',
        },
        {
          kind: 'christ',
          id: 'christ-el-roi',
          title: 'Christ Connection — The God Who Sees at the Well',
          html:
            'Centuries after Hagar names God at this well, Jesus sits down at another well — in Samaria, at high noon — and asks a Samaritan woman for water. She too is an outsider, a woman with a fractured life, alone at a well. She too encounters someone who sees her completely and speaks as God speaks. "Jesus saith unto her, I that speak unto thee am he" (John 4:26). The God who sees the unloved woman in the wilderness is the same God who, in flesh, sat with the woman at noon. El Roi has a name. It is Jesus.',
        },
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 14,
              spans: [
                t('Wherefore the well was called Beer-lahai-roi; behold, it is between Kadesh and Bered.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'You have been seen. Not by accident, not because you were loud enough or important enough. You have been seen because the God of the universe pays attention to a slave woman in the desert. Hagar\'s name for God is your name for Him too — the One who sees what others miss, who hears what others ignore, who calls you by name before you ever ask to be known.',
        },
        {
          kind: 'reflection',
          id: 'gen16-el-roi',
          prompt:
            'Where in your life do you need to be seen — really seen, not judged or fixed, but witnessed? Will you name God as El Roi, the God who sees, and trust Him with what is hidden?',
        },
      ],
    },

    /* ─── Genesis 16:15–16 — Ishmael is Born ─────────────────────────────── */
    {
      ref: 'Genesis 16:15–16',
      title: 'The Birth of Ishmael',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 15,
              spans: [
                t('And Hagar bare Abram a son: and Abram called the name of his son, which Hagar bare, '),
                hg('Ishmael', 'c-ishmael-born'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Abram was fourscore and six years old, when Hagar bare Ishmael to him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ishmael-born',
          html:
            'Ishmael is born. The son of a slave woman and the man whom God promised innumerable descendants — a son who carries in his name the memory of a woman\'s affliction, heard by God. He is not the son the covenant promised. That will come through Sarah. But he is not unloved. He is not unnamed. He enters the world as "God hears," and the world will eventually know that God hears through him — through the descendants who will be numbered like the sand of the sea (Gen. 21:13), through a people who will call on the God of Ishmael for millennia.',
        },
        {
          kind: 'carry',
          html:
            'The child born of impatience is not a mistake. Ishmael carries God\'s promise. He carries a mother\'s vindication. He carries the name of a God who hears. What comes when we run ahead of God\'s timing is not always what we intended — but it is not outside God\'s love. The story does not end with a child born "too soon." It ends with a child born, named, promised, and held in the covenant of a God who sees.',
        },
        {
          kind: 'reflection',
          id: 'gen16-ishmael-born',
          prompt:
            'What child, plan, or work in your life came from impatience or desperation instead of faith? Does it surprise you that God does not reject it?',
        },
      ],
    },
  ],
};
