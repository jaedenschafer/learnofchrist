import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_7: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 7,
  intros: [
    'After the torture, the guards carry Eleazar away. They marvel at what they have witnessed. The old man\'s faith has not broken.',
    'As he departs, those who watch understand: they have seen something greater than strength. They have seen the victory of the spirit.',
  ],
  sections: [
    {
      ref: '4 Maccabees 7:1–14',
      title: 'Eleazar Departs',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [
          plain(1, 'And when Eleazar was taken from the instruments, he was near unto death, yet his face shone with the light of his faith.'),
          plain(7, 'And the guards, who had tortured him, were amazed at his constancy.'),
          plain(12, 'For they beheld a man who had been conquered by fire, yet his spirit was unconquered.'),
        ] },
        { kind: 'commentary', id: 'mac4-7-depart', html: 'The guards expected to see a broken old man. Instead, they see a transfigured one. His faith has not been extinguished but refined. His departure is a testimony.' },
        { kind: 'hebrew', id: 'mac4-7-zohar', title: 'Zohar — Radiance; Shining Light', script: 'זֹהַר', translit: '<strong>Zohar</strong> · radiance; splendor; the light of God', description: 'When one stands close to God, the zohar—the divine radiance—becomes visible. Eleazar\'s face glows.' },
        { kind: 'christ', id: 'mac4-7-christ', title: 'Christ Connection — The Face of God', html: 'Moses came down from Sinai with his face shining. The disciples on the mount of transfiguration saw Jesus\' face like the sun. The godly reflect divine light.' },
        { kind: 'carry', html: 'After suffering, do you shine? Does your face reflect what you have endured, or the light of Him you serve?' },
        { kind: 'reflection', id: 'mac4-7-unconquered', prompt: 'The guards saw: body conquered, spirit unconquered. Is this the ultimate victory? What matters more—what happens to the body or what happens to the spirit?' },
      ],
    },
    {
      ref: '4 Maccabees 7:15–21',
      title: 'The Wise Pilot',
      blocks: [
        { kind: 'scripture', chapter: 7, lines: [
          plain(15, 'And those who stood by said one to another, Surely he was a man of wisdom, like a pilot that steers a ship through storms.'),
          plain(18, 'He did not cry out, as lesser men do. He guided himself unto God, even through the tempest of suffering.'),
          plain(21, 'Such wisdom is rare, and such courage yet more rare.'),
        ] },
        { kind: 'commentary', id: 'mac4-7-pilot', html: 'Eleazar is compared to a pilot navigating storms. His reason is the helm. His faith is the compass. Even in the violence of suffering, he guides himself toward God.' },
        { kind: 'greek', id: 'mac4-7-kubernetes', title: 'Kubernetes — Steering; Guidance', script: 'κυβερνήτης', translit: '<strong>Kubernetes</strong> · helmsman; one who guides through storms', description: 'A kubernetes is not passive but active—always adjusting, always moving toward home. The wise pilot steers by fixed stars.' },
        { kind: 'christ', id: 'mac4-7-christ2', title: 'Christ Connection — The Pilot of Souls', html: 'Jesus is the guide through life\'s storms. "Why are ye fearful?" He asks. "I am with you." The pilot does not abandon the ship in peril.' },
        { kind: 'carry', html: 'In your storms, who is steering? Are you guided by fear, or by stars fixed in God\'s sky?' },
        { kind: 'reflection', id: 'mac4-7-storms', prompt: 'What storms are you navigating? Who or what is your compass? How do you stay true to your course?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'When Eleazar was taken from the instruments near unto death, his face shone with the light of his faith. The guards said: "He is like a pilot who steers a ship through storms."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 7 · Study Guide',
  },
};
