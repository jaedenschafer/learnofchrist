import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 47 — The Fall of Babylon
 *
 * "Come down, and sit in the dust, O virgin daughter of Babylon...Thou
 * saidst, I shall be a lady for ever: but these things shall not come upon
 * thee." Babylon boasts of her glory and power. She says: I will be a lady
 * forever. I will sit as queen. But Isaiah proclaims her doom. "Evil shall
 * come upon thee...and thou shalt not know from whence it ariseth." In a
 * moment, in a day, Babylon will be humiliated. The judgment is not
 * arbitrary. It is the consequence of pride, sorcery, and the belief that
 * no one sees. But God sees. God judges.
 */
export const ISAIAH_47: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 47,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'After the promise to the faithful comes judgment on the oppressor. Babylon, the great power that has conquered the world, will fall. She sits in security, boasting of her power and eternity. But Isaiah pronounces her doom. Evil will come upon her. She will fall from her throne. She will lose her sons and her daughters. The wise men and sorcerers—all the sources of her confidence—will fail. This is the judgment on pride. This is the consequence of believing that you are accountable to no one, that your power will never end, that you will never face consequences. Babylon represents every power that sets itself against God. And such power will fall.',
  ],

  sections: [
    {
      ref: 'Isaiah 47:1–15',
      title: 'Babylon&apos;s Pride and Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(1, 'Come down, and sit in the dust, O virgin daughter of Babylon, sit on the ground: there is no throne, O daughter of the Chaldeans: for thou shalt no more be called tender and delicate.'),
            plain(2, 'Take the millstones, and grind meal: uncover thy locks, make bare the leg, uncover the thigh, pass over the rivers.'),
            plain(3, 'Thy nakedness shall be uncovered, yea, thy shame shall be seen: I will take vengeance, and I will not meet thee as a man.'),
            plain(4, 'As for our redeemer, the Lord of hosts is his name, the Holy One of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-virgin-mocked',
          html:
            '<p>A virgin sits in darkness, stripped of power. Babylon mocked the Lord; see what happens to her.[res:sefaria-isaiah-47]</p>',
        },
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(5, 'Sit thou silent, and get thee into darkness, O daughter of the Chaldeans: for thou shalt no more be called, The lady of kingdoms.'),
            plain(6, 'I was wroth with my people, I have polluted mine inheritance, and given them into thine hand: thou didst shew them no mercy; upon the ancient thou hast very heavily laid thy yoke.'),
            plain(7, 'And thou saidst, I shall be a lady for ever: so that thou didst not lay these things to thy heart, neither didst remember the latter end of it.'),
            plain(8, 'Therefore hear now this, thou that art given to pleasures, that dwellest carelessly, that sayest in thine heart, I am, and none else beside me; I shall not sit as a widow, neither shall I know the loss of children:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah47-pride-to-judgment',
          html:
            'Babylon is summoned down from her throne into the dust. She showed no mercy to others. Now comes the address to her pride: she says "I shall be a lady for ever," claiming eternal power and that she will never lose her position. But she did not remember how such kingdoms end. Now comes the specific judgment: what will befall her.[res:intertextual-isaiah-servant-nt]',
        },
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(9, 'But these two things shall come to thee in a moment in one day, the loss of children, and widowhood: they shall come upon thee in their perfection for the multitude of thy sorceries, and for the great abundance of thine enchantments.'),
            plain(10, 'For thou hast trusted in thy wickedness: thou hast said, None seeth me. Thy wisdom and thy knowledge, it hath turned thee aside; and thou hast said in thine heart, I am, and none else beside me.'),
            plain(11, 'Therefore shall evil come upon thee; thou shalt not know from whence it riseth: and mischief shall fall upon thee; thou shalt not be able to put it off: and desolation shall come upon thee suddenly, which thou shalt not know.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-virgin-mocked-2',
          html:
            '<p>Disaster will come upon Babylon; she cannot ward it off with magic. Ruin overtakes her suddenly.</p>',
        },
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(12, 'Stand now with thine enchantments, and with the multitude of thy sorceries, wherein thou hast laboured from thy youth; if so be thou shalt be able to profit, if so be thou mayest prevail.'),
            plain(13, 'Thou art wearied in the multitude of thy counsels. Let now the astrologers, the stargazers, let them stand up, and save thee from these things that shall come upon thee.'),
            plain(14, 'Behold, they shall be as stubble; the fire shall burn them; they shall not deliver themselves from the power of the flame: there shall not be a coal to warm at, nor fire to sit before it.'),
            plain(15, 'Thus shall they be unto thee with whom thou hast laboured, even thy merchants from thy youth: they shall wander every one to his quarter; none shall save thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah47-throne',
          html:
            'Babylon is addressed as a queen, and told to come down from her throne into the dust. She who was "the lady of kingdoms," ruling with tender delight, will grind meal like a slave. She will be stripped naked. She will be humiliated. This is not cruelty. This is the consequence of her cruelty to others. "Thou didst shew them no mercy; upon the ancient thou hast very heavily laid thy yoke."',
        },
        {
          kind: 'hebrew',
          id: 'isaiah47-geburah',
          title: 'Geburah — "Strength" (Power, Might)',
          script: 'גְבוּרַה',
          translit: '<strong>Geburah</strong> · strength, power, might; the capacity to exercise dominion',
          description:
            'Babylon trusted in her geburah—her strength and power. But all strength is transient. All power can be broken. Babylon did not consider that her power would end, that a greater power would humble her. Pride in power is blindness to the temporary nature of power.',
        },
        {
          kind: 'commentary',
          id: 'isaiah47-pride',
          html:
            'Babylon&apos;s fundamental sin is pride: "Thou saidst, I shall be a lady for ever...I am, and none else beside me." This is the sin of assuming eternal power, of denying that any other power exists, of believing that you are accountable to no one. God says: "For thou hast trusted in thy wickedness: thou hast said, None seeth me."' ,
        },
        {
          kind: 'commentary',
          id: 'isaiah47-sorceries',
          html:
            'Babylon relied on sorcery, astrology, enchantments, counsels. But all of these will fail. "Let them stand up, and save thee from these things that shall come upon thee." The wisdom of humans, the power of magic, the counsel of the wise—none of these can stand against the judgment of God. When the fire comes, the astrologers and stargazers are like stubble.',
        },
        {
          kind: 'christ',
          id: 'isaiah47-christ-judge',
          title: 'Christ Connection — Christ Judges Nations',
          html:
            'The judgment on Babylon in Isaiah is a foreshadowing of the judgment of all nations. In Revelation 14–18, Babylon becomes a symbol for any earthly power that sets itself against God. Christ is the judge of nations. Those who trust in power, wealth, wisdom, and the works of human hands will find these things fail. Only those who trust in God will endure.',
        },
        {
          kind: 'carry',
          html:
            'The message of this chapter is not primarily about Babylon. It is about the danger of pride, the illusion that human power is ultimate, the blindness that comes from refusing to acknowledge God. For every reader tempted to put faith in human systems, human power, human achievement—this chapter is a warning. Look at what happened to Babylon. Even the greatest earthly power cannot stand against God&apos;s judgment.',
        },
        {
          kind: 'reflection',
          id: 'isaiah47-earthly-power',
          prompt: 'What earthly power or system are you tempted to trust in? What would it look like to hold that trust lightly, knowing that all earthly power is temporary? How can you build your life on something that will not fall?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou saidst, I shall be a lady for ever...Therefore shall evil come upon thee; thou shalt not know from whence it riseth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 47 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-47',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 47',
      url: 'https://www.sefaria.org/Isaiah.47',
      description: 'Sefaria open-access source text and translations for Isaiah 47.',
    },
    {
      id: 'intertextual-isaiah-servant-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Isaiah Servant Song ↔ NT Fulfillment',
      url: 'https://intertextual.bible/',
      description: 'Servant songs (esp. Isaiah 53) and New Testament fulfillment in Christ.',
    },
  ],

  hasHebrew: true,
};
