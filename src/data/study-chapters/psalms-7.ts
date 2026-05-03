import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 7 — Vindication by the Righteous Judge
 *
 * David pleads his case before the ultimate judge. "If I have done this iniquity,
 * let the enemy persecute my soul." He calls for God to examine the depths of his
 * heart—not to find him guilty, but to find him innocent. The psalm builds to a
 * great affirmation: God is the righteous judge who will vindicate the innocent and
 * bring down the wicked. "God judgeth the righteous, and God is angry with the
 * wicked every day."
 */
export const PSALMS_7: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 7,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'Psalm 7 is a psalm of vindication. David faces accusation—someone has slandered him, brought charges against him that threaten his name and his life. Rather than defend himself before men, David takes his case to God. He does not merely assert his innocence. He invites the Almighty to examine him. "Judge me, O Lord, according to my righteousness, and according to mine integrity that is in me." This is the confidence of a man who has nothing to hide before God.',
    'The psalm moves from personal vindication to cosmic truth. The God who judges David is the God who judges all things. He upholds the righteous. He brings down the wicked. He is not capricious. He is not swayed by eloquence or power. He judges with perfect justice. And the psalmist&apos;s faith is this: that truth will win. That righteousness will be vindicated. That God&apos;s judgment is sure.',
  ],

  sections: [
    {
      ref: 'Psalm 7:1–5',
      title: 'A Plea for Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'O Lord my God, in thee do I put my trust: save me from all them that persecute me, and deliver me:'),
            plain(
              2,
              'Lest he tear my soul like a lion, rending it in pieces, while there is none to deliver.',
            ),
            plain(3, 'O Lord my God, if I have done this; if there be iniquity in my hands;'),
            plain(4, 'If I have rewarded evil unto him that was at peace with me; (yea, I have delivered him that without cause is mine enemy:)'),
            plain(5, 'Let the enemy persecute my soul, and take it; yea, let him tread down my life upon the earth, and lay mine honour in the dust. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps7-trust',
          html:
            'David begins with trust: "In thee do I put my trust." Not in his own defense, not in allies or politics, but in God. He asks to be saved "from all them that persecute me." This is not asking for revenge. It is asking for deliverance—for God to intervene and bring him to safety. The image of the lion tearing at his soul shows the violence of the accusation, the ferocity of his enemy&apos;s attack.',
        },
        {
          kind: 'commentary',
          id: 'ps7-iniquity',
          html:
            'Then David takes a remarkable step. He invites examination. "If I have done this iniquity...if there be iniquity in my hands." He is not saying he is perfect. He is saying: Look at me. Search me. If I have betrayed someone, if I have rewarded evil for good, if I have harmed the innocent—then I deserve what is coming to me. But if I have not, then God must vindicate me.',
        },
        {
          kind: 'hebrew',
          id: 'ps7-shapat',
          title: 'Shapat — "Judge"',
          script: 'שָׁפַט',
          translit: '<strong>Shapat</strong> · to judge; to discern; to govern; to vindicate',
          description:
            'The Hebrew word for judge is not merely about pronouncing sentence. It means to discern, to understand, to govern. A judge must know hearts. God is described as the righteous judge because He does not judge by appearance or rhetoric. He penetrates to truth.',
        },
        {
          kind: 'carry',
          html:
            'When you are falsely accused, the temptation is to defend yourself with every tool at your disposal. But there is a deeper strength in being able to say, "I will place myself before God. Let Him examine me. If I have truly wronged, I will accept the consequence. If I have not, I trust Him to vindicate me." This kind of integrity—both toward God and in your own heart—is worth more than any human verdict.',
        },
      ],
    },

    {
      ref: 'Psalm 7:6–17',
      title: 'God the Judge Arises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(6, 'Arise, O Lord, in thine anger, lift up thyself because of the rage of mine enemies: and awake for me to the judgment that thou hast commanded.'),
            plain(7, 'So shall the congregation of the people compass thee about: for their sakes therefore return thou on high.'),
            plain(8, 'The Lord shall judge the people: judge me, O Lord, according to my righteousness, and according to mine integrity that is in me.'),
            plain(9, 'Oh let the wickedness of the wicked come to an end; but establish the just: for the righteous God trieth the hearts and reins.'),
            plain(10, 'My defence is of God, which saveth the upright in heart.'),
            plain(11, 'God judgeth the righteous, and God is angry with the wicked every day.'),
            plain(12, 'If he turn not, he will whet his sword; he hath bent his bow, and made it ready.'),
            plain(13, 'He hath also prepared for him the instruments of death; he ordaineth his arrows against the persecutors.'),
            plain(14, 'Behold, he travaileth with iniquity, and hath conceived mischief, and brought forth falsehood.'),
            plain(15, 'He made a pit, and digged it, and is fallen into the ditch which he made.'),
            plain(16, 'His mischief shall return upon his own head, and his violent dealing shall come down upon his own pate.'),
            plain(17, 'I will praise the Lord according to his righteousness: and will sing praise to the name of the Lord most high.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps7-arise',
          html:
            '"Arise, O Lord." David calls God to action—not in petty vengeance but in judgment. He asks God to lift Himself up, to make Himself visible, to execute the judgment that He has ordained. The word "awake" suggests that justice has been sleeping, that God&apos;s attention has turned elsewhere. David is calling it back.',
        },
        {
          kind: 'commentary',
          id: 'ps7-judge-me',
          html:
            'David then makes a stunning request: "Judge me, O Lord, according to my righteousness, and according to mine integrity that is in me." He is not asking for mercy. He is asking for justice. He is confident enough in his own heart before God that he will accept judgment. This is not arrogance. It is the clarity that comes from knowing yourself before the all-knowing God.',
        },
        {
          kind: 'commentary',
          id: 'ps7-tries-hearts',
          html:
            'The psalm then moves outward. God will judge not just David but all peoples. And He does so with perfect knowledge: "the righteous God trieth the hearts and reins." The hearts—the center of emotion and will. The reins—the seat of thought and intention. Nothing is hidden. All is known. On this truth alone can justice rest.',
        },
        {
          kind: 'christ',
          id: 'ps7-christ-judge',
          title: 'Christ Connection — The Righteous Judge',
          html:
            'In 2 Timothy 4:8, Paul writes of "a crown of righteousness, which the Lord, the righteous judge, shall give me." Christ is that righteous judge—not because He condemns without mercy, but because He sees and knows all things perfectly. He judges with the knowledge of every heart, every intention, every deed. The good news is that those who are in Christ are justified—declared righteous—not because we are perfect, but because His righteousness covers us.',
        },
        {
          kind: 'commentary',
          id: 'ps7-pit',
          html:
            'The psalm describes poetic justice. The wicked man prepares a pit for others, and he falls into it himself. He sharpens his sword against the righteous, and it turns back on him. This is not merely the wish of an angry man. It is the proclamation of a cosmic truth: wickedness carries within it the seeds of its own destruction. Truth prevails.',
        },
        {
          kind: 'reflection',
          id: 'ps7-upright',
          prompt: 'What does it mean to be "upright in heart"? How is this different from being successful, rich, or admired?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God judgeth the righteous, and God is angry with the wicked every day.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 7 · Study Guide',
  },

  hasHebrew: true,
};
