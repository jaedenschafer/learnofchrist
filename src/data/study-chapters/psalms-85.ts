import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 85 — "Mercy and truth are met together"
 *
 * This psalm speaks of a moment when all things align: when mercy meets truth,
 * when righteousness meets peace. It is a vision of what happens when God acts
 * to restore a fallen people. The backdrop is one of divine punishment reversed.
 * The Lord has brought back the captivity of Jacob. But something greater is
 * promised: the day when every divine attribute will find its perfect expression
 * in a single redemptive act. At the cross, all four meet together.
 */
export const PSALMS_85: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 85,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 85 is a song of the sons of Korah, and it depicts a people restored. The Lord had turned away His anger. He had brought back the captivity of Jacob. But the psalmist is not content with national restoration alone. He looks forward to something far greater: a redemption that satisfies not only justice but mercy, not only truth but peace. He waits for a word from God Himself—a word that will settle all things.',
  ],

  sections: [
    {
      ref: 'Psalm 85:1–7',
      title: 'Restoration and Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 85,
          lines: [
            plain(1, 'Lord, thou hast been favourable unto thy land: thou hast brought back the captivity of Jacob.'),
            plain(2, 'Thou hast forgiven the iniquity of thy people, thou hast covered all their sins. Selah.'),
            plain(3, 'Thou hast taken away all thy wrath: thou hast turned thyself from the fierceness of thine anger.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-85-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 85,
          lines: [
            plain(4, 'Turn us, O God of our salvation, and cause thine anger toward us to cease.'),
            plain(5, 'Wilt thou be displeased with us for ever? wilt thou draw out thine anger to all generations?'),
            plain(6, 'Wilt thou not revive us again: that thy people may rejoice in thee?'),
            plain(7, 'Shew us thy mercy, O Lord, and grant us thy salvation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps85-favourable',
          html:
            'The psalm begins by recalling what God has already done. He has been favourable. He has brought back the captivity. He has forgiven iniquity and covered sins. He has turned away His wrath. These are not requests but remembrances. The people are reminded of God&apos;s past faithfulness as a foundation for present prayer. But then the note shifts. If God has already done all this, why do the people still wait? Why do they still ask for revival?',
        },
        {
          kind: 'commentary',
          id: 'ps85-revival',
          html:
            'The plea "Wilt thou not revive us again" acknowledges a gap between restoration and renewal. A people can be restored to their land and still lack fullness of life. Revival means more than return. It means the quickening of the spirit, the restoration of joy, the awakening of the people to renewed communion with God. This is what the psalmist requests: not mere external restoration but the revival of the soul.',
        },
        {
          kind: 'hebrew',
          id: 'ps85-hesed',
          title: 'Hesed — "Mercy" (Covenant Love)',
          script: 'חֶסֶד',
          translit: '<strong>Hesed</strong> · mercy; covenant love; steadfast kindness',
          description:
            'Hesed is not mere emotion. It is covenanted love, the commitment God makes to His people. It is the love that keeps saving when judgment would be justified, that preserves when justice would destroy.',
        },
        {
          kind: 'reflection',
          id: 'ps85-waiting',
          prompt: 'Have you experienced restoration in some area of your life but still wait for true revival? What does spiritual revival look like for you?',
        },
      ],
    },

    {
      ref: 'Psalm 85:8–13',
      title: 'The Meeting of Divine Attributes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 85,
          lines: [
            plain(8, 'I will hear what God the Lord will speak: for he will speak peace unto his people, and to his saints: but let them not turn again to folly.'),
            plain(9, 'Surely his salvation is nigh them that fear him; that glory may dwell in our land.'),
            plain(10, 'Mercy and truth are met together; righteousness and peace have kissed each other.'),
            plain(11, 'Truth shall spring out of the earth; and righteousness shall look down from heaven.'),
            plain(12, 'Yea, the Lord shall give that which is good; and our land shall yield her increase.'),
            plain(13, 'Righteousness shall go before him; and shall set us in the way of his steps.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps85-speak-peace',
          html:
            'God will speak peace to His people. This is not the absence of conflict but the presence of a word that settles everything. Peace comes through a pronouncement. The people are called to listen, to hear what God will say. This is the deepest listening—the waiting for God to speak the final word.',
        },
        {
          kind: 'commentary',
          id: 'ps85-four-meet',
          html:
            'Verse 10 contains one of the most profound theological statements in all of Scripture: "Mercy and truth are met together; righteousness and peace have kissed each other." These are not abstract concepts. They are attributes of God Himself. And here they meet. They embrace. They no longer pull in opposite directions. How is this possible? How can mercy and truth coexist when truth demands justice and mercy wants to forgive? The answer is that God finds a way to be fully Himself in every dimension. No attribute is compromised. All are satisfied.',
        },
        {
          kind: 'christ',
          id: 'ps85-christ-cross',
          title: 'Christ Connection — The Cross',
          html:
            'At the cross, all four attributes meet. God&apos;s mercy pours out in the forgiveness offered through Christ&apos;s blood. Truth is upheld because sin is not ignored or excused—it is paid for. Righteousness is vindicated because the penalty is satisfied. And peace is made possible because the barrier between God and humanity is removed. Every dimension of God&apos;s nature finds its expression in a single redemptive act.',
        },
        {
          kind: 'carry',
          html:
            'This psalm promises that salvation is near to those who fear God. It is not distant, not impossible, not for someone else. It is near. The way forward is not to earn God&apos;s favour through your own righteous works, but to fear Him—to approach Him with reverence and trust—and to receive what He has already provided.',
        },
        {
          kind: 'reflection',
          id: 'ps85-attributes',
          prompt: 'In your own struggles, how do you see the tension between God&apos;s mercy and His truth, or between His righteousness and His peace? Where do these meet in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Mercy and truth are met together; righteousness and peace have kissed each other.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 85 · Study Guide',
  },

  hasHebrew: true,
};
