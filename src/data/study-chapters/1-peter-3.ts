import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Peter 3 — Witness & Hope
 *
 * Peter addresses family relationships, calling wives and husbands to mutual respect
 * and love. He then pivots to a profound theme: believers are called to give reason
 * for the hope that is in them. This is not defensive debate but gentle, respectful
 * explanation of their faith. Finally, he speaks mysteriously of Christ preaching to
 * spirits in prison—a glimpse into the cosmic reach of Christ&apos;s redemptive work.
 */
export const FIRST_PETER_3: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 3,

  intros: [
    'Peter turns from general exhortations to specific relationships. Wives facing unbelieving or antagonistic husbands are to live in such a way that their conduct becomes its own testimony. Similarly, husbands are to honor their wives and recognize them as co-heirs of grace. These are not rules imposed from above but expressions of the gospel in the most intimate sphere of life.',
    'He then articulates a crucial calling for all believers: always be prepared to give a reason for the hope within you. Not through argument or aggressiveness, but through gentleness and respect. The believer&apos;s hope is so evident, so transformative, that others will notice and ask about it. And when they ask, we are ready to explain.',
  ],

  sections: [
    /* ─── 1 Peter 3:1–12 — Relationships ────────────────────────────── */
    {
      ref: '1 Peter 3:1–12',
      title: 'Living in Family & Community',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Likewise, ye wives, be in subjection to your own husbands; that, if any obey not the word, they also may without the word be won by the conversation of the wives;'),
            plain(3, 'Whose adorning let it not be that outward adorning of plaiting the hair, and of wearing of gold, or of putting on of apparel;'),
            plain(4, 'But let it be the hidden man of the heart, in that which is not corruptible, even the ornament of a meek and quiet spirit, which is in the sight of God of great price.'),
            plain(7, 'Likewise, ye husbands, dwell with them according to knowledge, treating your wives as the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered.'),
            plain(8, 'Finally, be ye all of one mind, having compassion one of another, love as brethren, be pitiful, be courteous:'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet3-wives',
          html:
            'Peter&apos;s message to wives is striking: if your husband does not obey the word (is not a believer), your conduct itself becomes your testimony. Without preaching, your life speaks. The transformation wrought by faith becomes visible in your demeanor, your kindness, your steadfastness. That witness may accomplish what words cannot.',
        },
        {
          kind: 'greek',
          id: '1pet3-kosmos',
          title: 'Kosmos — Adornment',
          script: 'κόσμος',
          translit: '<strong>Kosmos</strong> · adornment; beauty; ornament; the ordered arrangement',
          description:
            'Peter contrasts external adornment with inner beauty. Both matter, but the inner transformation is what gives worth. The "meek and quiet spirit" is not weakness but strength guided by humility and faith.',
        },
        {
          kind: 'commentary',
          id: '1pet3-husbands',
          html:
            'Husbands are called to understand their wives, to dwell with them according to knowledge. They are to honor them as fellow heirs of the grace of life. This is revolutionary language for the first century—women recognized as co-heirs, not possessions. The relationship affects prayer itself: lack of honor toward one&apos;s wife hinders one&apos;s prayers.',
        },
        {
          kind: 'christ',
          id: '1pet3-christ-family',
          title: 'Christ Connection — Loved As the Church',
          html:
            'Christ&apos;s love for the church is the model for love in all relationships. He gave Himself up for her. He honored her. He sees her as precious and worthy. His example transforms how believers love one another, especially in the intimacy of family.',
        },
        {
          kind: 'carry',
          html:
            'Peter then expands the call: be of one mind, compassionate, loving, pitiful, courteous. These virtues are not sentimentality but the expression of a faith that has genuinely transformed the heart. When the gospel takes root, it changes how we treat each other.',
        },
        {
          kind: 'reflection',
          id: '1pet3-family',
          prompt: 'How does the gospel shape the way you love and respect those closest to you? Where do you need transformation in your relationships?',
        },
      ],
    },

    /* ─── 1 Peter 3:13–22 — Hope & Witness ────────────────────────────── */
    {
      ref: '1 Peter 3:13–22',
      title: 'Always Ready With Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(13, 'And who is he that will harm you, if ye be followers of that which is good?'),
            plain(14, 'But and if ye suffer for righteousness&apos; sake, happy are ye: and be not afraid of their terror, neither be troubled;'),
            plain(15, 'But sanctify the Lord God in your hearts: and be ye always ready to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear;'),
            plain(18, 'For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God, being put to death in the flesh, but quickened by the Spirit:'),
            plain(21, 'The like figure whereunto even baptism doth also now save us (not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ;'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet3-suffer',
          html:
            'Peter addresses those who suffer for righteousness. You may face hostility, rejection, even persecution. But he calls this "happy"—not because the suffering is pleasant, but because in it your faith is refined and your reward is sure. You are counted worthy to suffer for Christ&apos;s sake.',
        },
        {
          kind: 'greek',
          id: '1pet3-apologia',
          title: 'Apologia — Defense',
          script: 'ἀπολογία',
          translit: '<strong>Apologia</strong> · defense; answer; reasoned explanation',
          description:
            'An apologia is not an apology in the modern sense, but a reasoned defense of a position. Peter calls believers to always be ready with a reasoned account of their hope. This is education and readiness, not aggression.',
        },
        {
          kind: 'commentary',
          id: '1pet3-reason-hope',
          html:
            'The call to give reason for your hope is remarkable. People will notice your transformation. They will see that you face hardship differently than others. Your hope stands out. When they ask why, you are to be ready. Not with arguments meant to win, but with a gentle, respectful explanation of what Christ has done for you and the hope you have in Him.',
        },
        {
          kind: 'christ',
          id: '1pet3-christ-resurrection',
          title: 'Christ Connection — The Just for the Unjust',
          html:
            'Christ suffered once for sins—the just for the unjust. He did not deserve the suffering He endured, yet He endured it for us. Through His death and resurrection, He opens the way for us to approach God. Our hope is anchored in His redemptive work and His exaltation.',
        },
        {
          kind: 'carry',
          html:
            'Peter mentions baptism—not as a magical rite but as the answer of a good conscience toward God. It is the visible expression of an internal transformation. When you confess Christ, when you are baptized, when you publicly commit to following Him, you are saying that His resurrection is the reality on which you now build your life.',
        },
        {
          kind: 'reflection',
          id: '1pet3-hope',
          prompt: 'Why do you hope? Can you articulate the reason for your faith in a way that others might understand and be touched by?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The ornament of a meek and quiet spirit is of great price in the sight of God. Be ye always ready to give an answer to every man that asketh you a reason of the hope that is in you. Christ also hath once suffered for sins, the just for the unjust.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 3 · Study Guide',
  },

  hasHebrew: false,
};
