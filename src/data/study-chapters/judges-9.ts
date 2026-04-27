import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 9 — Abimelech&apos;s Bloody Kingship
 *
 * A cautionary study of how ambition, fratricide, and false leadership
 * unravel under God&apos;s just judgment. Features Jotham&apos;s parable of the trees,
 * one of Scripture&apos;s earliest and most cutting political warnings.
 */
export const JUDGES_9: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 9,

  intros: [
    'Judges 9 tells the story of Abimelech, a man born in the shadow of his father Gideon&apos;s greatness — and consumed by the desire to seize power that was never meant to be his. Abimelech murders his 70 brothers in a single act of fratricide, crowns himself king with the help of bribed elders, and rules for three years. But his regime is rotten from its first day, and God&apos;s judgment comes quietly at first, then violently. A woman with a millstone piece and a moment of vanity at the end bring it all down.',
    'This chapter shows what happens when ambitious men exploit the moment, corrupt the people, and build on blood. It is also a study in how God keeps His word — through Jotham&apos;s curse, through "fire from Abimelech to Shechem and fire from Shechem back to Abimelech," through a woman, through an ordinary millstone. The Lord repays.',
  ],

  bottomShare: {
    label: 'Share Judges 9',
    quote:
      'Thus God rendered the wickedness of Abimelech which he did unto his father in slaying his brethren; and all the evil of the men of Shechem did God render upon their heads.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 9:56–57 · Study Guide',
  },

  sections: [
    /* ─── Judges 9:1–6 — Abimelech Secures Shechem ─────────────────────────── */
    {
      ref: 'Judges 9:1–6',
      title: 'Ambition, Betrayal, and Bribery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And Abimelech the son of '),
                hy('Jerubbaal', 'abimelech-father'),
                t(' went to Shechem unto his mother&apos;s brethren, and communed with them, and with all the family of the house of his mother&apos;s father, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Speak, I pray you, in the ears of all the men of Shechem, Whether is better for you, either that all the sons of '),
                hg('Jerubbaal, which are threescore and ten persons, reign over you', 'abimelech-choice'),
                t(', or that '),
                hg('one reign over you', 'abimelech-choice'),
                t('? remember also that I am your bone and your flesh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'abimelech-father',
          html:
            'Abimelech is the son of Gideon, called Jerubbaal ("may Baal contend"), who earlier won a great victory against Midian. But Gideon made his own compromise in chapter 8 — he made an ephod, a priestly garment, which became an idol. Gideon also took many wives and fathered many sons. This chapter is what that compromise looks like a generation later: a half-brother with a claim to power, no legitimate succession, and a window of opportunity.',
        },
        {
          kind: 'commentary',
          id: 'abimelech-choice',
          html:
            'Notice the lie. Abimelech presents himself as <em>a part of you</em> — your brother, your blood. And he frames the choice as either many rulers or one. But the question itself is false. No one asked for either. The real choice the people should have seen was: no king, and the judges God has sent.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 3,
              spans: [
                t('And his mother&apos;s brethren spake of him in the ears of all the men of Shechem: and their hearts inclined to follow Abimelech; for they said, He is our brother.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they gave him threescore and ten pieces of silver out of the house of '),
                hy('Baal-berith', 'baal-berith'),
                t('; wherewith Abimelech hired vain and light persons, which followed him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'baal-berith',
          title: 'Baal-berith — "lord of the covenant"',
          script: 'בַּעַל־בְּרִית',
          translit: '<strong>baal-berith</strong> · a Canaanite god; covenant-lord',
          description:
            'Seventy pieces of silver from the house of a false god to buy a false king. Every word here — bribed, hired, "vain and light" mercenaries — tells the story of corruption laying its foundation.',
        },
        {
          kind: 'carry',
          html:
            'Abimelech&apos;s move begins with an appeal to kinship and a false choice. Pay attention to the appeals that come your way — the voice that says "you&apos;re one of us" while asking you to choose between two wrong options. The Spirit of God often works differently: not by making you feel special, but by pointing you toward what is actually true. When someone claims kinship but asks you to betray the rest, that is when wisdom looks more carefully at the choice itself.',
        },
        {
          kind: 'reflection',
          id: 'ambition-refl',
          prompt: 'Where have you felt the pull of ambition dressed up as belonging? What is one time you chose clarity over the appeal to kinship?',
        },
      ],
    },

    /* ─── Judges 9:5 — The Slaughter on One Stone ────────────────────────────── */
    {
      ref: 'Judges 9:5',
      title: 'Fratricidal Massacre',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 5,
              spans: [
                t('And he went unto his father&apos;s house at Ophrah, and '),
                hg('slew his brethren the sons of Jerubbaal, being threescore and ten persons, upon one stone', 'massacre-stone'),
                t(': '),
                hp('notwithstanding yet Jotham the youngest son of Jerubbaal was left', 'jotham-escape'),
                t('; for he hid himself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'massacre-stone',
          html:
            'Seventy brothers, one stone. The detail is not accidental. It is the most brutal consolidation of power in Scripture so far. One stone means they are killed together, like animals for a sacrifice. The text does not look away from what this is: murder, planned and total. Abimelech&apos;s path to the throne runs through the bodies of his own family.',
        },
        {
          kind: 'commentary',
          id: 'jotham-escape',
          html:
            'One survives. Jotham, the youngest, escapes to hide. That escape will matter. There is a witness. There is also an heir to Gideon&apos;s name and to God&apos;s justice. Abimelech&apos;s first act should have taught him that you cannot murder everyone.',
        },
        {
          kind: 'carry',
          html:
            'The violence that ambition requires is rarely hidden for long. A career built on undermining others. A reputation built on discrediting those who might challenge you. An inheritance claimed by cutting out the competition. Scripture asks you to see these patterns for what they are. One stone, one act of fratricide — and a man has made himself king of ashes.',
        },
        {
          kind: 'reflection',
          id: 'massacre-refl',
          prompt: 'What cost has someone demanded of you in the name of ambition or belonging? Who paid the price, and who did the paying?',
        },
      ],
    },

    /* ─── Judges 9:7–20 — Jotham&apos;s Parable of the Trees ──────────────────── */
    {
      ref: 'Judges 9:7–20',
      title: "Jotham&apos;s Parable — The Bramble&apos;s False Promise",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('And when they told it to Jotham, he went and stood in the top of mount Gerizim, and lifted up his voice, and cried, and said unto them, Hearken unto me, ye men of Shechem, that God may hearken unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jotham-voice',
          html:
            'Jotham speaks from a mountain, shouting down at the city. His voice is a kind of testimony — he cries out so that God might listen. He cannot stop the coronation that has already happened, but he can bear witness. He can speak truth. He can plant a word that will outlive the king.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('The trees went forth on a time to anoint a king over them; and they said unto the '),
                hg('olive tree', 'olive-tree'),
                t(', Reign thou over us.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But the olive tree said unto them, Should I leave my '),
                hy('fatness', 'fatness'),
                t(', wherewith by me they honour God and man, and go to be promoted over the trees?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'olive-tree',
          html:
            'The parable begins with the worthy. The olive tree is rich, productive, honoring both God and humanity through its oil. It asks a question that settles everything: <em>Why would I leave all that I give to rule over you?</em> True strength knows it does not need a crown.',
        },
        {
          kind: 'hebrew',
          id: 'fatness',
          title: 'Deshén — "fatness, richness"',
          script: 'דֶשֶׁן',
          translit: '<strong>deshén</strong> · abundance, oil, nourishing substance',
          description:
            'The olive&apos;s fatness is what makes it worth having. Oil was the lifeblood of ancient life — for light, for healing, for consecration. The olive refuses kingship because its fatness — its gift — is already being honored. It has no need to grasp.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('And the trees said to the '),
                hg('fig tree', 'fig-tree'),
                t(', Come thou, and reign over us.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But the fig tree said unto them, Should I forsake my sweetness, and my good fruit, and go to be promoted over the trees?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Then said the trees unto the '),
                hg('vine', 'vine-tree'),
                t(', Come thou, and reign over us.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the vine said unto them, Should I leave my wine, which cheereth God and man, and go to be promoted over the trees?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fruit-trees',
          html:
            'Each tree that is asked refuses — and notice why. The fig offers sweetness, the vine offers wine that gladdens hearts. Each is asked to leave its gift, its real work in the world, for the empty promise of a title. The most fruitful, most generous, most obviously valuable all say no.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('Then said all the trees unto the '),
                hg('bramble', 'bramble'),
                t(', Come thou, and reign over us.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And the bramble said unto the trees, If in truth ye anoint me king over you, then come and put your trust in my shadow: and if not, '),
                hp('let fire come out of the bramble, and devour the cedars of Lebanon', 'bramble-fire'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'bramble',
          title: 'Atad — "bramble, thornbush"',
          script: 'אָטָד',
          translit: '<strong>atad</strong> · a thorny, useless shrub',
          description:
            'A bramble is small, weak, worthless. It bears no fruit, gives no shade worth having, makes no oil. It is all thorns and nothing of value. Yet it is the only one willing to rule — and its only offer is shadow and fire.',
        },
        {
          kind: 'christ',
          id: 'bramble-fire',
          title: 'Christ Connection — The True King and the True Shade',
          html:
            'Jesus walks into a world asking for a king and offers the opposite of what Abimelech offers. He washes feet instead of seizing thrones. He serves instead of ruling through coercion. He calls Himself the True Vine (John 15:1) — exactly the title the fruitful vine in Jotham&apos;s parable refused. And later the psalmist writes of a different king: "He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty" (Ps. 91:1). Christ offers real shade, real rest, real fruit — not fire.',
        },
        {
          kind: 'carry',
          html:
            'Pay attention to what a leader offers you. The bramble says, "trust my shadow" — but brambles cast no shade. When a voice comes that promises power through fire, that offers nothing but demands everything, that rules through fear, you have found the bramble. The fruitful ones — the ones actually giving you something real — rarely ask you to crown them. Trust what is actually nourishing you, not what claims to be.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 16,
              spans: [
                t('Now therefore, if ye have done truly and sincerely in making Abimelech king, and if ye have dealt well with Jerubbaal and his house, and have done unto him according to the deserving of his hands;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('(For my father fought for you, and adventured his life far, and delivered you out of the hand of Midian:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And ye have risen up against my father&apos;s house this day, and have slain his sons, threescore and ten persons, upon one stone, and have made Abimelech, the son of his maidservant, king over the men of Shechem, because he is your brother;)'),
              ],
            },
            {
              number: 19,
              spans: [
                t('If ye then have dealt truly and sincerely with Jerubbaal and with his house this day, then '),
                hg('rejoice ye in Abimelech, and let him also rejoice in you', 'rejoice-curse'),
                t(':'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But if not, '),
                hg('let fire come out from Abimelech, and devour the men of Shechem, and the house of Millo; and let fire come out from the men of Shechem, and from the house of Millo, and devour Abimelech', 'bramble-reciprocal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rejoice-curse',
          html:
            'Jotham&apos;s curse is conditional but prophetic. <em>If</em> you have truly dealt well with Gideon&apos;s house and truly meant this, then be glad. But the "if" is rhetorical — no one in Shechem could say that with a straight face. They had murdered seventy brothers for silver.',
        },
        {
          kind: 'commentary',
          id: 'bramble-reciprocal',
          html:
            'The curse is perfectly balanced: fire <em>from</em> Abimelech <em>to</em> Shechem, then fire <em>from</em> Shechem <em>to</em> Abimelech. The bramble promised fire. It will get fire. The city that crowned him will burn. And Abimelech will burn. The sin of the people and the sin of the king will fall on both their heads — and then on one another.',
        },
        {
          kind: 'reflection',
          id: 'parable-refl',
          prompt: 'Which tree do you recognize in yourself? Where are you being asked to leave something good for something that only offers fire?',
        },
      ],
    },

    /* ─── Judges 9:22–45 — The Unraveling ────────────────────────────────────── */
    {
      ref: 'Judges 9:22–45',
      title: "Three Years and the Curse Unfolds",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And Abimelech reigned '),
                hg('three years', 'three-years'),
                t(' over Israel.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Then God sent an evil spirit between Abimelech and the men of Shechem; and the men of Shechem dealt treacherously with Abimelech:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('That the cruelty done to the threescore and ten sons of Jerubbaal might come, and their blood be laid upon Abimelech their brother which slew them; and upon the men of Shechem, which aided him in the killing of his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'three-years',
          html:
            'Three years is long enough to think you have gotten away with it. Long enough to believe the blood you spilled will be forgotten. Then comes the unraveling. God does not need to lift a finger; He simply <em>sends an evil spirit</em> — allows the natural enmity that murder sows to come to harvest. The people who crowned Abimelech begin to conspire against him. The people he betrayed begin to see what he is.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 25,
              spans: [
                t('And the men of Shechem set liers in wait for him on the top of the mountains, and they robbed all that came along that way by him: and it was told Abimelech.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'unraveling',
          html:
            'The kingdom collapses into banditry. The men of Shechem rob travelers. They set ambushes. Abimelech&apos;s power evaporates into shadows and paranoia. For three years he has ruled; now the word comes — your city is turning against you. The bramble that promised to rule is discovering that brambles cannot rule anything.',
        },
        {
          kind: 'carry',
          html:
            'When power is built on lies and blood, it will eventually consume itself. You cannot govern people you have deceived. You cannot rule those you have betrayed. The most obvious lesson Judges 9 teaches is that wickedness carries its own unraveling built inside it. But the harder lesson is this: don&apos;t be surprised when the fire starts. The wood was always dry.',
        },
      ],
    },

    /* ─── Judges 9:46–55 — The Woman with the Millstone ──────────────────────── */
    {
      ref: 'Judges 9:46–55',
      title: "A Woman Breaks the King",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 46,
              spans: [
                t('And when all the men of the tower of Shechem heard that, they entered into an hold of the house of the god Berith.'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And it was told Abimelech, that all the men of the tower of Shechem were gathered together.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And Abimelech gat him up to mount Zalmon, he and all the people that were with him; and Abimelech took an axe in his hand, and cut down a bough of the tree, and took it, and laid it on his shoulder, and said unto the people that were with him, What ye have seen me do, make haste, and do as I have done.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And all the people likewise cut down every man his bough, and followed Abimelech, and put them to the hold, and set the hold on fire upon them; so that all the men of the tower of Shechem died also, about a thousand men and women.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tower-fire',
          html:
            'The fire that Jotham cursed comes to pass. Abimelech surrounds the tower of Shechem, sets it alight, and approximately one thousand men and women burn. Fire from Abimelech to Shechem. The curse is half-fulfilled. But not yet. The fire still needs to turn on him.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 50,
              spans: [
                t('Then went Abimelech to Thebez, and encamped against Thebez, and took it.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('But there was a strong tower within the city, and thither fled all the men and women, and all they of the city, and shut to the door upon them, and gat them up to the top of the tower.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And Abimelech came unto the tower, and fought against it, and went hard unto the door of the tower to burn it with fire.'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And a certain woman cast a piece of a millstone upon Abimelech&apos;s head, and all to brake his skull.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'millstone',
          title: 'Rechev — "millstone piece"',
          script: 'רֶכֶב',
          translit: '<strong>rechev</strong> (here used for stone); a mill-stone, a grinding stone',
          description:
            'The upper stone of a hand mill — a tool of women, used for bread, for daily life. It is ordinary. It is heavy. And it does what no general, no sword, no army of mercenaries could do: it stops the king.',
        },
        {
          kind: 'commentary',
          id: 'woman-stone',
          html:
            'Scripture often brings judgment through the ordinary — a woman, a stone, a moment when a king comes too close to a wall. Notice that the woman does not have a name, no backstory, no grand heroic moment. She simply acts. She sees the king trying to burn her city. She takes what is near her — a millstone, the tool of her daily work — and throws it. The text does not tell us how she felt, what she thought, whether she was afraid. It simply reports: she acted, and he broke.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 54,
              spans: [
                t('Then he called hastily unto the young man his armourbearer, and said unto him, Draw thy sword, and '),
                hg('slay me', 'slay-me'),
                t(', that men say not of me, A woman slew him. And his young man thrust him through, and he died.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'slay-me',
          html:
            'And there it is. The last act of Abimelech is not a roar of defiance, not an apology, not even a prayer. It is vanity. Even with his skull broken, the thing that moves him is the thought of history saying a woman broke him. He cannot bear the shame. So he asks his young man to kill him — not to save him, but to save his reputation.',
        },
        {
          kind: 'christ',
          id: 'christ-vanity',
          title: 'Christ Connection — The King Who Loses Everything to Save His Name',
          html:
            'Abimelech&apos;s last act is pure vanity — he would rather die by his own hand than live with the knowledge that a woman did it. Jesus, the True King, walked a path exactly opposite. He allowed Himself to be condemned as a criminal, mocked as a fraud, crucified between thieves — everything, in the eyes of the world, that would destroy a man&apos;s name forever. But He did not grasp for His reputation. He let it go. And in losing everything — honor, life, good name — He won everything that mattered. The bramble clings to his dignity. The True Vine lets it go.',
        },
        {
          kind: 'carry',
          html:
            'You will face moments when you have to choose between your name and what is right. Moments when doing the true thing means letting someone else be right, or letting yourself look foolish. The bramble dies trying to protect what others think of him. The Christian is called to something harder and freer: to let that go. To care more for what is true than for how you look. To be willing to be wrong in the eyes of people you want to impress, if that is what honesty costs.',
        },
        {
          kind: 'reflection',
          id: 'millstone-refl',
          prompt: 'When have you seen vanity — your own or someone else&apos;s — become more expensive than the truth? What cost did it pay?',
        },
      ],
    },

    /* ─── Judges 9:56–57 — God's Judgment Rendered ─────────────────────────── */
    {
      ref: 'Judges 9:56–57',
      title: "The Curse Fulfilled — God Keeps His Word",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 56,
              spans: [
                t('Thus God rendered '),
                hg('the wickedness of Abimelech', 'wickedness-rendered'),
                t(' which he did unto his father, in slaying his seventy brethren:'),
              ],
            },
            {
              number: 57,
              spans: [
                t('And all the evil of the men of Shechem did God render upon their heads: and upon them came the '),
                hy('curse of Jotham', 'jotham-curse'),
                t(' the son of Jerubbaal.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'wickedness-rendered',
          html:
            'The text names it plainly: God rendered. He kept account. The blood of seventy brothers did not cry out to an indifferent sky. The cruelty, the fratricide, the bribery, the three years of ruling through fear — God rendered it all. Abimelech got exactly what his actions deserved, served to him through the very machinery of sin he set in motion.',
        },
        {
          kind: 'hebrew',
          id: 'jotham-curse',
          title: 'Alah — "curse"',
          script: 'אָלָה',
          translit: '<strong>alah</strong> · a curse, oath, binding word',
          description:
            'Jotham&apos;s curse was not a wish or a hope. It was a word spoken from a mountain in God&apos;s hearing. It had power because it named what was true: sin begets fire, betrayal begets betrayal, the bramble promises nothing but thorns and ash.',
        },
        {
          kind: 'carry',
          html:
            'One of the most stabilizing truths in Scripture is this: God keeps account. He does not forget. He does not look away. When the world seems to reward the wicked and punish the innocent, when the bramble seems to win and the fruitful suffer, remember this chapter. The accounts come due. Not always on your timeline. Not always in a way you would have orchestrated. But God is not indifferent. He renders. He judges. He keeps His word.',
        },
        {
          kind: 'reflection',
          id: 'rendered-refl',
          prompt: 'Where do you need to trust that God keeps His word — to punish what is wrong, to uphold what is right, to bring fire where fire belongs?',
        },
      ],
    },
  ],
};
