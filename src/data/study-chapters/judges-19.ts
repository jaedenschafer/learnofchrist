import { plain, verse, hp, hy, hg, t, type RichChapterContent } from './types';

export const JUDGES_19: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 19,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 11 },
  intros: [
    'Judges 19 is one of Scripture&apos;s darkest passages. Without commentary, the text reports what happened in Gibeah: a Levite&apos;s concubine was gang-raped by men "of Belial" (worthless men), and the Levite responded not with rescue but with an act of violence—cutting her body into twelve pieces and sending them to Israel&apos;s tribes as a summons to judgment.',
    'The chapter echoes Genesis 19 (Sodom&apos;s attempted sexual assault on Lot&apos;s guests) but with a horrifying difference: this time the atrocity happens inside Israel, not outside it. The bookend phrase—"in those days there was no king in Israel"—signals that without God&apos;s rule, depravity knows no bounds, even among the covenant people.',
    'What emerges is not a story to admire but a warning. The Levite lacks the sacrificial love that Christ embodies. The people of Israel must reckon with what they have become. And the reader is left to ask: How did we get here?'
  ],
  tapHint: null,

  sections: [
    {
      ref: 'Judges 19:1–9 — The Levite Retrieves His Concubine',
      title: 'The Levite&apos;s Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(1, 'And it came to pass in those days, when there was no king in Israel, that there was a certain Levite sojourning on the side of mount Ephraim, who took to him a concubine out of Bethlehem-judah.'),
            plain(2, 'And his concubine played the whore against him, and went away from him unto her father&apos;s house to Bethlehem-judah, and was there the space of four months.'),
            verse(3, t('And her lord arose, and went after her, to speak '), hp('friendly unto her', 'lev-friendly'), t(', and to bring her again, being his servant: and she brought him into her father&apos;s house: and when the father of the damsel saw him, he rejoiced to meet him.')),
            plain(4, 'And his father in law, the damsel&apos;s father, retained him; and he abode with him three days: so they did eat and drink, and lodged there.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-19-78mid-1',
          html:
            'The cycle turns again — a new actor, a new failure or deliverance, the same God still patient with His people.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(5, 'And it came to pass on the fourth day, when they arose early in the morning, that he rose up to depart: and the damsel&apos;s father said unto his son in law, Comfort thine heart with a morsel of bread, and afterward go your way.'),
            plain(6, 'And they sat down, and did eat and drink both of them together: for the damsel&apos;s father had said unto the man, Be content, I pray thee, and tarry all night, and let thine heart be merry.'),
            plain(7, 'And when the man rose up to depart, his father in law urged him: therefore he lodged there again.'),
            plain(8, 'And he arose early in the morning on the fifth day to depart: and the damsel&apos;s father said, Comfort thine heart, I pray thee. And they tarried until afternoon, and they did eat both of them.'),
            verse(9, t('And when the man rose up to depart, he, and his concubine, and his servant, his father in law, the damsel&apos;s father, said unto him, Behold, now the '), hg('day draweth toward evening', 'lev-late'), t(', I pray you tarry all night: behold, the day groweth to an end, lay thee up here, that thine heart may be merry; and to morrow get you early on your way, that thou mayest go home.'))
          ]
        },
        {
          kind: 'commentary',
          id: 'lev-friendly',
          html: 'The Levite "spoke friendly"—the Hebrew word is &apos;ãlah, which suggests gentleness, reassurance. He came not to condemn but to reconcile. Her father accepted him, even welcomed him with ritual hospitality. The word "whore" (zânâh) is ambiguous here; some scholars read it as "betrayed" or "was angry." The text leaves the exact nature of her offense unclear, but the Levite&apos;s response is tender: he makes the journey to retrieve her.'
        },
        {
          kind: 'commentary',
          id: 'lev-late',
          html: 'The father delays him three times—first at verse 4, then again at verses 5–6, then once more at verse 8. This triple insistence on hospitality reflects the ancient code: keep the sojourner safe through the night. But it also plants a seed of irony. The Levite finally agrees to leave, and as the sun descends, he sets out toward safety. He has no idea what awaits.'
        }
      ]
    },
    {
      ref: 'Judges 19:10–15 — The Choice That Seals Fate',
      title: 'Gibeah Over Jebus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(10, t('But the man would not tarry that night: but he rose up and departed, and came over against '), hp('Jebus (the same is Jerusalem)', 'choice-jebus'), t(': and there were with him two asses saddled, his concubine also was with him.')),
            verse(11, t('And when they were by '), hy('Jebus', 'belial-word'), t(', the day was far spent; and the servant said unto his master, Come, I pray thee, and let us turn in into this city of the '), t('Jebusites'), t(', and lodge in it.')),
            verse(12, t('And his master said unto him, We will not turn aside hither into the city of a stranger, that is not of the children of Israel; we will pass over to '), hp('Gibeah', 'choice-gibeah'), t('.')),
            verse(13, t('And he said unto his companion, Come, and let us draw near to one of these places to lodge all night, in '), hg('Gibeah, or in Ramah', 'lev-towns'), t('.')),
            plain(14, 'And they passed on and went their way; and the sun went down upon them when they were by Gibeah, which belongeth to Benjamin.'),
            verse(15, t('And they turned aside thither, to go in and to lodge in '), hg('Gibeah', 'lev-gibeah'), t(': and when he went in, he sat him down in a street of the city: for there was no man that took them into his house to lodge.'))
          ]
        },
        {
          kind: 'commentary',
          id: 'choice-jebus',
          html: 'Jebus (Jerusalem) was still a pagan Canaanite city in this era. The servant suggests lodging there—neutral territory where safety might be less certain but at least clear. The Levite refuses. His logic: "We will not turn aside into the city of a stranger, that is not of the children of Israel." He trusts Israelite hospitality over pagan courtesy.'
        },
        {
          kind: 'commentary',
          id: 'choice-gibeah',
          html: 'Gibeah of Benjamin. The Levite chooses his own people. This is the tragic irony: he expects fellow Israelites to offer shelter and protection. He assumes the covenant bond is stronger than his wariness of strangers. He will learn otherwise.'
        },
        {
          kind: 'commentary',
          id: 'lev-towns',
          html: 'Both Gibeah and Ramah are Israelite towns. Both belong to Benjamin. The Levite navigates only among kinsmen. He sits in the street, waiting for hospitality that does not come. The city is closed to him—no open door, no meal, no welcome.'
        },
        {
          kind: 'commentary',
          id: 'lev-gibeah',
          html: 'The silence is deafening. No man invites him in. In the ancient world, leaving a stranger in the street was a grave violation of covenant duty. Yet that is what Gibeah does to the Levite.'
        }
      ]
    },
    {
      ref: 'Judges 19:16–21 — The Old Man&apos;s Hospitality',
      title: 'A Stranger Offers Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(16, t('And, behold, there came an old man from his work out of the field at even, which was also of mount Ephraim; and he sojourned in '), hy('Gibeah', 'old-gibeah'), t(': but the men of the place were '), hy('Benjamites', 'old-benjamites'), t('.')),
            plain(17, 'And when he lifted up his eyes, he saw the wayfaring man in the street of the city: and the old man said, Whither goest thou? and whence comest thou?'),
            plain(18, 'And he said unto him, We are passing from Bethlehem-judah toward the side of mount Ephraim; from thence am I: and I went to Bethlehem-judah, but I am now going to the house of the Lord; and there is no man that receiveth me to house.'),
            plain(19, 'Yet there is both straw and provender for our asses; and there is bread and wine also for me, and for thy handmaid, and for the young man which is with thy servants: there is no want of any thing.'),
            verse(20, t('And the old man said, Peace be with thee; howsoever let all thy wants lie upon me; only '), hp('lodge not in the street', 'old-safety'), t('.')),
            plain(21, 'So he brought him into his house, and gave the asses provender: and they washed their feet, and did eat and drink.')
          ]
        },
        {
          kind: 'hebrew',
          id: 'belial-word',
          title: 'Worthlessness — בְּלִיַּעַל',
          script: 'בְּלִיַּעַל',
          translit: '**beliya&apos;al** (also spelled Belial)',
          description: 'From bĕlî ("without") + ya&apos;al ("profit" or "use"). Describes men utterly devoid of worth or value, men without covenant sense or fear of God. In this chapter, the men "of Belial" are those who have abandoned all restraint and human decency. The word will appear again in verse 22.'
        },
        {
          kind: 'commentary',
          id: 'old-gibeah',
          html: 'The old man is himself a sojourner—a stranger in Gibeah, like the Levite. He comes from mount Ephraim, the Levite&apos;s own territory. He has been dwelling in Gibeah, perhaps to seek livelihood. He knows the town; he knows its dangers.'
        },
        {
          kind: 'commentary',
          id: 'old-benjamites',
          html: 'The men of Gibeah are Benjamites—members of one of Israel&apos;s own twelve tribes. Readers familiar with Saul and Jonathan know Benjamin as a place of strength and honor. Yet here, Gibeah harbors "men of Belial."'
        },
        {
          kind: 'commentary',
          id: 'old-safety',
          html: 'The old man immediately grasps the danger. "Lodge not in the street." He recognizes that nightfall in an open street exposes the Levite and his household to evil. His offer—to provide food, shelter, and safety—follows the ancient law of covenant hospitality. He will not leave the stranger undefended.'
        }
      ]
    },
    {
      ref: 'Judges 19:22–26 — The Assault and Abandonment',
      title: 'The Night of Horrors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(22, t('Now as they were making their hearts merry, behold, the men of the city, '), hy('certain sons of Belial', 'sons-belial'), t(', beset the house round about, and beat at the door, and spake to the master of the house, the old man, saying, Bring forth the man that came into thine house, that '), hp('we may know him', 'may-know'), t('.')),
            verse(23, t('And the man, the master of the house, went out unto them, and said unto them, Nay, my brethren, nay, I pray you, do not so wickedly; seeing that this man is come into mine house, do not this folly.'), t(' ')),
            verse(24, t('Behold, here is my daughter a maiden, and his concubine; them I pray you, I will bring them out now, and humble ye them, and do with them what seemeth good unto you: but unto this man do not so vile a thing.')),
            verse(25, t('But the men would not hearken to him: so the man took his concubine, and brought her forth unto them; and they '), hp('knew her', 'knew-her'), t(', and abused her all the night until the morning: and when the day began to spring, they let her go.')),
            verse(26, t('Then came the woman in the dawning of the day, and fell down at the door of the man&apos;s house where her lord was, '), hp('till it was light', 'til-light'), t('.'))
          ]
        },
        {
          kind: 'commentary',
          id: 'sons-belial',
          html: 'The sons of Belial—men without worth or restraint. They surround the house with one demand: bring out the stranger so they may sexually assault him. This is the sin of Sodom repeated, now inside Israel. Genesis 19 records the same demand, the same wickedness, the same descent into moral chaos. Hosea will later say of Israel: "they have deeply corrupted themselves, as in the days of Gibeah" (Hosea 9:9).'
        },
        {
          kind: 'commentary',
          id: 'may-know',
          html: 'The phrase "know him" (yâda&apos;) is a euphemism for sexual assault. The men of Gibeah intend to gang-rape the Levite. The old man&apos;s hospitality code, which promised protection, faces its ultimate test.'
        },
        {
          kind: 'commentary',
          id: 'known-concubine',
          html: 'The old man&apos;s offer—to give his own virgin daughter and the Levite&apos;s concubine instead—reflects a terrible cultural logic: male guests are protected at almost any cost. Daughters and concubines are expendable. This is not endorsed by the text; it is reported as what a desperate man, bound by hospitality law, felt forced to offer. The horror of his choice indicts the entire social order that required it.'
        },
        {
          kind: 'commentary',
          id: 'knew-her',
          html: 'The concubine is gang-raped all night. The text does not elaborate; it reports with grim restraint. "They knew her" is all Scripture says. The silence itself is a judgment: this evil is beyond words.'
        },
        {
          kind: 'commentary',
          id: 'til-light',
          html: 'As dawn breaks, they "let her go." She staggers to the door of the old man&apos;s house where the Levite is sleeping. Her hands fall upon the threshold. She is dying, or dead, on the very doorstep that was meant to shelter her. The man who brought her there is inside, resting.'
        }
      ]
    },
    {
      ref: 'Judges 19:27–30 — The Levite&apos;s Response',
      title: 'A Body Becomes a Message',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            verse(27, t('And her lord rose up in the morning, and opened the doors of the house, and went out to go his way: and, behold, the woman his concubine was fallen down at the door of the house, and her hands were upon the threshold.')),
            verse(28, t('And he said unto her, Up, and let us be going. But none answered. Then he took her up upon an ass, and the man rose up, and gat him unto his place.')),
            verse(29, t('And when he was come into his house, he took a knife, and laid hold on his concubine, and '), hp('divided her, with her bones, into twelve pieces', 'divided-pieces'), t(', and sent her into all the coasts of Israel.')),
            verse(30, t('And it was so, that all that saw it said, There was no such deed done nor seen from the day that the children of Israel came up out of the land of Egypt unto this day: consider of it, take advice, and '), hg('speak your minds', 'speak-minds'), t('.'))
          ]
        },
        {
          kind: 'commentary',
          id: 'divided-pieces',
          html: 'The Levite cuts her into twelve pieces—one for each tribe of Israel. The body is a summons, a desperate call to covenant justice. But the Levite himself is no hero. He leaves her dying on the threshold. He does not weep or demand justice on her behalf. Instead, he uses her corpse as a political tool. He never cries out for her; the dead woman becomes his message.'
        },
        {
          kind: 'commentary',
          id: 'speak-minds',
          html: 'The people&apos;s response is shock and revulsion. "There was no such deed done nor seen from the day that the children of Israel came up out of the land of Egypt unto this day." Israel itself recognizes that it has hit bottom. The cry goes out: consider, take advice, speak your minds. What has Israel become?'
        },
        {
          kind: 'christ',
          id: 'christ-bridegroom',
          title: 'The Husband Who Gives Himself',
          html: 'Christ is the antithesis of the Levite. Where the Levite cast out his bride to save himself, Christ laid down His life <em>for</em> His bride, the Church. Ephesians 5:25 says: "Husbands, love your wives, even as Christ also loved the church, and gave himself for it." The Levite&apos;s concubine was sacrificed so he could live. Christ died so we could live. In Gibeah, a man&apos;s bride became the price of his cowardice. At Calvary, the Bridegroom Himself became the price of redemption. One is the measure of human depravity without God; the other is the measure of God&apos;s sacrificial love.'
        },
        {
          kind: 'divider'
        },
        {
          kind: 'carry',
          html: 'When Israel was ruled by human appetite and tribal loyalty alone—when "there was no king"—it fell into the abyss. What stops us from the same descent? Not our own goodness, but the reign of Christ. Ask yourself: Where do I see the spirit of Belial in my own culture, my own heart? And where do I see Christ&apos;s sacrificial love breaking in?'
        },
        {
          kind: 'reflection',
          id: 'reflect-king',
          prompt: 'The chapter is framed by "when there was no king in Israel." Why does human depravity deepen in the absence of just rule? What does that tell us about the need for Christ&apos;s kingship?'
        }
      ]
    }
  ],

  bottomShare: {
    quote: 'There was no such deed done nor seen from the day that the children of Israel came up out of the land of Egypt unto this day.',
    snippet: 'Judges 19:30 — Israel&apos;s own conscience indicts what it has become.',
    ref: 'Judges 19:30'
  }
};
