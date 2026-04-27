import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 42 — From Hearing to Seeing
 *
 * Job&apos;s final transformation. "I have heard of thee by the hearing of the ear: but now
 * mine eye seeth thee. Wherefore I abhor myself, and repent in dust and ashes." Job moves
 * from intellectual knowledge to direct encounter. The book concludes with restoration—
 * God rebukes the friends, heals Job, doubles his former wealth, gives him new children.
 * Not as payment for righteousness, but as grace. The true Mediator is affirmed.
 */
export const JOB_42: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 42,

  intros: [
    'After all of Job&apos;s struggle, after the speeches of his friends, after Elihu&apos;s counsel, after God&apos;s revelation, Job at last understands. He has moved from hearing about God to seeing God. He repents—not of specific sins, but of his fundamental stance toward God. And in that repentance, everything is restored. The book ends not with explanation but with restoration, with grace, with the reversal that only God can accomplish.',
  ],

  bottomShare: {
    quote:
      '"I have heard of thee by the hearing of the ear: but now mine eye seeth thee." Job&apos;s journey ends not in understanding, but in encounter.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 42 · Study Guide',
  },

  sections: [
    /* ─── Job 42:1–6 — From Hearing to Seeing ────────────────────────── */
    {
      ref: 'Job 42:1–6',
      title: 'I Know That Thou Canst Do All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(1, 'Then Job answered the Lord, and said,'),
            plain(2, 'I know that thou canst do all things, and that no thought can be withholden from thee.'),
            plain(3, 'Who is he that hideth counsel without knowledge? therefore have I uttered that I understood not; things too wonderful for me, which I knew not.'),
            plain(4, 'Hear, I beseech thee, and I will speak: I will demand of thee, and declare thou unto me.'),
            plain(5, 'I have heard of thee by the hearing of the ear: but now mine eye seeth thee.'),
            plain(6, 'Wherefore I abhor myself, and repent in dust and ashes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job42-all-things',
          html:
            'Job&apos;s opening affirmation: "I know that thou canst do all things." This is not mere intellectual assent. This is the statement of one who has been confronted by the actual power of God. Job is not saying he understands how God does all things, or why. He is simply acknowledging the fact: God can. And no thought is hidden from God. God knows all. Job knows he knows less.',
        },
        {
          kind: 'commentary',
          id: 'job42-uttered-unknowing',
          html:
            '"Therefore have I uttered that I understood not; things too wonderful for me, which I knew not." Job&apos;s confession is precise: he has spoken about things beyond his comprehension. He has uttered what he did not understand. He has tried to judge matters that were too wonderful for him. This is not mere apology. It is a complete reversal of stance.',
        },
        {
          kind: 'commentary',
          id: 'job42-eye-sees',
          html:
            '"I have heard of thee by the hearing of the ear: but now mine eye seeth thee." This is the turning point. Before, Job knew about God through tradition, through teaching, through what he had been told. Now, he sees. Direct encounter has replaced indirect knowledge. And this encounter transforms everything.',
        },
        {
          kind: 'hebrew',
          id: 'job42-yada',
          title: 'Yada — Know',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · know; experience intimately; be acquainted with',
          description:
            'Job moves from yada about God (knowing about) to yada God directly (knowing through encounter). The Hebrew does not distinguish between these the way English does, but the context makes clear that this is a movement from intellectual knowledge to relational knowledge. Job has moved from understanding concepts to meeting the Person.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s repentance is not primarily about sin, though it includes a recognition that he has not stood rightly before God. His repentance is about transformation—moving from a position of judging God to a position of beholding God. In that beholding, judgment becomes impossible. Accusation becomes impossible. Only awe remains.',
        },
        {
          kind: 'reflection',
          id: 'job42-encounter',
          prompt:
            'Have you experienced the difference between knowing about God and knowing God? How did that encounter change you?',
        },
      ],
    },

    /* ─── Job 42:7–11 — God Rebukes the Friends ───────────────────────── */
    {
      ref: 'Job 42:7–11',
      title: 'My Servant Job Has Spoken Rightly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(7, 'And it was so, that after the Lord had spoken these words unto Job, the Lord said to Eliphaz the Temanite, My wrath is kindled against thee, and against thy two friends: for ye have not spoken of me the thing that is right, as my servant Job hath.'),
            plain(8, 'Therefore take unto you now seven bullocks and seven rams, and go to my servant Job, and offer up for yourselves a burnt offering; and my servant Job shall pray for you: for him will I accept: lest I deal with you after your folly, in that ye have not spoken of me the thing which is right, like my servant Job.'),
            plain(9, 'So Eliphaz the Temanite and Bildad the Shuhite and Zophar the Naamathite went, and did according as the Lord commanded them: the Lord also accepted Job&apos;s prayer.'),
            plain(10, 'And the Lord turned the captivity of Job, when he prayed for his friends: and the Lord gave Job twice as much as he had before.'),
            plain(11, 'Then came there unto him all his brethren, and all his sisters, and all they that had known him before, and did eat bread with him in his house: and they bemoaned him, and comforted him over all the evil that the Lord had brought upon him: every man also gave him a piece of money, and every one an earring of gold.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job42-god-rebukes-friends',
          html:
            'In a stunning reversal, God rebukes the three friends. "Ye have not spoken of me the thing that is right, as my servant Job hath." This is the most surprising statement in the entire book. The friends, who seemed so confident in their theology, who preached the conventional wisdom, who asserted the connection between sin and suffering—they have gotten it wrong. And Job, who questioned and accused and demanded—he has spoken rightly.',
        },
        {
          kind: 'commentary',
          id: 'job42-job-prays-friends',
          html:
            'The restitution is also surprising. Job must pray for his friends. They must come to him asking forgiveness. And only when Job prays for them does the Lord restore Job&apos;s fortune. This suggests that true righteousness includes intercession for those who have wronged you, that the path to restoration passes through forgiveness, through stepping into the role of mediator.',
        },
        {
          kind: 'hebrew',
          id: 'job42-nepech',
          title: 'Nepech — Captivity or Soul-Turning',
          script: 'שְׁבוּת',
          translit: '<strong>Shebut</strong> · captivity; the turning around of one&apos;s fortunes',
          description:
            'The word for "captivity" here (shebut) can also mean the turning around of fate, a reversal of fortune. When Job "turned the captivity" (prayed for his friends), God turned his captivity—restored his fortunes. The movement toward forgiveness and intercession opens the way for restoration.',
        },
        {
          kind: 'carry',
          html:
            'What the three friends represented was the attempt to explain suffering, to make it make sense, to fit it into a clear moral framework. Job&apos;s resistance to this false comfort is ultimately validated. Better to cry out in confusion than to accept explanations that deny the reality of suffering. Better to question than to accept false certainty.',
        },
        {
          kind: 'reflection',
          id: 'job42-rightness',
          prompt:
            'What did Job speak rightly that the friends did not? How is it sometimes more truthful to question than to explain?',
        },
      ],
    },

    /* ─── Job 42:12–17 — Restoration and Blessing ────────────────────── */
    {
      ref: 'Job 42:12–17',
      title: 'A New Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 42,
          lines: [
            plain(12, 'So the Lord blessed the latter end of Job more than his beginning: for he had fourteen thousand sheep, and six thousand camels, and a thousand yoke of oxen, and a thousand she asses.'),
            plain(13, 'He had also seven sons and three daughters.'),
            plain(14, 'And he called the name of the first, Jemima; and the name of the second, Kezia; and the name of the third, Keren-happuch.'),
            plain(15, 'And in all the land were no women found so fair as the daughters of Job: and their father gave them inheritance among their brethren.'),
            plain(16, 'After this lived Job an hundred and forty years, and saw his sons, and his sons&apos; sons, even four generations.'),
            plain(17, 'So the Lord blessed the latter end of Job more than his beginning.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job42-restoration-doubled',
          html:
            'Job&apos;s fortunes are restored—and doubled. He receives twice as much as he had before. He has new children to replace those who were lost. His life is extended. His family is expanded. Yet notice: the restoration does not erase the loss. Job cannot get back his original ten children. They are gone forever. But new life springs forth. This is not recompense—you cannot pay for a child&apos;s life with money or animals. Rather, it is grace—the pure gift of God, pouring life into a man who has been broken.',
        },
        {
          kind: 'commentary',
          id: 'job42-daughters-named',
          html:
            'The daughters are given names: Jemima (dove), Kezia (cinnamon), Keren-happuch (horn of cosmetics). These names speak of beauty, of peace, of healing. And the text notes that Job gave his daughters inheritance—unusual for the time. Job, having been broken, having lost everything, emerges as a man of unusual compassion and justice. Suffering has transformed him.',
        },
        {
          kind: 'hebrew',
          id: 'job42-achrit',
          title: 'Achrit — Latter End',
          script: 'אַחֲרִית',
          translit: '<strong>Achrit</strong> · latter end; what comes after; the future after suffering',
          description:
            'The text emphasizes the achrit—the latter end—of Job&apos;s life. His later years are blessed more than his earlier years. This suggests that suffering was not the end of his story. It was a chapter in a longer narrative. And the chapter after suffering was richer, deeper, more blessed than what came before.',
        },
        {
          kind: 'christ',
          id: 'job42-christ-resurrection',
          title: 'Christ Connection — The Resurrection of All Things',
          html:
            'Job&apos;s restoration points to the hope of resurrection and restoration that Christ brings. Christ is "the firstfruits of them that slept" (1 Corinthians 15:20). His resurrection is the guarantee that death will not be the final word. Job&apos;s life is not made whole—the ten children remain dead. But new life comes. New children. A longer span of years. A deepened character. In Christ, we too are promised not that our losses will be erased, but that we will be raised. That new life will come. That the latter end will be blessed beyond the beginning. Revelation 21:5 speaks of God saying: "Behold, I make all things new."',
        },
        {
          kind: 'carry',
          html:
            'The book of Job ends not with explanation, not with Job understanding why he suffered, but with restoration. Job accepts the mystery. He bows before God&apos;s greatness. And in that acceptance, blessing flows. Not as payment for righteousness, not as logical consequence of anything Job did, but as pure grace. As the free gift of a God who cares for those who trust Him in the dark.',
        },
        {
          kind: 'reflection',
          id: 'job42-latter-end',
          prompt:
            'What new life might God bring to your suffering if you stopped demanding answers and started trusting the One who asks the questions? How might your "latter end" be blessed?',
        },
      ],
    },
  ],
};
