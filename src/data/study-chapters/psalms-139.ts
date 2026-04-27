import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 139 — Known and Made Wonderful
 *
 * "O Lord, thou hast searched me, and known me." Perhaps the most intimate
 * psalm in the Psalter. The Lord knows the psalmist completely—his sitting, his
 * rising, his thoughts afar off. There is no hiding from this knowledge. Nowhere
 * to flee. Yet this knowledge is not judgment. It is witness. And the climax
 * comes in a gasp of wonder: "I am fearfully and wonderfully made." To be known
 * by God, to be seen in every detail, is not a threat. It is the deepest form of
 * affirmation. The psalmist is known and affirmed in his very existence.
 */
export const PSALMS_139: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 139,

  intros: [
    'Psalm 139 is an exploration of God&apos;s omniscience—His complete, inescapable knowledge of the human soul. It begins with awe and intimacy: "O Lord, thou hast searched me, and known me. Thou knowest my downsitting and mine uprising, thou understandest my thought afar off." The psalmist cannot hide from God&apos;s knowledge. He cannot escape it. He tries to imagine fleeing to the heavens or to Sheol, to the uttermost parts of the sea. Yet God is there. This knowledge could be terrifying. Instead, the psalm transforms it into wonder. The psalmist concludes not with fear, but with gratitude: he is known, completely and intimately, by the God who made him. And in being fully known, he finds full affirmation.',
  ],

  sections: [
    {
      ref: 'Psalm 139:1–6',
      title: 'The Lord Knows All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 139,
          lines: [
            plain(1, 'O Lord, thou hast searched me, and known me.'),
            plain(2, 'Thou knowest my downsitting and mine uprising: thou understandest my thought afar off.'),
            plain(3, 'Thou compassest my path and my lying down, and art acquainted with all my ways.'),
            plain(4, 'For there is not a word in my tongue, but, lo, O Lord, thou knowest it altogether.'),
            plain(5, 'Thou hast beset me behind and before, and laid thine hand upon me.'),
            plain(6, 'Such knowledge is too wonderful for me; it is high, I cannot attain unto it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm139-searched',
          html:
            'The opening verb is searching—not a casual glance, but a thorough investigation. "Thou hast searched me, and known me." God has looked into the deepest places, examined all that is hidden, and knows the psalmist completely. Not merely externally, but internally. He knows the sitting down and the rising up—the stillness and the activity. He understands thoughts that the psalmist thinks "afar off"—thoughts not yet spoken, barely formed, farthest from the conscious mind.',
        },
        {
          kind: 'hebrew',
          id: 'psalm139-chaqar',
          title: 'Chaqar — "Search" (Examine)',
          script: 'חָקַר',
          translit: '<strong>Chaqar</strong> · to search, examine, investigate thoroughly, as a judge examines evidence',
          description:
            'The verb chaqar is used for searching out evidence, investigating a matter thoroughly. It is the work of a judge or a scholar determined to get to the truth. God does not skim the surface. He examines with complete thoroughness.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-compasses',
          html:
            '"Thou compassest my path and my lying down, and art acquainted with all my ways." To compass means to encircle, to surround. God surrounds the psalmist&apos;s path—He is ahead and behind, on all sides. And He is acquainted with all the psalmist&apos;s ways—not just the path he walks, but the manner in which he walks it, the choices he makes, the patterns of his life.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-word',
          html:
            '"For there is not a word in my tongue, but, lo, O Lord, thou knowest it altogether." Before a word is even spoken, God knows it. The knowledge is not reactive, following the speech. It is anticipatory. God knows what the psalmist will say before he says it.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-beset',
          html:
            '"Thou hast beset me behind and before, and laid thine hand upon me." The psalmist is surrounded, enclosed, encompassed by God&apos;s presence and knowledge. There is no escape, no privacy, no refuge from this knowing. And the response is not fear, but wonder. "Such knowledge is too wonderful for me; it is high, I cannot attain unto it." The knowledge is wonderful—full of wonder—and beyond the psalmist&apos;s comprehension. He cannot grasp it. The thought that he is so thoroughly known overwhelms him.',
        },
      ],
    },

    {
      ref: 'Psalm 139:7–12',
      title: 'There Is No Hiding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 139,
          lines: [
            plain(7, 'Whither shall I go from thy spirit? or whither shall I flee from thy presence?'),
            plain(8, 'If I ascend up into heaven, thou art there: if I make my bed in hell, behold, thou art there.'),
            plain(9, 'If I take the wings of the morning, and dwell in the uttermost parts of the sea;'),
            plain(10, 'Even there shall thy hand find me, and thy right hand shall hold me.'),
            plain(11, 'If I say, Surely the darkness shall cover me; even the night shall be light about me.'),
            plain(12, 'Yea, the darkness hideth not from thee; but the night shineth as the day: the darkness and the light are both alike to thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm139-flee',
          html:
            'The psalmist then imagines trying to escape. "Whither shall I go from thy spirit?" The answer is: nowhere. He tries ascending to heaven. God is there. He tries descending to hell (Sheol). God is there. He tries flying to the uttermost parts of the sea on the wings of the morning—to distant lands, to the edges of the world. God&apos;s hand finds him. God&apos;s right hand holds him. There is no distance far enough, no direction safe enough. Everywhere the psalmist turns, he meets the presence of God.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-darkness',
          html:
            'He tries darkness. Perhaps he thinks darkness will conceal him, that what is hidden in shadow will escape God&apos;s knowledge. But "the night shineth as the day" to God. He is not bound by human limitations of sight. Light and darkness are the same to Him. The psalmist cannot hide from omniscience through any means available to human ingenuity or nature.',
        },
        {
          kind: 'carry',
          html:
            'Notice that the psalm does not frame this inescapable knowledge as a threat. The psalmist does not say, "I cannot escape, therefore I am doomed." Instead, he seems to move through initial awe into acceptance and finally into gratitude. He cannot hide from God&apos;s knowledge—and perhaps, in the deeper truth, he does not want to. To be fully known and still loved is the deepest human need.',
        },
      ],
    },

    {
      ref: 'Psalm 139:13–18',
      title: 'Fearfully and Wonderfully Made',
      blocks: [
        {
          kind: 'scripture',
          chapter: 139,
          lines: [
            plain(13, 'For thou hast possessed my reins: thou hast covered me in my mother&apos;s womb.'),
            plain(14, 'I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.'),
            plain(15, 'My substance was not hid from thee, when I was made in secret, and curiously wrought in the lowest parts of the earth.'),
            plain(16, 'Thine eyes did see my substance, yet being unperfect; and in thy book all my days are written, which in continuance were fashioned, when as yet there was none of them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm139-reins',
          html:
            'Now the perspective shifts. The psalmist moves from God&apos;s omniscience to God&apos;s creative care. "Thou hast possessed my reins"—the reins are the kidneys, the seat of emotions and will in Hebrew thought. God possesses them. God formed them. "Thou hast covered me in my mother&apos;s womb." The image is of God working in the dark, secret place of the womb, shaping the psalmist before birth, before awareness. This knowledge is not intrusive. It is loving.',
        },
        {
          kind: 'hebrew',
          id: 'psalm139-yare',
          title: 'Yare — "Fearfully" (Awesomely)',
          script: 'יָרֵא',
          translit: '<strong>Yare</strong> · fearfully, awesomely, with reverence and awe (from <em>yirah</em>, fear/awe)',
          description:
            'The word fearfully carries connotations of awe, reverence, and the kind of fear that arises in the presence of the sublime. To be made fearfully is to be made in a way that inspires awe—even one&apos;s own awe at one&apos;s existence.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-wonderful',
          html:
            '"I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well." This is the climax. The full knowledge of the psalmist by God issues in full affirmation of the psalmist. He is not just known. He is known to be wonderful. Marvelous. The very fact of his existence, the way he is made, is a work of God&apos;s creative power. And the psalmist knows this "right well"—not as abstract theology, but as lived reality.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-book',
          html:
            '"Thine eyes did see my substance, yet being unperfect; and in thy book all my days are written." Before the psalmist was formed, imperfect, unfinished, God saw him. More: God wrote his days in His book. His future is known, held, secure in God&apos;s knowledge. Not to give up human choice, but to say that God&apos;s knowledge encompasses all, past and future, and all is held in divine care.',
        },
        {
          kind: 'christ',
          id: 'psalm139-christ-known',
          title: 'Christ Connection — Known and Loved Fully',
          html:
            'In John 10, Jesus says: "I am the good shepherd...and I know my sheep." To be known by Christ is to be claimed, protected, loved. Christ carries the knowledge of God into human form. He knows us not with distant omniscience, but with the intimate knowledge of one who walked among us, suffered with us, loves us. In Christ, the terrifying knowledge of God becomes comfort.',
        },
      ],
    },

    {
      ref: 'Psalm 139:19–24',
      title: 'Search Me, O God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 139,
          lines: [
            plain(19, 'Surely thou wilt slay the wicked, O God: depart from me therefore, ye bloody men.'),
            plain(20, 'For they speak against thee wickedly, and thine enemies take thy name in vain.'),
            plain(21, 'Do not I hate them, O Lord, that hate thee? and am not I grieved with those that rise up against thee?'),
            plain(22, 'I hate them with perfect hatred: I count them mine enemies.'),
            plain(23, 'Search me, O God, and know my heart: try me, and know my thoughts:'),
            plain(24, 'And see if there be any wicked way in me, and lead me in the way everlasting.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm139-wicked',
          html:
            'The final movement turns fierce. The psalmist distances himself from the wicked, from those who oppose God. He hates those who hate God, with "perfect hatred"—complete, unambiguous, total. He counts them enemies. This is not softness or niceness. This is clarity about good and evil.',
        },
        {
          kind: 'commentary',
          id: 'psalm139-search-me',
          html:
            'But then, having asserted his hatred of evil, the psalmist turns the lamp inward: "Search me, O God, and know my heart: try me, and know my thoughts." He invites God to examine him as thoroughly as God has already done. Not just knowing about the psalmist externally, but knowing the heart—the deep place of intention and motive. "See if there be any wicked way in me"—examine me for sin, for hidden compromise, for the ways I might myself be betraying God while claiming to hate those who betray Him.',
        },
        {
          kind: 'reflection',
          id: 'psalm139-search-heart',
          prompt: 'Psalm 139 says "Search me, O God, and know my heart." What would it mean to truly invite God&apos;s thorough examination of your inner life? What are you afraid He might find? What would you want Him to find?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Lord, thou hast searched me, and known me...I am fearfully and wonderfully made.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 139 · Study Guide',
  },

  hasHebrew: true,
};
