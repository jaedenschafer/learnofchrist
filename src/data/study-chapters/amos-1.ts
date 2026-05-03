import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_1: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Amos is a shepherd from Tekoa, not a professional prophet. Yet God calls him to prophesy. The opening statement echoes like a drum: "The Lord roars out of Zion, and utters his voice from Jerusalem; and the habitations of the shepherds shall mourn, and the top of Carmel shall wither."',
    'Amos announces a series of burdens against the nations around Israel — Damascus, Gaza, Tyre, Edom, Ammon, Moab. Each announcement follows the pattern: "For three transgressions, and for four, I will not turn away the punishment thereof." The refrain is relentless. God&apos;s patience has limits. His judgment is sure.',
  ],

  bottomShare: {
    label: 'Share Amos 1',
    quote:
      '"For three transgressions, and for four, I will not turn away the punishment thereof." God&apos;s patience with the nations has a limit. Judgment is coming.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 1 · Study Guide',
  },

  sections: [
    {
      ref: 'Amos 1:1–5',
      title: 'The Roar from Zion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The words of Amos, who was among the herdmen of Tekoa, which he saw concerning Israel in the days of Uzziah king of Judah, and in the days of Jeroboam the son of Joash king of Israel, two years before the earthquake.'),
            {
              number: 2,
              spans: [
                t('And he said, The Lord will roar out of Zion, and utter his voice from Jerusalem; and the habitations of the shepherds shall mourn, and the top of Carmel shall wither.'),
              ],
            },
            plain(3, 'Thus saith the Lord; For three transgressions of Damascus, and for four, I will not turn away the punishment thereof; because they have threshed Gilead with instruments of iron:'),
            plain(4, 'But I will send a fire into the house of Hazael, which shall devour the palaces of Ben-hadad.'),
            plain(5, 'I will break also the bar of Damascus, and cut off the inhabitant from the plain of Aven, and him that holdeth the sceptre from the house of Eden: and the people of Syria shall go into captivity unto Kir, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos1-roar',
          html:
            'Amos begins not with his own voice but with the roar of the Lord. The Lord roars out of Zion. His voice thunders from Jerusalem. This roar will shake the nations. The shepherds will mourn. The pastures will wither. This is not a whisper but a declaration of judgment.',
        },
        {
          kind: 'hebrew',
          id: 'amos1-shaag',
          title: 'Shaag — "To Roar"',
          script: 'שָׁאַג',
          translit: '<strong>Shaag</strong> · to roar; to sound; to thunder',
          description:
            'The word "shaag" is the sound a lion makes — a roar that announces its presence and power. When God roars, all the earth knows it.',
        },
        {
          kind: 'carry',
          html:
            'Damascus will face judgment because they have threshed Gilead with instruments of iron — they have brutalized the people of God. Fire will devour the palaces. The scepter will be cut off. God does not forget cruelty. He will judge those who harm His people.',
        },
        {
          kind: 'christ',
          id: 'amos1-christ',
          title: 'Christ Connection — The Lion of the Tribe of Judah',
          html:
            'The roar of God from Zion echoes through the New Testament. "The Lord will roar out of Zion" becomes the roar of judgment and kingship. John sees this fulfilled: "Weep not: behold, the Lion of the tribe of Judah, the Root of David, hath prevailed" (Rev. 5:5). The same voice that thunders judgment against the nations in Amos is the voice of Jesus stepping forward to take the scroll of God\'s purposes. He roars not just as Judge but as King.',
        },
        {
          kind: 'reflection',
          id: 'amos1-roar-reflection',
          prompt: 'God roars out of Zion like a lion. What is He calling you to hear? How does His judgment on cruelty speak to you?',
        },
      ],
    },

    {
      ref: 'Amos 1:6–15',
      title: 'Burdens Against the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(6, 'Thus saith the Lord; For three transgressions of Gaza, and for four, I will not turn away the punishment thereof; because they carried away captive the whole captivity, to deliver them up to Edom:'),
            plain(7, 'But I will send a fire on the wall of Gaza, which shall devour the palaces thereof:'),
            plain(8, 'And I will cut off the inhabitant from Ashdod, and him that holdeth the sceptre from Ashkelon, and I will turn mine hand against Ekron: and the remnant of the Philistines shall perish, saith the Lord God.'),
            plain(9, 'Thus saith the Lord; For three transgressions of Tyrus, and for four, I will not turn away the punishment thereof; because they delivered up the whole captivity to Edom, and remembered not the brotherly covenant:'),
            plain(10, 'But I will send a fire on the wall of Tyrus, which shall devour the palaces thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos1-tyre-edom',
          html:
            'Tyre&apos;s crime is breaking the brotherly covenant; Edom&apos;s is keeping his anger forever. God indicts not only what they did but what they refused to forgive.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(11, 'Thus saith the Lord; For three transgressions of Edom, and for four, I will not turn away the punishment thereof; because he did pursue his brother with the sword, and did cast off all pity, and his anger did tear perpetually, and he kept his wrath for ever:'),
            plain(12, 'But I will send a fire upon Teman, which shall devour the palaces of Bozrah.'),
            plain(13, 'Thus saith the Lord; For three transgressions of the children of Ammon, and for four, I will not turn away the punishment thereof; because they have ripped up the women with child of Gilead, that they might enlarge their border:'),
            plain(14, 'But I will kindle a fire in the wall of Rabbah, and it shall devour the palaces thereof, with shouting in the day of battle, with a tempest in the day of the whirlwind:'),
            plain(15, 'And their king shall go into captivity, he and his princes together, saith the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos1-nations',
          html:
            'The pattern repeats: three transgressions, four, and judgment falls. Gaza for selling captives. Tyre for breaking covenant. Edom for pursuing his brother with anger. Ammon for ripping up women with child. Each nation has crossed a line. Each will be judged. The Lord does not show partiality. Justice is universal.',
        },
        {
          kind: 'carry',
          html:
            'The nations think they are beyond the reach of God&apos;s justice. They follow their own interests, satisfy their own pride, commit atrocities against those weaker than themselves. Yet God sees. God remembers. God will judge. Where are you tempted to think that your sins will go unnoticed? That your cruelty will be overlooked?',
        },
        {
          kind: 'reflection',
          id: 'amos1-nations-reflection',
          prompt: 'Amos announces judgment on many nations for their transgressions. How does God&apos;s universal justice affect the way you think about sin — your own and others&apos;?',
        },
      ],
    },

    {
      ref: 'Amos 1 · All',
      title: 'God&apos;s Justice Is Universal',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos1-theme',
          html:
            'Amos 1 establishes that God&apos;s justice is not limited to Israel. All nations are accountable to God. All will be judged. The nations may think themselves beyond God&apos;s reach, but the Lord roars out of Zion, and His voice reaches all the earth. His patience has limits. His judgment is certain.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
