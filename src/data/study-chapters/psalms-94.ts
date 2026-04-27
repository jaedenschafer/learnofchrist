import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 94 — O Lord God, to Whom Vengeance Belongeth
 *
 * "O Lord God, to whom vengeance belongeth; O God, to whom vengeance belongeth,
 * shew thyself." The psalmist cries out for justice in a world filled with
 * injustice. The wicked oppress the widow and the stranger. They slay the
 * innocent. They seem to flourish. "He that planted the ear, shall he not hear?
 * he that formed the eye, shall he not see?" God, the creator of all senses,
 * cannot possibly be blind to injustice. Christ Connection: Christ comes as
 * the judge and redeemer, the one who sees all and will set all things right.
 */
export const PSALMS_94: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 94,

  intros: [
    'Psalm 94 is the cry of those who suffer injustice. The psalmist sees the wicked prospering. He sees the weak being crushed. He sees the innocent being slain. And he cries out: How long? Where is God? Why does the God of justice not act? This is the prayer of the suffering and the oppressed—a prayer we must not silence, a prayer that has echoed through history.',
    'Yet the psalm also contains a profound affirmation: He that formed the eye, shall He not see? He that formed the ear, shall He not hear? The God who created all our senses cannot possibly be blind or deaf to injustice. God knows. God hears. And though His response may seem slow to us, His justice is certain.',
  ],

  sections: [
    {
      ref: 'Psalm 94:1–15',
      title: 'O Lord God, to Whom Vengeance Belongeth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 94,
          lines: [
            plain(1, 'O Lord God, to whom vengeance belongeth; O God, to whom vengeance belongeth, shew thyself.'),
            plain(2, 'Lift up thyself, thou judge of the earth: render a reward to the proud.'),
            plain(3, 'Lord, how long shall the wicked, how long shall the wicked triumph?'),
            plain(4, 'How long shall they utter and speak hard things? and all the workers of iniquity boast themselves?'),
            plain(5, 'They break in pieces thy people, O Lord, and afflict thine heritage.'),
            plain(6, 'They slay the widow and the stranger, and murder the fatherless.'),
            plain(8, 'Understand, ye brutish among the people: and ye fools, when will ye be wise?'),
            plain(9, 'He that planted the ear, shall he not hear? he that formed the eye, shall he not see?'),
            plain(10, 'He that chastiseth the heathen, shall not he correct? he that teacheth man knowledge, shall not he know?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms94-vengeance',
          html: '"O Lord God, to whom vengeance belongeth; O God, to whom vengeance belongeth, shew thyself." The psalmist does not take justice into his own hands. He appeals to God. He calls on God to show Himself, to reveal Himself, to act. Justice belongs to God alone. And the plea is: Show Yourself. Act. Do not remain hidden.',
        },
        {
          kind: 'commentary',
          id: 'psalms94-how-long-wicked',
          html: '"Lord, how long shall the wicked...triumph?" The ache of this question echoes through Scripture and through history. How long? This is not impatience; this is agony. The oppressed cannot wait for justice that seems forever delayed.',
        },
        {
          kind: 'commentary',
          id: 'psalms94-break-people',
          html: '"They break in pieces thy people, O Lord, and afflict thine heritage. They slay the widow and the stranger, and murder the fatherless." The list of horrors is explicit. The vulnerable are targeted. Those without power to defend themselves are killed. This is not abstract. This is the reality of injustice in the world.',
        },
        {
          kind: 'commentary',
          id: 'psalms94-planted-ear',
          html: '"He that planted the ear, shall he not hear? he that formed the eye, shall he not see?" Here is the turning point. The psalmist appeals to the logic of creation. The God who created the human ear cannot possibly be deaf. The God who formed the human eye cannot possibly be blind. God&apos;s senses are infinitely greater than ours. He knows. He sees. He hears.',
        },
        {
          kind: 'christ',
          id: 'psalms94-christ-judge',
          title: 'Christ Connection — Christ, the Judge Who Sees',
          html: 'Christ comes as the one who sees what is hidden, who hears the cry of the suffering, who knows the hearts of the oppressor and the oppressed. His death and resurrection are God&apos;s judgment on injustice. He stands with the widow, the stranger, the fatherless. And in the end, all hidden things will be revealed. All injustice will be judged. All tears will be seen by a God who hears.',
        },
        {
          kind: 'carry',
          html: 'Psalm 94 gives voice to those who suffer. It does not ask them to be silent. It invites them to cry out. And it assures them that their cry is heard. By the God who hears. By the God who sees. By the God whose judgment is sure.',
        },
        {
          kind: 'reflection',
          id: 'psalms94-cry-injustice',
          prompt: 'What injustice breaks your heart? Can you bring that cry to a God who hears and sees? How might the promise of God&apos;s judgment comfort you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Lord God, to whom vengeance belongeth, shew thyself...He that planted the ear, shall he not hear? he that formed the eye, shall he not see?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 94 · Study Guide',
  },

  hasHebrew: false,
};
