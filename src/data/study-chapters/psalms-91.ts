import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 91 — God&apos;s Protection
 *
 * "He that dwelleth in the secret place of the most High shall abide under
 * the shadow of the Almighty." This is a psalm of confidence and protection.
 * God will shield the psalmist from the terrors that come by night, from the
 * arrows that fly by day. He will give His angels charge over you. Yet this
 * psalm carries an irony: in Matthew 4:6, Satan quotes verses 11-12 to Christ,
 * saying "He shall give his angels charge over thee," and urges Jesus to throw
 * Himself off the temple. Christ refuses. Protection is not an escape from
 * suffering, but a sustenance through it.
 */
export const PSALMS_91: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 91,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  intros: [
    'Psalm 91 is a song of confidence and trust. It speaks of dwelling in the secret place, abiding under the shadow of the Almighty. The psalmist names specific fears: terror by night, the arrow that flies by day, the pestilence that walks in darkness. And to each fear, the psalm responds: not with dismissal, but with protection. God will cover the psalmist with His feathers. His truth will be a shield and buckler. But this protection is not isolation. It is presence in the midst of danger.',
  ],

  sections: [
    {
      ref: 'Psalm 91:1–8',
      title: 'Dwelling in the Secret Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 91,
          lines: [
            plain(1, 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.'),
            plain(2, 'I will say of the Lord, He is my refuge and my fortress: my God; in him will I trust.'),
            plain(3, 'Surely he shall deliver thee from the snare of the fowler, and from the noisome pestilence.'),
            plain(4, 'He shall cover thee with his feathers, and under his wings shalt thou trust: his truth shall be thy shield and buckler.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-91-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 91,
          lines: [
            plain(5, 'Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day;'),
            plain(6, 'Nor for the pestilence that walketh in darkness; nor for the destruction that wasteth at noonday.'),
            plain(7, 'A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee.'),
            plain(8, 'Only with thine eyes shalt thou behold and see the reward of the wicked.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps91-dwell',
          html:
            'The condition for protection is dwelling in the secret place. This is not geographical. It is a state of being—a life lived in conscious connection to God, a mind that keeps returning to Him, a heart fixed on His presence. To dwell in the secret place is to make God your home.',
        },
        {
          kind: 'commentary',
          id: 'ps91-fears',
          html:
            'The psalm names specific fears with precision. Terror by night. The arrow that flies by day. Pestilence. Destruction. These are not abstract. These are the fears that wake us from sleep, the dangers we see and the ones we cannot see. And the psalmist does not deny these dangers. Instead, he declares that God will cover the one who dwells with Him.',
        },
        {
          kind: 'hebrew',
          id: 'ps91-chesed',
          title: 'Emet — "Truth" (Faithfulness)',
          script: 'אֱמֶת',
          translit: '<strong>Emet</strong> · truth; faithfulness; reliability',
          description:
            'God&apos;s truth is a shield and buckler. This is not information but reliability. God&apos;s word is trustworthy. God&apos;s character is solid. In a world of deception and betrayal, God is faithful.',
        },
        {
          kind: 'reflection',
          id: 'ps91-fear',
          prompt: 'What specific fear do you face that this psalm addresses? How would it change things if you truly believed God was your refuge in that fear?',
        },
      ],
    },

    {
      ref: 'Psalm 91:9–16',
      title: 'The Promise to Those Who Know His Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 91,
          lines: [
            plain(9, 'Because thou hast made the Lord, which is my refuge, even the most High, thy habitation;'),
            plain(10, 'There shall no evil befall thee, neither shall any plague come nigh thy dwelling.'),
            plain(11, 'For he shall give his angels charge over thee, to keep thee in all thy ways.'),
            plain(12, 'They shall bear thee up in their hands, lest thou dash thy foot against a stone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-91-78mid-2',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 91,
          lines: [
            plain(13, 'Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.'),
            plain(14, 'Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name.'),
            plain(15, 'He shall call upon me, and I will answer him: I will be with him in trouble; I will deliver him, and honour him.'),
            plain(16, 'With long life will I satisfy him, and shew him my salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps91-angels',
          html:
            'The promise of angelic protection is specific: "He shall give his angels charge over thee, to keep thee in all thy ways." This does not mean angels prevent all suffering. Rather, they keep us from falling, they sustain us, they maintain us in all our ways. They are present in the midst of danger, not to shield us from every consequence, but to hold us up.',
        },
        {
          kind: 'commentary',
          id: 'ps91-tread',
          html:
            '"Thou shalt tread upon the lion and adder." This is victory language. The psalmist will overcome the enemies that seek to harm him. But this is not earthly military victory. This is spiritual triumph, the power to stand firm in the face of what would ordinarily overwhelm.',
        },
        {
          kind: 'christ',
          id: 'ps91-christ-temptation',
          title: 'Christ Connection — Temptation in the Wilderness',
          html:
            'In Matthew 4:5-7, Satan quotes Psalm 91:11-12 to Jesus, saying "He shall give his angels charge over thee," and tempts Jesus to jump from the temple, claiming angels will catch Him. Jesus refuses, saying "It is written again, Thou shalt not tempt the Lord thy God." Jesus knows that God&apos;s protection is not a guarantee against suffering, but a presence within it. True trust does not test God&apos;s promises by deliberately seeking danger.',
        },
        {
          kind: 'carry',
          html:
            'This psalm offers a comfort: you are not alone. Even in trouble, God is with you. Even in danger, He sustains you. The promise is not that evil will never come near, but that you will not be abandoned. And God will honor you—not with worldly power, but with His presence and His salvation.',
        },
        {
          kind: 'reflection',
          id: 'ps91-deliver',
          prompt: 'What would it mean for God to &quot;deliver&quot; you not from a circumstance, but within it? How is that different from what you might expect?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 91 · Study Guide',
  },

  hasHebrew: true,
};
