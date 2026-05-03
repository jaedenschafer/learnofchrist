import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 1 — Solomon's Prayer for Wisdom
 *
 * The new king of Israel stands at Gibeon where the tabernacle of God dwells.
 * He calls the nation's leaders before him. Then, in the night, God appears to
 * Solomon with an extraordinary offer: "Ask what I shall give thee." The moment
 * is Solomon's to define. He could ask for wealth, power, victory over enemies,
 * long life — all the things that make kings great in the eyes of men. Instead,
 * he asks for wisdom and knowledge to judge his people. God's response is
 * immediate: "Wisdom and knowledge is granted unto thee; and I will give thee
 * riches, and wealth, and honour, such as none of the kings have had that have
 * been before thee, neither shall there any after thee have the like." But the
 * chapter closes with a shadow: horses from Egypt, a seed of trouble planted in
 * the very foundation of Solomon's reign.
 */
export const CHRONICLES_2_1: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 14 },
  intros: [
    'Solomon has inherited the throne of Israel at a moment of strength and stability. His father David has secured the borders. The kingdom is at peace. The temple project awaits. But with this inheritance comes a weight: the responsibility to lead a people "like the dust of the earth in multitude." How does a young king step into such a role? The answer begins not with military strategy or administrative genius, but with a night encounter with God — and a simple, crucial choice about what to ask for.',
    'This chapter shows us the beginning of Solomon&apos;s reign through the lens of his greatest gift and his first seed of decline. When God offers him anything, Solomon asks for wisdom. It is the right prayer. And God&apos;s response is generous beyond measure. But even as wealth and honor pour in, a subtle movement troubles the text: horses from Egypt, the very thing Deuteronomy forbade. In Solomon&apos;s choice to acquire horses from Egypt, we see the faint outline of a future king who will forget the lesson of his own prayer.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 1',
    quote:
      'Solomon chose wisdom over wealth, and God granted him both. Yet his reaching toward Egypt for strength reveals how easily even a king who has been given wisdom can turn from God&apos;s way.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 1 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 1:1–2 — Solomon Strengthened in His Kingdom ───── */
    {
      ref: '2 Chronicles 1:1–2',
      title: 'Solomon Strengthened in His Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'And Solomon the son of David was strengthened in his kingdom, and the Lord his God was with him, and magnified him exceedingly.'),
            {
              number: 2,
              spans: [
                t('Then Solomon spake to all Israel, to the captains of thousands and of hundreds, and to the judges, and to every governor in all Israel, the chief of the fathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr2-strengthened',
          html:
            'The chapter opens with a declaration: Solomon is strengthened in his kingdom, and the Lord his God is with him. This is not simply a political statement. It is a spiritual affirmation — the new king stands under God&apos;s favor. The words "magnified him exceedingly" suggest a visibility, a public presence. Everyone will see that God is with this young king.',
        },
        {
          kind: 'commentary',
          id: 'chr2-assembly',
          html:
            'Solomon gathers Israel&apos;s leadership — captains, judges, governors, chief fathers. He is not sitting alone in his throne room. He is calling the nation to witness what comes next. This assembly is essential: they will see their king&apos;s heart laid bare before God.',
        },
        {
          kind: 'carry',
          html:
            'Your place in God&apos;s purpose is not hidden. If the Lord has strengthened you in a responsibility — in your work, your family, your ministry — it is visible. Others are watching. They see whether you trust God or only yourself. Solomon begins his reign not by hiding his need, but by making it public.',
        },
        {
          kind: 'reflection',
          id: 'chr2-strengthened-refl',
          prompt: 'When has God strengthened you for a task or season? Did you recognize His hand in it at the time, or only in looking back?',
        },
      ],
    },

    /* ─── 2 Chronicles 1:3–6 — The Congregation at Gibeon ──────────────── */
    {
      ref: '2 Chronicles 1:3–6',
      title: 'The Congregation at Gibeon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('So Solomon, and all the congregation with him, went to the '),
                hy('high place that was at Gibeon', 'chr2-gibeon'),
                t('; for there was the tabernacle of the congregation of God, which Moses the servant of the Lord had made in the wilderness.'),
              ],
            },
            plain(4, 'But the ark of God had David brought up from Kirjath-jearim to the place that David had prepared for it: for he had pitched a tent for it at Jerusalem.'),
            {
              number: 5,
              spans: [
                t('Moreover the brasen altar, that Bezaleel the son of Uri, the son of Hur, had made, he put before the tabernacle of the Lord: and Solomon and the congregation sought unto it.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Solomon went up there to the brasen altar before the Lord, which was in the tabernacle of the congregation, and offered a thousand burnt offerings upon it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr2-gibeon',
          html:
            'Gibeon holds the tabernacle — the very structure built by Moses in the wilderness, now ancient and central to Israel&apos;s worship. The brazen altar made by Bezaleel stands there, an artifact of the generation that received the law at Sinai. Solomon does not go to the new tent in Jerusalem where the ark rests. He goes to Gibeon, the place of the old tabernacle, the place of sacrifice. He understands: a king must stand where the whole congregation can access the holy.',
        },
        {
          kind: 'commentary',
          id: 'chr2-thousand-offerings',
          html:
            'Solomon offers not a single sacrifice, but a thousand burnt offerings. This is not a timid prayer. It is lavish, almost desperate in its generosity. Each offering consumes entirely — nothing is held back. In this act of sacrifice, Solomon stakes everything. He is telling God and Israel: I am not holding onto myself. I am placing it all at Your altar.',
        },
        {
          kind: 'hebrew',
          id: 'chr2-olah',
          title: 'Olah — "Burnt Offering"',
          script: 'עוֹלָה',
          translit: '<strong>Olah</strong> · a burnt offering; ascension offering',
          description:
            'The Hebrew olah means "that which goes up" — a sacrifice wholly consumed by fire, rising as smoke to heaven. It is the most basic form of approach to God: the entire animal offered, nothing kept back. Solomon&apos;s thousand olot are a statement of utter surrender and petition.',
        },
        {
          kind: 'carry',
          html:
            'Solomon could have consulted his counselors. He could have made careful calculations about what to ask. Instead, he stood at the altar and made a thousand offerings. Sometimes the most important thing we do is stop trying to manage the outcome, and simply present our need to God with nothing held in reserve. What would it look like to pray that way?',
        },
        {
          kind: 'reflection',
          id: 'chr2-gibeon-refl',
          prompt: 'What does it mean to offer something wholly to God, with nothing held back? What would that look like in your life right now?',
        },
      ],
    },

    /* ─── 2 Chronicles 1:7–10 — God Appears and Offers a Choice ────────── */
    {
      ref: '2 Chronicles 1:7–10',
      title: 'God Appears: "Ask What I Shall Give Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('That night did God appear unto Solomon, and said unto him, '),
                hp('Ask what I shall give thee', 'chr2-ask-what'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Solomon said unto God, Thou hast shewed great mercy unto David my father, and hast made me to reign in his stead.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Now, O Lord God, let thy promise unto David my father be established: for thou hast made me king over a people like the dust of the earth in multitude. '),
                hy('Give me now wisdom and knowledge', 'chr2-wisdom-knowledge'),
                t(', that I may go out and come in before this people: for who can judge this thy people, that is so great?'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And God said to Solomon, Because this was in thine heart, and thou hast not asked riches, wealth, or honour, nor the life of thine enemies, neither yet asked long life; but hast asked wisdom and knowledge for thyself, that thou mayest judge my people, over whom I have made thee king:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr2-ask-what',
          html:
            'God&apos;s offer is extraordinary. It is not a conditional gift or a limited grant. It is an open door: "Ask what I shall give thee." The king stands at the altar with a thousand burnt offerings still smoking, and God appears to say: anything you want, I will give. This is the moment where Solomon&apos;s character is revealed.',
        },
        {
          kind: 'commentary',
          id: 'chr2-wisdom-knowledge',
          html:
            'Solomon asks for wisdom and knowledge — חָכְמָה (chokmah) and דַּעַת (daat). He frames it not as a personal ambition, but as a need for his people. "Who can judge this thy people, that is so great?" His request is rooted in responsibility, not desire. He recognizes that the multitude of Israel is too great for him alone to lead.',
        },
        {
          kind: 'hebrew',
          id: 'chr2-chokmah',
          title: 'Chokmah — "Wisdom"',
          script: 'חָכְמָה',
          translit: '<strong>Chokmah</strong> · wisdom; skill; insight; the capacity to live rightly',
          description:
            'Chokmah is not mere learning. It is the deep capacity to see what is right, to act with integrity, to navigate complexity. A chokmah person understands both the letter of the law and the spirit. Solomon asks not for knowledge of facts, but for the wisdom to judge justly.',
        },
        {
          kind: 'carry',
          html:
            'When you are given opportunity — a promotion, a leadership role, a chance to influence — what do you ask for? Solomon was given a blank check and asked for the ability to serve others better. Most of us would ask for security, comfort, recognition. Solomon understood that leadership is a burden, and he asked for the strength to bear it. What would change if you, in your own sphere, asked for wisdom instead of advantage?',
        },
        {
          kind: 'reflection',
          id: 'chr2-ask-refl',
          prompt: 'If God appeared to you tonight and said, "Ask what I shall give thee," what would you ask for? What does your answer reveal about what you truly value?',
        },
      ],
    },

    /* ─── 2 Chronicles 1:11–12 — God Grants Wisdom, Riches, and Honor ──── */
    {
      ref: '2 Chronicles 1:11–12',
      title: 'Wisdom Granted, Plus Riches and Honor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Wisdom and knowledge is granted unto thee; and I will give thee '),
                hp('riches, and wealth, and honour', 'chr2-more-than-asked'),
                t(', such as none of the kings have had that have been before thee, neither shall there any after thee have the like.'),
              ],
            },
            plain(12, 'Then Solomon came from his journey to the high place to Jerusalem, before the tabernacle, and reigned over Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr2-more-than-asked',
          html:
            'God gives Solomon exactly what he asked for — wisdom and knowledge. But He does not stop there. He adds riches, wealth, and honor "such as none of the kings have had." This is the principle of the generous God: when we seek first the kingdom, all other things are added. Solomon asked for the ability to serve; God grants him the means to do it.',
        },
        {
          kind: 'commentary',
          id: 'chr2-promise-sealed',
          html:
            'God&apos;s statement is final and absolute: no king before Solomon has had such riches, nor shall any king after him. This is not hyperbole. Solomon will become legendary — his wealth, his wisdom, his court will be known throughout the ancient world. He will be the standard against which all other kings are measured.',
        },
        {
          kind: 'christ',
          id: 'chr2-wisdom-christ',
          title: 'Christ Connection — The Wisdom of God Incarnate',
          html:
            'Solomon asked for wisdom, and God granted it in abundance. But the New Testament speaks of a Wisdom far greater: "Christ... the power of God, and the wisdom of God" (1 Corinthians 1:24). Where Solomon was wise in ruling Israel, Christ is the Wisdom by which all things were made (Colossians 1:16–17). Where Solomon&apos;s wisdom was great but finite, Christ&apos;s wisdom is infinite. Jesus Himself said, "a greater than Solomon is here" (Matthew 12:42) — and He spoke of Himself. The King whom Solomon foreshadowed asked not for wealth or power, but to lay down His life for His people. In Christ, the pattern reaches its fulfillment: the Wisdom of God seeking not His own advantage, but the redemption of those He loves.',
        },
        {
          kind: 'carry',
          html:
            'God rewards the prayer for wisdom by adding all the other things the world chases — wealth, honor, security. But Solomon&apos;s path and Jesus&apos; path diverge at a crucial point: Solomon will be drawn toward the wealth he has been given; Jesus will be offered all the kingdoms of the world and refuse them. In your own life, when you receive the good things God grants — success, resources, influence — do you let them pull you away from the wisdom that asked for them in the first place?',
        },
        {
          kind: 'reflection',
          id: 'chr2-riches-refl',
          prompt: 'When God grants us more than we asked for — when success comes, or resources appear, or opportunities multiply — how do we stay true to the values that led us to ask for His wisdom in the first place?',
        },
      ],
    },

    /* ─── 2 Chronicles 1:13–17 — The Seed of Trouble: Horses from Egypt ── */
    {
      ref: '2 Chronicles 1:13–17',
      title: 'The Shadow: Horses from Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 13,
              spans: [
                t('So Solomon made it known, that he had asked God for wisdom and knowledge: and God said unto him, Because this was in thine heart, and thou hast not asked riches, nor wealth, nor honour, nor the life of thine enemies, neither yet long life; but hast asked wisdom and knowledge for thyself, that thou mayest judge my people, over whom I have made thee king: Wisdom and knowledge is '),
              ],
            },
            {
              number: 14,
              spans: [
                t('Now Solomon gathered chariots and horsemen: and he had a thousand and four hundred chariots, and twelve thousand horsemen, which he placed in the chariot cities, and with the king at Jerusalem.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the king made silver and gold at Jerusalem as plenteous as stones, and cedar trees made he as the sycomore trees that are in the vale, for abundance.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Solomon had '),
                hg('horses brought out of Egypt', 'chr2-egypt-horses'),
                t(', and linen yarn: the king&apos;s merchants received the linen yarn at a price.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they fetched up, and brought forth out of Egypt a chariot for six hundred shekels of silver, and an horse for an hundred and fifty: and so brought they out horses for all the kings of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'chr2-egypt-horses',
          html:
            'Here is the shadow that falls across Solomon&apos;s brightness. Deuteronomy 17:16 contains a law for kings: "He shall not multiply horses to himself, nor cause the people to return to Egypt, to the end that he should multiply horses." The law is explicit. And Solomon, the king who asked for wisdom, begins to do exactly what the law forbade. He brings horses from Egypt. The seed of trouble is planted.',
        },
        {
          kind: 'commentary',
          id: 'chr2-wealth-accumulation',
          html:
            'The riches pour in. Silver and gold become as common as stones. Cedar trees are as numerous as sycomore trees in the valley. Solomon&apos;s wealth is almost incomprehensible. And it is in the midst of this abundance that he reaches toward Egypt. The very abundance that was meant to establish his kingdom becomes the occasion for him to trust in his own strength rather than God&apos;s protection.',
        },
        {
          kind: 'hebrew',
          id: 'chr2-sus',
          title: 'Sus — "Horse"',
          script: 'סוּס',
          translit: '<strong>Sus</strong> · horse; a symbol of strength and human military might',
          description:
            'The Hebrew sus, or horse, appears throughout Scripture as a symbol of trust in human power rather than divine protection. When Israel relies on Egypt&apos;s horses, they are trusting in flesh rather than spirit. Solomon&apos;s acquisition of horses signals a subtle shift: from reliance on God&apos;s wisdom to reliance on his own strength.',
        },
        {
          kind: 'carry',
          html:
            'The most dangerous moment in following God is often the moment when His blessing makes us successful. We ask for wisdom and receive it. We are granted wealth and honor. And then, almost imperceptibly, we begin to trust in the wealth instead of the wisdom. We begin to rely on our own strength. Watch for it in your own life — the moment when the blessings you asked for begin to pull you away from the One who gave them.',
        },
        {
          kind: 'reflection',
          id: 'chr2-egypt-refl',
          prompt: 'When God has blessed you abundantly, have you been tempted to trust in the blessing itself rather than in God? What warning does Solomon&apos;s reaching toward Egypt give you?',
        },
      ],
    },
  ],
};
