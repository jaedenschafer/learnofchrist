import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 6 — Jericho[res:iaa-jericho-walls[res:bibleodyssey-jericho-conquest]] Falls
 *
 * The walls of Jericho fall not by battering ram or siege, but by faith[res:intertextual-faith-walls],
 * silence, and God&apos;s appointed signal. Seven priests, seven trumpets,
 * seven days of marching — and on the seventh day, seven circuits. When
 * the people shout, the walls collapse. Rahab the prostitute and her
 * household are spared. The curse on rebuilding Jericho is pronounced
 * and fulfilled centuries later. A story about God&apos;s timing, the
 * power of obedience, and what happens when an entire community acts
 * together in faith.
 */
export const JOSHUA_6: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 6,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 18 },
  intros: [
    'Joshua 6 is one of the strangest military campaigns in Scripture. Jericho is fortified, its gates shut tight, its king waiting. God gives Joshua a plan that sounds like no military strategy ever devised: march around the city once a day for six days, then on the seventh day march seven times, and when the priests blow their trumpets, shout. The walls will fall flat. Every man, woman, and child inside — except Rahab and her household — will be devoted to destruction.',
    'What makes this chapter unforgettable is not its military strangeness, but its theological gravity. Faith marches without seeing the result. Silence is sometimes the hardest obedience. A nation&apos;s whole future hangs on whether one young leader and twelve tribal leaders can get their people to move together as one body. And before the smoke clears, we meet a woman — a prostitute with faith sharper than a sword — who will carry the line of Christ.',
  ],

  opener: {
    matchTitle: /jericho/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Joshua 6',
    quote:
      'By faith the walls of Jericho fell down, after they were compassed about seven days.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 6 · Study Guide (from Hebrews 11:30)',
  },

  resources: [
    {
      id: 'iaa-jericho-walls',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Jericho Walls[res:iaa-jericho-walls] and Conquest Evidence',
      url: 'https://www.antiquities.org.il/article-3163-en/Tell%20es-Sultan.html',
      description: 'Archaeological evidence from Tell es-Sultan showing the destruction layers and wall structures of ancient Jericho.',
    },
    {
      id: 'bibleodyssey-jericho-conquest',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jericho: City and Conquest',
      url: 'https://www.bibleodyssey.org/dictionary/jericho/',
      description: 'SBL study of Jericho in Scripture and archaeology, including the narrative of Joshua&apos;s siege.',
    },
    {
      id: 'intertextual-faith-walls',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Faith and the Walls (Joshua 6 and Hebrews 11)',
      url: 'https://intertextual.bible/search?q=Joshua+6+Hebrews+11+30',
      description: 'Connection between Joshua 6 and Hebrews 11:30, which cites the fall of Jericho as an example of faith.',
    },
  ],

  sections: [
    /* ─── Joshua 6:1–5 — The Strange Plan from God ────────────────────── */
    {
      ref: 'Joshua 6:1–5',
      title: 'The Strange Plan from God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Jericho was '),
                hg('straitly shut up', 'josh6-closed'),
                t(' because of the children of Israel: '),
                t('none went out, none came in'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-closed',
          html:
            'Jericho is locked down tight. The city has already heard about the plagues of Egypt, the parting of the Red Sea, the conquest of kingdoms on the far side of the Jordan. Fear has shut the gates. This is where the story begins — not with weakness on Israel&apos;s side, but with terror on Jericho&apos;s.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 2,
              spans: [
                t('And the Lord said unto Joshua, See, '),
                hg('I have given into thine hand', 'josh6-given'),
                t(' Jericho, and the king thereof, and the mighty men of valour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-given',
          html:
            'The Lord speaks in the past tense: &ldquo;I have given.&rdquo; The victory is already His to give; the result is already settled. Joshua&apos;s only job is to receive what God has already prepared.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                t('ye shall compass the city'),
                t(', all the men of war, going round about the city once. Thus shalt thou do six days.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And '),
                hg('seven priests', 'josh6-priests'),
                t(' shall bear '),
                hy('seven trumpets', 'hebrew-shofar'),
                t(' of rams&apos; horns before the ark: and the seventh day ye shall compass the city '),
                hg('seven times', 'josh6-seven'),
                t(', and the priests shall blow with the trumpets.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And it shall come to pass, that when they make a long blast with the ram&apos;s horn, and when ye hear the sound of the trumpet, all the people shall shout with a great shout; and the wall of the city shall '),
                hp('fall down flat', 'christ-faith'),
                t(', and the people shall ascend up every man straight before him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-priests',
          html:
            'Seven priests, not soldiers. The conquest of Jericho is a priestly act. The priests who carry the ark of the covenant are at the center — not the generals, not the strategists. God is the Commander.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shofar',
          title: 'Shofar — &ldquo;ram&apos;s-horn trumpet&rdquo;',
          script: 'שׁוֹפָר',
          translit: '<strong>shofar</strong> · the horn of a ram, blown as a signal or proclamation',
          description:
            'The shofar is God&apos;s instrument of announcement. It calls the assembly. It announces the year of Jubilee. In Revelation, it is the trumpet that announces the resurrection of the dead.',
        },
        {
          kind: 'commentary',
          id: 'josh6-seven',
          html:
            'Seven times on the seventh day. The number seven is woven through the whole plan: seven priests, seven trumpets, seven days, and finally, on the culminating day, seven circuits. In Hebrew numerology, seven is the number of completion and wholeness — the fullness of God&apos;s work.',
        },
        {
          kind: 'christ',
          id: 'christ-faith',
          title: 'Christ Connection — The Trumpet of Resurrection',
          html:
            'Hebrews 11:30 cuts straight to the theology: &ldquo;By faith the walls of Jericho fell down, after they were compassed about seven days.&rdquo; Paul tells the Thessalonians that the Lord Himself &ldquo;shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God&rdquo; (1 Thess. 4:16). The shofar that brings down Jericho&apos;s walls is a type of the trumpet that will announce Christ&apos;s return and the resurrection of the dead. The walls we cannot breech fall when God&apos;s trumpet sounds.',
        },
        {
          kind: 'carry',
          html:
            'This plan makes no human sense. No siege engine. No battering ram. No strategy a general would recognize. But Joshua is told to obey anyway. There are walls in your life right now that look unbreakable — a relationship that seems locked shut, a fear you can&apos;t find the key to, a doubt that has been bolted into place for years. God&apos;s path forward may not look like what you expect. It may sound strange. But if He has already given you the victory — and He has — your only job is to move in the direction He shows you.',
        },
        {
          kind: 'reflection',
          id: 'josh6-plan',
          prompt: 'What wall in your life looks unbreakable right now? What would it mean to obey God&apos;s plan for it, even if the plan doesn&apos;t make sense yet?',
        },
      ],
    },

    /* ─── Joshua 6:6–9 — Six Days of Silence ──────────────────────────── */
    {
      ref: 'Joshua 6:6–9',
      title: 'Six Days of Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('And Joshua the son of Nun called the priests, and said unto them, Take up the ark of the covenant, and let '),
                hg('seven priests', 'josh6-carry-ark'),
                t(' bear seven trumpets of rams&apos; horns before the ark of the Lord.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he said unto the people, Pass on, and '),
                t('compass the city'),
                t(', and let him that is armed pass on before the ark of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-carry-ark',
          html:
            'Joshua gives the command. The priests take up the ark — the physical sign of God&apos;s presence. The armed men surround it. The whole nation is about to learn what it means to march as one body under the direction of God&apos;s covenant.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 8,
              spans: [
                t('And it came to pass, when Joshua had spoken unto the people, that the seven priests bearing the seven trumpets of rams&apos; horns passed on before the Lord, and blew with the trumpets: and the ark of the covenant of the Lord '),
                hg('followed them', 'josh6-order'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And '),
                hp('the rereward came after the ark', 'josh6-rereward'),
                t(', the priests going on, and blowing with the trumpets.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-order',
          html:
            'The order is deliberate: priests with trumpets first, then the ark, then the fighting men, then the rearguard. God&apos;s presence is in the middle, protected and proclaimed. Everything else orbits it.',
        },
        {
          kind: 'commentary',
          id: 'josh6-rereward',
          html:
            'The rereward — the rearguard — closes the procession. The entire community is walled in by God&apos;s presence. No one is outside. This is not a military maneuver; it is a liturgy, a procession, a corporate act of worship.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 10,
              spans: [
                t('And Joshua had '),
                hy('commanded the people', 'josh6-silence'),
                t(', saying, Ye shall not shout, nor make any noise with your voice, neither shall any word proceed out of your mouth, until the day I bid you shout; then shall ye shout.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-silence',
          html:
            'Complete silence. For six days. Twelve tribes, warriors, families, children — all marching around a walled city in total silence except for the priests&apos; trumpets. This is the hardest kind of obedience. Not to do something, but to not do something. Not to shout in victory before the battle is won. Not to whisper plans or doubt or fear. Silence is the test of faith.',
        },
        {
          kind: 'carry',
          html:
            'God sometimes calls us to silence — not because He doesn&apos;t want to hear us, but because He is teaching us to listen. A season where you hold your tongue instead of defending yourself. A time when you wait instead of rushing to explain. A moment when you simply let God&apos;s presence speak louder than your own voice. The silence of Joshua&apos;s army was not weakness. It was the deepest kind of strength — knowing when the moment is not yet yours.',
        },
        {
          kind: 'reflection',
          id: 'josh6-silence-2',
          prompt: 'Where is God calling you to silence instead of speech? What are you learning in that quiet waiting?',
        },
      ],
    },

    /* ─── Joshua 6:11–14 — The Pattern Holds ──────────────────────────── */
    {
      ref: 'Joshua 6:11–14',
      title: 'The Pattern Holds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 11,
              spans: [
                t('So the ark of the Lord '),
                hg('compassed the city once', 'josh6-once'),
                t(': and they returned into the camp, and lodged in the camp.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And '),
                hg('Joshua rose early', 'josh6-early'),
                t(' in the morning, and the priests took up the ark of the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And seven priests bearing seven trumpets of rams&apos; horns before the ark of the Lord went on continually, and blew with the trumpets: and the armed men went before them; but the rereward came after the ark of the Lord, the priests going on, and blowing with the trumpets.'),
              ],
            },
            {
              number: 14,
              spans: [t('And the second day they compassed the city once, and returned into the camp: so they did six days.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-once',
          html:
            'Day one done. One circuit complete. No change. The walls are still standing. No visible progress. Faith that shouts before the result appears is just noise — faith that marches while the walls stand is the real thing.',
        },
        {
          kind: 'commentary',
          id: 'josh6-early',
          html:
            'Joshua rises early. Again. For six consecutive days he gets up in the dark, leads the same silent march, accomplishes nothing visible, and trusts God&apos;s promise anyway. This is repetition as a form of prayer — the same motion, the same faith, day after day.',
        },
        {
          kind: 'carry',
          html:
            'Six days of doing the same thing while the walls don&apos;t move. Six days of showing up, showing out, following the pattern, and seeing no change. This is what faith looks like in the actual world. Not one glorious moment of heroic action. Repetition. Consistency. Marching again when yesterday made no visible difference. The victory doesn&apos;t come until day seven — but day one and day two and day three are what build the people who will shout on day seven.',
        },
      ],
    },

    /* ─── Joshua 6:15–21 — The Seventh Day ────────────────────────────── */
    {
      ref: 'Joshua 6:15–21',
      title: 'The Seventh Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 15,
              spans: [
                t('And it came to pass on the seventh day, that they rose '),
                hg('early about the dawning of the day', 'josh6-dawn'),
                t(', and compassed the city after the same manner seven times: only on that day they compassed the city seven times.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-dawn',
          html:
            'The seventh day. The final repetition. But this time not once — seven times. The full measure of God&apos;s work. The completion. Everything else has been a lead-up to this moment.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And it came to pass at the seventh time, when the priests blew with the trumpets, Joshua said unto the people, '),
                hp('Shout', 'josh6-shout'),
                t('; for the Lord hath given you the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-shout',
          html:
            'Now. Only now. After silence has stretched for six days, Joshua gives the signal. &ldquo;Shout; for the Lord hath given you the city.&rdquo; He announces the victory that God has already given, not asking for anything uncertain, not hoping against hope — declaring what is already true. The timing matters. A shout yesterday would have been premature. A shout an hour from now would have been late. God&apos;s timing is exact.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('And the city shall be '),
                hy('accursed', 'hebrew-cherem'),
                t(', even it, and all that are therein, to the Lord: only '),
                hg('Rahab the harlot', 'josh6-rahab'),
                t(' shall live, she and all that are with her in the house, because she hid the messengers that we sent.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherem',
          title: 'Cherem — &ldquo;devoted to destruction&rdquo;',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · something set apart wholly for God, devoted to destruction',
          description:
            'The whole city is devoted to God through destruction — a judgment reserved for cities that have rejected God over centuries. Rahab and her household are the single exception — preserved by the scarlet cord covenant, kept safe while judgment falls.',
        },
        {
          kind: 'commentary',
          id: 'josh6-rahab',
          html:
            'Rahab. A woman. A prostitute. A foreigner living inside an enemy city. She hid the Israelite spies on her roof, let them down by a scarlet cord, and told them, &ldquo;I know that the Lord hath given you the land&rdquo; (Josh. 2:9). Her faith was sharper than a sword. She sees what Israel sees — that God is winning — and she chooses His side. Now, as the judgment falls around her, she and her entire household stand on the scarlet cord of her covenant and live.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 18,
              spans: [
                t('And ye, in any wise keep yourselves from the accursed thing, lest ye make yourselves accursed when ye take of the accursed thing, and make the camp of Israel a curse, and trouble it.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('But all the silver, and gold, and vessels of brass and iron, are consecrated unto the Lord: they shall come into the treasury of the house of the Lord.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('So the people shouted when the priests blew with the trumpets: and it came to pass, when the people heard the sound of the trumpet, and the people shouted with a great shout, that '),
                hp('the wall fell down flat', 'josh6-wall'),
                t(', so that the people went up into the city, every man straight before him, and they took the city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-wall',
          html:
            'The wall falls flat. Not gradually — flat. Not breached or weakened — flat, so every man walks straight forward into the city. There is no human explanation for this. The faith of a nation, the obedience of a leader, the timing of God — all converge in a single moment, and the impossible becomes visible.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 21,
              spans: [
                t('And they utterly destroyed all that was in the city, both man and woman, young and old, and ox, and sheep, and ass, with the edge of the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-destruction',
          html:
            'The judgment is total. Every living thing except Rahab and her household. This is difficult Scripture — the cherem, the devoted destruction of an entire city. The text itself anchors this in history: centuries of Canaanite iniquity. God&apos;s judgment is real, particular, and limited to this city in this moment. It is not a template for Christian conduct. The conquest of Canaan has its own story, its own time. What we see here is God&apos;s judgment falling and one woman of faith being saved inside it.',
        },
        {
          kind: 'carry',
          html:
            'The walls of your life sometimes fall in an instant. Years of struggle, and then suddenly the structure gives way. Years of waiting, and then the path opens. You didn&apos;t make it happen through your own strength. You simply obeyed, marched with the community of faith, and trusted that God&apos;s timing was exact. When the shout comes, it is God&apos;s victory announced through you.',
        },
      ],
    },

    /* ─── Joshua 6:22–25 — Rahab Spared ───────────────────────────────── */
    {
      ref: 'Joshua 6:22–25',
      title: 'Rahab Spared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 22,
              spans: [
                t('But Joshua had said unto the two men that had spied out the country, Go into the harlot&apos;s house, and bring out thence the woman, and all that she hath, as ye sware unto her.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the young men that were spies went in, and brought out Rahab, and her father, and her mother, and her brethren, and all that she had; and they brought out all her kindred, and left them without the camp of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-escape',
          html:
            'Joshua does not forget the covenant. The spies remember what Rahab did. She is brought out with her whole household — extended family, servants, all who are hers. The scarlet cord has marked her house, and now it marks her path to safety.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 24,
              spans: [
                t('And they burnt the city with fire, and all that was therein: only the silver, and the gold, and the vessels of brass and of iron, they put into the treasury of the house of the Lord.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And '),
                hg('Joshua saved alive Rahab', 'josh6-saved'),
                t(' the harlot, and her father&apos;s household, and all that she had; and she dwelleth in Israel even unto this day; because she hid the messengers, which Joshua sent to spy out Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-saved',
          html:
            'Rahab dwelt in Israel even unto this day — meaning, even as the book of Joshua was being written, Rahab&apos;s descendants were living as full members of the covenant community. She became one of them. Not a footnote to the conquest story. A mother of Israel. And when you read Matthew 1:5, there she is in the genealogy of Jesus: &ldquo;And Salmon begat Booz of Rachab.&rdquo; The prostitute from Jericho is an ancestor of the Messiah.',
        },
        {
          kind: 'christ',
          id: 'christ-rahab',
          title: 'Christ Connection — Mercy in the Lineage',
          html:
            'Hebrews 11:31 gives Rahab the same commendation as Abraham: &ldquo;By faith the harlot Rahab perished not with them that believed not, when she had received the spies with peace.&rdquo; James 2:25 says her works completed her faith: &ldquo;Likewise also was not Rahab the harlot justified by works, when she had received the messengers, and had sent them out another way?&rdquo; She is woven into the line of Christ not by genealogy alone, but by faith and action. The grace of God is not confined to the inside of Israel&apos;s tent.',
        },
        {
          kind: 'carry',
          html:
            'Rahab belonged to the wrong side. She lived in an enemy city. She made her living in a way that would have marked her as outside the community of faith. And yet, when the moment came, her faith was the sharpest weapon in the story. She saw what was true. She acted on it. She protected God&apos;s people even though she had no guarantee she would be spared. And she was. Not because she deserved mercy, but because she believed God deserved her allegiance. Wherever you stand right now — inside or outside what you thought was the community — your faith is what matters.',
        },
        {
          kind: 'reflection',
          id: 'josh6-rahab-2',
          prompt: 'What is the scarlet cord in your story — the moment when you recognized God&apos;s truth and chose His side? How has that covenant held?',
        },
      ],
    },

    /* ─── Joshua 6:26–27 — The Curse on Rebuilding ─────────────────────── */
    {
      ref: 'Joshua 6:26–27',
      title: 'The Curse on Rebuilding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 26,
              spans: [
                t('And Joshua adjured them at that time, saying, '),
                hy('Cursed be the man before the Lord', 'josh6-curse'),
                t(', that riseth up and buildeth this city Jericho: he shall lay the foundation thereof in his firstborn, and in his youngest son shall he set up the gates of it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-curse',
          html:
            'Joshua pronounces a curse on anyone who rebuilds Jericho. The curse is specific: the man who lays the foundation will lose his firstborn; the man who sets up the gates will lose his youngest son. This is not an idle word. This is a binding curse, sealed in God&apos;s name.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 27,
              spans: [
                t('So '),
                hg('the Lord was with Joshua', 'josh6-presence'),
                t('; and his fame was noised throughout all the country.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'josh6-presence',
          html:
            'God&apos;s presence with Joshua is visible in the land&apos;s fear. The news spreads. The conquest of Jericho becomes a warning to every city ahead: their walls will fall too if they oppose the Lord.',
        },

        {
          kind: 'commentary',
          id: 'josh6-fulfillment',
          html:
            'The curse is not forgotten. Four hundred and sixty-two years later, in 1 Kings 16:34, a man named Hiel of Bethel rebuilds Jericho. The text tells us: &ldquo;In his days did Hiel the Bethelite build Jericho: he laid the foundation thereof in Abiram his firstborn, and set up the gates thereof in his youngest son Segub.&rdquo; The curse spoken on the day the walls fell is fulfilled centuries later, word for word. God&apos;s word does not lapse. His promises and His judgments both outlast the generation that speaks them.',
        },

        {
          kind: 'carry',
          html:
            'God&apos;s word about you is also not a temporary thing. A promise He made to you five years ago, ten years ago, before you could see how it would unfold — it is still true. A judgment He set against a sin you thought you were done with — that boundary still stands. His words about your life — spoken in Scripture, spoken to your heart, spoken by His Spirit — are not like human words that fade. They are seeds planted deep. They wait. They grow. They come to fruition in seasons you can&apos;t control. Trust that what He has said is still at work in the ground.',
        },

        {
          kind: 'reflection',
          id: 'josh6-curse-2',
          prompt: 'What word of God — a promise or a boundary — are you still learning to trust even though you can&apos;t see its full effect yet?',
        },
      ],
    },
  ],
};
