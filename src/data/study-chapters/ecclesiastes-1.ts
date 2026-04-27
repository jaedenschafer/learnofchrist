import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 1 — Vanity of Vanities
 *
 * The Preacher opens with a stark pronouncement: "Vanity of vanities, all is
 * vanity. And what profit hath a man of all his labour which he taketh under
 * the sun?" This is not the voice of despair, but of honest observation. The
 * sun rises and sets, rises and sets—nothing is new. Generations come and go,
 * forgotten. Wisdom brings sorrow, and in the endless cycle of work and
 * futility, the wise man finds himself no better off than the fool. And yet
 * there is Something beyond the sun. There is Christ.
 */
export const ECCLESIASTES_1: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 1,

  intros: [
    'The book of Ecclesiastes begins not with celebration but with a question mark. An ancient teacher—called the Preacher—sets out to examine life under the sun, to test all earthly pursuits and see if any of them yield lasting meaning. His conclusion is immediate and unsparing: vanity. Emptiness. Futility. But this is not nihilism. This is clarity. The Preacher is not denying that life has temporary pleasure or that work has value. He is asking whether these things, when they come to an end—and they always come to an end—can be called good, can be called lasting, can be called the answer to the deepest hunger of the human soul.',
    'What follows is a meditation on the circularity of existence. "One generation passeth away, and another generation cometh." The sun rises in the east and sets in the west and rises again in the east—an endless wheel. The wind bloweth toward the south, then turns toward the north, circling perpetually. All rivers run to the sea, yet the sea is not full. All things are full of labour; man is not able to utter it. And beneath it all is a single truth: there is nothing new under the sun. Everything that happens has happened before, and will happen again. What profit, then, can attach to any of our strivings?',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 1:1–11',
      title: 'The Vanity of All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The words of the Preacher, the son of David, king in Jerusalem.'),
            plain(2, 'Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity.'),
            plain(3, 'What profit hath a man of all his labour which he taketh under the sun?'),
            plain(4, 'One generation passeth away, and another generation cometh: but the earth abideth for ever.'),
            plain(5, 'The sun also ariseth, and the sun goeth down, and hasteth to his place where he arose.'),
            plain(6, 'The wind goeth toward the south, and turneth about unto the north; it whirleth about continually, and the wind returneth again according to his circuits.'),
            plain(7, 'All the rivers run into the sea; yet the sea is not full; unto the place from whence the rivers come, thither they return again.'),
            plain(8, 'All things are full of labour; man is not able to utter it: the eye is not satisfied with seeing, nor the ear filled with hearing.'),
            plain(9, 'The thing that hath been, it is that which shall be; and that which is done is that which shall be done: and there is no new thing under the sun.'),
            plain(10, 'Is there any thing whereof it may be said, See, this is new? it hath been already of old time, which was before us.'),
            plain(11, 'There is no remembrance of former things; neither shall there be any remembrance of things that shall come after among those that shall come after.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc1-vanity',
          html:
            'The word "vanity" appears twice in verse 2 for emphasis—not once, but twice: "Vanity of vanities." This is the Hebrew way of expressing the superlative. It is not merely that some things are vain, or even many things, but that all—absolutely all—is vanity. The Hebrew word is <em>hebel</em>, which literally means "breath" or "vapor." It is that which rises, hovers briefly in the air, and dissolves away. To call something vanity is to call it insubstantial, temporary, leaving no permanent mark.',
        },
        {
          kind: 'hebrew',
          id: 'ecc1-hebel',
          title: 'Hebel — "Vanity" (Breath, Vapor)',
          script: 'הֶבֶל',
          translit: '<strong>Hebel</strong> · vapor, breath, futility, something that is empty or meaningless',
          description:
            'Hebel captures the image of breath—it emerges from the mouth, expands into the cold air, and vanishes. It is not permanent, not substantial. The Preacher uses this word to describe all human effort apart from God. Not wickedness, but futility. Not immorality, but emptiness. The book of Ecclesiastes returns to this word again and again, hammering home the theme: all human striving apart from the transcendent is mere vapor.',
        },
        {
          kind: 'commentary',
          id: 'ecc1-profit',
          html:
            'The Preacher asks: "What profit hath a man?" The Hebrew word for profit is <em>yitron</em>—a surplus, a remainder, something left over after work is done. When you labor all day, what is left? At the end of a life of labor, what remains that cannot be taken away, that does not fade, that lasts? The Preacher suggests: nothing. The sun rises and sets. Generations come and go. And all our works are forgotten.',
        },
        {
          kind: 'christ',
          id: 'ecc1-christ-beyond',
          title: 'Christ Connection — The One Beyond the Sun',
          html:
            'The Preacher speaks of all that happens "under the sun"—the visible, temporal, earthly realm. But there is One above the sun. There is Christ, who transcends the cycle, who breaks the wheel of vanity. When the Preacher comes to the end of his book, he will discover that meaning is not found in earthly pursuits—wealth, pleasure, wisdom, power—but in fearing God and keeping His commandments. Jesus taught that no one can serve two masters, that life does not consist in the abundance of possessions, that whoever loses his life for Christ&apos;s sake will find it. In Christ, the vanity ends.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to ask a dangerous question: What am I building that will last? What am I pursuing that will not turn to vapor in my hands? The question is not meant to crush us, but to redirect us. To ask "what profit" is to ask where true profit lies. It is to step back from the endless cycle and ask whether there is Something—or Someone—that stands above the sun, that is not subject to the wheel, that offers meaning that transcends the grave.',
        },
        {
          kind: 'reflection',
          id: 'ecc1-what-lasts',
          prompt: 'What are you laboring for? A year from now, five years, fifty years—what will remain? Is there anything you pursue that does not, in the end, turn to vapor in your hands?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 1:12–18',
      title: 'Wisdom and Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(12, 'I the Preacher was king over Israel in Jerusalem.'),
            plain(13, 'And I gave my heart to seek and search out by wisdom all things that are done under heaven: this sore travail hath God given to the sons of men to be exercised therewith.'),
            plain(14, 'I have seen all the works that are done under the sun; and, behold, all is vanity and vexation of spirit.'),
            plain(15, 'That which is crooked cannot be made straight: and that which is wanting cannot be numbered.'),
            plain(16, 'I communed with mine own heart, saying, Lo, I am come to great estate, and have gotten more wisdom than all they that have been before me in Jerusalem: yea, my heart hath great experience of wisdom and knowledge.'),
            plain(17, 'And I gave my heart to know madness and folly: I perceived that this also is vexation of spirit.'),
            plain(18, 'For in much wisdom is much grief: and he that increaseth knowledge increaseth sorrow.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc1-search',
          html:
            'The Preacher tells us his credentials. He has been king over Israel. He has had access to every resource, every pleasure, every pursuit. He gave his heart to seek and search out by wisdom. This is not an idle speculation. This is a ruler with absolute power embarking on a rigorous investigation of all human pursuits under the sun. And his conclusion: all is vanity and vexation of spirit. Vexation here means anguish, a chasing after wind.',
        },
        {
          kind: 'commentary',
          id: 'ecc1-crooked',
          html:
            '"That which is crooked cannot be made straight." The Preacher observes the fundamental brokenness of the world. Evil abounds. Injustice is rampant. And the human mind cannot straighten it out. We cannot reason our way to a just world. We cannot fix what is fundamentally broken by thought alone. We are stuck in the crooked, and crooked it remains.',
        },
        {
          kind: 'commentary',
          id: 'ecc1-grief',
          html:
            'The final verse of this section strikes at the heart of intellectual pride: "In much wisdom is much grief; and he that increaseth knowledge increaseth sorrow." Wisdom is not a panacea. The more the Preacher has sought to understand the world, the more he has seen its futility. Knowledge of the broken world brings sorrow. It is a paradox that many scholars have experienced: the more you know, the more you grieve.',
        },
        {
          kind: 'carry',
          html:
            'There is a wisdom that is of this world, and it can lead to despair. But there is also a wisdom that comes from above—not the wisdom that grieves, but the wisdom that hopes. The Preacher has looked at everything under the sun and found it wanting. But he has not yet discovered that there is One above the sun who gives meaning to all things. And even wisdom itself finds its true value only in relation to that One.',
        },
        {
          kind: 'reflection',
          id: 'ecc1-what-knowledge',
          prompt: 'What do you know that breaks your heart? What grief does your knowledge bring? Is there a truth beyond the visible world that could reframe what you know about this one?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity. What profit hath a man of all his labour which he taketh under the sun?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 1 · Study Guide',
  },

  hasHebrew: true,
};
