import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const BARUCH_4: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 4,
  intros: [
    'In Baruch 4, Jerusalem becomes a character. She is the mother bereft. She was filled with children, and now she is empty. She sent her sons and daughters into exile for their sins, yet her heart breaks. She does not excuse their rebellion, but she does not abandon them. Even in anguish, she reaches out with words of encouragement.',
    'Jerusalem speaks as a mother who suffers for her children&apos;s sake. Yet she knows something they forgot in Babylon: exile is not the end. God will not leave His people in captivity forever. The mother waits and calls them to return. Her words are a rope thrown across the chasm.',
  ],
  sections: [
    {
      ref: 'Baruch 4:1–8',
      title: 'The Mother&apos;s Lament',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(1, 'O Jerusalem, put off the garment of thy mourning and affliction, and put on the comeliness of the glory that cometh from God for ever.'),
          plain(5, 'For God shall shew thy brightness unto every country under heaven.'),
          plain(8, 'Arise, O Jerusalem, stand upon the high place, and behold towards the east thy children gathered from the west unto the east by the word of the Holy Ghost.'),
        ] },
        { kind: 'commentary', id: 'bar4-mourning', html: 'Jerusalem is commanded to put off her garments of mourning. Her children are in exile, yes. But exile is not permanent. What appears to be an ending is actually a preparation for restoration. Jerusalem&apos;s deep sorrow is about to give way to joy.' },
        { kind: 'hebrew', id: 'bar4-shuv', title: 'Shuv — Return', script: 'שׁוּב', translit: '<strong>Shuv</strong> · return; repent; restore', description: 'Hebrew shuv carries both physical return and spiritual turning. When exiles return to Jerusalem, they also return to God. The journey home is not merely geographical; it is a return of the whole self to the One from whom they separated.' },
        { kind: 'christ', id: 'bar4-christ-return', title: 'Christ Connection — The Shepherd Who Brings Home', html: 'Jerusalem calls her children home. Jesus speaks as the Shepherd who leaves the ninety-nine and goes to find the one lost sheep, carrying it back. He does not wait for them to find their way. He comes to bring them home.' },
        { kind: 'carry', html: 'Do you feel far from home—far from God, far from yourself, far from the place of belonging? The mother Jerusalem waits. The invitation is extended. The path back is open. Your exile may feel permanent, but it is not.' },
        { kind: 'reflection', id: 'bar4-home', prompt: 'What does "home" mean to you? What would it take for you to believe that you can return—not just physically, but to God?' },
      ],
    },
    {
      ref: 'Baruch 4:21–27',
      title: 'The Call to Courage',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(21, 'Be of good cheer, my children: cry unto God, and he shall deliver you from the power and hand of the enemies.'),
          plain(27, 'And as she perceived the coming of her children, so shall she make haste to receive them, rejoicing: for I saw them scattered by an enemy&apos;s violence, but God shall bring them in again unto me with mercy.'),
        ] },
        { kind: 'commentary', id: 'bar4-cheer', html: 'The mother does not deny the pain. Her children are scattered. Their enemies are real. Yet she calls them to courage—not the courage of the strong, but of faith. They cry unto God, and God delivers. The mother sees beyond present darkness to their return.' },
        { kind: 'greek', id: 'bar4-dynamis', title: 'Dynamis — Power', script: 'δύναμις', translit: '<strong>Dynamis</strong> · power; strength; might', description: 'The enemies have power. But God&apos;s power is greater. God&apos;s dynamis is the force that reshapes reality itself. The adversary cannot prevail against what God has purposed.' },
        { kind: 'christ', id: 'bar4-christ-gather', title: 'Christ Connection — The Gatherer of the Scattered', html: 'Jesus tells His disciples: "How often would I have gathered thy children together!" His heart is like Jerusalem&apos;s—aching to gather, to restore, to bring home. In the cross and resurrection, He gathers the scattered children of God.' },
        { kind: 'carry', html: 'Your enemies are real. The hand that grips you is strong. But you are called to courage—not in your own strength but in the knowledge that God sees, remembers, and will bring you home. This is the mother&apos;s wisdom, addressed to you.' },
        { kind: 'reflection', id: 'bar4-courage', prompt: 'What enemy or oppression weighs on you now? How does it feel to hear the mother&apos;s call: "Be of good cheer"? Do you believe it? Why or why not?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Be of good cheer, my children: cry unto God, and he shall deliver you from the power and hand of the enemies. For God shall bring them in again unto me with mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 4 · Study Guide',
  },
  hasHebrew: true,
};
