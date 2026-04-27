import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 5 — A High Priest After the Order of Melchisedec
 *
 * The author has established Christ as superior to angels, to Moses, to all earthly
 * authority. Now he addresses a central question: is Christ a legitimate High Priest?
 * Priesthood in Judaism descended from Aaron and was bound by the Law. Jesus was from
 * Judah, not Levi. He had no legal standing as a priest—until the author points to
 * Melchisedec. A priest forever, a king of righteousness, without genealogy. Jesus is
 * such a priest—not by human law but by divine oath.
 */
export const HEBREWS_5: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 5,

  intros: [
    'For Jewish believers, the priesthood was everything. It was the mechanism of atonement, the appointed mediator between God and people. To claim Jesus was the true High Priest was radical. The author could not point to Levitical lineage. So he pointed to something deeper—Psalm 110, which speaks of a priest after the order of Melchisedec. This figure predates the Law. This priest is eternal. This establishes Jesus&apos; priesthood on a foundation more ancient and enduring than Aaron&apos;s.',
    'But the passage also emphasizes Christ&apos;s humanity. He offered up prayers and supplications. He learned obedience through suffering. He was made perfect through what He suffered. This is not abstract priesthood. It is rooted in incarnate experience.',
  ],

  sections: [
    /* ─── Hebrews 5:1–10 — A Priest After Melchisedec ───────────────── */
    {
      ref: 'Hebrews 5:1–10',
      title: 'Called of God as Melchisedec',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'For every high priest taken from among men is ordained for men in things pertaining to God, that he may offer both gifts and sacrifices for sins:'),
            plain(4, 'And no man taketh this honour unto himself, but he that is called of God, as was Aaron.'),
            plain(5, 'So also Christ glorified not himself to be made an high priest; but he that said unto him, Thou art my Son, to day have I begotten thee;'),
            plain(6, 'As he saith also in another place, Thou art a priest for ever after the order of Melchisedec.'),
            plain(8, 'Though he were a Son, yet learned he obedience by the things which he suffered;'),
            plain(9, 'And being made perfect, he became the author of eternal salvation unto all them that obey him;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-high-priest-office',
          html:
            'A high priest is taken from among men. He represents humanity before God. He offers gifts and sacrifices. He is ordained by God, not self-appointed. Christ meets all these criteria—He was fully human, fully obedient, and fully appointed by the Father. But His priesthood transcends the Levitical order.',
        },
        {
          kind: 'greek',
          id: 'heb5-melchisedek',
          title: 'Melchisedek — King of Righteousness',
          script: 'Μελχισέδεκ',
          translit: '<strong>Melchisedek</strong> · King of Righteousness; Priest of the Most High',
          description:
            'Melchisedec appears only once in the Old Testament (Genesis 14), yet remains one of Scripture&apos;s most mysterious figures. Without genealogy, without beginning or end, he is an eternal type of priesthood. The author argues that Christ fulfills this eternal priesthood.',
        },
        {
          kind: 'commentary',
          id: 'heb5-learned-obedience',
          html:
            '"Though he were a Son, yet learned he obedience by the things which he suffered." This is stunning. The eternal Son learned obedience through suffering. Not that He was disobedient. But through the trial of the cross, His obedience was tested and proven. His priesthood is rooted in voluntary self-surrender.',
        },
        {
          kind: 'christ',
          id: 'heb5-christ-eternal-priest',
          title: 'Christ Connection — Priest Forever',
          html:
            'Jesus is "a priest for ever after the order of Melchisedec." His priesthood does not terminate. It is not bound by the lifespan of a mortal. He intercedes forever. The sacrifice He offered was offered once, yet its efficacy is eternal. You need no other priest. He stands forever on your behalf.',
        },
        {
          kind: 'carry',
          html:
            'Your sins have been dealt with. Not by a priest who must repeat sacrifices year after year, but by One whose sacrifice is final and eternal. Jesus learned obedience through suffering. He was made perfect. He is the source of eternal salvation for all who obey Him. Trust in His priesthood.',
        },
        {
          kind: 'reflection',
          id: 'heb5-obey-salvation',
          prompt: 'What does it mean to "obey Him" so that you might obtain salvation? Where are you resisting His call?',
        },
      ],
    },

    /* ─── Hebrews 5:11–14 — Milk and Meat ────────────────────────── */
    {
      ref: 'Hebrews 5:11–14',
      title: 'Strong Meat Belongeth to Them That Are Mature',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(11, 'Of whom we have many things to say, and hard to be uttered, seeing ye are dull of hearing.'),
            plain(12, 'For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat.'),
            plain(13, 'For every one that useth milk is unskilful in the word of righteousness: for he is a babe.'),
            plain(14, 'But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb5-dull-hearing',
          html:
            'The author expresses frustration. His readers should be teachers by now. Instead, they are still infants, needing milk, unable to digest meat. They have become dull in hearing—sluggish, unresponsive. This is not a fixed condition. It is the result of choices, of inattention, of spiritual lethargy.',
        },
        {
          kind: 'greek',
          id: 'heb5-gala',
          title: 'Gala — Milk',
          script: 'γάλα',
          translit: '<strong>Gala</strong> · milk; basic sustenance; elementary teaching',
          description:
            'Milk is nourishing but incomplete. An infant needs milk. But prolonged infancy is failure to mature. The author is calling for growth. Not complacency. Not settling for basic understanding. But pressing toward depth, complexity, and maturity in faith.',
        },
        {
          kind: 'commentary',
          id: 'heb5-discern-good-evil',
          html:
            'Maturity comes through practice. Through use, the senses are exercised to discern good and evil. This is not intellectual knowledge alone. It is the deepening capacity to recognize truth and falsehood, holiness and corruption, the will of God and the deceptions of the enemy. This requires time, attention, and experience.',
        },
        {
          kind: 'christ',
          id: 'heb5-christ-meat',
          title: 'Christ Connection — The Deep Things of God',
          html:
            'The "strong meat" of faith is the deep things of Christ—His eternal priesthood, His intercession, His satisfaction of God&apos;s justice. These truths nourish a mature faith. They are not for babes. They are for those who have tasted that the Lord is good and are hungry for more.',
        },
        {
          kind: 'carry',
          html:
            'Are you still a babe in faith? Do you need constant reminding of the basics? The author is not condemning. He is urging maturation. Exercise your spiritual senses. Study deeply. Press toward the meat of God&apos;s word. Grow.',
        },
        {
          kind: 'reflection',
          id: 'heb5-mature-faith",
          prompt: 'Where are you still a babe in your faith? What would help you mature? What deeper truths are you avoiding?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'So also Christ glorified not himself to be made an high priest; but he that said unto him, Thou art a priest for ever after the order of Melchisedec. Though he were a Son, yet learned he obedience by the things which he suffered.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 5 · Study Guide',
  },

  hasHebrew: false,
};
