import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const BARUCH_2: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 2,
  intros: [
    'The people&apos;s confession deepens in Baruch 2. They do not simply say "we have sinned." They recall what God has done—liberation from Egypt, covenant at Sinai, land given. In light of all this grace, their rebellion stands sharp. They had everything. They chose to turn away.',
    'Confession without memory is hollow. The exiles remember the wilderness, manna, commandments on stone. They remember Jeremiah&apos;s warnings. And they remember God promised that even if scattered, if they returned, He would return to them. That promise is not yet broken.',
  ],
  sections: [
    {
      ref: 'Baruch 2:1–12',
      title: 'The Judgment Accepted',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(1, 'O Lord Almighty, God of Israel, the soul in anguish and the wearied spirit cry unto thee.'),
          plain(11, 'Hear, O Lord, and have mercy; for thou art merciful: and have pity upon us, because we have sinned before thee.'),
          plain(12, 'For thou endurest for ever, and we perish utterly.'),
        ] },
        { kind: 'commentary', id: 'bar2-wearied', html: 'The people do not come before God with strength. They come as the "wearied spirit"—exhausted by exile, depleted by judgment. Yet in their weakness lies their argument: "Thou endurest for ever, and we perish utterly." God is eternal; their punishment is temporary. Their mortality becomes a plea for mercy.' },
        { kind: 'hebrew', id: 'bar2-rachamim', title: 'Rachamim — Compassion', script: 'רַחֲמִים', translit: '<strong>Rachamim</strong> · compassion; mercy; from "womb"', description: 'In Hebrew, compassion comes from the womb—from the deepest protective instinct. God&apos;s compassion is not an afterthought. It is His nature, the way He is constituted. The people appeal to this nature.' },
        { kind: 'christ', id: 'bar2-christ-eternal', title: 'Christ Connection — The Eternal One Who Suffers', html: 'The people say: "Thou endurest for ever, and we perish utterly." In Christ, the Eternal One enters our mortality. He comes into time, into death, into weariness. His compassion is not spoken from afar but lived in flesh.' },
        { kind: 'carry', html: 'When you feel exhausted, when the weight of consequences feels unbearable, where is your strength? The exiles learned that weakness became their argument for mercy. They could only present their anguish to God and ask Him to remember His compassion.' },
        { kind: 'reflection', id: 'bar2-mercy', prompt: 'Have you ever come before God in your weariness, asking not for your strength but for His mercy? What made that possible or difficult?' },
      ],
    },
    {
      ref: 'Baruch 2:19–33',
      title: 'The Covenant Upheld',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(19, 'Thou didst say unto us when we were yet in the land of our fathers, If ye will not hear the voice of the Lord your God, surely this great and terrible wilderness will wax worse.'),
          plain(27, 'Make thy way plain before me: take pity upon me for ever.'),
          plain(33, 'Yet thou didst not take utterly away the sceptre of Judah from the seed of Abraham: for thou rememberedst thy covenant.'),
        ] },
        { kind: 'commentary', id: 'bar2-warnings', html: 'The people recall warnings given through Moses and the prophets. They were told: if you abandon God, exile will follow. The exiles are not surprised by their fate. They knew it was coming. Yet knowledge without obedience brings only regret.' },
        { kind: 'greek', id: 'bar2-diatheke', title: 'Diatheke — Covenant', script: 'διαθήκη', translit: '<strong>Diatheke</strong> · covenant; will; testament', description: 'A diatheke is not a negotiation between equals. It is a binding arrangement. God&apos;s covenant is not contingent on the people&apos;s performance. It is His binding commitment, regardless of their wandering.' },
        { kind: 'christ', id: 'bar2-christ-covenant', title: 'Christ Connection — The Covenant Made Flesh', html: 'God tells Baruch: "I remembered my covenant." In the gospel, Jesus does not simply remember the covenant. He embodies it. In His death and resurrection, the old covenant is completed.' },
        { kind: 'carry', html: 'Even when you have wandered, even when you ignored the warnings, God remembers His covenant. Your failure does not erase His promise. Your exile is temporary. God&apos;s faithfulness endures. This is the ground on which the exiles dare to hope.' },
        { kind: 'reflection', id: 'bar2-remembrance', prompt: 'What covenant or promise from God are you tempted to doubt? How does God&apos;s faithfulness in the past speak to your faith now?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Yet thou didst not take utterly away the sceptre of Judah from the seed of Abraham: for thou rememberedst thy covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 2 · Study Guide',
  },
  hasHebrew: true,
};
