import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 65 — The Gospel to the Gentiles and the New Creation
 *
 * "I am sought of them that asked not for me; I am found of them that sought me
 * not: I said, Behold me, behold me, unto a nation that was not called by my
 * name." God turns to the Gentiles. And He promises: "Behold, I create new heavens
 * and a new earth." Sin and suffering will be done away. God\'s people will build
 * houses, plant vineyards, enjoy the work of their hands. There will be no more
 * weeping, no more untimely death. Creation itself will be renewed.
 */
export const ISAIAH_65: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 65,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Isaiah 65 is the gospel arriving at the Gentiles and the promise of a new creation. God says: I have spread out my hands to a disobedient people. Yet at the same time, He declares: I am found of them that sought me not. The offer of salvation reaches to the nations that did not know God. And then the vision expands: God will create new heavens and a new earth. The old things will pass away. In the new creation, all suffering ceases. All injustice is remedied. All separation from God ends. This is the hope that sustains the faithful through all of Isaiah\'s dark chapters—the promise that all things will be made new.',
  ],

  sections: [
    {
      ref: 'Isaiah 65:1–12',
      title: 'The Gospel Reaches the Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(1, 'I am sought of them that asked not for me; I am found of them that sought me not: I said, Behold me, behold me, unto a nation that was not called by my name.'),
            plain(2, 'I have spread out my hands all the day unto a rebellious people, which walketh in a way that was not good, after their own thoughts;'),
            plain(3, 'A people that provoketh me to anger continually to my face; that sacrificeth in gardens, and burneth incense upon altars of brick;'),
            plain(8, 'Thus saith the Lord, As the new wine is found in the cluster, and one saith, Destroy it not; for a blessing is in it: so will I do for my servants\' sakes, that I may not destroy them all.'),
            plain(9, 'And I will bring forth a seed out of Jacob, and out of Judah an inheritor of my mountains: and my chosen shall inherit it, and my servants shall dwell therein.'),
            plain(24, 'And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa65-sought',
          html:
            'God is found of them that sought Him not. This is the essence of grace: we do not earn God\'s presence by seeking. He comes to us when we do not deserve it, when we do not even know to ask. He spreads out His hands all day to a rebellious people. This is persistent, patient love.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah65-shamayim',
          title: 'Shamayim — "Heavens"',
          script: 'שָׁמַיִם',
          translit: '<strong>Shamayim</strong> · heavens; sky; God\'s dwelling place',
          description: 'God creates new heavens and new earth, a new creation.',
        },
        {
          kind: 'commentary',
          id: 'isa65-seed',
          html:
            'For His servants\' sake, God will not destroy all. As wine is found in the cluster and not destroyed, so God preserves a seed, a remnant. From Jacob, an inheritor of the mountains will come. This preserved seed becomes the carrier of the gospel to the nations.',
        },
        {
          kind: 'hebrew',
          id: 'isa65-nacar',
          title: 'Nacar — "Sought"',
          script: 'נִשְׁאַלְתִּי',
          translit: '<strong>Nishalti</strong> · I am sought; I allow myself to be sought after',
          description: 'The form suggests God making Himself available to be sought, opening Himself to relationship with those who do not even know to seek Him.',
        },
        {
          kind: 'christ',
          id: 'isa65-christ-gentiles',
          title: 'Christ Connection — The Gospel to the Gentiles',
          html:
            'In Romans 10:20, Paul quotes Isaiah 65:1: "I am found of them that sought me not." This passage is Paul\'s proof that God\'s grace reaches to the Gentiles, to those far from Israel, to those who did not seek Him. Christ came to call not the righteous, but sinners. He found those who were not looking for Him and transformed them into His disciples.',
        },
        {
          kind: 'carry',
          html:
            \'We do not need to be worthy before approaching God. We do not need to clean ourselves up first. We do not need to have sought Him long enough. God finds us when we are not looking, when we do not know we need Him, when we are rebellious and lost. His grace is that preemptive, that generous.\',
        },
        {
          kind: 'reflection',
          id: 'isa65-found',
          prompt: 'When did you first sense that God was seeking you, before you were seeking Him? How does it change your faith to know that you did not have to earn His attention?',
        },
      ],
    },

    {
      ref: 'Isaiah 65:17–25',
      title: 'The New Heaven and New Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(17, 'For, behold, I create new heavens and a new earth: and the former things shall not be remembered, nor come into mind.'),
            plain(18, 'But be ye glad and rejoice for ever in that which I create: for, behold, I create Jerusalem a rejoicing, and her people a joy.'),
            plain(19, 'And I will rejoice in Jerusalem, and joy in my people: and the voice of weeping shall be no more heard in her, nor the voice of crying.'),
            plain(20, 'There shall be no more thence an infant of days, nor an old man that hath not filled his days: for the child shall die an hundred years old; but the sinner being an hundred years old shall be accursed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa65-new-creation',
          html:
            \'The judgment on the rebels is set; but look—a new heavens and new earth are coming, and the former things will not be remembered.[res:sefaria-isaiah-65]\',
        },
        {
          kind: 'scripture',
          chapter: 65,
          lines: [
            plain(21, 'And they shall build houses, and inhabit them; and they shall plant vineyards, and eat the fruit of them.'),
            plain(22, 'They shall not build, and another inhabit; they shall not plant, and another eat: for as the days of a tree are the days of my people, and mine elect shall long enjoy the work of their hands.'),
            plain(23, 'They shall not labour in vain, nor bring forth for trouble; for they are the seed of the blessed of the Lord, and their offspring with them.'),
            plain(24, 'And it shall come to pass, that before they call, I will answer; and while they are yet speaking, I will hear.'),
            plain(25, 'The wolf also shall dwell with the lamb, and the leopard shall lie down with the kid; and the calf and the young lion and the fatling together; and a little child shall lead them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa65-new',
          html:
            \'Behold, I create new heavens and new earth. The former things are not remembered, do not come into mind. This is not repair or restoration, but new creation. What was broken is not patched; it is remade.\',
        },
        {
          kind: 'commentary',
          id: 'isa65-weeping',
          html:
            \'In the new creation, the voice of weeping is no more heard. There is no crying. There is no untimely death. People build houses and inhabit them. They plant vineyards and eat their fruit. The curse that has pursued humanity since Eden is lifted. Labor is no longer in vain. Children are no longer born to trouble.\',
        },
        {
          kind: 'commentary',
          id: 'isa65-wolf',
          html:
            \'The animal kingdom is transformed. Wolf dwells with lamb, leopard with goat, lion with calf. A little child leads them. This is the peaceable kingdom, where the very nature of creation is changed, where predator and prey live in harmony.\',
        },
        {
          kind: 'christ',
          id: 'isa65-christ-new-creation',
          title: 'Christ Connection — The New Creation',
          html:
            'In Revelation 21:1–4, John sees this vision: "And I saw a new heaven and a new earth...And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them...and God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." Christ\'s resurrection is the first fruit of this new creation. His return will complete it.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 65 is the answer to all suffering, all injustice, all loss. The new creation is not a distant myth. It is God\'s final purpose. For believers, it is the hope that sustains through present darkness. We labor, we build, we plant, knowing that God will perfect all our work in the age to come.',
        },
        {
          kind: 'reflection',
          id: 'isa65-new-creation-2',
          prompt: 'What in your life right now—wounds, losses, injustices—do you entrust to God\'s promise of the new creation? How does hope for the new creation change how you live now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I create new heavens and a new earth...the voice of weeping shall be no more heard...and a little child shall lead them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 65 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-65',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 65',
      url: 'https://www.sefaria.org/Isaiah.65',
      description: 'Sefaria open-access source text and translations for Isaiah 65.',
    },
  ],

  hasHebrew: true,
};
