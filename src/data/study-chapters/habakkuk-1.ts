import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Habakkuk 1 — "O Lord, How Long?"
 *
 * Habakkuk cries out to God in despair. Judah is filled with violence and
 * injustice. God answers that He will raise up the Babylonians to bring
 * judgment. But this only deepens Habakkuk's confusion.
 */
export const HABAKKUK_1: RichChapterContent = {
  bookSlug: 'habakkuk',
  bookName: 'Habakkuk',
  chapter: 1,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Habakkuk begins with a complaint, not a proclamation. "O Lord, how long shall I cry, and thou wilt not hear?" The prophet sees injustice everywhere—violence, strife, wrong judgment. He calls to God for help, but God seems distant. Why does He not intervene? Why does evil prosper?',
    'God answers, but the answer confounds the prophet. God will raise up the Chaldeans (Babylonians)—a fierce and terrible nation that will bring judgment. But this only raises a new question in Habakkuk&apos;s mind: how can God, who is pure and holy, use evil people to accomplish His purposes? The struggle is real. The questions are genuine.',
  ],

  sections: [
    {
      ref: 'Habakkuk 1:1–4',
      title: 'The Cry for Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The burden which Habakkuk the prophet did see.'),
            plain(2, 'O Lord, how long shall I cry, and thou wilt not hear! even cry out unto thee of violence, and thou wilt not save!'),
            plain(3, 'Why dost thou shew me iniquity, and cause me to behold grievance? for spoiling and violence are before me: and there are that raise up strife and contention.'),
            plain(4, 'Therefore the law is slacked, and judgment doth never go forth: for the wicked doth compass about the righteous; therefore wrong judgment proceedeth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'habakkuk1-cry',
          html:
            'Habakkuk&apos;s cry is raw and honest. He does not mince words with God. He does not pretend piety he does not feel. He cries out in genuine distress, asking why God shows him evil and then does nothing about it. This is the prayer of a man whose faith is being tested to its limits.',
        },
        {
          kind: 'hebrew',
          id: 'habakkuk1-chamad',
          title: 'Chamad — "Behold"',
          script: 'חָמַד',
          translit: '<strong>Chamad</strong> · to see; to look upon; to observe',
          description:
            'Habakkuk is forced to behold iniquity—he cannot look away. It is all around him. The word conveys not detached observation but painful, unavoidable witnessing.',
        },
        {
          kind: 'christ',
          id: 'habakkuk1-christ-suffering',
          title: 'Christ Connection — God&apos;s Purpose in Suffering',
          html:
            'In Gethsemane, Christ experiences a similar desolation: "My God, my God, why hast thou forsaken me?" He too cries out in the face of injustice and suffering. Yet He trusts that God&apos;s purpose will be accomplished, even through the darkest hours.',
        },
        {
          kind: 'carry',
          html:
            'Habakkuk teaches us that it is permissible to question God, to lament injustice, to ask "Why?" The faith that matters is not the faith that never doubts, but the faith that questions honestly and trusts God even when understanding fails.',
        },
        {
          kind: 'reflection',
          id: 'habakkuk1-questions',
          prompt: 'What injustices have you witnessed that make you want to cry out to God? Do you feel free to ask Him why?',
        },
      ],
    },

    {
      ref: 'Habakkuk 1:5–11',
      title: 'God&apos;s Unexpected Answer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(5, 'Behold ye among the heathen, and regard, and wonder marvelously: for I will work a work in your days, which ye will not believe, though it be told you.'),
            plain(6, 'For, lo, I raise up the Chaldeans, that bitter and hasty nation, which shall march through the breadth of the land, to possess the dwellingplaces that are not theirs.'),
            plain(7, 'They are terrible and dreadful: their judgment and their dignity shall proceed of themselves.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'habakkuk-1-78mid-1',
          html:
            'The prophet turns from question to answer, or from answer to song. Habakkuk&apos;s short book is a conversation with God in three movements.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'Their horses also are swifter than the leopards, and are more fierce than the evening wolves: and their horsemen shall spread themselves, and their horsemen shall come from far; they shall fly as the eagle that hasteth to eat.'),
            plain(9, 'They shall come all for violence: their faces shall sup up as the east wind: and they shall gather the captivity as the sand.'),
            plain(10, 'And they shall scoff at the kings, and the princes shall be a scorn unto them: they shall deride every strong hold; for they shall heap dust, and take it.'),
            plain(11, 'Then shall his mind change, and he shall pass over, and offend, imputing this his power unto his god.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'habakkuk1-chaldeans',
          html:
            'God&apos;s answer is shocking: He will raise up the Chaldeans. But these are a fierce and terrible nation, devoted to violence and conquest. How can God use such a people to accomplish His justice? This is Habakkuk&apos;s deepest confusion. God seems to be using the wicked to punish the wicked.',
        },
        {
          kind: 'commentary',
          id: 'habakkuk1-horses',
          html:
            'The description of the Chaldeans is one of overwhelming military power: swift as leopards, fierce as wolves, flying like eagles. They are unstoppable. They mock kings and scoff at fortresses. Their power seems absolute. And God is sending them against Judah.',
        },
        {
          kind: 'christ',
          id: 'habakkuk1-christ-purposes',
          title: 'Christ Connection — God&apos;s Hidden Purposes',
          html:
            'In John 13, Christ washes His disciples&apos; feet, including Judas, who will betray Him. God uses even the betrayal to accomplish His redemptive purposes. The cross, ordained by God, comes through the hands of wicked men. Yet God&apos;s purpose is accomplished.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s purposes sometimes seem opaque to us. We cry out for justice and receive an answer we cannot comprehend. But God is not without purpose. Even the tool He uses is held in His hand.',
        },
        {
          kind: 'reflection',
          id: 'habakkuk1-purpose',
          prompt:
            'Have you experienced a situation where God&apos;s answer to your prayer seemed to create more problems? What did you learn about trusting Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'O Lord, how long shall I cry, and thou wilt not hear! even cry out unto thee of violence, and thou wilt not save!',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Habakkuk 1 · Study Guide',
  },

  hasHebrew: true,
};
