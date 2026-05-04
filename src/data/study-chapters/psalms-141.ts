import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 141 — Prayer as Incense
 *
 * "Let my prayer be set forth before thee as incense." The psalmist offers his
 * prayer like the incense that rises in the temple, a sweet fragrance before God.
 * This is a meditation on prayer itself—its nature, its power, its fragrance. The
 * psalmist prays for protection from the desires of evil, for deliverance from
 * the snares of wickedness. And he trusts that this prayer, ascending like
 * incense, rises to God and is heard, honored, accepted.
 */
export const PSALMS_141: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 141,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  opener: {
    matchTitle: /Harley Psalter fol r/i,
    caption: 'Psalms 141',
  },
  intros: [
    'Psalm 141 is a meditation on prayer—its beauty, its power, its acceptance before God. The image of prayer as incense connects the private, inner act of petition with the public, visible worship of the temple. When incense burned on the temple altar, the smoke rose visibly, carrying with it the prayers and desires of the people. To offer prayer "as incense" is to recognize that prayer is not merely internal. It rises. It is visible to God. It is accepted as a sweet offering. The psalm is David&apos;s song of prayer itself, even as he prays for protection from temptation and evil.',
  ],

  sections: [
    {
      ref: 'Psalm 141:1–4',
      title: 'Prayer as Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 141,
          lines: [
            plain(1, 'Lord, I cry unto thee: make haste unto me; give ear unto my voice, when I cry unto thee.'),
            plain(2, 'Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice.'),
            plain(3, 'Set a watch, O Lord, before my mouth: keep the door of my lips.'),
            plain(4, 'Incline not my heart to any evil thing, to practise wicked works with men that work iniquity: and let me not eat of their dainties.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm141-cry',
          html:
            '"Lord, I cry unto thee: make haste unto me; give ear unto my voice, when I cry unto thee." The psalmist begins with urgency. He cries. He asks God to hear quickly. Not as if God is slow or reluctant, but to express the intensity of need. And the attention to God&apos;s hearing—"give ear unto my voice"—suggests that being heard matters deeply. [res:sefaria-psalm-141]',
        },
        {
          kind: 'hebrew',
          id: 'psalm141-qetoret',
          title: 'Qetoret — "Incense" (Sweet Fragrance)',
          script: 'קְטֹרֶת',
          translit: '<strong>Qetoret</strong> · incense, the fragrant offering burned on the altar in the temple',
          description:
            'Qetoret refers to the fragrant compound burned daily on the altar of incense in the temple. It rose as a sweet fragrance toward heaven. When the psalmist asks that his prayer be set forth "as incense," he is invoking the imagery of worship, of offering, of something rising toward God and being accepted.',
        },
        {
          kind: 'commentary',
          id: 'psalm141-incense',
          html:
            '"Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice." The image is two-fold: prayer as incense, and the lifting up of hands as the evening sacrifice. Both are visible, tangible acts of worship. Both ascend toward God. The evening sacrifice was the second daily sacrifice, offered as the sun declined. It was a public, communal act of devotion. The psalmist wants his prayer to have this quality—visible, lifted, accepted, a sweet fragrance in God&apos;s sight[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'commentary',
          id: 'psalm141-watch-mouth',
          html:
            '"Set a watch, O Lord, before my mouth: keep the door of my lips." Immediately following this image of beautiful prayer rising like incense, the psalmist asks God to guard his mouth. Not all speech is incense. Much speech is foolish, deceptive, harmful. The psalmist knows the danger of his own tongue and asks God to keep it under guard.',
        },
        {
          kind: 'commentary',
          id: 'psalm141-incline-not',
          html:
            '"Incline not my heart to any evil thing, to practise wicked works with men that work iniquity." The prayer extends deeper: guard not just my words, but my desires. Do not let my heart be inclined toward evil. Do not let me fall into the company of those who work iniquity. Do not let me be seduced by "their dainties"—the pleasures and enticements of wicked company.',
        },
        {
          kind: 'carry',
          html:
            'The email pings—a message that stings, a comment designed to wound. The first reflex is to fire back, to set the record straight, to defend yourself in detail. But between the impulse and the send button, there&apos;s a door. That&apos;s where this psalm lives. Draft the reply if you must, but don&apos;t press send. Let it sit overnight. Watch the door of your lips—not forever, but long enough for the heat to pass. And you&apos;ll find that half the things you wanted to say no longer need saying.',
        },
      ],
    },

    {
      ref: 'Psalm 141:5–10',
      title: 'Correction and Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 141,
          lines: [
            plain(5, 'Let the righteous smite me; it shall be a kindness: and let him reprove me; it shall be an excellent oil upon my head: let not my head refuse it: for yet my prayer also shall be in their calamities.'),
            plain(6, 'When their judges are overthrown in stony places, they shall hear my words; for they are sweet.'),
            plain(7, 'Our bones are scattered at the grave&apos;s mouth, as when one cutteth and cleaveth wood upon the earth.'),
            plain(8, 'But mine eyes are unto thee, O God the Lord: in thee is my trust; leave not my soul destitute.'),
            plain(9, 'Keep me from the snares which they have laid for me, and the gins of the workers of iniquity.'),
            plain(10, 'Let the wicked fall into their own nets, whilst that I withal escape.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm141-smite-reprove',
          html:
            '"Let the righteous smite me; it shall be a kindness: and let him reprove me; it shall be an excellent oil upon my head." This is a striking statement. The psalmist welcomes correction from the righteous. To be struck or reproved by those who walk rightly is a kindness, an excellent oil—a healing balm. Correction from the righteous is grace. This stands in contrast to the company of the wicked, whose false friendship is a snare.',
        },
        {
          kind: 'commentary',
          id: 'psalm141-scatter',
          html:
            '"Our bones are scattered at the grave&apos;s mouth, as when one cutteth and cleaveth wood upon the earth." The image shifts to violence and death. The psalmist or his community faces real danger. Their bones are at the grave&apos;s mouth. Wood is split and scattered. Yet in the midst of this danger, the psalmist does not despair.',
        },
        {
          kind: 'commentary',
          id: 'psalm141-eyes-unto',
          html:
            '"But mine eyes are unto thee, O God the Lord: in thee is my trust; leave not my soul destitute." Despite danger, despite the scattering of bones, the psalmist fixes his eyes on God. His trust is in God alone. And he appeals: do not leave my soul destitute. Do not abandon me in this peril.',
        },
        {
          kind: 'christ',
          id: 'psalm141-christ-intercession',
          title: 'Christ Connection — Prayer as Incense in Heaven',
          html:
            'In Revelation 5:8, John writes: "The four living creatures and the twenty-four elders fell before the Lamb, each holding a harp and golden bowls full of incense, which are the prayers of the saints." In heaven, the prayers of believers rise as incense before the throne. Christ intercedes for us, and our prayers, joined with His intercession, ascend as a sweet fragrance before the Father. This is the fulfillment of the psalmist&apos;s image. [res:bible-odyssey-psalm-141]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 141 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-141',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 141 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.141',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-141',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 141 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+141',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },

  ],

  hasHebrew: true,
};
