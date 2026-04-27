import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 8 — Victory at Ai and the Law read at Ebal.
 * After the defeat at Achan, God renews the call to courage and gives Joshua
 * a military strategy that succeeds. But conquest yields immediately to covenant:
 * Joshua builds an altar on Mount Ebal and reads the entire law before all Israel,
 * with blessings and curses as commanded in Deuteronomy 27. The king of Ai,
 * like future figures under judgment, hangs on a tree until evening but is taken
 * down before sunset—a prefigurement of Christ on the cross.
 */
export const JOSHUA_8: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 8,

  intros: [
    'Joshua 8 follows immediately after the humiliation of chapter 7, when Israel was routed at Ai because of Achan&apos;s hidden sin. Now, with Achan removed and the nation cleansed, God speaks again to Joshua in words he has heard before: "Fear not, neither be thou dismayed." The command that opened the conquest must be renewed after every stumble. This chapter shows two back-to-back commands: conquer Ai through strategy, then stop and worship. Not one or the other—both.',
    'The ambush at Ai is a narrative masterpiece: Joshua divides his force, draws out the city, springs the trap. But the real heart of the chapter lies not in military victory but in what comes next. On Mount Ebal, Joshua builds an altar of unhewn stones and reads the entire law of Moses before the assembly—men, women, children, and strangers. Blessings and curses, spoken aloud as Moses commanded in Deuteronomy 27. Israel&apos;s first major act after her first major win is to remember the law and stand under its voice.',
  ],

  sections: [
    /* ─── Joshua 8:1 — The Renewed Command to Courage ─────────────────── */
    {
      ref: 'Joshua 8:1',
      title: '"Fear Not, Neither Be Dismayed"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord said unto Joshua, '),
                hp('Fear not, neither be thou dismayed', 'josh8-courage'),
                t(': '),
                hg('take all the people of war with thee', 'josh8-take-people'),
                t(', and arise, go up to Ai: see, I have given into thy hand the king of Ai, and his people, and his city, and his land:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-courage',
          html:
            'These words open Joshua&apos;s calling in Joshua 1:9. Now, after the shame of Achan, after Israel&apos;s first defeat, after the people have wept in dust, God speaks them again. The tone is not "get over it and move on," but "I am still here; fear remains a choice you must refuse." Courage is not fearlessness. It is renewing the choice to obey despite fear, again and again.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('and thou shalt do to Ai and her king as thou didst unto Jericho and her king: only the spoil thereof, and the cattle thereof, shall ye take for a prey unto yourselves: '),
                hg('lay thee an ambush for the city behind it', 'josh8-ambush-command'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-take-people',
          html:
            'God does not say, "Take the whole army." He says, "Take <em>all the people of war with thee</em>" — every able-bodied warrior. This is not a surgical strike; this is the full commitment of Israel&apos;s strength. The people are not divided or withheld. Conquest demands the whole people.',
        },
        {
          kind: 'commentary',
          id: 'josh8-ambush-command',
          html:
            'For Jericho, the strategy was God&apos;s—march and blow trumpets. For Ai, Joshua receives a military blueprint: divide the force, draw them out, spring the trap from behind. God gives not just the victory but the <em>method</em>. This is not Jericho&apos;s miraculous breakthrough; it is Israel learning to fight as warriors, using intellect and strategy, under God&apos;s guarantee.',
        },
        {
          kind: 'carry',
          html:
            'After a failure or a fall, the voice you hear from God often echoes the voice you heard at your beginning—not a new word, but the same word renewed. "Fear not" means you have a choice. You can rehearse your shame, or you can turn and obey. The obedience may look like a strategy you work out with wisdom; it may be visible and practical. But its root is always: I heard His voice, and I chose to go.',
        },
        {
          kind: 'reflection',
          id: 'josh8-renewed',
          prompt: 'Where in your life do you need to hear "Fear not, neither be dismayed" spoken again? What would change if you believed it was meant for this specific moment?',
        },
      ],
    },

    /* ─── Joshua 8:2–13 — The Ambush Planned and Set ──────────────────── */
    {
      ref: 'Joshua 8:2–13',
      title: 'The Ambush: Strategy and Concealment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 2,
              spans: [
                t('And Joshua rose up early in the morning: and '),
                hg('Joshua chose out of all the people thirty thousand mighty men of valour', 'josh8-thirty-thousand'),
                t(', and sent them away by night.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he commanded them, saying, Behold, ye shall '),
                hg('lie in wait against the city, behind it', 'josh8-lie-wait'),
                t(': go not very far from the city, but all of you be ready:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-thirty-thousand',
          html:
            'Thirty thousand men—a massive reserve force—are selected and deployed in the dark. This is deliberate and calculated. Joshua does not hide the fact of the ambush from his troops; what is hidden is the ambush <em>itself</em> from Ai. The whole strategy depends on a portion of Israel concealing themselves so completely that the men of Ai will not suspect them.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 4,
              spans: [
                t('And I, and all the people that are with me, will approach unto the city: and it shall come to pass, when they come out against us, as at the first, that we will '),
                hg('flee before them', 'josh8-feigned-flight'),
                t(':'),
              ],
            },
            {
              number: 5,
              spans: [
                t('(For they will come out after us) till we have '),
                hg('drawn them from the city', 'josh8-drawn-out'),
                t('; for they will say, They flee before us, as at the first: therefore we will flee before them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-lie-wait',
          html:
            'The waiting force is positioned behind the city, not far from it—close enough to respond when the signal is given. Distance is the enemy of coordination; Joshua keeps the trap tight. They wait while the city rouses and marches out, their eyes on the fleeing army before them, blind to what is behind.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 6,
              spans: [
                t('Then ye shall rise up from the ambush, and seize upon the city: for the Lord your God will deliver it into your hand.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And it shall be, when ye have taken the city, that ye shall '),
                hg('set the city on fire', 'josh8-set-fire'),
                t(': according to the commandment of the Lord shall ye do. See, I have commanded you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-feigned-flight',
          html:
            'Joshua and his men will flee—but it is a <em>feigned</em> flight. They are not really retreating; they are drawing. The men of Ai will read it as panic, as a repeat of the route at chapter 7. Joshua knows what their eyes will see and what their pride will believe. He is using their own triumph against them.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 8,
              spans: [
                t('And when ye have taken the city, ye shall kindle a fire in the city: '),
                t('according to the commandment of the Lord shall ye do: See, I have commanded you.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('¶ And Joshua sent them away: and they went to lie in ambush, and abode between Bethel and Ai, on the west side of Ai: but Joshua lodged that night among the people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-drawn-out',
          html:
            'The text repeats the command to draw them out and the reason—Ai&apos;s confidence born from yesterday&apos;s victory. They defeated Israel once; they believe they will do it again. Joshua trusts in their pride to pull them away from the city&apos;s protection.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 10,
              spans: [
                t('And Joshua rose up early in the morning, and '),
                hg('numbered the people', 'josh8-numbered'),
                t(', and went up, he and the elders of Israel, before the people to Ai.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And all the people, even the people of war that were with him, went up, and drew nigh, and came before the city, and pitched on the north side of Ai: now there was a valley between them and Ai.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he took about five thousand men, and set them to lie in ambush between Bethel and Ai, on the west side of the city.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And so he disposed all the people, even all the host that was on the north side, against the city, at a distance; and their liers in wait on the west.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-set-fire',
          html:
            'The fire is the signal. When smoke rises from Ai, the waiting force will know the main army has engaged the city&apos;s defenders and drawn them out. The fire turns the trap from invisible to undeniable—the moment when the men of Ai turn and realize the city burns behind them, and no retreat is possible.',
        },
        {
          kind: 'carry',
          html:
            'Strategic obedience sometimes looks like a plan you think through carefully, not a command shouted from heaven. Joshua knows the enemy, knows the terrain, knows how pride works. He divides his force, times his movement, and lets the enemy&apos;s own expectations become the bait. What wise preparation and discipline look like, when you are walking under God&apos;s "I have given it into thy hand," is not passive waiting—it is the full use of mind and will.',
        },
        {
          kind: 'reflection',
          id: 'josh8-ambush',
          prompt: 'What is one area of your life where you need both courage and strategy? What would it look like to pray and think it through, rather than wait for a miraculous sign?',
        },
      ],
    },

    /* ─── Joshua 8:14–29 — The City Taken; The King Hanged ────────────── */
    {
      ref: 'Joshua 8:14–29',
      title: 'The Trap Sprung: Smoke, Flight, and the King on the Tree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 14,
              spans: [
                t('And it came to pass, when the king of Ai saw it, that they '),
                hg('hasted and rose up early', 'josh8-king-hasted'),
                t(', and the men of the city went out against Israel to battle, he and all his people, at a time appointed, before the plain; but he wist not that there were liers in ambush against him behind the city.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Joshua and all Israel made as if they were beaten before them, and fled by the way of the wilderness.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And all the people that were in Ai were called together to pursue them: and they pursued Joshua, and were drawn away from the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-king-hasted',
          html:
            'The king of Ai hastens because he sees Joshua&apos;s army and knows yesterday&apos;s victory. Speed and confidence are the traps. He marches out with all his people—the city is left defended only by those too young, too old, or too sick to fight. This is what Joshua counted on.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 17,
              spans: [
                t('And there was not a man left in Ai or Bethel, that went not out after Israel: and they left the city open, and pursued Israel.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the Lord said unto Joshua, '),
                hp('Stretch out the spear that is in thy hand toward Ai', 'josh8-spear-stretched'),
                t(': for I will give it into thine hand. And Joshua stretched out the spear that he had in his hand toward the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-city-open',
          html:
            'The city is now utterly exposed—<em>left open</em>—because every man capable of fighting is pursuing Joshua&apos;s feigned retreat. The trap is ready to close. Joshua waits for the moment when the ambush force must move.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 19,
              spans: [
                t('And the liers in ambush rose up quickly out of their place, and they ran as soon as he had stretched out his hand: and they entered into the city, and took it, and hasted and set the city on fire.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('¶ And when the men of Ai looked behind them, they saw, and, behold, the smoke of the city ascended up to heaven: and they had no power to flee this way or that way: and the people that fled to the wilderness turned back upon the pursuers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-spear-stretched',
          html:
            'The outstretched spear is the signal. Joshua&apos;s gesture carries the army—just as in Exodus 17, when Moses held up his staff and Israel prevailed in battle. The leader&apos;s hand, raised in obedience to God&apos;s word, becomes the moment when the people move. This is not magic; it is the visible sign of a unified command.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 21,
              spans: [
                t('And when Joshua and all Israel saw that the ambush had taken the city, and that the smoke of the city ascended, then they turned again, and smote the men of Ai.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the other issued out of the city against them; so they were in the midst of Israel, some on this side, and some on that side: and they smote them, so that they let none of them remain or escape.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the king of Ai they took alive, and brought him unto Joshua.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-city-taken',
          html:
            'The city is taken, the people destroyed. But the king is <em>taken alive</em>. The text is leading to a moment of judgment, not mere slaughter. The king of Ai will face a choice about where his body will rest, and that choice will echo through Scripture.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 24,
              spans: [
                t('And it came to pass, when Israel had made an end of slaying all the inhabitants of Ai in the field, in the wilderness wherein they chased them, and when they were all fallen on the edge of the sword, until they were consumed: then all the people of Israel returned unto Ai, and smote it with the edge of the sword.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And so it was, that all that fell that day, both men and women, were twelve thousand, even all the people of Ai.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('For Joshua drew not back his hand, wherewith he stretched out the spear, until he had utterly destroyed all the inhabitants of Ai.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Only the cattle and the spoil of that city Israel took for a prey unto themselves, according unto the word of the Lord which he commanded Joshua.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Joshua burnt Ai, and made it an heap for ever, even a desolation unto this day.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('¶ And '),
                hy('the king of Ai he hanged on a tree', 'josh8-hanged-tree'),
                t(' until the eventide: and as soon as the sun was down, Joshua '),
                hy('commanded that they should take his carcase down from the tree', 'josh8-taken-down'),
                t(', and cast it at the entering of the gate of the city, and raise thereon a great heap of stones, that remaineth unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'josh8-etz',
          title: 'Etz — &ldquo;tree&rdquo;',
          script: 'עֵץ',
          translit: '<strong>etz</strong> · wood, tree, gallows',
          description:
            'The tree is both a literal instrument of death and a sign of curse. Deuteronomy 21:23 commands: "His body shall not remain all night upon the tree; but thou shalt in any wise bury him that day; (for he that is hanged is accursed of God.)" The king of Ai hangs and is taken down before sunset—a prefigurement of the True King who would hang for sin.',
        },
        {
          kind: 'christ',
          id: 'josh8-hanged-tree',
          title: 'Christ Connection — The King on the Tree, Taken Down Before Evening',
          html:
            'The law stipulates that no body shall remain on a tree overnight—it is a curse to hang. The king of Ai hangs until evening and is then taken down. When Jesus hung on the cross, John records: "The Jews therefore, because it was the preparation, that the bodies should not remain upon the cross on the sabbath day, (for that sabbath day was an high day,) besought Pilate that their legs might be broken, and that they might be taken away" (John 19:31). Jesus, unlike the king of Ai, rose on the third day—but He honored the law&apos;s requirement by being taken down before the sun set. He bore the curse that hangs upon the tree, and He bore it according to the law.',
        },
        {
          kind: 'carry',
          html:
            'When you see a leader or a kingdom fall, the text takes time to show you the body being treated with care—taken down, honored even in defeat. The conquest of Ai is not the point of the text. The point is: even in judgment, the law is honored. Even the king of Ai&apos;s corpse receives the respect the law demands. If that is how the law guards even the dead, how much more does it guard the living who obey it?',
        },
        {
          kind: 'reflection',
          id: 'josh8-law-honored',
          prompt: 'What would it mean for you to honor the law, not just when it feels easy, but even when it asks you to care for an enemy or to respect a boundary that costs you?',
        },
      ],
    },

    /* ─── Joshua 8:30–32 — The Altar Built on Mount Ebal ───────────────── */
    {
      ref: 'Joshua 8:30–32',
      title: 'The Altar on Mount Ebal: Worship After War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 30,
              spans: [
                t('Then Joshua built an altar unto the Lord God of Israel in mount '),
                hy('Ebal', 'josh8-ebal'),
                t(':'),
              ],
            },
            {
              number: 31,
              spans: [
                t('As Moses the servant of the Lord commanded the children of Israel, as it is written in the book of the law of Moses, '),
                hg('an altar of whole stones, over which no man hath lift up any iron', 'josh8-unhewn'),
                t(': and they offered thereon burnt offerings unto the Lord, and sacrificed peace offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-ebal',
          html:
            'Mount Ebal. The mountain of curse, the mountain of judgment. After destroying the city of Ai and slaying twelve thousand people, Joshua does not press forward to the next conquest. He stops. He builds an altar on the very mountain where curses will be proclaimed. He chooses the place of judgment as the place of worship. This is a theological statement: we do not worship only in triumph; we worship in the shadow of the law&apos;s teeth.',
        },
        {
          kind: 'hebrew',
          id: 'josh8-ebal-heb',
          title: 'Ebal — &ldquo;the bare mountain&rdquo;',
          script: 'עֵיבָל',
          translit: '<strong>Ebal</strong> · the mountain of curse',
          description:
            'Mount Ebal and Mount Gerizim frame the Valley of Shechem, standing on either side. One mountain holds blessing, one holds curse. The valleys acoustic properties allow voices to carry from one peak to the other—ancient Israel could hear the blessings and curses from across the valley. Joshua chooses Ebal for the altar.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 32,
              spans: [
                t('And he wrote there upon the stones '),
                hy('a copy of the law of Moses', 'josh8-law-written'),
                t(', which he wrote in the presence of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-unhewn',
          html:
            'Whole stones, unhewn, no iron tool lifted. This is the same requirement Moses gave in Deuteronomy 27. The altar is not made by human skill or craft. It is made from what God provides, unworked, unwrought. The point is deliberate: the law does not come because humans made something clever; it comes because God gave it whole.',
        },
        {
          kind: 'commentary',
          id: 'josh8-law-written',
          html:
            'Joshua writes the law on the stones, not on parchment or hidden in a scroll. The law is engraved, plastered, public. Every Israelite can read it. Every child can see it. The law is not a secret whispered to the priests; it is written where all can see and know.',
        },
        {
          kind: 'carry',
          html:
            'You do not earn the right to read the law by winning a battle or achieving a conquest. The law does not wait until you are perfect or victorious. Joshua builds the altar in the dust of conflict and reads the law aloud so the people know, in the very moment of their triumph, that they live under a standard they did not make and that they did not earn the right to set aside.',
        },
        {
          kind: 'reflection',
          id: 'josh8-worship-after-war',
          prompt: 'After you win something, what is the first thing you reach for? How would your life change if the first thing you did was acknowledge the law you live under?',
        },
      ],
    },

    /* ─── Joshua 8:33–35 — The Law Read Before All Israel ────────────── */
    {
      ref: 'Joshua 8:33–35',
      title: 'The Law Read Aloud: Blessing and Curse Before All Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 33,
              spans: [
                t('And all Israel, and their elders, and officers, and their judges, stood on this side the ark and on that side before the priests the Levites, which bare the ark of the covenant of the Lord, as well the stranger, as he that was born among them; half of them over against mount '),
                hy('Gerizim', 'josh8-gerizim'),
                t(', and half of them over against mount '),
                hy('Ebal', 'josh8-ebal2'),
                t('; as Moses the servant of the Lord had commanded before, that they should bless the people of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'josh8-gerizim',
          title: 'Gerizim — &ldquo;blessing mountain&rdquo;',
          script: 'גְּרִזִים',
          translit: '<strong>Gerizim</strong> · the mountain of blessing',
          description:
            'Half the people—six tribes—stand on Mount Gerizim, facing the words of blessing. The mountain holds half of Israel&apos;s ear, half of Israel&apos;s understanding. Blessing and curse are not one-sided; they are both present, both heard.',
        },
        {
          kind: 'commentary',
          id: 'josh8-ebal2',
          html:
            'The people divide, standing on both mountains. The Levites stand between them, reading the law, proclaiming blessings and curses. The entire nation hears both words—the promise of blessing for obedience, the warning of curse for betrayal. No one gets to hear only the blessing; no one is allowed to forget the curse. The law is read in its wholeness.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 34,
              spans: [
                t('And afterward he read all the words of the law, the blessings and cursings, according to all that is written in the book of the law.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('There was not a word of all that Moses commanded which Joshua read not before all the congregation of Israel, with the women, and the little ones, and '),
                hg('the strangers that were conversant among them', 'josh8-strangers'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh8-strangers',
          html:
            'The strangers—the non-Israelites living among them—hear the law too. They are not excluded from the covenant reading. They stand among the people and hear every word. The law&apos;s voice is for the whole community, not just the bloodline. This is the same vision Deuteronomy 27 held: the stranger is as one born among them.',
        },
        {
          kind: 'christ',
          id: 'josh8-blessing-curse',
          title: 'Christ Connection — Every Word of the Law Read Aloud',
          html:
            'Joshua reads <em>not a word of all that Moses commanded</em> is left unspoken. Every blessing is named, every curse is proclaimed, before the whole assembly. In Galatians 3:13, Paul draws the line: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree." Jesus stood under the whole law, every word of it, so that those who believe in Him could inherit the blessing. But He did not avoid the curse—He embraced it and bore it for us.',
        },
        {
          kind: 'carry',
          html:
            'The law does not come in whispers or private interpretations. It comes aloud, in your hearing, in the presence of your family and your neighbors and the stranger. You are not left to guess what you owe or what you are called to. The standard is read plain. Your job is to listen, to know it, and to choose—blessing or curse. The people stood in the valley between two mountains and heard both voices. You too must hear both, and choose.',
        },
        {
          kind: 'reflection',
          id: 'josh8-law-read-aloud',
          prompt: 'What would it mean to read the law aloud in your own life—to name the standards you actually live by and let your family hear them? What would change?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Joshua built an altar on Mount Ebal and read all the words of the law—the blessings and the curses—aloud before all Israel, with women, children, and strangers hearing every word.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 8 · Study Guide',
  },
};
