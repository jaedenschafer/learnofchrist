import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 33 — The Wilderness Itinerary
 *
 * Forty-two stages from Rameses in Egypt to the plains of Moab opposite Jericho.
 * Each stage: "they journeyed from X, and pitched in Y." The chapter ends with the
 * command to drive out the inhabitants of Canaan and destroy their idols—a prophetic
 * word that echoes through Judges.
 *
 * Voice: Most of the chapter is a list, but the list is the point. God's people
 * ALWAYS travel by stages. The journey is not wasted; it is named, recorded, kept.
 *
 * Christ: The careful naming of every stop—God remembers every stop in your
 * wilderness. "I will never leave thee, nor forsake thee" (Heb. 13:5). The journey
 * from Egypt (slavery) to the river crossing (baptism imagery, 1 Cor. 10:1-2) is the
 * gospel arc.
 */
export const NUMBERS_33: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 33,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 18 },
  intros: [
    'Numbers 33 is one long list. Forty-two stages from Egypt to the edge of Canaan. Each one named: they journeyed from here and pitched camp there. No miracles are retold. No complaints are recycled. Just the geography of a wilderness, marked out by God.',
    'For modern readers, a genealogy or an itinerary can feel like filler—the parts to skip. But for Israel, this list was a prayer. Every stopped name a reminder: God brought us through there. Every waypoint a witness: He never left us, even when we couldn\'t see it. The list is the theology. God doesn\'t just record the great moments; He numbers the ordinary ones. He remembers the place you camped when everything was hard, when you thought He\'d forgotten you, when all you could do was wake up and keep walking.',
  ],

  bottomShare: {
    label: 'Share Numbers 33',
    quote:
      'Forty-two stages brought God\'s people from slavery in Egypt through the wilderness to the edge of Canaan. Every stop was named and remembered. God doesn\'t skip over the hard seasons of waiting, wandering, and wilderness. He marks them. He knows them. He is there in every one of them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 33 · Study Guide',
  },

  sections: [
    /* ─── The Journey Begins ────────────────────────────────────────────── */
    {
      ref: 'Numbers 33:1–3',
      title: 'From Egypt: The Wilderness Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 1,
              spans: [
                t('These are the '),
                hy('journeys', 'hebrew-masa'),
                t(' of the children of Israel, which went forth out of the land of Egypt with their armies under the hand of Moses and Aaron.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Moses wrote '),
                hg('their goings out', 'c-written-record'),
                t(' according to their journeys by the commandment of the Lord: and these are their journeys according to their goings out.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And they departed from '),
                hp('Rameses', 'c-rameses'),
                t(' in the first month, on the fifteenth day of the first month; on the morrow after the passover the children of Israel went out '),
                hg('with an high hand', 'c-high-hand'),
                t(' in the sight of all the Egyptians.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hebrew-masa',
          html:
            'The Hebrew word <em>masa\'</em> means a journey by stages, a deliberate progression. This is not wandering—it is travel with a destination, a purpose, a pattern.',
        },
        {
          kind: 'commentary',
          id: 'c-written-record',
          html:
            'Moses writes down every stage. The journey is not something to forget; it is something to record. A written record means a kept memory. Means: this happened. This matters. This is your story.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rameses',
          title: 'Rameses — The Starting Place',
          script: 'רַמְסֵס',
          translit: '<strong>Rameses</strong> · the treasure city of Pharaoh',
          description:
            'The exodus begins where Israel had been enslaved to build Pharaoh\'s monuments. They leave from the place of their lowest point—a place they never thought they\'d escape—and walk out "with an high hand," unashamed, with witnesses.',
        },
        {
          kind: 'commentary',
          id: 'c-rameses',
          html:
            'Rameses is not just the starting point; it is the name of what you\'re leaving behind. Slavery. Diminishment. The place where your labor built other people\'s dreams. The journey doesn\'t begin in neutral ground. It begins in freedom\'s first moment, when you walk out of the place that was killing you.',
        },
        {
          kind: 'commentary',
          id: 'c-high-hand',
          html:
            'The Hebrew phrase for "with an high hand"—<em>yad ramah</em>—means with strength, boldly, unafraid. This is not a sneaking escape. Israel leaves Egypt as a free people, in broad daylight, publicly. God makes a spectacle of rescue.',
        },
        {
          kind: 'christ',
          id: 'christ-exodus',
          title: 'Christ Connection — Freedom Has a Door',
          html:
            'Jesus connects His own death to Passover: "This is my body which is given for you" (Luke 22:19). The meal Israel ate on the night they left Egypt pointed forward to His blood shed once for all. Every stage of Israel\'s journey through the wilderness was baptism imagery—"baptized unto Moses in the cloud and in the sea" (1 Cor. 10:2)—a picture of dying to one life and rising to another through water and blood. Our exodus is not by works or by whipping ourselves into obedience. It is by His body, broken, and by His hand, raised high over us.',
        },
        {
          kind: 'carry',
          html:
            'Rameses was a real place—not just the starting point of a history lesson, but the backdrop of actual suffering. Whatever your Rameses was—the year you lost, the place you couldn\'t escape, the person you had to get free from—God sees it named. It is the real address of your story. Walking away from it is not running away. It is walking "with an high hand," openly, as the person you are being freed to become.',
        },
        {
          kind: 'reflection',
          id: 'rameses',
          prompt:
            'What is your Rameses—the place of old slavery, the life you\'ve been freed from? Take a moment to name it, and thank God that you are no longer building there.',
        },
      ],
    },

    /* ─── The First Stages: Succoth to Etham ────────────────────────────── */
    {
      ref: 'Numbers 33:4–8',
      title: 'The First Stages: Provision and Protection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 4,
              spans: [
                t('For the Egyptians buried all their firstborn which the Lord smote among them: upon their gods also the Lord executed '),
                hg('judgements', 'c-gods'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the children of Israel removed from Succoth, and pitched in Etham, '),
                hp('in the edge of the wilderness', 'c-edge'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And they removed from Etham, and turned again unto Pi-hahiroth, which is before Baal-zephon: and they pitched before Migdol.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And they departed from before Pi-hahiroth, and passed through the midst of the sea into the wilderness: and went three days\' journey in the wilderness of Etham, and pitched in Marah.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they removed from Marah, and came unto Elim: and in Elim were '),
                hy('twelve fountains', 'c-twelve-wells'),
                t(' of water, and threescore and ten palm trees; and they pitched there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gods',
          html:
            'The list begins not with Israel\'s triumph, but with a reminder: the God who led them out executed judgment on the gods of Egypt. Pharaoh\'s gods could not save his people. Only the God of Israel could. This sets the entire journey in a theological frame: this is not just a migration story; it is a story of divine power and protection.',
        },
        {
          kind: 'commentary',
          id: 'c-edge',
          html:
            'Even at the start, they are at "the edge of the wilderness." This is a boundary moment—no longer in Egypt, not yet in the land. The wilderness is not a punishment; it is the place between slavery and home.',
        },
        {
          kind: 'commentary',
          id: 'c-twelve-wells',
          html:
            'Elim appears in the journey as a place of rest and provision—twelve wells and seventy palm trees. Not coincidentally, the number twelve echoes the twelve tribes. God provides not once, but in specific places. The wilderness is not empty; it is punctuated with oases.',
        },
        {
          kind: 'reflection',
          id: 'first-stages',
          prompt:
            'The first stages take Israel from slavery through the wilderness to a place of water and rest. What has been your first stage after leaving "Egypt"—the hard place where you had to learn you could not do it alone?',
        },
      ],
    },

    /* ─── The Middle Wilderness: Murmuring and Manna ──────────────────── */
    {
      ref: 'Numbers 33:9–16',
      title: 'Manna and Movement',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 9,
              spans: [
                t('And they removed from Elim, and encamped by the Red sea.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they removed from the Red sea, and encamped in the wilderness of Sin.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And they removed from the wilderness of Sin, and encamped at Dophkah.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they removed from Dophkah, and encamped in Alush.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And they removed from Alush, and encamped at Rephidim, where was no water for the people to drink.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they removed from Rephidim, and encamped in the wilderness of Sinai.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they removed from the wilderness of Sinai, and encamped at Kibroth-hattaavah.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And they removed from Kibroth-hattaavah, and encamped at Hazeroth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-middle-stages',
          html:
            'The middle stages name places where Israel struggles and complains. Rephidim is remembered as "no water"—a place of thirst. Kibroth-hattaavah means "graves of craving"—where the people lusted for meat and God\'s anger burned. Yet the list does not skip them. Every hard place gets a name. Every place where you complained, where you doubted, where you wanted to go back to Egypt—God remembers it. The list does not erase the difficulty. It records it.',
        },
        {
          kind: 'christ',
          id: 'christ-manna',
          title: 'Christ Connection — Daily Bread',
          html:
            'Israel\'s daily manna in the wilderness is Jesus\'s model for prayer: "Give us this day our daily bread" (Matt. 6:11). Jesus teaches us to ask not for a year\'s supply, but for today\'s. He lived on that principle Himself in the wilderness: "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God" (Matt. 4:4). Every stage of your wilderness is an opportunity to ask for today\'s grace, today\'s strength, today\'s bread.',
        },
        {
          kind: 'carry',
          html:
            'Your complaints are not erased from God\'s record. He hears them—the thirst you named, the fear you admitted, the failure you fell into. Rephidim means "no water," and it is a named place in the story. God does not pretend hard seasons don\'t happen. He walks through them with you. Every place you were lowest is exactly where His provision appears. Daily. Not once for all time, but again and again, stage after stage.',
        },
        {
          kind: 'reflection',
          id: 'middle-stages',
          prompt:
            'Where has God met you in a place of real thirst or hunger? What daily provision surprised you there?',
        },
      ],
    },

    /* ─── The Rebellion and the Law ────────────────────────────────────── */
    {
      ref: 'Numbers 33:17–35',
      title: 'Forty Years: The Names of Faithfulness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 17,
              spans: [
                t('And they removed from Hazeroth, and encamped at Kadesh-barnea.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they removed from Kadesh-barnea, and encamped in mount Hor, in the edge of the land of Edom.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they removed from mount Hor, and encamped at Zalmonah.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And they removed from Zalmonah, and encamped at Punon.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And they removed from Punon, and encamped at Oboth.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And they removed from Oboth, and encamped in Iye-abarim, in the border of Moab.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they removed from Iye-abarim, and encamped at Dibon-gad.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they removed from Dibon-gad, and encamped in Almon-diblathaim.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they removed from Almon-diblathaim, and pitched in the mountains of Abarim, before Nebo.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And they removed from the mountains of Abarim, and encamped in the plains of Moab by Jordan near Jericho.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-forty-years',
          html:
            'Kadesh-barnea appears in the list—the place where the spies returned with a faithless report, where the people chose doubt over God\'s promise, where they began forty years of wilderness instead of entering immediately. The list does not hide this. It names it. A place of great failure becomes a waypoint in the journey. What might have been erased from history becomes part of the itinerary, proof that God\'s faithfulness outlasted Israel\'s unfaithfulness.',
        },
        {
          kind: 'commentary',
          id: 'c-abarim',
          html:
            'Mount Abarim (the "mountains of passing over") is where Moses climbs to see the promised land he will not enter. The name itself is prophetic—a mountain overlooking the river Israel must cross. Even in failure, the stages point forward. Even when you don\'t finish the journey yourself, God\'s journey continues.',
        },
        {
          kind: 'christ',
          id: 'christ-forty',
          title: 'Christ Connection — The Number Forty',
          html:
            'Forty years in the wilderness; forty days of Jesus in the wilderness. Matthew and Mark deliberately echo Israel\'s story in Jesus\'s temptation. Where Israel stumbled (turning from God\'s word to fear and lust), Jesus stands firm: "Man shall not live by bread alone." Jesus walks through the forty-year failure of the old covenant and emerges perfected—and He invites us into a better story. Our wilderness is not wasted. It is where we learn to trust the One who led us out.',
        },
        {
          kind: 'carry',
          html:
            'Forty years is a long time to be in between—freed but not yet home. Too old to remember slavery clearly, too young to claim the promised land. It is a strange season of your own story you might be in right now: free from something but waiting for something else; past one chapter but the next not yet opened. God names those seasons. He numbers them. They are not mistakes or delays. They are stages. They are the journey that makes you ready for what comes next.',
        },
        {
          kind: 'reflection',
          id: 'forty-years',
          prompt:
            'Is there a "Kadesh-barnea" in your story—a place where you doubted, turned away, or took a longer road than you expected? What would it mean to see that season as a stage on the journey, not a detour?',
        },
      ],
    },

    /* ─── The Arrival: Plains of Moab ──────────────────────────────────── */
    {
      ref: 'Numbers 33:48–56',
      title: 'The Journey Ends; The Work Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            {
              number: 48,
              spans: [
                t('And they removed from the mountains of Abarim, and pitched in the plains of Moab by Jordan near Jericho.'),
              ],
            },
            {
              number: 49,
              spans: [
                t('And they pitched by Jordan, from Beth-jesimoth even unto Abel-shittim in the plains of Moab.'),
              ],
            },
            {
              number: 50,
              spans: [
                t('And the Lord spake unto Moses in the plains of Moab by Jordan near Jericho, saying,'),
              ],
            },
            {
              number: 51,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye are passed over Jordan into the land of Canaan;'),
              ],
            },
            {
              number: 52,
              spans: [
                t('Then ye shall '),
                hg('drive out', 'c-drive-out'),
                t(' all the inhabitants of the land from before you, and destroy all their pictures, and destroy all their molten images, and quite pluck down all their high places:'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And ye shall dispossess the inhabitants of the land, and dwell therein: for I have given you the land to possess it.'),
              ],
            },
            {
              number: 54,
              spans: [
                t('And ye shall divide the land by lot for an inheritance among your families: and to the fewer ye shall give the less inheritance, and to the more ye shall give the more inheritance: every man\'s inheritance shall be in the place where his lot falleth; according to the tribes of your fathers ye shall inherit.'),
              ],
            },
            {
              number: 55,
              spans: [
                t('But if ye will not drive out the inhabitants of the land from before you; then it shall come to pass, that '),
                hy('those which ye let remain', 'c-pricked-by-thorns'),
                t(' of them shall be '),
                hg('pricks in your eyes, and thorns in your sides', 'c-thorns-prophecy'),
                t(', and shall vex you in the land wherein ye dwell.'),
              ],
            },
            {
              number: 56,
              spans: [
                t('Moreover it shall come to pass, that as I thought to do unto them, so will I do unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-drive-out',
          html:
            'After forty years of wilderness, Israel stands at the river about to enter. The command is not gentle. The land is not empty; it is occupied. Taking possession means displacement. This is the historical moment—a people returning to their land against its current inhabitants. The text does not minimize the conflict. It names it.',
        },
        {
          kind: 'commentary',
          id: 'c-pricked-by-thorns',
          html:
            'The warning in verse 55 becomes prophecy that echoes through Judges. Israel will not fully drive out the inhabitants. The people they fail to displace will become "pricks in your eyes, and thorns in your sides"—a constant source of conflict and spiritual compromise. The warning is not arbitrary punishment; it is consequence. Compromise with idolatry will weaken you. God is not being vindictive; He is being honest about how mixture works.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-thorns',
          title: 'Thorns and Eyes — A Picture of Compromise',
          script: 'צָנִים',
          translit: '<strong>tsanim</strong> · thorns; sharp things that wound',
          description:
            'A thorn in the eye is not lethal, but it is constant, painful, and impossible to ignore. Spiritual compromise doesn\'t destroy you overnight; it irritates, distracts, and gradually wears you down. The warning is meant to be taken seriously.',
        },
        {
          kind: 'christ',
          id: 'christ-thorns',
          title: 'Christ Connection — He Took the Thorns',
          html:
            'Centuries later, when Jesus steps into a baptism, He identifies with Israel\'s journey. "In the beginning" He calls Himself the seed that must die (John 12:24). At the end, He wears the crown of thorns—the very thorns that God warned Israel about, the ones that come from compromise and rebellion. "For he hath made him to be sin for us, who knew no sin" (2 Cor. 5:21). Every thorn that should have pricked our eyes and sides, He bore on His head.',
        },
        {
          kind: 'carry',
          html:
            'The wilderness journey ends when you cross the river. But entering the land is not the end of the story; it is the beginning of a new one. You arrive, but you must take possession. You are given the land, but you must live in it, shape it, defend it against compromise. The comfort of the wilderness—where God fed you daily, where you had only to trust and move—is replaced by the responsibility of belonging. Not all wilderness journeys end in rest. Some end in work. Some end with the necessity of saying no, of drawing lines, of being willing to give up what is not yours to keep.',
        },
        {
          kind: 'reflection',
          id: 'plains-of-moab',
          prompt:
            'Has your wilderness season ended? What river are you about to cross? What "inhabitants"—old patterns, old voices, old compromises—do you need to be willing not to keep?',
        },
        { kind: 'divider' },
        {
          kind: 'commentary',
          id: 'c-thorns-prophecy',
          html:
            'This warning becomes historical reality. By the time of Judges, Israel has adopted the gods and practices of Canaan, and the people they failed to drive out become exactly what God warned: sources of constant spiritual and physical pressure. The book of Judges shows us the consequences. But notice: even in judgment, God is not silent. He raises judges—deliverers—when the people cry out. The journey continues, even through failure.',
        },
      ],
    },

    /* ─── The Theology of the List ─────────────────────────────────────── */
    {
      ref: 'The Meaning of Every Stop',
      title: 'God Remembers the Wilderness',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-theology-list',
          html:
            'Numbers 33 is remarkable because it is a list. Not a narrative, not a sermon, not a poem—just names, one after another. Yet this humble form carries immense theology: <strong>God knows the shape of your journey. He numbers your stages. He remembers the places where you camped, where you cried, where you doubted, where you finally trusted.</strong> The list is not filler. It is the promise that your wilderness is not invisible to God.',
        },
        {
          kind: 'commentary',
          id: 'c-hebrews-connection',
          html:
            'Hebrews 13:5 quotes this chapter\'s promise: "I will never leave thee, nor forsake thee." The promise is made to a people in the wilderness, to a people who will wander for forty years, to a people who will complain and doubt and want to turn back. Yet God\'s covenant with them is not conditional on their faithfulness. It is conditional on His character. He will never leave. He will never forsake. Every stage of the journey proves it.',
        },
        {
          kind: 'christ',
          id: 'christ-stages',
          title: 'Christ Connection — He Knew the Road',
          html:
            'Jesus underwent His own wilderness journey—forty days in the desert, tempted, hungry, alone. But His wilderness was not about learning to trust. He already knew the Father perfectly. His wilderness was about standing in solidarity with every person who has ever had to walk through one. When Jesus prays in Gethsemane, His sweat falling like blood, He is walking a stage we cannot walk alone. When He rises from the grave, He is leading the way through the final river crossing. Our wilderness has a destination because He has already walked through it and opened the way ahead.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a wilderness season right now, this chapter is for you. God knows where you are camped tonight. He can name the stage. He can tell you what stage came before and what might come next. You are not wandering aimlessly. You are on a journey with a destination. And unlike Israel, you know the name of the One who leads the way. You are not learning to trust a promise from forty centuries ago. You are walking with the One who made the promise and kept it, who walked the wilderness Himself and broke open the road ahead.',
        },
        {
          kind: 'reflection',
          id: 'theology-list',
          prompt:
            'Look back over your own journey. Can you name the stages? The places where you camped in faith, the places where you stumbled, the places where you discovered God was with you? What does it mean to have those stages remembered and recorded, not by you, but by God?',
        },
      ],
    },
  ],
};
