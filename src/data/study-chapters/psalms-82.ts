import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 82 — The Divine Son
 *
 * "God standeth in the congregation of the mighty; he judgeth among the gods.
 * How long will ye judge unjustly, and accept the persons of the wicked?"
 * This enigmatic psalm speaks of God judging other judges, other "gods"—earthly
 * rulers who have failed in their duty to defend the weak. Jesus quotes this
 * psalm in John 10, applying it to His own divine sonship.
 */
export const PSALMS_82: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 82,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 82 is one of the most mysterious and debated psalms in Scripture. It opens with God standing in the congregation of "the mighty" and judging among "the gods." For centuries, interpreters have asked: Who are these gods? Are they heavenly beings? Earthly rulers? The most coherent reading is that the "gods" are earthly judges and rulers—those given authority to govern and to defend justice. And God is coming to judge them, to hold them accountable for their failure to defend the weak and the fatherless.',
    'What makes this psalm extraordinary is its New Testament interpretation. Jesus quotes from Psalm 82:6—"I have said, Ye are gods"—in John 10:34, applying it to His disciples. And the Church recognizes in this psalm a foreshadowing of Christ, the True Judge, the one divine Son who comes to judge the unjust judges and to establish justice that no earthly power could accomplish.',
  ],

  sections: [
    {
      ref: 'Psalm 82:1–4',
      title: 'The Judgment of Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 82,
          lines: [
            plain(1, 'God standeth in the congregation of the mighty; he judgeth among the gods.'),
            plain(2, 'How long will ye judge unjustly, and accept the persons of the wicked?'),
            plain(3, 'Defend the poor and fatherless: do justice to the afflicted and needy.'),
            plain(4, 'Deliver the poor and needy: rid them out of the hand of the wicked.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms82-standeth',
          html:
            'The psalm opens with God standing in the congregation of the mighty. This is not a distant God. This is God present, in the midst of earthly authority, taking His stand. He judges among the "gods"—the judges and rulers of the earth. The implication is that these judges are being called to account.',
        },
        {
          kind: 'hebrew',
          id: 'psalms82-elohim',
          title: 'Elohim — "Gods" (Mighty Ones)',
          script: 'אֱלֹהִים',
          translit: '<strong>Elohim</strong> · gods, mighty ones, judges, authorities',
          description:
            'The Hebrew word elohim can mean gods, but in the context of earthly rulers, it refers to judges and authorities—those with power to govern. They bear a quasi-divine authority to dispense justice. And they will be judged by the True God.',
        },
        {
          kind: 'commentary',
          id: 'psalms82-injustice',
          html:
            '"How long will ye judge unjustly, and accept the persons of the wicked?" God is asking: How long will these judges continue to render unjust verdicts? How long will they favor the wicked because of bribes or relationships? The question is addressed to the judges directly. Their time of reckoning is at hand.',
        },
        {
          kind: 'commentary',
          id: 'psalms82-defend',
          html:
            'And then comes the charge: "Defend the poor and fatherless." This is the fundamental duty of the judge. Justice is not about the powerful furthering their interests. It is about the defenseless receiving protection. The judges have failed this duty. And for that failure, they will answer to God.',
        },
        {
          kind: 'christ',
          id: 'psalms82-christ-judge',
          title: 'Christ Connection — The True Judge',
          html:
            'Jesus is the Judge who cannot be bribed, who does not accept the persons of the wicked, who defends the poor and the fatherless. In Matthew 25, He says to the righteous: "Come, ye blessed of my Father...I was hungry, and ye gave me meat...I was a stranger, and ye took me in." True justice is defined by the defense of the defenseless. Christ is the only judge who executes true justice.',
        },
        {
          kind: 'carry',
          html:
            'If you hold any authority—over others, over resources, over decisions—remember that your authority is not yours alone. It is given to you to defend the vulnerable. You will answer to God for how you have used that authority. Are you judging justly? Are you defending those who cannot defend themselves?',
        },
        {
          kind: 'reflection',
          id: 'psalms82-authority',
          prompt: 'What authority do you hold over others or over resources? How are you using that authority to defend the weak?',
        },
      ],
    },

    {
      ref: 'Psalm 82:5–8',
      title: 'The Divine Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 82,
          lines: [
            plain(5, 'They know not, neither will they understand; they walk on in darkness: all the foundations of the earth are out of course.'),
            plain(6, 'I have said, Ye are gods; and all of you are children of the most High.'),
            plain(7, 'But ye shall die like men, and fall like one of the princes.'),
            plain(8, 'Arise, O God, judge the earth: for thou shalt inherit all nations.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms82-darkness',
          html:
            '"They know not, neither will they understand; they walk on in darkness." The unjust judges have lost the ability to judge wisely. They are blind to justice. And when the judges are unjust, the whole social order is shaken. "All the foundations of the earth are out of course." Injustice at the top reverberates throughout the entire society.',
        },
        {
          kind: 'commentary',
          id: 'psalms82-you-are',
          html:
            'Then comes a remarkable statement: "I have said, Ye are gods; and all of you are children of the most High." This is the verse that Jesus quotes in John 10:34. The judges have been given a quasi-divine status—they are called to reflect God&apos;s justice in their rulings. But they have failed. They are gods, but only in name. In truth, they are men.',
        },
        {
          kind: 'commentary',
          id: 'psalms82-die',
          html:
            '"But ye shall die like men, and fall like one of the princes." The judges will fall. Their authority, which seemed so permanent, will crumble. They will die as men die. Their power will pass away. This is a rebuke to all earthly authority that forgets it is temporary and accountable to God.',
        },
        {
          kind: 'christ',
          id: 'psalms82-christ-inherit',
          title: 'Christ Connection — John 10:34–35',
          html:
            'In John 10, Jesus quotes Psalm 82:6 to argue for His own divinity. If the law called those given God&apos;s word "gods," how much more is He—the Son of God—worthy of that title? The psalm&apos;s language about "gods" and judges becomes in Christ&apos;s mouth an argument about His own divine sonship. He is not merely called God. He is God.',
        },
        {
          kind: 'carry',
          html:
            'All earthly authority will pass away. All earthly judges will die. Only God&apos;s judgment endures. Only Christ&apos;s kingdom is eternal. Whatever injustice you see in the world, whatever abuse of power grieves you, know that God has seen it. God will judge it. And in the end, all nations will inherit to Christ, the True Judge, the True King.',
        },
        {
          kind: 'reflection',
          id: 'psalms82-god-judges',
          prompt: 'How does it comfort you to know that God judges the unjust judges? What injustice have you witnessed that you can entrust to God&apos;s judgment?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God standeth in the congregation of the mighty...Defend the poor and fatherless: do justice to the afflicted and needy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 82 · Study Guide',
  },

  hasHebrew: true,
};
