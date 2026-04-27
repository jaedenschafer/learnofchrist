import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 1 — Moses&apos; Covenant Renewal
 *
 * Moses addresses Israel on the east bank of Jordan, forty years after Sinai,
 * about to enter the Promised Land. He recounts God&apos;s call, the appointment of judges,
 * the mission to Kadesh-Barnea, the spy report that bred faithlessness,
 * the people&apos;s slander against God&apos;s character ("He hated us"),
 * and their presumptuous attempt to fight without the Lord.
 *
 * The chapter is structured as covenant renewal—a retelling of the terms and
 * consequences for a new generation. Deuteronomy (Second Law) is not a new law,
 * but the old law restated for a people who must choose obedience anew.
 *
 * Voice: Pastoral, historical, anchored in the pattern of hearing, faith, obedience
 * versus hearing, fear, rebellion. Every failure teaches the danger of slander
 * against God&apos;s character.
 */
export const DEUTERONOMY_1: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 1,

  intros: [
    'Deuteronomy opens with Moses at the end. Forty years have passed since Sinai. A whole generation has been born in the wilderness—people who never knew Egypt, never crossed the Red Sea, never camped trembling at the base of a smoking mountain. Now, before Israel crosses the Jordan into the Promised Land, Moses stands to address them. Not with new laws, but with the old ones restated: <em>this is what it means to love the Lord your God.</em>',
    'The book begins as a rehearsal of failure—and how failure became a schoolroom. At Kadesh-Barnea, Israel had every reason to trust. The land was promised. The spies came back saying, "It is indeed a good land." But ten of the twelve reported that the people there were too great, and Israel believed the report more than they believed God. They slandered His character: "Because the Lord hated us, he hath brought us forth out of the land of Egypt." In that moment, the forty-year wilderness began not as punishment, but as consequence—the loss of what they refused to possess.',
    'For us, the chapter is a mirror. It shows the moment when hearing God&apos;s word splits into two paths: <em>trust and enter, or fear and turn back.</em> And it shows what that second choice actually costs—not just an extra journey, but the loss of the rest that was waiting just beyond the river.',
  ],

  opener: {
    matchTitle: /wilderness|moses|moab/i,
    caption: 'Deuteronomy 1 · The Threshold',
  },

  bottomShare: {
    label: 'Share Deuteronomy 1',
    quote:
      'Moses recounts how God called Israel to possess the Promised Land, but when the people believed a faithless report instead of trusting God, they lost that generation in the wilderness. The pattern is clear: hearing God&apos;s word calls for a choice—and refusing His promise costs more than accepting it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 1 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 1:1–8 — The Call to Possess ────────────────────────── */
    {
      ref: 'Deuteronomy 1:1–8',
      title: 'The Setting and the Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('These are the words which Moses spake unto all Israel on '),
                hy('this side Jordan', 'deut-moab'),
                t(', in the wilderness, in the plain over against the Red sea, between Paran, and Tophel, and Laban, and Hazeroth, and Dizahab.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('(There are eleven days\' journey from Horeb by the way of mount Seir unto Kadesh-barnea.)'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And it came to pass in '),
                hy('the fortieth year', 'deut-forty'),
                t(', in the eleventh month, on the first day of the month, that Moses spake unto the children of Israel, according unto all that the Lord had given him in commandment unto them;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-setting',
          html:
            'Deuteronomy is set on the eve of entry. The wilderness journey is not over; it is ending. The generation born in the wilderness is about to step into the land their parents refused. This is not defeat—it is the moment of threshold, the second chance, the new generation standing where the old one turned back.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('After he had slain Sihon the king of the Amorites, which dwelt in Heshbon, and Og the king of Bashan, which dwelt at Astaroth in Edrei:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('On this side Jordan, in the land of Moab, began Moses to declare this law, saying,'),
              ],
            },
            {
              number: 6,
              spans: [
                t('The '),
                hp('Lord our God', 'christ-lord-covenant'),
                t(' spake unto us in '),
                hy('Horeb', 'hebrew-horeb'),
                t(', saying, Ye have dwelt long enough in this mount:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Turn you, and take your journey, and go to the '),
                hp('mount of the Amorites', 'c-promise-land'),
                t(', and unto all the places nigh thereunto, in the plain, in the hills, and in the vale, and in the south, and by the sea side, to the land of the Canaanites, and unto Lebanon, unto the great river, the river Euphrates.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Behold, I have '),
                hy('set before you', 'c-set-before'),
                t(' the land: go in and '),
                hg('possess it', 'hebrew-yarash'),
                t(' which the Lord sware unto your fathers, Abraham, Isaac, and Jacob, to give unto them and to their seed after them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-moab',
          html:
            'The phrase <em>this side Jordan</em>—the east bank—is the threshold moment. They are not in the wilderness anymore; they are not in the land either. They are standing at the boundary, the place where decision becomes unavoidable. Moses retells the story of Sinai here on the banks of the Jordan, and the stakes are immediate: the land is real, the command is clear, the choice is theirs.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-horeb',
          title: 'Horeb — &ldquo;The Dry Mountain&rdquo;',
          script: 'חוֹרֵב',
          translit: '<strong>horeb</strong> · another name for Sinai; a place of aridness and covenant',
          description:
            'Horeb is where God gave the law, where the covenant was sealed, where Israel stood trembling at the mountain&apos;s base. Thirty-nine years later, Moses retells that moment, and its gravity still applies. The word is dry—not by accident, but by design. Covenant is not soft.',
        },
        {
          kind: 'commentary',
          id: 'c-promise-land',
          html:
            'The promised land is real, described in concrete geography: plains and hills, the sea, the great river. God does not offer a vague dream. He offers a place. A place with rivers and soil and vineyards and cities. The promise is not spiritual in the sense of being immaterial; it is spiritual in the sense that it is given by God and received by faith.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yarash',
          title: 'Yarash — &ldquo;Possess, Inherit&rdquo;',
          script: 'יָרַשׁ',
          translit: '<strong>yarash</strong> · to take possession, to inherit, to drive out inhabitants',
          description:
            'The verb is not gentle. To possess the land means to displace what is already there. But the land is already promised, already sworn to their fathers. The question is not whether they will own it, but whether they will trust God enough to go in.',
        },
        {
          kind: 'christ',
          id: 'christ-lord-covenant',
          title: 'Christ Connection — The Voice at the Mountain',
          html:
            'Moses recalls "the Lord our God spake unto us in Horeb." In the New Testament, this voice is heard again: at Jesus&apos; baptism, "This is my beloved Son" (Matt. 3:17). The voice that spoke at Sinai speaks again at Jordan—the same covenant, the same God, the same call to possess what He has promised. Jesus invites His disciples with the same urgency: "Follow me" (Matt. 4:19). The urgency is because the land—eternal life, the Father&apos;s kingdom—is real and waiting, not hypothetical.',
        },
        {
          kind: 'carry',
          html:
            'God does not say to Israel, "Take your time deciding. Sit here as long as you like." He says, "Ye have dwelt long enough." There is a moment when lingering becomes disobedience. There is a land that has been prepared, a promise that has been made, a destination that has been named. If you are standing at a threshold right now—a call you have heard, a promise you have been given, a river you know you must cross—this is not the moment to camp. This is the moment to turn and take your journey.',
        },
        {
          kind: 'reflection',
          id: 'call-possess',
          prompt:
            'What has God set before you? What land of promise are you being asked to possess? What would it look like to stop dwelling in the old place and actually go in?',
        },
      ],
    },

    /* ─── Deuteronomy 1:9–18 — The Appointment of Judges ────────────────── */
    {
      ref: 'Deuteronomy 1:9–18',
      title: 'Wise Leadership and Just Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('And I spake unto you at that time, saying, I am not able to bear you myself alone:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('The Lord your God hath multiplied you, and, behold, ye are this day as the stars of heaven for multitude.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('(The Lord God of your fathers make you '),
                hp('a thousand times so many more as ye are', 'c-blessing-multiply'),
                t(', and bless you, as he hath promised you!)'),
              ],
            },
            {
              number: 12,
              spans: [
                t('How can I myself alone bear your cumbrance, and your burden, and your strife?'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Take you wise men, and understanding, and '),
                hy('known among your tribes', 'c-judges-known'),
                t(', and I will make them rulers over you.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And ye answered me, and said, The thing which thou hast proposed unto us is good.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('So I took the chief of your tribes, wise men, and '),
                hy('known', 'c-judges-known'),
                t(', and made them '),
                hy('heads over you', 'c-leaders-appointed'),
                t(', captains over thousands, and captains over hundreds, and captains over fifties, and captains over tens, and officers among your tribes.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And I charged your judges at that time, saying, '),
                hg('Hear the causes between your brethren', 'c-just-judgment'),
                t(', and judge righteously between every man and his brother, and the stranger that is with him.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Ye shall not respect persons in judgment; but ye shall '),
                hp('hear the small as well as the great', 'c-equal-justice'),
                t('; ye shall not be afraid of the face of man; for the judgment is God&apos;s: and the cause that is too hard for you, bring it unto me, and I will hear it.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And I commanded you at that time all the things which ye ought to do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judges-known',
          html:
            'Moses appoints judges from among the people—men who are "wise" and "known among your tribes." This is not delegation to strangers; it is the multiplication of leadership through the people themselves. The people choose the judges. Moses confirms them. The system distributes authority so that every dispute has a path to justice. A leader who knows he cannot bear the burden alone is actually showing strength. He knows that his greatest responsibility is to equip others to lead.',
        },
        {
          kind: 'commentary',
          id: 'c-just-judgment',
          html:
            'The judges are commanded to "hear the causes between your brethren." Not to decide from hearsay. Not to listen only to the wealthy or powerful. But to actually hear. The root of just judgment is listening—full, patient listening to the grievance, the context, the person behind the words. A judge who does not listen cannot judge justly.',
        },
        {
          kind: 'commentary',
          id: 'c-leaders-appointed',
          html:
            'The judges are called "heads" and "captains"—military language. Justice is not separate from the life of the community; it is essential to it. A community without just judgment will not stand. A people without leaders who fear God more than the face of man will collapse into favoritism and corruption.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-fear-not',
          title: 'Yare&apos; — &ldquo;Fear&rdquo;',
          script: 'יָרֵא',
          translit: '<strong>yare&apos;</strong> · to fear, to stand in awe, to be afraid',
          description:
            'Moses commands the judges: "Ye shall not be afraid of the face of man." The only fear that should govern a judge is fear of God. When a judge fears a human face—a rich man, a powerful man, a connected man—he loses the capacity to judge justly. The two fears compete. You cannot fear God and fear man equally.',
        },
        {
          kind: 'commentary',
          id: 'c-equal-justice',
          html:
            'The command to "hear the small as well as the great" is revolutionary. In ancient courts, a poor person or a slave had no real standing. Their case would be heard but dismissed. Moses establishes that the small person&apos;s grievance has equal standing. Why? Because "the judgment is God&apos;s." Judges are not sovereign; they are administrators of God&apos;s justice, which is indifferent to wealth or status.',
        },
        {
          kind: 'christ',
          id: 'christ-equal-justice',
          title: 'Christ Connection — Judge of All',
          html:
            'Jesus teaches: "Blessed are the merciful: for they shall obtain mercy" (Matt. 5:7), and "Judge not, that ye be not judged" (Matt. 7:1). Yet He also announces, "The Father… hath given him authority to execute judgment also, because he is the Son of man" (John 5:26–27). The paradox is resolved in His own judgment. When the woman caught in adultery is brought before Him, He neither condemns her nor dismisses the seriousness of her sin. Instead, He hears her fully, sees her entirely, and offers her the possibility of transformation. His judgment is marked by the same qualities Moses prescribes: He hears the small, He does not respect the face of man, and He judges with eyes open to God&apos;s standard, not the world&apos;s.',
        },
        {
          kind: 'carry',
          html:
            'If you are in any position of authority—a parent, a manager, a mentor, a friend who listens to others&apos; conflicts—Moses&apos; charge to the judges is for you. The small grievance matters as much as the large one. The person with no power has as much right to be heard as the person with every advantage. And the fear of God in your judgment should be greater than the fear of any human face. Not fear that silences you, but fear that makes you just.',
        },
        {
          kind: 'reflection',
          id: 'judges-appointed',
          prompt:
            'Where are you called to listen justly? Is there a grievance, a person, a voice you have been afraid to truly hear?',
        },
      ],
    },

    /* ─── Deuteronomy 1:19–25 — The Journey to Kadesh-Barnea ────────────── */
    {
      ref: 'Deuteronomy 1:19–25',
      title: 'The Journey to the Promised Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 19,
              spans: [
                t('And when we '),
                hg('departed from Horeb', 'c-horeb-depart'),
                t(', we went through all that great and terrible wilderness, which ye saw by the way of the mountain of the Amorites, as the Lord our God commanded us; and we came to Kadesh-barnea.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And I said unto you, Ye are come unto the mount of the Amorites, which the Lord our God doth give unto us.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Behold, the Lord thy God hath set the land before thee: '),
                hp('go up and possess it', 'c-possess-again'),
                t(': be not afraid, nor be discouraged.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And ye came near unto me every one of you, and said, We will send men before us, and they shall search us out the land, and bring us word again by what way we should go up, and into what cities we shall come.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the saying pleased me well: and I took twelve men of you, one of a tribe:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they turned and went up into the mountain, and came unto the valley of Eshcol, and searched it out.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they took of the fruit of the land in their hands, and brought it down unto us, and brought us word again, and said, It is a '),
                hy('good land', 'c-good-land-report'),
                t(' which the Lord our God doth give us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-horeb-depart',
          html:
            'Moses recalls the journey from Horeb to Kadesh-Barnea—the very wilderness that feels so long and so hard while you are in it. But from this side, from the threshold of entry, it is something else: the "great and terrible wilderness" that God commanded them to walk through. The wilderness was not a mistake. It was part of the journey. God was commanding them to walk through it.',
        },
        {
          kind: 'commentary',
          id: 'c-possess-again',
          html:
            'Moses urges them: "Go up and possess it. Be not afraid, nor be discouraged." These words are urgent and personal. The land is not theoretical. They can see it. They are standing at its border. Possession is not conditional on perfect confidence. It is conditional on willingness to go up, to take the risk, to trust that God will be with them.',
        },
        {
          kind: 'commentary',
          id: 'c-good-land-report',
          html:
            'The spies report truthfully: the land is good. They bring back fruit as evidence—pomegranates and grapes so large they had to be carried by two men. This is not fantasy. The land is real. The promise is real. Every sign points toward entry. And then, in the next verses, the same people who saw the fruit will refuse to enter.',
        },
        {
          kind: 'reflection',
          id: 'kadesh-journey',
          prompt:
            'At Kadesh-Barnea, the evidence was clear: the land was good. What evidence has God given you that what He is calling you to is real and worth the risk?',
        },
      ],
    },

    /* ─── Deuteronomy 1:26–33 — The Faithless Report and Slander ────────── */
    {
      ref: 'Deuteronomy 1:26–33',
      title: 'The Slander Against God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 26,
              spans: [
                t('Notwithstanding ye would not go up, but '),
                hg('rebelled against the commandment', 'c-rebellion'),
                t(' of the Lord your God:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And ye murmured in your tents, and said, '),
                hp('Because the Lord hated us', 'hebrew-sane'),
                t(', he hath brought us forth out of the land of Egypt, to deliver us into the hand of the Amorites, to destroy us.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Whither shall we go up? our brethren have discouraged our heart, saying, The people is greater and taller than we; the cities are great and walled up to heaven; and moreover we have seen the sons of the Anakims there.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Then I said unto you, Dread ye not, neither be afraid of them.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('The Lord your God which goeth before you, he shall fight for you, according to all that he did for you in Egypt before your eyes;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And in the wilderness where thou hast seen how that the Lord thy God bare thee, as a man doth bear his son, in all the way that ye went, until ye came into this place.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Yet in this thing ye did not '),
                hg('believe the Lord your God', 'c-unbelief'),
                t(','),
              ],
            },
            {
              number: 33,
              spans: [
                t('Who went in the way before you, to search you out a place to pitch your tents, and to shew you by fire by night, and in a cloud by day, '),
                hy('the way', 'c-the-way'),
                t(' ye should go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rebellion',
          html:
            'The sin is described simply: they "rebelled against the commandment of the Lord." The command was clear: go up and possess it. Their response was not a request for more information or a plea for patience. It was refusal. And that refusal was the hinge on which the next forty years turned.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sane',
          title: 'Sane — &ldquo;Hated&rdquo;',
          script: 'שָׂנֵא',
          translit: '<strong>sane</strong> · to hate, to reject, to refuse',
          description:
            'The people slander God by claiming He hated them. They misread His character entirely. The God who delivered them from Egypt, who led them through the wilderness, who fed them with manna and brought water from rock—this God had not changed. But their fear made them unable to see His heart. Slander is not always deliberate; it is often the result of eyes too frightened to see truth.',
        },
        {
          kind: 'commentary',
          id: 'c-unbelief',
          html:
            'Moses names the core sin: they "did not believe the Lord your God." The evidence was overwhelming—God had fought for them, provided for them, guided them. Yet they did not believe. This is the tragedy at the heart of the chapter. Belief is not the natural result of evidence. It is a choice, a trust, a willingness to read the evidence through the lens of God&apos;s character rather than through fear.',
        },
        {
          kind: 'christ',
          id: 'hebrew-sane',
          title: 'Christ Connection — The Lie at the Core',
          html:
            'The deepest sin in Kadesh-Barnea is not the refusal to enter the land. It is the slander: "the Lord hated us." This lie echoes through Scripture until Jesus steps into the Jordan and hears, "This is my beloved Son" (Matt. 3:17). God does not hate us. He loves us. And that love is so costly that He sends His own Son into the very wilderness we cannot cross alone. At the crucifixion, the lie comes to its worst: "My God, my God, why hast thou forsaken me?" (Matt. 27:46). But resurrection answers it: the Father never hated. He was always moving toward us, always making a way, always willing to bear us as a man bears his son.',
        },
        {
          kind: 'carry',
          html:
            'Fear lies. It tells you that God hates you when He is actually protecting you. It tells you that the promise is impossible when God is calling you to possess it. It tells you to believe the report of a fearful person over the report of God&apos;s faithful character. The moment you are most tempted to slander God—to say He hates you, that He is holding out on you, that He is not trustworthy—is the moment you most need to remember: He brought you out. He is going before you. He is showing you the way. The fear is real. The enemies are real. But they are not bigger than God.',
        },
        {
          kind: 'reflection',
          id: 'slander-fear',
          prompt:
            'What fear in your life has tempted you to slander God—to doubt His love, to question His character, to believe the "report" over His promise? What would change if you really believed He goes before you?',
        },
      ],
    },

    /* ─── Deuteronomy 1:34–40 — The Judgment and the Promise ──────────── */
    {
      ref: 'Deuteronomy 1:34–40',
      title: 'Judgment and a Hidden Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 34,
              spans: [
                t('And the Lord heard the voice of your words, and was '),
                hg('wroth', 'c-gods-anger'),
                t(', and sware, saying,'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Surely there shall not one of these men of this evil generation see that good land, which I sware to give unto your fathers,'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Save Caleb the son of Jephunneh; he shall see it, and to him will I give the land that he hath trodden upon, and to his children, because he wholly followed the Lord.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('Also the Lord was angry with me for your sakes, saying, Thou also shalt not go in thither.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('But Joshua the son of Nun, which standeth before thee, he shall go in thither: encourage him: for he shall cause Israel to inherit it.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Moreover your little ones, which ye said should be a prey, and your children which in that day had no knowledge between good and evil, they shall go in thither, and unto them will I give it, and they shall possess it.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('But as for you, turn you, and take your journey into the wilderness by the way of the Red sea.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gods-anger',
          html:
            'God&apos;s anger is kindled. This is not petulance; this is the wrath of betrayed love. God had shown Himself faithful, and His faithfulness was answered with slander. The consequence is clear: the generation that refused to enter will not enter. Their faithlessness has a cost. Yet—and this is the mercy hidden in the judgment—the journey does not end. The promise does not die. Joshua will lead. The little ones will enter. The land will be possessed. God&apos;s word, rejected by the faithless, will be fulfilled through the faithful.',
        },
        {
          kind: 'commentary',
          id: 'c-caleb-whole',
          html:
            'Caleb and Joshua are exceptions. The text says of Caleb: "he wholly followed the Lord." The word "wholly" is the verb "tamam"—to be perfect, complete, entire. Caleb did not follow the Lord with a portion of his heart. He followed entirely. So he alone, besides Joshua, will see the land he was promised. The exception proves the rule: there is a way through faithlessness, and it is the way of wholehearted following.',
        },
        {
          kind: 'commentary',
          id: 'c-little-ones',
          html:
            'The little ones—the ones the unfaithful generation said would become a "prey"—are the very ones who will inherit the land. Their parents worried about them being destroyed, and lost the land through that fear. But the little ones, who had "no knowledge between good and evil," will grow up in the wilderness and enter the land as adults. The judgment on the parents does not mean destruction of their children. It means a second generation, raised in trust, will receive what the first generation refused.',
        },
        {
          kind: 'christ',
          id: 'c-gods-anger',
          title: 'Christ Connection — Judgment Borne',
          html:
            'Moses tells the people: "The Lord was angry with me for your sakes." Moses, the faithful leader, bears the consequence of the people&apos;s unfaithfulness. He does not enter the land either. This prefigures a deeper truth: in the New Testament, Christ stands in a similar place. "For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him" (2 Cor. 5:21). Jesus bears the judgment that belongs to faithlessness, so that those who follow Him can enter the rest that has been prepared. His anger toward sin is real. His suffering is real. But His purpose is not destruction; it is restoration.',
        },
        {
          kind: 'carry',
          html:
            'If you have made a faithless choice and lost something that was promised, do not despair as though the story is over. The land will be possessed. The promise will be fulfilled. You may not see it yourself, but your faithfulness now shapes the next generation. Your repentance now does not erase the consequence, but it seeds a future. The little ones—your children, your legacy, the work you are planting—will inherit more than you lost, because they will grow up in a community that turned toward God instead of away.',
        },
        {
          kind: 'reflection',
          id: 'judgment-mercy',
          prompt:
            'Is there a promise you have lost through unbelief or disobedience? Can you see a way God might still fulfill His purpose—perhaps not through you, but through those who come after?',
        },
      ],
    },

    /* ─── Deuteronomy 1:41–46 — Presumption and Defeat ─────────────────── */
    {
      ref: 'Deuteronomy 1:41–46',
      title: 'Presumption: Too Late',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 41,
              spans: [
                t('Then ye answered and said unto me, We have sinned against the Lord, we will go up and fight, according to all that the Lord our God commanded us. And when ye had girded on every man his weapons of war, ye were ready to go up into the mountain.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And the Lord said unto me, Say unto them, Go not up, neither fight; for I am not among you; lest ye be smitten before your enemies.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('So I spake unto you; and ye would not hear: but '),
                hy('rebelled against the commandment', 'c-rebel-again'),
                t(' of the Lord, and '),
                hp('went presumptuously', 'hebrew-azaz'),
                t(' up into the hill.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And the Amorites, which dwelt in that mountain, came out against you, and '),
                hg('chased you', 'c-chasers'),
                t(', as bees do, and destroyed you in Seir, even unto Hormah.'),
              ],
            },
            {
              number: 45,
              spans: [
                t('And ye returned and wept before the Lord; but the Lord would not hearken to your voice, nor give ear unto you.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('So ye abode in Kadesh many days, according to the days that ye abode there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rebel-again',
          html:
            'The people "answer" and say they have sinned. They see their mistake. They are ready to fight, to go up into the land. But repentance without obedience is not repentance. God says explicitly: "Go not up." And they go up anyway. They have now rejected God twice—first by refusing to go when He said go, and now by going when He said do not go. The second refusal is more dangerous than the first, because it wears the clothes of repentance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-azaz',
          title: 'Azaz — &ldquo;Presume&rdquo;',
          script: 'עָזַז',
          translit: '<strong>azaz</strong> · to act presumptuously, to act with arrogant self-confidence',
          description:
            'Presumption is confidence in yourself rather than in God. The people had been told not to go. They went anyway. They were told the Lord was not among them. They fought as though He was. Presumption is the mirror image of despair. Instead of believing God when He says "possess," you believed your fear. Now you believe yourself when He says "do not go." Neither one is faith.',
        },
        {
          kind: 'commentary',
          id: 'c-chasers',
          html:
            'The Amorites chase them "as bees do"—a picture of overwhelming, stinging pursuit. They are routed. The battle is a catastrophe. They are "destroyed… even unto Hormah." Hormah means "utter destruction." The presumptuous attempt to fix their own failure leads not to redemption, but to disaster. They had already lost the land; now they lose credibility, men, and time.',
        },
        {
          kind: 'commentary',
          id: 'c-weeping-unheard',
          html:
            'They "returned and wept before the Lord." But now the Lord "would not hearken." This is the hardest line in the chapter. Their weeping is real. Their distress is genuine. But it is too late. The time for obedience has passed. They have crossed the line into presumption. Tears cannot undo that. Only time, faithlessness becoming humility, fear becoming trust, can begin the true return.',
        },
        {
          kind: 'christ',
          id: 'hebrew-azaz',
          title: 'Christ Connection — Presumption and Faith',
          html:
            'When Jesus is tempted in the wilderness, one temptation is particularly telling: "Cast thyself down" from the temple, quoting Scripture—"He shall give his angels charge concerning thee" (Matt. 4:6). Jesus refuses. He says, "Thou shalt not tempt the Lord thy God" (Matt. 4:7). Presumption uses Scripture, claims faith, acts with confidence—but it is not faith in God; it is presumption about God. True faith listens and obeys. True faith says yes when He says yes, and no when He says no. Jesus never presumed. In Gethsemane, facing the cup of suffering, He prayed, "Nevertheless not as I will, but as thou wilt" (Matt. 26:39). That is the opposite of presumption. That is perfect trust.',
        },
        {
          kind: 'carry',
          html:
            'The tragedy of presumption is that it often feels like faith. You are eager. You are willing. You want to obey. You are ready to fight. But you are fighting the wrong battle, at the wrong time, without God&apos;s presence. Some of the most disastrous decisions in life are made by faithful-sounding people doing faithless things. Before you act, ask: Am I hearing God clearly? Am I being obedient to what He is actually saying, or obedient to what I think He should be saying? Am I willing to say no when He says no?',
        },
        {
          kind: 'reflection',
          id: 'presumption',
          prompt:
            'Is there a place where you are being tempted to presume—to act as though you know better, to go when He says wait, or to wait when He calls you to move? What would it look like to truly hear His voice?',
        },
        { kind: 'divider' },
        {
          kind: 'commentary',
          id: 'c-final-theology',
          html:
            'Deuteronomy 1 closes with the people dwelling "many days" in Kadesh. The chapter ends not with resolution, but with waiting. The land is promised but not yet given. The generation is faithless but not yet gone. The story is not finished. It will take thirty-nine more years for the faithless to die in the wilderness and for a new generation to grow up ready to trust. That waiting—that long wilderness of consequence—is the schoolroom where Israel learns what Hebrews will later spell out: "Today if ye will hear his voice, harden not your hearts" (Heb. 3:7–8). The offer comes again and again. The choice, always, is yours.',
        },
      ],
    },
  ],
};
