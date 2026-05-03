import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 39 — The Brevity of Life
 *
 * "I will take heed to my ways, that I sin not with my tongue." David
 * resolves silence in the face of the wicked. But then a greater truth breaks
 * through: "Lord, make me to know mine end, and the measure of my days; what
 * it is." The psalm is a meditation on human mortality and the call to use
 * one&apos;s days well. "Redeem the time," Paul will later echo. A call to
 * consider our end so that we may live truly.
 */
export const PSALMS_39: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 39,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 39 begins with a resolve: David will keep silence, will guard his tongue, so that he does not sin through rash speech. He sees the wicked prospering and feels the pressure to speak, to protest, to justify. But he holds his tongue. Yet in that silence, something awakens in him—a deeper awareness. He begins to contemplate not the wicked&apos;s success, but the fundamental reality that has been staring him in the face all along: mortality. "Lord, make me to know mine end." Life is not endlessly long. It is a span. A measured thing. And what will he do with the days that remain?',
    'This is not morbid fear. This is clarity. The psalmist looks at the brevity of life—as a hand&apos;s breadth, as nothing—and instead of despairing, he asks God to make him wise. To show him that his days matter. That how he spends them matters. That the time he has, however little, is precious and should not be wasted on bitterness about what he cannot control.',
  ],

  sections: [
    {
      ref: 'Psalm 39:1–6',
      title: 'Silence and Mortality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(1, 'I said, I will take heed to my ways, that I sin not with my tongue: I will keep my mouth with a bridle, while the wicked is before me.'),
            plain(2, 'I was dumb with silence, I held my peace, even from good; and my sorrow was stirred.'),
            plain(3, 'My heart was hot within me, while I was musing the fire burned: then spake I with my tongue,'),
            plain(4, 'Lord, make me to know mine end, and the measure of my days; what it is; that I may know how frail I am.'),
            plain(5, 'Behold, thou hast made my days as an handbreadth; and mine age is as nothing before thee: verily every man at his best state is altogether vanity.'),
            plain(6, 'Surely every man walketh in a vain shew: surely they are disquieted in vain: he heapeth up riches, and knoweth not who shall gather them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms39-silence',
          html:
            'David binds his tongue with intention—but not to achieve peace. His sorrow is stirred. His heart burns hot. The silence is not a solution to his pain; it is a condition he holds in hope that it will prevent him from making things worse. Yet even this disciplined silence erupts. The pressure builds. "Then spake I with my tongue"—as if unable to remain quiet, unable to contain the fire within.',
        },
        {
          kind: 'hebrew',
          id: 'psalms39-regel',
          title: 'Regel — "Ways" / "Path"',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derekh</strong> · way; path; journey; manner of living',
          description:
            'David resolves to "take heed to his ways"—derekh. This is not abstract morality but the actual path his life is taking, the direction of his steps, the manner in which he is journeying. He wants to be careful about the path his life traces, especially so that he does not stumble through hasty, angry speech.',
        },
        {
          kind: 'commentary',
          id: 'psalms39-musing',
          html:
            'In the silence, something shifts. David stops thinking about the wicked and begins thinking about existence itself. "While I was musing the fire burned." Meditation—the turning over of a truth in one&apos;s mind—ignites him. The truth that awakens him is this: How long do I have? What is my span? How frail am I? This question, burning in him, breaks the silence. He must speak—not in anger at the wicked, but in prayer to God.',
        },
        {
          kind: 'commentary',
          id: 'psalms39-handbreadth',
          html:
            'A handbreadth is the span from the tip of the thumb to the tip of the little finger when spread—perhaps three to four inches. In this tiny measure, David says, his entire life is contained. He is not complaining. He is seeing clearly. "My age is as nothing before thee." Before the eternal God, even a long human life is infinitesimal. Every man, he observes, is as a vain shew—a shadow, an appearance, without substance.',
        },
        {
          kind: 'reflection',
          id: 'psalms39-handbreadth-life',
          prompt: 'Can you hold the truth that your life, measured against eternity, is as a handbreadth, without falling into despair? What does that smallness make matter more?',
        },
      ],
    },

    {
      ref: 'Psalm 39:7–13',
      title: 'Hope in the Brevity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 39,
          lines: [
            plain(7, 'And now, Lord, what wait I for? my hope is in thee.'),
            plain(8, 'Deliver me from all my transgressions: make me not the reproach of the foolish.'),
            plain(9, 'I was dumb, I opened not my mouth; because thou didst it.'),
            plain(10, 'Remove thy stroke away from me: I am consumed by the blow of thine hand.'),
            plain(11, 'When thou with rebukes dost correct man for iniquity, thou makest his beauty to consume away like a moth: surely every man is vanity.'),
            plain(12, 'Hear my prayer, O Lord, and give ear unto my cry; hold not thy peace at my tears: for I am a stranger with thee, and a sojourner, as all my fathers were.'),
            plain(13, 'O spare me, that I may recover strength, before I go hence, and be no more.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms39-wait',
          html:
            'The pivot is complete. From contemplation of mortality comes clarity: "My hope is in thee." David has looked at the brevity of life and found, not despair, but hope. Why? Because brevity makes God matter. If life were endless, one might put off turning to God, might waste endless time on vanity. But knowing that time is precious, that the handbreadth is all he has, David knows where his hope must be: not in accumulation, not in answering the wicked, but in God.',
        },
        {
          kind: 'hebrew',
          id: 'psalms39-ger',
          title: 'Ger — "Stranger" / "Sojourner"',
          script: 'גֵּר',
          translit: '<strong>Ger</strong> · stranger; sojourner; guest; one passing through',
          description:
            'David calls himself a ger—a stranger with God, a sojourner. This is not alienation. It is clarity. He understands that he is not permanent in this world. He is passing through, as all his fathers before him passed through. This understanding does not weaken him. It clarifies his purpose.',
        },
        {
          kind: 'commentary',
          id: 'psalms39-rebukes',
          html:
            'God&apos;s correction consumes human beauty like a moth eats cloth—slowly, inevitably, until nothing remains. David has watched this. He knows that being rebuked by God for iniquity is not pleasant, but it is merciful. It teaches. It refocuses. And the rebuke that leads one to understand one&apos;s smallness and God&apos;s infinity is a rebuke that saves.',
        },
        {
          kind: 'commentary',
          id: 'psalms39-spare',
          html:
            'The psalm closes with a final prayer: "O spare me, that I may recover strength, before I go hence, and be no more." David is not asking to live forever. He is asking for what time remains to be usable. Let him recover strength so that he can live truly, fully, in the time given to him. Let him not waste the handbreadth.',
        },
        {
          kind: 'christ',
          id: 'psalms39-christ-redeem',
          title: 'Christ Connection — Redeeming the Time',
          html:
            'In Ephesians 5:16, Paul writes: "Redeeming the time, because the days are evil." The Greek word for "redeeming" means to buy back, to make the most of. Christ&apos;s whole ministry was a declaration that time matters. He spent His three years of public teaching on a handful of disciples, investing His life into a few people, because He knew that quality mattered more than quantity. And He taught that the end of human life is not distant and uncertain, but known to God. In Christ, we learn to live in the light of our end—not in fear, but in clarity that helps us love truly.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 39 calls you to a hard and beautiful truth: your life is a handbreadth. Time is precious because it is limited. You cannot control whether you are dealt more or less of it. But you can control how you spend it. The wicked spend theirs in anxious accumulation and vain display. The psalmist—having looked mortality in the face—chooses to spend his in hope, in prayer, in the recovery of strength for the days that remain. The brevity of life, contemplated rightly, becomes not a cause of despair but a teacher of wisdom.',
        },
        {
          kind: 'reflection',
          id: 'psalms39-recover-strength',
          prompt: 'What would it mean for you to recover strength so that you may live truly in the time that remains to you? What changes would you make if you really believed your days were as a handbreadth?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, make me to know mine end, and the measure of my days; what it is; that I may know how frail I am.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 39 · Study Guide',
  },

  hasHebrew: true,
};
