import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 8 — Authority and Mortality
 *
 * The Preacher teaches about submission to authority and the reality of death.
 * "I counsel thee to keep the king&apos;s commandment, and that in regard of the
 * oath of God." But he also observes a hard truth: "There is no man that hath
 * power over the spirit to retain the spirit; neither hath he power in the day
 * of death." Neither king nor wealthy man has power over his own spirit, his
 * own life, or his own death. And in this, Christ—who alone has power over
 * death—stands apart.
 */
export const ECCLESIASTES_8: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 8,

  estimatedMinutes: { 5: 1, 10: 4, 15: 5 },
  intros: [
    'The Preacher turns now to the question of authority and submission. He observes that we live under rulers, under authorities that we did not choose. And he counsels obedience: keep the king&apos;s commandment, because you have sworn an oath to God. Do not hastily withdraw from the king&apos;s presence in anger, for he can punish. The Preacher is teaching the necessity of social order, of submission to human authority.',
    'But then he adds a sobering note: power is limited. "There is no man that hath power over the spirit to retain the spirit." No king, no matter how great, has power over his own inner life, and certainly not over death. The king must die, just as the peasant must die. The wealthy merchant cannot bribe death. And the Preacher observes that the wicked seem to prosper, and the righteous seem to suffer. And yet he returns to his counsel: fear God. The only power that is real and lasting is God&apos;s power. All human authority is derivative, temporary, and subject to the ultimate authority of death and God.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 8:1–11',
      title: 'Authority and Submission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Who is as the wise man? and who knoweth the interpretation of a thing? a man&apos;s wisdom maketh his face to shine, and the strength of his face shall be changed.'),
            plain(2, 'I counsel thee to keep the king&apos;s commandment, and that in regard of the oath of God.'),
            plain(3, 'Be not hasty to go out of his sight: stand not in an evil thing; for he doeth whatsoever pleaseth him.'),
            plain(4, 'Where the word of a king is, there is power: and who may say unto him, What doest thou?'),
            plain(5, 'Whoso keepeth the commandment shall feel no evil thing: and a wise man&apos;s heart discerneth both time and judgment.'),
            plain(6, 'Because to every purpose there is time and judgment, therefore the misery of man is great upon him.'),
            plain(7, 'For he knoweth not that which shall be: for who can tell him when it shall be?'),
            plain(8, 'There is no man that hath power over the spirit to retain the spirit; neither hath he power in the day of death: and there is no discharge in that war; neither shall wickedness deliver those that are given to it.'),
            plain(9, 'All this have I seen, and applied my heart unto every work that is done under the sun: there is a time wherein one man ruleth over another to his own hurt.'),
            plain(10, 'And so I saw the wicked buried, who had come and gone from the place of the holy, and they were forgotten in the city where they had so done: this is also vanity.'),
            plain(11, 'Because sentence against an evil work is not executed speedily, therefore the heart of the sons of men is fully set in them to do evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc8-wise-man',
          html:
            '"Who is as the wise man? and who knoweth the interpretation of a thing?" The Preacher begins by asking: who understands? Who has wisdom? And he answers implicitly: the wise man is distinguished by understanding, by the ability to read the situation, to know what the moment requires. And this wisdom shows in his face. His countenance is changed by his wisdom. But this chapter will reveal that even wisdom has limits. Even the wise man cannot master death.',
        },
        {
          kind: 'commentary',
          id: 'ecc8-king-commandment',
          html:
            'The Preacher counsels obedience to the king, because you have "sworn an oath of God." This is important—the submission is not merely to the king but is grounded in the oath to God. You have bound yourself before God to keep the commandments of the land. This principle of legal order, of keeping your word, is sacred. But the Preacher is not saying kings are always just or their commands always good. He is teaching that social order requires submission, and that breaking your word is a violation before God.',
        },
        {
          kind: 'commentary',
          id: 'ecc8-no-power-over-spirit',
          html:
            'And here is the climax: "There is no man that hath power over the spirit to retain the spirit; neither hath he power in the day of death." The king has power over your body, your property, your status. But he has no power over your spirit, your inner life, your death. This is the great equalizer. Every man must face death alone, and no amount of power can delay it. The king stands at the edge of the grave as helplessly as the beggar.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher is teaching a crucial lesson: respect authority, keep order, play your part in society. But do not make an ultimate claim for human authority. Do not forget that every authority is limited, every power is temporary, and death is the only certainty. This is not a counsel of rebellion, but of perspective. Submit to human authority, yes—but remember who the true Authority is.',
        },
        {
          kind: 'reflection',
          id: 'ecc8-authority-submit',
          prompt: 'To what authority do you submit? And have you confused the authority of others with ultimate authority? What would change if you kept in mind that every human authority—including your own—is temporary and limited?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 8:12–17',
      title: 'Wickedness and Mystery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(12, 'Though a sinner do evil an hundred times, and his days be prolonged, yet surely I know that it shall be well with them that fear God, which fear before him:'),
            plain(13, 'But it shall not be well with the wicked, neither shall he prolong his days, which are as a shadow: because he feareth not before God.'),
            plain(14, 'There is a vanity which is done upon the earth; that there be just men, unto whom it happeneth according to the work of the wicked; again, there be wicked men, to whom it happeneth according to the work of the just: I said that this is also vanity.'),
            plain(15, 'Then I commended mirth, because a man hath no better thing under the sun, than to eat, and to drink, and to be merry: for that shall abide with him of his labour the days of his life, which God giveth him under the sun.'),
            plain(16, 'When I applied mine heart to know wisdom, and to see the travail that is done upon the earth: (for also there be that neither day nor night see sleep with their eyes:)'),
            plain(17, 'Then I beheld all the work of God, that a man cannot find out the work that is done under the sun: because though a man labour to seek it out, yet he shall not find it; yea further; though a wise man think to know it, yet shall he not be able to find it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc8-wicked-hundred-times',
          html:
            'The Preacher observes that the wicked person may sin a hundred times and his days be prolonged. It appears the wicked prosper and the righteous suffer. And yet the Preacher says: "Surely I know that it shall be well with them that fear God." He clings to a conviction even when the facts do not obviously support it. This is faith. This is the refusal to let the apparent triumph of the wicked convince him that God is not just.',
        },
        {
          kind: 'commentary',
          id: 'ecc8-work-of-god',
          html:
            'But the Preacher then admits: he cannot see the work of God. He has sought with all his heart to understand. He has applied his wisdom to discern the pattern. And he cannot find it. "A man cannot find out the work that is done under the sun." The works of God are hidden. The full pattern is not revealed. And this is as it should be—we are invited to trust God, not to understand Him completely.',
        },
        {
          kind: 'christ',
          id: 'ecc8-christ-power-death',
          title: 'Christ Connection — Christ Alone With Power Over Death',
          html:
            'The Preacher says no man has power over the spirit or over the day of death. But Jesus Christ rose from the dead. He conquered death. He has power that no human authority has. He said, "I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live." In Christ, death is no longer the final word. The power that no king possesses, Christ possesses. And He extends it to those who follow Him.',
        },
        {
          kind: 'reflection',
          id: 'ecc8-believe-trust',
          prompt: 'Do you believe that it will be well with those who fear God, even when the evidence seems to contradict it? What would it mean to trust God&apos;s hidden work when you cannot see it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Keep the king&apos;s commandment...There is no man that hath power over the spirit to retain the spirit; neither hath he power in the day of death.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 8 · Study Guide',
  },

  hasHebrew: false,
};
