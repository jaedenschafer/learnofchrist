import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 90 — Moses&apos;s Prayer
 *
 * This is the only psalm attributed to Moses, and it is a meditation on time,
 * mortality, and God&apos;s eternity. "Lord, thou hast been our dwelling place
 * in all generations." A thousand years in God&apos;s sight are but a day, a
 * watch in the night. We are consumed by God&apos;s anger, troubled by His
 * knowledge. Yet the prayer concludes with a request: "And let the beauty of
 * the Lord our God be upon us: and establish thou the work of our hands upon
 * us; yea, the work of our hands establish thou it." In God&apos;s eternal
 * presence, human work becomes meaningful.
 */
export const PSALMS_90: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 90,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  intros: [
    'Psalm 90 is Moses&apos;s prayer, and it stands at the gateway to the Psalms of ascent. It is a prayer about human finitude and divine eternity. Moses has watched a generation pass away in the wilderness. He understands mortality. He understands the brevity of human life. And yet he also understands God&apos;s steadfastness across all generations. The psalm does not deny death. Instead, it finds meaning within the shadow of death—the meaning that comes from being known by God, sustained by God, used by God.',
  ],

  sections: [
    {
      ref: 'Psalm 90:1–12',
      title: 'The Brevity of Life and the Eternity of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 90,
          lines: [
            plain(1, 'Lord, thou hast been our dwelling place in all generations.'),
            plain(2, 'Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.'),
            plain(3, 'Thou turnest man to destruction; and sayest, Return, ye children of men.'),
            plain(4, 'For a thousand years in thy sight are but as yesterday when it is past, and as a watch in the night.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-90-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 90,
          lines: [
            plain(5, 'Thou carriest them away as with a flood; they are as a sleep: in the morning they are like grass which groweth up.'),
            plain(6, 'In the morning it flourisheth, and groweth up; in the evening it is cut down, and withereth.'),
            plain(7, 'For we are consumed by thine anger, and by thy wrath are we troubled.'),
            plain(8, 'Thou hast set our iniquities before thee, our secret sins in the light of thy countenance.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps90-mid',
          html:
            'The psalm shifts from God&apos;s permanence to our perishability. Our days are consumed like smoke, but God remains. Teach us, Moses prays, to number our days—to live aware of death so we might live wise.',
        },
        {
          kind: 'scripture',
          chapter: 90,
          lines: [
            plain(9, 'For all our days are passed away in thy wrath: we spend our years as a tale that is told.'),
            plain(10, 'The days of our years are threescore years and ten; and if by reason of strength they be fourscore years, yet is their strength labour and sorrow; for it is soon cut off, and we fly away.'),
            plain(11, 'Who knoweth the power of thine anger? even according to thy fear, so is thy wrath.'),
            plain(12, 'So teach us to number our days, that we may apply our hearts unto wisdom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps90-dwelling',
          html:
            'The psalm opens not with complaint but with gratitude. "Lord, thou hast been our dwelling place." Even as mortality presses in, even as generations pass away, God remains. He has been their home. This is the deepest security—not a place that does not change, but a Person who does not change.',
        },
        {
          kind: 'commentary',
          id: 'ps90-thousand-years',
          html:
            'To God, a thousand years are like a day. This is both comforting and humbling. It means God is not rushed. It means His plans unfold at a pace we cannot measure. It also means that the urgencies that consume our lives are measured differently in God&apos;s sight. Our days are small in the scope of eternity. And yet God attends to each one.',
        },
        {
          kind: 'hebrew',
          id: 'ps90-mispar',
          title: 'Mispar — "Number" (Count, Enumerate)',
          script: 'מִסְפַּר',
          translit: '<strong>Mispar</strong> · number; count; measure',
          description:
            'The request is "teach us to number our days." This means to count them, to be aware of them, to recognize their finite nature. To number our days is to live with awareness.',
        },
        {
          kind: 'reflection',
          id: 'ps90-days',
          prompt: 'What would change if you truly lived aware of the brevity of your days? How would that awareness shape your choices?',
        },
      ],
    },

    {
      ref: 'Psalm 90:13–17',
      title: 'Return, O Lord, and Establish Our Work',
      blocks: [
        {
          kind: 'scripture',
          chapter: 90,
          lines: [
            plain(13, 'Return, O Lord: how long? and let it repent thee concerning thy servants.'),
            plain(14, 'O satisfy us early with thy mercy; that we may rejoice and be glad all our days.'),
            plain(15, 'Make us glad according to the days wherein thou hast afflicted us, and the years wherein we have seen evil.'),
            plain(16, 'Let thy work appear unto thy servants, and thy glory unto their children.'),
            plain(17, 'And let the beauty of the Lord our God be upon us: and establish thou the work of our hands upon us; yea, the work of our hands establish thou it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps90-return',
          html:
            'Having faced the reality of mortality and God&apos;s wrath, the psalm turns to petition. "Return, O Lord." The request is not for life to be extended, for death to be avoided. The request is for God Himself to return, to be present, to satisfy the psalmist with His mercy in the midst of short days.',
        },
        {
          kind: 'commentary',
          id: 'ps90-work',
          html:
            'The final plea is stunning: "Establish thou the work of our hands." The days are few. Labor is hard. But if God establishes the work, if God gives it permanence, then it means something. The human work that seems insignificant in the face of eternity becomes significant when it is endorsed and established by God.',
        },
        {
          kind: 'christ',
          id: 'ps90-christ-eternal',
          title: 'Christ Connection — The Eternal Home',
          html:
            'In John 14:2, Jesus says, "In my Father&apos;s house are many mansions...I go to prepare a place for you." Christ is the ultimate fulfillment of the dwelling place Moses names. He is the home where we are secure. And in Him, our mortal days gain eternal significance.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 90 teaches that the knowledge of our mortality is not a cause for despair but for wisdom. When we count our days, when we recognize how few they are, we are freed to spend them on what truly matters. Ask God to establish your work, to make it significant, to connect it to His eternal purposes.',
        },
        {
          kind: 'reflection',
          id: 'ps90-establish',
          prompt: 'What work is God calling you to do? What would it look like for Him to establish that work, to make it endure beyond the few days you have?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, thou hast been our dwelling place in all generations. So teach us to number our days, that we may apply our hearts unto wisdom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 90 · Study Guide',
  },

  hasHebrew: true,
};
