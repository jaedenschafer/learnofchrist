import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 18 — The Danites steal the Levite and the idol. A whole tribe
 * institutionalizes idolatry, and one man&apos;s syncretism becomes a nation&apos;s heritage.
 */
export const JUDGES_18: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 18,

  estimatedMinutes: { beginner: 12, intermediate: 20, deep: 24 },
  intros: [
    'Judges 18 is a tragic story of ambition without dependence on God. The tribe of Dan seeks an inheritance they were given by God but never took possession of. Instead of trusting Him, they hire a Levite priest, consult idols instead of seeking His face, and steal what belongs to another family. By the end, a whole tribe has institutionalized the very idolatry that was destroying Israel.',
    'The chapter opens with a phrase that keeps echoing through the book of Judges: "In those days there was no king in Israel." Without central authority, without a shepherd, the people do what seems right in their own eyes. What begins as one family&apos;s private syncretism—a priest-for-hire and a homemade idol—becomes, by chapter&apos;s end, a tribal inheritance. The Danites have not just stolen an idol; they have stolen from God the chance to lead them. Christ will eventually offer Himself as the King and Shepherd they rejected.',
  ],

  bottomShare: {
    label: 'Share Judges 18',
    quote:
      'When a whole tribe rejects God as their shepherd and seeks their own way, one family&apos;s private idolatry becomes a nation&apos;s inherited sin. The true Shepherd offers Himself to lead you home.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 18 · Study Guide',
  },

  sections: [
    /* ─── Judges 18:1–2 — Dan&apos;s Failure to Claim the Inheritance ──────── */
    {
      ref: 'Judges 18:1–2',
      title: 'The Unclaimed Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 1,
              spans: [
                t('In those days there was no king in Israel: and in those days '),
                hy('the tribe of the Danites', 'dan-name'),
                t(' sought them an '),
                hg('inheritance to dwell in', 'dan-inherit'),
                t('; for unto that day all their inheritance had not fallen unto them among the tribes of Israel.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the children of Dan sent of their family '),
                hg('five men', 'dan-spies'),
                t(' of their coasts, men of valour, from Zorah and from Eshtaol, to spy out the land, and to search it; and they said unto them, Go, search the land: who when they came to the mount Ephraim, to the house of Micah, they lodged there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'judges-no-king',
          html:
            'The refrain "no king in Israel" appears repeatedly in Judges. It does not mean the king hasn&apos;t come yet — it means the people have not let the one true King rule them. They are unshepherded, and unshepherded people make the wrong choices.',
        },
        {
          kind: 'hebrew',
          id: 'dan-name',
          title: 'Dan — "judge"',
          script: 'דָּן',
          translit: '<strong>dan</strong> · to judge, to vindicate',
          description:
            'Dan means "he judges." Yet this tribe that bears the name of judgment will be the first to institutionalize idolatry. The great irony of Judges: a tribe called Judge will fail to judge itself by God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'dan-inherit',
          html:
            'God gave each tribe their inheritance at the conquest (Joshua 19:40–48). The Danites received fertile land near Judah. But they never fully possessed it—they were driven back by the Amorites, who were stronger. Rather than cry out to God for help, or trust Him to deliver, they decide to find their own way.',
        },
        {
          kind: 'carry',
          html:
            'When God promises something and we don&apos;t see it arrive on our timeline, the temptation is to go find it ourselves. The Danites had a God-given inheritance. They lost faith in it. The moment you stop believing that what God promised you is worth waiting for, you start building your own solution. That&apos;s when the trouble begins.',
        },
        {
          kind: 'reflection',
          id: 'unclaimed',
          prompt: 'What promise from God are you tempted to fulfill on your own timeline instead of waiting for Him?',
        },
      ],
    },

    /* ─── Judges 18:3–6 — The Spies Meet the Levite ────────────────────── */
    {
      ref: 'Judges 18:3–6',
      title: 'A Hireling Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 3,
              spans: [
                t('When they were by the house of Micah, they '),
                hg('knew the voice of the young man', 'levite-voice'),
                t(' the Levite: and they turned in thither, and said unto him, Who brought thee hither? and what makest thou in this place? and what hast thou here?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he said unto them, '),
                hg('Thus and thus dealeth Micah with me', 'levite-hire'),
                t(', and hath hired me, and I am his priest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'levite-voice',
          html:
            'The spies recognize the Levite by his voice and accent. He has been living in Micah&apos;s house, serving as a private priest. What should have been a sacred office—mediating between God and His people—has become a career transaction. Micah paid him to be his priest, and the Levite accepted.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 5,
              spans: [
                t('And they said unto him, '),
                hg('Ask counsel of God', 'ask-counsel'),
                t(', I pray thee, that we may know whether our way which we go shall be prosperous.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the priest said unto them, Go in peace: '),
                hp('before the Lord is your way', 'christ-shepherd'),
                t(' wherein ye go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'levite-hire',
          html:
            'The Levite gives them a positive word: "The Lord favors your way." But he is a priest-for-hire, a man whose livelihood depends on pleasing his employer. Does he consult God, or does he simply tell them what they want to hear? Judges leaves the question hanging. A priest without independence from his patron cannot speak God&apos;s word faithfully.',
        },
        {
          kind: 'commentary',
          id: 'ask-counsel',
          html:
            'The irony deepens: the Danites ask for a word from God—they know there is a priest, they know there is a ritual. But they do not know God Himself. They want a blessing on their own plan, not a plan from God.',
        },
        {
          kind: 'carry',
          html:
            'Beware the hireling in your own life—the counsel you buy from someone whose livelihood depends on telling you yes. The mentor who has something to gain if you follow their advice. The spirituality that costs you money and asks nothing of your actual surrender to God. True shepherds speak even when it costs them.',
        },
        {
          kind: 'reflection',
          id: 'hireling',
          prompt: 'Who in your life is honest with you even when it costs them? And who tells you what you want to hear?',
        },
      ],
    },

    /* ─── Judges 18:7–10 — The Spies Survey Laish ────────────────────── */
    {
      ref: 'Judges 18:7–10',
      title: 'Careless and Defenseless',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 7,
              spans: [
                t('Then the five men departed, and came to '),
                hy('Laish', 'laish-name'),
                t(', and saw the people that were therein, how they dwelt '),
                hg('careless', 'careless-people'),
                t(', after the manner of the Zidonians, quiet and secure; and there was '),
                hg('no magistrate in the land', 'no-shepherd'),
                t(', that might put them to shame in any thing; and they were far from the Zidonians, and had no business with any man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'laish-name',
          html:
            'Laish means "lion," a name of power and strength. Yet the people inside it are completely defenseless, without a shepherd or magistrate to lead them. A city&apos;s name and its actual strength have come apart.',
        },
        {
          kind: 'hebrew',
          id: 'laish-hebrew',
          title: 'Laish — "lion"',
          script: 'לַיִשׁ',
          translit: '<strong>laish</strong> · a lion; a place of strength',
          description:
            'Laish bore a name of ferocity and protection. But names lie when no one is home to defend them. A strong name without strong shepherding is just a word.',
        },
        {
          kind: 'commentary',
          id: 'careless-people',
          html:
            'The Hebrew word <em>betach</em> means to live in false confidence, without awareness of danger. The Laishites are at peace—but it is the peace of those who don&apos;t know they are vulnerable. This is the peace of the unshepherded.',
        },
        {
          kind: 'commentary',
          id: 'no-shepherd',
          html:
            'Again: no magistrate. No one to lead, to protect, to judge. The Danites will not give them a shepherd; they will take their city and their god.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 8,
              spans: [t('And they came unto their brethren to Zorah and Eshtaol: and their brethren said unto them, What say ye?')],
            },
            {
              number: 9,
              spans: [
                t('And they said, '),
                hg('Arise, that we may go up against them', 'war-arise'),
                t(': for we have seen the land, and, behold, it is very good: and are ye still? be not slothful to go, and to enter to possess the land.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('When ye go, ye shall come to a people '),
                hg('secure, and to a large land', 'laish-prize'),
                t(': for God hath given it into your hands; a place where there is no want of any thing that is in the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'war-arise',
          html:
            'Notice what the spies don&apos;t say. They don&apos;t say, "God has told us to attack Laish." They don&apos;t say, "God will fight for us." They say the land is good and the people are weak. That is enough for them to justify war.',
        },
        {
          kind: 'commentary',
          id: 'laish-prize',
          html:
            'The spies invoke God once—"God hath given it into your hands"—as if possession of vulnerable people is automatic, as if God&apos;s will is evident just because conquest is easy. Ease of conquest has never been a reliable sign of God&apos;s will.',
        },
        {
          kind: 'carry',
          html:
            'When a path opens up and looks easy, when the prize looks good and defenseless, when success seems guaranteed—that is precisely when you need to ask hardest whether God is in it. The Danites saw opportunity and called it God&apos;s will. Many of us do the same.',
        },
        {
          kind: 'reflection',
          id: 'laish',
          prompt: 'Where are you tempted to do something because it seems easy or because you want it, and to call that God&apos;s leading?',
        },
      ],
    },

    /* ─── Judges 18:14–20 — The Theft of the Idol ──────────────────────── */
    {
      ref: 'Judges 18:14–20',
      title: 'The Levite&apos;s Ambition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [
                t('Then answered the five men that went to spy out the country of Laish, and said unto their brethren, Know ye that there is in these houses an ephod, and teraphim, and a graven image, and a molten image? now therefore consider what ye have to do.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And they turned thitherward, and came to the house of the young man the Levite, even unto the house of Micah, and saluted him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'theft-begin',
          html:
            'The spies have spotted Micah&apos;s collection of idols. An <em>ephod</em> (priestly garment), <em>teraphim</em> (household idols), a <em>graven image</em> (wooden), and a <em>molten image</em> (metal)—all forbidden, all signs of syncretism. The five men see an opportunity to strengthen their own religious practice with better religious objects.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 16,
              spans: [
                t('And the six hundred men appointed with their weapons of war, which were of the children of Dan, stood by the entering of the gate.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the five men that went to spy out the land went up, and came in thither, and took the graven image, and the ephod, and the teraphim, and the molten image: and the priest stood in the entering of the gate with the six hundred men that were appointed with weapons of war.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'militia-strength',
          html:
            'Six hundred armed men. An overwhelming force. They are not asking permission; they are taking what they want. Notice where the priest is standing: at the gate with the militia. He is not objecting. He is waiting to see which way the power flows.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 18,
              spans: [
                t('And these went into Micah&apos;s house, and took the graven image, the ephod, and the teraphim, and the molten image. Then said the priest unto them, What do ye?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they said unto him, '),
                hg('Hold thy peace, lay thine hand upon thy mouth', 'silence-demand'),
                t(', and go with us, and be to us a father and a priest: is it better for thee to be a priest unto the house of one man, or that thou shouldest be a priest unto a tribe and a family in Israel?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'silence-demand',
          html:
            'Micah asks the obvious question: "What are you doing?" The Danites answer with a bribe dressed as a promotion. "Be quiet. Come with us. Stop being a priest to one man&apos;s household idol and become a priest to an entire tribe&apos;s idol." It is a career upgrade. The Levite will have more power, more respect, more security.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 20,
              spans: [
                t('And the priest&apos;s heart was '),
                hg('glad', 'levite-glad'),
                t('; and he took the ephod, and the teraphim, and the graven image, and went in the midst of the people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'levite-glad',
          html:
            'The Levite&apos;s heart is glad. Not conflicted. Not wrestling with conscience. Glad. He picks up the stolen idols and walks away from his old employer into a bigger, better position. What begins as one family&apos;s private syncretism becomes, through one man&apos;s ambition, a tribal institution.',
        },
        {
          kind: 'christ',
          id: 'christ-shepherd',
          title: 'Christ Connection — The True Shepherd vs. the Hireling',
          html:
            'Jesus tells His disciples about the difference between a true shepherd and a hireling: "The hireling fleeth, because he is an hireling, and careth not for the sheep" (John 10:12–13). A hireling pastor, a hireling counselor, a hireling priest—anyone who serves for money and status rather than love of the flock—will abandon you when a better offer comes. Jesus says, "I am the good shepherd: the good shepherd giveth his life for the sheep" (John 10:11). He is not running from danger; He is running toward it, all the way to a cross. Dan had a chance to follow the true Shepherd. Instead, they hired a hireling and lost their souls.',
        },
        {
          kind: 'carry',
          html:
            'Your spiritual ambition—your hunger for influence, for a title, for recognition—is one of the easiest doors for you to walk through that leads away from God. The Levite wanted to be a bigger priest. He ended up blessing idolatry. What promotion or status are you chasing that might cost you your integrity?',
        },
        {
          kind: 'reflection',
          id: 'ambition',
          prompt: 'Where might ambition be tempting you to compromise something sacred? What would it cost you to say no?',
        },
      ],
    },

    /* ─── Judges 18:21–26 — Micah Threatened ──────────────────────────── */
    {
      ref: 'Judges 18:21–26',
      title: 'The Powerless Response',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('And they turned and departed, and put the little ones and the cattle and the carriage before them.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And when they were a good way from the house of Micah, the men that were in the houses near to Micah&apos;s house were gathered together, and overtook the children of Dan.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they cried unto the children of Dan. And they turned their faces, and said unto Micah, What aileth thee, that thou comest with such a company?'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he said, Ye have taken away my gods which I made, and the priest, and ye are gone away: and what have I more? and what is this that ye say unto me, What aileth thee?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-pursuit',
          html:
            'Micah pursues them, but he is alone with a handful of neighbors. He asks one question: "What have I more?" His gods are gone. His priest is gone. His entire religious world has been dismantled and carried away.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 25,
              spans: [
                t('And the children of Dan said unto him, Let not thy voice be heard among us, lest angry men run upon thee, and thou lose thy life, with the lives of thy household.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the children of Dan went their way: and when Micah saw that they were too strong for him, he turned and went back unto his house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'threat-silence',
          html:
            'The Danites threaten him with death. Micah has no choice but to turn back. Six hundred soldiers will always win against one man and his neighbors. Micah goes home empty. That is what the pursuit of idolatry costs you: everything you thought made you secure becomes the thing that leaves you defenseless.',
        },
        {
          kind: 'carry',
          html:
            'It is a bitter thing to lose what you thought was yours. But Micah&apos;s gods were never his to keep. He made them; they cost him nothing but wood and metal. The Danites took them, and Micah was left with nothing but the knowledge that his whole religious life was hollow. Sometimes God allows us to lose the false gods we have built, so that we might finally seek the real one.',
        },
      ],
    },

    /* ─── Judges 18:27–31 — Tribal Idolatry Institutionalized ──────────── */
    {
      ref: 'Judges 18:27–31',
      title: 'Idolatry Becomes Tribal Heritage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 27,
              spans: [
                t('And the children of Dan took the graven image which he had made, and the priest which he had, and came unto '),
                hg('Laish', 'laish-conquered'),
                t(', unto a people that were at quiet and secure: and they smote them with the edge of the sword, and burnt the city with fire.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And there was no deliverer, because it was far from Zidon, and they had no business with any man; and it was in the valley that lieth by Beth-rehob. And they built a city, and dwelt therein.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And they called the name of the city '),
                hg('Dan', 'dan-renamed'),
                t(', after the name of Dan their father, who was born unto Israel: howbeit the name of the city was Laish at the first.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'laish-conquered',
          html:
            'The Danites conquer Laish. A defenseless people—careless, without magistrate, without shepherd—are slaughtered. This is the cost of rejecting God as your leader. You do not find an innocent replacement; you become the danger to others.',
        },
        {
          kind: 'commentary',
          id: 'dan-renamed',
          html:
            'They rename Laish to Dan. The city no longer bears the name "Lion"; it bears the name "Judge." But the tribe called Judge has become executioners. A name changes, but the people&apos;s hearts remain untouched by God.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 30,
              spans: [
                t('And the children of Dan set up the graven image: and '),
                hy('Jonathan, the son of Gershom, the son of Manasseh', 'jonathan-moses'),
                t(', he and his sons were priests to the tribe of Dan until the day of the captivity of the land.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And they set them up Micah&apos;s graven image, which he had made, all the time that the house of God was in Shiloh.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'jonathan-moses',
          title: 'Gershom — a name shift',
          script: 'גֵּרְשֹׁם',
          translit: '<strong>gershom</strong> · a sojourner there',
          description:
            'The text says Jonathan is the son of Gershom, son of Manasseh. But the margin note in many manuscripts reads "son of Moses"—for Manasseh is suspiciously similar to "Moses" when the letter is altered. Jonathan is likely the great-grandson of Moses himself. The greatest leader&apos;s descendant has become a priest to an idol.',
        },
        {
          kind: 'commentary',
          id: 'jonathan-gershom',
          html:
            'A haunting detail: Jonathan is the son—or grandson—of Gershom, a name meaning "a sojourner there." Moses named his son this way, saying, "I have been a stranger in a strange land" (Exodus 18:3). Yet here, generations later, Gershom&apos;s descendant has settled into idolatry as if it were home. The greatest leaders&apos; descendants can fall.',
        },
        {
          kind: 'commentary',
          id: 'shiloh-elsewhere',
          html:
            'The final, chilling note: "all the time that the house of God was in Shiloh." While the true tabernacle—God&apos;s true dwelling place—stood in Shiloh, Dan was setting up an idol and calling it their god. Not atheism. Not indifference. Syncretism. A false god, close at hand, instead of the true God, farther away. One man&apos;s homemade religion became a tribe&apos;s inheritance. This is how spiritual drift works.',
        },
        {
          kind: 'reflection',
          id: 'tribal-sin',
          prompt: 'What false god—convenience, comfort, a name, a status—has your whole community begun to serve without calling it by its real name?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'christ',
          id: 'christ-king',
          title: 'Christ Connection — The King Who Calls You Home',
          html:
            'Judges keeps saying "no king in Israel." Jesus offers Himself as that King. Not a hireling. Not a tyrant. "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls" (Matthew 11:28–29). He is the Shepherd (John 10). He is the inheritance (Ephesians 1:3–14). He does not demand that you provide your own spiritual objects, your own priests, your own gods. He gives Himself. And unlike the Danites, who went after their inheritance and lost it, all who come to Him find in Him the inheritance that cannot be taken away.',
        },
        {
          kind: 'carry',
          html:
            'The Danites had a God-given inheritance. They wanted something more tangible, more immediate, something they could see and control. So they stole an idol. So they hired a priest. So they built a whole religious life around objects instead of the one living God. You have been given an inheritance too—the Holy Spirit, the body of Christ, the promises of God. The temptation is the same: to reach for something you can hold in your hands, something that makes you feel powerful right now, instead of waiting for Him. Don&apos;t steal your own gods. Trust the inheritance He has already given you.',
        },
      ],
    },

    /* ─── Judges 18:21–26 — Micah Protests; Dan Warns Him Off ────────────── */
    {
      ref: 'Judges 18:21–26',
      title: 'Micah Confronts Them; Dan Threatens Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 21,
              spans: [
                t('And they turned and departed, and put the little ones and the cattle and the carriage before them.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And when they were a good way from the house of Micah, the men that were in the houses near to Micah&apos;s house were gathered together, and overtook the children of Dan.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they cried unto the children of Dan. And the children of Dan turned their faces, and said unto Micah, '),
                hg('What aileth thee', 'c-micah-outcry'),
                t(', that thou comest with such a company?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-micah-outcry',
          html:
            'Micah has gathered neighbors and come after them. He is not wealthy or powerful—he is just a man who made a shrine and hired a priest, and now both have been taken. His neighbors came with him, perhaps from obligation, perhaps from fear. None of it will matter.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 24,
              spans: [
                t('And Micah said, Ye have taken away my gods which I made, and the priest, and ye are gone away: '),
                hg('and what have I more?', 'c-loss'),
                t(' and how say ye unto me, What aileth thee?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-loss',
          html:
            'Micah&apos;s lament is clear: he has lost everything he worshiped, and the priest he trusted. His question "what have I more?" suggests a man who has poured his life into a false shrine. He is wrong to have made them; but he is right to feel the wound.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 25,
              spans: [
                t('And the children of Dan said unto him, '),
                hp('Let not thy voice be heard among us', 'christ-power-silences'),
                t(', lest '),
                hg('angry fellows run upon thee, and thou lose thy life, with the lives of thy household.', 'c-threat'),
                t(''),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the children of Dan went their way: and when Micah saw that they were too strong for him, he turned and went back unto his own house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-threat',
          html:
            'Dan threatens Micah and his household with death if he speaks again. The tone shifts from deception to outright intimidation. Might is invoked to silence the weak. Micah sees he is outmatched—600 warriors against a small band of neighbors—and turns back. There is no rescue, no divine intervention. He simply goes home, defeated.',
        },
        {
          kind: 'commentary',
          id: 'c-silence',
          html:
            'The command to silence echoes through Scripture: "Let not thy voice be heard among us." Power always wants the weak to be quiet. Here it works. Micah is silenced not by persuasion but by fear.',
        },
        {
          kind: 'carry',
          html:
            'When you speak truth and are met with threats instead of answers, it is easy to assume the threats are justified. Micah turned back not because he was wrong to grieve, but because he was alone and afraid. You may not have an army behind you, but the truth you hold is never smaller because someone threatened you for speaking it.',
        },
        {
          kind: 'reflection',
          id: 'section-4',
          prompt: 'What truth have you been afraid to speak because the cost seemed too high? What would it look like to speak it anyway?',
        },
      ],
    },

    /* ─── Judges 18:27–31 — Dan Destroys Laish and Sets Up the False Priesthood ── */
    {
      ref: 'Judges 18:27–31',
      title: 'Dan Conquers Laish and Establishes False Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 27,
              spans: [
                t('And the children of Dan took the things which Micah had made, and the priest which he had, and came unto Laish, unto a people that were at '),
                hg('quiet and secure', 'c-secure-again'),
                t(': and they '),
                hy('smote them with the edge of the sword', 'c-conquest'),
                t(', and burnt the city with fire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-secure-again',
          html:
            'The description of Laish repeats from verse 7. Their peace and security, which seemed like an invitation to conquest, provided no defense. The city had built no walls, kept no militia, relied on distance from great powers. They were exactly what they seemed: vulnerable.',
        },
        {
          kind: 'commentary',
          id: 'c-conquest',
          html:
            'Dan smites them with the sword. The priest says "go in peace" while the swords fall. This is what the blessing actually covered. The tragedy is not that Laish fought back—they could not. The tragedy is that they were destroyed by a tribe that dressed conquest as calling.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 28,
              spans: [
                t('And there was no deliverer, because it was far from Sidon, and they had no business with any man; and it was in the valley which lieth by Beth-rehob. And they built a city, and dwelt therein.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And they called the name of the city '),
                hg('Dan, after the name of Dan their father', 'c-new-dan'),
                t(': howbeit the name of the city was Laish at the first.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-new-dan',
          html:
            'The city is renamed Dan, as if to claim it completely. It becomes the northern shrine of Israel, marking the phrase "from Dan to Beersheba" as the boundaries of the land. But Dan is built on Laish&apos;s graves, in a valley far from Sidon, isolated and alone.',
        },

        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 30,
              spans: [
                t('And the children of Dan set up the graven image: and '),
                hy('Jonathan, son of Gershom, the son of Manasseh', 'hebrew-jonathan-note'),
                t(', he and his sons were the priests to the tribe of Dan until '),
                hg('the day of the captivity of the land.', 'c-captivity'),
                t(''),
              ],
            },
            {
              number: 31,
              spans: [
                t('And they set up Micah&apos;s graven image, which he made, all the time that the house of God was in Shiloh.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-captivity',
          html:
            'The "captivity of the land" refers to the Assyrian conquest of the Northern Kingdom in 722 BC, roughly 200 years later. Dan&apos;s false priesthood lasted for ten generations—centuries in which the tribe worshiped in defiance of Shiloh and the covenant. The text marks this idolatry as persistent, long-rooted, and finally punished by exile.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-jonathan-note',
          title: 'Jonathan — A Descendant of Moses',
          script: 'יוֹנָתָן',
          translit: '<strong>yonatan</strong> · "Yahweh gave"; the manuscript likely reads "Manasseh" as a cover for "Moses"',
          description:
            'A textual tradition holds that Jonathan was the grandson of Moses himself, whose name was deliberately obscured in copying to spare Moses&apos; reputation. The legacy of the greatest prophet in Israel became the priesthood of idolatry. The fall could not be more complete.',
        },
        {
          kind: 'christ',
          id: 'christ-true-priest',
          title: 'Christ Connection — The True Priest Who Cannot Be Bought',
          html:
            'The Levite was hired by Micah, then hired away by Dan. His priesthood was portable, purchasable, willing to sanctify whatever paid him. Jesus, by contrast, says, &quot;I am the way, the truth, and the life&quot; (John 14:6)—not a way that changes with the highest bidder, but a single immovable center. The author of Hebrews contrasts the old priesthood, which was &quot;after the order of Aaron,&quot; with the new priesthood, which is &quot;after the order of Melchisedek&quot; (Heb. 5:10)—a priest &quot;made… after the power of an endless life,&quot; not subject to death or replacement. In Christ, the priesthood cannot be stolen, the shrine cannot be destroyed, and the truth cannot be bought.',
        },
        {
          kind: 'carry',
          html:
            'The Levite had a title but sold his calling. Dan had numbers but stole their god. Neither had Christ—the unshakeable priest whose authority cannot be compromised by careerism or corroded by time. Whatever shrine you have built—whatever identity you have hung on a hired priest, a titled office, a false belonging—Jesus is teaching you to abandon it and follow the priest who follows no one but His Father.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'section-5',
          prompt: 'Where have you built a shrine to something that felt like belonging but was really only hiring yourself to something broken? What would it cost to abandon it?',
        },
      ],
    },
  ],
};
