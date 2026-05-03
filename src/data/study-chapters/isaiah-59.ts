import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 59 — The Redeemer Comes to Zion
 *
 * "Your iniquities have separated between you and your God, and your sins have
 * hid his face from you." The people confess their sin, their violence, their
 * injustice. Yet in their darkness, they see a light: "The Redeemer shall come
 * to Zion, and unto them that turn from transgression in Jacob." This is the
 * promise that ends exile and darkness—the Redeemer comes and breaks the power
 * of sin.
 */
export const ISAIAH_59: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 59,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Isaiah 59 is a confession of sin and a promise of redemption. The people acknowledge that their iniquities have separated them from God. They describe in graphic language the extent of their wickedness: violence, lies, false testimony, weaving plots of destruction. There is no justice, no peace. Yet it is precisely in this darkness, when all seems lost, that the Redeemer appears. God Himself comes. He puts on righteousness as a breastplate, wears salvation as a helmet, and takes vengeance on His enemies. He comes not to destroy the penitent, but to redeem them.',
  ],

  sections: [
    {
      ref: 'Isaiah 59:1–13',
      title: 'Separation Through Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 59,
          lines: [
            plain(1, 'Behold, the Lord\'s hand is not shortened, that it cannot save; neither his ear heavy, that it cannot hear:'),
            plain(2, 'But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.'),
            plain(3, 'For your hands are defiled with blood, and your fingers with iniquity; your lips have spoken lies, your tongue hath muttered perverseness.'),
            plain(4, 'None calleth for justice, nor any pleadeth for truth: they trust in vanity, and speak lies; they conceive mischief, and bring forth iniquity.'),
            plain(5, 'They hatch cockatrice\'s eggs, and weave the spider\'s web: he that eateth of their eggs dieth, and that which is crushed breaketh out into a serpent.'),
            plain(6, 'Their webs shall not become garments, neither shall they cover themselves with their works: their works are works of iniquity, and the act of violence is in their hands.'),
            plain(7, 'Their feet run to evil, and they make haste to shed innocent blood: their thoughts are thoughts of iniquity; wasting and destruction are in their paths.'),
            plain(8, 'The way of peace they know not; and there is no judgment in their goings: they have made them crooked paths: whosoever goeth therein shall not know peace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa59-hand',
          html:
            'God\'s hand is not shortened. His ear is not heavy. The problem is not with God\'s power or willingness to save. The problem is separation through sin. The people\'s iniquities have hidden God\'s face. What is described is not mere failure, but rebellion—hands defiled with blood, lips speaking lies, hearts full of mischief.',
        },
        {
          kind: 'commentary',
          id: 'isa59-eggs',
          html:
            'The people hatch cockatrice\'s eggs—eggs of death. They weave spider\'s webs that cannot cover them, create garments of iniquity that do not protect. Their violence is visible, real, destructive. They do not know the way of peace.',
        },
        {
          kind: 'hebrew',
          id: 'isa59-badal',
          title: 'Badal — "Separate" (Separated)',
          script: 'בָּדַל',
          translit: '<strong>Badal</strong> · to separate; to divide; to distinguish',
          description:
            'The Hebrew verb badal indicates a sharp separation, a cutting off. Sin does not merely distance us from God; it actively separates, divides, cuts.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 59 is a searing portrait of societies and individuals who have abandoned justice. What makes it powerful is its honesty. The people do not deny their sin. They confess it. This is the beginning of redemption: the admission that we are wrong, that we have separated ourselves from God, that we need rescue.',
        },
      ],
    },

    {
      ref: 'Isaiah 59:14–21',
      title: 'The Redeemer\'s Coming and Victory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 59,
          lines: [
            plain(14, 'Therefore is judgment far from us, neither doth justice overtake us: we wait for light, but behold obscurity; for brightness, but we walk in darkness.'),
            plain(15, 'We grope for the wall like the blind, and we grope as if we had no eyes: we stumble at noonday as in the night; we are in desolate places as dead men.'),
            plain(16, 'Therefore his arm brought salvation unto him; and his righteousness, it sustained him.'),
            plain(17, 'For he put on righteousness as a breastplate, and an helmet of salvation upon his head; and he put on the garments of vengeance for clothing, and was clad with zeal as a cloke.'),
            plain(18, 'According to their deeds, accordingly he will repay, fury to his adversaries, recompence to his enemies; to the islands he will repay recompence.'),
            plain(19, 'So shall they fear the name of the Lord from the west, and his glory from the rising of the sun: when the enemy shall come in like a flood, the Spirit of the Lord shall lift up a standard against him.'),
            plain(20, 'And the Redeemer shall come to Zion, and unto them that turn from transgression in Jacob, saith the Lord.'),
            plain(21, 'As for me, this is my covenant with them, saith the Lord; My spirit that is upon thee, and my words which I have put in thy mouth, shall not depart out of thy mouth, nor out of the mouth of thy seed, nor out of the mouth of thy seed\'s seed, saith the Lord, for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa59-darkness',
          html:
            'The people wait for light but find darkness. They wait for brightness but walk in night. They grope as the blind, stumble at noonday, are as dead men in desolate places. This is the nadir of their condition. All hope seems lost.',
        },
        {
          kind: 'commentary',
          id: 'isa59-redeemer',
          html:
            'Then comes the turning point. God sees that there is no man, no intercessor. His own arm brings salvation. He puts on righteousness as a breastplate, salvation as a helmet. He comes in judgment against the enemies of His people. The Spirit of the Lord lifts up a standard. And the Redeemer comes to Zion, to those who turn from transgression.',
        },
        {
          kind: 'commentary',
          id: 'isa59-covenant',
          html:
            'God\'s covenant is that His Spirit rests on His people, and His words dwell in their mouths. This is not merely external salvation. It is the gift of God\'s very presence and voice. The Spirit will not depart. The words will continue forever, from generation to generation.',
        },
        {
          kind: 'christ',
          id: 'isa59-christ-redeemer',
          title: 'Christ Connection — The Redeemer',
          html:
            'Christ is the Redeemer who comes to Zion. He put on righteousness and wore the helmet of salvation. He defeated the enemy through His death and resurrection. He came not to those who are righteous, but to those who turn from transgression—the sick, the broken, the repentant. And through His Spirit, He dwells in His people, and His words are spoken through them, forever.',
        },
        {
          kind: 'carry',
          html:
            'The promise of Isaiah 59 is that redemption comes not when we have cleaned ourselves up, but when we turn from transgression. The Redeemer comes to us in our darkness, in our separation, and brings us back to God. The covenant He makes is not temporary or conditional on our performance. It is everlasting. His Spirit and His words will dwell in His people forever.',
        },
        {
          kind: 'reflection',
          id: 'isa59-redeemer',
          prompt: 'In what ways do you experience being separated from God? How does it change your perspective to know that the Redeemer comes precisely to those who acknowledge their need?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Redeemer shall come to Zion, and unto them that turn from transgression in Jacob.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 59 · Study Guide',
  },
};
