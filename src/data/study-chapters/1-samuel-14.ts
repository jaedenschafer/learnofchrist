import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 14 — Jonathan's Bold Victory and Saul's Foolish Oath
 *
 * Jonathan, with only his armorbearer, believes that the Lord has no restraint
 * to save by many or by few. His faith brings victory and trembling upon the
 * Philistines. But Saul, in his eagerness to rule, makes an oath that curses
 * his own son and the very people God has delivered. When Jonathan unknowingly
 * breaks the oath by tasting honey, Saul demands death. The people rise up
 * and save Jonathan. Here we see the contrast between the king's hollow authority
 * and the people's wise mercy—and between Saul's imposed rules and the Lord's
 * grace that brings sweetness, not famine.
 */
export const SAMUEL_1_14: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 14,

  estimatedMinutes: { beginner: 10, intermediate: 20, deep: 22 },
  intros: [
    "Jonathan sees a garrison of Philistines and says to his armorbearer: &quot;Come, let us go over unto the garrison of these uncircumcised.&quot; He tells him nothing of a plan, asks Saul&apos;s permission to nothing. He simply believes: &quot;It may be that the Lord will work for us: for there is no restraint to the Lord to save by many or by few.&quot; And his armorbearer answers: &quot;Do all that is in thine heart: turn thee; behold, I am with thee according to thy heart.&quot; These words—from a man of no rank, no title—are the real words of discipleship.",
    'What follows is one of the great victories in Israel&apos;s history, won not by an army but by the faith of one young prince and his faithful companion. But the chapter does not end in triumph. Saul, desperate to control the outcome, makes an oath that God did not ask for: "Cursed be the man that eateth any food until evening, that I may be avenged on mine enemies." Jonathan, ignorant of this curse, eats honey in a wood, and his eyes are enlightened. When Saul learns what has happened, he demands his son&apos;s death. But the people cry out: "Shall Jonathan die, who hath wrought this great salvation in Israel? God forbid." And they rescue Jonathan. The chapter shows us the difference between a king&apos;s rule and God&apos;s grace—and what happens when a man tries to bind his people to a curse that God never spoke.',
  ],

  opener: {
    matchArtist: /rembrandt|tissot/i,
    matchTitle: /jonathan|climb|philistine|courage/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 14',
    quote:
      'Jonathan believed: "There is no restraint to the Lord to save by many or by few." With only his armorbearer, he climbed the cliff and the Lord brought a trembling upon the Philistines. But Saul&apos;s oath nearly cost Jonathan his life—until the people cried out and saved him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 14 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 14:1–14 — Jonathan's Faith and the Armorbearer ───── */
    {
      ref: '1 Samuel 14:1–14',
      title: 'Jonathan and His Armorbearer — Faith Without Permission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass upon a day, that '),
                hy('Jonathan', 'c-jonathan'),
                t(' the son of Saul said unto his armorbearer, Come, and let us go over to the '),
                hg('Philistines', 'c-philistines-garrison'),
                t('&apos; garrison, that is on the other side: but he told not his father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan',
          html:
            'Jonathan is Saul&apos;s son, a prince of Israel, yet he goes to war without telling his father. Not in rebellion, but in a kind of freedom — the freedom of a young man who has learned to trust God more than he fears his earthly king. He moves without permission because he is answering to a higher command.',
        },
        {
          kind: 'commentary',
          id: 'c-philistines-garrison',
          html:
            'The Philistines held a garrison on the other side of the valley — a military stronghold, a place of enemy power. Meanwhile, Saul tarries in Gibeah "under a pomegranate tree at Migron with 600 men." He is waiting, hesitating, seeking counsel from Ahijah the priest. Jonathan does not wait. He moves.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 2,
              spans: [
                t('And '),
                hp('Jonathan said to his armorbearer', 'c-armorbearer'),
                t(', Come, and let us go over unto the '),
                hy('garrison of these uncircumcised', 'c-uncircumcised'),
                t(': it may be that the Lord will work for us: for there is '),
                hp('no restraint to the Lord to save by many or by few', 'c-no-restraint'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-armorbearer',
          html:
            'Jonathan invites his armorbearer—a man of no rank, no voice in councils, no claim to authority. Yet Jonathan trusts him. And the armorbearer will prove worthy. This is what Saul has never learned: that the smallest man, standing with you in faith, is a greater army than all the soldiers of the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'c-uncircumcised',
          html:
            '"The uncircumcised"—a word that echoes throughout the Old Testament as a name for the nations outside God&apos;s covenant. To be uncircumcised is to be outside, cut off. Jonathan is about to bridge that chasm with nothing but faith and a sword.',
        },
        {
          kind: 'hebrew',
          id: 'c-no-restraint',
          title: 'אַל־מְנוּעַ "No Restraint"',
          script: 'אַל־מְנוּעַ לַיהוָה לְהוֹשִׁיעַ',
          translit: 'Al-menuah l&apos;YHWH l&apos;hoshia — There is no restraint to the Lord to save',
          description:
            'Jonathan speaks a fundamental truth of the faith: nothing constrains God&apos;s ability to save. Not numbers. Not odds. Not armies arrayed against you. The Lord&apos;s power does not depend on human scale. A thousand men or two men—it makes no difference to Him. This is a word about grace: salvation flows not from human strength but from God&apos;s freedom to act.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 3,
              spans: [
                t('And his armorbearer said unto him, Do all that is in thine heart: '),
                hp('turn thee', 'c-turn'),
                t('; behold, '),
                t('I am with thee according to thy heart'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-turn',
          html:
            'The armorbearer does not ask Jonathan to justify himself. He does not say "Let us wait for your father" or "This is too dangerous" or "We are too few." He simply says: "Turn thee; behold, I am with thee." The turning—the pivot toward danger, toward faith, toward the unknown—is met with presence.',
        },
        {
          kind: 'christ',
          id: 'christ-armorbearer',
          title: 'Christ Connection — The Faithful Companion',
          html:
            'When Jesus was betrayed, Peter cut off the ear of a servant. When Jesus was arrested, Peter denied even knowing Him. But there was one voice in the night that mattered—the voice of an angel, of witnesses, of those who knew what truth was. The armorbearer speaks a simple word of loyalty: "I am with thee according to thy heart." This is the kind of presence Christ brings—not a judge standing over you asking what you deserve, but a companion saying: Whatever is in thy heart, I am with thee. Turn. And I am here. That is redemption.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 4,
              spans: [
                t('Then said Jonathan, Behold, we will pass over unto these men, and we will discover ourselves unto them.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('If they say thus unto us, Tarry until we come to you; then we will stand still in our place, and will not go up unto them.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But if they say thus, Come up unto us: then we will go up; for the Lord hath delivered them into our hand: and this shall be a sign unto us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sign',
          html:
            'Jonathan sets a sign. He does not presume. He and his armorbearer will show themselves to the Philistines. If they say "Tarry"—they will stop. But if they say "Come up"—then they will know the Lord has given them into Israel&apos;s hand. This is not recklessness. This is faith seeking a sign, a way of being sure. And the sign, when it comes, will confirm what Jonathan already believes.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 7,
              spans: [
                t('And Jonathan said, Come then, and let us go over unto the garrison of these men: the Lord will deal with us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-will-deal',
          html:
            'Jonathan&apos;s final words before the climb are not a battle cry. They are a prayer: "The Lord will deal with us." Deal—yada in Hebrew—means to know, to act toward us with knowledge. Jonathan is placing the outcome entirely in God&apos;s hands. Come what may, the Lord knows. And He will act.',
        },
      ],
    },

    /* ─── 1 Samuel 14:15–23 — The Climb and the Trembling ──────────────── */
    {
      ref: '1 Samuel 14:15–23',
      title: 'The Climb of Michmash — Victory in Trembling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 8,
              spans: [
                t('And both of them discovered themselves unto the garrison of the Philistines: and the Philistines said, Behold, the Hebrews come forth out of the holes where they had hid themselves.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the men of the garrison answered Jonathan and his armorbearer, and said, Come up to us, and we will shew you a thing. And Jonathan said unto his armorbearer, Come up after me: for the Lord hath delivered them into the hand of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-come-up',
          html:
            'The Philistines see Jonathan and his armorbearer and taunt them. "Come up to us." Jonathan&apos;s faith is confirmed. And he turns to the armorbearer with absolute certainty: "The Lord hath delivered them into the hand of Israel." Not "might deliver." Not "I hope the Lord." But: They are delivered. It is already done.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 10,
              spans: [
                t('And Jonathan climbed up upon his hands and feet, and his armorbearer after him: and they fell before Jonathan; and his armorbearer slew them after him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-climb',
          title: 'עָלָה "To Climb" — The Ascent of Faith',
          script: 'עָלָה עַל־יָדָיו',
          translit: 'Alah al yadav — He climbed upon his hands',
          description:
            'Jonathan climbs on his hands and feet—not in armor, not with the full weight of an army, but with his body. The image is intimate: a young man pulling himself up a cliff, body and will wholly committed. The verb "alah" (to climb) is the same root used for "going up" to worship, for ascending to God. Jonathan climbs as a spiritual act.',
        },
        {
          kind: 'commentary',
          id: 'c-climb-detail',
          html:
            'The first slaughter is about twenty men, "within as it were a half acre of land." A handful of soldiers, falling before Jonathan and his armorbearer. The victory is small, precise, extraordinary—not a rout, but the opening of a door. And it is enough.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 11,
              spans: [
                t('And there was '),
                hg('trembling in the host', 'c-trembling'),
                t(', in the field, and among all the people: the garrison, and the spoilers, they also trembled, and '),
                hg('the earth quaked', 'c-quaking'),
                t(': so it was a very great trembling.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-trembling',
          title: 'חֲרָדָה "Trembling" — The Fear of the Lord',
          script: 'חֲרָדָה',
          translit: 'Charadah — trembling; quaking; fear',
          description:
            'What Jonathan and his armorbearer have set in motion is not a physical rout but a spiritual collapse. Trembling spreads—charadah, a word that speaks of the fear that comes when humans touch something beyond themselves. The Philistines are trembling because they have met the God of Israel, not merely a young prince.',
        },
        {
          kind: 'commentary',
          id: 'c-quaking',
          html:
            'The earth quakes. This is not a metaphor. Something in the realm of the physical responds to the faith of one man. The Lord confirms Jonathan&apos;s victory by shaking creation itself. All the ordered structures of the Philistine army—garrison, soldiers, commanders—melt into panic.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 12,
              spans: [
                t('And the watchmen of Saul in Gibeah of Benjamin looked; and, behold, the multitude melted away, and they went on beating down one another.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-watchmen',
          html:
            'Saul&apos;s watchmen in Gibeah see what is happening from a distance. The Philistine multitude is melting away, turning on itself. Panic has become contagion. What Saul could not do with 600 men and endless deliberation, Jonathan has done with faith and a sword. And Saul is about to discover what Jonathan has done—only to condemn him for it.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 13,
              spans: [
                t('Then said Saul unto the people that were with him, Number now, and see who is gone from us. And when they had numbered, behold, Jonathan and his armorbearer were not there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-counts',
          html:
            'Saul, the king, the one who should be leading Israel to victory, is counting his men. The first knowledge he has of Jonathan&apos;s deed is Jonathan&apos;s absence. Jonathan has already won the victory before Saul even knew there was a victory to be won. The king is always the last to know, always behind the movement of God.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 14,
              spans: [
                t('And Saul said unto Ahijah, Bring hither the ark of God: for the ark of God was at that time with the children of Israel.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And as Saul talked with the priest, the noise in the host of the Philistines went on and increased: and Saul said unto the priest, Withdraw thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-seeking-counsel',
          html:
            'Saul seeks the ark of God, wanting to ask counsel of the Lord through the priest. But before the priest can even respond, the noise from the Philistine camp increases. The chaos is spreading. Saul, in his uncertainty, tells the priest to withdraw his hand. He is giving up on asking God and instead rushing into action. By the time Saul acts, the war is already won—by someone else.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 16,
              spans: [
                t('And Saul and all the people that were with him assembled themselves, and they came to the battle: and, behold, every man&apos;s sword was against his fellow, and there was a very great discomfiture.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Moreover the Hebrews that were with the Philistines before that time, which went up with them into the camp, they also turned to be with the Israelites that were with Saul and Jonathan.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Likewise all the men of Israel which had hid themselves in mount Ephraim, when they heard that the Philistines fled, they also followed hard after them in the battle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-scattered',
          html:
            'What Jonathan has begun, the people complete. The Philistines are now fighting each other, fleeing in disorder. The Hebrews who had been serving the Philistines turn to join Israel. Those hiding in the hills emerge to chase the enemy. One man&apos;s faith has sparked the freedom of an entire nation. This is not Saul leading Israel to victory. This is Israel, liberated by the courage of a prince who believed, now acting in their own freedom.',
        },
      ],
    },

    /* ─── 1 Samuel 14:24–35 — The Oath and the Honey ─────────────────── */
    {
      ref: '1 Samuel 14:24–35',
      title: 'Saul&apos;s Curse — The Oath That God Did Not Ask For',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 19,
              spans: [
                t('So the Lord saved Israel that day: and the battle passed over unto '),
                hy('Beth-aven', 'c-beth-aven'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Saul adjured the people, saying, '),
                hg('Cursed be the man that eateth any food until evening', 'c-curse'),
                t(', that I may be avenged on mine enemies. So none of the people tasted any food.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beth-aven',
          html:
            'The battle has swept the Philistines back to Beth-aven, deeper into their own territory. Israel is winning. The victory that Jonathan began is now a rout. And at this moment—when the Lord has already saved Israel—Saul speaks.',
        },
        {
          kind: 'commentary',
          id: 'c-curse',
          html:
            'Saul makes an oath. He does not consult God. He does not ask the people. He simply imposes a curse: no one is to eat until evening. Why? "That I may be avenged on mine enemies." Saul wants to complete the victory. But God has already given the victory. The oath is Saul&apos;s way of trying to control something already outside his control—and of binding his own people to his will rather than to God&apos;s grace.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('And all they of the land came to a wood; and there was honey upon the ground.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And when the people were come into the wood, behold, the honey dropped; but no man put his hand to his mouth: for the people feared the oath.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('But Jonathan heard not when his father charged the people with the oath: therefore he put forth the end of the rod that was in his hand, and dipped it in an honeycomb, and put his hand to his mouth; and his '),
                hg('eyes were enlightened', 'c-eyes-enlightened'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-eyes-enlightened',
          title: 'נִשְׁמַרוּ עֵינָיו "His Eyes Were Enlightened"',
          script: 'וַתָּעַלְנָה עֵינָיו',
          translit: 'Vat&apos;alnu einav — His eyes were enlightened; brightened',
          description:
            'The Hebrew suggests not merely that Jonathan&apos;s physical eyes opened, but that his understanding was illuminated. To eat the honey is to taste sweetness—and in that sweetness, something clarifies. The eyes of the soul brighten. Nourishment and revelation come together in a single act.',
        },
        {
          kind: 'commentary',
          id: 'c-honey-contrast',
          html:
            'The image is exact and deeply ironic. The soldiers of Israel have won a victory—but they cannot taste it. They see honey on the ground but will not eat. Their mouths are bound by Saul&apos;s oath. Jonathan, ignorant of the oath, eats—and his eyes are enlightened. His body receives nourishment; his spirit receives understanding. This is what Saul&apos;s rule offers: famine in the midst of plenty. This is what God&apos;s grace offers: sweetness, enlightenment, freedom.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 24,
              spans: [
                t('Then said one of the people unto him, Thy father straitly charged the people with an oath, saying, Cursed be the man that eateth any food this day: and the people were faint.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then said Jonathan, My father hath troubled the land: see, I pray you, how mine eyes have been enlightened, because I tasted a little of this honey.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('How much more, if haply the people had eaten freely today of the spoil of their enemies which they found? for now would there not be a much greater slaughter of the Philistines?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-troubled-land',
          html:
            'Jonathan speaks with the clarity that comes from nourishment and faith. He says plainly: "My father hath troubled the land." Not "My father has been cautious" or "My father seeks to keep us disciplined." Troubled—the word speaks of breaking, of creating confusion and harm. And Jonathan sees the consequence: had the people eaten freely of the spoil, they could have defeated even more Philistines. Saul&apos;s oath has weakened Israel, not strengthened it. It has served Saul&apos;s will, not God&apos;s victory.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 27,
              spans: [
                t('And the people smote of the Philistines that day from Michmash to Aijalon: and the people were very faint.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the people flew upon the spoil, and took sheep, and oxen, and calves, and slew them on the ground; and the people did eat them with the blood:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Then they told Saul, saying, Behold, the people '),
                hg('sin against the Lord, in that they eat with the blood', 'c-blood-sin'),
                t(': and he said, Ye have transgressed: roll a great stone unto me this day.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Saul said, Disperse yourselves among the people, and say unto them, Bring me here every man his ox, and every man his sheep, and slay them here, and eat; and sin not against the Lord in eating with the blood. And all the people brought every man his ox with him that night, and slew them there.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Saul built an altar unto the Lord: the same was the first altar that Saul built unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-sin',
          html:
            'In their hunger and exhaustion, the soldiers fall upon the spoil and eat the meat with the blood—a violation of the law. Saul hears of this sin and responds by building an altar and making a more elaborate sacrifice. Yet notice: Saul himself created the conditions for this sin. His oath bound the people to hunger. His rule forced them to choose between famine and breaking the law. And only now, after the wrongdoing, does Saul build an altar. He does not ask God&apos;s forgiveness. He simply builds a structure to contain the mess his rule has made.',
        },
      ],
    },

    /* ─── 1 Samuel 14:36–46 — The Lot Falls on Jonathan ────────────────── */
    {
      ref: '1 Samuel 14:36–46',
      title: 'Saul Demands Jonathan&apos;s Death — The People Rise Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 32,
              spans: [
                t('And Saul said, Let us go down after the Philistines by night, and spoil them until the morning light, and let us not leave a man of them. And they said, Do whatsoever seemeth good unto thee. Then said the priest, Let us draw near hither unto God.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Saul asked of God, Shall I go down after the Philistines? wilt thou deliver them into the hand of Israel? But he answered him not that day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-silent',
          html:
            'Saul wants to pursue the Philistines further. The priest suggests asking God. And when Saul asks, God does not answer. Silence. Why? The text will tell us: there is a sin in the camp. Not the sin of hunger, not the sin of eating with blood, but something else—something that has broken communion with God.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 34,
              spans: [
                t('And Saul said, Draw ye near hither, all the chief of the people: and know and see wherein this sin hath been this day.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('For, as the Lord liveth, which saveth Israel, '),
                hg('though it be in Jonathan my son, he shall surely die', 'c-jonathan-dies'),
                t('. But there was not a man among all the people that answered him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-dies',
          html:
            'Saul swears an oath: "Though it be in Jonathan my son, he shall surely die." Even if the sin lies with his own son, he will die. Saul is making his authority absolute. He is saying: No one, not even my own child, can escape my rule. And the people say nothing. They do not answer him. Their silence is the first sign of something shifting.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 36,
              spans: [
                t('And Saul said, Let us go down after the Philistines by night, and spoil them until the morning light, and let us not leave a man of them. And the priest said, Let us ask counsel of God here.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('So they cast lots between Saul and Jonathan; and the lot fell upon Jonathan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lot-jonathan',
          html:
            'The casting of lots—a way of determining God&apos;s will. And the lot falls on Jonathan. The truth will be confirmed by divination: Jonathan has broken the oath. And under Saul&apos;s rule, that means death.',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 38,
              spans: [
                t('Then Saul said to Jonathan, Tell me what thou hast done. And Jonathan told him, and said, I did but taste a little honey with the end of the rod that was in mine hand, and, lo, I must die.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And Saul said, God do so and more also: for thou shalt surely die, Jonathan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-confession',
          html:
            'Jonathan confesses without fear. "I did but taste a little honey with the end of the rod that was in mine hand, and, lo, I must die." He does not hide the deed. He does not plead for mercy. He simply tells the truth. And Saul, hearing the truth, pronounces sentence: "Thou shalt surely die, Jonathan."',
        },

        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 40,
              spans: [
                t('And all the people said unto Saul, '),
                hp('Shall Jonathan die, who hath wrought this great salvation in Israel?', 'c-people-speak'),
                t(' '),
                hp('God forbid', 'c-people-speak'),
                t(': as the Lord liveth, there shall not one hair of his head fall to the ground; for he hath wrought with God this day. So the people '),
                hp('rescued Jonathan', 'c-people-speak'),
                t(', that he died not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-people-speak',
          html:
            'The people rise. Not in rebellion against Saul, not as a revolution—but as a voice of truth higher than the king&apos;s rule. "Shall Jonathan die, who hath wrought this great salvation in Israel?" They invoke God: "As the Lord liveth." They speak what is true: Jonathan acted with God that day. They did not consult the king when Jonathan climbed the cliff. They do not consult him now when they rescue Jonathan from death. The people are saved by the people. Israel is preserved not by Saul&apos;s authority, but by the wisdom that dwells in the people themselves—the wisdom that recognizes who has truly served the Lord.',
        },
        {
          kind: 'christ',
          id: 'christ-jonathan',
          title: 'Christ Connection — The One Who Climbed Alone for Our Salvation',
          html:
            'Jonathan climbed the cliff with only his armorbearer. He believed: "There is no restraint to the Lord to save by many or by few." He tasted the honey in the wood and his eyes were enlightened. And when an earthly king condemned him to death, the people rose up and saved him. Christ is the Jonathan-figure who climbs alone. In Gethsemane, He says to His disciples: "Could ye not watch with me one hour?" (Matt. 26:40). His companions sleep. But He climbs—bearing the weight of the world on His shoulders, asking only that His Father might not will this cup to pass. And the Father answers. There is a resurrection. The people—all of us—are saved. And the salvation He brings is not a famine-curse that binds us in rules we cannot keep. It is the sweetness of grace: "Taste and see that the Lord is good" (Psalm 34:8). Where Saul offers a curse and demands obedience, Christ offers Himself and invites us to be enlightened.',
        },

        {
          kind: 'carry',
          html:
            'You may be living under a rule—not necessarily a king, but a voice inside you or around you—that tries to bind you to a curse. A rule that says: You cannot rest. You cannot be nourished. You cannot taste sweetness. You must keep earning what you can never earn. If you break this rule, you will die. Jonathan teaches us something: there is a higher authority than the voice that condemns. When the people rise and say "He shall not die," they are speaking for grace itself. They are saying: What God has wrought, no human oath can undo. What God has done through this man, no king can condemn. You are not bound to the rule that condemns you. Taste the honey. Let your eyes be enlightened. The Lord who has no restraint to save you is greater than any word spoken against you.',
        },

        {
          kind: 'reflection',
          id: 'rescue',
          prompt:
            'Where in your own life have you heard a voice of condemnation—an oath sworn against you, a rule that binds you to famine instead of freedom? What would it mean to let the people rise up, to hear the voice of grace that says you shall not die?',
        },
      ],
    },

    /* ─── Divider before the final summary ────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── 1 Samuel 14:47–52 — Saul's Reign and Family ────────────────────── */
    {
      ref: '1 Samuel 14:47–52',
      title: 'Saul&apos;s Wars and His House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 47,
              spans: [
                t('So Saul took the kingdom over Israel, and fought against all his enemies on every side, against Moab, and against the children of Ammon, and against Edom, and against the kings of Zobah, and against the Philistines: and whithersoever he turned, he vexed them.'),
              ],
            },
            {
              number: 48,
              spans: [
                t('And he gathered an host, and smote the Amalekites, and delivered Israel out of the hands of them that spoiled them.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('Now the sons of Saul were Jonathan, and Ishui, and Melchi-shua: and the names of his two daughters were Merab the firstborn, and Michal: and the name of his wife was Ahinoam, the daughter of Ahimaaz.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And the name of the captain of his host was Abner, the son of Ner, Saul&apos;s uncle.'),
              ],
            },
            {
              number: 51,
              spans: [
                t('And Kish was the father of Saul; and Ner the father of Abner was the son of Abiel.'),
              ],
            },
            {
              number: 52,
              spans: [
                t('And there was sore war against the Philistines all the days of Saul: and when Saul saw any strong man, or any valiant man, he took him unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-reign',
          html:
            'The chapter concludes by summarizing Saul&apos;s reign. He has become king. He fights on all sides—Moab, Ammon, Edom, the Philistines. He builds a military force, drawing strong men to himself. In outward measure, Saul is a success. He rules. He conquers. But the chapter has shown us something else: his authority rests on the power to condemn, not on the power to save. His victory comes through Jonathan&apos;s faith, not through his own wisdom. And his son—his bravest, most faithful son—he nearly condemned to death for the sin of eating honey while fighting for Israel. The king has won a kingdom. But he has lost the trust of his own people and the favor of his God.',
        },
      ],
    },
  ],
};
