import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 2 — Hidden Treasures of Wisdom
 *
 * "If thou criest after knowledge, and liftest up thy voice for understanding...
 * Then shalt thou understand the fear of the Lord." Wisdom is not handed over
 * passively but sought with urgency, like a merchant searching for precious metals.
 * Those who search will find. They will discover the treasure hidden in God's
 * word—discretion, understanding, the ability to walk in righteousness and avoid
 * the path of the wicked. The chapter promises that wisdom, once obtained, becomes
 * a treasure more precious than silver or gold.
 */
export const PROVERBS_2: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  topicTags: ['wisdom', 'righteousness', 'folly', 'integrity'],
  opener: {
    topical: true,
    caption: 'Proverbs 2',
  },
  intros: [
    'The second chapter of Proverbs deepens the call of the first. It is not enough to hear that wisdom exists or even to see her calling. One must actively search for her, pursue her, seek her "as silver" and "as hidden treasures." This is the language of passionate seeking, of the merchant who will overturn every stone, investigate every ledger, follow every lead in pursuit of wealth. This same intensity is what God desires from those who seek Him and His wisdom.',
    'But there is a promise attached to this search. Those who seek will find. And what they will find is not merely information about how to live, but a transformation of perception itself—the ability to understand and to walk in paths of righteousness, to recognize and avoid the way of the wicked. Wisdom becomes not just knowledge but discernment, not just understanding but character.',
  ],

  sections: [
    {
      ref: 'Proverbs 2:1–11',
      title: 'Seek Wisdom as Hidden Treasure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'My son, if thou wilt receive my words, and hide my commandments with thee;'),
            plain(2, 'So that thou incline thine ear unto wisdom, and apply thine heart to understanding;'),
            plain(3, 'Yea, if thou criest after knowledge, and liftest up thy voice for understanding;'),
            plain(4, 'If thou seekest her as silver, and searchest for her as for hid treasures;'),
            plain(5, 'Then shall thou understand the fear of the Lord, and find the knowledge of God.'),
            plain(6, 'For the Lord giveth wisdom: out of his mouth cometh knowledge and understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov2-seek-promise',
          html:
            'The first section establishes the condition and the promise. Condition: seek wisdom with intensity, hide God&apos;s words deep within your heart, incline your ear, apply your heart. Promise: then you will understand the fear of the Lord. God is not stingy with wisdom. It flows from His mouth. He lays it up for the righteous. The pursuit of wisdom is met with God&apos;s generous giving.[res:british-museum-amenemope]',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(7, 'He layeth up sound wisdom for the righteous: he is a buckler to them that walk uprightly.'),
            plain(8, 'He keepeth the paths of judgment, and preserveth the way of his saints.'),
            plain(9, 'Then shalt thou understand righteousness, and judgment, and equity; yea, every good path.'),
            plain(10, 'When wisdom entereth into thine heart, and knowledge is pleasant unto thy soul;'),
            plain(11, 'Discretion shall preserve thee, understanding shall keep thee:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov2-receive-hide',
          html: 'To "receive" God&apos;s words and to "hide" His commandments means more than hearing them passively. It means to take them in, to store them, to let them become so much a part of you that they are hidden in the depths of your being, waiting to shape your choices when you need them most. This is not a casual relationship with God&apos;s instruction but a committed one.[res:sefaria-proverbs-2]',
        },
        {
          kind: 'hebrew',
          id: 'prov2-tsafan',
          title: 'Tsafan — "Hide" (Treasure Up)',
          script: 'צָפַן',
          translit: '<strong>Tsafan</strong> · to hide; to treasure up; to store away secretly',
          description: 'The word suggests not merely hiding something away from others, but treasuring it, keeping it safe, the way one keeps precious things. When you tsafan God&apos;s words, you are treating them as your most valuable possession, keeping them close, letting them shape who you are.',
        },
        {
          kind: 'commentary',
          id: 'prov2-silver-treasure',
          html: 'The seeking of wisdom is compared to the seeking of silver and hidden treasures. Silver is not found by the lazy or the indifferent. It requires effort, skill, persistence, the willingness to dig, to search, to follow leads. So too with wisdom. It is not given without seeking. But for those who seek with this intensity, the search yields what is truly valuable—not wealth, but understanding that protects and guides.[res:cambridge-up-proverbs-wisdom]',
        },
        {
          kind: 'christ',
          id: 'prov2-christ-treasures',
          title: 'Christ Connection — Hidden Treasures in Christ',
          html: 'Paul writes to the Colossians that in Christ "are hid all the treasures of wisdom and knowledge" (Colossians 2:3). The wisdom that Proverbs calls us to seek with the intensity of a merchant searching for precious metals is ultimately found in Christ. To seek Christ is to find all wisdom. To treasure Him is to hide away what cannot be lost or taken from you.',
        },
        {
          kind: 'carry',
          html: 'What are you seeking with the intensity of someone looking for hidden treasure? Are you investing in the pursuit of God&apos;s wisdom, or are you content with the scraps of understanding the world offers? The promise here is that those who seek will find—and what they find will guard their feet, keep them safe, show them the way.',
        },
        {
          kind: 'reflection',
          id: 'prov2-seek-intensity',
          prompt: 'If you approached seeking God&apos;s wisdom with the same intensity and persistence you bring to something you truly value, what would change in your life? What is keeping you from that kind of devotion?',
        },
      ],
    },

    {
      ref: 'Proverbs 2:12–22',
      title: 'Wisdom Protects From Evil Paths',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'To deliver thee from the way of the evil man, from the man that speaketh froward things;'),
            plain(13, 'Who leave the paths of uprightness, to walk in the ways of darkness;'),
            plain(14, 'Who rejoice to do evil, and delight in the frowardness of the wicked;'),
            plain(15, 'Whose ways are crooked, and they froward in their paths:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov2-two-seducers',
          html: 'Wisdom protects from those who use words and enticement to draw you away from covenant. The evil man speaks froward things—perverse, twisted speech that distorts truth. He walks knowingly in darkness, rejoicing in wickedness. The strange woman flatters with her words, promising what seems pleasurable but leads to death. Both are seducers. Both use language as their tool. Both count on the young not recognizing the trap until it is too late.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(16, 'To deliver thee also from the strange woman, even from the stranger which flattereth with her words;'),
            plain(17, 'Which forsaketh the guide of her youth, and forgetteth the covenant of her God;'),
            plain(18, 'For her house inclineth unto death, and her paths unto the dead;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov2-mid-life-dark',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'None that go unto her return again, neither take they hold of the paths of life.'),
            plain(20, 'That thou mayest walk in the way of good men, and keep the paths of the righteous.'),
            plain(21, 'For the upright shall dwell in the land, and the perfect shall remain in it.'),
            plain(22, 'But the wicked shall be cut off from the earth, and the transgressors shall be rooted out of it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov2-evil-man',
          html: 'Wisdom protects from two classes of seducers: the man who speaks "froward things"—perverse, twisted speech that distorts truth—and the strange woman who flatters. Both use words to draw the young away from the path of uprightness. The man of evil walks knowingly in darkness, even rejoicing in wickedness. He has abandoned the light. His path is crooked by design, not accident.',
        },
        {
          kind: 'commentary',
          id: 'prov2-strange-woman',
          html: 'The "strange woman" (described more fully later in Proverbs) represents seduction in all its forms—not merely sexual, but any enticement that calls you away from covenant faithfulness. She flatters, she promises pleasure, but her house leads to death. Her paths lead to the dead. Those who go to her do not return. The promise is absolute: the way of unfaithfulness has only one end.',
        },
        {
          kind: 'commentary',
          id: 'prov2-upright-land',
          html: 'The contrast is absolute. The upright dwell in the land; the wicked are cut off. The righteous are rooted in place, established, permanent. The transgressors are pulled up by the roots, uprooted, cast out. In the economy of God&apos;s world, there is room for the righteous, but no room for those who persistently refuse wisdom and choose the paths of folly.',
        },
        {
          kind: 'carry',
          html: 'Wisdom is not merely valuable information. It is protection. It stands as a guard between you and the ways of the wicked. But you must value it enough to seek it as treasure. You must let it enter your heart. And once it does, it will keep you safe—showing you which paths lead to death and which lead to life.',
        },
        {
          kind: 'reflection',
          id: 'prov2-protection',
          prompt: 'What seductions in your own life—whether through flattery, twisted speech, or false promises—are you most vulnerable to? How might genuine wisdom protect you from them?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If thou criest after knowledge, and liftest up thy voice for understanding...Then shalt thou understand the fear of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 2 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-proverbs-2',
      kind: 'study',
      source: 'Sefaria',
      label: 'Proverbs 2',
      url: 'https://www.sefaria.org/Proverbs.2',
      description: 'Sefaria open-access source text and translations for Proverbs 2.',
    },
    {
      id: 'british-museum-amenemope',
      kind: 'museum',
      source: 'British Museum',
      label: 'Egyptian Instruction of Amenemope',
      url: 'https://www.britishmuseum.org/',
      description: 'ANE parallel to Proverbs 22:17–23:11 — Egypt&apos;s wisdom literature parallel to biblical instruction.',
    },
    {
      id: 'cambridge-up-proverbs-wisdom',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Proverbs and Ancient Near Eastern Wisdom',
      url: 'https://www.cambridge.org/',
      description: 'Scholarly analysis of Proverbs within ANE wisdom tradition.',
    },
  ],

  hasHebrew: true,
};
