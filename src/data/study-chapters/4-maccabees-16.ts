import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FOURTH_MACCABEES_16: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 16,
  intros: [
    'All seven sons are now dead. The mother stands among the corpses. Antiochus expects her to break, to curse God. Instead, she becomes a monument to faith.',
    'In 4 Maccabees 16, the mother is revealed as more than a woman—she is a soldier of God, a testimony that devotion runs deeper than the maternal bond itself.',
  ],
  sections: [
    {
      ref: '4 Maccabees 16:1–12',
      title: 'The Mother, More Than a Woman',
      blocks: [
        { kind: 'scripture', chapter: 16, lines: [
          plain(1, 'The mother stood and gazed upon her seven sons dead, torn by torment. Yet her countenance did not change, nor her resolve waver.'),
          plain(5, 'She had been made more than a woman through the law. Her love for the law exceeded her love for her flesh.'),
          plain(9, 'The tyrant said: Woman, you have lost everything. Curse your God and I will grant you honor. Yet she would not speak the words of betrayal.'),
        ] },
        { kind: 'commentary', id: '4m16-woman', html: 'The text makes a radical claim: the law has transformed the mother. It has not diminished her maternal love but transcended it. She loves her children, but she loves God&apos;s covenant more. She is a soldier of God, wearing the armor of faith.' },
        { kind: 'greek', id: '4m16-strategos', title: 'Strategos — Soldier; Commander; General', script: 'στρατηγός', translit: '<strong>Strategos</strong> · soldier; commander; one who leads in battle', description: 'The mother is called a soldier—not in jest, but as the highest honor. She wages war against the tyrant not with arms but with faith.' },
        { kind: 'christ', id: '4m16-christ', title: 'Christ Connection — Greater Love Than Family', html: 'Jesus said: "If you love your mother or father more than me, you are not worthy of me." The mother exemplifies this radical reordering—God first, even when it costs her everything dear.' },
        { kind: 'carry', html: 'The mother becomes a sign to all believers that faithfulness may demand a love that surpasses even the deepest human bonds. She remains unbroken because she is anchored in something unbreakable.' },
        { kind: 'reflection', id: '4m16-anchor', prompt: 'What anchors you when everything else is torn away? What would it look like to be truly unshakeable?' },
      ],
    },
    {
      ref: '4 Maccabees 16:13–25',
      title: 'Witness to the Nations',
      blocks: [
        { kind: 'scripture', chapter: 16, lines: [
          plain(13, 'And the mother, in her great anguish, became a sign and wonder. All who saw her—even the tyrant himself—recognized something greater than human endurance.'),
          plain(17, 'She said: I do not mourn. Why should I mourn when my sons are safe in God&apos;s keeping? You may kill the body, but you cannot kill the covenant.'),
          plain(22, 'The mother then passed from life, and all knew that she had conquered death itself. She had become a living law, a walking testimony to the God of Israel.'),
        ] },
        { kind: 'commentary', id: '4m16-witness', html: 'The mother becomes what she has always been—a witness. Her refusal to break is not private stoicism but a public testimony. Even Antiochus sees something in her that transcends mere human will. She has become a law incarnate.' },
        { kind: 'hebrew', id: '4m16-ot', title: 'Ot — Sign; Wonder; Covenant Mark', script: 'אוֹת', translit: '<strong>Ot</strong> · sign; wonder; covenant mark', description: 'A sign is not merely something remarkable but something that points beyond itself to God&apos;s presence. The mother is a sign written by God&apos;s own hand.' },
        { kind: 'christ', id: '4m16-christ2', title: 'Christ Connection — The Witness Cloud Grows', html: 'The mother joins the great cloud of witnesses (Hebrews 12). Her faithfulness is added to the witness of the prophets, the martyrs, and ultimately Christ Himself.' },
        { kind: 'carry', html: 'The mother teaches us that our witness does not end with our suffering. We become signs—visible reminders that God&apos;s covenant endures, that faith conquers all, that love is deeper than death.' },
        { kind: 'reflection', id: '4m16-testament', prompt: 'What testimony do you leave behind? What sign of God&apos;s faithfulness does your life point to?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'My love for the law exceeds my love for my flesh. I have become a soldier of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 16 · Study Guide',
  },
};
