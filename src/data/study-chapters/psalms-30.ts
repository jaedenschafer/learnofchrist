import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 30 — From Mourning to Joy
 *
 * "Weeping may endure for a night, but joy cometh in the morning." This beloved
 * promise appears at the heart of a psalm about recovery, about being lifted from
 * the depths of despair. "Thou hast turned for me my mourning into dancing; thou
 * hast put off my sackcloth, and girded me with gladness." The psalm moves from
 * exultation through illness and prayer to restoration. For Christians, this
 * transformation is ultimately fulfilled in the resurrection, where Christ&apos;s
 * death becomes the doorway to eternal joy.
 */
export const PSALMS_30: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 30,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 30 is titled "A Psalm and Song at the dedication of the house of David." It is a psalm of thanksgiving for deliverance from sickness or distress. What makes it resonate across the centuries is not the specific circumstance, but the universal experience it captures: the night of suffering, the morning of recovery, the transformation of mourning into joy. The psalm teaches that suffering is not meaningless—it is the prelude to restoration.',
  ],

  sections: [
    {
      ref: 'Psalm 30:1–12',
      title: 'From the Pit to the Heights',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(1, 'I will extol thee, O Lord; for thou hast lifted me up, and hast not made my foes to rejoice over me.'),
            plain(2, 'O Lord my God, I cried unto thee, and thou hast healed me.'),
            plain(3, 'O Lord, thou hast brought up my soul from the grave: thou hast kept me alive, that I should not go down to the pit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-30-78mid-1',
          html:
            'From exaltation to recognition of danger passed. Weeping gives way to joy, but the pivot is memory: what you endured, you survived.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(4, 'Sing, O ye saints of the Lord, and give thanks at the remembrance of his holiness.'),
            plain(5, 'For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning.'),
            plain(6, 'And in my prosperity I said, I shall never be moved: thou, Lord, by thy favour, hadst made my mountain to stand strong.'),
            plain(7, 'Thou didst hide thy face, and I was troubled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms30-mid-hide',
          html:
            'The psalmist has celebrated restoration. But now the other story emerges—how we got here. There was a moment when God hid His face. The mountain fell. Prosperity became sickness. The next verses are not complaint but prayer, the turning from despair back to faith.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(8, 'I cried to thee, O Lord; and unto the Lord I made my supplication.'),
            plain(9, 'What profit is there in my blood, when I go down to the pit? Shall the dust praise thee? shall it declare thy truth?'),
            plain(10, 'Hear, O Lord, and have mercy upon me: Lord, be thou my helper.'),
            plain(11, 'Thou hast turned for me my mourning into dancing: thou hast put off my sackcloth, and girded me with gladness;'),
            plain(12, 'To the end that my glory may sing praise to thee, and not be silent. O Lord my God, I will give thanks unto thee for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms30-lifted-up',
          html: 'The psalm opens with exultation: "I will extol thee, O Lord; for thou hast lifted me up." The speaker has been brought out of depths and restored to heights. And the first instinct is not to boast of his own recovery, but to praise God. His enemies hoped to see him fall. Instead, God has lifted him up, and so they are disappointed.',
        },
        {
          kind: 'hebrew',
          id: 'psalms30-joy-morning',
          title: 'Boker — "Morning" (New Day)',
          script: 'בֹקֶר',
          translit: '<strong>Boker</strong> · morning; dawn; new beginning; the light that follows darkness',
          description: 'The Hebrew word boker refers literally to the morning, but carries metaphorical weight throughout Scripture. Morning is the time when darkness gives way to light, when the night of trouble ends. When the psalmist promises that "joy cometh in the morning," he is speaking not merely of a new day, but of a fundamental transformation from darkness to light.',
        },
        {
          kind: 'commentary',
          id: 'psalms30-hidden-face',
          html: 'A confession of weakness follows: "Thou didst hide thy face, and I was troubled." In times of health and prosperity, the psalmist thought he would never be moved. But when God hid His face—when the sense of His presence departed—trouble came. This teaches an honest truth: our stability rests not on our own strength, but on our connection with God.',
        },
        {
          kind: 'commentary',
          id: 'psalms30-blood-dust',
          html: 'A desperate prayer follows: "What profit is there in my blood, when I go down to the pit?" The psalmist argues, in a sense, with God. To be dead and forgotten serves no one. The dead cannot praise God. Only the living can. Therefore, let me live. Let me recover that I might sing Your praises.',
        },
        {
          kind: 'christ',
          id: 'psalms30-christ-resurrection',
          title: 'Christ Connection — Resurrection Morning',
          html: 'Christ descended into death, into the pit, into the depths. Yet God raised Him up on the third day. His mourning—the anguish of the Cross—was turned into the joy of the resurrection. And in Him, all who believe are raised from spiritual death to eternal life. What the psalmist experiences as a temporary recovery, Christ achieves eternally: "Weeping may endure for a night"—the night of the Cross—"but joy cometh in the morning"—the morning of the resurrection.',
        },
        {
          kind: 'carry',
          html: 'The psalm teaches that sorrow is real, but temporary. Suffering is not meaningless—it can deepen our gratitude, intensify our prayer, and eventually become the setting for joy. The mourning that makes us strip off our garments in grief becomes the occasion for God to clothe us in gladness. And the proper response is perpetual thanksgiving.',
        },
        {
          kind: 'reflection',
          id: 'psalms30-mourning-dancing',
          prompt: 'Can you identify a time when you moved from mourning to joy? How did that transformation shape your faith? What does it mean to trust that the "morning" will come when you are currently in the "night"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Weeping may endure for a night, but joy cometh in the morning. ...Thou hast turned for me my mourning into dancing; thou hast put off my sackcloth, and girded me with gladness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 30 · Study Guide',
  },

  hasHebrew: true,
};
