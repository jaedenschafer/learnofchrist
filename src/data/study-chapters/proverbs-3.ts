import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 3 — Trust and the Discipline of Love
 *
 * "Trust in the Lord with all thine heart; and lean not unto thine own
 * understanding." Here is the heart of faith—not a tentative, partial trust,
 * but a wholehearted surrender of understanding to God. The chapter calls for
 * honor paid to God through substance, for trust in God&apos;s way even when it
 * confuses us, and for acceptance of correction as an expression of God&apos;s love.
 * "Whom the Lord loveth he correcteth."
 */
export const PROVERBS_3: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'The third chapter of Proverbs presents a vision of the flourishing life—not the life of ease, but the life of genuine trust. It begins with a call to submit your understanding completely to God. This is countercultural in any age, but especially in ours, where the celebration of individual reason and the distrust of any authority beyond oneself are taken as givens. Yet Proverbs insists that your own understanding, trusted too completely, is your undoing. Truth requires submission.',
    'But this submission is not blind or arbitrary. It is rooted in the character of God—in His faithfulness, His care, His willingness to correct those He loves. The chapter calls readers to honor God through how they use their resources, to recognize that the discipline that comes from God is a sign of love, not rejection, and to seek the way of peace above all else.',
  ],

  sections: [
    {
      ref: 'Proverbs 3:1–12',
      title: 'Trust, Honor, and Correction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'My son, forget not my law; but let thine heart keep my commandments:'),
            plain(2, 'For length of days, and long life, and peace, shall they add to thee.'),
            plain(3, 'Let not mercy and truth forsake thee: bind them about thy neck; write them upon the table of thine heart:'),
            plain(4, 'So shalt thou find favour and good understanding in the sight of God and man.'),
            plain(5, 'Trust in the Lord with all thine heart; and lean not unto thine own understanding:'),
            plain(6, 'In all thy ways acknowledge him, and he shall direct thy paths.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov3-acknowledge-paths',
          html:
            'The call to trust with all your heart is balanced with the command to acknowledge Him in all your ways. This is not a contradiction. You submit your understanding to His, but you do not become passive. You actively acknowledge Him—you consult His wisdom, you bring your situation before Him, you seek His direction. And the promise is that He will direct your paths. Not eliminate your struggles, but guide you through them.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'Be not wise in thine own eyes: fear the Lord, and depart from evil.'),
            plain(8, 'It shall be health to thy navel, and marrow to thy bones.'),
            plain(9, 'Honour the Lord with thy substance, and with the firstfruits of all thine increase:'),
            plain(10, 'So shall thy barns be filled with plenty, and thy presses shall burst out with new wine.'),
            plain(11, 'My son, despise not the chastening of the Lord; neither be weary of his correction:'),
            plain(12, 'For whom the Lord loveth he correcteth; even as a father the son in whom he delighteth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov3-trust-heart',
          html: 'Trust with "all thine heart" is not partial, not conditional, not held in reserve. It means you commit your deepest self to God, not to your own reasoning. Yet this does not mean you are to be passive or foolish. Rather, in all your ways, you are to "acknowledge him"—to consult Him, to bring Him your understanding, to let His wisdom shape your path. The promise is that He "shall direct thy paths." Not by magic or miracle, but by gradual shaping, by the quiet work of wisdom in the heart.',
        },
        {
          kind: 'hebrew',
          id: 'prov3-batach',
          title: 'Batach — "Trust" (Rely Upon)',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust; to rely upon; to put confidence in',
          description: 'The word conveys not mere intellectual assent but a deep reliance, a resting of the whole weight of your life upon another. To batach in God is to stop holding back, to stop keeping alternatives open, to commit yourself wholly.',
        },
        {
          kind: 'commentary',
          id: 'prov3-chastening-love',
          html: 'The claim that God corrects those He loves can sound harsh, but it is revolutionary. It reframes discipline not as punishment imposed by a distant judge, but as the care of a father for his son. A parent who does not correct is a parent who does not care. A child who experiences no discipline is a child who is unloved. The chastening of the Lord is a sign not of His anger but of His love. And the willingness to accept that correction—not to despise it or to grow weary of it—is the mark of true trust.',
        },
        {
          kind: 'christ',
          id: 'prov3-christ-discipline',
          title: 'Christ Connection — The Discipline of Redemption',
          html: 'The author of Hebrews quotes this very verse: "For whom the Lord loveth he chasteneth, and scourgeth every son whom he receiveth...Now no chastening for the present seemeth to be joyous but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness" (Hebrews 12:6-11). Christ himself submitted to suffering and correction, not because He was unloved but because He was supremely loved. His willingness to accept the Father&apos;s discipline unto death is the foundation of our redemption.',
        },
        {
          kind: 'carry',
          html: 'When difficulty comes, when you are corrected or life goes contrary to your desires, consider: Is this the discipline of God, a sign of His care? Can you trust Him enough to believe that His way, though hard, is leading you toward life? The promise is that those who honor God with their substance, who accept His discipline with grace, will be filled with plenty and their barns will overflow.',
        },
        {
          kind: 'reflection',
          id: 'prov3-discipline-love',
          prompt: 'When was a time you experienced correction or difficulty that you later realized was actually an expression of God&apos;s care for you? How does that change the way you understand His discipline in your life now?',
        },
      ],
    },

    {
      ref: 'Proverbs 3:13–26',
      title: 'Blessed Are They That Find Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'Happy is the man that findeth wisdom, and the man that getteth understanding.'),
            plain(14, 'For the merchandise of it is better than the merchandise of silver, and the gain thereof than fine gold.'),
            plain(15, 'She is more precious than rubies: and all the things thou canst desire are not to be compared unto her.'),
            plain(16, 'Length of days is in her right hand; and in her left hand riches and honour.'),
            plain(17, 'Her ways are ways of pleasantness, and all her paths are peace.'),
            plain(18, 'She is a tree of life to them that lay hold upon her: and happy is every one that retaineth her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov3-wisdom-personal-gift',
          html: 'Wisdom is not abstract philosophy but a person to be found, held, treasured. She offers not just knowledge but life—length of days, riches, honor, pleasantness, peace. She is a tree of life, echoing Genesis and eternity. To find wisdom is to find happiness itself. The treasures of silver and gold pale in comparison. Those who grasp wisdom hold the greatest thing.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'The Lord by wisdom hath founded the earth; by understanding hath he established the heavens.'),
            plain(20, 'By his knowledge the depths are broken up, and the clouds drop down the dew.'),
            plain(21, 'My son, let not these depart from thine eyes: keep sound wisdom and discretion:'),
            plain(22, 'So shall they be life unto thy soul, and grace to thy neck.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov3-mid-marrow-bones',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(23, 'Then shalt thou walk in thy way safely, and thy foot shall not stumble.'),
            plain(24, 'When thou liest down, thou shalt not be afraid: yea, thou shalt lie down, and thy sleep shall be sweet.'),
            plain(25, 'Be not afraid of sudden fear, neither of the desolation of the wicked when it cometh;'),
            plain(26, 'For the Lord shall be thy confidence, and shall keep thy foot from being taken.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov3-wisdom-treasure',
          html: 'Wisdom is more valuable than any earthly treasure. Silver tarnishes, gold can be stolen, rubies can be lost. But wisdom, once obtained, is yours. It gives length of days, it yields both riches and honor, and its ways are ways of pleasantness and peace. This is not a hollow promise. The person who walks in wisdom genuinely lives differently—with less fear, more peace, deeper joy—than the person who does not.',
        },
        {
          kind: 'commentary',
          id: 'prov3-tree-of-life',
          html: 'Wisdom is called a "tree of life"—the same image used in Genesis to describe the tree in the Garden, the tree that gives eternal life. To lay hold of wisdom is to hold onto life itself. And the promise extends: walking in the way of wisdom, one walks safely, without stumbling. Sleep becomes sweet. Sudden fear loses its power.',
        },
        {
          kind: 'commentary',
          id: 'prov3-god-founded',
          html: 'The chapter shifts perspective here, to see that the wisdom by which we live is the same wisdom by which God founded the earth and established the heavens. We are invited to see our lives not as isolated dramas but as participating in the same order that holds the cosmos together. To seek wisdom is to align ourselves with the deepest truth of reality.',
        },
        {
          kind: 'carry',
          html: 'The promise of Proverbs 3 is concrete and personal: you will walk safely, your foot will not stumble, your sleep will be sweet, you will not be paralyzed by fear. But these are not automatic benefits. They come to those who treasure wisdom as the greatest thing, who hold it close, who let it shape every choice. What would it cost you to reorder your priorities in this way?',
        },
        {
          kind: 'reflection',
          id: 'prov3-treasure-wisdom',
          prompt: 'If you truly treasured wisdom above all earthly goods—above status, wealth, approval, comfort—how would your choices change? What would you have to let go of to pursue it so completely?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 3 · Study Guide',
  },

  hasHebrew: true,
};
