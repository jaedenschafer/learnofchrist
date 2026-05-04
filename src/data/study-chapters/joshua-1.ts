import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 1 — the hinge between wilderness and inheritance.
 *
 * Moses[res:sefaria-moses-death] is dead. The Lord speaks to Joshua, his minister, commanding him to
 * arise and lead the people over Jordan. The borders are given, the promise is
 * renewed ("I will not fail thee, nor forsake thee"), and the law is placed at
 * the center of leadership—meditated day and night, lived out in every step.
 * Joshua orders the people to prepare; the eastern tribes pledge their loyalty
 * and courage. The inheritance waits. God goes with them.
 */
export const JOSHUA_1: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 16 },
  topicTags: ['leadership', 'sovereignty', 'protection', 'faithfulness'],
  opener: {
    topical: true,
    caption: 'Joshua 1',
  },
  intros: [
    'Deuteronomy closed with Moses dead on a mountain, looking at a land he would never enter. Joshua 1 opens with a voice breaking the silence: the Lord is speaking to Joshua, son of Nun, Moses&apos; minister. "Moses my servant is dead; now therefore arise."',
    'The shift is immediate and profound. For forty years Israel wandered in the wilderness. Moses gave them the law. Now Joshua must give them the land—not by his own strength, but by the Lord&apos;s presence and by Joshua&apos;s absolute faithfulness to the law Moses commanded. The chapter is structured as a divine commissioning: God&apos;s word to the leader (three times "Be strong and of a good courage"), the order to the people (prepare in three days), and the pledge of the eastern tribes (we will follow as we followed Moses).',
    'Three times the charge is repeated. Three times the promise: "I will not fail thee, nor forsake thee." Three times the call to courage. And at the heart of all leadership: the book of the law, not to be forgotten, meditated day and night. Joshua is not called to invent a new way—he is called to hold fast the way of Moses, and to trust the God of Moses to see His people across.',
  ],

  bottomShare: {
    label: 'Share Joshua 1',
    quote:
      'The Lord said unto Joshua: Moses my servant is dead. But I will not fail thee, nor forsake thee. Be strong and of a good courage. Meditate in the book of the law day and night, that thou mayest observe to do all that is written therein.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 1 · Study Guide',
  },

  sections: [
    /* ─── Joshua 1:1–2 — The Death and the Call ─────────────────────────── */
    {
      ref: 'Joshua 1:1–2',
      title: 'After Moses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now '),
                hy('after the death of Moses', 'c-moses-death'),
                t(' the servant of the Lord it came to pass, that the Lord spake unto '),
                hy('Joshua', 'hebrew-yehoshua'),
                t(' the son of Nun, '),
                hy('Moses&apos; minister', 'c-minister'),
                t(', saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Moses my servant is dead; '),
                hg('now therefore arise, go over this Jordan', 'c-arise-jordan'),
                t(', thou, and all this people, unto the land which I do give to them, even to the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-death',
          html:
            'The word comes not before Moses dies, but after. Silence must have hung over the camp. Forty years of wilderness, one leader, one voice. And now: silence. No word of rebuke, no funeral oration. Just the statement of fact, which is also a statement of closure. Moses&apos; work is done. A new work is about to begin.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yehoshua',
          title: 'Yehoshua — &ldquo;Joshua&rdquo;',
          script: 'יְהוֹשׁוּעַ',
          translit: '<strong>Yehoshua</strong> · God saves, God is salvation',
          description:
            'The name appears for the first time in full script at the pivot point of Israel&apos;s history. Joshua, or Yeshua, means "The Lord saves." The man whose name promises salvation is called to lead the people into salvation—the land, the rest, the inheritance.',
        },
        {
          kind: 'commentary',
          id: 'c-minister',
          html:
            'Joshua is introduced as "Moses&apos; minister"—his servant, his helper, the one who attended to him[res:bibleodyssey-joshua-succession]. He is not chosen because he was in command; he is chosen because he was faithful in the smaller role. Leadership flows from faithfulness at every level.',
        },
        {
          kind: 'commentary',
          id: 'c-arise-jordan',
          html:
            'The command is simple and direct: arise, go over Jordan. Not "wait," not "prepare your whole life." The time is now. The people are waiting. The inheritance is waiting. The Lord does not ask Joshua to be ready for the future; He asks him to step into what the future has become in this moment.',
        },
        {
          kind: 'christ',
          id: 'christ-joshua-type',
          title: 'Christ Connection — Joshua the Type of Jesus',
          html:
            'Joshua&apos;s name in Hebrew (Yeshua) is identical to Jesus in Greek (Iésous)[res:intertextual-joshua-yeshua]. Hebrews 4:8 makes the connection explicit: "For if Jesus had given them rest, then would he not afterward have spoken of another day." Joshua led the physical people into the physical land. Jesus leads the spiritual people into the spiritual rest—the inheritance that lasts forever. The call to Joshua to rise and lead the people across is a foreshadow of the Savior who would lead all His people home.',
        },
        {
          kind: 'carry',
          html:
            'You may be standing at a point where a chapter of your life is closing and a new responsibility is opening. The Lord is not asking you to wait until everything is perfect or until you feel entirely ready. He is asking you to arise, to step into the inheritance He has set before you, and to trust that He goes with you into what is next. Faithfulness in a smaller role has prepared you for this.',
        },
        {
          kind: 'reflection',
          id: 'josh1-arise',
          prompt:
            'Where is the Lord asking you to arise and move forward right now? What has He prepared for you through faithful work in seasons past?',
        },
      ],
    },

    /* ─── Joshua 1:3–6 — The Borders Given; I Will Not Fail Thee ──────────── */
    {
      ref: 'Joshua 1:3–6',
      title: '"I Will Not Fail Thee, Nor Forsake Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('Every place that the sole of your foot shall tread upon, that have I given unto you, as I said unto Moses.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('From the wilderness and this Lebanon even unto the great river, the river Euphrates, all the land of the Hittites, and unto the great sea toward the going down of the sun, shall be your coast.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('There shall not any man be able to stand before thee all the days of thy life: '),
                hp('as I was with Moses, so I will be with thee', 'christ-unfailing-presence'),
                t(': '),
                hg('I will not fail thee, nor forsake thee', 'c-unfailing-promise'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Be '),
                hy('strong and of a good courage', 'hebrew-chazaq'),
                t(': for unto this people shalt thou divide for an inheritance the land, which I sware unto their fathers to give them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unfailing-promise',
          html:
            'This is the bedrock promise of the entire book. Not "I might stand with you if circumstances align." Not "I will help you if you are strong enough." But an absolute, unconditional statement: I will not fail you. I will not abandon you. The Hebrew word for "forsake" (&#601;zab) means to leave behind, to withdraw from. God enters a covenant with Joshua: His presence will not withdraw from this work.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chazaq',
          title: 'Chazaq — &ldquo;strong&rdquo;',
          script: 'חָזַק',
          translit: '<strong>chazaq</strong> · to strengthen, to fortify, to harden, to be courageous',
          description:
            'The word is repeated three times in Joshua 1, each in a different context. To be strong is not to be fearless—it is to be fortified by a presence greater than your fear. Courage is the choice to trust that presence.',
        },
        {
          kind: 'commentary',
          id: 'c-coasts',
          html:
            'The borders are vast: from the wilderness to Lebanon, from the Mediterranean to the Euphrates, all the land of the Hittites. It is a promise with geographic specificity. God is not vague about what He is giving. The boundaries are drawn. The inheritance is named.',
        },
        {
          kind: 'christ',
          id: 'christ-unfailing-presence',
          title: 'Christ Connection — "I Am With You Alway"',
          html:
            'Hebrews 13:5 quotes this exact promise from Joshua 1:5 and applies it to every believer: "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee." At the end of Matthew, the risen Jesus echoes the promise: "Lo, I am with you alway, even unto the end of the world" (Matt. 28:20). The promise God gave Joshua was not just for a moment in history; it is the promise He gives to all who follow Him.',
        },
        {
          kind: 'carry',
          html:
            'The work ahead of you is large. The obstacles will be real. But the promise is larger and more real: the God who does not fail is with you. Not for a moment when you are strong, but all the days of your life. When you feel the weight of responsibility, when the task looks impossible, when you are tempted to lose heart—remember the word to Joshua: "As I was with Moses, so I will be with thee."',
        },
        {
          kind: 'reflection',
          id: 'josh1-unfailing',
          prompt:
            'What does it mean to you personally that God has promised not to fail you or forsake you? In what part of your life do you most need to hear and believe this promise today?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Joshua 1:7–9 — Meditate in the Law Day and Night ──────────────── */
    {
      ref: 'Joshua 1:7–9',
      title: 'The Book of the Law in Your Mouth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('Only '),
                hg('be thou strong and very courageous', 'c-second-charge'),
                t(', that thou mayest observe to do '),
                hg('according to all the law', 'c-law-center'),
                t(', which Moses my servant commanded thee: '),
                hy('turn not from it to the right hand or to the left', 'hebrew-hagah'),
                t(', that thou mayest prosper whithersoever thou goest.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('This '),
                hg('book of the law shall not depart out of thy mouth', 'c-law-mouth'),
                t('; but thou shalt '),
                hy('meditate therein day and night', 'c-meditate'),
                t(', that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Have not I commanded thee? '),
                t('Be strong and of a good courage'),
                t('; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-second-charge',
          html:
            'This is the second of three times the charge "Be strong and of a good courage" appears in Joshua 1. Each is tied to something different. The first: you are called. The second: you must obey the law. The third: you are not alone. Courage is not a solo virtue; it is always rooted in something outside yourself.',
        },
        {
          kind: 'commentary',
          id: 'c-law-center',
          html:
            'Joshua is not called to be a visionary or an innovator. He is called to be faithful to the law of Moses. Leadership in Scripture is not about original ideas or personal charisma. It is about alignment with the revealed will of God. This is the secret to prospering: not setting your own course, but following the course that has already been set.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-hagah',
          title: 'Hagah — &ldquo;meditate&rdquo;',
          script: 'הָגָה',
          translit: '<strong>hagah</strong> · to murmur, to mutter, to contemplate, to speak softly',
          description:
            'Meditation in Hebrew is not silent emptiness. It is the act of speaking the words aloud in a low voice, turning them over in your mind, letting them work themselves into your very being. The law is not abstract doctrine—it is meant to be spoken, remembered, lived.',
        },
        {
          kind: 'commentary',
          id: 'c-law-mouth',
          html:
            'The book shall not depart out of thy mouth. The law is to be spoken, prayed, repeated, carried always on the lips. This is the foundation of leadership: not strategy sessions or personal genius, but the constant speaking of the Lord&apos;s word. What you speak, you will follow. What you forget, you will abandon.',
        },
        {
          kind: 'commentary',
          id: 'c-meditate',
          html:
            'Day and night—the whole rhythm of life is to be shaped by meditation on God&apos;s law. Not just in a study room at a set hour, but in every moment. The law is to be the first thing you think about when you wake, the last thing you contemplate before sleep, the constant return of your thought all through the day.',
        },
        {
          kind: 'christ',
          id: 'christ-meditation',
          title: 'Christ Connection — The Living Word',
          html:
            'Psalm 1:2 echoes this command to Joshua: "His delight is in the law of the Lord; and in his law doth he meditate day and night." Jesus embodied this meditation—He was the Living Word, the Law made flesh, speaking the very words of God. In John 1, Jesus is revealed as the Word that was with God and was God. To meditate on Jesus is to meditate on the Law in its ultimate, personal form.',
        },
        {
          kind: 'carry',
          html:
            'Leadership is not flashy. It is not about what you invent or how you transform things into something new. It is about knowing the law—God&apos;s word, His character, His will—so deeply that it comes naturally to you. What you meditate on day and night shapes the decisions you make when the crisis comes. When there is no time to consult, you will do what you have already spoken and thought a thousand times.',
        },
        {
          kind: 'reflection',
          id: 'josh1-meditate',
          prompt:
            'What part of God&apos;s word have you been meditating on? How is it shaping the way you think and the decisions you make?',
        },
      ],
    },

    /* ─── Joshua 1:10–11 — Three Days to Prepare ──────────────────────────── */
    {
      ref: 'Joshua 1:10–11',
      title: 'Prepare the Victuals; Three Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('Then Joshua commanded the officers of the people, saying,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Pass through the host, and command the people, saying, '),
                hg('Prepare you victuals', 'c-prepare-victuals'),
                t('; for '),
                hy('within three days', 'c-three-days'),
                t(' ye shall pass over this Jordan, to go in to possess the land which the Lord your God giveth you to possess it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prepare-victuals',
          html:
            'Joshua moves immediately from hearing God&apos;s word to commanding the people. There is no delay, no hesitation. The officers are to pass through the entire camp, telling every family to prepare food. It is a practical command rooted in practical reality: they are about to cross a river. They need supplies. Faith and logistics work together.',
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'Three days—the number appears again. Three times the charge to be strong and courageous. Three days to prepare. Three is the number of resurrection, of transformation, of the final test. The waiting is brief. The call to action is immediate. Israel had been camped in the wilderness for forty years. Now the countdown begins.',
        },
        {
          kind: 'carry',
          html:
            'When God moves you toward a new thing, the time between His promise and His fulfillment is not empty waiting. It is a time of preparation. Supplies to gather, practical arrangements to make, practical details to attend to. Your faithfulness at this stage is not less spiritual because it is also practical. The crossing of Jordan will require bread and water as well as courage and faith.',
        },
        {
          kind: 'reflection',
          id: 'josh1-prepare',
          prompt:
            'What is God calling you to step toward? What practical preparations do you need to make in these next three days?',
        },
      ],
    },

    /* ─── Joshua 1:12–18 — The Eastern Tribes Pledge ────────────────────── */
    {
      ref: 'Joshua 1:12–18',
      title: 'A Unified People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 12,
              spans: [
                t('And to the Reubenites, and to the Gadites, and to half the tribe of Manasseh, spake Joshua, saying,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Remember the word which Moses the servant of the Lord commanded you, saying, The Lord your God hath given you rest, and hath given you this land.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Your wives, your little ones, and your cattle, shall remain in the land which Moses gave you on this side Jordan; but ye shall pass before your brethren armed, all the mighty men of valour, and help them;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'joshua-1-78mid-1',
          html:
            'The conquest begins. Joshua leads where Moses commanded. The narrative moves from promise to execution, from instruction to action.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('Until the Lord have given your brethren rest, as he hath given you, and they also have possessed the land which the Lord your God giveth them: then ye shall return unto the land of your possession, and enjoy it, which Moses the Lord&apos;s servant gave you on this side Jordan toward the sunrising.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they answered Joshua, saying, All that thou commandest us we will do, and whithersoever thou sendest us, we will go.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('According as we hearkened unto Moses in all things, so will we hearken unto thee: only the Lord thy God be with thee, as he was with Moses.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Whosoever he be that doth rebel against thy commandment, and will not hearken unto thy words in all that thou commandest him, he shall be put to death: only be strong and of a good courage.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-eastern-tribes',
          html:
            'The eastern tribes—Reuben, Gad, and half Manasseh—had received their inheritance on the east side of Jordan during Moses&apos; time. They could have stayed home. But Joshua reminds them of their covenant: they go with their brothers until the promise is fully fulfilled for everyone. Leadership means remembering that your own rest is incomplete until all God&apos;s people have entered their rest.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chayil',
          title: 'Chayil — &ldquo;valor, strength&rdquo;',
          script: 'חַיִל',
          translit: '<strong>chayil</strong> · strength, might, valor, wealth, substance',
          description:
            'Joshua calls them "mighty men of valour"—not just any soldiers, but warriors of proven strength. True valor is not measured by a single victory. It is the sustained commitment to the cause of your people, even after your own rest is secured.',
        },
        {
          kind: 'commentary',
          id: 'c-pledge-of-the-people',
          html:
            'The response is unanimous and fierce: "All that thou commandest us we will do, and whithersoever thou sendest us, we will go." It echoes the language of covenant. They also ask for one thing: the presence of the Lord with Joshua as He was with Moses. The people&apos;s support is not unconditional surrender to a man; it is allegiance that flows out of the presence of God.',
        },
        {
          kind: 'christ',
          id: 'christ-unity',
          title: 'Christ Connection — The Body Works as One',
          html:
            'The eastern tribes entering the fight for their brothers foreshadows the unity Paul describes in 1 Corinthians 12:12–27: the body of Christ is one, and every member is essential. "If one member suffer, all the members suffer with it; or if one member be honoured, all the members rejoice with it." Joshua&apos;s people move together. No tribe enters rest alone. Every victory is shared. Jesus builds His church as a unified body, where the strength of the whole carries every part.',
        },
        {
          kind: 'carry',
          html:
            'You may have been blessed with a rest—a secure job, a healed marriage, a financial stability—that others around you have not yet entered. Joshua&apos;s word to the eastern tribes is your word: do not settle into comfort while your brothers and sisters are still fighting. Do not hoard your blessing. Rise up, armed with what God has given you, and stand beside those still waiting for their inheritance. Your own rest is not complete until all of God&apos;s people have entered theirs.',
        },
        {
          kind: 'reflection',
          id: 'josh1-covenant',
          prompt:
            'Where have you been blessed with rest or security that others are still seeking? How can you, like the eastern tribes, help carry others toward their own promised land?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-moses-death',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 34 and Joshua 1 Comparison',
      url: 'https://www.sefaria.org/Joshua.1',
      description: 'Connected texts showing the death of Moses and the commissioning of Joshua as the hinge between Torah and conquest.',
    },
    {
      id: 'intertextual-joshua-yeshua',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Joshua (Yeshua) Name Study',
      url: 'https://intertextual.bible/search?q=joshua+yeshua+jesus+name',
      description: 'Exploration of the shared etymology between Joshua (Yeshua) and Jesus (Iésous) across Old and New Testament.',
    },
  ],

  hasHebrew: true,
};
