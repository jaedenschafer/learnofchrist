import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 4 — The Sabbath Rest and the Living Word
 *
 * The promised rest remains open. Joshua did not give rest. David still invites:
 * "There remaineth therefore a rest to the people of God." This rest is the
 * Sabbath rest—God&apos;s rest entered through faith. The word of God is sharp,
 * piercing, dividing soul and spirit. Jesus, our High Priest, knows our every
 * struggle. "Let us come boldly unto the throne of grace."
 */
export const HEBREWS_4: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 4,

  intros: [
    'The wilderness generation failed to enter God&apos;s rest because of unbelief. But the promise stands. Rest remains. Not idleness—the Sabbath rest is a day of ceasing from works and entering God&apos;s complete sufficiency. For the Christian, this rest is available now through faith in Christ. It is not something earned. It is entered through trust.',
    'The passage then describes the word of God as living and active, sharper than any sword. It sees into the hidden places of the heart. Yet this piercing truth is not meant to condemn. It is meant to heal. And above all, we have a High Priest who has passed through the heavens, who knows our weakness, who invites us to come with confidence.',
  ],

  sections: [
    /* ─── Hebrews 4:1–10 — There Remaineth a Rest ──────────────────── */
    {
      ref: 'Hebrews 4:1–10',
      title: 'Entering Into Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Let us therefore fear, lest, a promise being left us of entering into his rest, any of you should seem to come short of it.'),
            plain(3, 'For we which have believed do enter into rest, as he said, As I have sworn in my wrath, If they shall enter into my rest: although the works were finished from the foundation of the world.'),
            plain(4, 'For he spake in a certain place of the seventh day on this wise, And God did rest the seventh day from all his works.'),
            plain(9, 'There remaineth therefore a rest to the people of God.'),
            plain(10, 'For he that is entered into his rest, he also hath ceased from his own works, as God did from his.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb4-fear-short',
          html:
            '"Let us therefore fear, lest, a promise being left us of entering into his rest, any of you should seem to come short of it." The warning is against carelessness. The promise is real. The invitation is open. But you must seize it. You must believe. To fail to believe is to miss the rest that was meant for you.',
        },
        {
          kind: 'greek',
          id: 'heb4-sabbatismos',
          title: 'Sabbatismos — Sabbath Rest',
          script: 'σαββατισμός',
          translit: '<strong>Sabbatismos</strong> · sabbath rest; ceasing from labor',
          description:
            'This word appears nowhere else in scripture. The author coins it to express the ultimate rest—the Sabbath not merely as a day but as a spiritual reality. To cease from your works means to stop trusting in yourself and to trust entirely in God&apos;s sufficiency.',
        },
        {
          kind: 'commentary',
          id: 'heb4-works-finished',
          html:
            '"The works were finished from the foundation of the world." God rested on the seventh day. But His rest was not termination. It was the standing back and beholding—"it is very good." For us, rest means ceasing from striving, from self-justification, from anxiety. We can rest because Christ&apos;s work is finished.',
        },
        {
          kind: 'christ',
          id: 'heb4-christ-rest',
          title: 'Christ Connection — Our Entry into Rest',
          html:
            'Jesus said, "Come unto me, all ye that labour and are heavy laden, and I will give you rest." He is the Sabbath rest. Not a day of the week but a person. In Him, you cease from your works and enter God&apos;s peace. Your justification is not your achievement. It is His gift.',
        },
        {
          kind: 'carry',
          html:
            'Are you still striving? Still proving yourself? Still anxious about whether you are enough? The author invites you to cease. To stop working for your salvation and to believe that it is finished in Christ. This is not passivity. It is the deepest peace—knowing that you are loved, accepted, secure, not by your merit but by His.',
        },
        {
          kind: 'reflection',
          id: 'heb4-rest-cease',
          prompt: 'What are you still trying to achieve that Christ has already accomplished? Where can you cease from your works and enter His rest?',
        },
      ],
    },

    /* ─── Hebrews 4:11–16 — The Living Word and Merciful High Priest ─ */
    {
      ref: 'Hebrews 4:11–16',
      title: 'The Word Is Quick and Powerful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(11, 'Let us labour therefore to enter into that rest, lest any man fall after the same example of unbelief.'),
            plain(12, 'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.'),
            plain(13, 'Neither is there any creature that is not manifest in his sight: but all things are naked and opened unto the eyes of him with whom we have to do.'),
            plain(14, 'Seeing then that we have a great high priest, that is passed into the heavens, Jesus the Son of God, let us hold fast our profession.'),
            plain(15, 'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted as we are, yet without sin.'),
            plain(16, 'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb4-quick-powerful',
          html:
            '"The word of God is quick, and powerful, and sharper than any twoedged sword." Living and active. It is not dead letters. It is a force that divides, separates, exposes. You cannot hide from it. You cannot neutralize it. And you need not try. Let it work.',
        },
        {
          kind: 'greek',
          id: 'heb4-dikronos',
          title: 'Dikronos — Two-edged',
          script: 'δίστομος',
          translit: '<strong>Dikronos</strong> · two-edged; having edges on both sides',
          description:
            'A two-edged sword cuts both ways. The word of God cuts—it judges, convicts, exposes. But it also heals, builds up, makes alive. Its power is not punitive alone. It is redemptive.',
        },
        {
          kind: 'commentary',
          id: 'heb4-high-priest-touched',
          html:
            '"We have not an high priest which cannot be touched with the feeling of our infirmities." Jesus does not stand apart, unmoved by your struggle. He was tempted. He suffered. He understands. His compassion is not theoretical. It is earned through experience.',
        },
        {
          kind: 'christ',
          id: 'heb4-christ-bold-throne',
          title: 'Christ Connection — Our Merciful Advocate',
          html:
            'Jesus has passed into the heavens. He is now seated at God&apos;s right hand. Yet He is not distant. He is interceding for you. Because He knows your weakness, because He has walked your journey, He pleads your case before the Father with perfect understanding and infinite compassion.',
        },
        {
          kind: 'carry',
          html:
            'You can approach the throne of grace boldly—not because you are sinless, but because Christ is. Not because you have earned favor, but because He has. Go with your need, your weakness, your temptation. He understands. He can help. Mercy awaits.',
        },
        {
          kind: 'reflection',
          id: 'heb4-bold-approach',
          prompt: 'What need or struggle are you hesitant to bring before God? What would it mean to come boldly to His throne?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The word of God is quick, and powerful, and sharper than any twoedged sword. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 4 · Study Guide',
  },

  hasHebrew: false,
};
