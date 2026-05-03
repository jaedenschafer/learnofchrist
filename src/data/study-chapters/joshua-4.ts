import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 4 — The Twelve Stones[res:iaa-gilgal-excavation] Memorial
 *
 * After Israel crosses the Jordan dry-shod, Joshua commands twelve men
 * to carry stones from the riverbed and set them up in Gilgal[res:bibleodyssey-gilgal]. The stones
 * are a monument to God's power, a sign for the children to ask about,
 * a way of teaching faith through embodied memory. The chapter echoes
 * Passover[res:sefaria-passover-connection]-lamb-selection day and prefigures Christian sacraments.
 */
export const JOSHUA_4: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 15 },
  intros: [
    'Joshua 4 is about memory made visible. After all of Israel crosses the Jordan on dry ground, with the priests holding the ark steady in the riverbed, God tells Joshua to command twelve men—one from each tribe—to take twelve stones from the river and carry them across. These stones will become a monument in Gilgal, a place where children will one day ask, "What do these stones mean?" Faith, the chapter teaches, is not kept in silence. It is told through visible reminders, through story passed down, through the kind of physical memorial that makes you stop and ask.',
    'The crossing happens on the tenth day of the first month—the same day the Passover lamb was selected in Exodus 12:3. Salvation history is woven through with visible signs. The twelve stones in Gilgal echo the twelve stones Joshua set up in the Jordan itself, covered by the waters. Both the remembered and the hidden belong to the story. And when the priests finally lift their feet from the riverbed, the waters rush back, closing the gap. The chapter shows a God who parts waters and then restores them, who works through twelve witnesses, who builds memory into the bones of a nation.',
  ],

  bottomShare: {
    label: 'Share Joshua 4',
    quote:
      'Joshua set up twelve stones taken from the Jordan as a memorial, that when children ask what these stones mean, Israel could testify: the Lord your God dried up the waters before you, that all the earth might know His hand is mighty.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 4 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-gilgal',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Gilgal: The Camp and Memorial Stones',
      url: 'https://www.bibleodyssey.org/dictionary/gilgal/',
      description: 'Site of the first Israelite camp in Canaan where Joshua set up twelve stones from the Jordan.',
    },
    {
      id: 'iaa-gilgal-excavation',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Gilgal Excavations',
      url: 'https://www.antiquities.org.il/article-3050-en/Gilgal.html',
      description: 'Archaeological evidence of ancient Gilgal and its role in early Israelite settlement of Canaan.',
    },
    {
      id: 'sefaria-passover-connection',
      kind: 'study',
      source: 'Sefaria',
      label: 'Passover and Joshua 4 — Tenth Day Connection',
      url: 'https://www.sefaria.org/Exodus.12.3?lang=bi',
      description: 'Connection between the Passover lamb selection (Exodus 12:3) and the crossing of Jordan on the same day (Joshua 4).',
    },
  ],

  sections: [
    /* ─── Joshua 4:1–3 — Take You Twelve Stones ──────────────────────────── */
    {
      ref: 'Joshua 4:1–3',
      title: '"Take You Twelve Stones Out of the Jordan"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when all the people were '),
                hy('clean passed over', 'clean-passed'),
                t(' Jordan, that the Lord spake unto Joshua, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Take you '),
                hg('twelve men', 'twelve-witnesses'),
                t(' out of the people, out of every tribe a man,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And command ye them, saying, Take you hence out of the midst of Jordan, '),
                hy('out of the place where the priests&apos; feet stood firm', 'priests-place'),
                t(', '),
                t('twelve stones'),
                t(', and ye shall carry them over with you, and leave them in the lodging place, where ye shall lodge this night.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'clean-passed',
          html:
            'The word "clean passed" suggests the crossing is complete, final, undeniable. Every person has stood on dry ground in the midst of the Jordan. What God did is not a rumor or a legend at second hand—every Israeli who lived to see it has felt the riverbed under their feet.',
        },
        {
          kind: 'commentary',
          id: 'twelve-witnesses',
          html:
            'Twelve men, one from each tribe. The number matters. Every family line in Israel has a witness to what happened. Every branch of the nation contributes to the memorial. This is not one leader&apos;s testimony—it is the testimony of the whole people.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eben',
          title: 'Eben — "stone"',
          script: 'אֶבֶן',
          translit: '<strong>eben</strong> · a stone, a witness, a boundary marker',
          description:
            'In Hebrew, stones mark memory (Jacob&apos;s pillar at Bethel), mark land (property boundaries), and mark graves. The same word that means "stone" can mean "witness." The twelve stones of Joshua 4 are mute witnesses that speak the loudest.',
        },
        {
          kind: 'commentary',
          id: 'priests-place',
          html:
            'The stones are to be taken from the place where the priests&apos; feet stood firm—the exact spot where the ark rested. The priests held the river back. The stones come from the ground they sanctified by their obedience. Every stone carries the weight of priestly faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'What is something in your own story—a time of crossing, a moment when you felt the ground solid beneath your feet when by all logic it should have given way—that you need to memorialize? Not to boast, but to remember. To remind yourself, and to tell. God is still looking for people who will pick up the stones and carry them forward.',
        },
        {
          kind: 'reflection',
          id: 'j4-stones-taken',
          prompt:
            'When you look back, what are the twelve seasons or decisions in your own crossing that your children or grandchildren ought to know about?',
        },
      ],
    },

    /* ─── Joshua 4:4–8 — The Men Did So ───────────────────────────────────── */
    {
      ref: 'Joshua 4:4–8',
      title: 'The Men Did So',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Then Joshua called the twelve men, whom he had prepared of the children of Israel, out of every tribe a man:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Joshua said unto them, Pass over before the ark of the Lord your God into the midst of Jordan, and take ye up every man of you a stone upon his shoulder, according unto the number of the tribes of the children of Israel:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('That this may be a '),
                hg('sign among you', 'sign-among'),
                t(', that when your children ask their fathers in time to come, saying, What mean ye by these stones?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then ye shall answer them, That the waters of Jordan were '),
                hp('cut off', 'christ-death'),
                t(' before the ark of the covenant of the Lord; when it passed over Jordan, the waters of Jordan were cut off: and these stones shall be for a '),
                hy('memorial', 'zikkaron'),
                t(' unto the children of Israel for ever.'),
              ],
            },
            {
              number: 8,
              spans: [t('And the children of Israel did so as Joshua commanded, and took up twelve stones out of the midst of Jordan, as the Lord spake unto Joshua: and they carried them over with them unto the place where they lodged, and laid them down there.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sign-among',
          html:
            'A "sign among you"—not hidden, not private, but public. The stones sit where anyone passing through Gilgal will see them. Faith is not a secret between God and the individual believer; it is written on the landscape, visible to every child who will grow up there.',
        },
        {
          kind: 'hebrew',
          id: 'zikkaron',
          title: 'Zikkaron — "memorial"',
          script: 'זִכָּרוֹן',
          translit: '<strong>zikkaron</strong> · a remembrance, something that causes remembering',
          description:
            'From the root meaning "to remember." A memorial is not just a decoration; it is an object designed to pull memory out of you every time you see it. The twelve stones are meant to interrupt the ordinary day and demand the question: "What mean these?"',
        },
        {
          kind: 'christ',
          id: 'christ-death',
          title: 'Christ Connection — Cut Off and Risen',
          html:
            'The waters are "cut off" before the ark. At the Last Supper, Jesus takes bread and says, "This is my body, which is given for you: this do in remembrance of me" (Luke 22:19). The Lord&apos;s Supper is our twelve stones. Bread broken, wine poured—visible signs of a body cut off, waters of death parted, a covenant made. Every time a Christian eats and drinks, they are doing exactly what Joshua commanded: asking the question, answering with the story, teaching the next generation that the way forward runs through a grave and out the other side.',
        },
        {
          kind: 'carry',
          html:
            'Do you have a practice that marks your own faith visibly? A place you go, a meal you share, a time you speak truth to someone you love? The smallest memorial counts. A photo on your desk. A verse on your mirror. A table you gather around. These are your stones. They are how the next generation learns that God is faithful.',
        },
        {
          kind: 'reflection',
          id: 'j4-memorial',
          prompt:
            'What is something you do or own that regularly asks you, "What mean these?" What truth does it make you answer?',
        },
      ],
    },

    /* ─── Joshua 4:9–10 — Twelve Stones in the Midst of Jordan ────────────── */
    {
      ref: 'Joshua 4:9–10',
      title: '"Twelve Stones in the Midst of Jordan"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('And Joshua set up '),
                hg('twelve stones in the midst of Jordan', 'gilgal-circle'),
                t(', in the place where the feet of the priests which bare the ark of the covenant stood: and they are there unto this day.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For the priests which bare the ark stood in the midst of Jordan, until every thing was finished that the Lord commanded Joshua to speak unto the people, according to all that Moses commanded Joshua: and the people hasted and passed over.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gilgal-circle',
          html:
            'There are two sets of stones. Twelve in Gilgal, visible and visited by every generation. And twelve more in the Jordan itself, covered by water, unseen except by God. Joshua wants to say: I do not only make a visible memorial. The hidden one is just as much His. What God does beneath the surface, what no one sees but Him, is just as real, just as true, just as much a wonder.',
        },
        {
          kind: 'commentary',
          id: 'priests-stood',
          html:
            'The priests remain in the riverbed until every Israelite has crossed. They are the last ones to move. Their feet are the last thing to leave the dry ground in the midst of the waters. The priesthood is not meant to lead from safety, but to serve from the place of greatest danger, holding the boundary until the people are secure.',
        },
        {
          kind: 'carry',
          html:
            'Some of the work that matters most in your life will never be seen by most people. The faithfulness that happens in private, the prayers no one hears, the choice to stay steady when everyone else gets to hurry forward. Those are your hidden stones. God sees them. Your worth is not diminished because they are covered. In fact, it may be deeper for it.',
        },
      ],
    },

    /* ─── Joshua 4:11–14 — The Waters Returned; The Lord Magnified Joshua ──── */
    {
      ref: 'Joshua 4:11–14',
      title: 'The Waters Returned; The Lord Magnified Joshua',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('And it came to pass, when all the people were clean passed over, that the ark of the Lord passed over, and the priests, in the sight of all the people.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the men of Reuben, and the men of Gad, and half the tribe of Manasseh, passed over armed before the children of Israel, as Moses spake unto them:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('About forty thousand prepared for war '),
                hg('passed over', 'forty-thousand'),
                t(' before the Lord unto battle, to the plains of Jericho.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('On that day the Lord '),
                hg('magnified Joshua', 'joshua-magnified'),
                t(' in the sight of all Israel; and they feared him, as they feared Moses, all the days of his life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'forty-thousand',
          html:
            'Forty thousand men of war—a striking number. The crossing is not the end of the story; it is the beginning. Israel now has a unified army, armed, moving toward Jericho. The dry river is a military victory as much as a spiritual one. God delivers a nation ready to fight.',
        },
        {
          kind: 'commentary',
          id: 'joshua-magnified',
          html:
            'The Lord magnifies Joshua. Joshua does not magnify himself; God does. What makes Joshua great is that he obeys, and then God raises him up in the sight of the people. The fear of Joshua comes from seeing God work through him. Leadership that lasts is not built on charisma or force; it is built on a name that becomes synonymous with faithfulness, and then with the power of God at work.',
        },
        {
          kind: 'carry',
          html:
            'If you are leading anything—a team, a household, a ministry, a friendship—your credibility is not something you can manufacture. It is the result of being steady, keeping your word, doing the hard thing when the easy thing is available. God magnifies leaders who get out of the way and let His hand be seen.',
        },
      ],
    },

    /* ─── Joshua 4:15–18 — The Lord Said to Joshua; The Waters Returned ────── */
    {
      ref: 'Joshua 4:15–18',
      title: '"Come Up Out of Jordan"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('And the Lord spake unto Joshua, saying,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Command the priests that bear the ark of the testimony, that they come up out of Jordan.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Joshua therefore commanded the priests, saying, Come ye up out of Jordan.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And it came to pass, when the priests that bare the ark of the covenant of the Lord were come up out of the midst of Jordan, and the soles of the priests&apos; feet were lifted up unto the dry land, that '),
                hy('the waters of Jordan returned', 'waters-return'),
                t(' unto their place, and '),
                hg('flowed over all his banks', 'flood-banks'),
                t(', as they did before.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'waters-return',
          html:
            'The waters are held back only as long as the ark is in the midst of them. The moment the priests lift their feet to dry land, the miracle closes. The road behind Israel floods. There is no going back. God does not hold the past open indefinitely. He closes the door and pushes His people forward.',
        },
        {
          kind: 'commentary',
          id: 'flood-banks',
          html:
            'The waters flow over all the banks as they did before—the Jordan is restored to itself, its fury unleashed. What God momentarily parted, He allows to resume its full force. The crossing leaves no trace. There is no physical bridge, no remaining dry path for those who lost heart. Israel stands in Canaan with the wilderness behind them and the river risen between them and the world they came from.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the call forward means there can be no retreat. The bridge closes. The past floods. God does not leave room for us to hedge our bets or to keep one foot in the old life. Commitment means the waters close behind you. The old escape route is gone. You are free—not because the door is left open, but because it is closed.',
        },
        {
          kind: 'reflection',
          id: 'j4-waters-return',
          prompt:
            'Is there a calling or commitment you have been postponing because you want to keep a way back? What would change if you let the waters close?',
        },
      ],
    },

    /* ─── Joshua 4:19–24 — The Tenth Day; The Stones in Gilgal ────────────── */
    {
      ref: 'Joshua 4:19–24',
      title: '"When Your Children Shall Ask"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('And the people came up out of Jordan on the '),
                hy('"tenth day of the first month"', 'tenth-day'),
                t(', and encamped in Gilgal, in the east border of Jericho.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And those twelve stones, which they took out of Jordan, did Joshua pitch in Gilgal.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he spake unto the children of Israel, saying, '),
                hg('"When your children shall ask their fathers in time to come"', 'question-comes'),
                t(', saying, What mean these stones?'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Then ye shall let your children know, saying, Israel came over this Jordan on dry land.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For the Lord your God dried up the waters of Jordan from before you, until ye were passed over, as the Lord your God did to the Red sea, which he dried up from before us, until we were gone over:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('That '),
                hp('all the people of the earth', 'christ-witness'),
                t(' might know the hand of the Lord, that it is mighty: that ye might fear the Lord your God for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'tenth-day',
          html:
            'The tenth day of the first month is the day the Passover lamb was selected in Exodus 12:3. The crossing happens on Passover-selection day. That is not accidental. Israel&apos;s first exodus, from Egypt, depended on blood—a lamb killed and marked on the doorpost. Israel&apos;s second exodus, from the wilderness, depends on water—a river parted, stones set up. Both salvations are tied to the same calendar day. Both leave visible marks.',
        },
        {
          kind: 'commentary',
          id: 'question-comes',
          html:
            'Joshua does not hope that the children will ask. He says: they SHALL ask. Faith is transmitted by curiosity. A child sees something strange—twelve stones in a circle at Gilgal—and asks why. That question is the whole point. God builds the world so that the next generation cannot help but inquire. The crossing is not for this generation alone; it is for all the generations to come, through the same mechanism: a child asks, a parent answers, faith is passed down.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gilgal',
          title: 'Gilgal — "circle"',
          script: 'גִּלְגָּל',
          translit: '<strong>gilgal</strong> · a circle, a wheel, something that rolls',
          description:
            'The root word suggests rolling, renewal, cycles. The place where Israel pitches the stones is named for circular motion—the idea that seasons turn, generations follow one another, stories roll forward. The stones sit in a place whose very name says: this will be remembered again and again, in every turning of the years.',
        },
        {
          kind: 'christ',
          id: 'christ-witness',
          title: 'Christ Connection — Witness to the Nations',
          html:
            'The crossing&apos;s purpose is "that all the people of the earth might know the hand of the Lord, that it is mighty." The conquest of Canaan is not tribal victory; it is a sign to the world about who God is. Fast-forward to the Last Supper: Jesus gives bread and wine to His disciples and says, "This do in remembrance of me" (1 Cor. 11:24). The sacrament travels with the church through two thousand years and across every continent, the way the twelve stones stay at Gilgal. A meal that keeps asking: What mean these elements? And the answer: the Lord your God broke His body, poured His blood, so that all people everywhere might know the hand of the Lord is mighty to save.',
        },
        {
          kind: 'carry',
          html:
            'You are a carrier of memory. Not just your own story, but the stories of those who came before. When you tell them, when you keep the practices that embed them, when you answer a child&apos;s question with the truth, you are setting up stones in Gilgal. You are making God visible to the generation coming after you.',
        },
        {
          kind: 'reflection',
          id: 'j4-children-ask',
          prompt:
            'What story from your own faith journey do you most want the next generation to know? Have you told it? Have you lived it in a way that makes them ask?',
        },
      ],
    },
  ],
};
