import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 120 — A Cry for Deliverance from Deceit
 *
 * "In my distress I cried unto the Lord, and he heard me."
 * A song of ascents: the first in the series (Psalms 120–134) sung by pilgrims
 * traveling to the temple. "I am for peace: but when I speak, they are for war."
 * The psalmist dwells among those who use words as weapons, who speak lies.
 * Christ connection: the peacemaker among warmongers; Christ's words bring peace
 * where human words bring only conflict.
 */
export const PSALMS_120: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 120,

  intros: [
    'Psalm 120 opens the Songs of Ascents—fifteen psalms (120–134) traditionally sung by pilgrims climbing toward the temple in Jerusalem. But this first song is not a song of joy or arrival. It is a lament of displacement, of living among those who pervert language, who use words to wound. "I am for peace: but when I speak, they are for war." The psalmist has offered words of peace, and they have been met with hostility. He dwells in Meshech and Kedar—distant, foreign lands, symbolic of exile from the place of God. Yet his distress becomes his prayer, and his prayer becomes his testimony that God hears.',
  ],

  sections: [
    {
      ref: 'Psalm 120:1–7',
      title: 'Among Deceivers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 120,
          lines: [
            plain(1, 'In my distress I cried unto the Lord, and he heard me.'),
            plain(2, 'Deliver me, O Lord, from lying lips, and from a deceitful tongue.'),
            plain(3, 'What shall be given unto thee? or what shall be done unto thee, thou false tongue?'),
            plain(4, 'Sharp arrows of the mighty, with coals of juniper.'),
            plain(6, 'My soul hath long dwelt with him that hateth peace.'),
            plain(7, 'I am for peace: but when I speak, they are for war.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps120-lying',
          html:
            'The psalmist&apos;s distress is not physical danger, but linguistic betrayal. He cries for deliverance from "lying lips" and a "deceitful tongue." Words are his torment. In a world where language should be the bridge between souls, connecting in truth and understanding, he finds himself surrounded by those who use words as weapons, who twist meaning, who speak falsehood.',
        },
        {
          kind: 'commentary',
          id: 'ps120-arrows',
          html:
            'The image of sharp arrows and coals of juniper describes the damage wrought by a false tongue. Words fly from the mouth as arrows fly from a bow. They wound. They burn. They cannot be taken back. The false tongue, the lying lips, are mighty weapons—perhaps more destructive than physical weapons, because they wound the truth itself.',
        },
        {
          kind: 'commentary',
          id: 'ps120-peace',
          html:
            'And the final lament: "My soul hath long dwelt with him that hateth peace. I am for peace: but when I speak, they are for war." The psalmist has positioned himself for reconciliation. He speaks words of peace. He seeks understanding. Yet those around him are not interested. They respond to peace with war, to gentleness with hostility. He dwells among those antithetical to peace itself.',
        },
        {
          kind: 'christ',
          id: 'ps120-christ-peace',
          title: 'Christ Connection — The Peacemaker',
          html:
            'Christ came speaking peace—"Peace I leave with you, my peace I give unto you" (John 14:27). Yet He too was met with hostility. The religious establishment, the political powers, used words and lies to turn the crowds against Him. He offered words of life and truth. He was answered with crucifixion. Yet His death and resurrection became the instrument through which peace—reconciliation between humanity and God—was secured. The false words that sought to destroy Him were overcome by His resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 120 speaks to anyone who has chosen the way of peace only to be met with conflict. Anyone who has offered truth and been answered with lies. Anyone who lives among those who use words to wound rather than heal. The psalm does not tell you to stop speaking truth, nor to respond to hostility with hostility. It tells you to cry unto the Lord. To recognize that your distress is heard. That you are not abandoned among the liars and the violent.',
        },
        {
          kind: 'reflection',
          id: 'ps120-words',
          prompt:
            'What is the difference between words that build peace and words that wage war? In your own speech, do you use words as weapons or as builders? When you encounter deceit or hostility, how do you respond? How might bringing your distress to God change your approach?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In my distress I cried unto the Lord, and he heard me. I am for peace: but when I speak, they are for war.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 120 · Study Guide',
  },
};
