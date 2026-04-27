import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_16: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 16,

  intros: [
    "Seven angels pour out the seven vials of the wrath of God upon the earth. Sores on those who took the mark of the beast. Sea and rivers turned to blood. Sun scorching with fire. Darkness on the beast&apos;s kingdom. Euphrates dried up. Three unclean spirits gather kings to Armageddon.",
    "The seventh vial brings the great voice from the throne: &quot;It is done.&quot; Earthquake, hail, and Babylon remembered before God. The whole sequence echoes the plagues of Egypt — but on a cosmic scale. The Lamb&apos;s wrath has come.",
  ],

  sections: [
    {
      ref: 'Revelation 16:1–11',
      title: 'The First Five Vials',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'And I heard a great voice out of the temple saying to the seven angels, Go your ways, and pour out the vials of the wrath of God upon the earth.'),
            plain(2, 'And the first went, and poured out his vial upon the earth; and there fell a noisome and grievous sore upon the men which had the mark of the beast, and upon them which worshipped his image.'),
            plain(3, 'And the second angel poured out his vial upon the sea; and it became as the blood of a dead man: and every living soul died in the sea.'),
            plain(4, 'And the third angel poured out his vial upon the rivers and fountains of waters; and they became blood.'),
            plain(8, 'And the fourth angel poured out his vial upon the sun; and power was given unto him to scorch men with fire.'),
            plain(10, 'And the fifth angel poured out his vial upon the seat of the beast; and his kingdom was full of darkness; and they gnawed their tongues for pain,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev16-plagues',
          html: 'These five plagues echo Egypt — sores like Exodus 9, water to blood like Exodus 7, darkness like Exodus 10. The God who delivered Israel from a tyrant now delivers His people from the final tyrant. Yet the response is the same: those who feel the plague gnaw their tongues for pain and refuse to repent.',
        },
        {
          kind: 'greek',
          id: 'rev16-thumos',
          title: 'Thumos — Wrath',
          script: 'θυμός',
          translit: '<strong>thumos</strong> · burning anger',
          description: 'The wrath of God is not impulsive rage but settled, judicial anger against persistent evil. After centuries of patience, the cup is full.',
        },
        {
          kind: 'christ',
          id: 'rev16-christ-blood',
          title: 'Christ Connection — The Cup We Did Not Drink',
          html: 'In Gethsemane Christ prayed, &quot;Let this cup pass from me,&quot; then drank it down. The wrath poured out in chapter 16 is the wrath that Christ already drank for those who trust in Him. The unrepentant in Revelation are those who refused the cross-gift of substitution.',
        },
        {
          kind: 'carry',
          html: 'Wrath delayed is not wrath denied. God is patient — but His patience has a horizon. The merciful invitation of Christ stands now; do not presume on the kindness that leads us to repentance (Romans 2:4).',
        },
        {
          kind: 'reflection',
          id: 'rev16-ref',
          prompt: 'Where is God being patient with you? What would it look like to receive that patience as an invitation to turn?',
        },
      ],
    },

    {
      ref: 'Revelation 16:12–21',
      title: 'Armageddon and &quot;It Is Done&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(12, 'And the sixth angel poured out his vial upon the great river Euphrates; and the water thereof was dried up, that the way of the kings of the east might be prepared.'),
            plain(13, 'And I saw three unclean spirits like frogs come out of the mouth of the dragon, and out of the mouth of the beast, and out of the mouth of the false prophet.'),
            plain(16, 'And he gathered them together into a place called in the Hebrew tongue Armageddon.'),
            plain(17, 'And the seventh angel poured out his vial into the air; and there came a great voice out of the temple of heaven, from the throne, saying, It is done.'),
            plain(19, 'And the great city was divided into three parts, and the cities of the nations fell: and great Babylon came in remembrance before God, to give unto her the cup of the wine of the fierceness of his wrath.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev16-armageddon',
          html: 'The great kings of the earth gather for what looks like the final assault on God&apos;s people. But it is only an assembly to be undone. The seventh vial brings the verdict from the throne: &quot;It is done.&quot; The same voice from heaven that said &quot;tetelestai&quot; on the cross now says it over the kingdom of evil. Christ&apos;s finished work brings the unfinishing of every false power.',
        },
        {
          kind: 'christ',
          id: 'rev16-christ-done',
          title: 'Christ Connection — &quot;It Is Done&quot;',
          html: 'On Calvary Jesus said &quot;It is finished&quot; (John 19:30). Here from the throne the same word is said over the dragon&apos;s kingdom. The cross is the point at which evil&apos;s defeat is sealed; Revelation 16 is the point at which it is announced. The two moments belong to the same event.',
        },
        {
          kind: 'carry',
          html: 'The fight you are caught in today is fought from a finished cross. You may not see the end yet, but the verdict is already given.',
        },
        {
          kind: 'reflection',
          id: 'rev16-ref-done',
          prompt: 'Where in your life do you most need to hear the throne&apos;s voice say, &quot;It is done&quot;? What changes when you believe that voice over the noise of your circumstances?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 16',
    quote: '&quot;It is done.&quot; The same voice that finished redemption from the cross finishes the kingdom of evil from the throne.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 16 · Study Guide',
  },
};
