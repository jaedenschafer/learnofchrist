import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 33 — God Speaks in Dreams and Chastening
 *
 * Elihu's first major speech. He argues that God communicates with us through dreams,
 * through suffering, through the voice within us. God uses affliction to draw us back
 * from the brink of destruction, to instruct us, to refine us. And there is a mediator
 * available: "a messenger, an interpreter, one among a thousand."
 */
export const JOB_33: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 33,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Elihu offers a radically different interpretation of Job&apos;s suffering. Rather than seeing it as punishment for sin, he frames it as God&apos;s way of speaking—through dreams, through the voice of conscience, through physical affliction. And he offers hope: there is a mediator available, one who can interpret God&apos;s voice and deliver the sufferer from the brink of death.',
  ],

  bottomShare: {
    quote:
      'God speaks through suffering, says Elihu. "If there be a messenger with him, an interpreter, one among a thousand, to shew unto man his uprightness," then there is hope of deliverance.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 33 · Study Guide',
  },

  sections: [
    /* ─── Job 33:1–11 — Elihu's Appeal ───────────────────────────────── */
    {
      ref: 'Job 33:1–11',
      title: 'Hear Me Directly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(1, 'Wherefore, Job, I pray thee, hear my speeches, and hearken to all my words.'),
            plain(2, 'Behold, now I have opened my mouth, my tongue hath spoken in my mouth.'),
            plain(3, 'My words shall be of the uprightness of my heart: and my lips shall utter knowledge clearly.'),
            plain(4, 'The spirit of God hath made me, and the breath of the Almighty hath given me life.'),
            plain(5, 'If thou canst answer me, set thy words in order before me, stand up.'),
            plain(6, 'Behold, I am according to thy wish in God&apos;s stead: I also am formed out of the clay.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-equal-appeal',
          html:
            'Elihu opens not with authority but with friendship. He asks Job to hear him, promises to speak with uprightness. He claims to speak from the spirit of God, but he also claims kinship: "I am formed out of the clay" just as Job is. He will not overwhelm Job with power or status.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(7, 'Behold, my terror shall not make thee afraid, neither shall my hand be heavy upon thee.'),
            plain(8, 'Surely thou hast spoken in mine hearing, and I have heard the voice of thy words, saying,'),
            plain(9, 'I am clean without transgression, I am innocent, neither is there iniquity in me.'),
            plain(10, 'Behold, he findeth occasions against me, he counteth me for his enemy,'),
            plain(11, 'He putteth my feet in the stocks, he marketh all my paths.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-equal-standing',
          html:
            'Elihu addresses Job directly and appeals to him to listen. He claims not divine authority but shared humanity: "I am according to thy wish in God&apos;s stead: I also am formed out of the clay." He will not overwhelm Job with superior power. He will meet him as an equal.',
        },
        {
          kind: 'commentary',
          id: 'job33-heard-words',
          html:
            'Elihu recapitulates Job&apos;s argument: "I am clean without transgression, I am innocent, neither is there iniquity in me." He has heard Job&apos;s complaint. He acknowledges Job&apos;s assertion of innocence. He does not dismiss it. But he will offer a different interpretation of what the suffering means.',
        },
        {
          kind: 'hebrew',
          id: 'job33-tzaar',
          title: 'Tzaar — Trouble',
          script: 'צַעַר',
          translit: '<strong>Tzaar</strong> · trouble; anguish; the experience of being pursued or opposed',
          description:
            'Job feels pursued by God, feels that God has set him in stocks, marked all his paths. This is the experience of being hunted, tracked, enclosed. It is a metaphor for the totality of Job&apos;s predicament—no escape, no privacy, no place of refuge.',
        },
        {
          kind: 'carry',
          html:
            'Unlike the three friends, Elihu does not begin by accusing. He begins by listening and acknowledging. Only then does he offer a different perspective. This is a model for difficult conversations: first listen, then offer your view, from a place of equality.',
        },
        {
          kind: 'reflection',
          id: 'job33-listening',
          prompt:
            'How do you feel when someone truly listens to your complaint before offering a different perspective? What makes the difference between judgment and understanding?',
        },
      ],
    },

    /* ─── Job 33:12–22 — God Speaks in Dreams and Conscience ──────────── */
    {
      ref: 'Job 33:12–22',
      title: 'The Voice Within',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(12, 'Behold, in this thou art not just: I will answer thee, that God is greater than man.'),
            plain(13, 'Why dost thou strive against him? for he giveth not account of any of his matters.'),
            plain(14, 'For God speaketh once, yea twice, yet man perceiveth it not.'),
            plain(15, 'In a dream, in a vision of the night, when deep sleep falleth upon men, in slumberings upon the bed;'),
            plain(16, 'Then he openeth the ears of men, and sealeth their instruction,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-mid1',
          html:
            'God&apos;s first teaching method is the dream—the voice that reaches us when our usual defenses are down. In sleep, when we cannot argue or rationalize, God makes us able to hear. This openness to instruction is the beginning of transformation.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(17, 'To turn man from his purpose, and hide pride from man.'),
            plain(18, 'He keepeth back his soul from the pit, and his life from perishing by the sword.'),
            plain(19, 'He is chastened also with pain upon his bed, and the multitude of his bones with strong pain:'),
            plain(20, 'So that his life abhorreth bread, and his soul dainty meat.'),
            plain(21, 'His flesh is consumed away, that it cannot be seen; and his bones that were not seen stick out.'),
            plain(22, 'Yea, his soul draweth near unto the grave, and his life to the destroyers.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-god-speaks',
          html:
            'Here is Elihu&apos;s key argument: God is not silent. God speaks, but often we do not perceive it. God speaks in dreams, in the night-visions when the conscious mind is quiet. God "openeth the ears of men"—He makes them able to hear what they cannot hear in waking life. The purpose is to "turn man from his purpose, and hide pride from man." Suffering, in this view, is God&apos;s voice calling us back.',
        },
        {
          kind: 'commentary',
          id: 'job33-chastening',
          html:
            'Elihu describes affliction—pain on the bed, the body wasting away, appetite failing, life approaching the grave. But he frames it not as punishment but as chastening, as instruction. God brings a person to the edge of death not to destroy them, but to strip away illusions and teach them truth.',
        },
        {
          kind: 'hebrew',
          id: 'job33-musar',
          title: 'Musar — Instruction or Chastening',
          script: 'מוּסָר',
          translit: '<strong>Musar</strong> · instruction; discipline; correction; the pain that teaches',
          description:
            'Musar is not mere punishment. It is the kind of pain that teaches, that corrects, that refines. It comes from one who loves you and wants you to become better. The distinction Elihu makes is crucial: affliction from God is not retribution; it is instruction.',
        },
        {
          kind: 'carry',
          html:
            'Elihu suggests that suffering can be God&apos;s way of speaking when we have stopped listening. It wakes us up. It breaks through our pride. It reminds us that we are creatures, not creators. This reframe does not solve the problem of Job&apos;s suffering, but it changes what it might mean.',
        },
        {
          kind: 'reflection',
          id: 'job33-suffering-voice',
          prompt:
            'Have you ever sensed God&apos;s voice most clearly through difficulty rather than comfort? What did the suffering teach you that you might not have learned otherwise?',
        },
      ],
    },

    /* ─── Job 33:23–30 — The Mediator ───────────────────────────────── */
    {
      ref: 'Job 33:23–30',
      title: 'A Messenger to Show the Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(23, 'If there be a messenger with him, an interpreter, one among a thousand, to shew unto man his uprightness:'),
            plain(24, 'Then he is gracious unto him, and saith, Deliver him from going down to the pit: I have found a ransom.'),
            plain(25, 'His flesh shall be fresher than a child&apos;s: he shall return to the days of his youth:'),
            plain(26, 'He shall pray unto God, and he will be favourable unto him: and he shall see his face with joy: for he will render unto man his righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-mid-ransom-pit',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(27, 'He looketh upon men, and if any say, I have sinned, and perversed that which was right, and it profited me not;'),
            plain(28, 'He will deliver his soul from going into the pit, and his life shall see the light.'),
            plain(29, 'Lo, all these things worketh God oftentimes with man,'),
            plain(30, 'To bring back his soul from the pit, to be enlightened with the light of the living.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job33-interpreter',
          html:
            'The climax of Elihu&apos;s speech: there is hope through a mediator. "If there be a messenger with him, an interpreter, one among a thousand"—someone who can explain God&apos;s voice, who can stand between man and God. If such a one exists and speaks for you, saying "I have found a ransom," then God becomes gracious. The soul is delivered from the pit. Life is restored.',
        },
        {
          kind: 'commentary',
          id: 'job33-ransom-found',
          html:
            'The key phrase: "I have found a ransom." This suggests that someone has intervened, someone has paid the price, someone has become the mediator who can speak on behalf of the suffering one. Through this mediator, God becomes gracious. The whole trajectory reverses: from the pit, to healing, to joy in God&apos;s presence.',
        },
        {
          kind: 'hebrew',
          id: 'job33-kofer',
          title: 'Kofer — Ransom or Covering',
          script: 'כֹּפֶר',
          translit: '<strong>Kofer</strong> · ransom; atonement; the price that covers guilt',
          description:
            'A kofer is the price paid to redeem or atone. It literally "covers" the offense. Elihu suggests that there is a way out: if someone finds a ransom—if someone pays the price—then the soul is delivered. This is language of substitutionary atonement, of mediation, of one person standing in place of another.',
        },
        {
          kind: 'christ',
          id: 'job33-christ-mediator',
          title: 'Christ Connection — The One Mediator',
          html:
            'Elihu speaks of "an interpreter, one among a thousand." Paul writes in 1 Timothy 2:5: "There is one God, and one mediator between God and men, the man Christ Jesus; who gave himself a ransom for all." Elihu&apos;s hope finds its fulfillment in Christ. Christ is the messenger who interprets God&apos;s nature to us. Christ is the one who finds the ransom—His own life poured out. Through Christ, the soul is delivered from the pit, restored, brought into joy in God&apos;s presence. The light of the living is Christ Himself (John 1:4).',
        },
        {
          kind: 'carry',
          html:
            'Elihu offers something that the three friends could not: not judgment, but hope. Not the assertion of innocence, but the promise of a mediator who will stand for you when you cannot stand for yourself. This is the gospel announced within the Old Testament—that there is a way of redemption, a way of restoration, a messenger who comes to show us the way.',
        },
        {
          kind: 'reflection',
          id: 'job33-mediator',
          prompt:
            'What does it mean to you to have a mediator—someone who stands between you and God, who speaks your name, who offers the ransom on your behalf?',
        },
      ],
    },
  ],
};
