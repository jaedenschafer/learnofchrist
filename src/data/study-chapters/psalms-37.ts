import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 37 — Fret Not
 *
 * "Fret not thyself because of evildoers." This refrain echoes through the
 * psalm, a gentle insistence that the righteous not be consumed with anxiety
 * over the success of the wicked. Instead: "Delight thyself also in the
 * Lord; and he shall give thee the desires of thine heart." "The meek shall
 * inherit the earth" (echoed in Matt 5:5). A psalm of promised reversal,
 * written for those who are weary of wondering why evil prospers.
 */
export const PSALMS_37: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 37,

  estimatedMinutes: { 5: 2, 10: 5, 15: 7 },
  intros: [
    'Psalm 37 is written for the troubled heart. The psalmist sees the wicked flourishing, their schemes succeeding, their names spoken with respect. The righteous, meanwhile, suffer. They obey and receive no reward. They trust and see no vindication. The natural response is anxiety—fret, worry, the nagging question: "Why am I doing the right thing when evil prospers?" To this weary soul, David speaks with the authority of long experience: "Fret not thyself."',
    'Yet he does not speak empty comfort. Instead, he points to a hidden transaction. The wicked are being cut off, their prosperity emptied of substance. The meek—the gentle, the humble, the small—are being promised something the whole world cannot see: they shall inherit the earth. This is not the voice of a dreamer. This is the testimony of a man who has learned, over years of watching, that the prosperity of evil is like grass that withers, while the righteousness of the humble is rooted in eternal soil.',
  ],

  sections: [
    {
      ref: 'Psalm 37:1–11',
      title: 'Fret Not Thyself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(1, 'Fret not thyself because of evildoers, neither be thou envious against the workers of iniquity.'),
            plain(2, 'For they shall soon be cut down like the grass, and wither as the green herb.'),
            plain(3, 'Trust in the Lord, and do good; so shalt thou dwell in the land, and verily thou shalt be fed.'),
            plain(4, 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart.'),
            plain(5, 'Commit thy way unto the Lord; trust also in him; and he shall bring it to pass.'),
            plain(10, 'For yet a little while, and the wicked shall not be: yea, thou shalt diligently consider his place, and it shall not be.'),
            plain(11, 'But the meek shall inherit the earth; and shall delight themselves in the abundance of peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms37-fret-not',
          html:
            'The command is immediate and direct: "Fret not thyself." This is not "do not worry" but something stronger—do not chafe, do not wear yourself out, do not let anxiety consume your energy. Why? Because you are looking at a situation you do not understand. You see the wicked prospering today, and you measure them against the righteous who suffer today. But you are measuring a single day against what will prove to be the entirety of time. The psalmist is asking you to see further than your eyes naturally reach.',
        },
        {
          kind: 'hebrew',
          id: 'psalms37-ra',
          title: 'Ra — "Evildoers"',
          script: 'רָע',
          translit: '<strong>Ra</strong> · evil; evildoing; causing harm',
          description:
            'The root ra carries the sense of breaking, harm, wickedness. But the point is not that the evildoer is wicked in some internal way known only to God. It is that he actively causes harm. The Hebrew allows no ambiguity about this: the evildoer is defined by what he does, the harm he causes. And he will be cut down.',
        },
        {
          kind: 'commentary',
          id: 'psalms37-grass',
          html:
            'The image of grass is used twice in Scripture to describe the wicked: here in Psalm 37, and in 1 Peter 1:24, where Peter cites Isaiah 40:6–8. "All flesh is as grass, and all the glory of man as the flower of grass. The grass withereth, and the flower thereof falleth away: but the word of the Lord endureth for ever." The wicked have form, briefly. They seem to flourish. But they have no root. They have no future. They cannot endure the wind.',
        },
        {
          kind: 'commentary',
          id: 'psalms37-delight',
          html:
            'But the righteous are given a different path: "Delight thyself also in the Lord; and he shall give thee the desires of thine heart." This is not a transaction—if I delight, then I receive. It is a promise rooted in transformation. When you delight in the Lord, your desires align with His. Your wants become wants that He is already answering. You find yourself wanting what you are already receiving.',
        },
        {
          kind: 'christ',
          id: 'psalms37-christ-beatitudes',
          title: 'Christ Connection — The Beatitudes',
          html:
            'In Matthew 5:5, Jesus says directly: "Blessed are the meek: for they shall inherit the earth." This is Psalm 37:11 spoken by the One who embodied that meekness. Christ Himself, in His gentleness and refusal to use His power to defend Himself, was the ultimate meek one. And His meekness did not result in obscurity or defeat. It resulted in the redemption of the world. The meek do inherit the earth—not through force, but through the grace that flows from yielding everything to God.',
        },
        {
          kind: 'reflection',
          id: 'psalms37-what-delights',
          prompt: 'What would it mean for you to delight in the Lord above all else? What desires would change if your deepest joy came from God rather than from the outcomes you fear you cannot control?',
        },
      ],
    },

    {
      ref: 'Psalm 37:23–26, 37–40',
      title: 'The Righteous Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            plain(23, 'The steps of a good man are ordered by the Lord: and he delighteth in his way.'),
            plain(24, 'Though he fall, he shall not be utterly cast down: for the Lord upholdeth him with his hand.'),
            plain(25, 'I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread.'),
            plain(26, 'He is ever merciful, and lendeth; and his seed is blessed.'),
            plain(37, 'Mark the perfect man, and behold the upright: for the end of that man is peace.'),
            plain(39, 'But the salvation of the righteous is of the Lord: he is their strength in the time of trouble.'),
            plain(40, 'And the Lord shall help them, and deliver them: he shall deliver them from the wicked, and save them, because they trust in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms37-ordered',
          html:
            'The righteous do not drift. Their steps are ordered by the Lord. This does not mean they never stumble. The psalm itself acknowledges: "Though he fall." But the righteous man who falls is caught. He is not abandoned. The Lord upholdeth him with his hand. This is not a promise that the righteous will avoid all suffering. It is a promise that in suffering, they will not be utterly cast down. There is always a hand beneath, a support, a restoration.',
        },
        {
          kind: 'commentary',
          id: 'psalms37-old',
          html:
            'David speaks from the vantage point of old age: "I have been young, and now am old; yet have I not seen the righteous forsaken." This is not proof-text. This is testimony. He has watched a lifetime. He has seen righteous people in poverty, in illness, in hardship. But he has not seen them utterly abandoned. He has not seen them begging bread. He has seen God sustain them. Their seed is blessed. The inheritance does not run out.',
        },
        {
          kind: 'hebrew',
          id: 'psalms37-tamim',
          title: 'Tamim — "Perfect" / "Upright"',
          script: 'תָּמִים',
          translit: '<strong>Tamim</strong> · whole; complete; blameless; perfect in the sense of integrity',
          description:
            'Tamim does not mean flawless in the sense of never erring. It means whole, integrated, undivided. A tamim person is someone whose exterior life matches their interior covenant with God. They are not divided. They are not playing two games. This wholeness is what leads to peace—the end of that man is peace (Psalm 37:37).',
        },
        {
          kind: 'commentary',
          id: 'psalms37-mark-upright',
          html:
            'The psalm invites the reader to look: "Mark the perfect man, and behold the upright." Look at him. Study him. See where he ends up. His end is peace. Not victory in the sense of conquest. Not success in the sense of accumulation. Peace. The righteous man is the one who has nothing to defend because he has given everything to God. And in that surrender, he finds peace that the wicked can never know, because they are always defending, always grasping, always anxious about their schemes unraveling.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 37 is written for the moment when you are tired of watching evil prosper and tired of the internal anxiety that comes from comparison. It calls you to lift your eyes beyond today. To trust that your steps are ordered. To delight in the Lord rather than to fret about those who do not. To remember that the meek—the small, the gentle, the humble—are being promised the earth. Not by force. By grace. By the patient faithfulness of a God who remembers what the wicked forget: that all things end, but His word endures forever.',
        },
        {
          kind: 'reflection',
          id: 'psalms37-mark-end',
          prompt: 'If you could mark one person you know who embodies the peace of Psalm 37—who is whole, undivided, and at peace despite circumstances—what do you notice about how they live? What could you learn from them about the end of such a life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Fret not thyself because of evildoers...Delight thyself also in the Lord; and he shall give thee the desires of thine heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 37 · Study Guide',
  },

  hasHebrew: true,
};
