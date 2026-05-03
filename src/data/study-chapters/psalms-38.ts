import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 38 — The Penitent Cry
 *
 * A psalm of confession. David is sore vexed, his loins filled with a
 * burning, his flesh having no soundness, his bones roaring. "I am brought
 * into desolation." But the cause is not external only—it is his own
 * iniquity. "I will declare mine iniquity." The path from confession to
 * mercy is opened. Christ teaches that confession, true sorrow, leads to
 * restoration.
 */
export const PSALMS_38: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 38,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 38 is a psalm of raw distress, spoken by a man whose body and soul are in agony. David is sore troubled, his loins are filled with a burning sensation, his flesh has no soundness in it. The suffering is both physical and spiritual. Yet unlike Psalm 36, where the cause lies in the transgression of the wicked, David here points his finger at himself. "For I will declare mine iniquity; I am sorry for my sin." This is not the cry of an innocent victim. This is the cry of a penitent.',
    'And in this confession lies the beginning of healing. David does not deny his guilt or shift blame. He does not explain his way out of accountability. Instead, he names it, mourns it, and calls upon God for mercy. The path from sin to restoration passes through the narrow gate of true acknowledgment. Without it, no restoration is possible. With it, even profound suffering can become the occasion of drawing near to God.',
  ],

  sections: [
    {
      ref: 'Psalm 38:1–11',
      title: 'The Agony of Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(1, 'O Lord, rebuke me not in thy wrath: neither chasten me in thy hot displeasure.'),
            plain(2, 'For thine arrows stick fast in me, and thy hand presseth me sore.'),
            plain(3, 'There is no soundness in my flesh because of thine anger; neither is there any rest in my bones because of my sin.'),
            plain(4, 'For mine iniquities are gone over mine head: as a heavy burden they are too heavy for me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-38-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(5, 'My wounds stink and are corrupt because of my foolishness.'),
            plain(6, 'I am troubled; I am bowed down greatly; I go mourning all the day long.'),
            plain(7, 'For my loins are filled with a loathsome disease: and there is no soundness in my flesh.'),
            plain(8, 'I am feeble and sore broken: I have roared by reason of the disquietness of my heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms38-rebuke',
          html:
            'David begins not with rage at God but with a prayer not to be rebuked in God&apos;s wrath. There is a difference between the chastening of a father who loves and the punishment of a judge who condemns. David is asking for chastening—correction that heals—rather than wrath that destroys. He knows the difference. He is asking for mercy even as he names his own culpability.',
        },
        {
          kind: 'hebrew',
          id: 'psalms38-avon',
          title: 'Avon — "Iniquity"',
          script: 'עָוֹן',
          translit: '<strong>Avon</strong> · iniquity; guilt; the twisted consequence of sin',
          description:
            'Avon is not mere wrongdoing. It carries the sense of the twisted, warped result that flows from sin. It is the weight of iniquity—not just the act, but the moral weight and consequence that follows. When David says his iniquities have "gone over his head," he means they have become too much to bear. They have become a burden that breaks him.',
        },
        {
          kind: 'commentary',
          id: 'psalms38-arrows',
          html:
            'The image of arrows is striking: "Thine arrows stick fast in me." These are not casual wounds. They are fixed, embedded, painful. They do not come and go. They remain. The hand of God presses upon him. This is the experience of someone who has genuinely felt the weight of his own wrong, who understands that his sin is not a small thing to be rationalized away, but a wound that requires healing.',
        },
        {
          kind: 'commentary',
          id: 'psalms38-soundness',
          html:
            'Again and again David returns to this phrase: "There is no soundness in my flesh." His body itself bears witness to the reality of his guilt. Whether this is literal sickness or metaphorical, the point is clear: sin has consequences in the whole person. It is not only a matter of external behavior. It affects his body, his bones, his very constitution.',
        },
        {
          kind: 'reflection',
          id: 'psalms38-soundness-truth',
          prompt: 'When you have genuinely done wrong, what is the difference between mere guilt and true repentance? Can you identify a time when acknowledging your iniquity actually began to heal something in you?',
        },
      ],
    },

    {
      ref: 'Psalm 38:17–22',
      title: 'Declaration and Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(17, 'For I am ready to halt, and my sorrow is continually before me.'),
            plain(18, 'For I will declare mine iniquity; I am sorry for my sin.'),
            plain(19, 'But mine enemies are lively, and they are strong: and they that hate me wrongfully are multiplied.'),
            plain(20, 'They also that render evil for good are my adversaries; because I follow the thing that is good.'),
            plain(21, 'Forsake me not, O Lord: O my God, be not far from me.'),
            plain(22, 'Make haste to help me, O Lord my salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms38-declare',
          html:
            'The turning point comes in verse 18: "For I will declare mine iniquity; I am sorry for my sin." This is not forced confessional. This is a man saying, "I am ready. I am broken enough, humbled enough, emptied enough to name what I have done." Declaration—speaking it aloud, not hiding it—is the first step toward restoration. As long as David hides his sin, it festers. As soon as he declares it, the possibility of healing opens.',
        },
        {
          kind: 'hebrew',
          id: 'psalms38-vidui',
          title: 'Vidui — "Declaration" (Declare)',
          script: 'וִדוּי',
          translit: '<strong>Vidui</strong> · confession; declaration; acknowledgment',
          description:
            'The root word is akin to "yahadim"—one gives. In declaring one&apos;s iniquity, one gives it voice, admits it, hands it over. It is not a private sorrow. It is a public and internal acknowledgment. And in Jewish tradition, vidui—the confession—is the essential precondition of forgiveness. One cannot be forgiven for what one will not admit.',
        },
        {
          kind: 'commentary',
          id: 'psalms38-enemies',
          html:
            'Yet David does not imagine that his enemies will disappear once he confesses. They are still strong. They still render evil for good. But notice: David is no longer preoccupied with defending himself against them. His entire focus is on his relationship with God. "Forsake me not, O Lord." This is the posture of someone who knows that his only real enemy is not external—it is his own unconfessed guilt, his separation from God. Once that is addressed, the external enemies lose their power to truly harm.',
        },
        {
          kind: 'commentary',
          id: 'psalms38-haste',
          html:
            'The psalm ends with urgency: "Make haste to help me, O Lord my salvation." Not "punish me swiftly," but "help me swiftly." David is asking God to move quickly toward his restoration, his healing, his return to wholeness. And in the grammar of mercy, God moves swiftly toward those who truly confess. The confession opens the door. God rushes through it.',
        },
        {
          kind: 'christ',
          id: 'psalms38-christ-confession',
          title: 'Christ Connection — Confession and Forgiveness',
          html:
            'In John 10:25–26, Jesus tells a Samaritan woman at the well: "The true worshippers shall worship the Father in spirit and in truth." Confession is the path to truth-telling worship. And in 1 John 1:9, the apostle writes: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness." Christ&apos;s whole teaching is built on the conviction that confession, true sorrow, and openness to forgiveness lead to restoration. The man in Psalm 38 is modeling what Christ teaches: the way from brokenness to wholeness passes through honest declaration.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 38 speaks to anyone who has felt the weight of unconfessed guilt, the way sin festers when it is hidden and begins to poison every part of life. It teaches that confession is not weakness or shame to be avoided. It is the door through which healing enters. The God David calls upon is not waiting to condemn the penitent. He is waiting for the moment we declare our iniquity, so that He can respond with the swift help of mercy.',
        },
        {
          kind: 'reflection',
          id: 'psalms38-declare-way',
          prompt: 'Is there something you have carried, hidden, unable to declare? What would change if you brought it into the light—not to shame yourself, but to invite God&apos;s healing into that wound?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I will declare mine iniquity; I am sorry for my sin...Make haste to help me, O Lord my salvation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 38 · Study Guide',
  },

  hasHebrew: true,
};
