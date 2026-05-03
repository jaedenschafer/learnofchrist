import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 24 — The King of Glory
 *
 * "The earth is the Lord's, and the fulness thereof; the world, and they that
 * dwell therein." With these opening words, the psalmist establishes that all
 * creation belongs to God. But ownership is not the psalm's final word. It
 * moves toward ascent—"Who shall ascend into the hill of the Lord?"—and closes
 * with a vision of the King of Glory entering in triumph: "Lift up your heads,
 * O ye gates; and the King of glory shall come in." Christ the King claims His
 * rightful throne.
 */
export const PSALMS_24: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 24,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 24 moves in three distinct movements: first, the affirmation of God&apos;s ownership of all creation; second, the question of who may approach Him; and third, the triumphal entrance of the King of Glory. The psalm teaches both the complete sovereignty of God and the exacting holiness required to dwell in His presence. Yet it ends not in exclusion but in triumph—the gates themselves are commanded to lift up their heads and make way.',
  ],

  sections: [
    {
      ref: 'Psalm 24:1–6',
      title: 'Ownership and Qualification',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(1, 'The earth is the Lord&apos;s, and the fulness thereof; the world, and they that dwell therein.'),
            plain(2, 'For he hath founded it upon the seas, and established it upon the floods.'),
            plain(3, 'Who shall ascend into the hill of the Lord? or who shall stand in his holy place?'),
            plain(4, 'He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully.'),
            plain(5, 'He shall receive the blessing of the Lord, and righteousness from the God of his salvation.'),
            plain(6, 'This is the generation of them that seek him, that seek thy face, O Jacob. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms24-owns-all',
          html: 'The psalm begins with absolute assertion: God owns everything. Not just the holy places. Not just the righteous people. The earth and all its fullness. The world and those who dwell in it. Even those who do not acknowledge Him, even those who rebel against Him—all belong to Him. He founded the earth. He established it. Creation itself is His signature and His possession.',
        },
        {
          kind: 'commentary',
          id: 'psalms24-ascend-question',
          html: 'Yet the next question is searching: "Who shall ascend into the hill of the Lord?" To ascend suggests struggle, effort, a climb. To stand in His holy place suggests the ability to endure His presence. The question implies that not everyone can. There are conditions. There are qualifications. The psalmist is about to name them.',
        },
        {
          kind: 'hebrew',
          id: 'psalms24-clean-hands',
          title: 'Yad tahoroh — "Clean Hands" (Innocent Hands)',
          script: 'יַד טְהוֹרָה',
          translit: '<strong>Yad tahoroh</strong> · clean hands; innocent hands; hands free from wickedness',
          description: 'In Hebrew thought, the hands represent action and deed. Clean hands mean innocent conduct, actions free from deceit and injustice. The psalmist is not speaking of ceremonial cleanliness alone, but of moral purity—hands that have not struck unjustly, that have not taken what is not theirs, that have not reached out in corruption.',
        },
        {
          kind: 'commentary',
          id: 'psalms24-pure-heart',
          html: 'But clean hands alone are not enough. "A pure heart"—the heart is the seat of intention, desire, will. One may refrain from outward wickedness while harboring inward rebellion. The psalmist requires both the outward integrity of clean hands and the inward integrity of a pure heart. Wholeness. Consistency between what is done and what is desired.',
        },
        {
          kind: 'christ',
          id: 'psalms24-christ-king-glory',
          title: 'Christ Connection — The King of Glory',
          html: 'Only One possesses both clean hands and a pure heart in absolute fullness: Jesus Christ. His hands were clean, never striking unjustly, never reaching for corruption. His heart was pure, always aligned with His Father&apos;s will. Yet more—in Him, we are made clean. In Christ, our hands and hearts are washed in His blood, sanctified by His sacrifice. We ascend to the hill of the Lord not through our own righteousness, but through His.',
        },
        {
          kind: 'carry',
          html: 'The psalm raises a question that cuts to the heart: Can you stand in God&apos;s presence? Are your hands clean? Is your heart pure? These are not idle questions. They summon us to self-examination. Yet the answer is not despair. The psalmist proclaims that those who seek the Lord, those who seek His face, shall receive blessing and righteousness from the God of their salvation.',
        },
        {
          kind: 'reflection',
          id: 'psalms24-clean-heart',
          prompt: 'Where do you lack clean hands or a pure heart? What would it take for you to stand before God without shame? How does the Cross enable that standing?',
        },
      ],
    },

    {
      ref: 'Psalm 24:7–10',
      title: 'The King of Glory Enters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(7, 'Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in.'),
            plain(8, 'Who is this King of glory? The Lord strong and mighty, the Lord mighty in battle.'),
            plain(9, 'Lift up your heads, O ye gates; even lift them up, ye everlasting doors; and the King of glory shall come in.'),
            plain(10, 'Who is this King of glory? The Lord of hosts, he is the King of glory. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms24-lift-gates',
          html: 'The final movement shifts dramatically. No longer the psalmist speaking to the worshipper, but the people calling out to the gates themselves. "Lift up your heads, O ye gates." The gates are personified, commanded to rise, to make way. This is not a quiet entrance. This is a triumphal procession. The very landscape must acknowledge the King who comes.',
        },
        {
          kind: 'commentary',
          id: 'psalms24-mighty-battle',
          html: 'And who is this King? "The Lord strong and mighty, the Lord mighty in battle." His strength is not gentleness, though He is also gentle. His power is not mere authority, though He is sovereign. He is mighty in battle. He defeats His enemies. He conquers the forces arrayed against Him. And yet He enters not through violence, but through gates that are commanded to open before Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms24-lord-hosts',
          html: 'The psalm repeats its question and its answer, emphasizing both the question and the identity of the King. "The Lord of hosts"—the God of all the heavenly army, the Commander of multitudes, the One before whom all creation bows. He is the King of Glory. All other kings are shadows. All other authority is delegated. This King alone possesses glory intrinsic, eternal, undeniable.',
        },
        {
          kind: 'carry',
          html: 'Psalm 24 teaches that to stand in God&apos;s presence requires both clean hands and a pure heart, yet it also proclaims that the King of Glory comes. He comes not primarily to exclude us, but to enter. To claim His throne. To establish His kingdom. And through His coming, we are made able to stand. His entrance is our redemption.',
        },
        {
          kind: 'reflection',
          id: 'psalms24-king-glory',
          prompt: 'The King of Glory enters in triumph. How do you respond to that entrance? Does it fill you with fear, with hope, with both? What would it mean for Him to rule your life with the same authority He exercises over all creation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The earth is the Lord&apos;s, and the fulness thereof. ...Lift up your heads, O ye gates; and the King of glory shall come in.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 24 · Study Guide',
  },

  hasHebrew: true,
};
