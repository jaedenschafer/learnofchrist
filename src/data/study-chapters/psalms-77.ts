import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 77 — Remembering in Darkness
 *
 * "I cried unto God with my voice...Will the Lord cast off for ever?" The
 * psalmist is in darkness, crying out, seeming to receive no answer. Yet as
 * the psalm unfolds, he does the one thing he can do: he remembers. He recalls
 * the years of God&apos;s faithfulness, and in remembering, his perspective
 * shifts. The present darkness is held within the larger context of God&apos;s
 * ancient goodness.
 */
export const PSALMS_77: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 77,

  estimatedMinutes: { 5: 2, 10: 4, 15: 5 },
  intros: [
    'Psalm 77 opens in darkness. The psalmist cries to God and finds no consolation. His soul refuses comfort. He remembers God, and yet the memory brings not peace, but turmoil. "Will the Lord cast off for ever? will he be favourable no more?" The psalm describes the experience of pressing into prayer and finding only silence, of seeking comfort and finding only more darkness.',
    'Yet something remarkable happens. The psalmist does not give up on memory. Instead, he goes deeper into it. He begins to meditate on "the years of the right hand of the most High." He calls to mind not his recent experience, but the entire sweep of God&apos;s faithfulness stretching back through history. And in remembering the past, his perspective on the present begins to shift. This is a psalm about the power of memory, not as nostalgia, but as a spiritual discipline that holds us steady when the present seems to offer nothing but darkness.',
  ],

  sections: [
    {
      ref: 'Psalm 77:1–9',
      title: 'The Cry Unanswered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 77,
          lines: [
            plain(1, 'I cried unto God with my voice, even unto God with my voice; and he gave ear unto me.'),
            plain(2, 'In the day of my trouble I sought the Lord: my sore ran in the night, and ceased not: my soul refused to be comforted.'),
            plain(3, 'I remembered God, and was troubled: I complained, and my spirit was overwhelmed.'),
            plain(7, 'Will the Lord cast off for ever? and will he be favourable no more?'),
            plain(8, 'Is his mercy clean gone for ever? doth his promise fail for evermore?'),
            plain(9, 'Hath God forgotten to be gracious? hath he in anger shut up his tender mercies?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms77-cried',
          html:
            'The psalm opens with a cry, repeated for emphasis: "I cried unto God with my voice, even unto God with my voice." The repetition itself expresses desperation. He has cried and cried. And yet the very first verse says God gave ear to him. And yet in verse 2, the psalmist says his soul refused to be comforted. God may be listening, but the psalmist cannot feel that listening. He cannot receive consolation.',
        },
        {
          kind: 'hebrew',
          id: 'psalms77-maasach',
          title: 'Maasach — "Refuse" (Reject)',
          script: 'מָאַס',
          translit: '<strong>Maasach</strong> · refuse, reject, disdain',
          description:
            'The Hebrew word maasach speaks of active refusal. The psalmist&apos;s soul does not passively lack comfort. It actively refuses it. This is the word of someone who is pushing away any attempt at consolation, wrestling even with grace itself.',
        },
        {
          kind: 'commentary',
          id: 'psalms77-questions',
          html:
            'The psalm then moves into a barrage of questions, each one more despairing than the last. "Will the Lord cast off for ever? Will he be favourable no more? Is his mercy clean gone for ever? Doth his promise fail?" Each question is a step deeper into doubt. The psalmist is not asking genuine questions seeking genuine answers. He is expressing the experience of darkness in the only language available to him.',
        },
        {
          kind: 'christ',
          id: 'psalms77-christ-darkness',
          title: 'Christ Connection — The Cry of Abandonment',
          html:
            'On the Cross, Jesus cried out: "My God, my God, why hast thou forsaken me?" He knew the experience of crying out and seeming to receive no answer. He knew the darkness of feeling abandoned. Yet His cry was not the final word. His resurrection was the answer that came after the silence. Trust through darkness is a pattern written into the very heart of the Gospel.',
        },
        {
          kind: 'carry',
          html:
            'If you are crying out and receiving no consolation, if your soul is refusing comfort, you are not alone in that experience. The psalm gives you permission to cry, to question, to express the darkness without pretense. But the psalm also suggests that there is a path forward—not through denying the darkness, but through moving deeper into memory.',
        },
        {
          kind: 'reflection',
          id: 'psalms77-cry-silence',
          prompt: 'Have you experienced a time when God seemed silent despite your cries? What did that silence feel like?',
        },
      ],
    },

    {
      ref: 'Psalm 77:10–20',
      title: 'Remembering the Past',
      blocks: [
        {
          kind: 'scripture',
          chapter: 77,
          lines: [
            plain(10, 'And I said, This is my infirmity: but I will remember the years of the right hand of the most High.'),
            plain(11, 'I will remember the works of the Lord: surely I will remember thy wonders of old.'),
            plain(14, 'Thy way, O God, is in the sanctuary: who is so great a God as our God?'),
            plain(15, 'Thou art the God that doest wonders: thou hast declared thy strength among the people.'),
            plain(16, 'Thou hast with thine arm redeemed thy people, the sons of Jacob and Joseph.'),
            plain(19, 'Thy way is in the sea, and thy path in the great waters, and thy footsteps are not known.'),
            plain(20, 'Thou leddest thy people like a flock by the hand of Moses and Aaron.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms77-infirmity',
          html:
            'Suddenly, the psalmist stops. He names what is happening: "This is my infirmity." He recognizes that his despair, his questioning, his refusal of comfort—these are symptoms of a condition, a weakness, a spiritual infirmity. And in that recognition comes a shift. He does not try to overcome his infirmity through willpower. He does the one thing he can do: he remembers.',
        },
        {
          kind: 'commentary',
          id: 'psalms77-remember',
          html:
            '"I will remember the years of the right hand of the most High." He does not remember recent events. He remembers the sweep of history, the long arc of God&apos;s faithfulness. He brings to mind the Exodus, the Red Sea, the wilderness wanderings, the leadership of Moses and Aaron. He is remembering a story larger than his own personal darkness.',
        },
        {
          kind: 'commentary',
          id: 'psalms77-way',
          html:
            'And as he remembers, a strange thing happens. "Thy way, O God, is in the sanctuary...Thy way is in the sea, and thy path in the great waters, and thy footsteps are not known." God&apos;s way is hidden. His path cannot be traced. His footsteps cannot be known. Yet He is guiding His people. He is leading them like a flock. The mystery is not resolved. But it is held within the larger reality of God&apos;s faithfulness.',
        },
        {
          kind: 'christ',
          id: 'psalms77-christ-guides',
          title: 'Christ Connection — The Shepherd',
          html:
            'Jesus is the Good Shepherd who leads His flock into green pastures. He knows the way through every wilderness. His path may not be visible to us, but He is not lost, and neither are we. The Church remembers not only the ancient works of God, but also the work of Christ—His life, death, and resurrection. This memory is not merely nostalgia. It is the foundation upon which present faith rests.',
        },
        {
          kind: 'carry',
          html:
            'When you are in darkness and cannot see the way forward, the discipline of remembering can restore perspective. Remember what God has done. Remember how He has guided others through wilderness. Remember that His path is hidden, but His hand is sure. Let the memory of God&apos;s faithfulness hold you steady in the darkness.',
        },
        {
          kind: 'reflection',
          id: 'psalms77-remember-faithfulness',
          prompt: 'What works of God can you remember from your own history or from biblical history? How might remembering these shift your perspective on your current darkness?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I cried unto God with my voice...I will remember the works of the Lord: surely I will remember thy wonders of old.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 77 · Study Guide',
  },

  hasHebrew: true,
};
