import { hp, hy, hg, t, type RichChapterContent } from './types';

export const REVELATION_12: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 12,

  intros: [
    'Revelation 12 brings the cosmic story full circle. In Genesis 3:15, God promised that the seed of the woman would crush the serpent&apos;s head. Here, in apocalyptic vision, we see that promise carried out. A woman clothed with glory stands in heaven. A great red dragon waits to devour her child. The child is caught up to God&apos;s throne. War breaks out in heaven. And Satan, that old serpent, is cast down to the earth, his time running short.',
    'But the vision doesn&apos;t end with the man child. It continues with the woman fleeing into the wilderness and her remnant—those who keep God&apos;s commandments and hold the testimony of Jesus—standing against the dragon&apos;s wrath. The identity of the woman has long been debated: Israel, Mary, the church, or a symbol holding all three together. What matters is what the symbols show: God&apos;s people under attack, Christ risen and reigning, and victory won not by the sword but by the blood of the Lamb and the word of their testimony.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /woman.*dragon|dragon.*woman|revelation.*12/i,
    caption: 'The Woman Clothed with the Sun',
  },

  sections: [
    {
      ref: 'Revelation 12:1–2',
      title: 'The Woman Clothed with the Sun',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('And there '),
                hy('appeared a great wonder in heaven', 'c-semeion'),
                t('; a woman clothed with the sun, and the moon under her feet, and upon her head a crown of twelve stars:'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'c-semeion',
          title: 'Sēmeion — "Sign" or "Wonder"',
          script: 'σημεῖον',
          translit: '<strong>sēmeion</strong> · a sign; something that points beyond itself',
          description: 'John has used this word throughout the Gospel to describe Jesus&apos; miracles—signs pointing to who He is. Here at the start of Revelation 12, the "great sign" is not an event but a vision: the woman, the dragon, the birth, the war in heaven. This is symbolic vision told as apocalyptic reality.',
        },
        {
          kind: 'commentary',
          id: 'c-clothed',
          html: 'The woman is clothed with the sun—the highest light, divine glory. The moon is under her feet. The crown of twelve stars echoes the twelve tribes of Israel. Yet these symbols are not photographs of a single person or group. They are layered: Israel, the mother of the Messiah; Mary, the vessel of the Incarnation; the church, the bride of Christ. The vision holds all three without collapsing into one. What matters is not who she "really is" but what the symbols say: God&apos;s people carry the promise. They are covered with His glory. They are set apart and crowned.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                t('And she being with child '),
                hy('cried, travailing in birth, and pained to be delivered', 'c-childbirth'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-childbirth',
          html: 'The language of birth-pain echoes Isaiah 26:17–18: "Like as a woman with child, that draweth near the time of her delivery, is in pain, and crieth out in her pangs… We have been with child… but we have brought forth wind." But here, the woman&apos;s cry is not futile. She will deliver. What she bears is no vapor but the one "who was to rule all nations with a rod of iron."',
        },
      ],
    },

    {
      ref: 'Revelation 12:3–4',
      title: 'The Great Red Dragon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('And there '),
                hy('appeared another wonder in heaven', 'c-wonder2'),
                t('; and behold a great red dragon, having seven heads and ten horns, and seven crowns upon his heads.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wonder2',
          html: 'The second great sign—the dragon—mirrors the first. Both are visions, both are cosmic symbols. The dragon is vast and terrible, yet his appearance only amplifies the truth: the conflict between the woman and the dragon is not personal but cosmic. Two powers face off: the seed-bearer of God and the ancient deceiver.',
        },
        {
          kind: 'greek',
          id: 'c-drakōn',
          title: 'Drakōn — "Dragon"',
          script: 'δράκων',
          translit: '<strong>drakōn</strong> · a great serpent; the ancient enemy',
          description: 'The dragon in John&apos;s vision is not mythology for mythology&apos;s sake. Verse 9 names him plainly: "the great dragon… that old serpent, called the Devil, and Satan." The heads and horns echo Daniel 7—earthly powers under satanic rule. But the red dragon is Satan himself, not merely the powers he moves. Behind every idol, every throne, every false gospel stands this ancient deceiver.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('And '),
                hy('his tail drew the third part of the stars of heaven', 'c-stars'),
                t(', and did cast them to the earth: and the dragon stood before the woman which was ready to be delivered, '),
                hg('for to devour her child as soon as it was born', 'c-devour'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stars',
          html: 'The third of the stars may refer to the angels who fell with Satan (2 Peter 2:4; Jude 1:6). Or they may symbolize the nations over which the dragon holds sway—all those powers arrayed against God&apos;s people. Either way, the dragon wields terrible force, yet even his greatest numbers fall short. Two-thirds of the stars remain. God&apos;s throne is not shaken.',
        },
        {
          kind: 'commentary',
          id: 'c-devour',
          html: 'The dragon&apos;s intent is to destroy the child the moment He is born. This echoes Herod&apos;s slaughter of the infants in Matthew 2, and more broadly, Satan&apos;s ancient scheme: if the seed of the woman can be killed, the promise of Genesis 3:15 dies with Him. But the dragon is too late. The child is already coming.',
        },
      ],
    },

    {
      ref: 'Revelation 12:5',
      title: 'The Man Child Caught Up to God&apos;s Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('And she brought forth a man child, '),
                hp('who was to rule all nations with a rod of iron', 'christ-messianic'),
                t(': and her child was '),
                hp('caught up unto God, and to his throne', 'christ-exaltation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-messianic',
          title: 'Christ Connection — The Messianic King of Psalm 2',
          html: 'The phrase "rule all nations with a rod of iron" comes directly from Psalm 2:9: "Thou shalt break them with a rod of iron; thou shalt dash them in pieces like a potter&apos;s vessel." This is the Messiah&apos;s coronation psalm, where God says to His Son: "Ask of me, and I shall give thee the heathen for thine inheritance, and the uttermost parts of the earth for thy possession" (Psalm 2:8). Jesus, born of a woman in history, is the King of all nations. Every kingdom of this world, every power, every principality will eventually bow. The rod of iron is not mercy; it is judgment executed in perfect justice.',
        },
        {
          kind: 'christ',
          id: 'christ-exaltation',
          title: 'Christ Connection — The Ascension and Session',
          html: 'The man child is caught up to God&apos;s throne. This is the Ascension: Jesus, after His resurrection, returns to the Father and sits down at His right hand (Hebrews 1:3, 10:12). He does not stay on earth. The dragon cannot touch Him. He is beyond the reach of earthly power, seated in the heavenly places, far above all principality and power and might and dominion (Ephesians 1:21). From the throne, He waits for His enemies to be made His footstool (Psalm 110:1).',
        },
        {
          kind: 'carry',
          html: 'If Jesus sits enthroned in heaven, untouchable and undefeated, then every power that rages against His people—every persecutor, every plague, every lie—has already lost. The dragon knows this. His time is short. What does it mean for your daily life that the child of the woman is already caught up to God&apos;s throne?',
        },
      ],
    },

    {
      ref: 'Revelation 12:6',
      title: 'The Woman Flees Into the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('And the woman fled into the wilderness, where she hath a place '),
                hg('prepared of God', 'c-wilderness'),
                t(', that they should feed her there a thousand two hundred and threescore days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wilderness',
          html: 'The wilderness is not a place of punishment but of refuge. God has prepared it. The woman is fed there—sustained, protected, hidden. The number 1,260 days is forty-two months, or three and a half years: the span of tribulation described throughout Revelation. But her time in hiding is not indefinite. It is measured. It is under God&apos;s control. Exodus echoes here too: as God fed Israel in the wilderness for forty years, so He feeds the woman in her season of trial. The wilderness is where God meets His people in their distress.',
        },
      ],
    },

    {
      ref: 'Revelation 12:7–9',
      title: 'War in Heaven: Michael Against the Dragon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('And '),
                hy('there was war in heaven', 'c-war'),
                t(': '),
                hg('Michael and his angels fought against the dragon', 'c-michael'),
                t('; and the dragon fought and his angels,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-war',
          html: 'War in heaven. This is not metaphor in a distant past. John is describing events as they break into time and history. The cosmic conflict that began in Genesis—when Satan rebelled and fell—now reaches its climax. Earth is about to become the stage for the final battle. What plays out in flesh and blood on the earth is the echo and shadow of what first broke out in heaven.',
        },
        {
          kind: 'commentary',
          id: 'c-michael',
          html: 'Michael is the archangel—the commander of God&apos;s heavenly forces. He appears in Daniel 10:13 and 12:1 as the prince who fights for God&apos;s people. Here, his enemy is the dragon himself. This is not a conflict between equals. Michael is God&apos;s servant; the dragon is a rebel. The outcome was never in doubt.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('And '),
                hy('prevailed not', 'c-prevail'),
                t('; neither was their place found any more in heaven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prevail',
          html: 'The dragon and his angels lost. They were defeated. This is the judgment John announces: Satan loses his place in heaven. For how long has he stood there "accusing" the saints before God (verse 10)? That season is ending.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                t('And '),
                hp('the great dragon was cast out', 'c-cast-out'),
                t(', that old serpent, called the Devil, and Satan, which deceiveth the whole world: '),
                hp('he was cast out into the earth', 'c-cast-earth'),
                t(', and his angels were cast out with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cast-earth',
          html: 'Cast out into the earth—this is the move that unleashes Satan&apos;s fury on the world. He knows he has lost heaven. He knows his time is short. And so he vents his rage upon the earth and its people. This is why the remainder of Revelation shows increasing tribulation. Satan, cornered and desperate, strikes hardest when he is most defeated.',
        },
        {
          kind: 'christ',
          id: 'c-cast-out',
          title: 'Christ Connection — The Power of Christ Over Satan',
          html: 'John names Satan plainly here: "the great dragon… that old serpent, called the Devil, and Satan, which deceiveth the whole world." Every lie, every idolatry, every false gospel that spreads across the earth comes from him. Yet he is cast out. His expulsion is not the end—he is cast to the earth, where he will yet do terrible damage (verse 12)—but it is a decisive defeat. In the Gospels, Jesus says, "I beheld Satan as lightning fall from heaven" (Luke 10:18). Some interpret this as the original fall; others as the cross and resurrection, where Christ&apos;s victory becomes clear. Either way, Satan&apos;s power over heaven—his place of accusation—is broken by Christ.',
        },
        {
          kind: 'carry',
          html: 'Satan is a defeated foe. He knows it. He rages on earth with special fury because he "knoweth that he hath but a short time" (verse 12). When you face spiritual opposition, temptation, slander, or lies, remember: the one behind them has already lost. He is cast down. His place in heaven is gone. You are fighting on the side that has won.',
        },
      ],
    },

    {
      ref: 'Revelation 12:10–12',
      title: '"They Overcame Him by the Blood of the Lamb"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('And I heard a loud voice saying in heaven, '),
                hy('Now is come salvation, and strength, and the kingdom of our God, and the power of his Christ', 'c-now'),
                t(': '),
                hg('for the accuser of our brethren is cast down', 'c-accuser'),
                t(', which accused them before our God day and night.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-now',
          html: 'Now is come—the time of waiting is over. The promise is here. Salvation has arrived. Strength has come. The kingdom has come near. And the power of Christ is active, executing judgment. This is the proclamation that echoes through heaven: the future that was promised has broken into the present moment.',
        },
        {
          kind: 'greek',
          id: 'c-accuser',
          title: 'Kategōr — "Accuser"',
          script: 'κατήγορος',
          translit: '<strong>kategōr</strong> · one who accuses before a judge; Satan as prosecuting attorney',
          description: 'In the heavenly court, Satan has stood as the accuser of God&apos;s people, day and night, without rest. He brings charges against you before God. But when he is cast out of heaven, his role as accuser ends. The court is closed to him. This is why Paul can write, "Who shall lay any thing to the charge of God&apos;s elect?" (Romans 8:33). The accuser is expelled.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hp('they overcame him by the blood of the Lamb', 'christ-victory'),
                t(', and by the '),
                hy('word of their testimony', 'c-testimony'),
                t('; and they loved not their lives unto the death.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-victory',
          title: 'Christ Connection — The Blood of the Lamb as Conquering Power',
          html: 'The Lamb is Jesus. His blood is the price paid for redemption (Ephesians 1:7; 1 Peter 1:18–19; 1 John 1:7). But here it is not offered as payment to God—God needed no payment. Rather, the blood of the Lamb is the weapon by which the saints overcome Satan. How? Because in the cross, Christ defeated Satan. He broke the hold of sin, death, and fear—the very weapons Satan uses. When you stand under the blood of Christ—when you claim the forgiveness and protection purchased by His death—you stand in a fortress Satan cannot breach. His accusations lose their power. His threats lose their sting. You are covered by the blood of the only One he could not defeat.',
        },
        {
          kind: 'greek',
          id: 'c-testimony',
          title: 'Martyria — "Testimony" or "Witness"',
          script: 'μαρτυρία',
          translit: '<strong>martyria</strong> · witness, evidence, a word spoken in court',
          description: 'The Greek word for testimony is related to "martyr." The saints overcome not only by Christ&apos;s blood but by the word of their testimony—their witness to what Christ has done, spoken openly, even unto death. Their words matter. The truth matters. Standing firm in faith matters. This is not passivity; it is active, courageous witness.',
        },
        {
          kind: 'commentary',
          id: 'c-not-love-lives',
          html: '"They loved not their lives unto the death" means they were willing to lose everything—their comfort, their reputation, their very lives—rather than deny Jesus. This is not morbid. It is the ultimate freedom: to have nothing left to fear because you have already given all to Christ. When your life is His, when death itself is surrender to Him, Satan has no leverage over you.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('Therefore rejoice, ye heavens, and ye that dwell in them. Woe to the inhabiters of the earth and of the sea! for the devil is come down unto you, having great wrath, because he knoweth that he hath but a short time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-woe',
          html: 'The heavens rejoice, but the earth has reason to grieve. Satan is coming down, expelled from heaven, and his anger is immense because he knows his time is limited. He cannot win. But he can cause suffering before the end. This is why Revelation is a book of tribulation—Satan will rage against God&apos;s people on earth precisely because he has lost in heaven. Yet even this is under God&apos;s control. A time has been appointed. Satan&apos;s fury is measured. It will end.',
        },
      ],
    },

    {
      ref: 'Revelation 12:13–16',
      title: 'The Dragon Persecutes the Woman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 13,
              spans: [
                t('And when the dragon saw that he was cast unto the earth, '),
                hg('he persecuted the woman which brought forth the man child', 'c-persecute'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-persecute',
          html: 'Expelled from heaven, Satan turns his fury to earth. His target: the woman, the people of God. If he cannot touch the man child—who sits on God&apos;s throne—he will attack His mother, His people, His bride. This is the pattern of persecution that has marked the church since its birth: Herod&apos;s slaughter, Jewish opposition, Roman cruelty, Islamic conquest, communist purges, modern marginalization. The form changes, but the source remains. Satan, cast down, making war on the saints.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('And to the woman were given '),
                hy('two wings of a great eagle', 'c-eagle'),
                t(', that she might fly into the wilderness, into her place, where she is nourished for a time, and times, and half a time, from the face of the serpent.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eagle',
          html: 'The eagle recalls God&apos;s protection of Israel: "Ye have seen what I did unto the Egyptians, and how I bare you on eagles&apos; wings, and brought you unto myself" (Exodus 19:4). God gives the woman escape—wings to flee, a prepared place, provision for her season of testing. "A time, and times, and half a time" is three and a half years, the same 1,260 days of verse 6. Her flight and her feeding are not endless wanderings but a measured period under divine care.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('And the serpent cast out of his mouth '),
                hg('water as a flood after the woman', 'c-flood'),
                t(', that he might cause her to be carried away of the flood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-flood',
          html: 'The dragon tries to drown her. The flood may represent armies, persecution, false doctrine—waves of violence meant to overwhelm God&apos;s people. Yet the flood fails.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 16,
              spans: [
                t('And the earth helped the woman, and the earth opened her mouth, and swallowed up the flood which the dragon cast out of his mouth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-earth-help',
          html: 'Even the earth—the material world, the created order—helps the woman. God moves through all of creation to shield His people. The flood is swallowed. The attack fails. This is God&apos;s care: not passive, but active. He works through nature, through circumstances, through the plans of earthly powers—often without the church realizing it—to preserve His people.',
        },
      ],
    },

    {
      ref: 'Revelation 12:17',
      title: 'The Remnant of Her Seed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 17,
              spans: [
                t('And the dragon was wroth with the woman, and went to make war with '),
                hg('the remnant of her seed, which keep the commandments of God, and have the testimony of Jesus Christ', 'c-remnant'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-remnant',
          title: 'Christ Connection — Genesis 3:15 Fulfilled in the Church',
          html: 'Genesis 3:15 promised: "The seed of the woman shall bruise thy head." In one sense, Jesus Christ is that seed—He crushed Satan&apos;s head in His death and resurrection. But the verse is not exhausted. The woman has a remnant, a people, who carry forward the seed of her testimony. They "keep the commandments of God" (obedience) and "have the testimony of Jesus Christ" (witness). This is the church in every age: the bride of Christ, the body of Christ, the people who belong to Him. They are her seed—born from her, animated by His life, continuing His work of bearing witness to the world. Satan wages war on them because he cannot touch their Head. But they, like Him, overcome. They, like Him, refuse to bow. And they, like Him, will reign.',
        },
        {
          kind: 'reflection',
          id: 'r-who-are-you',
          prompt: 'The vision shows the woman&apos;s remnant—those who keep God&apos;s commandments and hold the testimony of Jesus. Who are they? Not a distant future church, but believers living now. Is this you? What does it mean to "keep the commandments of God" in a world that dismisses them? What testimony of Jesus can you give today?',
        },
      ],
    },

    {
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /revelation|apocalypse/i,
          matchArtist: /tissot/i,
          caption: 'The War in Heaven',
        },
        {
          kind: 'carry',
          html: 'Revelation 12 is not a prophecy to puzzle over passively. It is a declaration of Christ&apos;s victory and an invitation to join the remnant. Satan is cast down. Christ sits on the throne. The woman is protected. And those who bear the testimony of Jesus—who refuse to compromise, who stand on God&apos;s word, who love Christ more than their own lives—are promised the same fate as their Master: to overcome, to reign, to endure to the end. In what way does the dragon press you? What is one way you can bear witness to Christ&apos;s victory today?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 12',
    quote: 'A woman clothed with the sun gives birth to a man child who will rule all nations. The great red dragon waits to devour Him, but the child is caught up to God&apos;s throne. War breaks out in heaven. Satan is cast down. And those who keep God&apos;s commandments and hold the testimony of Jesus overcome him by the blood of the Lamb.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 12 · Study Guide',
  },

  hasHebrew: false,
};
