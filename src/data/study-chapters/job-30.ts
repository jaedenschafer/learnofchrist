import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 30 — The Inversion of All Things
 *
 * A stark reversal. Those younger than Job, those he would have scorned, now mock him.
 * "But now they that are younger than I have me in derision." He cries to God and receives
 * no answer: "I cry unto thee, and thou dost not hear me." This chapter captures the silence
 * of God in the face of suffering. It is perhaps the deepest expression of abandonment in Scripture.
 */
export const JOB_30: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 30,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 7 },
  intros: [
    'The contrast between chapters 29 and 30 is devastating. Where Job was once honored, he is now despised. Those beneath him in station now mock him. Where he once served others, he himself is now broken and alone. This chapter is not a philosophical meditation—it is a raw cry of abandonment. Job addresses God directly, asking why He has turned away.',
  ],

  bottomShare: {
    quote:
      '"I cry unto thee, and thou dost not hear me: I stand up, and thou regardest me not." In this moment, Job faces not the loss of everything, but the apparent loss of God Himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 30 · Study Guide',
  },

  sections: [
    /* ─── Job 30:1–8 — Mocked by the Contemptible ─────────────────────── */
    {
      ref: 'Job 30:1–8',
      title: 'The Young Now Mock Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(1, 'But now they that are younger than I have me in derision, whose fathers I would have disdained to set with the dogs of my flock.'),
            plain(2, 'Yea, whereto might the strength of their hands profit me, in whom old age was perished?'),
            plain(3, 'For want and famine they were solitary; fleeing into the wilderness in former time desolate and waste.'),
            plain(4, 'Who cut up mallows by the bushes, and juniper roots for their meat.'),
            plain(5, 'They were driven forth from among men, (they cried after them as after a thief;)'),
            plain(6, 'To dwell in the cliffs of the valleys, in caves of the earth, and in the rocks.'),
            plain(7, 'Among the bushes they brayed; under the nettles they were gathered together.'),
            plain(8, 'They were children of fools, yea, children of base men: they were viler than the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job30-younger-mock',
          html:
            'Job is mocked by the very people he once would have considered beneath notice. These are men whose fathers he would not have hired as shepherds. They are starving outcasts, driven from society, dwelling in caves and hollows, gathering roots to eat. And yet now they jeer at him. The inversion is complete: he who was honored is now derided; those who were nothing now have the power to wound him with their contempt.',
        },
        {
          kind: 'commentary',
          id: 'job30-famine-desert',
          html:
            'The picture of these mockers is of men who have been stripped of everything—security, dignity, community. They are hollow with hunger, living like animals. Job describes them with a mixture of pity and revulsion. They are less than human, "viler than the earth." And yet these vile men have become the instruments of Job&apos;s humiliation.',
        },
        {
          kind: 'hebrew',
          id: 'job30-lichlachim',
          title: 'Lichlachim — to Lick',
          script: 'לִחְלַחִים',
          translit: '<strong>Lichlachim</strong> · to lick; to despise; to mock (from the root meaning to disdain)',
          description:
            'The verb carries the sense of being licked—spat upon, treated with contempt. It is the most degrading form of mockery. Job is not merely criticized or debated. He is treated as something beneath humanity, something to be spat upon.',
        },
        {
          kind: 'carry',
          html:
            'There is a certain kind of suffering that comes not from loss of wealth or health, but from loss of dignity. To be mocked, especially by those you once despised, is to lose the sense that you are a person of worth. Job experiences this mortification. He is alive, but he is no longer living as a human being. He is treated as an object of contempt.',
        },
        {
          kind: 'reflection',
          id: 'job30-contempt',
          prompt:
            'What is the difference between sorrow for loss and shame at contempt? Can you survive material loss and maintain your dignity? What happens when dignity itself is taken?',
        },
      ],
    },

    /* ─── Job 30:9–19 — Plague, Darkness, Dissolution ────────────────── */
    {
      ref: 'Job 30:9–19',
      title: 'Body and Spirit Failing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(9, 'And now I am their song, yea, I am their byword.'),
            plain(10, 'They abhor me, they flee far from me, and spare not to spit in my face.'),
            plain(11, 'Because he hath loosed my cord, and afflicted me, therefore they have also let loose the bridle before me.'),
            plain(12, 'Upon my right hand rise the youth; they push away my feet, and they raise up against me the ways of their destruction.'),
            plain(13, 'They mar my path, they set forward my calamity, they have no helper.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job30-mid1',
          html:
            'The mockers have become persecutors. They push him, they block his way, they intentionally bring calamity upon him. And he is utterly alone—"they have no helper," Job notes. No one steps in. No one defends him. The human world has abandoned him.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(14, 'They came upon me as a wide breaking in of waters: in the desolation they rolled themselves upon me.'),
            plain(15, 'Terrors are turned upon me: they pursue my soul as the wind: and my welfare passeth away as a cloud.'),
            plain(16, 'And now my soul is poured out upon me; the days of affliction have taken hold upon me.'),
            plain(17, 'My bones are pierced in me in the night season: and my sinews take no rest.'),
            plain(18, 'By the great force of my disease is my garment changed: it bindeth me about as the collar of my coat.'),
            plain(19, 'He hath cast me into the mire, and I am become like dust and ashes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job30-mockery-turned-violence',
          html:
            'From mockery, the violence escalates. Now they spit in his face. They push him down. They come at him like a flood, overwhelming him. The image shifts from mockery to active persecution. Job is hunted, pursued, overwhelmed. And the most terrible part: "they have no helper"—no one stands with him, no one intervenes on his behalf.',
        },
        {
          kind: 'commentary',
          id: 'job30-disease-decay',
          html:
            'Job&apos;s body is failing. His bones ache. His sinews burn. His disease has become his clothing—it wraps him, binds him, defines him. He is becoming indistinguishable from the earth itself: "like dust and ashes." The degradation is total—external mockery and internal dissolution are happening simultaneously.',
        },
        {
          kind: 'hebrew',
          id: 'job30-shem',
          title: 'Shem — Name',
          script: 'שֵׁם',
          translit: '<strong>Shem</strong> · name; reputation; identity',
          description:
            'Job&apos;s shem—his name, his reputation, his very identity—has become a byword. This is not mere loss of honor. It is the erasure of personhood. You exist, but you exist as a curse word, a punchline. This is perhaps the deepest humiliation—not merely to be forgotten, but to be remembered as a symbol of disgrace.',
        },
        {
          kind: 'carry',
          html:
            'Job experiences what we might call existential humiliation. He is not just sick or sad. He is becoming un-human in the eyes of others. And his body is failing in ways that make him physically repulsive. This is suffering that touches not just the body or the circumstances, but the very sense of self.',
        },
        {
          kind: 'reflection',
          id: 'job30-becoming-dust',
          prompt:
            'What happens to your sense of self when your body fails or when others treat you as contemptible? In what ways do we fear becoming "dust and ashes"?',
        },
      ],
    },

    /* ─── Job 30:20–31 — The Silence of God ───────────────────────────── */
    {
      ref: 'Job 30:20–31',
      title: 'Crying Out, Hearing Nothing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(20, 'I cry unto thee, and thou dost not hear me: I stand up, and thou regardest me not.'),
            plain(21, 'Thou art become cruel to me: with thy strong hand thou opposest thyself against me.'),
            plain(22, 'Thou liftest me up to the wind; thou causest me to ride upon it, and dissolvest my substance.'),
            plain(23, 'For I know that thou wilt bring me to death, and to the house appointed for all living.'),
            plain(24, 'Howbeit he will not stretch out his hand to the grave, though they cry in their destruction.'),
            plain(25, 'Did not I weep for him that was in trouble? was not my soul grieved for the poor?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job30-mid2',
          html:
            'Job reminds himself—and God—of his compassion. He wept for those in trouble. He grieved for the poor. He extended mercy. This is not mere boasting. It is a question put to God: If I was merciful to others, why is there no mercy shown to me?',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(26, 'When I looked for good, then evil came unto me: and when I waited for light, there came darkness.'),
            plain(27, 'My bowels boiled, and rested not: the days of affliction prevented me.'),
            plain(28, 'I went mourning without the sun: I stood up, and I cried in the congregation.'),
            plain(29, 'I am a brother to jackals, and a companion to owls.'),
            plain(30, 'My skin is black upon me, and my bones are burned with heat.'),
            plain(31, 'Therefore is my harp turned to mourning, and my organ into the voice of them that weep.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job30-god-deaf',
          html:
            '"I cry unto thee, and thou dost not hear me." This is the deepest cry of the book. Job addresses God directly, and God does not answer. This is not the silence of indifference—it is the silence of opposition. Job feels that God has become his enemy, that God is using His strength against Job rather than for him. God "opposest thyself against me." God is not distant; He is actively hostile.',
        },
        {
          kind: 'commentary',
          id: 'job30-became-cruel',
          html:
            '"Thou art become cruel to me." Notice the word "become"—as if God was not always this way, but has changed. This expresses the theological scandal that haunts the book: Why would God, who was once gracious, now act with cruelty? It is not that Job doubts God exists. It is that he cannot understand why God acts as He does.',
        },
        {
          kind: 'commentary',
          id: 'job30-weeping-darkness',
          html:
            'Job reminds God of his own compassion: "Did not I weep for him that was in trouble? was not my soul grieved for the poor?" He had extended mercy to others. He had comforted mourners. And yet when he cries out, God does not hear. Instead, darkness comes when he waits for light. Evil comes when he expects good. The inversion is complete and total.',
        },
        {
          kind: 'christ',
          id: 'job30-christ-silence',
          title: 'Christ Connection — In the Silence',
          html:
            'Job cries, "My God, my God, why hast thou forsaken me?" (though those words belong to the psalmist). Yet Jesus speaks those exact words from the cross. Christ too experiences the silence of God—not because God has abandoned Him, but because He bears the full weight of human sin and separation. Christ enters into the deepest experience of suffering: not merely physical pain, but the terror of seeming to be abandoned by God. In this, Christ does not answer Job&apos;s question philosophically. He answers it by standing in the silence with him. By experiencing it. By surviving it and being raised from it.',
        },
        {
          kind: 'carry',
          html:
            'The hardest faith is the faith that continues to address God even when God does not answer. Job does not curse God and die. He cries out. He brings his accusation to God. He demands to be heard. This is not a faith of submission to silence; it is a faith that will not let God go even when God seems to have let him go.',
        },
        {
          kind: 'reflection',
          id: 'job30-crying-silence',
          prompt:
            'Have you ever felt that God was not listening? What did you do with that feeling? Did you stop crying out, or did you cry louder?',
        },
      ],
    },
  ],
};
