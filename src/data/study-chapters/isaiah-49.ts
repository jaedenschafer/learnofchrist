import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 49 — The Servant Song: Light to the Gentiles
 *
 * The prophet speaks as the Servant of God. "I will also give thee for a light
 * to the Gentiles." Israel and the nations will see His salvation. This is the
 * second Servant Song, building on the theology of chapter 42: the Servant is
 * called to bring restoration to Jacob and light to the Gentiles. And yet the
 * Servant feels despised, his labor in vain. Yet the Lord will exalt him.
 */
export const ISAIAH_49: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 49,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 5 },
  intros: [
    'In chapter 49, the Servant of God speaks directly to the nations. His voice carries both humility and cosmic authority. The Lord has formed him from the womb to be a servant, yet his labor seems fruitless—the children of Israel do not appear to be restored. Yet the Lord promises something far greater: the Servant will be a light to the Gentiles, that His salvation may reach to the ends of the earth. Here is the turning point: God\'s plan extends beyond a single people. The Servant\'s mission encompasses all nations.',
  ],

  sections: [
    {
      ref: 'Isaiah 49:1–6',
      title: 'The Servant Called and Sent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(1, 'Listen, O isles, unto me; and hearken, ye people, from far; The Lord hath called me from the womb; from the bowels of my mother made he mention of my name.'),
            plain(2, 'And he hath made my mouth like a sharp sword; in the shadow of his hand hath he hid me, and made me a polished shaft; in his quiver hath he hid me;'),
            plain(3, 'And said unto me, Thou art my servant, O Israel, in whom I will be glorified.'),
            plain(4, 'Then I said, I have laboured in vain, I have spent my strength for nought and in vain: yet surely my judgment is with the Lord, and my work with my God.'),
            plain(5, 'And now, saith the Lord that formed me from the womb to be his servant, to bring Jacob again to him, Though Israel be not gathered, yet shall I be glorious in the eyes of the Lord, and my God shall be my strength.'),
            plain(6, 'And he said, It is a light thing that thou shouldest be my servant to raise up the tribes of Jacob, and to restore the preserved of Israel: I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa49-called',
          html:
            'The Servant opens by addressing the distant nations and peoples. He is called from the womb, formed by God before birth for a specific purpose. His mouth is made like a sharp sword—his word cuts with divine authority and truth. He is hidden in the shadow of God\'s hand, protected and prepared. And yet there is a cry of desolation: "I have laboured in vain, I have spent my strength for nought." The Servant feels his work has failed, that Israel is not restored. This is the cry of faithfulness in darkness, of service that seems fruitless.',
        },
        {
          kind: 'hebrew',
          id: 'isa49-or',
          title: 'Or — "Light"',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light; illumination; revelation',
          description:
            'The Hebrew word or means light in the most literal sense—that which illuminates darkness. But it also carries a metaphorical weight throughout Scripture. To be given as a light is to be made a bearer of truth, a revealer of God\'s way. The Servant is promised not merely to shine, but to bring God\'s salvation—His redemption and restoration—to the ends of the earth.',
        },
        {
          kind: 'christ',
          id: 'isa49-christ-light',
          title: 'Christ Connection — The Light of the Gentiles',
          html:
            'In Luke 2:32, Simeon blesses the infant Jesus as "a light to lighten the Gentiles." That promise made in Isaiah 49 finds its fulfillment in Jesus. He is the Servant who was hidden in the shadow of the Father\'s hand, whose mouth speaks the word of God with authority, and whose mission extends to all nations. Though His earthly ministry seemed to end in apparent failure—He was rejected, crucified, seemingly defeated—He rose again, and His light now reaches to the ends of the earth through the gospel. He is the world\'s true light.',
        },
        {
          kind: 'carry',
          html:
            'The Servant in Isaiah feels his labor is in vain. How many times do we work faithfully, pouring out our strength, only to see no visible fruit? The promise Isaiah receives is that God does not measure success as we do. The Lord\'s judgment is not with us, but with Him. What appears fruitless in our eyes may be glorious in His. And beyond our own small sphere, God is always at work in ways we cannot see, reaching nations and peoples beyond our knowledge.',
        },
        {
          kind: 'reflection',
          id: 'isa49-labor',
          prompt: 'When you have labored faithfully at something and felt your strength was spent in vain, what sustained you? How does it change your perspective to know that God\'s judgment of your work may be very different from your own?',
        },
      ],
    },

    {
      ref: 'Isaiah 49:7–13',
      title: 'The Exalted Servant and His Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(7, 'Thus saith the Lord, the Redeemer of Israel, and his Holy One, to him whom man despiseth, to him whom the nation abhorreth, to a servant of rulers, Kings shall see and arise, princes also shall worship, because of the Lord that is faithful, and the Holy One of Israel, and he shall choose thee.'),
            plain(8, 'Thus saith the Lord, In an acceptable time have I heard thee, and in a day of salvation have I helped thee: and I will preserve thee, and give thee for a covenant of the people, to establish the earth, to cause to inherit the desolate heritages;'),
            plain(9, 'That thou mayest say to the prisoners, Go forth; to them that are in darkness, Show yourselves. They shall feed in the ways, and their pastures shall be in all high places.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-light-nations',
          html:
            '<p>I am a light to the nations; My salvation reaches to the end of the earth. I will lead the blind and thirsty home.[res:sefaria-isaiah-49]</p>',
        },
        {
          kind: 'scripture',
          chapter: 49,
          lines: [
            plain(10, 'They shall not hunger nor thirst; neither shall the heat nor sun smite them: for he that hath mercy on them shall lead them, even by the springs of water shall he guide them.'),
            plain(11, 'And I will make all my mountains a way, and my highways shall be exalted.'),
            plain(12, 'Behold, these shall come from far: and, lo, these from the north and from the west; and these from the land of Sinim.'),
            plain(13, 'Sing, O heavens; and be joyful, O earth; and break forth into singing, O mountains: for the Lord hath comforted his people, and will have mercy upon his afflicted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa49-exaltation',
          html:
            'The Servant who is despised by men, who is abhorred by the nations, who serves under rulers—this lowly one shall be exalted. Kings shall rise and worship Him. Princes shall bow. The God who is faithful chooses Him. There is a reversal happening: humiliation becomes exaltation, rejection becomes honor. And the Servant\'s work is to free prisoners, to bring light to those in darkness. He becomes a covenant for the people—the means by which a new covenant, a new relationship between God and humanity, is established.',
        },
        {
          kind: 'commentary',
          id: 'isa49-return',
          html:
            'From all corners of the earth, people will return. From far away, from the north, from the west, from the land of Sinim (Ethiopia). The prophecy envisions a great gathering, a homecoming. And the heavens and earth are called to sing. Creation itself joins the chorus of joy because God has comforted His people and has mercy upon the afflicted.[res:intertextual-isaiah-servant-nt]',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 49 teaches that exaltation follows faithfulness, not ease. The Servant does not achieve glory by earthly standards. He is despised, rejected, seemingly a failure. Yet in God\'s economy, it is precisely this humiliation that becomes the path to honor. We are tempted to measure worth by social status, by the approval of influential people. Isaiah invites us to measure by God\'s measure: Are you faithful? Are you serving? Do you pursue mercy and light? Then you are glorious, regardless of what the world thinks.',
        },
        {
          kind: 'reflection',
          id: 'isa49-despised',
          prompt: 'The Servant is despised and rejected, yet is called "glorious" in God\'s eyes. What does this tell you about how God defines worth and success?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 49 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-isaiah-49',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 49',
      url: 'https://www.sefaria.org/Isaiah.49',
      description: 'Sefaria open-access source text and translations for Isaiah 49.',
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
