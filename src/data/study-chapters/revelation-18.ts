import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_18: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 18,

  intros: [
    "&quot;Babylon the great is fallen, is fallen.&quot; A mighty angel announces the doom of the world-system that seduced nations. Then a voice from heaven cries: &quot;Come out of her, my people.&quot; The kings, merchants, and shipmasters who profited from her wealth weep as her smoke rises.",
    "Heaven, in stark contrast, rejoices. &quot;Rejoice over her, thou heaven, and ye holy apostles and prophets; for God hath avenged you on her.&quot; What earth mourned, heaven celebrates — because what fell was not light or life, but the city built on the blood of the saints.",
  ],

  sections: [
    {
      ref: 'Revelation 18:1–8',
      title: '&quot;Come Out of Her, My People&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(2, 'And he cried mightily with a strong voice, saying, Babylon the great is fallen, is fallen, and is become the habitation of devils, and the hold of every foul spirit, and a cage of every unclean and hateful bird.'),
            plain(4, 'And I heard another voice from heaven, saying, Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues.'),
            plain(7, 'How much she hath glorified herself, and lived deliciously, so much torment and sorrow give her: for she saith in her heart, I sit a queen, and am no widow, and shall see no sorrow.'),
            plain(8, 'Therefore shall her plagues come in one day, death, and mourning, and famine; and she shall be utterly burned with fire: for strong is the Lord God who judgeth her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-come-out',
          html: 'The call &quot;Come out of her&quot; echoes Jeremiah 51:45 — God&apos;s ancient summons to leave the doomed city before judgment falls. It is mercy in command form. Babylon&apos;s sins are about to receive their wages, and God does not want His people to share the wages.',
        },
        {
          kind: 'greek',
          id: 'rev18-exelthate',
          title: 'Exelthate — Come Out',
          script: 'ἐξέλθατε',
          translit: '<strong>exelthate</strong> · go out, depart',
          description: 'The same root that names the Exodus. God&apos;s people are always being called out of the city of self-glorifying empire into the city of God.',
        },
        {
          kind: 'christ',
          id: 'rev18-christ-outside',
          title: 'Christ Connection — Outside the Camp',
          html: 'Hebrews 13:13 calls believers to go forth unto Christ &quot;outside the camp, bearing his reproach.&quot; Revelation 18 makes the same call in apocalyptic register. Christ Himself was crucified outside the city. To follow Him is to leave the city of self-glory and walk to the place of His shame and resurrection.',
        },
        {
          kind: 'carry',
          html: 'Coming out of Babylon is rarely a single dramatic exit. It is a thousand small refusals — refusing the lie that wealth makes you safe, that power makes you righteous, that comfort is the highest good.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-1',
          prompt: 'What does it mean, in concrete terms, for you to come out of Babylon this week?',
        },
      ],
    },

    {
      ref: 'Revelation 18:20–24',
      title: 'Heaven Rejoices',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(20, 'Rejoice over her, thou heaven, and ye holy apostles and prophets; for God hath avenged you on her.'),
            plain(21, 'And a mighty angel took up a stone like a great millstone, and cast it into the sea, saying, Thus with violence shall that great city Babylon be thrown down, and shall be found no more at all.'),
            plain(24, 'And in her was found the blood of prophets, and of saints, and of all that were slain upon the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev18-rejoice',
          html: 'Heaven&apos;s joy is not cruelty but vindication. The blood of the martyrs is not lost — it is remembered. God&apos;s justice does not forget. Every faithful death will be honored, every silent suffering will be heard, every cup of blood drunk by Babylon will be poured out before her judge.',
        },
        {
          kind: 'carry',
          html: 'Your tears are remembered. Your faithful suffering is not wasted. The God who sees Babylon&apos;s violence sees you, too — and on the day He judges her, He will vindicate you.',
        },
        {
          kind: 'reflection',
          id: 'rev18-ref-2',
          prompt: 'Where do you most need to know that God remembers? How does heaven&apos;s rejoicing change your weeping?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 18',
    quote: '&quot;Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues.&quot;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 18 · Study Guide',
  },
};
