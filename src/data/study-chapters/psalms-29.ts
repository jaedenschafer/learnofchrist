import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 29 — The Voice of the Lord
 *
 * "The voice of the Lord is upon the waters." This psalm rings with the power
 * of God&apos;s creative word. The psalmist repeats the phrase "the voice of the
 * Lord" seven times, creating a cadence that echoes God&apos;s speaking over the
 * creation account. Lightning flashes. Thunder rolls. Forests are broken. And
 * through it all, one refrain: "the Lord sitteth upon the flood." Christ is that
 * Voice, the Word by whom all things were made and through whom all things are
 * sustained.
 */
export const PSALMS_29: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 29,

  intros: [
    'Psalm 29 is a song of nature as the manifestation of God&apos;s power. But it is not merely nature poetry. It is a proclamation of God&apos;s voice. The psalm opens with a call to the sons of the mighty to ascribe glory to God, and then describes the power of His voice as it moves through creation like a storm. The voice that shook Mount Sinai, the voice that stilled the sea, the voice that will one day call the dead from their graves—this is the subject of the psalm.',
  ],

  sections: [
    {
      ref: 'Psalm 29:1–11',
      title: 'The Sevenfold Voice of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            plain(1, 'Give unto the Lord, O ye mighty, give unto the Lord glory and strength.'),
            plain(2, 'Give unto the Lord the glory due unto his name; worship the Lord in the beauty of holiness.'),
            plain(3, 'The voice of the Lord is upon the waters: the God of glory thundereth: the Lord is upon many waters.'),
            plain(4, 'The voice of the Lord is powerful; the voice of the Lord is full of majesty.'),
            plain(5, 'The voice of the Lord breaketh the cedars; yea, the Lord breaketh the cedars of Lebanon.'),
            plain(6, 'He maketh them also to skip like a calf; Lebanon and Sirion like a young unicorn.'),
            plain(7, 'The voice of the Lord divideth the flames of fire.'),
            plain(8, 'The voice of the Lord shaketh the wilderness; the Lord shaketh the wilderness of Kadesh.'),
            plain(9, 'The voice of the Lord maketh the hinds to calve, and discovereth the forests: and in his temple doth every one speak of his glory.'),
            plain(10, 'The Lord sitteth upon the flood; yea, the Lord sitteth King for ever.'),
            plain(11, 'The Lord will give strength unto his people; the Lord will bless his people with peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms29-give-glory',
          html: 'The psalm opens with a command to worship: "Give unto the Lord...glory and strength." These are not God&apos;s to claim merely because He has demanded them. They are "due unto his name." They are the appropriate response to who He is. And they are to be given in worship, "in the beauty of holiness"—with reverence, with awe, with the recognition of His sacred nature.',
        },
        {
          kind: 'hebrew',
          id: 'psalms29-kol',
          title: 'Kol — "Voice" (Sound; Word)',
          script: 'קוֹל',
          translit: '<strong>Kol</strong> · voice; sound; word; utterance',
          description: 'The Hebrew word kol refers to both the audible sound of God&apos;s voice and the efficacious power of His word. When God speaks, creation responds. "In the beginning was the Word" (John 1:1), and that Word brings all things into being. The voice of the Lord is not mere sound—it is the creative, sustaining power of God.',
        },
        {
          kind: 'commentary',
          id: 'psalms29-voice-sevenfold',
          html: 'The psalmist repeats "the voice of the Lord" seven times—a number symbolizing completeness, perfection, the full sweep of God&apos;s power. The voice is upon the waters. It thunders. It is powerful. It breaks cedars. It divides fire. It shakes the wilderness. It makes the hinds to calve. Each image conveys the total sovereignty of God over creation.',
        },
        {
          kind: 'commentary',
          id: 'psalms29-flood-king',
          html: 'Then comes the climax: "The Lord sitteth upon the flood; yea, the Lord sitteth King for ever." The flood—that great chaos that threatened to destroy creation in Noah&apos;s time—God sits upon it. It does not drown Him. He reigns above it. He is King eternal, undefeated, unthreatened.',
        },
        {
          kind: 'christ',
          id: 'psalms29-christ-voice-word',
          title: 'Christ Connection — The Word Made Flesh',
          html: 'John 1:1–3 reveals Christ as the Word: "In the beginning was the Word, and the Word was with God, and the Word was God. All things were made by him." The voice of the Lord that breaks cedars, divides fire, and shakes the wilderness—this is the voice of Christ. And that same Word became flesh and dwelt among us. He stilled the waters (Mark 4:39), showing dominion over creation. At His baptism, the voice of God spoke from heaven (Matthew 3:17), and later He will call the dead from their graves (John 5:25).',
        },
        {
          kind: 'carry',
          html: 'To recognize God&apos;s voice—in nature, in His word, in the still small voice within—is to recognize the power and majesty at work in the universe and in our own lives. The God who thunders over the mountains and speaks to the depths also speaks to you. His voice is powerful and full of majesty. Will you listen?',
        },
        {
          kind: 'reflection',
          id: 'psalms29-voice-listen',
          prompt: 'Where do you most clearly hear God&apos;s voice? Is it in nature, in Scripture, in prayer, in others? What would it mean to listen more intently, to align your life with the power and majesty of His voice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The voice of the Lord is upon the waters: the God of glory thundereth. ...The Lord sitteth upon the flood; yea, the Lord sitteth King for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 29 · Study Guide',
  },

  hasHebrew: true,
};
