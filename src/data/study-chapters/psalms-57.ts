import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_57: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 57,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'Saul pursued David relentlessly. At one point, David fled to the cave of Adullam, a stronghold in the wilderness. It was a place of refuge but also of darkness—a cave, cut off from sunlight, from safety, from hope of return. And yet in this cave, in the literal darkness of that place, David&apos;s inner life was illuminated by faith. "My heart is fixed, O God, my heart is fixed: I will sing and give praise."',
    'Psalm 57 is remarkable for its defiance of despair. David is hunted. He is hiding in darkness. His enemies prowl around him. And yet he declares his heart fixed. Not anxious, not wavering, not searching for escape routes. Fixed. Established. Settled upon God. And his response to this fixedness is not prayer for protection, but praise. In darkness, he sings. In danger, he gives praise.',
  ],

  sections: [
    {
      ref: 'Psalm 57:1–5',
      title: 'Heart Fixed on God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 57,
          lines: [
            plain(1, 'Be merciful unto me, O God, be merciful unto me: for my soul trusteth in thee: yea, in the shadow of thy wings will I make my refuge, until these calamities be overpast.'),
            plain(2, 'I will cry unto God most high; unto God that performeth all things for me.'),
            plain(3, 'He shall send from heaven, and save me from the reproach of him that would swallow me up. Selah. God shall send forth his mercy and his truth.'),
            plain(4, 'My soul is among lions: and I lie even among them that are set on fire, even the sons of men, whose teeth are spears and arrows, and their tongue a sharp sword.'),
            plain(5, 'Be thou exalted, O God, above the heavens; let thy glory be above all the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms57-shadow-wings',
          html: '"In the shadow of thy wings will I make my refuge, until these calamities be overpast." The image is that of a bird taking shelter beneath its mother&apos;s wings. David seeks refuge not in the cave itself, but in the shadow of God&apos;s wings.',
        },
        {
          kind: 'hebrew',
          id: 'psalms57-kanaph',
          title: 'Kanaph — "Wings"',
          script: 'כָּנָף',
          translit: '<strong>Kanaph</strong> · wing; skirt; edge; protection',
          description: 'Kanaph, wings, is used throughout Scripture as a metaphor for God&apos;s protective care. To hide "in the shadow of thy wings" is to seek shelter under God&apos;s tender protection.',
        },
        {
          kind: 'commentary',
          id: 'psalms57-among-lions',
          html: '"My soul is among lions: and I lie even among them that are set on fire, even the sons of men, whose teeth are spears and arrows, and their tongue a sharp sword." David&apos;s metaphor for his enemies is fierce: lions, men on fire, teeth like spears. The danger is real. Yet David is not fleeing. He faces them in the cave.',
        },
        {
          kind: 'commentary',
          id: 'psalms57-be-exalted',
          html: '"Be thou exalted, O God, above the heavens; let thy glory be above all the earth." Despite the dangers surrounding him, David lifts his eyes to God. His cry is not for safety, but for God&apos;s exaltation.',
        },
        {
          kind: 'christ',
          id: 'psalms57-christ-gethsemane',
          title: 'Christ Connection — The Fixed Heart',
          html: 'In the garden of Gethsemane, as Jesus faced His Passion, His heart too was fixed. "Not as I will, but as thou wilt," He prayed (Matthew 26:39). In darkness, surrounded by His enemies, about to be betrayed and killed, Jesus&apos;s heart was fixed not on escape, but on the Father&apos;s will. Like David in the cave, Christ in Gethsemane chose trust over fear.',
        },
        {
          kind: 'carry',
          html: 'A fixed heart does not mean an absence of struggle or suffering. David faces real danger. He asks for God&apos;s mercy. But his fundamental stance—his inner posture—is one of trust. He is fixed upon God.',
        },
        {
          kind: 'reflection',
          id: 'psalms57-fixed-heart',
          prompt: 'What would it mean to have a heart that is truly fixed on God? How might that fixedness change the way you respond to danger?',
        },
      ],
    },

    {
      ref: 'Psalm 57:6–11',
      title: 'Singing in the Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 57,
          lines: [
            plain(6, 'They have prepared a net for my steps; my soul is bowed down: they have digged a pit before me, into the midst whereof they are fallen themselves. Selah.'),
            plain(7, 'My heart is fixed, O God, my heart is fixed: I will sing and give praise.'),
            plain(8, 'Awake up, my glory; awake, psaltery and harp: I myself will awake early.'),
            plain(9, 'I will praise thee, O Lord, among the people: I will sing unto thee among the nations.'),
            plain(10, 'For thy mercy is great unto the heavens, and thy truth unto the clouds.'),
            plain(11, 'Be thou exalted, O God, above the heavens: let thy glory be above all the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms57-net-pit',
          html: '"They have prepared a net for my steps; my soul is bowed down: they have digged a pit before me, into the midst whereof they are fallen themselves." David&apos;s enemies have plotted his downfall. They have set traps. But the traps have caught them instead. Divine irony: the pit they dig for David becomes their own grave.',
        },
        {
          kind: 'commentary',
          id: 'psalms57-my-heart-fixed',
          html: '"My heart is fixed, O God, my heart is fixed: I will sing and give praise." The repetition emphasizes determination. David declares it twice: my heart is fixed. This is his answer to the enemies, to the danger, to the darkness.',
        },
        {
          kind: 'commentary',
          id: 'psalms57-awake-early',
          html: '"Awake up, my glory; awake, psaltery and harp: I myself will awake early." David summons his inner strength—his "glory," his essential self—to arise. He calls for musical instruments to join him. In the darkness of the cave, he becomes a singer, a praise-giver.',
        },
        {
          kind: 'commentary',
          id: 'psalms57-among-nations',
          html: '"I will praise thee, O Lord, among the people: I will sing unto thee among the nations." David&apos;s praise is not private or hidden. It is to be public, spread among peoples and nations. His faith in God is meant to be witnessed.',
        },
        {
          kind: 'carry',
          html: 'Psalm 57 teaches that a fixed heart issues in praise. When our heart is truly settled upon God, not wavering between trust and fear, then we can sing even in darkness. We can praise even while enemies gather.',
        },
        {
          kind: 'reflection',
          id: 'psalms57-sing-praise',
          prompt: 'What would change if you truly fixed your heart on God? What would it look like to sing and praise in the midst of your current challenges?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My heart is fixed, O God, my heart is fixed: I will sing and give praise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 57 · Study Guide',
  },

  hasHebrew: true,
};
