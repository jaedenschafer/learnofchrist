import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Samuel 30 — Ziklag Burned; David Recovers All
 *
 * When David and his men return from war to find their city burned and their
 * families taken captive, the people turn against him, threatening stoning.
 * In that moment, David encourages himself in the Lord his God — the founding
 * act of his kingship. With the help of an abandoned Egyptian slave, David
 * recovers everything the enemy stole. And in a stunning reversal, he orders
 * that those who guarded the supplies share equally in the spoil with those
 * who fought. Before there is ever a kingdom, there is this: justice for the
 * weary, compassion for the abandoned, and a king who refuses to let anyone
 * be left behind.
 */
export const SAMUEL_1_30: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 30,

  intros: [
    'In this chapter, David faces his darkest hour as a fugitive. While he and his men have been away at war, the Amalekites have invaded the south, burned Ziklag, and taken everyone captive — wives, children, and possessions. When David returns and sees the smoking ruins, the people turn on him, speaking of stoning him. He has lost everything. He has become the object of his own people&apos;s rage.',
    'But in that moment of complete loss and abandonment, something shifts. "David encouraged himself in the Lord his God." This is the language of transformation. Not circumstance changing, but character changing. Not victory arriving, but strength arising from within because a man is anchored to God. What follows is one of the most extraordinary recoveries in all of Scripture — and a king&apos;s decision about how spoil should be divided that sets a precedent for Israel: those who stay behind to guard the camp share equally with those who go to battle. In this chapter, we see Christ the King recovering all that the enemy has stolen, and showing us the shape of His kingdom: no one left behind.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 30',
    quote:
      'When David and his men found their city burned and their families taken captive, the people threatened to stone him. But David encouraged himself in the Lord his God, recovered all, and declared that those who guarded the supplies would share equally with those who fought.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 30 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 30:1–6 — Ziklag Burned; David Encouraged in the Lord ─── */
    {
      ref: '1 Samuel 30:1–6',
      title: 'The City Burned; David Encouraged in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              1,
              'And it came to pass, when David and his men were come to Ziklag on the third day, that the Amalekites had invaded the south, and Ziklag, and smitten Ziklag, and burned it with fire;'
            ),
            plain(
              2,
              'And had taken the women captives, that were therein: they slew not any, either great or small, but carried them away, and went on their way.'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Ziklag was given to David by Achish, the Philistine king, as a place of refuge while he fled Saul. It became his base, his refuge, the place where his wives and his men&apos;s families lived. And while David was away, it was burned. The Amalekites — the ancient enemy of Israel, the nation God had commanded Saul to destroy but Saul had spared — have taken everything.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              3,
              t('So David and his men came to the city, and, behold, it was '),
              hg('burned with fire', 'c-burned'),
              t('; and their wives, and their sons, and their daughters, were '),
              hg('taken captives', 'c-captives'),
              t('.')
            ),
            plain(
              4,
              'Then David and the people that were with him lifted up their voice and wept, until they had no more power to weep.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-burned',
          html:
            'The city is not simply damaged. It is burned with fire — completely destroyed. Imagine the smell, the sight, the realization that everything is gone. The homes, the livestock, the stored grain — all ash.',
        },
        {
          kind: 'commentary',
          id: 'c-captives',
          html:
            'The Amalekites did not kill anyone, we&apos;re told. They took the women and children as captives. They took the spoil. They took everything that could be carried away. In David&apos;s mind, his wives are gone. His men&apos;s families are gone. What does a warrior do when he comes home to that?',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              5,
              'Now David&apos;s two wives were taken captives, Ahinoam the Jezreelitess, and Abigail the wife of Nabal the Carmelite.'
            ),
            plain(
              6,
              'And David was greatly distressed; for the people spake of stoning him, because the soul of all the people was grieved, every man for his sons and for his daughters: but David encouraged himself in the Lord his God.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stone',
          html:
            'The men turn on David. They speak of stoning him. He is their commander, their leader — but he was away while their families were taken. Their grief becomes rage. And they aim it at him. In this moment, David has lost his wives, lost the respect of his men, lost security, lost home. He is at the absolute bottom.',
        },
        {
          kind: 'hebrew',
          id: 'chazak',
          title: 'Chazak — "Encouraged" / "Strengthened"',
          script: 'חָזַק',
          translit: '<strong>Chazak</strong> · to strengthen; to encourage; to be strong',
          description:
            'The Hebrew word translated "encouraged himself" is <em>chazak</em>. It carries the sense of taking hold, grasping, becoming firm. David does not wait for anyone to encourage him. He does not wait for circumstances to change. He takes hold — of God. He strengthens himself. This is the root of his kingship.',
        },
        {
          kind: 'christ',
          id: 'encourage-lord',
          title: 'Christ Connection — Strength in Abandonment',
          html:
            'In Philippians 4:11–13, Paul echoes this exact moment: "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content… I can do all things through Christ which strengtheneth me." And in Habakkuk 3:18, the prophet says, "Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail, and the fields shall yield no meat; the flock shall be cut off from the fold, and there shall be no herd in the stalls: Yet I will rejoice in the Lord, I will joy in the God of my salvation." David does the same. Everything is gone. And he encourages himself in the Lord his God. This is not denial. This is the deepest realism — the recognition that God remains when everything else is stripped away.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when everyone you trust is against you, when the losses feel total, when there is no one to encourage you and no reason to expect things to change. In those moments, you have what David had: the option to turn inward, to God, and to strengthen yourself there. Not by pretending the loss isn&apos;t real. But by remembering that loss is not the last word. God is.',
        },
        {
          kind: 'reflection',
          id: 'encouraged-lord',
          prompt:
            'When have you been in a situation where everyone else was grieved or angry at you? What does it mean to "encourage yourself in the Lord" when you have no human encouragement to lean on?',
        },
      ],
    },

    /* ─── 1 Samuel 30:7–10 — David Inquires of the Lord; 600 Become 400 ──── */
    {
      ref: '1 Samuel 30:7–10',
      title: 'David Inquires of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              7,
              t('And David said to Abiathar the priest, Ahimelech&apos;s son: "I pray thee, bring me hither the '),
              hy('ephod', 'c-ephod'),
              t('." Abiathar brought thither the ephod to David.')
            ),
            plain(
              8,
              'And David inquired at the Lord: "Shall I pursue after this troop? shall I overtake them?" And he answered: "Pursue: for thou shalt surely overtake them, and without fail recover all."'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ephod',
          html:
            'The ephod is the priestly device for inquiring of God. David, encouraged in the Lord, does not make a rash decision. He does not chase in anger. He inquires of God. He asks: Shall I pursue? Will I catch them? The answer comes back: "Pursue: for thou shalt surely overtake them, and without fail recover all." Before any military action, there is this dialogue with God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              9,
              t('So David went, he and the 600 men that were with him, came to the brook Besor, where '),
              hg('those that were left behind stayed', 'c-left-behind'),
              t('.')
            ),
            plain(
              10,
              'But David pursued, he and 400 men: 200 abode behind, which were so faint that they could not go over the brook Besor.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-left-behind',
          html:
            'David has 600 men. But 200 are so exhausted, so weakened, that they cannot cross the brook. So they remain. David takes 400 and pursues. This detail becomes crucial later: the 200 who stay behind will later become a point of contention. Will they share in the spoil? Or will they be left out because they did not fight?',
        },
        {
          kind: 'carry',
          html:
            'Notice that David does not shame the 200 who cannot go further. He does not leave them behind in anger. Exhaustion is a real thing. Some people hit their limit before others. In a truly just leader, this is not a mark against them.',
        },
      ],
    },

    /* ─── 1 Samuel 30:11–16 — The Egyptian Slave ────────────────────────── */
    {
      ref: '1 Samuel 30:11–16',
      title: 'The Lord Uses the Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              11,
              t('And they found an Egyptian in the field, and brought him to David, and gave him bread, he did eat; made him drink water; gave him a piece of cake of figs, two clusters of raisins: when he had eaten, '),
              hg('his spirit came again to him', 'c-spirit'),
              t(': he had eaten no bread, nor drunk any water, three days, three nights.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-spirit',
          html:
            'They find an Egyptian man alone in the field, half-dead from hunger and thirst. He has been without food or water for three days. He is broken, abandoned, on the edge of death. And David does not pass him by. David feeds him. Restores him. "His spirit came again to him."',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              12,
              t('And David said unto him, To whom belongest thou? and whence art thou? And he said, I am a young man of Egypt, servant to an Amalekite; my master left me, because three days agone I fell sick.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The Egyptian was a slave to an Amalekite master. When he became sick, his master left him to die. No water, no bread, no mercy. And then David found him. David, who has just lost everything, is merciful to a stranger who has lost everything.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              13,
              'We made an invasion upon the south of the Cherethites, and upon the coast which belongeth to Judah, and upon the south of Caleb; and we burned Ziklag with fire.'
            ),
            verse(
              14,
              t('And David said unto him, Canst thou bring me down to this company? And he said, '),
              hy('Swear unto me by God', 'c-oath'),
              t(', that thou wilt neither kill me, nor deliver me into the hands of my master, and I will bring thee down to this company.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'The Egyptian knows that if he leads David to the Amalekites, he might be killed, or worse — returned to his master who left him to die. So he asks for an oath. David swears. And the Egyptian believes him enough to bring him down to the Amalekite camp.',
        },
        {
          kind: 'hebrew',
          id: 'shalal',
          title: 'Shalal — "Spoil" / "Plunder"',
          script: 'שָׁלַל',
          translit: '<strong>Shalal</strong> · spoil; plunder; that which is taken in war',
          description:
            'The word for "spoil" — the treasure, the goods, the captives taken in war. In David&apos;s kingdom, spoil will be divided according to a principle of radical equality: those who stay behind share equally with those who fight. This is not the normal way of war. This is the way of the kingdom of God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              15,
              'When he had brought him down, behold, they were spread abroad upon all the earth, eating and drinking, and dancing, because of all the great spoil that they had taken out of the land of the Philistines, and out of the land of Judah.'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The Amalekites are spread across the field, eating, drinking, dancing — they are celebrating their victory and their spoil. They are careless. They have no idea that David is coming. They have no sentries, no guard. And this is the moment of vulnerability that God has allowed.',
        },
        {
          kind: 'christ',
          id: 'broken-becomes-key',
          title: 'Christ Connection — Using the Broken',
          html:
            'Throughout Scripture, God uses the broken to do His work. The Egyptian who was left to die becomes the key to David&apos;s victory and the recovery of all he has lost. He is nobody — a slave, abandoned, starving. And he changes everything. In the Incarnation, Christ took on the form of the broken. He came as one who would be rejected, despised, left behind. And through His brokenness, the victory is won and all that was lost is recovered. "Yet it pleased the Lord to bruise him; he hath put him to grief" (Isaiah 53:10). The broken point the way to redemption.',
        },
        {
          kind: 'carry',
          html:
            'If you are feeling used up, left behind, broken by circumstance or abandoned by those who should have cared for you — you are not useless. The God who raised David uses the broken to do what no one else can do. Your suffering is not wasted. Your witness is needed. Stay faithful. God sees.',
        },
        {
          kind: 'reflection',
          id: 'broken-vessel',
          prompt:
            'Who in your life has been broken and cast aside? What would it look like to extend David&apos;s mercy to them — to feed them, restore them, and believe they have something to offer?',
        },
      ],
    },

    /* ─── 1 Samuel 30:17–20 — David Smites Them; Recovers All ──────────── */
    {
      ref: '1 Samuel 30:17–20',
      title: 'David Recovered All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              17,
              t('And David smote them from the twilight even unto the evening of the next day: '),
              hg('there escaped not a man of them', 'c-complete-victory'),
              t(', save 400 young men, which rode upon camels, and fled.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-complete-victory',
          html:
            'The victory is total. From twilight until evening of the next day, David and his men pursue and strike down the Amalekites. Only 400 young men escape on camels. Everyone else falls.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              18,
              t('And David recovered all that the Amalekites had carried away: and '),
              hp('David rescued his two wives', 'c-recovered-wives'),
              t('.')
            ),
            plain(
              19,
              'There was nothing lacking to them, neither small nor great, neither sons nor daughters, neither spoil, nor any thing that they had taken to them: David recovered all.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-recovered-wives',
          html:
            'David recovers Ahinoam and Abigail. He recovers the sons and daughters. He recovers the spoil. Nothing is lacking. Everything that was taken is returned. This is the promise fulfilled: "thou shalt surely overtake them, and without fail recover all."',
        },
        {
          kind: 'hebrew',
          id: 'naqam',
          title: 'Naqam — "Avenge" / "Take Vengeance"',
          script: 'נָקַם',
          translit: '<strong>Naqam</strong> · to avenge; to take vengeance; to requite',
          description:
            'While the word does not appear in verse 17, the concept is present. David has avenged the burning of Ziklag, the taking of his people. This is not merely personal revenge — it is the restoring of justice, the defense of the covenant people, the vindication of those who were wronged.',
        },
        {
          kind: 'christ',
          id: 'christ-recovers-all',
          title: 'Christ Connection — The Recovery of All Things',
          html:
            'In Luke 19:10, Jesus says: "The Son of man is come to seek and to save that which was lost." All that the enemy has stolen — the lives lost to sin, the years lost to evil, the relationships broken by separation from God — Christ recovers. The woman who lost her ten coins, the shepherd who lost his sheep, the father who lost his son — all three parables in Luke 15 are about recovery. And Christ is the ultimate recovery: the One who takes back everything the enemy has taken and returns it whole. The promise to David echoes the gospel: "thou shalt surely overtake them, and without fail recover all."',
        },
        {
          kind: 'carry',
          html:
            'If something has been taken from you — if you have lost years to addiction, to grief, to a broken relationship, to a wound you could not heal — know that the God who recovered all things for David is working toward recovery in your life too. Not by denying the pain, but by making something new from the wreckage. Restoration comes to those who keep faith.',
        },
      ],
    },

    /* ─── 1 Samuel 30:21–25 — The Statute for Israel ────────────────────── */
    {
      ref: '1 Samuel 30:21–25',
      title: 'Those Who Guard the Stuff Share Equally',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              21,
              t('And David came to the 200 men, which were so faint that they could not follow David, whom they had made also to abide at the brook Besor: and they went forth to meet David, and to meet the people that were with him: and when David came near to the people, he '),
              hg('saluted them', 'c-greeted'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-greeted',
          html:
            'The 200 who could not cross the brook come out to meet David. What kind of greeting will they receive? They did not fight. Are they heroes or cowards?',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              22,
              'Then answered all the wicked men and men of Belial, of those that went with David: "Because they went not with us, we will not give them ought of the spoil that we have recovered, save to every man his wife and his children, that they may lead them away, and depart."'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The men who fought want to keep all the spoil for themselves. They argue that because the 200 did not go into battle, they deserve nothing. They are willing to let them have their families back, but no part of the treasure. This is the logic of the world: you only get what you earn by your own effort.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            verse(
              23,
              t('But David said, Ye shall not do so, my brethren, with that which the Lord hath given us, who hath '),
              hy('preserved us', 'c-preserved'),
              t(', and '),
              hp('delivered the company that came against us into our hand', 'c-delivered'),
              t('.')
            ),
            plain(
              24,
              'For who will hearken unto you in this matter? but as his part is that goeth down to the battle, so shall his part be that tarrieth by the stuff: they shall part alike.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-preserved',
          html:
            'David reminds his men: it is not your strength that won this battle. It is the Lord who preserved you and delivered the enemy into your hand. When you remember that victory is a gift from God, you cannot be stingy with God&apos;s gift.',
        },
        {
          kind: 'commentary',
          id: 'c-delivered',
          html:
            'The enemy came against David&apos;s company — they wanted to destroy them, to steal everything, to wipe them out. And God delivered them. The victory itself is God&apos;s. The spoil is God&apos;s. Therefore, it belongs to the whole community.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              25,
              'And so it was from that day forward, that he made it a statute and an ordinance for Israel unto this day.'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'This is the beginning of David&apos;s reign — not in coronation, but in justice. He establishes a statute that will govern Israel: those who stay behind, who guard the supplies and the camp while others go to war, share equally with those who fight. This is revolutionary. This is the shape of the kingdom. No one is left out. No role is less valuable.',
        },
        {
          kind: 'christ',
          id: 'equal-shares',
          title: 'Christ Connection — Equal Standing in the Body',
          html:
            'Paul will later echo this principle in 1 Corinthians 12: "For the body is not one member, but many… the members should have the same care one for another… And whether one member suffer, all the members suffer with it; or one member be honoured, all the members rejoice with it." The eye cannot say to the hand, "I don&apos;t need you." The strong cannot say to the weak, "You had no part in the victory, so you get no part of the blessing." In Christ&apos;s kingdom, as in David&apos;s, those who hold the line at home share equally with those who go to battle. There is no hierarchy of spiritual worth. All are one body.',
        },
        {
          kind: 'carry',
          html:
            'If you are someone who works behind the scenes, who holds things together while others are out in front, know that your role is not secondary. The kingdom of David — and the kingdom of Christ — cannot function without those who stay and guard. You are not less. You are essential. And in God&apos;s kingdom, you share equally.',
        },
        {
          kind: 'reflection',
          id: 'statute-equality',
          prompt:
            'Who in your church or community does work that goes unseen or undervalued? What would it look like to honor them as essential — to make sure they truly share equally in the life and blessing of the community?',
        },
      ],
    },

    /* ─── 1 Samuel 30:26–31 — David Sends of the Spoil to the Elders ────── */
    {
      ref: '1 Samuel 30:26–31',
      title: 'Spoil Sent to the Elders of Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(
              26,
              '(David sent of the spoil to the elders of Judah, his friends, saying, Behold a present for you of the spoil of the enemies of the Lord;)'
            ),
            plain(
              27,
              'To them which were in Bethel, and to them which were in south Ramoth, and to them which were in Jattir,'
            ),
            plain(
              28,
              'And to them which were in Aroer, and to them which were in Siphmoth, and to them which were in Eshtemoa,'
            ),
            plain(
              29,
              'And to them which were in Rachal, and to them which were in the cities of the Jerahmeelites, and to them which were in the cities of the Kenites,'
            ),
            plain(
              30,
              'And to them which were in Hormah, and to them which were in Cormorant, and to them which were in Athach,'
            ),
            plain(
              31,
              'And to them which were in Hebron, and to all the places where David himself and his men were wont to haunt.'
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'After establishing the statute of equal division within his own army, David does something else: he sends portions of the spoil to the elders throughout Judah — to his friends, to those who have sheltered him in his wandering, to the covenant people he will soon lead. The spoil is distributed: to Bethel, to Aroer, to Eshtemoa, to Hebron. He is weaving a network of loyalty and blessing even before he becomes king. He is saying: this victory is not mine alone. It belongs to all of Judah. And you share in it.',
        },
        {
          kind: 'carry',
          html:
            'Notice that David does not hoard the spoil. He does not use his victory to gain power over others by controlling resources. Instead, he distributes. He sends gifts to his friends, to those who will become his kingdom. This is leadership as generosity. This is power as blessing. Before he is crowned king, this is already the character of his rule.',
        },
      ],
    },
  ],
};
