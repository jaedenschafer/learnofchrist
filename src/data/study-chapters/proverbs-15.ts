import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 15 — A Soft Answer and the Eyes of the Lord
 *
 * "A soft answer turneth away wrath: but grievous words stir up anger." Here
 * is wisdom about the power of gentleness and how conflict is de-escalated not
 * through strength but through patience and kindness. The chapter also opens
 * with a beautiful image: "The eyes of the Lord are in every place, beholding
 * the evil and the good." Nothing escapes God&apos;s sight. And a final image:
 * "A merry heart maketh a cheerful countenance: but by sorrow of the heart the
 * spirit is broken."
 */
export const PROVERBS_15: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 15,

  intros: [
    'The fifteenth chapter of Proverbs is, in many ways, a summation of what has come before—a gathering place of wisdom about the power of words, the reach of God&apos;s knowledge, the transforming power of gentleness. It shows how the smallest choices—a soft word, a gentle answer, a joyful heart—ripple outward in ways we may not see. But God sees. God sees everything.',
    'The chapter also speaks to the deepest human needs: to be seen, to be understood, to be moved from sorrow to joy, to find our way out of confusion toward clarity. These are not luxuries. They are the basic sustenance of a human life lived well.',
  ],

  sections: [
    {
      ref: 'Proverbs 15:1–17',
      title: 'Words, Hearts, and God&apos;s Sight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'A soft answer turneth away wrath: but grievous words stir up anger.'),
            plain(2, 'The tongue of the wise useth knowledge aright: but the mouth of fools poureth out foolishness.'),
            plain(3, 'The eyes of the Lord are in every place, beholding the evil and the good.'),
            plain(4, 'A wholesome tongue is a tree of life: but frowardness therein is a breach in the spirit.'),
            plain(5, 'A fool despiseth his father&apos;s instruction: but he that regardeth reproof is prudent.'),
            plain(6, 'In the house of the righteous is much treasure: but in the revenues of the wicked is trouble.'),
            plain(7, 'The lips of the wise disperse knowledge: but the heart of the fools doeth not so.'),
            plain(8, 'The sacrifice of the wicked is an abomination to the Lord: but the prayer of the upright is his delight.'),
            plain(9, 'The way of the wicked is an abomination unto the Lord: but he loveth him that followeth after righteousness.'),
            plain(10, 'Correction is grievous unto him that forsaketh the way: and he that hateth reproof shall die.'),
            plain(11, 'Hell and destruction are before the Lord: how much more then the hearts of the children of men?'),
            plain(12, 'A scorner loveth not one that reproveth him: neither will he go unto the wise.'),
            plain(13, 'A merry heart maketh a cheerful countenance: but by sorrow of the heart the spirit is broken.'),
            plain(14, 'The heart of him that hath understanding seeketh knowledge: but the mouth of fools feedeth on foolishness.'),
            plain(15, 'All the days of the afflicted are evil: but he that is of a merry heart hath a continual feast.'),
            plain(16, 'Better is little with the fear of the Lord than great treasure and trouble therewith.'),
            plain(17, 'Better is a dinner of herbs where love is, than a stalled ox and hatred therewith.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov15-soft-answer',
          html: '"A soft answer turneth away wrath: but grievous words stir up anger." This is one of the most practical of all proverbs. We know it to be true from experience. When someone is angry with us, if we meet them with gentleness and humility, we can de-escalate. But if we respond with harshness, we ignite. The power of a soft answer lies not in its weakness but in its wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'prov15-onim',
          title: 'Ayin — "Eyes" (Sight, Awareness)',
          script: 'עַיִן',
          translit: '<strong>Ayin</strong> · eyes; sight; to see; to be aware',
          description: 'In verse 3, God&apos;s eyes are in every place. God sees everything—not in judgment alone, but in care and knowledge. Nothing escapes His attention.',
        },
        {
          kind: 'commentary',
          id: 'prov15-eyes-lord',
          html: '"The eyes of the Lord are in every place, beholding the evil and the good." This is a profound claim about God&apos;s omniscience—His knowledge of all things. But it is not presented as a threat. It is presented as a comfort. God sees. God knows. He is aware not only of evil but of good. You are not unseen. Your goodness is not unnoticed.',
        },
        {
          kind: 'commentary',
          id: 'prov15-merry-heart',
          html: '"A merry heart maketh a cheerful countenance: but by sorrow of the heart the spirit is broken." Joy or sorrow in the heart manifests in the face and in the body. But the proverb goes deeper: constant sorrow breaks the spirit itself. To live in bitterness and complaint is to damage your own soul. But to cultivate joy is to heal it.',
        },
        {
          kind: 'carry',
          html: 'The proverbs of chapter 15 invite you to consider: What words are you speaking? Are they soft answers that turn away wrath, or grievous words that stir anger? What is the condition of your heart? Is it merry, making you cheerful, or broken by sorrow? Are you aware that God sees?',
        },
        {
          kind: 'reflection',
          id: 'prov15-soft-answer-practice',
          prompt: 'The next time you are tempted to respond with anger, can you give a soft answer instead? What would change if you truly believed that God sees your goodness?',
        },
      ],
    },

    {
      ref: 'Proverbs 15:18–33',
      title: 'The Way of Wisdom and the Way of Folly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(18, 'A wrathful man stirreth up strife: but he that is slow to anger appeaseth strife.'),
            plain(19, 'The way of the slothful is as an hedge of thorns: but the way of the righteous is made plain.'),
            plain(20, 'A wise son maketh a glad father: but a foolish man despiseth his mother.'),
            plain(21, 'Folly is joy to him that is destitute of wisdom: but a man of understanding walketh uprightly.'),
            plain(22, 'Without counsel purposes are disappointed: but in the multitude of counsellors they are established.'),
            plain(23, 'A man hath joy by the answer of his mouth: and a word spoken in due season, how good is it!'),
            plain(24, 'The way of life is above to the wise, that he may depart from hell beneath.'),
            plain(25, 'The Lord will destroy the house of the proud: but he will establish the border of the widow.'),
            plain(26, 'The thoughts of the wicked are an abomination to the Lord: but the words of the pure are pleasant words.'),
            plain(27, 'He that is greedy of gain troubleth his own house; but he that hateth gifts shall live.'),
            plain(28, 'The heart of the righteous studieth to answer: but the mouth of the wicked poureth out evil things.'),
            plain(29, 'The Lord is far from the wicked: but he heareth the prayer of the righteous.'),
            plain(30, 'The light of the eyes rejoiceth the heart: and a good report maketh the bones fat.'),
            plain(31, 'The ear that heareth the reproof of life abideth among the wise.'),
            plain(32, 'He that refuseth instruction despiseth his own soul: but he that heareth reproof getteth understanding.'),
            plain(33, 'The fear of the Lord is the instruction of wisdom; and before honour is humility.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov15-thorns-plain',
          html: '"The way of the slothful is as an hedge of thorns: but the way of the righteous is made plain." The lazy person finds obstacles everywhere. Their way is blocked, entangled. But the righteous person finds the way clear. This is not because the righteous have fewer obstacles, but because they move with purpose and direction. The way opens before them.',
        },
        {
          kind: 'commentary',
          id: 'prov15-word-due-season',
          html: '"A man hath joy by the answer of his mouth: and a word spoken in due season, how good is it!" This is a beautiful saying about the power of the right word at the right time. Not to speak, but to wait for the season. And when the time comes, the word can bring joy and healing.',
        },
        {
          kind: 'commentary',
          id: 'prov15-fear-instruction',
          html: 'The chapter ends by returning to its beginning: "The fear of the Lord is the instruction of wisdom; and before honour is humility." This is the summary of all of Proverbs. Fear of the Lord is not an addition to wisdom. It is the instruction of wisdom itself. And honour does not come to the proud, but to the humble. Those who exalt themselves are brought low. Those who humble themselves are exalted.',
        },
        {
          kind: 'christ',
          id: 'prov15-christ-gentle-answer',
          title: 'Christ Connection — Christ&apos;s Gentle Answer',
          html: 'When Jesus was reviled, He did not revile in return. When He was struck, He did not strike back. He gave soft answers even when questioned by enemies. In His gentleness was greater strength than all the armies of the world. He embodies the wisdom that Proverbs teaches: the power of a soft answer to accomplish what harshness never could.',
        },
        {
          kind: 'carry',
          html: 'The final message of these fifteen chapters is this: The fear of the Lord is the beginning and the instruction of wisdom. Humble yourself before this fear. Let it guide your words, your choices, your heart. Seek counsel. Listen to reproof. Cultivate a merry heart. Speak soft answers. In these small things, lives are transformed.',
        },
        {
          kind: 'reflection',
          id: 'prov15-humility-honor',
          prompt: 'What would humility require of you? What would change if you truly believed that before honor comes humility? How might you order your life differently if you lived out of reverence for God rather than desire for your own exaltation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A soft answer turneth away wrath: but grievous words stir up anger...The fear of the Lord is the instruction of wisdom; and before honour is humility.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 15 · Study Guide',
  },

  hasHebrew: true,
};
