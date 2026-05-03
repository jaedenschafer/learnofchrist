import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 34 — God's Righteousness Vindicated
 *
 * Elihu defends God's justice directly. "Far be it from God, that he should do wickedness;
 * and from the Almighty, that he should commit iniquity." Elihu argues that God cannot be
 * unjust. God sees all. God judges rightly. Human suffering cannot be evidence of God's
 * injustice because God is, by definition, just.
 */
export const JOB_34: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 34,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'In his second speech, Elihu argues for the absolute righteousness of God. Job has essentially accused God of injustice. Elihu will not have it. He insists that God cannot act unjustly—not because of arbitrary authority, but because God is the standard of justice itself. Whatever God does is, by definition, just.',
  ],

  bottomShare: {
    quote:
      '"Far be it from God, that he should do wickedness." Elihu affirms that God&apos;s nature makes injustice impossible. To suffer is not to prove God unjust.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 34 · Study Guide',
  },

  sections: [
    /* ─── Job 34:1–15 — God Cannot Act Unjustly ──────────────────────── */
    {
      ref: 'Job 34:1–15',
      title: 'God&apos;s Nature and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(1, 'Furthermore Elihu answered and said,'),
            plain(2, 'Hear my words, O ye wise men; and give ear unto me, ye that have knowledge.'),
            plain(3, 'For the ear trieth words, as the mouth tasteth meat.'),
            plain(4, 'Let us choose to us judgment: let us know among ourselves what is good.'),
            plain(5, 'For Job hath said, I am righteous: and God hath taken away my judgment.'),
            plain(6, 'Should I lie against my right? my wound is incurable without transgression.'),
            plain(7, 'What man is like Job, who drinketh up scorning like water?'),
            plain(8, 'Which goeth in company with the workers of iniquity, and walketh with wicked men.'),
            plain(9, 'For he hath said, It profiteth a man nothing that he should delight himself with God.'),
            plain(10, 'Therefore hearken unto me, ye men of understanding: far be it from God, that he should do wickedness; and from the Almighty, that he should commit iniquity.'),
            plain(11, 'For the work of a man shall he render unto him, and cause every man to find according to his ways.'),
            plain(12, 'Yea, surely God will not do wickedly, neither will the Almighty pervert judgment.'),
            plain(13, 'Who hath given him a charge over the earth? or who hath disposed the whole world?'),
            plain(14, 'If he set his heart upon man, if he gather unto himself his spirit and his breath;'),
            plain(15, 'All flesh shall perish together, and man shall turn again unto dust.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job34-god-cannot-do-wrong',
          html:
            'Elihu makes the central assertion of his speech: "Far be it from God, that he should do wickedness; and from the Almighty, that he should commit iniquity." This is not qualified or debated. It is stated as axiom. God cannot do wrong. Not because He is constrained by external law, but because God IS the measure of justice. To act contrary to God&apos;s nature would be to act unjustly, and that is impossible.',
        },
        {
          kind: 'commentary',
          id: 'job34-who-gave-charge',
          html:
            '"Who hath given him a charge over the earth? or who hath disposed the whole world?" This is Elihu&apos;s appeal to God&apos;s absolute sovereignty. God is not accountable to anyone. God did not receive His authority from anyone. Therefore, God cannot be unjust, because there is no authority higher than God to judge Him.',
        },
        {
          kind: 'hebrew',
          id: 'job34-emet',
          title: 'Emet — Truth or Certainty',
          script: 'אֱמֶת',
          translit: '<strong>Emet</strong> · truth; that which stands firm; the sure reality',
          description:
            'Elihu is not offering an opinion or a hope. He is asserting what he takes to be emet—truth so fundamental it needs no proof. God&apos;s justice is not a claim to be debated. It is the foundation on which all other truth stands.',
        },
        {
          kind: 'carry',
          html:
            'Elihu&apos;s argument is powerful but also troubling: if God is always just, and I am suffering, then either I am guilty (as the friends suggest) or the suffering serves some just purpose I cannot see. There is no third option—no possibility of genuine injustice in God&apos;s actions.',
        },
        {
          kind: 'reflection',
          id: 'job34-god-just',
          prompt:
            'Can you reconcile complete faith in God&apos;s justice with your own experience of seeming injustice? Or is the tension itself part of faith?',
        },
      ],
    },

    /* ─── Job 34:16–30 — God&apos;s All-Seeing Justice ────────────────────── */
    {
      ref: 'Job 34:16–30',
      title: 'Nothing Hidden From God&apos;s Sight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(16, 'If now thou hast understanding, hear this: hearken to the voice of my words.'),
            plain(17, 'Shall even he that hateth right govern? and wilt thou condemn him that is most just?'),
            plain(18, 'Is it fit to say to a king, Thou art wicked? and to princes, Ye are ungodly?'),
            plain(19, 'How much less to him that accepteth not the persons of princes, nor regardeth the rich more than the poor? for they all are the work of his hands.'),
            plain(20, 'In a moment they shall die, and the people shall be troubled at midnight, and pass away: and the mighty shall be taken away without hand.'),
            plain(21, 'For his eyes are upon the ways of man, and he seeth all his goings.'),
            plain(22, 'There is no darkness, nor shadow of death, where the workers of iniquity may hide themselves.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job34-mid1',
          html:
            'Nothing escapes God&apos;s sight. Darkness offers no refuge. This is meant as comfort—God sees the oppressed and the righteous. But for the wicked, it is terror. Elihu transitions now from what God sees to what God does about it: God will not exceed what is just.',
        },
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(23, 'For he will not lay upon man more than right; that he should enter into judgment with God.'),
            plain(24, 'He shall break in pieces mighty men without number, and set others in their stead.'),
            plain(25, 'Therefore he knoweth their works, and he overturneth them in the night, so that they are destroyed.'),
            plain(26, 'He striketh them as wicked men in the sight of others;'),
            plain(27, 'Because they turned back from him, and would not consider any of his ways:'),
            plain(28, 'So that they caused the cry of the poor to come unto him, and he heard the cry of the afflicted.'),
            plain(29, 'When he giveth quietness, who then can make trouble? and when he hideth his face, who then can behold him? whether it be done against a nation, or against a man only:'),
            plain(30, 'That the hypocrite reign not, lest the people be ensnared.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job34-eyes-see-all',
          html:
            'Elihu emphasizes God&apos;s omniscience: "His eyes are upon the ways of man, and he seeth all his goings." Nothing is hidden from God. No darkness can conceal the wicked. The implication is clear: God sees Job&apos;s ways as well. If Job is suffering, it is not because God is blind or indifferent. God knows.',
        },
        {
          kind: 'commentary',
          id: 'job34-no-favorites',
          html:
            '"He that accepteth not the persons of princes, nor regardeth the rich more than the poor." God shows no favoritism. Kings and paupers are equal before God. All are God&apos;s work. All will face judgment. This is meant as comfort—that God is not swayed by human power or status. But it also means no one can claim special treatment.',
        },
        {
          kind: 'hebrew',
          id: 'job34-dabar',
          title: 'Dabar — Word or Thing',
          script: 'דָּבָר',
          translit: '<strong>Dabar</strong> · word; thing; matter; what is said or done',
          description:
            'Elihu speaks of God&apos;s dabar—not merely His words, but His acts, His deeds, His judgments. God&apos;s words and works are inseparable from God&apos;s justice. To question one is to question the other.',
        },
        {
          kind: 'carry',
          html:
            'Elihu&apos;s vision is of a God who misses nothing, whose justice is absolute and impartial. This should be comforting—that nothing is hidden from God, that God sides with the poor and afflicted. Yet it also leaves no room for the mystery of innocent suffering. If God sees all and judges justly, how can the innocent suffer?',
        },
        {
          kind: 'reflection',
          id: 'job34-hidden',
          prompt:
            'Does the idea that nothing is hidden from God comfort you or trouble you? What do you hide from God, and why?',
        },
      ],
    },

    /* ─── Job 34:31–37 — The Test of Faith ───────────────────────────── */
    {
      ref: 'Job 34:31–37',
      title: 'Will You Accept This?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(31, 'Surely it is meet to be said unto God, I have borne chastisement, I will not offend any more:'),
            plain(32, 'That which I see not, teach thou me: if I have done iniquity, I will do no more.'),
            plain(33, 'Should it be according to thy mind? he will recompense it, whether thou refuse, or whether thou choose: but speak.'),
            plain(34, 'Therefore speak men of understanding unto me, and let a wise man hearken unto me.'),
            plain(35, 'Job hath spoken without knowledge, and his words were without wisdom.'),
            plain(36, 'My desire is that Job may be tried unto the end because of his answers for wicked men.'),
            plain(37, 'For he addeth rebellion unto his sin: he clappeth his hands among us, and multiplieth his words against God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job34-accept-chastisement',
          html:
            'Elihu offers what he sees as the proper response to suffering: "I have borne chastisement, I will not offend any more. That which I see not, teach thou me." The sufferer should acknowledge God&apos;s wisdom, commit to obedience, and ask to learn from the pain. This is the response Elihu believes Job should give.',
        },
        {
          kind: 'commentary',
          id: 'job34-rebellion',
          html:
            'But Job has not given this response. Instead, he has "added rebellion unto his sin." He has questioned God. He has asserted his own innocence rather than acknowledging God&apos;s right to test him. To Elihu, Job&apos;s defiance is itself a kind of sin—the sin of presumption, of not bowing before God&apos;s wisdom.',
        },
        {
          kind: 'carry',
          html:
            'Elihu&apos;s position is logically sound but personally harsh. He insists that Job&apos;s proper response to suffering is submission and obedience, not questioning and argument. Yet the very structure of the book suggests that Job&apos;s questions are not sinful. God will eventually say that Job has spoken rightly, while the friends have not.',
        },
        {
          kind: 'christ',
          id: 'job34-christ-justice',
          title: 'Christ Connection — Justice Vindicated at the Cross',
          html:
            'Paul writes that "God...set forth [Christ] to be a propitiation through faith in his blood, to declare his righteousness...that he might be just, and the justifier of him which believeth in Jesus" (Romans 3:25–26). Christ is the place where God&apos;s justice is both revealed and fulfilled. God&apos;s justice is not only absolute and impartial—it is also self-giving, merciful, redemptive. God&apos;s righteousness is vindicated not through the condemnation of the innocent, but through the death of the innocent for the guilty.',
        },
        {
          kind: 'carry',
          html:
            'Elihu affirms God&apos;s justice—and rightly. But he does not see that justice and mercy are not opposites. God&apos;s justice is expressed through grace. This is what becomes clear only when we reach the cross.',
        },
        {
          kind: 'reflection',
          id: 'job34-submission',
          prompt:
            'Is there a difference between accepting God&apos;s wisdom and submitting to injustice? How do you know which is which?',
        },
      ],
    },
  ],
};
